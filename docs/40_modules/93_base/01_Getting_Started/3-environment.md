# Installation

### 1. Clone the repository:

1. Clone the repository:

```
git clone https://github.com/mssfoobar/docs
```

### 2. Configuring Environment Variables

To configure variables that differ between environments, we use environment variables. These variables are stored in a .env file located at the root of the directory.
To get started, please make a copy of the .env.example file located at the root of the repository., which contains the required variables, and rename it to .env. This new file will hold your environment-specific configuration details.

:::note
As stated above, Keycloak is required to be deployed prior to this installation. Please ensure that this is completed before proceeding further.
:::

The following variables _must_ be configured:

- **IAM_URL**: the full URL for the OIDC provider. (This is provided during the keycloak deployment)
- **IAM_CLIENT_ID and IAM_CLIENT_SECRET**: credentials to connect to the IAM server (This is provided during the keycloak setup)
- **PUBLIC_DOMAIN**: this is the domain of your web module.
- **LOGIN_DESTINATION**: the route to navigate to after successful login
- **LOGIN_PAGE**: the route for the login page

Please have these variables filled out accordingly.