# Configurations

## maxReconnectAttempts
The `maxReconnectAttempts` property will determine the maximium amount of time the sse-client will attempt to reconnect to RTUS SEH. If this property is not included in the initialization of the SSESubscribeClient class, it will have a default value of 10.

```js title="initialization example of the SSESubscribeClient"
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

```js title="initialization example of the SSESubscribeClient"
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

## refreshUrl

## onAnyEvent

## onConnected

## onDisconnected

## onReconnecting

## onError