---
sidebar_position: 2
---

# Token Claims

In order to use information about tenants in your application, you need to add it to the token claims.

IAMS introduced the following mapper to add tenant information to the token claim:

-   Active tenant – maps the active tenant to a token claim.
-   All tenants – maps all tenants that user is a member of to a token claim.

## Configure the Mapper

You can enable the mapper to the individual client or at the Client Scopes.

If you enable the mapper at the Client Scopes, any new client created after that will inherit the mappers and do not need require further configuration.

The default realm created in the [Local Development](../../../get-started/local-development.mdx) has the mapper configured in Client Scopes.

### Enable at Keycloak Client

To enable the 2 mapper for a Keycloak Client, perform the following steps:

1. Login to `Keycloak Admin Console` and switch to the realm.

2. Click on `Clients` in the side menu

![Clients](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/clients-menu.png)

3. Click on the Client ID of the client to configure.

4. Click on the `Client scopes` tab.

![Client Scopes](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/client-scopes.png)

5. Click on the client scope with the name ended with `dedicated`.

![Dedicated](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/dedicated.png)

6. Click on `Add mapper` and `select By configuration`.

![Add Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/add-mapper.png)

7. Click on `Active tenant`

![Active Tenant](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/active-tenant.png)

8. Enter the following fields:

-   Name: active_tenant
-   Token Claim Name: active_tenant
-   Turn on `Add to lightweight access token` checkbox

9. Click on `Save` to add the mapper.

![Save Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/save-mapper.png)

10. Click `Cancel` to go back to the Mappers list. You should see `active_tenant` mapper in the list.

![Active Tenant Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/mapper-list-active-tenant.png)

11. Click on `Add mapper` and select `By configuration`.

12. Click on `All tenants`

![All tenants](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/all-tenant.png)

13. Enter the following fields:

-   Name: all_tenants
-   Token Claim Name: all_tenants
-   Turn on Add to lightweight access token checkbox

14. Click on `Save` to add the mapper.

![All tenants](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/save-mapper-all-tenants.png)

### Enable at Client Scopes

As mentioned, enable the mappers in `Client Scopes` will allow any newly created client to automatically inherit the mappers.

Follows the following steps to enable mapper at the Client Scopes:

1. Login to the Web Admin Console and navigate to the realm.

2. Click on `Client scopes` in the side menu:

![Client Scopes](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/client-scopes-menu.png)

3. Click on `Create client scope`:

![Create Client Scope](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/create-client-scope.png)

4. Enter the followings:

-   Name: any prefer name
-   Type: Default
-   Protocol: OpenID Connect
-   Turn off the Display on consent screen checkbox

5. Click on `Save` to create the client scope.

![Create Client Scope Form](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/create-client-scope-form.png)

6. Click on `Mappers` tab

![Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/mapper-tab.png)

7. Click on `Configure a new mapper` button:

![Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/configure-a-new-mapper.png)

8. Click on `Active tenant`

![Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/active-tenant-2.png)

9. Enter the following fields:

-   Name: active_tenant
-   Token Claim Name: active_tenant
-   Turn on `Add to lightweight access token` checkbox

10. Click on `Save` to add the mapper.

![Save Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/save-mapper-active-tenant.png)

11. Click `Cancel` to go back to the Mappers list. You should see `active_tenant mapper` in the list.

![Active Tenant Mapper](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/mapper-list-active-tenant2.png)

12. Click on `Add mapper` and select `By configuration`.

![Add Mapper - By configuration](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/By-configuration.png)

13. Click on `All tenants`

![All Tenants](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/all-tenants.png)

14. Enter the following fields:

-   Name: all_tenants
-   Token Claim Name: all_tenants
-   Turn on `Add to lightweight access token` checkbox

15. Click on `Save` to add the mapper.

![All Tenants Form](/img/modules/iams/configuration/manual-keycloak-setup/token-claims/all-tenants-form.png)

