# Prerequisites
This section assumes that you are using the [web base](../../../93_base/01_Getting_Started/1-introduction.md), and have already set it up with Keycloak. It also assumes that you are using the Windows Operating System.

## Access
### IAN GitHub Repository
Access permissions are required to have access to the Ian GitHub Repository. Contact the AOH (Agil Ops Hub) Team for more information.

### NPMRC
NPMRC will need to be configured with AOH's registry to install the ian package.

We recommend setting the NPMRC at the user level, to prevent accidental pushes to the remote repository. However, you can also set it up at the environment or project level. For more information, you can visit the [official npmrc docs](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc).

In your user's home directory, create a `.npmrc` file and add the line below inside `.npmrc` before saving it. Replace `<your PAT Token here>` with your actual PAT Token generated from GitHub.

```npmrc title='C:\Users\user'
@mssfoobar:registry=https://npm.pkg.github.com:_authToken=<your PAT Token here>
```

:::tip
You can follow GitHub's official documentation to generate your PAT Token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). This step assumes that you already have access permissions to the ian repository.
:::

## Tools

### Node.js
Node.js has to be installed in order to use npm (Node Package Manager) and its commands like `npm install` to install the ian package. You can download Node.js using any of the methods available in their [official download page](https://nodejs.org/en/download/package-manager).



:::info
In terms of knowledge required to understand the IAN codebase, you can refer to this [section](../../../93_base/01_Getting_Started/1-introduction.md#technologies-used) of the Web Base to understand the technologies used to build the IAN components.
:::