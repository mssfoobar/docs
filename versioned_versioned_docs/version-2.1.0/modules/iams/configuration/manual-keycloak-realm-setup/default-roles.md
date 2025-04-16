---
sidebar_position: 4
---

# Default Roles

IAMS required the following realm roles to be configured as default roles for all users:

-   realm-management view-clients
-   realm-management view-authorization

Perform the following steps to configure the default roles:

1. Login to the Web Admin Console and navigate to the realm.

2. Click on Realm settings on the side menu.

![Realm Settings](/img/modules/iams/configuration/manual-keycloak-setup/default-roles/realm-settings.png)

3. Click on `User registration` tab:

![User Registration](/img/modules/iams/configuration/manual-keycloak-setup/default-roles/user-registration.png)

4. Click on `Assign role` button:

![Assign Role](/img/modules/iams/configuration/manual-keycloak-setup/default-roles/assign-role.png)

5. Check the followings from the list:

-   realm-management view-authorization
-   realm-management view-client

6. Click on `Assign` button to complete the setup.

![Assign Role](/img/modules/iams/configuration/manual-keycloak-setup/default-roles/assign.png)
