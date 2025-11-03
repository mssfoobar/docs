-- Bulk CDC Event Generator
-- This script generates CDC events across multiple days with multiple runs per day
--
-- Parameters:
--   p_start_date: Starting date (e.g., '2025-07-10')
--   p_total_days: Number of days to generate data for
--   p_runs_per_day: Number of times to run per day (default: 20)
--   p_unique_entities_total: Total unique entities in DB (default: 200000)
--
-- Example: For start_date='2025-07-10', total_days=10, 200k entities:
--          - 200k unique entities total (cpos.flight-1 to cpos.flight-200000)
--          - Each day: same 200k entities × 20 runs = 4M events/day
--          - Total: 40M events across 10 days

DO $$
DECLARE
    p_start_date date := '2025-10-01';          -- CHANGE THIS: Starting date
    p_total_days integer := 30;                   -- CHANGE THIS: Number of days
    p_runs_per_day integer := 20;                -- Number of runs per day
    p_unique_entities_total integer := 200000;   -- Total unique entities in DB

    v_current_date date;
    v_day_counter integer;
    v_run_counter integer;
    v_total_inserted bigint := 0;
    v_batch_inserted bigint;
    v_start_time timestamp;
    v_end_time timestamp;
BEGIN
    v_start_time := clock_timestamp();

    RAISE NOTICE '========================================';
    RAISE NOTICE 'Starting bulk CDC event generation';
    RAISE NOTICE 'Start Date: %', p_start_date;
    RAISE NOTICE 'Total Days: %', p_total_days;
    RAISE NOTICE 'Unique Entities (Total in DB): %', p_unique_entities_total;
    RAISE NOTICE 'Runs per Day: %', p_runs_per_day;
    RAISE NOTICE 'Events per Day: %', p_unique_entities_total * p_runs_per_day;
    RAISE NOTICE 'Total Events Expected: %', p_total_days * p_runs_per_day * p_unique_entities_total;
    RAISE NOTICE '========================================';

    -- Loop through each day
    FOR v_day_counter IN 0..(p_total_days - 1) LOOP
        v_current_date := p_start_date + v_day_counter;
        RAISE NOTICE 'Processing date: % (Day % of %)', v_current_date, v_day_counter + 1, p_total_days;

        -- Run 20 times for this day
        FOR v_run_counter IN 1..p_runs_per_day LOOP

            -- Generate and insert events for this run
            WITH RECURSIVE
            config AS (
                SELECT
                    v_current_date::timestamptz AS start_time,
                    (v_current_date::timestamptz + interval '1 day') AS end_time,
                    p_unique_entities_total AS total_events
            ),
            event_sequence AS (
                SELECT 1 AS seq_num
                UNION ALL
                SELECT seq_num + 1
                FROM event_sequence
                WHERE seq_num < (SELECT total_events FROM config)
            ),
            location_data AS (
                SELECT
                    seq_num,
                    (ARRAY['SIA', 'QF', 'BA', 'LH', 'AF', 'KL', 'CX', 'EK', 'TG', 'MH'])[1 + (seq_num % 10)] AS airline_code,
                    CASE (seq_num % 10)
                        WHEN 0 THEN ARRAY[103.994003, 1.359211]   -- Singapore Changi
                        WHEN 1 THEN ARRAY[151.177222, -33.946111] -- Sydney Kingsford
                        WHEN 2 THEN ARRAY[-0.461941, 51.4775]     -- London Heathrow
                        WHEN 3 THEN ARRAY[8.570556, 50.033056]    -- Frankfurt
                        WHEN 4 THEN ARRAY[2.55, 49.009722]        -- Paris CDG
                        WHEN 5 THEN ARRAY[4.763889, 52.308056]    -- Amsterdam Schiphol
                        WHEN 6 THEN ARRAY[113.914603, 22.308919]  -- Hong Kong
                        WHEN 7 THEN ARRAY[55.364444, 25.252778]   -- Dubai
                        WHEN 8 THEN ARRAY[100.747, 13.681]        -- Bangkok Suvarnabhumi
                        ELSE ARRAY[101.709917, 2.745578]           -- Kuala Lumpur
                    END AS coordinates
                FROM event_sequence
            ),
            test_events AS (
                SELECT
                    es.seq_num,
                    'cpos.flight-' || es.seq_num AS entity_id,

                    cfg.start_time + (
                        (cfg.end_time - cfg.start_time) *
                        (es.seq_num - 1)::numeric / (cfg.total_events - 1)::numeric
                    ) AS event_timestamp,

                    'r' AS op,
                    'cpos.flight' AS table_name,

                    jsonb_build_object(
                        'id', 'cpos.flight-' || es.seq_num,
                        'geojson', jsonb_build_object(
                            'type', 'Feature',
                            'geometry', jsonb_build_object(
                                'type', 'Point',
                                'coordinates', jsonb_build_array(
                                    ld.coordinates[1] + (random() - 0.5) * 0.1,
                                    ld.coordinates[2] + (random() - 0.5) * 0.1
                                )
                            ),
                            'properties', jsonb_build_object(
                                'painted_as', ld.airline_code,
                                'operating_as', ld.airline_code
                            )
                        )::text,
                        'occ_lock', 100000 + (es.seq_num % 500000),
                        'tenant_id', 'c9ea7804-a606-49f5-95f5-c73f3ca88265',
                        'created_at', (cfg.start_time - interval '30 days' +
                                     random() * interval '30 days')::timestamp || 'Z',
                        'created_by', 'c7342511-5471-4386-b65f-6459f977cae9',
                        'updated_at', (cfg.start_time +
                                     ((es.seq_num - 1)::numeric / cfg.total_events) * interval '1 day')::timestamp || 'Z',
                        'updated_by', 'c7342511-5471-4386-b65f-6459f977cae9',
                        'entity_type', 'track'
                    ) AS entity_state
                FROM event_sequence es
                CROSS JOIN config cfg
                JOIN location_data ld ON es.seq_num = ld.seq_num
            )
            INSERT INTO msr.cdc_event (entity_id, entity_state, op, event_timestamp, table_name)
            SELECT
                entity_id,
                entity_state,
                op,
                event_timestamp,
                table_name
            FROM test_events
            ORDER BY event_timestamp;

            -- GET DIAGNOSTICS v_batch_inserted = ROW_COUNT;
            -- v_total_inserted := v_total_inserted + v_batch_inserted;

            -- IF v_run_counter % 5 = 0 THEN
            --     RAISE NOTICE '  Run %/% completed - Inserted: % events',
            --         v_run_counter, p_runs_per_day, v_batch_inserted;
            -- END IF;

        END LOOP;

        RAISE NOTICE '✓ Day % completed - Total for this day: % events (% entities × % runs)',
            v_day_counter + 1, p_runs_per_day * p_unique_entities_total,
            p_unique_entities_total, p_runs_per_day;
        RAISE NOTICE '----------------------------------------';

    END LOOP;

    v_end_time := clock_timestamp();

    RAISE NOTICE '========================================';
    RAISE NOTICE 'Bulk generation completed!';
    -- RAISE NOTICE 'Total events inserted: %', v_total_inserted;
    RAISE NOTICE 'Time taken: %', v_end_time - v_start_time;
    RAISE NOTICE '========================================';

END $$;
