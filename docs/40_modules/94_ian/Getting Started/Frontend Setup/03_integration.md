# Component Integration Guide
This guide assumes that you will be integrating the IAN components with the web-base. If you have yet to set up the web-base, you can do so [here](../../../93_base/01_Getting_Started/1-introduction.md).

## 1. Update environment variables
In your env variables file, add in the following:

```env title=".env"
PUBLIC_IAN_URL=http://localhost:8000
PUBLIC_RTUS_SEH_URL=
```
The `PUBLIC_IAN_URL` is the URL where the IAN backend is currently deployed. By default, if you are deploying it locally, it should be as above.

The `PUBLIC_RTUS_SEH_URL` is the URL where the RTUS SEH is currently deployed.

:::info
RTUS SEH is the service which provides real-time updates via server-sent events.
:::

## 2. Update Headerbar

The following steps assume you are putting the `Notification Badge`, along with the `Dropdown Menu`, within the default web base headerbar. If you are putting it within your own custom header bar, please edit in the correct file respectively.

### Imports
```js title="src/lib/aoh/core/components/layout/Headerbar"
import NotificationContainer from "$lib/aoh/ian/components/NotificationContainer/index.svelte";
```

### Within the header component
```html title="src/lib/aoh/core/components/layout/Headerbar"
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

## 3. update +layout.svelte
+layout.svelte allows you to share common UI that applies to all the routes in the same directory.

As a result, we will be putting the toast component within the +layout.svelte found in the (private) folder. All routes in the (private) folder will therefore have the capability to see toast notifications based on real-time updates from RTUS SEH.

:::info
For more information regarding +layout.svelte, visit Svelte's [official tutorial](https://svelte.dev/tutorial/kit/layouts).
:::

### Imports
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
Include the following code block below above the `initializeSidebar()` function:
```js title="src/routes/(private)/+layout.svelte" showLineNumbers
	const baseSehUrl = env.PUBLIC_RTUS_SEH_URL;

	let unsubscribe: () => void;

	// expected structure of data received from RTUS SEH Service
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

			/* Configure and connect to the SSE Client
			- domainURL, tenantId, mapName, userId, and init are required fields from RTUS SEH
                        - if init is set to true, RTUS SEH sends initial stored values when the connection is established
			- eventHandlers are to allow the application to respond to the different custom events created by the RTUS SEH.
			*/
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

Include the `<toaster>` component within the `<AuthProvider>` component.
```html title="src/routes/(private)/+layout.svelte"
<AuthProvider claims={...}>
    ...
    //highlight-next-line
			<Toaster position="bottom-right" closeButton class="flex justify-end" expand={true} />
		</div>
	</div>
</AuthProvider>
```

## 4. update +layout.server.ts
The +layout.server.ts allows your load function to run on the server, for tasks like fetching data from database, or accessing private environment variables.

The data fetching happens before rendering, and will be passed to the Svelte components as props. Therefore, we are fetching data in the +layout.server.ts to populate the unread notification counter on the `notification badge`, as well as the `dropdown menu` data, on page load.
:::info
For more information regarding +layout.server.ts, visit Svelte's [official tutorial](https://svelte.dev/docs/kit/routing#layout-layout.server.js).
:::

Copy the code below into the +layout.server.ts file within the (private) folder.

### Imports
```js title="web/src/routes/(private)/+layout.server.ts"
import { env } from "$env/dynamic/public"
```
### Code block
Copy only the highlighted lines.
```js title="web/src/routes/(private)/+layout.server.ts"
export async function load( {locals} ) {

const authResult = locals.authResult;
//highlight-next-line
let user: AuthClaims | undefined;
.
.
if (authResult.success) {
	..
	//highlight-start
	let quickAccessData = { data: [] };
		let unreadCountData = { data: { total: 0 } };

		try {
			const quickAccessResponse = await fetch(
				`${baseUrl}/v1/users/${user?.sub}/quick-access?sort=created_at,desc`
			);

			if (!quickAccessResponse.ok) {
				throw new Error("Failed to fetch quick access data");
			}

			quickAccessData = await quickAccessResponse.json();
		} catch (error) {
			log.error("Error fetching quick-access data:", error);
		}

		try {
			const unreadCountResponse = await fetch(`${baseUrl}/v1/users/${user?.sub}/messages/unread-count`);

			if (!unreadCountResponse.ok) {
				throw new Error("Failed to fetch unreadCount data");
			}
			unreadCountData = await unreadCountResponse.json();
		} catch (error) {
			log.error("Error fetching unread count data:", error);
		}
		//highlight-end


		return {
			user: authResult.claims,
			//highlight-start
			quickAccessData: quickAccessData.data,
			unreadCount: unreadCountData.data.total,
			//highlight-end
		};
}
```

## API Call for Testing
To ensure that everything works smoothly, we can call the ian backend service API endpoint, with the payload below via Postman. This assumes that your ian backend service is already deployed and running.

```json
{
    "title": "Trip to Singapore",
    "body": "Day Trip to Singapore",
    "sender_id": "SENDER UUID HERE",
    "receiver_ids": ["RECEIVER UUID HERE"], // list uuid
    "tenant_id": "TENANT UUID HERE", // uuid
    "icon_id": "550e8400-e29b-41d4-a716-446655440000", // uuid
    "ref_link": "link that you want the user to be redirected to when clicked"
}
```
:::info
The icon_id is currently of data type `uuid` in the database, which is why dynamic icons are not available as of writing this documentation.
:::
