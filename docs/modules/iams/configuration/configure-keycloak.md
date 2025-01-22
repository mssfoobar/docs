---
sidebar_position: 1
sidebar_label: IAMS-Keycloak Container Configuration
---

# Keycloak Container Configuration

This section explained the environment variables used in the `Docker Compose` configuration file to initialize IAMS-Keycloak. 

For the full list of available environment variables, please refer to official Keycloak Documentation:
https://www.keycloak.org/server/all-config


| Environment Variable            | Description                                                                                                                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KC_BOOTSTRAP_ADMIN_USERNAME     | The username of the default bootstrap administrator.                                                                                                                          |
| KC_BOOTSTRAP_ADMIN_PASSWORD     | The password of the default administrator.                                                                                                                                    |
| KC_DB                           | The database type to be used to store the data. Default value is `postgres`. Change this value if you wish to use other database.                                             |
| KC_DB_URL_DATABASE              | The name of the database to use. The default value match the `iams`.                                                                                                          |
| KC_DB_USERNAME                  | The username of the database user.                                                                                                                                            |
| KC_DB_PASSWORD                  | The password of the database user.                                                                                                                                            |
| KC_DB_URL_HOST                  | The host URL of the database.                                                                                                                                                 |
| KC_DB_URL_PORT                  | The port number to access the database.                                                                                                                                       |
| KC_HTTP_ENABLED                 | Enable HTTP. The default value allow iams-keycloak to be access via HTTP.                                                                                                     |
| KC_HOSTNAME                     | The URL to access the iams-keycloak.                                                                                                                                          |
| KC_HOSTNAME_BACKCHANNEL_DYNAMIC | Whether to allow the backchannel URL to be the same as the frontchannel URL (URL specified in KC_HOSTNAME). The backchannel is used by IAMS-AAS to communicate with IAMS-Keycloak. This value should set to true. |
| KC_HTTP_PORT                    | The HTTP port number to use.                                                                                                                                                  |
| KC_HEALTH_ENABLED               | Whether to enable the liveness and readiness probe endpoints. This value should set to true.                                                                                  |
| KC_PROXY_HEADERS                | The proxy headers that should be accepted by the server. Value depend on whether proxy/ingress being used.                                                                    |


The following environment variables are used by the `Docker Compose` file and not defined by Keycloak:

| Environment Variable            | Description                                                                                                                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DEFAULT_REALM                   | The name of the realm to be created during initialization. It will override the realm name value in the realm-import.json file.                                               |
| DEV_DOMAIN                      | To override the URL values in realm-import.json                                                                                                                               |
| DEV_USER                        | To override the username of the default system admin in realm-import.json                                                                                                     |
| DEV_PASSWORD                    | To override the password of the default system admin in realm-import.json                                                                                                     |


