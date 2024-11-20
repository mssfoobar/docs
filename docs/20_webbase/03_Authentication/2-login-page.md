# Creating Login/Logout Page

To better support customization of the login experience, we've introduced a set of API routes that enable each module to create its own tailored login and logout pages. These endpoints provide the necessary functionality to facilitate a unique login experience for each module, while maintaining a unified authentication framework.

:::info
For more information on API routes, Please refer to https://learn.svelte.dev/tutorial/get-handlers
:::

## API Routes

### Login

Initiates the login process by redirecting the user to the Keycloak login page for authentication. Recommended to attach this to the login button

    - **Endpoint**: /lib/routes/(app)/aoh/api/login: This API route is used to contact keycloak to login. it will redirect the user to the keycloak login
    - **Method**: POST

            ```typescript
                // Example usage:
                function initiateLogin() : void {
                    window.location.href = '/aoh/api/login';
                }
            ```

            ```jsx title='routes/my-module/(public)/login/index.svelte'
            <script lang="ts">

            </script>
                <Button onClick={initiateLogin}> Login </Button>
            ```

### Logout

Handles user logout functionality. We recommend attaching this endpoint to the logout button
    - **Endpoint**: /lib/routes/(app)/aoh/api/logout
    - **Method**: POST
