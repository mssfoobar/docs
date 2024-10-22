---
sidebar_position: 5
---

# Notification Template

## Data Binding

UNH supports data binding in notification templates, allowing dynamic data to be injected into the notification
content. To bind data to the notification, use the following syntax: `{{variable_name}}`. When the 
[Send Notification API](../UNH%20API/send-notification.api.mdx) is called, UNH will replace the placeholder variable 
with the corresponding data value.

#### Supported parameters for data binding in their respective channels
- Email Notification
  - subject
  - body 
- Push Notification
  - title
  - body
- Custom Notification
  - param_value

#### Recipient Contact Data for Binding
UNH also exposes the recipient contact data, which can be bound to the notifications. These data are resolved contact 
data of Keycloak users during Send Notification API call. All data are available as array of strings:
- `api.distribution.user_ids` - Keycloak user IDs
- `api.distribution.email_addr` - Email addresses
- `api.distribution.phone_num` - Phone numbers
- `api.distribution.fcm_tokens` - FCM tokens

To See the example of how data binding works in a notification template, please continue reading the section below.

## Create Notification Template

:::tip
Channels are not mandatory fields in the request body. If you don't want to send to a specific channel, simply exclude it.
:::

:::warning
The IDs in the below examples are randomly generated and will differ from those generated in your own. Please adjust
accordingly.
:::

Let's create a new notification template using the previously created [channels](3_channel%20configuration.md) and 
[distribution list](4_distribution%20list.md).

### Distribution List

The `distribution_list_id` corresponds to the ID of the distribution list created earlier in the 
[Distribution List](4_distribution%20list.md) section.

```json
{
    "distribution_list_id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58"
}
```

### Email Notification

The `channel_id` is the ID of email channel from the [Channel Configuration](3_channel%20configuration.md) section. The
`subject` and `body` fields can include placeholders, which will be dynamically replaced with data when the 
[Send Notification API](../UNH%20API/send-notification.api.mdx) is called.

In this example, placeholders `incident_id` and `incident_type` are used, and they will be replaced with 
corresponding values during the Send Notification API call.

```json
{
    "email_notification": {
        "channel_id": "f446054c-98a5-4df9-aeea-f687e66951e0",
        "subject": "Incident - {{incident_id}}",
        "body": "Incident type {{incident_type}} occurred. Please stay alert."
    }
}
```

### Push Notification

The `channel_id` is the ID of the push notification channel that we created earlier in 
[Channel Configuration](3_channel%20configuration.md) section. The `title` and `body` fields can also contain 
placeholders to inject dynamic data at runtime, and the `image_url` allows you to display an image in the mobile 
notification.

```json
{
    "push_notification": {
        "channel_id": "193b38d0-2fd2-40cc-93ae-96c1e7fd4c7d",
        "title": "Incident - {{incident_id}}",
        "body": "Incident type {{incident_type}} occurred. Please stay alert.",
        "image_url": "http://www.example.com/img/logo.png"
    }
}
```

### Custom Notification

For custom notifications, we do not need to specify a `channel_id` in the request body. Instead, we use the parameter 
IDs of the custom channel along with their values in the request body. 

In this example, we will reuse the two parameters we created in the [channel configuration](3_channel%20configuration.md). 
The second parameter, `recipients` (ID: `72148187-eaca-4d8f-95bd-6ef769a2b5ae`) is a multi-value attribute. To set 
multiple values for `recipients`, each value is passed as a separate item in the request body, as shown below.

```json
{
    "custom_notification": [
        {
            "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",
            "param_value": "Incident type {{incident_type}} occurred. Please stay alert."
        },
        {
            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",
            "param_value": "b976db3c-09cb-432b-95b0-c6ede8178e3f"
        },
        {
            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",
            "param_value": "b976db3c-09cb-432b-95b0-c6ede8178e3f"
        }
    ]
}
```

Alternatively, you can bind the `param_value` to the resolved user IDs from the distribution list using
`{{api.distribution.user_ids}}`. This allows you to reference the Keycloak user IDs resolved from the distribution 
list during the Send Notification API call.

```json
{
    "custom_notification": [
        {
            "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",
            "param_value": "Incident type {{incident_type}} occurred. Please stay alert."
        },
        {
            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",
            "param_value": "{{api.distribution.user_ids}}"
        }
    ]
}
```

### API Example

Using the configuration examples provided above, we can now call the 
[Create Notification Template API](../UNH%20API/create-notification-template.api.mdx) with a request body as shown below:

<table>
<tr><th>Request</th></tr>
<tr><td>

```
curl --location '{{unh_endpoint}}/v1/admin/notification_template' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
--data '{
    "name": "incident notification",
    "distribution_list_id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58",
    "email_notification": {
        "channel_id": "f446054c-98a5-4df9-aeea-f687e66951e0",
        "subject": "Incident - {{incident_id}}",
        "body": "Incident type {{incident_type}} occurred. Please stay alert."
    },
    "push_notification": {
        "channel_id": "193b38d0-2fd2-40cc-93ae-96c1e7fd4c7d",
        "title": "Incident - {{incident_id}}",
        "body": "Incident type {{incident_type}} occurred. Please stay alert.",
        "image_url": "http://www.example.com/img/logo.png"
    },
    "custom_notification": [
        {
            "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",
            "param_value": "Incident type {{incident_type}} occurred. Please stay alert."
        },
        {
            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",
            "param_value": "{{api.distribution.user_ids}}"
        }
    ]
}'
```

</td></tr>
<tr><th>Response</th></tr>
<tr><td>

```json
{
    "data": {
        "id": "eedd87f7-6dd5-4e66-8cbb-a4263c150ea8",
        "name": "incident notification",
        "email_notification": {
            "channel_id": "f446054c-98a5-4df9-aeea-f687e66951e0",
            "subject": "test email bind subject - {{foo}}",
            "body": "test email bind body - {{bar}}"
        },
        "push_notification": {
            "channel_id": "193b38d0-2fd2-40cc-93ae-96c1e7fd4c7d",
            "title": "Incident - {{incident_id}}",
            "body": "Incident type {{incident_type}} occurred. Please stay alert.",
            "image_url": "http://www.example.com/img/logo.png"
        },
        "custom_notification": [
            {
                "id": "3a3b5bf1-639f-4575-8fc8-185ee0fce21a",
                "name": "in-app channel",
                "endpoint": "http://mssfoobar/in-app/send",
                "parameters": [
                    {
                        "id": "ef073e12-37c2-40fb-b71a-0349260a3d4f",
                        "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",
                        "param_name": "msg",
                        "param_value": "Incident type {{incident_type}} occurred. Please stay alert.",
                        "is_multi_value": false
                    },
                    {
                        "id": "255697b1-5243-4c7f-b68e-a674e153920d",
                        "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",
                        "param_name": "recipients",
                        "param_value": "{{api.distribution.user_ids}}",
                        "is_multi_value": true
                    }
                ]
            }
        ],
        "distribution_list_id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58",
        "created_at": "2024-10-09T03:46:15.707271Z",
        "created_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "updated_at": "2024-10-09T03:46:15.707271Z",
        "updated_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",
        "tenant_id": "a9e57d96-4dc8-42dd-96a7-9cd60a954973",
        "occ_lock": 0
    },
    "sent_at": "2024-10-09T03:46:15Z"
}
```

</td></tr>
</table>
