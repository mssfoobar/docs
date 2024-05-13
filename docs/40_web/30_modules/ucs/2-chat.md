# Chat

## Summary

The chat is the web component that allows the user to communicate with one or more other users. Inorder to join the room, the user must pass a set of prepared data.

#### Parameter

- `uid` (string): Unique identifier for the the user.
- `username` (string): The that is shown to other participants when you send messages or interact within the chat
- `room` ([room](room)): The properties of the room.

## Usage

```svelte
<script lang="ts">
  import Chat, {
    Chat_Menu_Type,
  } from "$lib/core/modules/ucs/components/Messaging/Chat/index.svelte";

  let uid: string = "user1"
  let displayName: string = "User One"
  let room: Room  = { name: room.room_name,
                                id: room.room_id,
                                status: room.room_status,
                                allowed_user_id: room.room_allowed_user_id,
                                is_chat1to1: room?.room_is_chat1to1,
                                archived_user_id: room?.room_archived_user_id, }
  let client: GQLClient
</script>

<!-- Usage example -->
<Chat
    uid={uid}
    username={displayName}
    room={room}
/>
```

Hello
