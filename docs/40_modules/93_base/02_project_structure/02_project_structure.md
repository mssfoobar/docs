# Project Structure

## Overview

When building your frontend, it's ideal to package your essential components and functions into a reusable library. This library can then be imported as a node package into your project.

## Folder Structure

To maintain a structured and scalable application architecture, it is recommended to organize your routes and components in the following manner:

    - **lib/routes/_my-module_/(public)**: Routes that does not require authentication to access the pages should be placed here.
    - **lib/routes/_my-module_/(private)**: Routes that do require authentication to access the pages should be placed here.
     - **lib/_my-module_**: Store page-specific components and other module related files within this folder. This separation enables clear distinction between routing logic and component-based UI elements.

### Route Protection

                - To ensure secure access control in applications requiring user authentication, a best practice is to segregate pages into distinct sections. This approach enables the restriction of sensitive content and features to authorized users only.

### Outline

Here's a rough outline of the recommended structure as seen in our web-base repository:

```
├── lib
│   ├── _example
│   │   └── components
│   │       │── Headerbar
│   │       │   └── index.svelte
│   │       │
│   │       └── Sidebar
│   │           └── index.svelte
│   ├── aoh
│   ├── index.ts
└── routes
    ├── (app)
    │    ├── example
    │    │    ├── (private)
    │    │    │   ├── +layout.server.ts
    │    │    │   ├── +layout.svelte
    │    │    │   └── home
    │    │    │       └── +page.svelte
    │    │    │    ...
    │    │    └── (public)
    │    │        ├── +layout.server.ts
    │    │        ├── +layout.svelte
    │    │        └── login
    │    │            └── +page.svelte
    │    │── aoh
             ...
    ...
```

When creating a new component, you can create a new folder inside the `lib` folder. In the folder structure above, the `_example` folder is an example of how
you should create a new component folder to build out the web-base. The `aoh` folder within `lib` consists of our `web core`, which contains the keycloak,
logger and auth components.

Similarly, when you want to create routes for your new components, you can create them following the file structure of the `_example` folder. As mentioned
above, the `(public)` and `(private)` folders are where you will place your routes, depending on whether the routes require authentication or not.

:::info

The folder with parenthesis like `(public)` and `(private)` are called route groups in SvelteKit. Route groups help to make the configuration of
authenticated vs non-authenticated routes easier to manage, among other things. For more information, you can visit SvelteKit's
[documentation](https://kit.svelte.dev/docs/advanced-routing#advanced-layouts) or [tutorial](https://learn.svelte.dev/tutorial/route-groups).

:::
