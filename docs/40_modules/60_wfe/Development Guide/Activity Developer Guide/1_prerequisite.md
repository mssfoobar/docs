---
sidebar_position: 1
---
# Prerequisites

You need to have WFE module installed and configured on your local machine to develop activity. If you don't have it, 
please refer to [Quick Start Guide](../quickstart.md).

:::important
You need db accessible to insert a new activity entry in the database and temporal api accessible to execute activities.
:::

For Activity development, make sure you have database and temporal api accessible from your local machine. To port 
forward them, configure `compose.override.yml` file with below example.

```yaml
name: aoh
services:
    wfe-db:
        ports:
            - 5432:5432
    temporal:
        ports:
            - 7233:7233
```
