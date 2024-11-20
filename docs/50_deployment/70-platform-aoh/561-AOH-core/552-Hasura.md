---
sidebar_position: 551
---

# Configure Hasura

- HASURA_GRAPHQL_DATABASE_URL : DB endpoint
        
- HASURA_GRAPHQL_ENABLE_CONSOLE: enable the console served by server
      
- HASURA_GRAPHQL_DEV_MODE: enable debugging mode. It is recommended to disable this in production

- HASURA_GRAPHQL_ENABLED_LOG_TYPES : added this for jwt with keycloak (startup, http-log, webhook-log, websocket-log, query-log)
          
- HASURA_GRAPHQL_UNAUTHORIZED_ROLE : role for unauthorized roles
         
- HASURA_GRAPHQL_ADMIN_SECRET: access key
        
        
- HASURA_GRAPHQL_CORS_DOMAIN: cors domain, extend with comma separation (e.g. "*")

- HASURA_GRAPHQL_JWT_SECRET: place jwt mode here. Refer to https://hasura.io/docs/2.0/auth/authentication/jwt/ 

- HASURA_GRAPHQL_LOG_LEVEL: log level 

- HASURA_GRAPHQL_ADMIN_INTERNAL_ERRORS: display internal error (boolean)
