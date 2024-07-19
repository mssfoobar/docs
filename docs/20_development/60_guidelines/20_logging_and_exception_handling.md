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

We use `aohlog` package from [aoh-golib](https://github.com/mssfoobar/aoh-golib). `aohlog` is built on top of the
popular logging library zap by uber with preconfiguration to suite AOH framework.

Below is the supported log levels and their specific use cases
- `DEBUG` - for anything that will help diagnosed the application
- `INFO` - for any important events of the application that will be useful to monitor
- `WARN` - for when there is an error occurs but application can automatically recover
- `ERROR` - for when there is an error occurs which is fatal to the operation, but not the application
- `FATAL` - for when there is an error occurs which is fatal to the application

Example:

```go
import (
    "github.com/mssfoobar/aoh-golib/logger"
    "go.uber.org/zap"
)

func main() {
    aohlog.Debug("This is a DEBUG message")
    aohlog.Info("This is an INFO message")
    aohlog.Info("This is an INFO message with additional fields", zap.String("region", "us-west"), zap.Int("id", 2))
    aohlog.Warn("This is a WARN message")
    aohlog.Error("This is an ERROR message")
    // aohlog.Fatal("This is a FATAL message")   // would exit if uncommented
}
```

Output
```text
{"level":"INFO","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:10","msg":"This is an INFO message"}
{"level":"INFO","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:11","msg":"This is an INFO message with fields","region":"us-west","id":2}
{"level":"WARN","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:12","msg":"This is a WARN message"}
{"level":"ERROR","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:13","msg":"This is an ERROR message"}
```

### Error Handling

:::info
[***`GO CODING GUIDE`***](./30_Coding%20Guides/20_golang.md#errors) already covered how to handle error. this part of 
error handling is just a reiteration of it to highlight error handling by logging
:::

Logging is a part of error handling. If the application encounters an error, use an appropriate logging level to 
log it.

Don't log the error every time one occurs, as doing so will create duplicate logs in your application.
Instead, return the error to the caller and let it log the error when appropriate.

`FATAL` should be only used at the highest level in your code which is at the `main()` function.
`FATAL` logs the message and then immediately calls ***os.Exit(1)***. This can have several consequences such as 
- defer statements in other goroutines don't run
- buffers aren't flushed
- temporary files and directories aren't removed
