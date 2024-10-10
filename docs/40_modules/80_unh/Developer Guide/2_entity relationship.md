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
  - Email Notification which uses email channel (SMTP server) to send email notifications to recipients' email addresses
  - Push Notification which uses push channel (FCM server) to send push notifications to recipients' mobile devices
  - Custom Notification which uses customized channel (developer defined channel) to send customized notifications
  - Distribution List which contains list of recipients internally (AOH IAMS users) and externally