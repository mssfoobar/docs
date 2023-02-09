---
sidebar_position: 6
---

import Image from '@theme/IdealImage';
import WebArchitectureImage from '/img/web_architecture.png';

# Architecture

This section describes how the web service interacts with other services, ignoring infrastructural modules such as
Kubernetes, pods, containers etc.

<div class="centerize"> 
    <Image img={WebArchitectureImage} width="75%"/>
</div>

As the web server for your framework, it is the primary interface that users will interact with, and essentially depends
on everything else in the system to function properly. However, the components in the above diagram are the main,
critical pieces that the web server interfaces with.

The following is a brief description of the pieces in the diagram

- **Browser** - he clients that connect to the web server
- **Web** - the AGILRAD 2.0 web server
- **Hasura** - the server providing Graph QL API's - essentially the serving the purpose of what application servers do
- **Identity Access Management** - we use Keycloak for this, it is the identity provider for your users
- **Application Database** - the database hosting application data

The initial unauthenticated request from the browser to the web server will result in the user being redirected to the
IAM to log in. The authentication process is faciliated using the OIDC Authentication Code Flow. After this flow is
completed, the web server will receive the JWT tokens for the user, and set them as cookies on the user's browser.

If the user's request to the desired route is valid and authorized, the initial page render will be done server-side.
This initial render gets data from Hasura using the user's JWT to provide authentication. Subsequent navigation is
handled on the browser and all Graph QL requests are sent directly to a Hasura instance that accepts cookie-based
authentication instead (this is for security reasons). Any updates in data is also done via Graph QL subscriptions over
WebSocket. This allows for the interactive SPA (Single-Page Application) experience whilst also providing very fast
initial response from server-side rendering.
