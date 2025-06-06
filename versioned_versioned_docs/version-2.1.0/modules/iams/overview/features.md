---
sidebar_position: 1
---

# Features

Identity & Access Management Service (IAMS) module provides the following features:

-   `Authentication`
    -   `Single-Sign On `and `Single-Sign Out`
    -   OpenID Connect a.k.a. `OIDC` Support
    -   Web browser `login` and `logout` support
    -   Identity Brokering
        -   Authenticate with external `OIDC` or `SAML` Identity Providers.
    -   Sync users from `LDAP` and `Active Directory` servers
    -   Two-factor Authentication (`2FA`)
        -   Support for TOTP/HOTP via Google Authenticator or FreeOTP.
-   `Multi-tenancy` support
-   Authorization
    -   Role-based access control (RBAC)
    -   Group-based access control (GBAC)
    -   User-based access control (UBAC)

IAMS consists of the followings:

-   Customized Keycloak (`iams-keycloak`) to support `multi-tenancy`
-   Authorization and Admin Service (IAMS-AAS) that provides APIs to manage authorization access.
-   Database to store configurations. The following database types are supported:
    -   PostgreSQL
    -   MS SQL
    -   Oracle
