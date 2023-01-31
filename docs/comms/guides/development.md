---
sidebar_position: 1
---

# Development 💻

This is the documentation of frontend development for UCS backend specific features.

For common usage of sdk, please refer to the official document [ion-sdk-js](https://github.com/pion/ion-sdk-js).

## Message

Message is the payload send through data channel.

Message can be chat, incoming/outgoing call signal or file attachment.

Please see `mineType` enumeration for different types of messages.

### Schema

```json
{
  "uid": "string",
  "name": "string",
  "mimeType": "string",
  "text": "string",
  "attachment": {
    "name": "string",
    "size": 0,
    "filePath": "string"
  }
}
```

### MineType Enumeration

MineType determines the type of UCS communications.

| MineType        | Description               |
| --------------- | ------------------------- |
| message         | Chat message              |
| call-start      | Start video/audio call    |
| call-join       | Join video/audio call     |
| call-end        | End video/audio call      |
| attachment      | Share file attachment     |
| broadcast-start | Start sharing video       |
| broadcast-end   | Stop sharing video        |
| disconnect      | Disconnect from the room  |

## Chat

Set mineType to `message` and set the value of text in message schema.

```json
{
  "uid": "10206739",
  "name": "alex",
  "mimeType": "message",
  "text": "This is a test message"
}
```

## Audio/Video Call

Examples of message payloads for call.

### Start Call

```json
{
  "uid": "10206739",
  "name": "alex",
  "mimeType": "call-start"
}
```

### Join Call

```json
{
  "uid": "10208888",
  "name": "bob",
  "mimeType": "call-join"
}
```

### End Call

```json
{
  "uid": "10208888",
  "name": "bob",
  "mimeType": "call-end"
}
```

## File Sharing

There is a size limitation in WebRTC data channel which only accepts up to 16MB max.

We used MinIO presigned Url to upload/download file attachment. For more details on MinIO, please refer to their [official documentation](https://min.io/docs/minio/windows/index.html).

FilePath is the location of MinIO object. Set this to the value received from the [room mannagment API](../Room%20Management%20API/file-upload.api.mdx).

```json
{
  "uid": "10206739",
  "name": "alex",
  "mimeType": "attachment",
  "attachment": {
    "name": "testFile.txt",
    "size": 100,
    "filePath": "/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766"
  }
}
```