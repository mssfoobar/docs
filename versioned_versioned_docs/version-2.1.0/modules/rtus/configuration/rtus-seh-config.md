---
sidebar_position: 1
sidebar_label: RTUS-SEH Container Configuration
---

#	RTUS-SEH Container Configuration

This section explained the **environment variables** used in the `Docker Compose` configuration file to initialize **RTUS-SEH**.

| Environment Variable	   | Description |
| -----------------------  | ----------  |
| SERVER_ERROR_INCLUDE_MESSAGE  | Whether to include server error in the REST error message. Default is always which will alway include. Can disabled by specifying `never`.                                                                                                                                 |    
| RTUS_CLUSTERNAME	            | The name of the Hazelcat cluster used to communicate with RTUS-SEH                                     |   
| RTUS_SERVICE-NAME	            | The service name to use to lookup RTUS-PMS                                                             |
| RTUS_SSE_KEEPALIVE_INTERVAL   | How frequent to send the SSE keep alive message                                                        | 
| RTUS_KEYCLOAK_URL             | The URL to connect to Keycloak                                                                         |
| RTUS_ACTIVE-TENANT_CLAIMNAME  | The claim name in Access Token that contains the active tenant value                                   |
| RTUS_IAMS_AAS_URL             | The URL to connect to IAMS-AAS                                                                         |
| RTUS_ACCESS-TOKEN_COOKIENAMES | The cookie name to use to retrieve the access token                                                    |
| SERVER_PORT                   | Port to listen for request. Default is 8080                                                            |
| SERVER_HTTP2_ENABLED          | Whether to enable HTTP2 support                                                                        |
| KUBERNETES_SERVICE_HOST       | Whether the container is deployed in Docker or Kubernetes environment                                  |
| RTUS_TOPIC_READ-BATCH-SIZE    | Minimum number of messages that Reliable Topic tries to read in batches. Its default value is 10.      |
