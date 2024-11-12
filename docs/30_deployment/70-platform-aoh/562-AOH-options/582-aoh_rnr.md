---
sidebar_position: 582
---

#AOH_rnr (To be updated)

#ar2-rnr_replaymgr

        - LOG_LEVEL: current log level

        - VERSION: app version

        - APP_PORT: app port which the api will be exposed at

        - DEFAULT_REPLAY_DURATION: default replay duration after loading selection

        - DB_SNAPSHOT_RETENTION_IN_DAY: DB snapshot to retain inside the databse

        - VALID_MIN_REPLAY_SPEED : replay minimum allowed speed

        - VALID_MAX_REPLAY_SPEED : replay maximum allowed speed

        - POSTGRES_HOST: operation database endpoint

        - POSTGRES_PORT: operation database port

        - POSTGRES_DATABASE: name of operation database

        - POSTGRES_SCHEMA: schema used by the rnr operation 

        - POSTGRES_USER: service account used by the rnr operation

        - POSTGRES_PASSWORD: password used by the service account of the rnr operation

        - POSTGRES_MIGRATION_URL: migration file location (Do not change)


        - NATS_URL: nats endpoint (name:password@yourendpoint.yourdomain:port)
        - NATS_EVENT_STREAM: event stream name
        - NATS_EVENT_SUBJECT: event stream subject
        - NATS_CONSUMER: nats consumer nsame

  #msgop

        - LOG_LEVEL: log level

        - VERSION: app version

        - NATS_URL: nats endpoint (name:password@yourendpoint.yourdomain:port)
        - NATS_DEBEZIUM_STREAM: nats stream for debezium
        - NATS_DEBEZIUM_SUBJECT: nats subject for debezium stream
        - NATS_EVENT_STREAM: nats event for debezium event stream 
        - NATS_EVENT_SUBJECT: nats event subject for debezium event steram
        - NATS_CONSUMER: nats consumer name

        - REPLAY_POSTGRES_HOST: replay database endpoint
        - REPLAY_POSTGRES_PORT: replay database port
        - REPLAY_POSTGRES_DATABASE: replay database name

        - REPLAY_POSTGRES_USER: replay user name 
        - REPLAY_POSTGRES_PASSWORD: replay user password


        - REPLAY_INTERVAL_IN_SECOND: replay interval setting in seconds

        - REPLAY_MSG_BUFFER_SIZE :size of buffer
        - SYSTEM_SCHEMA_NAME: system schema name used for msgop          
        - ENABLE_USING_PROCESSING_DB: processing DB setting, for whether to use the processing database for RNR
        - SQL_STMT_BATCH_SIZE: sql message batch size used for transformation service
        - PROCESSING_POSTGRES_HOST: message processing database endpoint
        - PROCESSING_POSTGRES_PORT: message processing database port
        - PROCESSING_POSTGRES_DATABASE:message processing database name
        - PROCESSING_POSTGRES_USER : message processing database user
        - PROCESSING_POSTGRES_PASSWORD: message processing database password
        - PROCESSING_POSTGRES_SCHEMA: message processing schema name
           
#transformmsg

        - NATS_URL: nats endpoint (name:password@yourendpoint.yourdomain:port)
        - NATS_DEBEZIUM_SUBJECT:  nats subject for debezium stream
        - NATS_DEBEZIUM_STREAM: nats stream for debezium
        - NATS_CONSUMER: nats consumer name
        - NATS_STORAGE_TYPE:  (0: file, 1: memory)
        - VERSION: app version
     
          
        - SQL_HOST: processing database endpoint
        - SQL_PORT: processing  database port
        - SQL_DATABASE_NAME: processing  database name
        - SQL_USER: processing database user
        - SQL_PASSWORD: processing database password
        - SQL_SCHEMA_NAME: schema name
        - SQL_SSL_MODE: ssl mode to DB connection         



#dbop

        - VERSION: app version
        - LOG_LEVEL: log level

        - NATS_URL: nats endpoint (name:password@yourendpoint.yourdomain:port)
        - NATS_EVENT_STREAM: nats event for debezium event stream
        - NATS_EVENT_SUBJECT
          value: aoh_rnr.replay
        - NATS_CONSUMER
          value: DbOpConsumer

        - APP_DB_INIT: DB init script location (do not change)
        - APP_DB_END: db end script location (do not change)

        - REPLAY_POSTGRES_HOST: replay database endpoint
        - REPLAY_POSTGRES_PORT: replay database port
        - REPLAY_POSTGRES_DATABASE: replay database database name
        - REPLAY_POSTGRES_META_DATABASE: replay  meta operation database name
        - REPLAY_POSTGRES_USER: replay database user name 
        - REPLAY_POSTGRES_PASSWORD: replay database user password



        - LOOKUP_POSTGRES_USER:  operation database user name
        - LOOKUP_POSTGRES_PASSWORD:  operation databaseuser password
        - LOOKUP_POSTGRES_HOST:   operation database user database endpoint
        - LOOKUP_POSTGRES_PORT:  operation database user database port
        - LOOKUP_POSTGRES_DATABASE:  operation  database name

        - REPLAY_HASURA_URL:internal name for rnr to reload hasura metadata
        - REPLAY_HASURACOOKIE_URL: Use internal name for rnr to reload hasuracookie metadata
        - REPLAY_HASURA_ADMIN_SECRET: hasura acces key
        - MINIO_USER: bucket user key
        - MINIO_PASSWORD: bucket private key

