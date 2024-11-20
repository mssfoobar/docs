---
sidebar_position: 1
---
# Introduction

Identity and Access Management Service (IAMS) module provides the following features:

* Authentication
  * Single-Sign On and Single-Sign Out
  * OpenID Connect Support
  * Web browser login and logout support
  * Identity Brokering
    * Authenticate with external OpenID Connect or SAML Identity Providers.
  * Sync users from LDAP and Active Directory servers
  * Two-factor Authentication
    * Support for TOTP/HOTP via Google Authenticator or FreeOTP.
* Multitenancy support
* Authorization
  * Role-based access control (RBAC)
  * Group-based access control (GBAC)
  * User-based access control (UBAC)

IAMS consists of the followings:

* Customized Keycloak (IAMS-Keycloak) to support Multitenancy
* Authorization and Admin Service (IAMS-AAS) that provides APIs to manage authorization access.
* Database to store configurations. The following database types are supported:
  * PostgreSQL
  * MS SQL
  * Oracle
