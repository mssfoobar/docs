---
sidebar_position: 1
---

# Identity Access Management

Our system uses Keycloak as the identity access management server. Keycloak is an open-source identity and access
management (IAM) solution developed by Red Hat. Their enterprise fork is called Red Hat Single-Sign On (SSO). It follows
the OpenID Connect and OAuth 2.0 standards and it highly extensible, allowing it to integrate seamlessly with many other
applications, frameworks, and even perform user federation and integration with LDAP providers.

## OpenID Connect

OpenID Connect is an identity layer built on top of the OAuth 2.0 framework. It is an open standard that provides a
secure and standardized way for user authentication and authorization in modern web applications and APIs.

By utilizing OpenID Connect, we'll be able to integrate with other systems that follow the OIDC standard, and also
even add support for social logins. We can even swap out Keycloak for a different identity provider (e.g. Google,
Facebook's, Auth0, etc.) should the need arise.

## Keycloak

As Keycloak acts as our IAM server, it handles the generation of JSON Web Tokens `JWT's` as well as authentication.
Managing Keycloak itself is a large topic, and requires some understanding of OIDC authentication flows, as well as the
the security concepts surrounding authentication using `JWT's`.

:::info

You can read more Keycloak, OIDC, and OAuth here:

-   Keycloak: https://www.keycloak.org/documentation
-   OIDC and OAuth: https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc

:::

### How do we use Keycloak?

We use Keycloak's User Federation system and their User Storage Service Provider Interface to integrate with our
database to retrieve users. This is done by implementing the `Java` interfaces for the User Storage SPI, and placing
the built `.jar` file in the Keycloak server.

:::info

Find out more about Keycloak server development:

-   User Storage SPI: https://www.keycloak.org/docs/latest/server_development/#_user-storage-spi
-   User Federation: https://www.keycloak.org/docs/latest/server_admin/#adding-a-provider

You can find the source code for our User Storage Provider Interface implementation here:

-   https://github.com/mssfoobar/ar-keycloak-providers

:::

### Authentication in AGIL Ops Hub

In the current iteration of the system, users are part of teams and have roles. In terms of database relationships, a
user can be part of 1 or more teams, and they can have 1 or more roles in that time. However, when accessing the system,
they must always assume 1 role to do so.

Keycloak does not have the concept of 'teams', but they do have 'groups'. We map each users' team to Keycloak groups,
and each users' role to Keycloak's roles. Note however, that in Keycloak, 'groups' are aggregates of roles - which is
not that case in our system for 'teams'.

Each user is associated to a team and role via the 'membership' table. The user entity has a 'membership_id' foreign
key; this refers to the `active membership` that the user has. Meaning, the exact team and role he/she is assuming
whilst accessing the system. This active membership role is mapped to the `x-hasura-default-role` claim in the access
token and that role claim is used to make requests in the system (GraphQL requests to Hasura). Hasura performs the
authorization via the permissions tables for each entity/table.

A user can have multiple memberships (this relationship is stored as the `user_id` foreign key in the membership table).
The User Storage SPI maps these memberships to the `x-hasura-allowed-roles` claim. This means that you may pass
`x-hasura-role` in the request header to Hasura to assume a different role for that request.

:::info

Visit https://hasura.io/docs/latest/auth/authorization/index/ for more information on how Hasura handles roles.

:::
