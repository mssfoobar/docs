# Project Structure

## Overview

When building your frontend, it's ideal to package your essential components and functions into a reusable library. This library can then be imported as a node package into your project.

## Folder Structure

To maintain a structured and scalable application architecture, it is recommended to organize your routes and components in the following manner:

    - **src/lib/routes/(public)/_module_folder_**: Routes that does not require authentication to access the pages should be placed here.
    - **src/lib/routes/(private)/_module_folder_**: Routes that do require authentication to access the pages should be placed here.
     - **src/lib/_module_folder_**: Store page-specific components and other module related files within this folder. This separation enables clear distinction between routing logic and component-based UI elements.

### Route Protection

                - To ensure secure access control in applications requiring user authentication, a best practice is to segregate pages into distinct sections. This approach enables the restriction of sensitive content and features to authorized users only.

### Outline

Here's a rough outline of the recommended structure as seen in our web-base repository:

```
├── lib
│   ├── aoh
│   │    └── core
│   │         ├── components
│   │         ├── keycloak
│   │         ├── logger
│   │         └── provider
│   ├── _example
│   │     └── components
│   │          └── Headerbar.svelte
│   │
│   ├── components
│   ├── index.ts
│   └── utils.ts
│
└── routes
    ├── (private)
    │    ├── _example
    │    │     └── projects
    │    │         └── +page.svelte
    │    ├── aoh
    │    ├── +layout.server.ts
    │    └── +layout.svelte
    │
    ├── (public)
    │    ├── _example
    │    │     └── login
    │    │          └── +page.svelte
    │    ├── aoh
    │    ├── +layout.server.ts
    │    ├── +layout.svelte
    ...
```
### Creating new components
When creating a new component, you can create a new folder inside the `lib` folder. For example, the `_example` folder in the folder structure above is an example of how
you should create a new component folder to build out the web-base.

:::info
The `aoh` folder within `lib` consists of our `web core`, which contains the keycloak,
logger and auth components.
:::

### Creating new routes
Similarly, when you want to create routes for your new components, you can create them following the file structure of the `_example` folder. As mentioned
above, the `(public)` and `(private)` folders are where you will place your routes, depending on whether the routes require authentication or not.

:::info

The folder with parenthesis like `(public)` and `(private)` are called route groups in SvelteKit. Route groups help to make the configuration of
authenticated vs non-authenticated routes easier to manage, among other things. For more information, you can visit SvelteKit's
[documentation](https://kit.svelte.dev/docs/advanced-routing#advanced-layouts) or [tutorial](https://learn.svelte.dev/tutorial/route-groups).

:::
