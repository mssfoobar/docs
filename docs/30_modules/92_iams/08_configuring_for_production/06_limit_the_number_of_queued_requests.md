---
sidebar_position: 7
---

#	Limit the number of queued requests

A production environment should protect itself from an overload situation, so that it responds to as many valid requests as possible, and to continue regular operations once the situation returns to normal again. One way of doing this is rejecting additional requests once a certain threshold is reached.

Load shedding should be implemented on all levels, including the load balancers in your environment. In addition to that, there is a feature in Keycloak to limit the number of requests that can’t be processed right away and need to be queued. 

By default, there is no limit set. Set the option http-max-queued-requests to limit the number of queued requests to a given threshold matching your environment. Any request that exceeds this limit would return with an immediate 503 Server not Available response.

To set http-max-queued-requests, use the following environment variable:

`KC_HTTP_MAX_QUEUED_REQUESTS`


