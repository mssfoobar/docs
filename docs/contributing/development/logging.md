---
sidebar_position: 3
sidebar_label: Logging
---

# Logging

# Logging & Exception Handling

The ultimate purpose of standardizing our logging and exception handling is to make it easier to debug the system.
Logging in a specific format allows us to filter logs across services, and standardizing exception handling allows us
to make better sense of the errors thrown.

## General Logging Guidelines

The following is a list of recommendations we have for what should be printed at which log levels. The recommendations
are based on the assumption that the system will be running at `INFO` level when in production mode.

| Log Level | Example                                      | Description                                                                                                                                                                             |
| --------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DEBUG`   | `request received, show all inputs`          | Provide information that can be used to diagnose issues especially those related to program state.                                                                                      |
| `INFO`    | `server ready to listen to requests`         | Record events that indicate that program is functioning normally.                                                                                                                       |
| `WARN`    | `no host name supplied, using default value` | Record potential issues in your application. They may not be might need to be investigated.                                                                                             |
| `ERROR`   | `failed to connect to database`              | Records unexpected errors that occur during the operation of your application. In most cases, the error should be addressed as soon as possible to prevent further problems or outages. |

`TRACE` and `FATAL` might be supported by different logging frameworks in different languages. Since we support multiple
languages, we will not restrict these log levels, however we don't have official recommendations on what must be
logged at these levels, except that `TRACE` be the lowest log level (most verbose), and `FATAL` be the highest log
level (printed at all log levels).

## TypeScript, Svelte (Frontend)

### Format

The logs must be formatted as a JSON - this allows us to perform searches based on the key, as well as pretty print
the logs using tools:

It must minimally have one of the following log levels:

-   `DEBUG`
-   `INFO`
-   `WARN`
-   `ERROR`

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

### Retries

:::info
TLDR; errors that result in retries should be logged as `WARN`
:::

Often, there might be processes that result in errors that are actually anticpated or expected (for example, token
expiries, or network errors might be retried) - these errors might be retried, and succeeded. In those scenarios, the
errors should be logged with `WARN`, only the final error should be logged as `ERROR`, or maybe even `FATAL` in
fatal/panic scenarios.

## Golang (Backend)

### Logging

Logging should be in JSON structured format to make it easier to be read, searched and analyzed by any application or an
interested individual.

We use `aohlog` package from [aoh-golib](https://github.com/mssfoobar/aoh-golib). `aohlog` is built on top of the
popular logging library zap by uber with preconfiguration to suite AOH framework.

Below is the supported log levels

-   `DEBUG`
-   `INFO`
-   `WARN`
-   `ERROR`
-   `PANIC`
-   `FATAL`

Example:

```go
import (
    aohlog "github.com/mssfoobar/aoh-golib/logger"
    "go.uber.org/zap"
)

func main() {
    // by default aohlog set log level to Production which log at `INFO` or above log level
    // if you want to see log at `DEBUG` or above, set it explicitly
    aohlog.SetDevelopment()

    // aohlog.SetProduction() // if uncommented, this will set the log level back to `INFO`

    aohlog.Debug("This is a DEBUG message")
    aohlog.Info("This is an INFO message")
    aohlog.Info("This is an INFO message with additional fields", zap.String("region", "us-west"), zap.Int("id", 2))
    aohlog.Warn("This is a WARN message")
    aohlog.Error("This is an ERROR message")
    // aohlog.Panic("This is a Panic message")   // would exit if uncommented
    // aohlog.Fatal("This is a FATAL message")   // would exit if uncommented
}
```

Logging at development mode will print the log in semi-structured format which is easier for human to read.

```text
2024-08-16T11:58:20.938+0800    DEBUG   example/main.go:15 This is a DEBUG message
2024-08-16T11:58:20.938+0800    INFO    example/main.go:16 This is an INFO message
2024-08-16T11:58:20.938+0800    INFO    example/main.go:17 This is an INFO message with additional fields  {"region": "us-west", "id": 2}
2024-08-16T11:58:20.938+0800    WARN    example/main.go:18 This is a WARN message
2024-08-16T11:58:20.938+0800    ERROR   example/main.go:19 This is an ERROR message
```

Logging at production mode will print the log in json structured format which is easier for machine to parse and
analyze.

```text
{"level":"INFO","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:10","msg":"This is an INFO message"}
{"level":"INFO","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:11","msg":"This is an INFO message with fields","region":"us-west","id":2}
{"level":"WARN","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:12","msg":"This is a WARN message"}
{"level":"ERROR","ts":"2024-07-19T16:46:45.726+0800","caller":"example/main.go:13","msg":"This is an ERROR message"}
```

### Error Handling

:::info
[**_`GO CODING GUIDE`_**](../language-specific/golang.md#errors) already covers how to handle error. This section on
error handling is just a reiteration of it to handle error by logging.
:::

Logging is a part of error handling. If the application encounters an error, use an appropriate log level to
log it.

Don't log the error every time one occurs, as doing so will create duplicate logs in your application.
Instead, return the error to the caller and let it log the error when appropriate.

`FATAL` should be only used at the highest level in your code which is at the `main()` function.
`FATAL` logs the message and then immediately calls **_os.Exit(1)_**. This can have several consequences such as

-   defer statements in other goroutines don't run
-   buffers aren't flushed
-   temporary files and directories aren't removed
