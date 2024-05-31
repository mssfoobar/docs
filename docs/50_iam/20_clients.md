---
sidebar_position: 2
---

# Administering OIDC Clients

When you create a new service that needs access to the system, you need to create an OIDC client for that service. This
will allow access to the system as a user or account associated with that client. For services, we give them access to
the system via [service accounts](https://www.keycloak.org/docs/latest/server_admin/#_service_accounts).

This section describes how you can create an OIDC client for a new service, enable a service account for the OIDC
client, and fetch an access token for the service account to grant you access to the system.

## Creating an OIDC client

The steps for creating a client is as follows:

1. Click `Clients` in the menu on the left
2. Click `Create client`
3. Choose a client ID - We prefix the client ID with the domain, for example `aoh_web`. This is not a Keycloak requirement but a naming
   convention we follow.
4. Give it a sensible name and description
5. Scroll down to `Capability config` and make sure `Client authentication` is on and `Service accounts roles` is
   checked.
6. Click save.

## Configuring the client

You will need to configure your new client to add mappers to have claims added to the token that will let you access
Hasura in our system. Read more about authentication in AOH [here](/docs/iam/introduction#authentication-in-agil-ops-hub).

### Adding mappers

Add the `x-hasura-default-role`, `x-hasura-allowed-roles` and `x-hausra-client-id` mappers.

1. Click `Clients` in the menu on the left
2. Click on the client you want to configure
3. Click the `Client scopes` tab
4. Under `Assigned client scope`, you will be able to see `[client-id]-dedicated` as a link, click it to access the

5. Adding the `x-hasura-default-role` mapper:

    - 5.1. Click `Add mapper`
    - 5.2. Click `By configuration`
    - 5.3. Click `User Attribute`
    - 5.4 Key in 'default-role' in `User Attribute`
    - 5.5 Key in 'hasura_access.x-hasura-default-role' in `Token Claim Name`
    - 5.6 Leave `Claim JSON Type` as String
    - 5.7 Leave `Add to ID token` checked
    - 5.8 Leave `Add to access token` checked
    - 5.9 Leave `Add to userinfo` checked
      mappers and scope.

6. Adding the `x-hasura-allowed-roles` mapper:

    - 6.1. Click `Add mapper`
    - 6.2. Click `By configuration`
    - 6.3. Click `User Realm Role`
    - 6.4 Leave `Multivalued` checked
    - 6.5 Key in 'hasura_access.x-hasura-allowed-roles' in `Token Claim Name`
    - 6.6 Leave `Claim JSON Type` as String
    - 6.7 Leave `Add to ID token` checked
    - 6.8 Leave `Add to access token` checked
    - 6.9 Leave `Add to userinfo` checked

7. Adding the `x-hasura-client-id` mapper:

    - 7.1. Click `Add mapper`
    - 7.2. Click `By configuration`
    - 7.3. Click `User Session Note`
    - 7.4 Key in 'clientId' in `User Session Note`
    - 7.5 Key in 'hasura_access.x-hasura-client-id' in `Token Claim Name`
    - 7.6 Leave `Claim JSON Type` as String
    - 7.7 Leave `Add to ID token` checked
    - 7.8 Leave `Add to access token` checked

### Manage Service Account Group Mappings

We use the `system` role for backend services. For the mappers to work, the service account must have the right
attributes on it. We create groups and add the attributes we want to it - this will get merged into the user attributes
when a user joins the group, and the mappers we made in the earlier section will map that to the appropraite claims.

![image](/img/keycloak/keycloak_group_attributes.jpg)

To get the service account to join the group:

1. Click `Clients` in the menu on the left
2. Click on the client you want to configure
3. Click the `Service account roles` tab
4. Click on the link that says 'To manage detail and group mappings, click on the username
   `<service-account-client-id>`', this will take you to the user details page of the service account
5. Click on the `Groups` tab
6. Click on `Join Group` and check `system` (or any other groups you wish to join)

### Get an access token to make system calls

You can get your access token by calling the OIDC endpoint called `token`, this can be discovered via the OIDC
discovery endpoint `GET /.well-known/openid-configuration` (read more about
[OIDC to learn more](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationRequest)).

One of the endpoints you will get in return is the token endpoint - which should look like this:

`http://<your-keycloak-origin>/realms/<your-realm>/protocol/openid-connect/token`

To make the request, you will need your client credentials, which you can get from the credentials tab in the client
details page:

![image](/img/keycloak/keycloak_client_details_credentials.jpg)

To get to this page:

1. Click `Clients`
2. Click on the desired client id in the `Clients list`
3. Click on the `credentials` tab

Make a `POST` request to that endpoint, passing in the body:

-   client_id: The ID of your client (e.g. `aoh_web`)
-   grant_type: `client_credentials`
-   client_secret: The secret of your client (retrieved from the client credentials page)

The returned result is the access token which you can use as a bearer token to make calls in the system (Hasura).
