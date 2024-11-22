---
sidebar_position: 4
---

#	Change the Initial Login Keycloak Admin Credential

The deployment manifests file for Keycloak create a default admin credential for initial login to setup Keycloak. 

The default admin account is the super admin account to Keycloak that has all the administrative right to Keycloak. Hence, it is important that the default credential be changed immediately after successful initial login. 

As it not possible to change the username of the default admin account, it is also recommended to create another admin account and disable the default admin account.

It is also highly recommended to enable 2FA for the admin account. Refer to Keycloak administration documentation on how to enable 2FA for user:

[https://www.keycloak.org/docs/latest/server_admin/index.html#one-time-password-otp-policies](https://www.keycloak.org/docs/latest/server_admin/index.html#one-time-password-otp-policies)
