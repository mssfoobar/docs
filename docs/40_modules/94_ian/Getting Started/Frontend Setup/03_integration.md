# Component Integration Guide
This guide assumes that you will be integrating the IAN components with the web-base. If you have yet to set up the web-base, you can do so [here](../../93_base/Getting_Started/).

# Update environment variables
In your env variables file, add in the following:

```env title=".env"
IAN_URL=http://localhost:8000
RTUS_SEH_URL=
```
The `IAN_URL` is the URL where the IAN backend is currently deployed. By default, if you are deploying it locally, it should be as above.
The `RTUS_SEH_URL` is the URL where the RTUS SEH is currently deployed.

:::info
RTUS SEH is the service which provides real-time updates via server-sent events.
:::

## Update Header bar
:::info
The following steps assume you are putting the notification badge, along with the dropdown menu, within the default web base header bar. If you are putting it within your custom header bar, please edit in the correct file respectively.
### Step 1
:::
#### Imports
```js title="src/lib/aoh/core/components/layout/Headerbar"
import NotificationContainer from "$lib/aoh/ian/components/NotificationContainer/index.svelte";
```

### Step 2
#### Within the header element
```html
<header class="...">
...
  ...
  <Toggle ...>

  </Toggle>
  //highlight-next-line
  <NotificationContainer />
</header>
```

:::info
The NotificationContainer is a container that containers both the notification button and the dropdown menu.

Using shadcn-svelte's dropdown menu component, the notification button is nested within the DropdownMenu.Trigger element, which allows the dropdown menu to expand when the notification button is clicked.

For more information, visit shadcn-svelte's dropdown menu component [documentation](https://next.shadcn-svelte.com/docs/components/dropdown-menu).
:::

# Update +layout.svelte
:::info
Explain +layout.svelte + provide link
:::
### Step 1

#### Imports
```js title="src/routes/(private)/+layout.svelte" showLineNumbers
import { onMount, onDestroy } from "svelte";
import { notificationStore, updateNotificationStore } from "$lib/aoh/ian/stores/notificationStore";
import { SSESubscribeClient } from "@mssfoobar/sse-client";
import Icon from "$lib/aoh/ian/components/Icon/index.svelte";
import type { Message } from "$lib/aoh/ian/types/types";
import { env } from "$env/dynamic/public";
import CustomToast from "$lib/aoh/ian/components/toast/index.svelte";
import { toast } from "svelte-sonner";
import { Toaster } from "$lib/aoh/ian/components/ui/sonner";
import { updateMessageStatus } from "$lib/aoh/ian/api/notifications";
import toastNotificationSound from "$lib/aoh/ian/assets/sounds/toastNotification.mp3"
```
### Step 2
Include the following code block below above the `initializeSidebar()` function:
```js title="src/routes/(private)/+layout.svelte" showLineNumbers
const baseSehUrl = env.PUBLIC_RTUS_SEH_URL;

	let unsubscribe: () => void;

	interface IanSSEData {
		unread_count: number;
		message: Message;
	}

	let sseClient: SSESubscribeClient<IanSSEData>;

		onMount(() => {
		if (data.quickAccessData && data.unreadCount !== undefined) {
			updateNotificationStore(data.quickAccessData, data.unreadCount, true);
		}
		if (data.user?.active_tenant?.tenant_id && data.user.sub) {
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
						updateNotificationStore([message], unread_count, false, "sse");
					},
					Updated: (data) => {
						const { unread_count, message } = data;
						updateNotificationStore([message], unread_count, false, "sse");
					},
				},
			});

			sseClient.connect();
		}

		unsubscribe = notificationStore.subscribe((state) => {
			if (state.notificationData) {
				const { ref_link, ...otherProps } = state.notificationData;

				//@ts-expect-error toast expects a string or ComponentType
				toast(CustomToast, {
					classes: {
						toast: "dark:border-stone-700 min-w-[250px] w-auto bg-background",
						closeButton: "bg-popover text-popover-foreground hover:!bg-muted-foreground",
					},
					componentProps: {
						...otherProps,
						ref_link,
						// icon: state.notificationData.icon_id,
						onClick: () => {
							if (ref_link) {
								updateMessageStatus(state.notificationData?.message_id);
								window.location.href = ref_link;
							}
						},
					},
					duration: 50000,
				});

				const toastAudio = new Audio(toastNotificationSound)
				toastAudio.play();

				notificationStore.update((store) => ({
					...store,
					notificationData: null,
				}));
			}
		});
	});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
		if (sseClient) {
			sseClient.disconnect();
		}
	});
```

### Step 3
Include the `<toaster>` element within the `<AuthProvider>` element.
```html title="src/routes/(private)/+layout.svelte"
<AuthProvider claims={...}>
    ...
    //highlight-next-line
			<Toaster position="bottom-right" closeButton class="flex justify-end" expand={true} />
		</div>
	</div>
</AuthProvider>
```

# update +layout.server.ts
:::info
explain briefly what +layout.server.ts is and provide link
:::
