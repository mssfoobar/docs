---
sidebar_position: 4
---

# Security

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

Please refer to the [API documentation](  https://github.com/mssfoobar/rtus/releases/download/v1.0.0/apidocs.zip) for more information.


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

