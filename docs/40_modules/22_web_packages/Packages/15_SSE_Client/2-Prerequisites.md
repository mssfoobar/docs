## Knowledge
<!-- The RTUS documentation is not created yet as of writing this documentation. When it is ready, link it below. -->
This documentation assumes that you have already read up on how RTUS works. If not, visit the RTUS documentation page. It also assumes that you are using [web base](../../../93_base/01_Getting_Started/1-introduction.md).

## Services
<!-- The RTUS documentation is not created yet as of writing this documentation. When it is ready, link the RTUS-SEH set up guide below. -->
The `RTUS-SEH` service will be required to be deployed or run locally to ensure that the sse-client can connect to it.

It is also assumed that the `RTUS-PMS` service is also deployed or run locally, and is already set up with your backend service.

## Access

### GitHub Repository
Access permissions are required to have access to the aoh-web-lib GitHub Repository. Contact the AOH (Agil Ops Hub) Team for more information.

### .npmrc
npmrc will need to be configured with AOH's registry to install the ian package.

We recommend setting the npmrc at the user level, to prevent accidental pushes to the remote repository. However, you can also set it up at the environment or project level. For more information, you can visit the [official npmrc docs](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc).

In your user's home directory, create a `.npmrc` file and add the line below inside the `.npmrc` file before saving it. Replace `<your PAT Token here>` with your actual PAT Token generated from GitHub.

```npmrc title='C:\Users\user'
@mssfoobar:registry=https://npm.pkg.github.com:_authToken=<your PAT Token here>
```

:::tip
You can follow GitHub's official documentation to generate your PAT Token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). This step assumes that you already have access permissions to the IAN repository.
:::

