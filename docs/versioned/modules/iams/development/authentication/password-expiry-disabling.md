---
sidebar_position: 9
---

# Password Expiry Disabler Custom Extension

This guide provides an overview on how to configure and use the Password Expiry Disabler custom extension for Keycloak. 
This extension helps enforce security policies by automatically disabling user accounts whose passwords have expired 
beyond a configurable grace period.

## Extension Overview

The extension is composed of two main components:

- A **Required Action** named **"Password Expiry Disabler"**: This action triggers during the login flow. 
If a user's password has expired and the expiry date exceeds the configured grace period, the action will 
disable their account and present an error page, preventing the login.

- A **REST API** exposed via `UserSecurityResource` a RealmResourceProvider: This API is designed for external automation, 
such as a Kubernetes CronJob. When invoked, it iterates through all users in a specific realm and disables accounts where the 
password has expired past the grace period.

The grace period days is a configurable setting for the `UserSecurityResource` RealmResourceProvider through the 
Keycloak Service Provider Interface (SPI) configuration.

Beside disabling the user account, this extension will also add the following attribute to the user account:
- **Name**: `"password_expired_disabled"`
- **Value**: `true`


## Configuration

1. **Configuring the Grace Period**
   
   The grace period is configured via the SPI configuration for the RealmResourceProvider. 
   In containerized environment, the simplest way is to add a environment variable:

    - **Name**: KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_PASSWORD_EXPIRY_DISABLE_GRACE_PERIOD_DAYS
    - **Value**: the desired number of grace period days. Default value is 0. Any value that is less than 0 will turn off this disabling feature.   

For example, in `Kubernetes` deployment yaml for Keycloak, you will add in the `env` section:

```yaml

    env:
        - name: DEFAULT_REALM
          value: "AOH"
        - name: KC_DB
          value: "postgres"
        ...
        
        // highlight-start
        - name: KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_PASSWORD_EXPIRY_DISABLE_GRACE_PERIOD_DAYS
          value: 7
        // highlight-end
        - name: KC_HEALTH_ENABLED
          value: "true"     
```

2. **Configuring the Required Action**
    1. **Navigate to the Keycloak Admin Console**: Log in with an administrator account.
    2. **Select your Realm**: Choose the realm where you want to enable this feature.
    3. **Go to Authentication**: Click on the `Authentication` menu item on the left-hand side.
    4. **Enable the Action**:
        - Click on the `Required Actions` tab.
        - You should see **"Password Expiry Disabler"** in the list.
        - Click the **Enabled** toggle button to `ON` to make it an enabled required action for all users in the realm.
        - Move this required action so that it is above the `Update Password` required action. 
          If you have enabled `Password Expiry Reminder` required action, **"Password Expiry Disabler"** should also
          need to be above it too.
        - Click `Save`.

## Usage

1. **Required Action Usage**

   Once the required action is configured and enabled, it will automatically take effect during the user login flow.

    - **Scenario**: A user's password expired 45 days ago. The configured grace period is 30 days.

    - **Action**: When the user tries to log in, the **Password Expiry Disabler** action will be triggered. 
    It will detect that the password has expired beyond the 30-day grace period.

    - **Result**: The user's account will be **disabled**, and they will be redirected to an error page with a message 
    explaining why they can't log in. The login flow will be terminated.


2. **REST API Usage**

    The provided REST API is intended for background processing and can be invoked by external systems like a CronJob.

    - **Endpoint**: The endpoint is dynamic and depends on your Keycloak instance URL and realm name. The format is as follows:

    `[KEYCLOAK_URL]/realms/[REALM_NAME]/user-security-resources/password-expiry-disabling`


    - **Authentication**: The API must be secured and should never be expose to external network.

    - **Example CronJob Configuration (Kubernetes)**: Below is a conceptual example of how a CronJob could be configured to call the API nightly.

```yaml title='YAML'

apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: disable-expired-users
spec:
  schedule: "0 2 * * *" # Runs every night at 2:00 AM
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: api-caller
            image: curlimages/curl:latest
            command: ["curl", "-X", "POST", "https://<your-keycloak-url>/auth/realms/<your-realm-name>/user-security-resources/password-expiry-disabling"]
```

The API call will trigger a process that scans all users in the realm. For each user whose password expiry date is older than the configured grace period, their 
account will be automatically disabled. No user interaction is involved in this process.

