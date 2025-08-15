---
sidebar_position: 10
---

# Retrieve User Security Information

This guide provides an overview on how to configure and use the REST API exposed by **User Security Resources** custom extension for Keycloak. 
This REST API return retrieve detailed user security information, useful for external monitoring and reporting.

-----

## Extension Overview

The custom extension, implemented as a **`user-security-resources` RealmResourceProvider**, 
exposes a REST API endpoint: `[KEYCLOAK_URL]/realms/[REALM_NAME]/user-security-resources/users`. 
This API returns an array of JSON objects, with each object containing key security-related details for a user account.

The JSON object for each user includes the following fields:

  * **`userid`**: The user's unique ID.
  * **`username`**: The user's username.
  * **`email`**: The user's email address.
  * **`enabled`**: A boolean indicating if the user's account is enabled.
  * **`lastLoginTimestamp`**: The timestamp of the last login in milliseconds since the Unix epoch.
  * **`lastPasswordChangeTimestamp`**: The timestamp of the last password change in milliseconds since the Unix epoch.
  * **`passwordExpiryRemainingDays`**: The number of days remaining before the user's password expires.
  * **`firstName`**: The user's given name.
  * **`lastName`**: The user's last name.
  * **`emailVerified`**: Indicates whether the user’s email address has been confirmed.
  * **`attributes`**: A flexible key–value store for custom user attributes beyond the default fields.
  * **`createdTimestamp`**: Stores the epoch time (milliseconds) when the user account was created.
  * **`totp`**: Indicates whether the user has configured Time-based One-Time Password (TOTP) for two-factor authentication.
  * **`requiredActions`**: Lists actions the user must complete before normal login is allowed.

The API supports pagination through two optional query parameters: `page` (pagination offset) and `size` (page size). 
If not specified, the API defaults to an offset of `-1` and a page size of `100`.

The API requires an access token with administrative rights in the `Authorization` header. 

-----


## **Usage**

### **1. Basic API Call**

A basic `GET` request to the endpoint without any parameters will return the first 100 users, starting from the beginning of the user list.

```bash
curl --location --request GET '[KEYCLOAK_URL]/realms/[REALM_NAME]/user-security-resources/users' \
--header 'Authorization: Bearer <ADMIN_ACCESS_TOKEN>'
```

**Example JSON Response:**

```json
[
  {
    "userid": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "username": "user1",
    "email": "user1@example.com",
    "enabled": true,
    "lastLoginTimestamp": 1672531200000,
    "lastPasswordChangeTimestamp": 1672531200000,
    "passwordExpiryRemainingDays": 85
  },
  {
    "userid": "b2c3d4e5-f678-9012-3456-7890abcdef12",
    "username": "user2",
    "email": "user2@example.com",
    "enabled": false,
    "lastLoginTimestamp": 1669852800000,
    "lastPasswordChangeTimestamp": 1669852800000,
    "passwordExpiryRemainingDays": -10
  }
]
```

### **2. Pagination**

You can use the `page` and `size` query parameters to control the pagination.

  * `page`: The offset of the results. For example, `page=20` will start the result set at the 21st user.
  * `size`: The number of users to return per request.

**Example with Pagination:**

To get the next 50 users after the first 100, you would use:

```bash
curl --location --request GET '[KEYCLOAK_URL]/realms/[REALM_NAME]/user-security-resources/users?page=100&size=50' \
--header 'Authorization: Bearer <ADMIN_ACCESS_TOKEN>'
```

This API is designed to be a lightweight tool for administrators to perform audits or generate security reports on their user base without needing to access the full Keycloak database.