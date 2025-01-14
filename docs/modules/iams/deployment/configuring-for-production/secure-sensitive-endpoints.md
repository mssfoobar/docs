---
sidebar_position: 2
sidebar_label: Secure Sensitive Endpoints
---

# Securing Sensitive Endpoints

The deployment manifests files in Quick Start section expose all endpoints to facilitate development but should be disabled for production deployment.

-   PostgreSQL – port `30432` is exposed via `NodePort` which should be disabled in production or protected by firewall. Typical production deployment will have PostgreSQL deployed in a separate tier from the application tier, i.e., not in the same Kubernetes Cluster as the IAMS.

-   IAMS-AAS – the REST APIs are intended to be invoked by backend services and not expose outside of Kubernetes. The Ingress Controller should not be created in production. The endpoints are:
    `{{server}}/admin/*`

-   IAMS-Keycloak – Keycloak has numbers of endpoints and not all should be expose outside of Kubernetes. Depending on requirements, the following endpoints may or may not be exposed:

        *	Token Endpoint – this endpoint allows us to retrieve access token, refresh token, or id token. It is normally invoked by backend services and should not be exposed. However, depending on Mobile Client Authentication flow implementation, this endpoint may need to be exposed. The token endpoint is:

    `{{server}}/realms/{{realm}}/protocol/openid-connect/token`

        *	User Info Endpoint – this endpoint is used to retrieve user profile data using valid access token. It can also be used to validate access token. This endpoint is used by backend services but may be invoked by Mobile Client. The endpoint is:

    `{{server}}/realms/{{realm}}/protocol/openid-connect/userinfo`

        *	Token Introspect Endpoint – this endpoint is to verify that an access token is active or to retrieve more metadata about the access token. As with above endpoints, may need to be exposed for Mobile Client. The endpoint is:

    `{{server}}/realms/{{realm}}/protocol/openid-connect/token/introspect`

        *	Administration Endpoints – those endpoints are a set of REST APIs to perform administrative tasks. Those endpoints should be protected and shouldn’t be expose but as the Keycloak Web Admin Console Client (from browser) need to directly invoke those REST APIs, those endpoints need to be expose out of Kubernetes Cluster. As a good practice, the Keycloak Web Admin Console should not be expose out to the Internet. The endpoints are:

    `{{server}}/admin/* `
