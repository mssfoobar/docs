# API

The logger is essentially simply the Pino logger, whose API you can view here:

https://github.com/pinojs/pino/blob/main/docs/api.md

## Using the logger in the web base

When using the logger (in the web-base), import the logger from the store and log away:

```jsx title="use_the_store.svelte"
<script lang="ts">
import { logger } from '$lib/aoh/core/logger/Logger';

const log = logger.child({ src: new URL(import.meta.url).pathname });

log.debug("This output of this logger will not also include the pathname of this file!");
</script>
```

Note that due to a bug with Pino, when logging objects with the variadic arguments, you need to place your objects as
the first argument, and put the string message later:


```jsx title="add_extra_objects.svelte"
<script lang="ts">
import { logger } from '$lib/aoh/core/logger/Logger';

const log = logger.child({ src: new URL(import.meta.url).pathname });

let example_object = {
  hello: "World",
};

let other_object = {
  cards_in_a_deck: 52 
}

log.debug({ example_object, other_object }, "I just logged a bunch of objects...");
</script>
```

## Logger configuration via NODE_ENV

The extra configuration apply over the Pino API is that the log levels are fixed, and set via the `NODE_ENV`. The
logger is set to only run in the following 3 different log levels:

- trace
- info
- silent

These should not be configured manually, the appropriate log level will be chosen based on whether the logger is running
in the browser, or NodeJS, and based on the `NODE_ENV`

- When your `NODE_ENV` is either "development" or "preview", the log level will be set to `trace`.
- When your `NODE_ENV` is "staging", the log level will be set to `info`.
- When your `NODE_ENV` is "production", the log level will be set to `info` on NodeJS and `silent` in the browser.
- When your `NODE_ENV` is "silent", the log level will be forced to `silent` everywhere.

