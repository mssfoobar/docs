---
sidebar_position: 4
---

# Distribution List

The Distribution List in UNH is used to resolve keycloak users to their contact information such as email address & FCM 
tokens.

All `internal` values set in distribution list must correspond to Keycloak resources. If the values are not valid
Keycloak resources, UNH will not be able to resolve the recipient’s contact information to send the notification.

- `internal_user_id`: Keycloak user ID
- `internal_role_id`: Keycloak role name
- `internal_group_id`: Keycloak group ID

Currently, the `external_email` and `external_phone` fields are not used by UNH, so they can be ignored.

:::warning
The IDs in the below examples are randomly generated and will differ from those generated in your own. Please adjust
accordingly.
:::

You can use the [Create Distribution List API](../UNH%20API/29-create-distribution-list.api.mdx) to create a new 
distribution list.


<table>
<tr><th>Request</th></tr>
<tr><td>

```
curl --location '{{unh_endpoint}}/v1/admin/distribution_list' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{access_token}}' \
--data '{
    "name": "incident response team",
    "internal_user_id": ["d6f80e07-3b30-4968-8550-d3a441966e95"],
    "internal_role_id": ["admin"],
    "internal_group_id": ["ecf2e35f-b604-4836-9c4b-4d87ab9c1f39"]
}'
```

</td></tr>
<tr><th>Response</th></tr>
<tr><td>

```json
{
    "data": {
        "id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58",
        "name": "incident response team",
        "internal_user_id": [
            "d6f80e07-3b30-4968-8550-d3a441966e95"
        ],
        "internal_role_id": [
            "admin"
        ],
        "internal_group_id": [
            "ecf2e35f-b604-4836-9c4b-4d87ab9c1f39"
        ],
        "created_at": "2024-09-03T02:45:00.835439Z",
        "created_by": "00f92e3f-7f5c-4c9d-96b8-7f9121c3e013",
        "updated_at": "2024-09-03T02:45:00.835439Z",
        "updated_by": "00f92e3f-7f5c-4c9d-96b8-7f9121c3e013",
        "tenant_id": "b8766c9d-d71e-46a2-968b-552dea1a7cd2",
        "occ_lock": 0
    },
    "sent_at": "2024-09-03T02:45:00Z"
}
```

</td></tr>
</table>

