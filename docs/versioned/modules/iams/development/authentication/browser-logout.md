---
sidebar_position: 4
---

# Browser Logout using OpenID Logout Flow

AGIL Ops Hub Web Framework also implement the OpenID Logout Flow to allow user to logout from Application.

The following flow chart depicts how the Logout Flow work:

:::note
AGIL Ops Hub `Web Base` currently does not support Single Logout. Will implement this feature in future release.
:::

![Logout](/img/modules/iams/development/authentication/logout/logout.png)

1. User initiate the logout request to Web App Backend.

2. Web App Backend then redirect the user to the Keycloak server with the following information:

-   **client_id** – the client id of the Web App Backend at Keycloak
-   **post_logout_redirect_uri** – the URL that Keycloak should redirect user back to after logout
-   **id_token_hint** – ID token of the user. Retrieve from the user cookies stored during login.

:::note
As `ID token` is not stored, `Web Base` will invoke `Keycloak` endpoint to refresh the tokens. 
The return value of this endpoint are refreshed `Access Token`, `Refresh Token`, and `ID Token`, 
which will be used for the `id_token_hint`.
::: 

3. Keycloak will then validate that `id_token_hint` and `post_logout_redirect_uri` are valid. If valid, Keycloak will terminate the 
user session and redirect user back to the specified `post_logout_redirect_uri`.

4. Web App Backend will instruct browser to delete the cookies that store the id and access tokens.
