---
sidebar_position: 5
---

# Setup System Administrator Account

The system administrator is the administrator that has the right to administer tenant and tenant membership.


1. Login to the Web Admin Console and navigate to the realm.

2. Next, click on the `Users`menu item in the side menu.

![User Menu](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/users-menu.png)

3. Click on `Add user` button.

![Add User](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/add-user.png)

4. In the `Create user` form, enter the followings:

-   Email verified – set to On
-   Username – the desired username of the system administrator. In the example below, myadmin is used.
-   Email – the email of the system administrator

![Create User](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/create-user.png)

7. Click on `Create` button to create the user.

8. Click on `Credentials` tab.

![Credentials](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/credentials.png)

9. Click on `Set password` button.

10. Enter the desired password for the administrator and turn off `Temporary`

![Set password](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/set-password.png)

11. Click `Save` button, follow by `Save password` button.

![Save password](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/save-password.png)

12. Next, click on `Role mapping` tab.

![Role mapping](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/role-mapping.png)

13. Click on `Assign role` button

![Assign Role](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/assign-role.png)

14. Click `Filter by realm roles` from the filter dropdown.

![Filter by realm Roles](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/filter-by-realm-roles.png)

15. From the list of roles shown, check on `system-admin` role and click `Assign`.

![System-admin Role](/img/modules/iams/configuration/manual-keycloak-setup/system-admin/system-admin.png)

