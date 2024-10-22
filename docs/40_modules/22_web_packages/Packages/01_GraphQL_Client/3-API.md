# API

## Query

The client.query function is used to execute a GraphQL query.
Parameters

- **client**: The GraphQL client instance. (use the graphql store imported)
- **document**: The GraphQL subscription query.
- **variables**: An object containing variables to pass to the subscription. (Optional)

Returns: Result object

```typescript title="query.svelte"
import { gqlClientStore } from "./graphql_client";
import { query } from "@mssfoobar/graphql/graphql";
const query = gql`
  query {
    user(id: 1) {
      name
      email
    }
  }
`;

const client = $gqlClientStore;
const result = await query(client, query, {});
```

## Subscription

### Subscribe

The subscribe function is used to subscribe to a GraphQL subscription. It takes in a client, document, variables, and a callback function to handle the result.

Parameters

- **client**: The GraphQL client instance. (use the graphql store imported)
- **document**: The GraphQL subscription query.
- **variables**: An object containing variables to pass to the subscription. (Optional)
- **onResult**: A callback function to handle the result of the subscription.

Returns:

- **Subscription**: The subscription object.

```typescript title="example.svelte"
<script lang="ts">
import { subscribe } from "./graphql";
import {gqlClientStore} from "./graphql_client"

const client = $gqlClientStore
const document = gql`
  subscription {
    newMessage {
      id
      text
    }
  }
`;

onMount(() => {
  subscribe(client, document, {}, (result) => {
    console.log(result.data.newMessage);
  });
});

```

### Unsubscribe

The unsubscribe function is used to unsubscribe from a GraphQL subscription. Normally, you would call this when the component is destroyed.

Parameters

- **subscription**: The subscription object to unsubscribe from.

Returns: None

```typescript title="unsubscribe example.svelte"
import { unsubscribe } from "./graphql";
import { gqlClientStore } from "./graphql_client";

const client = $gqlClientStore;
const subscription = subscribe(client, document, {}, (result) => {
  console.log(result.data.newMessage);
});

onDestroy(() => {
  // Later, unsubscribe from the subscription
  unsubscribe(subscription);
});
```
