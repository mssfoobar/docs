---
sidebar_position: 1
sidebar_label: Publishing Updates
---

#	Publishing Updates

RTUS-PMS provides a set of REST APIs to perform the followings:

-	Map
    -	Add/Update key-value pair in specific Map
    -	Batch add/update key-value pairs into specific Map
    -	Delete key-value pair from specific Map
    -	Batch delete specific key-value pairs from specific Map
    -	Clear specific Map, i.e., delete all key-value pairs
-	User Value Map
    -	Add/update specific user value to specific User Value Map
    -	Delete specific user value from specific User Value Map
    -	Clear specific User Value Map, i.e., delete all user value from the User Value Map
-	Topic
    -	Publish event to specific topic.

:::note

RTUS-PMS doesn’t enforce any restriction to who can publish to RTUS. As such, RTUS-PMS should not be expose to external network.

In future release, access control will be implemented on the APIs.

:::

You can access the following URL to view the OpenAPI doc for the APIs:
http://rtus-pms.127.0.0.1.nip.io
