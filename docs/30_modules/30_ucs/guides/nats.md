---
sidebar_position: 5
---

# Nats

We used nats subject-based messaging within UCS services.

Below is the list of nats subject in use.

```
UPDATEROOM_TOPIC     string = "roomUpdates.{sid}"
STARTRECORDING_TOPIC string = "recordingStart"
ENDRECORDING_TOPIC   string = "recordingEnd.{sid}"
STARTPLAYBACK_TOPIC  string = "playbackStart"
ENDPLAYBACK_TOPIC    string = "playbackEnd.{sid}"
DELETEPLAYBACK_TOPIC string = "playbackDelete.{sid}"
PAUSEPLAYBACK_TOPIC  string = "playbackPause.{sid}"
PLAYBACK_TOPIC       string = "playback.{sid}"
INSERT_CALLUSERID_TOPIC string = "insertCallUserId.{sid}"
DELETE_CALLUSERID_TOPIC string = "deleteCallUserId.{sid}"
INSERT_CHATUSERID_TOPIC string = "insertChatUserId.{sid}"
DELETE_CHATUSERID_TOPIC string = "deleteChatUserId.{sid}"
```
