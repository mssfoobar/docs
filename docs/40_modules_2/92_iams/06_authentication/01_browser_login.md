---
sidebar_position: 2
---

#	Browser Login using OpenID Connect (Authentication Flow)

OpenID Connect is a simple identity layer built on top of the OAuth 2.0 protocol, which allows clients to verify the identity of an end user based on the authentication performed by an authorization server or identity provider (IdP, such as Keycloak), as well as to obtain basic profile information about the end user in an interoperable and REST-like manner. 

OpenID Connect specifies a RESTful HTTP API, using JSON as a data format.

For more information on OpenID, please refer to the following link:
[https://openid.net/developers/how-connect-works/](https://openid.net/developers/how-connect-works/)

AGIL Ops Hub Web Framework is using Authentication (or Basic) Flow to perform user authentication, which is more secure than the Implicit Flow as the Client ID and Client Secret is send using backend communication instead of via the frontend communication (over internet).

The following flow chart depicts how the Authentication Flow work:

:::note
AGIL Ops Hub Web Framework handle the whole flow depicted below. Project just need to perform the necessary configuration and don’t need to implement the flow
:::

![Login](./images/6.1_login.jpg) 


1.	User make request to `Web App Backend` (based on `AGIL Ops Hub Web Framework`). If the request is to a resource that require login and user is not login yet, the Web App Backend will initiate the authentication process with the Keycloak.

To prepare for the authentication process, AGIL Ops Hub Web Framework will perform the followings:
*	creates a cryptographically-random `code_verifier`
*	derives a `code_challenge` from `code_verified` using `S256` hash function

2.	Web App Backend then redirect the user to the Keycloak server along with the `code_challenge`. Other information that are send along are:

*	**client_id** – client id of the Web App Backend at `Keycloak` (see next section on how to configure client in Keycloak)
*	**scope** – used to specify the scope of the requested authorisation. Typical scopes are `openid`, `email`, and `profile`.
*	**response_type** – set to code to indicate an authorisation code flow.
*	**redirect_uri** – callback URI for the authentication response
*	**code_challenge** – the string derived from the code verifier
*	**code_challenge_method** – set to `S256` to specific that the method used to derive the code challenge

3.	After verifying the supplied information sent by Web App Backend, Keycloak will redirect user to the Keycloak Login screen.

4.	User then proceed with log in to Keycloak using his/her credential. Depend on the setup, user may be prompt additional action to complete the login process, such as enter TOTP password, change password, etc.

5.	After User successfully completed the login process with Keycloak, Keycloak will generate an `authorization code` and associate it with the `code_challenge`. Keycloak then redirect user back to Web App Backend using the specified redirect URI specified in step 2 together with the `authorization code`.    

6.	The Web App Backend will then send Keycloak `authorization code` and `code_verifier` (generated in step 1) to exchange for the `ID token`, `access token`, and `refresh token` via back channel communication (i.e., direct connection from Web App Backend to Keycloak in the server side). See next section for information on those tokens.

For Keycloak to accept the request to exchange authorization code for tokens, Web App Backend will also send in the `client id` and `client secret` for Keycloak to authenticate the Web App Backend. 
Once, Keycloak successfully verified the `code_challenge` (sent in step 2) and `code_verifier`, it will respond with an `ID token`, `access token`, and `refresh token` which can be used to authenticate the user and access protected resources.

7.	Web App Backend will then store the `ID token`, `access token`, and `refresh token` in the user browser cookies. 

8.	Any further request to Web App Backend will then be accompanied by the cookies containing the `ID token`, `access token`, and `refresh token` which Web App Backend can use to identify the user.

9.	If the user request required invoking backend microservices, the Web App Backend will then pass on the `access token` in the service request (in the `authorization` header) to allow backend microservices to identify the original caller. 


##	Configuration

For Web App Backend to handle the login flow, the following settings need to be configured in the `.env` file:

*	**IAM_URL** – this is the URL to the Keycloak. The URL is in the following format:
    `https://<keycloak Server URL>/realms/<realm name>`
*	**IAM_CLIENT_ID** – of the Web App Backend at Keycloak.
*	**IAM_CLIENT_SECRET** – the client secret for the Web App Backend to authenticate with Keycloak.  

The following steps register Web App Backend with Keycloak:

1.	Login to Keycloak Admin Console and switch to the realm.

2.	Click on `Clients` in the side menu

![Client](./images/6.1.1_Clients.png) 


3.	Click on `Create client` button
 
![Create Client](./images/6.1.1_create_client.png)


4.	Fill up the following field in the `Create client` form:
*	Client type – OpenID Connect
*	Client ID – unique id to identify the Web App Backend. To be same as `IAM_CLIENT_ID`  

5.	Click on `Next` button:
 
![Next](./images/6.1.1_next.png)

6.	Click on `Client authentication` checkbox to turn it on
 
![Next](./images/6.1.1_client_authentication.png) 


7.	Click on `Next` button.

8.	Add the redirect URL to the `Valid redirect URIs` field. The redirect URL is the URL that you want Keycloak to redirect user to after user has successful login to Keycloak.
Keycloak accept wildcard character in the URI.

![Redirect URL](./images/6.1.1_redirect_url.png) 

9.	Add the `Web origins` that is allowed for the redirect. 
 
![Web Origins](./images/6.1.1_web_origins.png) 

10.	Click on `Save` button to complete the creation.

![Save](./images/6.1.1_save.png) 

11.	To obtain the client secret for `IAM_CLIENT_SECRET` setting, click on the `Credentials` tab

![Save](./images/6.1.1_credentials.png) 
 

12.	Click on the `Eye` icon to reveal the secret string in the `Client Secret`

![Save](./images/6.1.1_client_secrets.png) 

