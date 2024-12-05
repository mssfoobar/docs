---
sidebar_position: 2
---

# Entity Relationship

```mermaid
erDiagram
    NotificationTemplate ||--o| EmailNotification : contains
    NotificationTemplate ||--o| PushNotification : contains
    NotificationTemplate ||--o{ CustomNotification : contains
    NotificationTemplate ||--o| DistributionList : contains
    
    EmailNotification ||--|| EmailChannel : uses
    PushNotification ||--|| PushChannel : uses
    CustomNotification ||--|| CustomChannel : uses
    
    EmailNotification {
        string subject
        string body
    }
    
    EmailChannel {
        string name
        string username
        string password
        string host
        string port
        string sent_from
    }
    
    PushNotification {
        string channel_id
        string title
        string body
        string image_url
    }
    
    PushChannel {
        string service_account_key
    }

    CustomNotification {
        object[] parameters
    }
    
    CustomChannel {
        string endpoint
    }
    
    DistributionList {
        string[] internal_user_id
        string[] internal_role_id
        string[] internal_group_id
        string[] external_email
        string[] external_phone
    }
```

- Notification Template has
  - Email Notification which uses the email channel (via an SMTP server) to send email notifications to recipients' 
    email addresses
  - Push Notification which uses the push channel (via an FCM server) to send push notifications to recipients' mobile 
    devices
  - Custom Notification which send notifications through developer-defined custom channel, allowing for customized 
    delivery methods
  - Distribution List which contains a list of recipients both internally (AOH IAMS users) and externally to send 
    notifications to multiple users at once