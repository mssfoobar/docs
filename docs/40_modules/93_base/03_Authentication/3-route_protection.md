# Route Protection

To improve the organization and security of our API, let's consider separating the routes into two distinct categories: those that require authentication and those that don't. We can achieve this by grouping them into two separate folders, each with its own layout.

By doing so, we can then handle authentication behavior separately in the load functions of both layouts on the server-side. The authentication is in the form of a function called _authenticate_ (Refer to '_Using The Authenticate Function_' section below)

#### Outline

```
|__ api/
|    |__ my-module/
|    |    |__ (private)
|    |    |     |__ +layout.server.svelte <-- We handle our authentication here -->
|    |    |     |__ page1
|    |    |     |    |__+page.svelte
|    |    |__ (public)
|    |    |     |__ +layout.server.svelte <!-- We handle our authentication here -->
|    |    |     |__ page2
|    |    |     |    |__+page.svelte
```

## Using the Authenticate Function

An authenticate function is given to provide a flexible way for users to integrate their authentication method into the layout, allowing for customized handling of authentication results.

Specifically, the authenticate function: - Performs authentication using the provided method - Verifies if the user is already authenticated - Handles cookie storage and retrieval in the browser - Upon successful authentication, the function returns the user's claims, which can be used to authenticate the user on subsequent requests.

For example, in (private)/+layout.server.ts, users can call the authenticate function to authenticate the user and handle the result accordingly, (perhaps by redirecting the user)

#### public/+layout.server.ts

```typescript
export async function load({ cookies, request, url, locals, fetch }) {
  let openIdClient: BaseClient = locals.clients?.openid_client as BaseClient;

  //You call the authenticate function to check if the user is authenticated
  let { success, claims } = await authenticate(
    openIdClient,
    cookies,
    request,
    url
  );

  //Then based on its authenticated status, decide what to do,
  //since this is a PUBLIC route, we allow the user anyway
  if (success) {
    log.debug("User is authenticated", claims);

    return {
      user: claims,
    };
  } else {
    log.debug(
      "User is not authenticated, but since this is a PUBLIC route, we allow the user anyway"
    );
  }
}
```

:::info
In the [Project Strucure](../project_structure/#folder-structure), it’s specified that pages not requiring authentication should be placed in lib/routes/my-module/(public). This means these pages are accessible to all users without login. However, we are calling the authenticate function for these public pages because, in our use case, we need user information from claims to populate the user profile tab in the navigation bar.
:::

#### private/+layout.server.ts

```typescript
export async function load({ cookies, request, url, locals, setHeaders }) {
  let openIdClient: BaseClient = locals.clients?.openid_client as BaseClient;

  //INFO: Please use the authenticate function to perform your token management and authentication
  let { success, claims } = await authenticate(
    openIdClient,
    cookies,
    request,
    url
  );

  //INFO: Then based on its authenticated status, decide what to do. As this route is protected, we will
  //you can redirect the user to the login page if they are not authenticated.
  if (success) {
    log.debug("User is authenticated", claims);
  } else {
    log.debug("User is not authenticated");
    redirect(307, `/aoh/${env.LOGIN_PAGE}`); //Redirect login page.
  }

  return {
    user: claims,
  };
}
```
