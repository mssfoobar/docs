# Overview

    This template uses utilizes Keycloak for authentication and authorization purposes. To support customization of the login experience, several endpoints have been made available in the form of API routes.

    For more information on API routes, Please refer to https://learn.svelte.dev/tutorial/get-handlers

:::note
Please ensure that environment variables have been properly configured to facilitate seamless integration with Keycloak.
:::

### Login

            - **Endpoint**: /lib/routes/(app)/aoh/api/login: This API route is used to contact keycloak to login. it will redirect the user to the keycloak login
            - **Description**: Initiates the login process by redirecting the user to the Keycloak login page for authentication. Recommended to attach this to the login button

            ```typescript
                // Example usage:
                function initiateLogin() : void {
                    window.location.href = '/aoh/api/login';
                }
            ```

            ```jsx title='routes/my-module/(public)/login/index.svelte'
                <Button onClick={initiateLogin}> Login </Button>
            ```

### Logout

            - **Endpoint**: /lib/routes/(app)/aoh/api/logout
            - **Description**: Handles user logout functionality. Recommended to attach this to the logout button
