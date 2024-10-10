---
sidebar_position: 4
---

# Distribution List

Distribution list is how UNH resolve keycloak users to their contact information such as email & fcm token.

:::important
All the `internal` value you set in distribution list must be keycloak resources. Otherwise, UNH will not be able to 
resolve the recipient contact to send notification.

`internal_user_id` - keycloak user id, `internal_role_id` - keycloak role name, `internal_group_id` - keycloak 
group id. Please ignore the `external_email` and `external_phone` fields as they are currently not used by UNH.
:::

:::warning
Ids in below examples are randomly generated and will differ from your own generated id. Please adjust accordingly.
:::

Let's use [Create Distribution List API](../UNH%20API/create-distribution-list.api.mdx) to create a new distribution list.


<table>
<tr><th>Request</th></tr>
<tr><td>

```
curl --location 'http://{{unh_endpoint}}/v1/admin/distribution_list' \
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

