---
sidebar_position: 1
sidebar_label: RTUS-PMS Container Configuration
---

#	RTUS-PMS Container Configuration

This section explained the `environment variables` used in the `Docker Compose` configuration file to initialize **RTUS-PMS**.

| Environment Variable                          | Description                                                                                       |
| --------------------                          | ------------------------------------------------------------------------------------------------- |
| SERVER_PORT                                   | Port to listen for request. Default is 8080.                                                      |
| SERVER_ERROR_INCLUDE_MESSAGE                  | Whether to include server error in the REST error message. Default is always which will 
alway include. Can disabled by specifying never.                                                                                                    |
| SPRING_DATASOURCE_URL                         | The JDBC connection string to the database                                                        |
|SPRING_DATASOURCE_USERNAME                     | The username of the database user                                                                 |
|SPRING_DATASOURCE_PASSWORD	                    | The password of the database user                                                                 |
|SPRING_JPA_DATABASE-PLATFORM                   | The database dialect to use                                                                       |
|SPRING_JPA_PROPERTIES_HIBERNATE_DEFAULT_SCHEMA | The database schema to use by Hibernate                                                           |
|SPRING_LIQUIBASE_DEFAULT-SCHEMA                | The database schema to use by liquibase. Should be the same as the one use by Hibernate           | 
|RTUS_CLUSTERNAME                               | The name of the Hazelcat cluster used to communicate with RTUS-SEH                                |   
|RTUS_SERVICE-DNS_ENABLE                        | Whether to enable Hazelcast member discovery using DNS Lookup. You should enable it when 
deploying RTUS in Docker or Kubernetes                                                                                                              |
|RTUS_SERVICE-DNS                               | The name of the DNS service to use for lookup                                                     |
|RTUS_SERVICE-DNS-TIMEOUT                       | Custom time for how long the DNS Lookup is checked                                                |
|RTUS_SERVICE-PORT                              | The Hazelcast port to use for member communication                                                |
|RTUS_ADMIN_SECURITY_ROLES                      | The roles that allow to configure security of Map, User Value Map, and Topic                      |
|RTUS_KEYCLOAK_URL	                            | The URL to connect to Keycloak                                                                    |
|RTUS_ACTIVE-TENANT_CLAIMNAME                   | The claim name in Access Token that contains the active tenant value                              |
|RTUS_TOPIC_TIME-TO-LIVE-SECONDS                | How long an event to stay in Topic before been removed                                            |
|RTUS_TOPIC_CAPACITY                            | The maximum number of event a Topic can hold.                                                     |

            
