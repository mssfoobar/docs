---
sidebar_position: 2
sidebar_label: Backend
---

# Backend Technologies

## Technology List

The following is a _non-exhaustive_ list of technologies chosen to support backend development on our platform.

-   [Keycloak](#keycloak) : Identity and access management, as well as authorization.
-   [Temporal](#temporal) : Microservice orchestration framework.
-   [Open API](#open-api) : HTTP API specification standard.
-   [Tile38](#tile38) : Geofencing server.
-   [PostgreSQL](#postgresql) : Relational database.

#### Other Notable Libraries:

-   [Pion](https://github.com/pion/webrtc) : Open-source Golang implementation of WebRTC.
-   [Golang Test Package](https://pkg.go.dev/testing) : Golang's built-in testing framework.
-   [Allure Framework](https://allurereport.org/) : Reporting tool for tests.

## Keycloak

Keycloak is an open-source identity and access management (IAM) solution developed by Red Hat. Their enterprise fork is
called Red Hat Single-Sign On (SSO). It follows the OpenID Connect and OAuth 2.0 standards and it highly extensible,
allowing it to integrate seamlessly with many other applications, frameworks, and even perform user federation and
integration with LDAP providers.

As Keycloak acts as our IAM server, it handles the generation of JSON Web Tokens `JWT's` as well as authentication.
Managing Keycloak itself is a large topic, and requires some understanding of OIDC authentication flows, as well as the
the security concepts surrounding authentication using `JWT's`.

### Why we've chosen Keycloak

Red Hat is one of the leading providers of open-source security solutions. They are highly reputable and are leading
the development of Keycloak. With it's backing of a strong security-focused company, quick development pace, as well
as the ability to provide enterprise support, Keycloak is the obvious choice for for providing OIDC-compliant,
cloud-native identity and access management services.

### Links

-   [Keycloak](https://www.keycloak.org/documentation)
-   [OIDC and OAuth](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc)

---

## Temporal

Temporal is an open-source microservice orchestration platform for writing durable workflow as code. It simplifies the
difficult problem of distributing workloads across workers, ensuring that they run to completion, performing
compensating actions when issues arise, and provides versioning of workflows which is especially necessary for
to be able to execute long-running workflows without interruption.

### Why we've chosen Temporal

Temporal's team has a long history of running workflows in the cloud; with a lot of that experience coming from working
on large distributed systems at AWS, Microsoft, and Uber. The concepts behind Temporal are elegant and sound, and their
company is growing quickly (with one of the highest series B funding rounds in history, including hitting a unicorn
valuation at that stage).

They have SDK's that support many languages including `Golang`, `TypeScript`, `Java`, `Python`, and `.NET`.

### Links

-   [Temporal](https://temporal.io/)

---

## Open API

`Open API`, formerly known as `Swagger` currently is the most widely adopted API specification standard for HTTP API's.

### Why we've chosen Open API

There aren't very many other options, especially ones with strong tooling. `AsyncAPI` is available for asynchronous
API's, but that's about it.

### Links

-   [Open API](https://www.openapis.org/)

---

## Tile38

Tile38 is a geospatial database & geofencing server. It allows us to store and make fast queries on geospatial entities
in a scalable fashion.

### Why we've chosen Tile38

Tile38 is well design and free and open-source. Other geofencing options are significantly more costly and usually
requires integration with a much larger body of products, which might not make sense without going with the full suite
of products. Tile38 is a high-quality stand-alone solution that gives us flexibility.

### Links

-   [Tile38](https://tile38.com/)

---

## PostgreSQL

PostgreSQL is a highly popular, advanced open-source relational database with a long history.

### Why we've chosen PostgreSQL

PostgreSQL's wide-adoption and maturity means it is very stable, and problems that are discovered with it have
a lot of manpower behind it to resolve those issues quickly. It is also very feature rich, with many plugins, resources,
and companies that provide enterprise support, and ones that provide distributed versions of it.

### Links

-   [PostgreSQL](https://www.postgresql.org/)
-   [YugabyteDB](https://www.yugabyte.com/)
