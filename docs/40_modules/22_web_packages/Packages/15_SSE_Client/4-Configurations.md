# Configurations

## SSESubscribeClient Object Shape
```js
interface BaseSSEClientConfig<T> {
	readonly tenantId: string;
	readonly mapName: string;
	readonly domainURL: string;
	readonly init?: boolean;
	readonly maxReconnectAttempts?: number;
	readonly baseReconnectDelay?: number;
	readonly eventHandlers?: { [K in EventName]?: (data: T) => void };
	readonly refreshUrl?: string;
	readonly onAnyEvent?: (eventName: string, data: T) => void;
	readonly onConnected?: (event: Event) => void;
	readonly onDisconnected?: (error?: Error) => void;
	readonly OnReconnecting?: (attempt: number) => void;
	readonly onError?: (error: Error) => void;
}
```

:::info
Only `tenantId`, `mapName`, and `domainURL` are mandatory properties when initializing the SSESubScribeClient class, as they are required to form the URL to call the RTUS SEH.
:::

## Initialization Example of SSESubscribeClient

```js title="For User-based mapping"
const baseSehUrl = env.PUBLIC_RTUS_SEH_URL;
.
.
.
onMount(() => {
	.
	.
	.
	const domainURL = `${baseSehUrl}`;
	const tenantId = data.user.active_tenant.tenant_id;
	const mapName = "ian";
	const userId = data.user.sub;

	sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				mapName,
				userId,
				init: false,
				maxReconnectAttempts: 10,
				baseReconnectDelay: 1000,
				eventHandlers: {
					Added: (data) => {
						const { unread_count, message } = data;
						console.log("Added.")
					},
					Updated: (data) => {
						const { unread_count, message } = data;
						console.log("Updated.")
					},
					Removed: (data) => {
						const { unread_count, message } = data;
						console.log("Removed.")
					},
					Timeout: (data) => {
						const { unread_count, message } = data;
						console.log("Timeout.")
					},
				},
				onAnyEvent: (eventName, data) => {
					console.log(`Received event ${eventName}`, data);
					// Additional custom handling of the event
				},
				onConnected: () => {
					console.log("Connected to SSE");
				},
				onDisconnected: () => {
					console.log("Disconnected to SSE");
				},

				OnReconnecting: () => {
					console.log("Attempting to reconnect to SSE");
				},
				OnError: (error) => {
					console.log("Error handling message here.", error)
				}
			});
})
```

:::info
For `map-based` mapping for the [GIS service](../../../40_gis/introduction.md), userId is not required to form the URL for RTUS-SEH.
:::

## maxReconnectAttempts
The `maxReconnectAttempts` property will determine the maximium amount of time the sse-client will attempt to reconnect to RTUS SEH. If this property is not included in the initialization of the SSESubscribeClient class, it will have a default value of 10.

```js title="initialization example of SSESubscribeClient"
sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				mapName,
				userId,
				init: false,
                //highlight-next-line
				maxReconnectAttempts: 10,
				baseReconnectDelay: 1000,
                ...
```

## baseReconnectDelay
The `baseReconnectDelay` property will determine the delay between reconnection attempts when the SSE client tries to reestablish a connection with the RTUS SEH after being disconnected.

```js title="initialization example of SSESubscribeClient"
sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				mapName,
				userId,
				init: false,
				maxReconnectAttempts: 10,
                //highlight-next-line
				baseReconnectDelay: 1000,
                ...
```
However, as its name suggests, it is only the `base` reconnection delay time. Exponential backoff and "jitter," or randomness, is also integrated within the calculation of the reconnection delay time to mitigate the potential of a [thunder herding problem](https://en.wikipedia.org/wiki/Thundering_herd_problem).

:::info
The exponential backoff algorithm implemented takes reference from AWS's "exponential backoff with full jitter" algorithm, which can be found [here](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/).
:::

## eventHandlers
The RTUS-SEH service currently supports 4 custom events: `Added`, `Removed`, `Updated` and `Timeout`. With the `eventHandlers` property, the application will be able to respond to the different custom events respectively.

```js
sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				mapName,
				userId,
				init: false,
				maxReconnectAttempts: 10,
				baseReconnectDelay: 1000,
				//highlight-start
				// this example shows 2 eventHandlers for the "Added" and "Updated" events
				eventHandlers: {
					Added: (data) => {
						const { unread_count, message } = data;
						updateNotificationStore([message], unread_count, false, "sse");
					},
					Updated: (data) => {
						const { unread_count, message } = data;
						updateNotificationStore([message], unread_count, false, "sse");
					},
				},
				//highlight-end
```
## refreshUrl
The `refreshUrl` property allows the application to set the specific URL endpoint responsible for token refresh. If left empty, the default url will be the default `Web Base` token refresh URL.

```js
sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				mapName,
				userId,
				init: false,
				maxReconnectAttempts: 10,
				baseReconnectDelay: 1000,
				//highlight-next-line
				refreshUrl: '/api/to/refresh/token'
```

## onAnyEvent
The `onAnyEvent` property is a catch-all handler intended for common logic that applies to all events, regardless of the specific event type.

```js
const domainURL = `${baseSehUrl}`;
	const tenantId = data.user.active_tenant.tenant_id;
	const mapName = "ian";
	const userId = data.user.sub;

	sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				.
				.
				.
				//highlight-start
				onAnyEvent: (eventName, data) => {
					console.log(`Received event ${eventName}`, data);
					// Additional custom handling of the event
				},
				//highlight-end
				.
				.
			});
})
```

## onConnected
The `onConnected` property allows the application to handle the EventSource [open event](https://developer.mozilla.org/en-US/docs/Web/API/EventSource/open_event) when the event source is opened.

```js
const domainURL = `${baseSehUrl}`;
	const tenantId = data.user.active_tenant.tenant_id;
	const mapName = "ian";
	const userId = data.user.sub;

	sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				.
				.
				.
				//highlight-start
				onConnected: () => {
					console.log("Connected to SSE");
				},
				//highlight-end
				.
				.
			});
})
```
## onDisconnected
The `onDisconnected` property allows the the application to to handle and execute custom logic when the connection to the SSE server is lost or closed.

```js
	sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				.
				.
				.
				onConnected: () => {
					console.log("Connected to SSE");
				},
				//highlight-start
				onDisconnected: () => {
					console.log("Disconnected to SSE");
				}
				//highlight-end
				.
				.
				.
			});
})
```

## onReconnecting
The `onReconnecting` property allows the application to handle and execute custom logic when the sse-client is attempting to reconnect to the RTUS-SEH service.

```js
sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				.
				.
				.
				onConnected: () => {
					console.log("Connected to SSE");
				},
				onDisconnected: () => {
					console.log("Disconnected to SSE");
				},
				// highlight-start
				onReconnecting: () => {
					console.log("Attempting to reconnect to SSE");
				},
				// highlight-end
				.
				.
				.
			});
})
```
## onError
The `onError` property allows the application to handle and execute custom logic when an error is encountered, e.g. logging the error or displaying a user-friendly message.

```js
sseClient = new SSESubscribeClient({
				domainURL,
				tenantId,
				.
				.
				.
				onConnected: () => {
					console.log("Connected to SSE");
				},
				onDisconnected: () => {
					console.log("Disconnected to SSE");
				},
				onReconnecting: () => {
					console.log("Attempting to reconnect to SSE");
				},
				// highlight-start
				onError: (error) => {
					console.log("There is an error.");
				}
				// highlight-end
				.
				.
				.
			});
})
```
