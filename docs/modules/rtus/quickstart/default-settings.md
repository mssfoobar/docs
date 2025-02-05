---
sidebar_position: 3
---

#	Default Settings

The Docker Compose configuration files in the `dev-container` repository will initialize RTUS with the following default values:

:::note

As part of the dependency, Docker Compose files will also initialize **IAMS**. 
For the default values of IAMS, please refer to IAMS's [Default Settings](../../iams/quickstart/default-settings.md) section.

:::


## Default URL

The default URLs for RTUS is as follows

- **RTUS-PMS REST Endpoint** : http://rtus-pms.127.0.0.1.nip.io

- **RTUS-AAS SSE Endpoint** : http://rtus-seh.127.0.0.1.nip.io

Note that the default domain `127.0.0.1.nip.io` will resolve to local loopback IP which mean you will not be able to access those URLs from another machine.

If you wish to access RTUS URLs from another machine, you will need to configure the DEV_DOMAIN environment variable in the .env file with `nip.io` URL that will 
resolve to your machine external network IP.

For example, if your machine network IP is `192.168.6.28`, then you will need to change DEV_DOMAIN to `192.168.6.28.nip.io`. Then RTUS will be accessible 
from another machine in your local network.


##	Access Token Cookie Name

RTUS-SEH is configured to look for access token under the following cookie name:

-	web_access_token
-	ian_access_token
-	gis_access_token

If your Web Application is storing access token in name other than the above, please modified the `compose.yml` under `rtus` folder in `dev-container` 
to add the cookie name you are using under the following parameter:

``` yml
rtus.access-token.cookienames
```


##	CORS Allow Origin List
   
RTUS-SEH is configured to allow request from pages originated from the following domains:

-	http://127.0.0.1.nip.io:5173
-	http://127.0.0.1.nip.io:4173
-	http://gis-web.127.0.0.1.nip.io
-	http://ian-web.127.0.0.1.nip.io

If your Web Application that need to subscribe to RTUS is access from other URL,  please modified the `compose.yml` under `rtus` folder in `dev-container` 
to add the URL domain you are using under the following parameter:

``` yaml
traefik.http.middlewares.rtus-seh-cors.headers.accessControlAllowOriginList
```

