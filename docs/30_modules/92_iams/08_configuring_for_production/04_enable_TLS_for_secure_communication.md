---
sidebar_position: 5
---

#	Enable TLS for Secure Communication

As Keycloak continually exchanges sensitive data, which means that all communication to and from Keycloak requires a secure communication channel. To prevent several attack vectors, HTTP over TLS, or HTTPS, for that channel need to be enabled.

Followings are various communication exchange for Keycloak:

*	Incoming communication from external (Web browsers, mobile devices, etc.). These typically from Internet or Intranet and pass through firewall, load balancer, and via Ingress Controller.

*	Incoming communication from internal (Web Backend App, Backend Services, etc.). These are backchannel requests (e.g., exchange for Tokens) and routed within Kubernetes Cluster.

*	Outgoing communication to internal (Web Backend App, Backend Services, etc.).  These are backchannel requests to do single logout and are routed within Kubernetes Cluster.

*	Outgoing communication to external (External Idp, Active Directory, etc.). These are typically route out to Internet or Internet.

At the minimum, all communication to and from external should be protected by HTTP over TLS. Some project may require that traffic routed within the Kubernetes Cluster to be also TLS protected.

To enable TLS for incoming communication channel, refer to:

[https://www.keycloak.org/server/enabletls](https://www.keycloak.org/server/enabletls)

To enable TLS for outgoing communication:

[https://www.keycloak.org/server/outgoinghttp](https://www.keycloak.org/server/outgoinghttp)

To enable TLS for cache communication:

[https://www.keycloak.org/server/caching](https://www.keycloak.org/server/caching)
