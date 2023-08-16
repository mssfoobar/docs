---
sidebar_position: 3
---

# General Development

## Service Endpoints

Services often need to call other services, and this is almost always done with endpoints (URL's). Since these URL's
can change, we store them in a table in the database (in the future, we might have a more sophisticated service
discovery mechanism, but for now, we register services to a table in the database and all services should call retrieve
service endpoints from this table - `aoh_system.endpoint`).

## Accessing the table

Minimally, your services will still need to take in environment variables to connect to the data endpoint that provides
the service endpoints, and also connect to the IAM server to retrieve your access token to grant you access to the
system - so these items must still be passed to your service in some configurable way - likely environment variables:

-   Identity Access Management server URL
-   Identity Access Management client credentials (client ID and secret)
-   Data Endpoint URL (we use Hasura so it is a GraphQL endpoint URL)

For details on how to connect to Keycloak to retrieve the access token, go to the [IAM section](/docs/iam/introduction).
