---
sidebar_position: 3
---

#	Single Realm for All Tenants

In this setup, all tenants reside within same realm. All tenants will share the same realm configuration but each tenant can have their own roles, group, resource, and permission configuration.

This setup is useful for scenarios where tenants are all belong to same organization group but each tenant would want to manage their own application permissions. Each user account in this setup must be unique across all tenants and each user can be assigned to one or more tenant, allowing them to access different resources in different tenants.

For example, each company in ST Engineering (i.e., MSS, ANS, T&S, etc.) can be a tenant of the application, where each have its own management of roles, groups, resource, and permission. A HR staff can be assigned to join multiple tenants to help those tenants in their HR matters. The HR staff will only have one user account in the application but will be able to access different tenants and perform different function depending on the permission granted in those tenants.   

To support this setup, IAMS extended Keycloak to add Tenant concept to the realm, allowing each realm to have its own unique roles, groups, and access control settings. 

:::note
If you are don’t intent to support multitenancy within the same Realm, you will still need to create at least a Tenant to make use of IAMS authorization mechanism.
:::


