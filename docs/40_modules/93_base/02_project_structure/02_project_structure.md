# Project Structure

## Overview

When building your frontend, it's ideal to package your essential components and functions into a reusable library. This library can then be imported as a node package into your project.

## Folder Structure

To maintain a structured and scalable application architecture, it is recommended to organize your routes and components in the following manner:

    - **lib/routes/_my-module_/(public)**: Routes that does not require authentication should be placed here.
    - **lib/routes/_my-module_/(private)**: Routes that do require authentication should be placed here.
     - **lib/_my-module_**: Store page-specific components and other module related files within this folder. This separation enables clear distinction between routing logic and component-based UI elements.

### Route Protection

                - To ensure secure access control in applications requiring user authentication, a best practice is to segregate pages into distinct sections. This approach enables the restriction of sensitive content and features to authorized users only.

### Outline

Here's a rough outline of the recommended structure:

```
root/
|__ lib/
|    |__ my-module/
|    |    |__ components/             <-- Your components should be here
|    |    |    |__ component1
|    |    |    |    |__ component1.svelte
|    |    |    |__ component2
|    |    |    |    |__ component2.svelte
|    |    |    ...
|__ routes/
|    |__ aoh/
|    |    |__ api/
|    |    |__ my-module/             <-- Your routes should be here
|    |    |    | (private)           <-- Pages that requires authentication should be under here
|    |    |    |    |__ page1
|    |    |    |    |   |__ page1.svelte
|    |    |    | (public)            <-- Pages that does not require authentication should be under here
|    |    |    |    |__ page1
|    |    |    |    |   |__ page1.svelte
|    |    |    ...
```
