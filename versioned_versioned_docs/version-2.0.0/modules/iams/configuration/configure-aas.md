---
sidebar_position: 2
sidebar_label: IAMS-AAS Container Configuration
---

This section explained the environment variables used in the `Docker Compose` configuration file to initialize IAMS-AAS.

| Environment Variable             | Description                                                                                                                                                                                                       |
| -------------------------------  | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IAMS_KEYCLOAK_BASEURL            | The URL to access the Keycloak.                                                                                                                                               |
| IAMS_KEYCLOAK_SYSADMIN_ROLE      | The realm role representing system administrator. Default is `system-admin` and can be modified. See [Manual Keycloak Realm Setup](./manual-keycloak-realm-setup/overview.md) for more information.|
| IAMS_KEYCLOAK_TENANTADMIN_ROLE   | The realm role representing tenant administrator. Default is `tenant-admin` and can be modified. See [Manual Keycloak Realm Setup](./manual-keycloak-realm-setup/overview.md) for more information.| 
| SERVER_ERROR_INCLUDE_MESSAGE     | Whether to include server error in the REST error message. Default is `always` which will alway include. Can disabled by specifying `never`.                                  |
| SERVER_PORT                      | Port to listen for request. Default is 8080.                                                                                                                                  |
| MANAGEMENT_HEALTH_PROBES_ENABLED | Whether to enable the health check endpoint. It is enabled by default when deployed in Kubernetes.                                                                            |
| LOGGING_LEVEL_ROOT               | Logging level. Default is INFO. Possible values are: ERROR, WARN, INFO, DEBUG, or TRACE                                                                                       |

