---
sidebar_position: 6
---

# Password Management APIs

This guide provides an overview and instructions on how to use the two new REST APIs added to Keycloak via a custom extension. 
These APIs facilitate secure password management by allowing users to validate their current password and update it, ensuring proper 
authentication and authorization.

## Introduction to the Custom Extension

This Keycloak custom extension introduces two new REST endpoints designed to provide granular control over user password management 
outside of the standard Keycloak Account Console. 

These endpoints are:
- **Validate Current Password**: Allows a user to verify their current password.
- **Update Password**: Allows a user to change their password, contingent on providing the correct current password.

Both APIs are secured and require a valid access token in the Authorization header.

## API Endpoints

### Validate Current Password API

**Endpoint**: `POST /realms/{realm}/password-resources/validate-password`

**Description**: This API allows a user to validate their current password by providing it in the request body along with a valid access token. 
This can be useful for security-sensitive operations that require re-authentication or confirmation of identity.

**Request**:

- **Method**: `POST`

- **URL**: `{{keycloakUrl}}/realms/{realm}/password-resources/validate-password`

- **Headers**:

    - `Authorization`:`Bearer <access_token>` (Valid access token obtained from Keycloak)

    - `Content-Type`:`application/json`

- **Request Body (JSON)**:

```JSON

{
    "password": "current_password"
}
```

**Response**:

- **Success (HTTP 200 OK)**:

```JSON

{
    "valid": true,
}
```

- **Failure (HTTP 401 Unauthorized)**: If the access token is invalid or expired. 

- **Failure (HTTP 400 Bad Request)**: If the request body is malformed or "password" field is missing.

- **Failure (HTTP 500 Internal Server Error)**: For unexpected server-side issues.

### Update Password API

**Endpoint**: `POST /realms/{realm}/password-resources/reset-password`

**Description**: This API allows a user to update their password. The request requires a valid access token, the current password, and the new password. 
The new password will only be set if the provided current password is correct.

**Request**:

- **Method**: `POST`

- **URL**: `{{keycloakUrl}}/realms/{realm}/password-resources/reset-password`

- **Headers**:

    - `Authorization`:`Bearer <access_token>` (Valid access token obtained from Keycloak)

    - `Content-Type`:`application/json`

**Request Body (JSON)**:

```JSON

{
    "currentPassword": "user_current_password",
    "newPassword": "user_new_password"
}
```

- **Response**:

    - **Success (HTTP 204 No Content)**: Password updated successfully.

    - **Failure (HTTP 401 Unauthorized)**: If the access token is invalid or expired. If the current_password supplied is invalid.

    - **Failure (HTTP 400 Bad Request)**: If the request body is malformed or required fields are missing.

    - **Failure (HTTP 500 Internal Server Error)**: For unexpected server-side issues.
