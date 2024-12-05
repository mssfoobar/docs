---
sidebar_position: 6
---

# Sending Notification

We will use the same template created in the [notification template](5_notification%20template.md) section to send 
notification. Since our template includes bound data `{{incident_id}}` and `{{incident_type}}`, we will call the 
[Send Notification API](../UNH%20API/3-send-notification.api.mdx) with the following request body:

<table>
<tr><th>Request</th></tr>
<tr><td>

```
curl --location '{{unh_endpoint}}/v1/notification/send/template/3a3b5bf1-639f-4575-8fc8-185ee0fce21a' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
--data '{
    "data": {
        "incident_id": "INC-0001-01",
        "incident_type": "Security Incident"
    }
}'
```

</td></tr>
<tr><th>Response</th></tr>
<tr><td>

```json
{
    "data": {
        "unresolved_distribution": {}
    },
    "sent_at": "2024-10-09T10:51:51Z"
}
```

</td></tr>
</table>

If the request is successful, recipients will be notified via their configured channels.

## Handling Errors

UNH does not handle errors originated from other services internally. Instead, it relays the error back to the caller.
Belows are some common error scenarios and how they are returned.

### Unresolved Distribution

If the UNH API fails to send notification due to unresolved distribution, it will return a list of unresolved 
distributions. This may happen if the specified user, role or group is not found in Keycloak resources.

Example
```json
{
    "data": {
        "unresolved_distribution": {
            "internal_user_id": ["d6f80e07-3b30-4968-8550-d3a441966e95"],
            "internal_role_id": ["admin"],
            "internal_group_id": ["ecf2e35f-b604-4836-9c4b-4d87ab9c1f39"]
        }
    },
    "sent_at": "2024-10-09T10:51:51Z"
}
```

### Notification Channel Error

If there is an error when sending to a specific channel, the error originated from the respective channel will be 
returned.

Example Google SMTP server error
```json
{
    "data": {
        "unresolved_distribution": {},
        "email_channel": {
            "error": "535 5.7.8 Username and Password not accepted. For more information, go to\n5.7.8  https://support.google.com/mail/?p=BadCredentials d9443c01a7336-20c69444279sm8432885ad.203 - gsmtp"
        }
    },
    "sent_at": "2024-10-09T10:51:51Z"
}
```