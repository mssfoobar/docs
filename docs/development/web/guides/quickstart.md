---
sidebar_position: 1
---

# Quickstart

## Pre-requisites

Please install the following programs and tools before setting up `aoh-web`:

Recommended Tools:

-   [Visual Studio Code](https://code.visualstudio.com/download)
-   [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Required:

-   [node.js](https://nodejs.org/en/) (version ^18.12.1)
-   [git](https://git-scm.com/downloads)

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/mssfoobar/aoh-web
```

:::caution

If you are not contributing directly to `aoh-web`, use https://github.com/mssfoobar-rnd/aoh-web instead.
You should also fork the project instead if you are using it as a template.

:::

Font Awesome requires an access token to install their modules from their private registry.
You will also need to set up your personal [GitHub Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to access our GitHub Packages repository.

2. Set up the access tokens:

```bash
npm set //npm.fontawesome.com/:_authToken=<YOUR_FORTAWESOME_ACCESS_TOKEN>
npm set //npm.pkg.github.com/:_authToken=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```

:::info
Sensitive tokens are not stored online, you'll need to ask your project manager for help with getting the access tokens.

:::

3. Copy the sample environment variable file and name it `.env`

```bash
cp .env.sample .env
```

This `.env` file will have its values loaded by Vite (as well as docker-compose) upon building and is made available
via the [$env API in Svelte Kit](https://kit.svelte.dev/docs/modules#$env-dynamic-private).

4. Install the node modules

    ```bash
    npm install
    ```

5. Get the latest GraphQL schema

    ```bash
    npm run getschema
    ```

:::danger

There is a 'predev' npm script that attempts to re-generate our GraphQL types everytime you run `npm run dev`.

You must ensure your `.env` file has the `GRAPHQL_ENDPOINT` variable set for `npm run getschema` to pull the schema from
the correct endpoint (see
[the development guide on getting types for GraphQL queries](../guides/development.mdx#query-types--graphql-codegen))

If you do not have a GraphQL endpoint set up and wish to omit the type generation, you must delete the `predev` script
from the `package.json` file to prevent the `graphql-codegen` script from running.

:::

6. Generate the `.svelte-kit` folder

    ```bash
    npx svelte-kit sync
    ```

This command is also run as a pre-build step - it generates types from your code, including anything that's loaded in
the `.env` files, allowing you to have Intellisense for the environment variables and more good stuff.

7. Run the server in development mode

    ```bash
    npm run dev
    ```

Visit `http://localhost:5173` to view the website

## Docker

For development purposes, you should run the project locally. However, to run it with `Docker`, ensure you have
[Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.

Before running the container, you must provide the access tokens for `docker-compose` to read. In step 2, you would
set it up with `npm config`, but for our `Docker` setup, you must pass them as environment variables:

-   `FORTAWESOME_ACCESS_TOKEN`
-   `GITHUB_ACCESS_TOKEN`

You may do so by providing a `.env.local` file:

```bash
FORTAWESOME_ACCESS_TOKEN=<YOUR_FORTAWESOME_ACCESS_TOKEN>
GITHUB_ACCESS_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```

:::caution

It is **FORTAWESOME** with an '_R_', not **FONTAWESOME**. Previous versions of AGIL Ops Hub used a FONTAWESOME token, this has changed as
we now host the packages ourselves for our CI to install. If you have a Fontawesome license and access to the official
Fortawesome private NPM registry, you should use that token and set up your CI with that instead.

:::

You may also supply `PORT` to override the default port.

```bash
FORTAWESOME_ACCESS_TOKEN=<YOUR_FORAWESOME_ACCESS_TOKEN>
GITHUB_ACCESS_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>

# Example to run on port 3001
PORT=3001
```

:::danger

`.env` is git ignored in our repo, do no put your tokens into the `.env` file; do not check your tokens into source!

:::

Then, you can run the container with:

```bash
docker-compose up
```

The `docker-compose` also uses 2 more environment variables that are required during build time:

-   `IMAGE_TAG`
-   `PUBLIC_STATIC_BUILD_VERSION`

These are to be set by the CI to allow us help with troubleshooting in deployed environments. For local development,
they are not necessary.

:::note
`PUBLIC_STATIC_BUILD_VERSION` is used in the ar2's `info` endpoint to provide the build version.
See the [API docs] for more information.
:::

You may view the `Dockerfile` and associated `docker-compose` for more details.

## Using the `aoh-web` components as a dependency

You can also use the published components by installing `@mssfoobar/aoh-web` and all it's peer dependencies.

```bash
npm install @mssfoobar/aoh-web tailwindcss postcss svelte @sveltejs/kit
```

:::note

`aoh-web` components are built for use in `SvelteKit` projects only, and uses `Tailwind CSS`.  
You must `Svelte` and `SvelteKit` installed and properly set up.

:::
