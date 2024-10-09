---
sidebar_position: 2
---

# Channel Configuration

UNH supports configuration of email, push notification and custom notification channels.

:::warning
Ids in below examples are randomly generated and will differ from your own generated id. Please adjust accordingly.
:::

## Email Channel

Email channel use SMTP server to send emails. To configure a new email channel, call UNH [create email channel API](../UNH%20API/create-email-channel.api.mdx)
with your SMTP server credentials (host, port, username, password).

<table>
<thead><tr><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>

```
curl -L '{{unh_endpoint}}/v1/admin/email_channel' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
--data-raw '{
    "name": "smtp channel",
    "username": "smtp@gmail.com",
    "password": "smtp_password",
    "host": "smtp.gmail.com",
    "port": 587
}'
```

</td><td>

```json
{
    "data": {
        "id": "f446054c-98a5-4df9-aeea-f687e66951e0",
        "name": "smtp channel",
        "username": "smtp@gmail.com",
        "password": "smtp_password",
        "host": "smtp.gmail.com",
        "port": 587,
        "created_at": "2024-10-08T06:41:21.906919Z",
        "created_by": "d6f80e07-3b30-4968-8550-d3a441966e95",
        "updated_at": "2024-10-08T06:41:21.906919Z",
        "updated_by": "d6f80e07-3b30-4968-8550-d3a441966e95",
        "tenant_id": "3ca9a629-6a64-4d40-9a93-cc8da0595754",
        "occ_lock": 0
    },
    "sent_at": "2024-10-08T06:41:21Z"
}
```

</td></tr>
</tbody></table>

## Push Notification Channel

Push Notification channel use Google Firebase Cloud Messaging (FCM) which supports both android & iOS. To configure 
a new push notification channel, you need to get FCM api key from your FCM project and create the channel by calling 
[create push notification channel API](../UNH%20API/create-push-notification-channel.api.mdx)

<table>
<thead><tr><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>

```
curl -L 'http://{{unh_endpoint}}/v1/admin/push_channel' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
-d '{
  "name": "fcm channel",
  "service_account_key": {
    "type": "service_account",
    "project_id": "example",
    "private_key_id": "example",
    "private_key": "-----BEGIN PRIVATE KEY-----\n",
    "client_email": "example",
    "client_id": "example",
    "auth_uri": "https://example.com/o/oauth2/auth",
    "token_uri": "https://example.com/token",
    "auth_provider_x509_cert_url": "https://example.com",
    "client_x509_cert_url": "https://example.com",
    "universe_domain": "example.com"
  }
}'
```

</td><td>

```json
{
    "data": {
        "id": "c49b14dd-dad9-4e93-bd15-752763d1b684",
        "name": "fcm channel",
        "service_account_key": {
            "type": "service_account",
            "project_id": "example",
            "private_key_id": "example",
            "private_key": "-----BEGIN PRIVATE KEY-----\n",
            "client_email": "example",
            "client_id": "example",
            "auth_uri": "https://example.com/o/oauth2/auth",
            "token_uri": "https://example.com/token",
            "auth_provider_x509_cert_url": "https://example.com",
            "client_x509_cert_url": "https://example.com",
            "universe_domain": "example.com"
        },
        "created_at": "2024-10-09T04:08:30.702451Z",
        "created_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "updated_at": "2024-10-09T04:08:30.702451Z",
        "updated_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "tenant_id": "a9e57d96-4dc8-42dd-96a7-9cd60a954973",
        "occ_lock": 0
    },
    "sent_at": "2024-10-08T06:41:21Z"
}
```

</td></tr>
</tbody></table>

## Custom Notification Channel

Custom Notification channel allows you to develop your own notification channel to receive notification send from UNH.
When developing custom notification channel endpoint, you must meet below requirements for UNH to successfully send 
notification:
- Method - POST 
- Content type - application/json
- Accept - application/json
- Body - data type of JSON field must be either `string` or `array of string` data type.

