---
sidebar_position: 562
---

# IAMS
    - IAMS_KEYCLOAK_BASEURL: keycloak URL endpoint to connect to 
   
       - IAMS_KEYCLOAK_SYSADMIN_ROLE: role set within keycloak 
       
       - IAMS_KEYCLOAK_TENANTADMIN_ROLE: tenant admin role within keycloak

       - server.error.include-message; whether to include server error message inside the logs 


#keycloak
       - DEFAULT_REALM: default realm used for iams

        - KC_DB: keycloak database type

        - KC_DB_URL_DATABASE: keycloak database url endpoint

        - KC_DB_USERNAME: user name to use for database

        - KC_DB_PASSWORD: password to use for database

        - KC_DB_URL_HOST:keycloak database URL for keycloak to connect to

        - KC_DB_URL_PORT: database port for keycloak to connect to
          
        - KC_HTTP_ENABLED: whether http is enabled for connections
          
        - KEYCLOAK_ADMIN : admin user name
          
        - KEYCLOAK_ADMIN_PASSWORD: admin user password
          
        - KC_HOSTNAME: URL which keycloak will serve API services over

        - KC_HOSTNAME_BACKCHANNEL_DYNAMIC: whether back channel is switched on for backend services
          
        - KC_HTTP_PORT: keycloak ports for applicatons to connect to
   
        - KC_HEALTH_ENABLED: wehter health probes will be switched on

        - KC_HOSTNAME_ADMIN: back end API URL for backend services 

#postgres

- ports: postgres port for applications to connect to
