---
sidebar_position: 4
---

# Notification Template

## Data Binding

UNH supports data binding in notification template. To bind data to the notification, use the following syntax
`{{variable_name}}` to reference the data. When the Send Notification API is called, UNH will replace the
placeholder variable with the corresponding data.

Supported parameters for data binding in their respective channels

- Email Notification
  - subject
  - body 
- Push Notification
  - title
  - body
- Custom Notification
  - param_value

UNH also exposes the recipient contact data that can be bound to the notification. These data are resolved contact 
data of keycloak user by UNH during Send Notification API call. All data are in array of string format.
- api.distribution.user_ids
- api.distribution.email_addr
- api.distribution.phone_num
- api.distribution.fcm_tokens

To See the example of data binding in action, please continue reading below section.

## Create Notification Template

:::tip
Channels are not mandatory fields in the request body. If you don't want to send to a specific channel, simply exclude it.
:::

:::warning
Ids in below examples are randomly generated and will differ from your own generated id. Please adjust accordingly.
:::

Let's create a new notification template using previously created [channels](2_channel%20configuration.md) and 
[distribution list](3_distribution%20list.md).

### Distribution List

`distribution_list_id` is the ID of distribution list that we created earlier in [distribution list](3_distribution%20list.md).

```json
{
    "distribution_list_id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58"
}
```

### Email Notification

`channel_id` is the ID of email channel that we created earlier in [channel configuration](2_channel%20configuration.md).
`subject` and `body` are the subject and body of the email which can have placeholders variable to bind the data. 
Syntax for placeholders variable is `{{variable_name}}`. For example, below have placeholders `incident_id` and 
`incident_type` which will be replaced with request data from [Send Notification API](../UNH%20API/send-notification.api.mdx).

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

`channel_id` is the ID of push notification channel that we created earlier in [channel configuration](2_channel%20configuration.md).
`title` and `body` are the title and body of the notification which can have placeholders variable to bind the data.
`image_url` is the url to the image which will be shown in the mobile notification.

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

Unlike email and push notification, we don't need to specify `channel_id` in the request body. Use the parameter id of 
the custom channel with its value in the request body. In this example, we will reuse the two parameters we created in 
the [channel configuration](2_channel%20configuration.md). The second parameter id `72148187-eaca-4d8f-95bd-6ef769a2b5ae`
is the `recipients` which is multi-value attribute. To set its multipunh.qa.agilopshub.comle value, set each item value multiple times as 
show below.

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

Or alternatively, you can also bind it to the resolved user id from distribution list by using `api.distribution.user_ids`
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

We will call the [create notification template API](../UNH%20API/create-notification-template.api.mdx) with a request 
body as shown below

<table>
<tr><th>Request</th></tr>
<tr><td>

```
curl --location 'http://{{unh_endpoint}}/v1/admin/notification_template' \
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
