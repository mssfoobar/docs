---
sidebar_position: 558
---


        - server.port: The port the application will listen on

        - POSTGRES_DB: The name of the database (e.g. aoh)

        - DATABASE_PORT: The port to use to connect to the postgres database

        - spring.datasource.url: The database connection string for the GIS to connect to
          value: jdbc:postgresql://ar2-postgres-dbz-postgresql.ar2:5432/gis?currentSchema=gis
            # The username to access the database
        - spring.datasource.username
          valueFrom:
            secretKeyRef:
              name: gis-secret
              key: gis_postgres_user
            # The password to access the database
        - spring.datasource.password
          valueFrom:
            secretKeyRef:
              name: gis-secret
              key: gis_postgres_password
            # The name of the database schema for the GIS to reside in
        - spring.jpa.properties.hibernate.default_schema
          value: gis
          # The name of the database schema for the GIS to reside in
        - spring.liquibase.default-schema
          value: gis
          # Liquibase changelog for schema versioning
        - spring.liquibase.change-log
          value: db/changelog/db.changelog-master.xml
          # The URL to the IAMS AAS service - used in the future for authorization
        - gis.iams.aas.url
          value: http://iams-aas.iams:8080
          # The URL to the IAM service (keycloak) for authentication
        - gis.keycloak.url
          value: http://iams-keycloak.iams:8080
          # Configurable key to put the active tenant claim in
        - gis.active-tenant.claim-key
          value: active_tenant
          # The URL to the RTUS PMS service - to push updates to
        - gis.rtus.url
          value: http://rtus-pms.rtus:8080
          # The name of the RTUS PMS map to use
        - gis.rtus.map_name
          value: gis
          ports:
            - http
              containerPort: 5000

