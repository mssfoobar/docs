# Installation

## Setup

To install to your web-base. Simply use the following command in the web-base.

```
npx cli install @mssfoobar/graphql
```

Alternatively, you may want to run this,
if you want a specific version of this package.

```
npx cli install @mssfoobar/graphql@<version tag>
```

## Post Installation

After installation, there will be a new folder copied to your web-base as displayed below:

```
.
├── aoh
│   └── core
        ...
│       ├── graphql
│       │   ├── configuration.json
│       │   └── graphql_client.ts

```

:::warning
Do not modify the code in these files unless you are absolutely sure of what you're doing.
:::

The GraphQL Client consists of two main files:

- **configuration.json**: This file requires the user to specify the GraphQL endpoint URL. You will need to update this file with your GraphQL endpoint for the client to work correctly.
- **graphql_client.ts**: This file contains the GraphQL client instance, which is stored in a Svelte store. You can import and use this client in your application to execute GraphQL queries and subscriptions.

### Post-installation Setup Instructions

To use the GraphQL Client, follow these steps:

```typescript
{
  "endpoint": "<Please input your graphql server endpoint here>"
}
```

Once done, you can use the graphql client to perform your query or subscription.
