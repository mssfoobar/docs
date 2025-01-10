# Assigning attributes

## Assigning

Once the incident configurator establishes the metadata for custom attributes, incident owners and reporters can assign values to these attributes to their respective incident as needed. The following APIs are used to modify these attributes

```powershell title='PUT /v1/incident/{incident_id}/attributes'
curl -L 'http://ims.demo.agilopshub.com/v1/incident/INC_20241211_0001/attributes' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'
--json `{
    'name': 'count'
    'type': 'INT'
}`
```

```json title='RESPONSE'
{
  "message": "1 attribute(s) inserted. rows affected: 1",
  "sent_at": "2024-12-16T06:45:37Z"
}
```