For example, assume you have a custom channel `new in-app channel` with a POST endpoint URL
`http://mssfoobar/in-app/send` and its request body is `{"msg": "hello world", "recipients", ["user1", "user2"]}`.

First create a new channel using the [create custom notification channel API](../UNH%20API/create-custom-channel.api.mdx)

<table>
<thead><tr><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>

```
curl -L 'http://{{unh_endpoint}}/v1/admin/custom_channel' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
-d '{
  "name": "in-app channel",
  "endpoint": "http://mssfoobar/in-app/send"
}'
```

</td><td>

```json
{
    "data": {
        "id": "3a3b5bf1-639f-4575-8fc8-185ee0fce21a",
        "name": "in-app channel",
        "endpoint": "http://mssfoobar/in-app/send",
        "created_at": "2024-09-03T03:00:15.571118Z",
        "created_by": "00f92e3f-7f5c-4c9d-96b8-7f9121c3e013",
        "updated_at": "2024-09-03T03:00:15.571118Z",
        "updated_by": "00f92e3f-7f5c-4c9d-96b8-7f9121c3e013",
        "tenant_id": "b8766c9d-d71e-46a2-968b-552dea1a7cd2",
        "occ_lock": 0
    },
    "sent_at": "2024-09-03T03:00:15Z"
}
```

</td></tr>
</tbody></table>

To specify the expected fields in the request body of your custom channel, you can use [create custom channel 
parameter API](../UNH%20API/create-custom-channel-parameter.api.mdx).

Create your request body JSON field named `msg`.

<table>
<tr><th>Request</th></tr>
<tr><td>

```
curl -L 'http://{{unh_endpoint}}/v1/admin/custom_channel/3a3b5bf1-639f-4575-8fc8-185ee0fce21a/parameter' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
-d '{
  "name": "msg",
  "description": "message body",
  "regexp_validation": "",
  "is_multi_value": false
}'
```

</td></tr>
<tr><th>Response</th></tr>
<tr><td>

```json
{
    "data": {
        "id": "5a101f30-d8e8-4347-a4fb-438593ca7405",
        "channel_id": "3a3b5bf1-639f-4575-8fc8-185ee0fce21a",
        "name": "msg",
        "description": "message body",
        "regexp_validation": "",
        "is_multi_value": false,
        "created_at": "2024-10-08T10:19:43.939451Z",
        "created_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "updated_at": "2024-10-08T10:19:43.939451Z",
        "updated_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "tenant_id": "a9e57d96-4dc8-42dd-96a7-9cd60a954973",
        "occ_lock": 0
    },
    "sent_at": "2024-10-08T10:19:43Z"
}
```

</td></tr>
</table>

Create your request body JSON field named `recipients` with `array of string` data type by setting `is_multi_value` to `true`.

<table>
<tr><th>Request</th></tr>
<tr><td>

```
curl -L 'http://{{unh_endpoint}}/v1/admin/custom_channel/3a3b5bf1-639f-4575-8fc8-185ee0fce21a/parameter' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
-d '{
  "name": "recipients",
  "description": "recipients list",
  "regexp_validation": "",
  "is_multi_value": true
}'
```

</td></tr>
<tr><th>Response</th></tr>
<tr><td>

```json
{
    "data": {
        "id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",
        "channel_id": "3a3b5bf1-639f-4575-8fc8-185ee0fce21a",
        "name": "recipients",
        "description": "recipients list",
        "regexp_validation": "",
        "is_multi_value": true,
        "created_at": "2024-10-08T10:19:43.939451Z",
        "created_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "updated_at": "2024-10-08T10:19:43.939451Z",
        "updated_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "tenant_id": "a9e57d96-4dc8-42dd-96a7-9cd60a954973",
        "occ_lock": 0
    },
    "sent_at": "2024-10-08T10:19:43Z"
}
```

</td></tr>
</table>