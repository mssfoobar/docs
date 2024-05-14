# Chat

## Summary

The chat is the web component that allows the user to communicate with one or more other users. Inorder to join the room, the user must pass a set of prepared data.

### Pre-requisites

The chat component requires a GraphQL client to be defined and initialized prior to the usage of the Chat component. This is due to the UCS using Graphql's query and subscription feature to retrieve messages at runtime. Without a functional GraphQL client with the appropriate schemas configured. The UCS cannot work.

### Parameter

- `uid` (string): Unique identifier for the the user.
- `username` (string): The that is shown to other participants when you send messages or interact within the chat
- `client` ([gqlClient](gqlClient)): A graphql client that handles the retrieval of new messages.
- `room` ([room](room)): The properties of the room.

:::note
The value of _room_ should be obtained from the database used by the UCS module and not randomly filled by the user.
:::



## Usage

```svelte
<script lang="ts">
  import Chat from "$lib/core/modules/ucs/components/Messaging/Chat/index.svelte";

  let uid: string = "user1"
  let displayName: string = "User One"
  let room: Room  = { name: "My Room"
                                id: "b62dd622-ffbf-4f7b-bec1-fb18bc2f1e67",
                                status: "Started",
                                allowed_user_id: ["f47ac10b-58cc-4372-a567-0e02b2c3d479", "3e16eaa5-3a7e-4ae0-92bf-32fe2b0e19f1"],
                                is_chat1to1: true,
                                archived_user_id: [ ˝], }
  let client: GQLClient = createGraphqlClient();
</script>

<!-- Usage example -->
<Chat
    uid={uid}
    username={displayName}
    room={room}
/>
```

Hello
