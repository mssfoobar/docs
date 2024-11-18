---
sidebar_position: 568
---

# Configure ian-web
- 

            - OIDC_ALLOW_INSECURE_REQUESTS: This flag allows the OIDC client to make insecure requests. You must concsciously override it in production if your backend services do not communicate to each other via HTTPS (this web server to other backend services)

            - PORT: The port the application will listen on

            - IAM_URL: The URL to the IAM service (keycloak) for authentication

            - IAM_CLIENT_ID: The client ID for the Keycloak client for this service
            - IAM_CLIENT_SECRET: The client secret for the Keycloak client for this service, used to authenticate with Keycloak
            - PUBLIC_DOMAIN:  The domain settings for the cookies
            - PUBLIC_SECURE_MODE:  The security settings for the cookies, set to string "0" for false, anything else for true
            - LOGIN_DESTINATION: The URL to send the user to after login (currently must not have leading slash)
            - LOGIN_PAGE: login destination of the web-base
            - ORIGIN: The ORIGIN of the server, to understand how to route the user appropriately
            - IAN_URL: The internal URL to the ian backend service (ian-app)
            - PUBLIC_RTUS_SEH_URL: The external URL for the browser to connect to the SSE provider (RTUS SEH)

