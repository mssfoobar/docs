# Route Protection

To improve the organization and security of our API, let's consider separating the routes into two distinct categories: those that require authentication and those that don't. We can achieve this by grouping them into two separate folders, each with its own layout.


In the hooks of the web-base is where we perform our authentication with keycloak. This is also where it validates whether the access and refresh token are available or valid and refreshes them if needed. It will then passed down the authentication result to the page layout, determining whether the authentication has failed or succeeded. In the page layout is where the developer gets to decide what to do with the authentication result.

#### Outline

```
|__ api/
|    |__ my-module/
|    |    |__ (private)
|    |    |     |__ +layout.server.svelte <-- We handle our authentication here -->
|    |    |     |__ page1
|    |    |     |    |__+page.svelte
|    |    |__ (public)
|    |    |     |__ +layout.server.svelte <-- We handle our authentication here -->
|    |    |     |__ page2
|    |    |     |    |__+page.svelte
```


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
