---
sidebar_position: 4
---

# 📘 Logging

We standardize our log format to allow searching through logs to be methodical. This is important for us to be able to
filter logs in a standardized way.

## Format

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
