---
sidebar_position: 2
---
# Custom Activity UI

Workflow Designer provides simple generative UI based on registered activities. However, depending on your use case, 
you may want to do more thant just displaying simple input fields. For example, you may want to populate your combobox 
with data pull from backend API. For that you need to write a custom activity UI in the workflow designer source code.

## Development

1. First clone the wfe repository. You can find it [here](https://github.com/mssfoobar/wfe). wfe repository is a 
   monorepo containing both backend and frontend. What you need is the frontend source code which is inside the `web` 
   directory.

```bash
git clone https://github.com/mssfoobar/wfe.git
cd wfe/web
```

2. Copy `.env.sample` to `.env` and fill in the required values.

:::note
Replaced `DEV_USER`, `DEV_PASSWORD`, and `DEV_DOMAIN` values with your env value set in 
[Quick Start Guide](../quickstart.md).
:::

```dotenv
IAM_URL=http://iams-keycloak.{DEV_DOMAIN}/realms/aoh/.well-known/openid-configuration
IAM_CLIENT_ID={DEV_USER}
IAM_CLIENT_SECRET={DEV_PASSWORD}
PUBLIC_DOMAIN=localhost
PUBLIC_COOKIE_ACCESS_TOKEN=wfe_access_token
PUBLIC_COOKIE_REFRESH_TOKEN=wfe_refresh_token
ORIGIN=http://localhost:5173
OIDC_ALLOW_INSECURE_REQUESTS=1
PUBLIC_SECURE_MODE="0"
LOGIN_DESTINATION=/aoh/wfd
WFM_URL=http://wfm.{DEV_DOMAIN}
````

3. Workflow Designer is built using [web-base](../../../20_web/introduction.md) and if you are already familiar with 
it, you will notice its structure. Your custom activity ui should be placed inside the `src/lib/wfd/activities` folder.

```bash
src
├── lib
│   ├── wfd
│   │   ├── activities
│   │   │   └── {ACTIVITY_TYPE}
│   │   │       └── index.svelte
```

`ACTIVITY_TYPE` is the name of your activity. For example, if your activity is registered as `helloworld` in 
`service_activity` table, create a file called `index.svelte` inside `src/lib/wfd/activities/helloworld` folder.

4. Using `activitySDK/api` internal library, you can set/get values for the activity input fields. For example, your 
activity `helloworld` have one input field called `name`, you can set the value using below code.

:::warning
You must use the `activitySDK/api` internal library to set/get values for the activity input fields. Failing to use this
library will result in value not being passed into workflow execution.
:::

```svelte
<script lang="ts">
	import { type Activity } from "$lib/aoh/wfd/activitySDK/api";
	
	// must declare this props
	let { activity }: {activity: Activity} = $props();
	
	let value: string = $state(activity.getParameter("name") || "");
</script>

<input type="text" bind:value onblur={() => activity.setParameter("name", value)} />
```

Above example snippet uses two apis provided by `activitySDK/api`:
- `activity.setParameter` - this api set the value of the input field with parameter name
- `activity.getParameter` - this api get the value of the input field with parameter name


5. Once you have the custom activity ui written, you can run application using `npm run dev` command. It will be available 
at `http://localhost:5173`

```bash
npm run dev
```

:::note
When prompted for user credentials, use `DEV_USER` and `DEV_PASSWORD` value set in the 
[Quick Start Guide](../quickstart.md).
:::

## Integration with backend service

If you want to integrate your custom activity UI with backend service, you need to create api endpoint in web 
application server. For example, if your custom activity UI is for `helloworld` activity, you can create an api 
endpoint at `/src/routes/(private)/aoh/wfd/api/helloworld/+server.ts` and it will be available at 
`http://localhost:5173/api/helloworld`.

```bash
src
└── routes
    ├── (private)
    │   ├── aoh
    │   │   └── wfd
    │   │       ├── api
    │   │       │   └── {ACTIVITY_TYPE}
    │   │       │       └── +server.ts
```

Your `+server.ts` file should look like below:

```typescript
export const GET: RequestHandler = async ({ locals }) => {
	const promise = await fetch("http://{your-backend-service-endpoint}", {
		method: "GET",
	});
	const response = await promise;
	const data = await response.json();
	return json(data);
};
```

Inside your custom activity source code, you can call this api endpoint using `fetch` api. Following the same 
`helloWorld` activity example, your `index.svelte` file should look like below:

```svelte
<script lang="ts">
	import { type Activity } from "$lib/aoh/wfd/activitySDK/api";
	
	// must declare this props
	let { activity }: {activity: Activity} = $props();
	
	let value: string = $state(activity.getParameter("name") || "");
	
	onMount(async () => {
	        // get data from backend and we only want to fetch it if the value is null
		if (activity.getUiState("data") == null) {
			const response = await fetch('wfd/api/helloworld', {
				method: 'GET',
			})
			const data = await response.json();
			activity.setUiState("data", data);
		}
	});
</script>

<input type="text" bind:value onblur={() => activity.setParameter("name", value)} />
```

Here we are using two new apis provided by `activitySDK/api`:
- `activity.setUiState` - use this api to persist the value other than input field
- `activity.getUiState` - use this api to get the value other than input field

## More Examples

Workflow Designer comes with `InAppNotification` activity which is a custom activity ui. You can find the source code 
[here](https://github.com/mssfoobar/wfe/blob/main/web/src/lib/wfd/activities/InAppNotification/index.svelte) to 
learn more about how to write a custom activity ui.