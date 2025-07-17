---
sidebar_position: 6
---

# Restricting Concurrent User Sessions in Keycloak


This guide will walk you through configuring the "User Session Count Limiter" for common scenarios.

This section guides you through configuring Keycloak to limit the number of concurrent active sessions a single user can have. 
This is crucial for managing resource consumption, enforcing licensing agreements, or enhancing security by preventing unauthorized session sharing.

In Keycloak, you can configure session limits within Authentication Flows using the User Session Count Limiter authenticator. 
This allows you to apply different session limits based on the authentication method (e.g., browser-based login, direct grant) or even specific client applications.

This guide will walk you through configuring the *User Session Count Limiter* for common scenarios.

## Understanding the Mechanism

Keycloak leverages `Authentication Flows`, which are configurable sequences of authenticators (steps) that users must complete during a login process. 
The **User Session Count Limiter** is an authenticator that you can add to these flows to enforce concurrent session restrictions.

When a user attempts to log in:
1. The configured authentication flow is executed.

2. If the `User Session Count Limiter` is part of the flow and the user already has the maximum allowed concurrent sessions, 
Keycloak will take an action (either deny the new session or terminate the oldest one).

## Configuration Steps

To restrict concurrent user sessions, you'll need to modify or create a new authentication flow and add the `User Session Count Limiter` authenticator.

### Scenario 1: Limiting Concurrent Sessions for Browser-Based Logins (e.g., standard web applications)

This is the most common scenario, affecting users logging in via web browsers.

1. **Access the Keycloak Admin Console**:
    * Navigate to your Keycloak instance's admin console.
    * Log in with an administrator account.

2. **Select Your Realm**:
    * In the top-left corner, select the realm for which you want to configure concurrent session limits.

3. **Navigate to Authentication Flows**:
    * In the left-hand navigation menu, click on `Authentication`.
    * Then click on the `Flows` tab.

4. **Copy the Default Browser Flow**:
    * Keycloak's built-in flows (like Browser) cannot be directly modified. You need to create a copy.
        
        * Find the `Browser` flow in the list.

        * Click on Actions (**⋮**) next to the `Browser` flow, and select `Duplicate`.

        * Give your new flow a descriptive name, e.g., Browser - Limited Sessions, and click `Duplicate`.

5. **Edit the Copied Flow**:
    * Click on the name of your newly created flow (e.g., `Browser - Limited Sessions`).

6. **Add the User Session Count Limiter**:
    * Find the `Browser Forms` execution within the flow.

    * Click on `Add` action (**+**) next to `Browser Forms`, and select `Add Execution`.

    * From the execution list, select `User Session Count Limiter`.

    * Click `Add`.

7. **Configure the User Session Count Limiter**:
    
    * Click on the Configuration (⚙️) action next to the `User Session Count Limiter`.

8. **Configure the following settings**:

    * **Alias**: Enter an alias (e.g., allow single session)

    * **Max concurrent sessions for each user within this realm**: Enter the maximum number of concurrent sessions allowed per user across all 
        clients within this realm for this flow. For example, enter 1 to allow only one session.

    * **Maximum concurrent sessions for each user per Keycloak client**: (Optional) If you want to set a limit per individual client application, 
    enter a value here. A value of 0 means no client-specific limit is applied by this authenticator.

    * **Desired behavior when session limit is reached**: Choose one of the following:

        * **Deny new session**: The user's new login attempt will be denied.

        * **Terminate oldest session**: The user's oldest active session will be invalidated, allowing the new session to proceed.

    * Click `Save`.

9. **Set the Authenticator to `Required`**:
    
    * Back in the flow editor, change the requirement for `User Session Count Limiter` from Disabled to Required. This ensures the limiter is always applied.

10. **Assign the New Flow to Your Realm**:

    * Go back to `Authentication Flows` page.

    * Click on Actions (**⋮**) next to the New flow, and select `Bind flow`.

    * In the `Choose binding type` dropdown, select `Browser flow`.

    * Click `Save`.

### Scenario 2: Limiting Concurrent Sessions for Direct Grant Logins (e.g., API clients)

This scenario is for applications that use the `direct grant flow` (username/password directly to Keycloak's token endpoint).

1. **Access the Keycloak Admin Console and Select Your Realm** (as in Scenario 1).

2. **Navigate to Authentication Flows**:
    * In the left-hand navigation menu, click on `Authentication`.
    * Then click on the `Flows` tab.

3. **Copy the Default Direct Grant Flow**:

    * Find the `Direct Grant flow` in the list.

    * Click on Actions on Actions (**⋮**) next to the `Direct Grant flow`, and select `Duplicate`.

    * Give your new flow a descriptive name, e.g., Direct Grant - Limited Sessions, and click  `Duplicate`.

4. **Edit the Copied Flow**:
    * Click on the name of your newly created flow (e.g., Direct Grant - Limited Sessions).

5. **Add the User Session Count Limiter**:

    * Click on `Add Execution` on the top.

    * From the execution list, select `User Session Count Limiter`.

    * Click `Add`.

6. **Configure the User Session Count Limiter**:

    * Click on the Configuration (⚙️) action next to the `User Session Count Limiter`.

    * Configure the same settings as described in Step 8 of Scenario 1.

    * Click `Save`.

7. **Set the Authenticator to `Required`**:

    * Change the requirement for `User Session Count Limiter` from `Disabled` to `Required`.

8. **Assign the New Flow to Your Realm**:

    * Go back to `Authentication Flows` page.

    * Click on Actions (**⋮**) next to the New flow, and select `Bind flow`.

    * In the `Choose binding type` dropdown, select `Direct grant flow`.

    * Click `Save`.


## Important Considerations

* **Flow Overrides for Clients**: If you have specific clients that require different concurrent session limits, you can override the realm's default authentication flow for that client.

    * Go to `Clients` in the left-hand menu.

    * Select the client you want to configure.

    * Go to the `Advanced` tab.

    * Go to the `Authentication flow overrides` section in `Advanced` tab.

    * For the `Browser Flow` or `Direct Grant Flow`, select your custom flow, or create a new one specifically for that client with different `User Session Count Limiter` settings.

* **User Experience**: Setting low session limits (e.g., 1) can impact user experience, especially if users frequently switch between devices or browsers. Ensure your applications are designed to handle session invalidation gracefully (e.g., redirecting to the login page).

* **Testing**: Thoroughly test your concurrent session limits with various scenarios (multiple browsers, devices, rapid logins) to ensure Keycloak behaves as expected.

By leveraging authentication flows and the `User Session Count Limiter` in Keycloak, you gain fine-grained control over concurrent user sessions, enhancing security and resource management for your applications.