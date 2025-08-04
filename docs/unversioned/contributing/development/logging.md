---
sidebar_position: 4
sidebar_label: Logging & Error Handling
---

# Introduction

This document outlines the error handling strategy for AGIL Ops Hub. A consistent, clear, and robust error
handling mechanism is critical for platform stability, operator effectiveness, and maintainability. In a distributed
system like ours, a single user action can traverse multiple services, and we must be able to trace and understand
failures at every step.

Our philosophy is guided by these core principles:

-   **Clarity & Consistency:**

    Errors are handled and presented uniformly, regardless of where they originate.

-   **Actionability:**

    Error messages should empower users and developers to take the next appropriate step.

-   **No Sensitive Data Leakage:**

    Raw system errors, stack traces, or internal configurations must never be exposed to the enduser.

-   **Traceability:**

    Every error must be traceable across the entire request lifecycle using a unique correlationId.

-   **Graceful Degradation:**

    Services should fail predictably and not cause cascading failures.

## Standardized Error Response Format

All backend microservices **MUST** use the following JSON structure for error responses. This format will be the
standard contract for failure scenarios in any 4xx or 5xx HTTP response.

Standard Error Payload:

```json
{
	"timestamp": "2025-06-20T03:15:08.123Z",
	"correlationId": "d8a1c8c0-f8f2-4b2a-9e1d-3b4c1a9b0c2e",
	"errorCode": "INSUFFICIENT_PERMISSIONS",
	"errorMessage": "The operator does not have the required role ‘TENANT-ADMIN' for this action.",
	"details": [
		{
			"assetId": "X-WING-01",
			"requiredRole": "TENANT-ADMIN"
		}
	]
}
```

-   **timestamp**:

    A ISO 8601 UTC timestamp of when the error occurred.

-   **correlationId**:

    A unique identifier (UUID) for the request, generated at the edge (BFF) or the first point of entry. This ID MUST be
    propagated and logged across all subsequent service calls for that request.

-   **errorCode**:

    A machine-readable, unique, upper snake case (UPPER_SNAKE_CASE) string. This is the key used for
    decisions and translation.

-   **errorMessage**:

    A developer-focused, clear description of the error. This message is for logging and debugging, not for the
    end-user.

-   **details** (optional):

    An array of objects providing specific contextual information regarding the error.

## Guidelines by Component

### Backend Microservices

-   **Detect and Classify Errors**:

        - Business Logic Errors: _(e.g., `INVALID_INCIDENT_STATUS`)_. Return HTTP `400 Bad Request`or`409 Conflict`.
        - Validation Errors: _(e.g., `MISSING_REQUIRED_FIELD`)_. Return HTTP `400 Bad Request`.
        - Authentication/Authorization Errors: _(e.g., `INVALID_ACCESS_TOKEN`, `INSUFFICIENT_PERMISSIONS`)_. Return HTTP `401 Unauthorized` or `403 Forbidden`.
        - Resource Not Found: _(e.g., `USER_NOT_FOUND`)_. Return HTTP `404 Not Found`.
        - Internal/System Errors: (e.g., database connection failure, unexpected exceptions). Return HTTP `500 Internal Server Error`.

-   **Log All Errors**:

    -   Every time an error response is generated, a corresponding log entry **MUST** be created.
    -   Log Level: Use the `ERROR` level for 5xx failures and `WARN` for 4xx failures.
    -   Log Format: Structured logging (JSON) is mandatory.
    -   Log Content: The log entry must contain the `correlationId`, the full error response
        payload, the complete stack trace (for 5xx errors), and relevant request context (e.g.,
        endpoint, method, sanitized parameters). Never log sensitive data like passwords or
        tokens.

-   **Return Standard Error Responses**:

    -   Construct and return the standardized JSON error payload defined in earlier.
    -   The `errorMessage` should be specific enough to aid a developer in debugging without
        needing to immediately check logs. For example, “Database connection failed” is
        better than “An internal error occurred”.

### Backend for Frontend (BFF)

-   Propagate `correlationId`:

    -   If a `correlationId` exists in the incoming request header, propagate it to all downstream microservice calls.
    -   If it does not exist, generate a new UUID v4 and add it to the request context.

-   Handle Downstream Errors:

    -   When a microservice returns an error (4xx or 5xx), the BFF must catch it.

        -   **Step 1**: Log the Original Error. Log the complete, unmodified error response
            received from the microservice, including its correlationId, at the ERROR
            level. This is vital for cross-service debugging.
        -   **Step 2**: Translate the Error Code. Use the errorCode from the microservice
            response to fetch a user-friendly message from the App Settings and
            Preferences Service (Message Translation).
        -   **Step 3**: Construct Frontend-Facing Error. Create a simplified JSON payload
            to send to the frontend.

-   Handle BFF-Native Errors:

    -   If an error originates within the BFF itself (e.g., failure to connect to a microservice,
        timeout), the BFF must generate its own errorCode (e.g., INCIDENT-SERVICEUNAVAILABLE).
    -   It must follow the same process: log the technical details, then call the App Settings
        and Preference Service to translate its own errorCode into a user-friendly message.

-   Frontend-Facing Error Payload:

    -   The response sent from the BFF to the frontend should be simple and contain only
        what the UI needs.

```json
{
	"userMessage": "You do not have the required permissions to perform this action. Please contact your administrator.",
	"correlationId": "d8a1c8c0-f8f2-4b2a-9e1d-3b4c1a9b0c2e",
	"isRetryable": false
}
```

• `userMessage`: The safe, translated message to be displayed directly to the user.
• `correlationId`: The unique ID for the request.
• `isRetryable`: (Optional) A boolean hint for the UI. true for transient issues like network timeouts; false
for permanent failures like invalid data.

### Frontend (Web UI)

The frontend is responsible for the final presentation of the error to the operator in a clear and non-disruptive
manner.

-   Display the Error:

    -   On receiving an error response from the BFF, use a standardized UI component (e.g.,
        a toast, snackbar, or modal) to display the userMessage.
    -   The presentation should be consistent across the entire application.
    -   For inline form validation, errors should be displayed next to the relevant fields.

-   Expose the `correlationId`:

    -   The `correlationId` **MUST** be made available to the user, typically in an “Error
        Details” or “Advanced” section of the error message display.
    -   Instruct users to provide this ID when reporting an issue. This is the single most
        important piece of information for the support and engineering teams.
    -   Example display text: “An unexpected error occurred. If the problem persists, please
        contact support and provide this reference ID: d8a1c8c0-f8f2-4b2a-9e1d3b4c1a9b0c2e”

-   Handle Actionability:

    -   If the error payload includes hints (_isRetryable_), the UI can offer appropriate actions,
        such as a “Retry” button.
    -   For critical errors, provide clear next steps, like “Refresh Application” or “Return to
        Dashboard”.

-   Client-Side Exception Logging:

    -   All unhandled JavaScript exceptions within the browser must be caught by a global
        error handler and sent to a client-side logging service (e.g., Sentry). These logs
        should include session information, user agent, and view context to help debug UIspecific issues.

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
