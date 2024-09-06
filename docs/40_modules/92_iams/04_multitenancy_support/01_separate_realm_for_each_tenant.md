---
sidebar_position: 2
---

#	Separate Realm for Each Tenant

In this setup, a separate realm is created for each tenant. Each tenant will have its own realm configuration i.e., users, themes, clients, roles, etc.

This setup is useful where each tenant is totally separated from other tenants and have no shared relationship among them.

User account in one tenant cannot be assigned to access another tenant.  

Same username can appear in 2 tenants but they are totally different accounts and have no linkage between them. Each user account will have its own login credential.

:::note
It is possible to link accounts in 2 different realms to the same Active Directory. By doing so, the account with same username will have the same login credential.
But from Keycloak perspective, they are treated as different user accounts.
:::

To use this setup to implement multitenancy, the shared application need to be able to handle multiple realms. All the OpenID endpoint URLs will be different as the Realm name is part of the URL. For example, the endpoint URL to retrieve user info is:

``` Bash
/realms/<realm-name>/protocol/openid-connect/userinfo 
```

The shared application will need to know the Realm that the user is accessing and use the correct OpenID endpoints.

One possible approach is to use different FQDN for each tenant to access the same application. For example, tenant A will use `http://tenantB.myapp.com` to access the application and tenant B will use `http://tenantB.myapp.com` to access the same application.

The shared application can then use the requesting URL to determine the correct realm that the user is trying to access.

Currently, the AGIL Ops Hub Web Framework doesn’t support multiple realm. To work around this limitation, project can deploy distinct Web App, one for each tenant.
