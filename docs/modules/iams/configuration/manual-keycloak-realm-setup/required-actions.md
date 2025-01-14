---
sidebar_position: 2
---

# Required Actions

Required actions in Keycloak are actions a user must perform during the authentication process. A user will not be able
to complete the authentication process until these actions are complete.

`IAMS` adds the `Select active tenant` required action to keycloak and it needs to be enabled for `IAMS` to work
properly. If users are members of more than one tenant, this required action will display a form to prompt users to
select an active tenant when they login in.

If users are only member of one tenant, this required action will automatically select that tenant as the active tenant
without a prompt.

## Enable Select Active Tenant Required Action

The steps to enable the required action is as follows:

1. Login to the Keycloak Web Console.

2. Switch to the realm if not already there.

![Switch Realm](/img/modules/iams/configuration/switch-realm.png)

3. Click on `Authentication` in the side menu.

![Authentication Menu](/img/modules/iams/configuration/authentication.png)

4. Click on the `Required actions` tab.

![Required Actions](/img/modules/iams/configuration/required-actions.png)

5. Toggle the `Select active tenant` required action to `On`.

![Select Active Tenant](/img/modules/iams/configuration/select-active-tenant.png)
