---
sidebar_position: 2
---

# Token Management

![PTMGR](./PTMGR.png)

## Store newly generated token

When user login into the app, call the [API](../PTMGR%20API/put-token.api.mdx) to store the push token in the IAMS 
user profile.

## Refresh existing token

For subsequent login, call the same [API](../PTMGR%20API/put-token.api.mdx) to refresh the push token in the IAMS user 
profile.

## Expire existing token

PTMGR service will automatically expire the token after certain period of time. Expire time can be configured in the 
PTMGR configuration file.

