---
sidebar_position: 582
---

AOH_rnr (To be updated)



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

      - msgop

        - LOG_LEVEL: log level

        - VERSION: app version

        - NATS_URL
          value: aoh_rnr:s3cr3t@nats-wfm-qa.common-msg:4222
        - NATS_DEBEZIUM_STREAM
          value: DebeziumStream
        - NATS_DEBEZIUM_SUBJECT
          value: aoh.aoh_sys.postgres.*.*
        - NATS_EVENT_STREAM
          value: EventStream
        - NATS_EVENT_SUBJECT
          value: aoh_rnr.replay
        - NATS_CONSUMER
          value: MsgOpConsumer

        - REPLAY_POSTGRES_HOST
          value: replay-postgres.common-rnr
        - REPLAY_POSTGRES_PORT
          value: "5432"
        - REPLAY_POSTGRES_DATABASE
          value: ar2
        - REPLAY_POSTGRES_USER
          value: postgres
        - REPLAY_POSTGRES_PASSWORD
          value: postgres

        - REPLAY_INTERVAL_IN_SECOND
          value: "10s"
        - REPLAY_MSG_BUFFER_SIZE 
          value: "10"
        - SYSTEM_SCHEMA_NAME
          value: aoh_sys
          
        - ENABLE_USING_PROCESSING_DB
          value: "true"
        - SQL_STMT_BATCH_SIZE
          value: "1000"
        - PROCESSING_POSTGRES_HOST
          value: database-5.cz6iw4ykg6b2.ap-southeast-1.rds.amazonaws.com
        - PROCESSING_POSTGRES_PORT
          value: "5432"
        - PROCESSING_POSTGRES_DATABASE
          value: transform
        - PROCESSING_POSTGRES_USER
          value: postgres
        - PROCESSING_POSTGRES_PASSWORD
          value: Szd4E2WvGfIHpHU#
        - PROCESSING_POSTGRES_SCHEMA
          value: transform_message
           
          
          
          
          
      - transformmsg
        imagePullPolicy: Always
        # image: ghcr.io/mssfoobar/ar2-rnr_msgop:latest
        image: ghcr.io/mssfoobar/ar2-rnr_transformmsg:develop-591d657
        #image: 891377050246.dkr.ecr.ap-southeast-1.amazonaws.com/ar2-rnr/msgop:0.0.0
        #
        #command: [ "sleep", "99999" ]

        env:
        - NATS_URL
          value: aoh_rnr:s3cr3t@nats-wfm-qa.common-msg:4222
        - NATS_DEBEZIUM_SUBJECT
          value: aoh.aoh_sys.postgres
        - NATS_DEBEZIUM_STREAM
          value: DebeziumStream
        - NATS_CONSUMER
          value: transform_msg_consumer
        - NATS_STORAGE_TYPE
          value: "0"
        - VERSION
          value: "1.0.0"
     
          
#processing db
        - SQL_HOST
          value: database-5.cz6iw4ykg6b2.ap-southeast-1.rds.amazonaws.com
        - SQL_PORT
          value: "5432"
        - SQL_DATABASE_NAME
          value: transform
        - SQL_USER
          value: postgres
        - SQL_PASSWORD
          value: Szd4E2WvGfIHpHU#
        - SQL_SCHEMA_NAME
          value: transform_message 
        - SQL_SSL_MODE
          value: "false"       

        # - REPLAY_INTERVAL_IN_SECOND
          # value: "10s"
        # - REPLAY_MSG_BUFFER_SIZE 
          # value: "10"
        # - SYSTEM_SCHEMA_NAME
          # value: aoh_sys


      - dbop
        image: ghcr.io/mssfoobar/ar2-rnr_dbop:develop-65b7f8f
        volumeMounts:
          - script
            mountPath: "/script"
        command: [ "/app/dbop" ]

        env:
        - VERSION
          value: 1.4.0
        - LOG_LEVEL
          value: trace

        - NATS_URL
          value: aoh_rnr:s3cr3t@nats-wfm-qa.common-msg:4222
        - NATS_EVENT_STREAM
          value: EventStream
        - NATS_EVENT_SUBJECT
          value: aoh_rnr.replay
        - NATS_CONSUMER
          value: DbOpConsumer

        - APP_DB_INIT
          value: /script/db_init
        - APP_DB_END
          value: /script/db_end

        - REPLAY_POSTGRES_HOST
          value: replay-postgres.common-rnr
        - REPLAY_POSTGRES_PORT
          value: "5432"
        - REPLAY_POSTGRES_DATABASE
          value: ar2
        - REPLAY_POSTGRES_META_DATABASE
          value: ar2_reader
        - REPLAY_POSTGRES_USER
          value: postgres #TBD
        - REPLAY_POSTGRES_PASSWORD
          value: postgres #TBD

        - LOOKUP_POSTGRES_USER
          value: postgres #TBD
        - LOOKUP_POSTGRES_PASSWORD
          value: postgres #TBD
        - LOOKUP_POSTGRES_HOST
          #value: "database-8.cluster-cf7tpuu3qut5.ap-southeast-1.rds.amazonaws.com"
          value: "ar2-postgres-dbz-postgresql.ar2"
        - LOOKUP_POSTGRES_PORT
          value: "5432"
        - LOOKUP_POSTGRES_DATABASE
          #value: "postgres"
          value: "ar2"
        - REPLAY_HASURA_URL
          value: "http://replay-hasura.common-rnr" #NOTE! Use internal name for rnr to reload hasura metadata
        - REPLAY_HASURACOOKIE_URL
          value: "http://replay-hasuracookie.common-rnr" #NOTE! Use internal name for rnr to reload hasuracookie metadata
        - REPLAY_HASURA_ADMIN_SECRET
          valueFrom:
            secretKeyRef:
              name: common-rnr-secret
              key: replay_hasura_admin_secret
        - MINIO_USER
          valueFrom:
            secretKeyRef:
              name: minio-secret---common-rnr
              key: minio_user_access_key
        - MINIO_PASSWORD
          valueFrom:
            secretKeyRef:
              name: minio-secret---common-rnr
              key: minio_user_secret_key
        resources: {}
      volumes:
        - script
          configMap:
            name: dbop-helper-configmap
            defaultMode: 0500
