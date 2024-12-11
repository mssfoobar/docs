# Overview
The `sse-client` is a wrapper that helps to simplify writing server-sent events (SSE) code on the frontend, as well as providing additional functionalities on top of it. It integrates with the `RTUS-SEH` service to enable real-time updates from the backend to the frontend via server-sent events.

:::info
Server-sent events works in an identical way to websockets when it comes to handling incoming events, although there are some differences e.g. it is a one-way connection. For more information, visit MDN's [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).
:::

