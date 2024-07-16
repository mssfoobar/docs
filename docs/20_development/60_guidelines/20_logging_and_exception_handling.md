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

## Golang (Backend)

### Logging

Logging should be in JSON structured format to make it easier to be read, searched and analyzed by any application or an
interested individual.

Supported log levels and their purpose
- `DEBUG` - for anything that will help diagnosed the application
- `INFO` - for any important events of the application that will be useful to monitor
- `WARN` - for when there is an error occurs but application can automatically recover
- `ERROR` - for when there is an error occurs which is fatal to the operation, but not the application
- `FATAL` - for when there is an error occurs which is fatal to the application

For any other data, create additional key-value pairs in json.

Example:

```json
{"level":"error","ts":1684092708.7246346,"caller":"pkg/main.go:12","error":"oh no something bad happened"}
```

### Error Handling

:::info
[***`GO CODING GUIDE`***](./30_Coding%20Guides/20_golang.md#errors) already covered how to handle error. this part of 
error
handling is just a reiteration of it to highlight error handling by logging
:::

Logging is part of the error handling. If the application encounters an error, use appropriate logging level to log it.

Do not always log the error whenever there is one. Doing so will create duplicated logs in your application.
Instead, return the error to the caller and let it logs the error when appropriate.

`FATAL` should be only used at the highest level in your code which is at the `main()` function.
`FATAL` logs the message and then calls ***os.Exit(1)*** straightaway. In principle this means:
- defer statements in other goroutines don't run
- buffers aren't flushed
- temporary files and directories aren't removed
