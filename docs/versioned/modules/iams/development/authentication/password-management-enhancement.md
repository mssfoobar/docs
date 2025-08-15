---
sidebar_position: 6
---

# Password Management Enhancement

This guide provides instructions on how to utilize two new custom Keycloak Required Actions designed to enhance password management and security. 
These actions, developed for Keycloak version 26.3 and latest, offer flexible configurations for validating current passwords, 
prompting users for changes before expiry, and displaying password expiry reminders.

## Introduction to Custom Required Actions

Keycloak's Required Actions are a powerful mechanism to force users to perform certain tasks before they can fully access an application. 
This custom extension introduces two such actions:

- **Custom Update Password Required Action**: An enhanced version of the built-in "Update Password" action, providing additional security and flexibility.

- **Password Expiry Reminder Required Action**: A new action to proactively notify users about impending password expiration.

Both actions are designed to integrate seamlessly with Keycloak's flow and provide configurable options for administrators.

:::note

`Custom Update Password Required Action` is designed to only support validate current password in the `authenticate` flow.
In other flow such as `reset-credential`, this Required Action will not require user to enter current password even if
the configuration is turn on.

:::



## Custom Required Actions Overview

### Custom Update Password Required Action

This action extends the standard "Update Password" functionality with two key features:

1. **Current Password Validation**:

    - **Purpose**: Ensures that a user must provide their current valid password before being allowed to set a new one. 
    This adds an extra layer of security, preventing unauthorized password changes if an active session is compromised.

    - **Configuration**:

        - **Validate current password (Boolean)**:

        - **Description**: If true, the user will be prompted to enter their current password, and the new password will only be set if the current password is valid.

        - **Default**: false (disabled)

2. **Forced Password Change Before Expiry**:

    - **Purpose**: Allows administrators to force users to change their password a configurable number of days before it expires, rather than waiting until the exact expiry date.

    - **Configuration**:

        - **Days before expiry force update password** (Integer):

        - **Description**: Number of days before password expiry when the user will be forced to change their password. 
        If the user's password expires within this window, they will be required to complete this action.

        - **Default**: 0 (force change on the day of expiry)


### Password Expiry Reminder Required Action

This action provides a user-friendly reminder about an impending password expiry, offering a link to update the password.

- **Display Duration Configuration**:

    - **Display X days from expiry (Integer)**:

        - **Description**: The number of days before password expiry when the reminder will start being displayed.

        - **Default**: 0 (start displaying on the day of expiry)

    - **Stop display X days from expiry (Integer)**:

        - **Description**: The number of days before password expiry when the reminder will stop being displayed. 
        This is useful to ensure the reminder doesn't interfere with the Custom Update Password action when it becomes mandatory.

        - **Default**: 0 (stop displaying on the day of expiry)

:::note
if `Display X days from expiry` and `Stop display X days from expiry` are set to 0, no reminder will be displayed.
:::

- **User Experience**:

    - The reminder will display the number of days remaining until password expiry.

    - A link will be provided to navigate to the password update page.

    - **Conditional Cancel Button**: If the user clicks the update password link before the `Forced Password Change Before Expiry` configured 
    in the `Custom Update Password` action, they will have a "Cancel" button on the update password page, allowing them to skip the password change. 
    Otherwise, the "Cancel" button will be hidden, forcing the update.

:::caution 

**Important Ordering Note**: For correct functionality, the `Password Expiry Reminder` required action must be placed before the 
`Custom Update Password` required action in the Keycloak realm's "Required Actions" configuration page. This ensures the reminder is shown before a forced update.
:::


## Configuring the Required Actions in Keycloak

1. **Log in to Keycloak Admin Console**.

2. Navigate to your **Realm Settings**.

3. Go to the **Authentication** tab.

4. Select the **Required Actions** sub-tab.

### Add and Configure "Custom Update Password"

1. Locate the `Update Password` required action from the list.

2. Click on Configuration (⚙️) action next to it.

3. You will see the configuration options:

    - **Validate current password**: Toggle to ON if you want to enforce current password validation.

    - **Days before expiry force update password**: Set the number of days (e.g., 7 for 7 days before expiry) or leave 0 to force on expiry day.

4. Click `Save`.


## Add and Configure "Password Expiry Reminder"

:::note
**Important**: Ensure this action is placed before "Update Password" in the ordered list of required actions. You can drag and drop to reorder.
:::

1. Click the **Enabled** toggle button to `ON` to make it an enabled required action for all users in the realm.

2. Click Configuration (⚙️) action next to it.

3. Configure the display duration:

    - **Display X days from expiry**: E.g., 30 (start showing 30 days before expiry).

    - **Stop display X days from expiry**: E.g., 7 (stop showing 7 days before expiry).

4. Click `Save`.
