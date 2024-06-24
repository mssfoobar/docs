---
sidebar_position: 40
---

# Logging & Exception Handling

The ultimate purpose of standardizing our logging and exception handling is to make it easier to debug the system.
Logging in a specific format allows us to filter logs across services, and standardizing exception handling allows us
to make better sense of the errors thrown.

## TypeScript, Svelte (Frontend)

### Format

The logs must be formatted as a JSON - this allows us to perform searches based on the key, as well as pretty print
the logs using tools:

It must minimally have one of the following log levels:

-   TRACE
-   DEBUG
-   INFO
-   WARN
-   ERROR
-   FATAL

Example:

```json
{
    "level": "INFO",
    ...
}
```

Any other data can then be included as more keys in the log object:

Example:

```json
{
    "level": "ERROR",
    "timestamp": "2023-10-25T03:06:23.423+0000",
    "message": "Failed to secure the crown jewels. Aborting."
}
```

### Info vs Debug levels

-   `INFO` logs should be used sparingly on important events that occur infrequently
-   `DEBUG` logs can be used liberally. Useful logs that are used during application development can be left
    in production code but at `DEBUG` or `TRACE` as these will not be printed in production environments.

### Retries

:::info
TLDR; errors that result in retries should be logged as `WARN`
:::

Often, there might be processes that result in errors that are actually anticpated or expected (for example, token expiries,
or network errors might be retried) - these errors might be retried, and succeeded. In those scenarios, the errors should
be logged with `WARN`, only the final error should be logged as `ERROR`, or maybe even `FATAL` in fatal/panic scenarios.

## TODO: Golang (Backend)

### TODO: Logging Format

### TODO: Exception Handling
