---
sidebar_position: 2
---

# Pitfalls ⚰️

## Svelte & Svelte Kit

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

Since our application is meant to be run on `nodejs` and is built with `adapter-node`, the appropriate way to run the app is with

```
node build
```

This runs and `index.js` file inside the git-ignored 'build' folder. There is still the potential for your app to fail at this
point, so please test with `node build`.

# GraphQL

## URQL

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
