# Room

## Overview

The Room JSON represents the metadata and configuration of a chat room, including details such as room ID, participants, creation timestamp, and settings. The room object is a core object that allows the [Chat](chat) component to work

## Keys

- `id` (string): Unique identifier for the room.
- `name` (string): The name of the room
- `status` ("Started" | "Booked | "Ended): The current state of the room.
- `is_chat1to1` (boolean): A flag that determines whether this room is used for a group chat or a private chat.
- `allowed_user_id` (string[]): The list of user ids that are allowed in this room.
- `archived_user_id` (string[]): The list of user ids who archived this room
