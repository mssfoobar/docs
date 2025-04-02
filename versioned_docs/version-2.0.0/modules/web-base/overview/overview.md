---
sidebar_position: 1
---

# Overview

AGIL Ops Hub Web Framework consists of the followings:

-   `Web Base`
-   `CLI`
-   `Web Libraries`

## Web Base

The `Web Base` is a template `SvelteKit` web server, designed to with 2 primary uses in mind:

1. As a starting point for projects to kickstart their web development using AGIL Ops Hub
2. As a template for contributing additional modules to AGIL Ops Hub

### Key Features

-   **OIDC Authentication**: The `Web Base` integrates with Keycloak, a popular open-source identity and access
    management solution, to provide secure authentication and authorization as well as multitenancy.

-   **Establish Routing & Layout Pattern**: The template includes a built-in routing system utilizing SvelteKit's
    folder-based routing that allows quick segregation of public and private routes, as well as customizing layouts.
    This builds upon SvelteKit's routing feature by adding authentication, and a `(private)` and `(public)` sections.

-   **Design System Integration**: We include an established base design system that utilizes `shadcn-svelte`. It
    includes many important considerations including theming, validation, incredible flexibility, and a great
    developer experience.

-   **AGIL Ops Hub Module Integration**: We include a CLI tool to allow you to install web components from each
    of our modules seamlessly.

## CLI

The AGIL Ops Hub `Command-Line Interface` (CLI) is a tool to facilitate installation of Modlet (Web Frontend of Modules)
into `Web Base`.

## Web Libraries

A series of libraries to facilitate with web development on our platform, these are published as `npm modules` but are
designed to have integration with our CLI to minimize intallation steps when installing to the `Web Base`.

-   [Logger](/docs/modules/web-base/development/logger.mdx)
-   [SSE Client](/docs/modules/web-base/development/sse-client.mdx)
-   [GraphQL Client](/docs/modules/web-base/development/graphql-client.mdx)
