---
sidebar_position: 585
---

ptmgr

        - LOG_LEVEL: log level
        - APP_PORT: port where the api is served/exposed
        - TOKEN_LIFETIME_IN_DAY: set number of days the token will expire
        - SQL_USER: user/service account of the operation database that the ptmgr wil be using
        - SQL_PASSWORD: user/service account password of the operation database that the ptmgr wil be using
        - SQL_PLUGIN_NAME: database type that the SQL server being connected to
        - SQL_HOST: Databse URL/endpoint
        - SQL_PORT: Databse port
        - SQL_DATABASE_NAME: database name the ptmgr will be using
        - SQL_SCHEMA_NAME: schema name the ptmgr will be using
        - SQL_MAX_CONNS: maximum connections to use for requests.(check with Database vendor to optimise this value) 
        - SQL_MAX_IDLE_CONNS: maximum idle connections to maintain while that is no request.  (check with Database vendor to optimise this value) 
        - SQL_MAX_CONN_LIFETIME: maximum connection lifetime for connections to maintain connection. (check with Database vendor to optimise this value) 

        - IAMS_AAS_HOST: iams_aas URL/endpoint
        - IAMS_AAS_PORT: port to connect to  the iams_aas 
        - IAMS_KEYCLOAK_HOST: iams keycloak URL/endpoint
        - IAMS_KEYCLOAK_PORT: iams keycloak port to connect to
        - IAMS_KEYCLOAK_REALM: realm to use for when connecting to the iams-keycloak
        - IAMS_KEYCLOAK_CLIENT_ID: ID to use when connecting to the iams-keycloak
        - IAMS_KEYCLOAK_CLIENT_SECRET: access key used to connect to the iams-keycloak
