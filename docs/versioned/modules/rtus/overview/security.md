---
sidebar_position: 4
---

# Security

## Authentication

RTUS-SEH supports two methods for authentication:

### Direct Access Token Authentication
Clients can provide their access token directly in cookies. RTUS-SEH will look for the access token in the configured cookie names (see `RTUS_ACCESS-TOKEN_COOKIENAMES` configuration).

### Session Data Store (SDS) Integration
Starting from version 1.2.0, RTUS-SEH can integrate with a Session Data Store (SDS) to retrieve access tokens using session IDs. This is useful for applications that use session-based authentication.

When SDS integration is enabled:
1. RTUS-SEH looks for a session ID in the configured cookie names (see `RTUS_SESSION-ID_COOKIENAMES` configuration)
2. If a session ID is found, RTUS-SEH queries the SDS service (configured via `RTUS_SDS_URL`) to retrieve the corresponding access token
3. The retrieved access token is then used for authorization checks

This allows seamless integration with session-based authentication systems without requiring clients to manage access tokens directly in their cookies.

## Map 

By default, no security is enforced on the Map. Any Client can subscribe to the Map to receive change notification.

:::note
In future release, configuration parameter will be provided to configure whether all the Maps will be protected or not by default. 
:::

You can configure the security for each Map via RTUS’s administrative APIs.

Configuration available as follows:
-	**Whether the Map is protected**. When configured as protected, only Users with valid Access Token in the cookie will be able to subscribe to the Map. 
The Access Token is considered valid when:
    -	It has not expired
    -	It’s active tenant id matches id of the tenant that the Map belong to
-	**Roles that allowed to subscribe**. When Map is protected and list of roles is configured, then only Users with valid Access Token and has any of 
the configured roles will be able to subscribe to the Map.
-	**Permission to Resource and Scope**. When Map is protected and the Resource and Scope is configured, then only User with valid Access Token and has 
granted access to the specified Resource and Scope will be able to subscribe to the Map.   

Please refer to the [API documentation](  https://github.com/mssfoobar/rtus/releases/download/v1.1.0/apidocs.zip) for more information.

## JSON Map

By default, no security is enforced on the JSON Map. Any Client can subscribe to the JSON Map to receive change notification.

You can configure the security for each JSON Map via RTUS’s administrative APIs.

Configuration available as follows:
-	**Whether the Map is protected**. When configured as protected, only Users with valid Access Token in the cookie will be able to subscribe to the Map. 
The Access Token is considered valid when:
    -	It has not expired
    -	It’s active tenant id matches id of the tenant that the Map belong to
-	**Roles that allowed to subscribe**. When Map is protected and list of roles is configured, then only Users with valid Access Token and has any of 
the configured roles will be able to subscribe to the Map.
-   **Resource Type, Scope, and Value Path**. When Map is protected and the Resource Type and Scope is configured, then User with valid Access Token will only
    receive change notification for value entities, that have the attribute value specified by the value path matches the Resources granted to the user.

For example, if the JSON Map is configured with the followings:
* Resource Type: RTUS-RESOURCE
* Scope: View
* Value Path: properties.callsign

and the User is granted access to the following Resource and Scope:
* Resource: CALL410
* Resource Type: RTUS-RESOURCE
* Scope: View

then the User will be able to receive change notification when the following JSON value is added to the Json Map:

```json title="JSON"
{
      "type" : "Feature",
      "geometry" : {
        "coordinates" : [ 103.80706809485737, 1.2149680948573696 ],
        "type" : "Point"
      },
      "properties" : {
        "kind" : "aircraft",
        "created_at" : "1736353292322",
        "fr24_id" : "fr24_133",
        "hex" : "B5A7AC",
        // highlight-next-line
        "callsign" : "CALL410",
        "lat" : 1.2149680948573696,
        "lon" : 103.80706809485737,
        "track" : "74",
        "alt" : "36837",
        "gspeed" : "475",
        "vspeed" : "-1",
        "squawk" : "2943",
        "timestamp" : "2025-01-08T23:21:25+07:00",
        "source" : "ADSB",
        "flight" : "FL980",
        "type" : "A333",
        "reg" : "4R-W",
        "painted_as" : "ALK",
        "operating_as" : "ALK",
        "orig_iata" : "CMB",
        "orig_icao" : "VCBI",
        "dest_iata" : "SIN",
        "dest_icao" : "WSSS",
        "eta" : "2025-01-08T23:25:18+07:00"
      }
    }

```


Please refer to the [API documentation](  https://github.com/mssfoobar/rtus/releases/download/v1.1.0/apidocs.zip) for more information.







##	User Value Map

To subscribe to a specific User Value (identify by User Id) in User Value Map, the following criteria must be met:
-	User must have a valid Access Token in the cookie
-	Access Token’s active tenant id must match the tenant id of that the User Value Map belong to
-	Access Token’s user id value must match the user id of the User Value to subscribe.


## Topic

By default, no security is enforced on the Topic. Any Client can subscribe to the Topic to receive Event.

:::note
In future release, configuration parameter will be provided to configure whether all the Topics will be protected or not by default. 
:::

You can configure the security for each Topic via RTUS’s administrative APIs.
Configuration available as follows:
-	**Whether the Topic is protected**. When configured as protected, only Users with valid Access Token in the cookie will be able to subscribe to the Topic. 
The Access Token is considered valid when:
    -	It has not expired
    -	It’s active tenant id matches id of the tenant that the Topic belong to
-	**Roles that allowed to subscribe**. When Topic is protected and list of roles is configured, then only Users with valid Access Token and has any of the 
configured roles will be able to subscribe to the Topic.
-	**Permission to Resource and Scope**. When Topic is protected and the Resource and Scope is configured, then only User with valid Access Token and has granted 
access to the specified Resource and Scope will be able to subscribe to the Topic.   

Please refer to the [API documentation](  https://github.com/mssfoobar/rtus/releases/download/v1.0.0/apidocs.zip) for more information.

