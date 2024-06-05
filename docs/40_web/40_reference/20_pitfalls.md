---
sidebar_position: 20
---

# 💀 Pitfalls

Common mistakes, errors and pitfalls.

## Svelte & Svelte Kit

### 'document' or 'window' is not defined

> 'document' or 'window' is not defined

SvelteKit has a hybrid server-side-rendering and client-side-rendering model - the initial page is rendered on the
server, then subsequent execution of .svelte components is done on the client-side. This method provides a great
experience for site visitors but introduces some additional complexity. One important thing to note is that certain
libraries depend on the DOM to load (e.g. gridstack.js), loading on the server intially results in errors due to
`window` or `document` not existing on the server (nodejs). To circumvent this, we need to use dynamic imports.

### Asynchronous onMount functions

If you run an onMount function asynchronously, it returns a promise instead of a function. This will result in the
returned 'function' not being called.

See reference discussion: https://github.com/sveltejs/svelte/issues/4927

```jsx
onMount(async () => {
    bar = await baz();

    return () => {
        console.log("I'm never called!");
    };
});
```

To get around this, you can create and run an async function immediately inside onMount:

```jsx
onMount(() => {
    async function foo() {
        bar = await baz();
    }

    foo();

    return () => console.log("Now, I do get called when destroyed.");
});
```

### Svelte Store Usage

Any store which is meant to be specific to each individual client only always be set in `onMount` or in a `is (browser)`
check. This is because stores run on the server are global.

See reference discussion: https://github.com/sveltejs/kit/discussions/4339

:::caution

Understanding this is very important for avoiding bugs and potential leaking of sensitive information on the browser.
Please look through the linked discussion thoroughly.

:::

### Keying `{#each}` Blocks

If you use Svelte with any other framework that might manipulate the DOM or have an internal representation of the DOM
(e.g. GridStack), you will very likely run into issues with this.

See how and why to use `keyed each blocks`: https://svelte.dev/tutorial/keyed-each-blocks

> By default, when you modify the value of an each block, it will add and remove items at the end of the block, and update
> any values that have changed. That might not be what you want.

This will cause the frameworks' representations of the DOM to go out of sync. Adding a unique identifier (or 'key')
to the each block will allow Svelte to keep track of which element needs to be removed.

### Testing before merging code with `adapter-node`

Running the following commands to test your production build is not enough:

```
npm run build
```

```
npm run preview
```

Since our application is meant to be run on `nodejs` and is built with `adapter-node`, the appropriate way to run the
app is with:

```
node build
```

This runs and `index.js` file inside the git-ignored 'build' folder. There is still the potential for your app to fail
at this point, so please test with `node build`.

### Errors when executing `npm run dev`

# ERR_MODULE_NOT_FOUND

Sample Error:

```
error when starting dev server:
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '...' imported from ...
```

This type of error (ERR_MODULE_NOT_FOUND) typically happens when a new npm package is included into the project and you were not informed
of it, or might have forgotten to add/install it. You shouldbe able to resolve it simply by installing the new package.

Run:

```
npm install
```

# No matching export in `"src/generated/types.ts for import "..."`

Sample Error:

```
X [ERROR] No matching export in "src/generated/types.ts" for import "MapDataDocument"

    src/routes/(app)/map-view/+page.ts:4:28:
      4 │ import { type MapDataQuery, MapDataDocument } from '$generated-types';
```

You need to run `npm run generate` to generate the types from the GraphQL schema. This is likely to occur when you've
pulled other developers' changes and they might have added new queries to the project.

### Error when executing `npm run getschema`

# endpoint is required: `gq <endpoint>`

Sample Error:

```
> @mssfoobar/aoh-web@0.2.0 getschema
> env-cmd -f .env.development -x gq -H "X-Hasura-Admin-Secret: $PUBLIC_HASURA_ADMIN_KEY" --introspect > schema.graphql

 »   Error: endpoint is required: `gq <endpoint>`
```

Our usage of the `gq` command (which is 'graphqurl') requires the environment variable `GRAPHQURL_ENDPOINT` - it is not
set in your `.env.development` file, check the
[aoh-web wiki](https://github.com/mssfoobar/aoh-web/wiki/Environment-Variables) on what value you might need to set for
it.

# Executing query... error: `invalid x-hasura-admin-secret/x-hasura-access-key`

Sample Error:

```
> @mssfoobar/aoh-web@0.2.0 getschema

Executing query... error
Error:  {
  errors: [
    {
      extensions: [Object],
      message: 'invalid x-hasura-admin-secret/x-hasura-access-key'
    }
  ]
}
```

Calling the introspection endpoint to get the full schema requires privileged access. You need to set the
`PUBLIC_HASURA_ADMIN_KEY` environment variable in your `.env.development` file, check the
[aoh-web wiki](https://github.com/mssfoobar/aoh-web/wiki/Environment-Variables) on what value you might need to set for
it.

### Error when executing `npm run generate`

Sample Error:

```
✔ Parse Configuration
⚠ Generate outputs
  ❯ Generate src/generated/types.ts
    ✔ Load GraphQL schemas
    ✔ Load GraphQL documents
    ✖ Not all operations have an unique name: EmergencyDepartmentData
```

This error occurs when you run `npm run generate` when you already have generated types, and graphql-codegen seems to attempt to merge the types instead of replace them.

Delete your `/src/generated` folder (or just the `/src/generated/types.ts`) and run the command again, it should generate the types just fine.

You can do this by running `npm run clean`, which deletes the generated types.

This can also occur when not all operations have a unique name - especially if you had multiple identical operations in different files, then changed one of them without renaming them (so you really ended up with 2 different operations with the same name).

### Missing user role

Users' current role is based on their `active_membership` relationship to a membership they have. This is through the
foreign key `membership_id` in the `user_user` table. It is highly likely that the user has no active membership set
(no `membership_id` set). This relationship is used by Keycloak to populate the access token with the claims for the
user's role.

## GraphQL

### Reusing GraphQL Queries

`urql` caches queries and uses the same result for operations that have the same queries/subscriptions/mutations.

For example, if you create a subscription like so:

```gql title="Example GraphQL query"
    const ExampleSubscriptionDocument = gql`subscription ExampleSubscription {
        example_table {
            id
        }
    }`
```

And mutate it in multiple places:

```tsx title="ExampleA/index.svelte"
    pipe(
        client.subscription<ExampleSubscriptionSubscription>(ExampleSubscriptionDocument. {}),
        subscribe(async result => {
            myDataInA = result?.data?.unshift();
        }
    );
```

```tsx title="ExampleB/index.svelte"
    pipe(
        client.subscription<ExampleSubscriptionSubscription>(ExampleSubscriptionDocument. {}),
        subscribe(async result => {
            myDataInB = result?.data?.unshift();
        }
    );
```

The objects in result are actually shared - so mutating the resulting data arrays like in the example above will result
in the second operation not receiving the same values.

This is because `urql` shares those operations for performance reasons (so we don't need to have multiple operations
with the same GraphQL query). This however, means any mutations in one, will affect the other. Knowing this, you should
either copy out values for queries that will be used in multiple areas, or share the value directly via other mechanisms
(such as Svelte stores).
