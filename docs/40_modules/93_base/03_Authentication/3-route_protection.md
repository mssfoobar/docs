# Route Protection

To improve the organization and security of our API, let's consider separating the routes into two distinct categories: those that require authentication and those that don't. We can achieve this by grouping them into two separate folders, each with its own layout.


In the hooks of the web-base is where we perform our authentication with keycloak. This is also where it validates whether the access and refresh token are available or valid and refreshes them if needed. It will then passed down the authentication result to the page layout, determining whether the authentication has failed or succeeded. In the page layout is where the developer gets to decide what to do with the authentication result.
#### Outline

```
|__ api/
|    |__ (private)/
|    |    |__ (project_name)
|    |    |     |__(module_name)
|    |    |     |     |__ +layout.server.svelte <-- We handle our authentication here -->
|    |    |     |     |     |__ page1
|    |    |     |     |     |    |__+page.svelte
|    |__ (public)/
|    |    |__ (project_name)
|    |    |     |__(module_name)
|    |    |     |     |__ +layout.server.svelte <-- We handle our authentication here -->
|    |    |     |     |     |__ page1
|    |    |     |     |     |    |__+page.svelte
```


#### public/+layout.server.ts

```typescript
export async function load({ locals }) {
	//INFO: Then based on its authenticated status, decide what to do. As this route is protected, we will
	//redirect the user to the login page if they are not authenticated.
	const authResult = locals.authResult;

	if (authResult.success) {
		log.debug("User is authenticated");

		return {
			user: authResult.claims,
		};
	} else {
		log.debug("User is not authenticated");
		redirect(StatusCodes.TEMPORARY_REDIRECT, LOGIN_API); //Redirect login page.
	}
}
```

:::info
In the [Project Strucure](../project_structure/#folder-structure), it’s specified that pages not requiring authentication should be placed in lib/routes/my-module/(public). This means these pages are accessible to all users without login. However, we are calling the authenticate function for these public pages because, in our use case, we need user information from claims to populate the user profile tab in the navigation bar.
:::

