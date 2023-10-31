---
sidebar_position: 5
---

# Publishing

## Manual Publishing

### 1. Test and use the packages before publishing:

-   In order to import components from `@mssfoobar/aoh-web` for testing, use `npm link`
    (see <https://docs.npmjs.com/cli/v8/commands/npm-link>)
-   This allows us to use components from `@mssfoobar/aoh-web` without adding it as a dependency in `package.json`.
    We can then test against our local copy before actually publishing them to the npm registry.

```bash
cd package
npm link

cd ../
npm link @mssfoobar/aoh-web
```

### 2. Publishing the ready packages:

The Svelte components here are published to `@mssfoobar/aoh-web`, to package and publish the components,
perform the following steps:

First, run `svelte-kit package` (experimental as of 10th May 2022) to create a package of the files in lib/src.
This may be configured via the `svelte.config.js` file.  
See: [https://kit.svelte.dev/docs/configuration#package](https://kit.svelte.dev/docs/configuration#package) & [https://kit.svelte.dev/docs/packaging](https://kit.svelte.dev/docs/packaging)

```bash
npm run package
```

Then, publish the packaged file. This repository defaults to publishing to our private registry, configured in the `.npmrc` file for installing npm modules, and the `package.json` file (`publishConfig`) for publishing `@mssfoobar/aoh-web`.

```bash
cd package
npm publish
```

:::note
You will be required to log in to access the private repository, obtain an account from the repository maintainer.
:::

## Automatic Publishing

GitHub Actions has been configured to automatically publish the package when a new release is created.

For more information on how to publish releases on GitHub, visit https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository.
