---
sidebar_position: 2
---

# Authentication

The IMS API uses access token to authenticate requet. The access token must be provided through our Keycloak service.

```powershell showLineNumbers
curl https://ims.demo.agilopshub.com/v1/incident 
-H "Bearer <keycloak_access_token>"
```
