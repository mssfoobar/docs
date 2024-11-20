# Installation

## Setup

By default, the `web-base` already has the logger installed and should require not additional configuration for
development.

## Logger location

```
.
├── aoh
│   └── core
        ...
│       ├── logger
│       │   └── Logger.ts

```

This `Logger.ts` file simply imports the logger from `@mssfoobar/logger/Logger` and re-exports it as a Svelte store.

:::warning
Do not modify the code in these files unless you are absolutely sure of what you're doing.
:::

## Manual Installation

If you want to use the logger is a separate project (not the `web-base`), you can install it via:

```
npm install @mssfoobar/logger
```

You can now use the logger simply by importing it and using it in your typescript or Svelte files:

Example:

```jsx title="example.svelte"
<script lang="ts">
import { logger as aohLogger, type AohLogger } from '@mssfoobar/logger/Logger';

logger.info("I'm a fancy logger!");
</script>
```

We also recommend attaching additional attributes to the logger to provide more context as to where the log is
coming from:

```jsx title="example_with_more_context.svelte"
<script lang="ts">
import { logger as aohLogger, type AohLogger } from '@mssfoobar/logger/Logger';

// Create a 'child' logger that also appends the pathname under "src" and assign it to `log`
const log = logger.child({ src: new URL(import.meta.url).pathname });

log.debug("This output of this logger will not also include the pathname of this file!");
</script>
```