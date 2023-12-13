---
sidebar_position: 10
---

# 🆕 Introduction

This section provides detailed information on how you can get started developing on AGIL Ops Hub.

It includes how to:

-   Create a new service
-   Containerize a service
-   Get your service ready for deployment
-   Set up new infrastructure for your project

This applies to all services in general, however, it is common that when you develop a new module/service, it
will require some associated front-end components, such as pages or views associated with your new module. Developing
on the web has its entire own section, which you can refer to here: [Web Development](/docs/40_web/05_introduction.md)

section.

## Service Endpoints

Services often need to call other services, and this is almost always done with endpoints (URL's). Since these URL's
can change, we store them in a table in the database (in the future, we might have a more sophisticated service
discovery mechanism, but for now, we register services to a table in the database and all services should call retrieve
service endpoints from this table - `aoh_system.endpoint`).

## Accessing the database

Minimally, your services will still need to take in environment variables to connect to the data endpoint that provides
the service endpoints, and also connect to the IAM server to retrieve your access token to grant you access to the
system - so these items must still be passed to your service in some configurable way - likely environment variables:

-   Identity Access Management server URL
-   Identity Access Management client credentials (client ID, secret and realm)
-   Data Endpoint URL (we use Hasura so it is a GraphQL endpoint URL)

For details on how to connect to Keycloak to retrieve the access token, go to the [IAM section](/docs/iam/introduction).

Alternatively - our services development guide contains source code that retrieves the token (which you will probably
be copying).
