---
sidebar_position: 560
---


        - server.port: The port the application will listen on

        - POSTGRES_DB: The name of the database (e.g. aoh)

        - DATABASE_PORT: The port to use to connect to the postgres database

        - spring.datasource.url: The database connection string for the GIS to connect to

        - spring.datasource.username: The username to access the database

        - spring.datasource.password: The password to access the database

        - spring.jpa.properties.hibernate.default_schema: The name of the database schema for the GIS to reside in

        - spring.liquibase.default-schema: The name of the database schema for the GIS to reside in

        - spring.liquibase.change-log: Liquibase changelog for schema versioning

        - gis.iams.aas.url: The URL to the IAMS AAS service - used in the future for authorization

        - gis.keycloak.url: The URL to the IAM service (keycloak) for authentication

        - gis.active-tenant.claim-key: Configurable key to put the active tenant claim in

        - gis.rtus.url: The URL to the RTUS PMS service - to push updates to

        - gis.rtus.map_name: The name of the RTUS PMS map to use


