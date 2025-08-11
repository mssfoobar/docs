---
sidebar_position: 8
---

# User Inactivity Disabler Custom Extension

This guide provides an overview on how to configure and use the **User Inactivity Disabler** custom extension for Keycloak. 
This extension provides mechanism to disables user accounts that have been inactive for a configurable period, improving security 
by managing stale accounts.

-----

## **Extension Overview**

This custom extension consists of three main components:

  * **`last-login-tracker` Event Listener**: This provider listens for `LOGIN` events. 
  When a user successfully logs in, it updates two user attributes:
      * **`lastLogin`**: Stores the login timestamp as an **ISO-8601** formatted string.
      * **`lastLoginTimestamp`**: Stores the login timestamp as a **Unix epoch long** (milliseconds).
  * **`user-security-resources` Realm Resource Provider**: This provider exposes two REST API endpoints:
      * **`/inactivity-disabling`**: This endpoint is designed for use with an external scheduler. When called, it iterates through all users, 
      checking if their last login time exceeds a configurable inactivity threshold. If it does, the account is disabled.
      * **`/backfill-last-login`**: This endpoint is for backfilling last login information for existing users. It scans the Keycloak event 
      store to find the latest login event for each user and populates the `lastLogin` and `lastLoginTimestamp` attributes. 
      This is crucial for environments where the extension is deployed to an existing Keycloak instance.

The inactivity threshold and backfill behavior are configured via Keycloak's Service Provider Interface (SPI) configuration.


-----


## **Configuration**

### **1. Configuring the Inactivity Threshold**

The inactivity threshold is configured using a SPI property. The default threshold is **90 days**. You can override this using 
the `KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_INACTIVITY_DAYS` environment variable.

  * **Kubernetes Configuration**: In your Keycloak deployment YAML, set the environment variable in the `spec.containers` section.

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: keycloak
    spec:
      template:
        spec:
          containers:
          - name: keycloak
            image: jboss/keycloak:latest
            env:
              - name: KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_INACTIVITY_DAYS
                value: "180" # Example: Set the inactivity threshold to 180 days
    ```

  * **Docker Compose Configuration**: In your `docker-compose.yml` file, add the environment variable to the Keycloak service.

    ```yaml
    version: '3.8'
    services:
      keycloak:
        image: jboss/keycloak:latest
        environment:
          - KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_INACTIVITY_DAYS=180 # Example: Set the inactivity threshold to 180 days
    ```

### **2. Configuring Backfill with Creation Date**

By default, the backfill API will only use the event store. If a user has no login events, the `lastLogin` attributes will remain empty. 
To use the user's creation date as a fallback for the last login time, enable this feature using the 
`KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_BACKFILL_WITH_CREATION_DATE` environment variable. The default is `false`.

  * **Kubernetes Configuration**:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: keycloak
    spec:
      template:
        spec:
          containers:
          - name: keycloak
            image: jboss/keycloak:latest
            env:
              - name: KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_BACKFILL_WITH_CREATION_DATE
                value: "true" # Enable backfilling with creation date
    ```

  * **Docker Compose Configuration**:

    ```yaml
    version: '3.8'
    services:
      keycloak:
        image: jboss/keycloak:latest
        environment:
          - KC_SPI_REALM_RESTAPI_EXTENSION_USER_SECURITY_RESOURCES_BACKFILL_WITH_CREATION_DATE=true # Enable backfilling with creation date
    ```

### **3. Enable `last-login-tracker` event listener**

1. **Navigate to the Keycloak Admin Console**: Log in with an administrator account.
2. **Select your Realm**: Choose the realm where you want to enable this feature.
3. **Go to Realm settings**: Click on the `Realm settings` menu item on the left-hand side.
4. **Enable the event listener**:
    - Click on the `Events` tab.
    - Click on the `Event listeners` sub-tab.
    - Select `last-login-tracker` from the dropdown in the `Event Listeners` field to add it.
    - Click `Save`.

### **4. Enable `Unmanaged Attributes`**

1. **Navigate to the Keycloak Admin Console**: Log in with an administrator account.
2. **Select your Realm**: Choose the realm where you want to enable this feature.
3. **Go to Realm settings**: Click on the `Realm settings` menu item on the left-hand side.
4. **Enable `Unmanaged Attributes`**:
    - Click on the `General` tab.
    - Select `Enabled` in the `Unmanaged Attributes` field.
    - Click `Save`,


-----

## **Usage**

### **1. Event Listener Usage**

After enable the `last-login-tracker` event listener, it will be active. Every time a user successfully logs in, 
the user's `lastLogin` and `lastLoginTimestamp` attributes will be automatically populated. 
You can verify this in the Keycloak Admin Console by inspecting a user's attributes.

### **2. REST API Usage**

The REST APIs are intended for automated, administrative tasks. They should be invoked by an external scheduler (e.g., a Kubernetes CronJob).

  * **Backfilling Last Login Data**: To populate the last login attributes for existing users, call the backfill endpoint once. 
  This is a crucial step when deploying this extension to an environment with pre-existing users.

      * **Endpoint**: `[KEYCLOAK_URL]/realms/[REALM_NAME]/user-security-resources/backfill-last-login`
      * **Method**: `GET`

  * **Disabling Inactive Accounts**: This endpoint should be called periodically (e.g., nightly) to disable inactive accounts.

      * **Endpoint**: `[KEYCLOAK_URL]/realms/[REALM_NAME]/user-security-resources/inactivity-disabling`
      * **Method**: `GET`

#### **Example CronJob for Inactivity Disabling**

Here is an example of a Kubernetes CronJob that calls the inactivity disabling API daily at 2:00 AM. 

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: keycloak-inactivity-disabler
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: api-caller
            image: curlimages/curl:latest
            env:
              - name: KEYCLOAK_URL
                value: "http://keycloak.your-domain.com"
              - name: REALM_NAME
                value: "aoh"
            command:
              - /bin/sh
              - -c
              - |
                curl -X GET \
                -H "Content-Type: application/json" \
                "$KEYCLOAK_URL/realms/$REALM_NAME/user-security-resources/inactivity-disabling"
```

