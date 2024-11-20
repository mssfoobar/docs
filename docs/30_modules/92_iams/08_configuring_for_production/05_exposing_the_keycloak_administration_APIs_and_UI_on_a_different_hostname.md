---
sidebar_position: 6
---

#	Exposing the Keycloak Administration APIs and UI on a different hostname 

It is considered a best practice to expose the Keycloak Administration REST API and Console on a different hostname or context-path than the one used for the public frontend URLs that are used e.g. by login flows. 

This separation ensures that the Administration interfaces are not exposed to the public internet, which reduces the attack surface. 

To configure a different hostname or context-path for Administration REST API and console, use the following environment variable:
`KC_HOSTNAME_ADMIN`

Note that using the `KC_HOSTNAME_ADMIN` option does not prevent accessing the Administration REST API endpoints via the frontend URL specified by the `hostname` option. If you want to restrict access to the Administration REST API, you need to do it on the Network Infrastructure level (e.g., reverse proxy, load balancer, or firewall level). Administration Console implicitly accesses the API using the URL as specified by the `hostname-admin` option.

