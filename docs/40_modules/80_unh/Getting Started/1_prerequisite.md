---
sidebar_position: 2
---
# Prerequisite

- [k3s](https://docs.k3s.io/quick-start)
- [kubectl](https://kubernetes.io/docs/tasks/tools)
- [helm](https://helm.sh/docs/intro/install/)
- [psql](https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows)
- [openSSL](https://docs.openiam.com/docs-4.2.1.3/appendix/2-openssl)
- AOH-IAMS
  - [IAMS-Keycloak](https://mssfoobar.github.io/docs/docs/modules/iams/quick_start/deploy_iams_keycloak)
  - [IAMS-AAS](https://mssfoobar.github.io/docs/docs/modules/iams/quick_start/deploy_iams_aas)

# UNH Dependencies

UNH is tightly coupled with AOH-IAMS to resolve the recipient contact information such as Email & FCM 
token by keycloak user id. Please make sure that you have the necessary resources created in AOH-IAMS before proceeding 
with UNH.

Necessary resources needed for UNH
- keycloak client for UNH to call IAMS-AAS API
- keycloak user with Email and FCM token attributes

:::important
It is essential to have a fully functional IAMS installed before starting with UNH.
To learn more about IAMS, please refer to [IAMS docs](https://mssfoobar.github.io/docs/docs/modules/iams/introduction).
:::
 
## Keycloak client for UNH to call IAMS-AAS API

After deploying AOH-IAMS in your Kubernetes cluster, you can access its admin console to create a new client.

1. Login to Keycloak Admin Console and switch the realm. This example demonstrates using AOH realm.

![Select Default Realm](select_realm.png)

2. Click on `Clients` in the side menu and click on `Create client` button.

![Create Client](create_client.png)

3. Go through the steps below to create a new client.
    - Fill up the required fields (you can enter your own value here)
![Create Client Step 1](create_client_step1.png)
    - Set capabilities settings
![Create Client Step 2](create_client_step2.png)
    - Leave the fields below empty and click on `Save`.
![Create Client Step 3](create_client_step3.png)

4. Click on `Service accounts roles` tab and click on `Assign role`.

![Assign Role](assign_role.png)

5. Assign the `sys-admin` role to the client by selecting `Filter by realm roles` at the top left.

![Sys-admin](sys-admin.png)

6. You have created a new client in AOH-IAMS. Go to the `Credentials` tab in the client details page and take note of 
the client id and client secret which will be needed in UNH deployment.

![Client Secret](client_secret.png)

## Keycloak user with Email and FCM token attributes

:::note
Generating an FCM token is outside the scope of UNH. For more information on generating an FCM token from a mobile
device, refer to the [Google FCM guide.](https://firebase.google.com/docs/cloud-messaging/android/client)
:::

By default, Keycloak does not come with the FCM token attribute configured in the user profile. We need to add the FCM token 
attribute to allow UNH to retrieve users' mobile FCM tokens and send push notifications.

1. Click on `Realm Settings` in the side menu and click on `User profile` tab. Inside the `User profile` tab, click on 
`Add attribute` button.

![User Profile](user_profile.png)

2. Follow the settings below to create a FCM token attribute.

![Fcm Token Attribute 1](fcm_token_attribute_1.png)
![Fcm Token Attribute 2](fcm_token_attribute_2.png)

3. Once FCM token attribute is created, we can set both Email and FCM token attributes when we create a new user.
Click on `Users` in the side menu and click on `Add user`. Make sure to use a real, working Email address and FCM token.

![Create User Form](create_user_form.png)
