# Defining attributes

The incident configurator establishes a meta-table that dictates the permissible attributes for incidents. This involves utilizing a suite of APIs to generate the meta-table and populate it with the necessary metadata. Incident owners are obligated to strictly adhere to this defined metadata, ensuring that they exclusively add fields explicitly specified by the configurator.

## Metadata Attributes

### Management

The meta-table can be dynamically adjusted using the following two APIs:

```powershell title='Endpoints'
POST /v1/incident/attributes
DELETE /v1/incident/attributes
```

### Attributes

<div class="attribute">
  <div class="attributeheader"><span class="attributename">name</span> <span class="attributetype">string (unique)</span></div>

The name of the attribute

</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">type</span> <span class="attributetype">string</span></div>
  The type of the value. Currently we provide the following types: 
  - STRING
  - INT
  - BOOLEAN
</div>

## Querying metadatas

Alternatively, the owners and configurators may query what are the existing metadata already defined as well inorder to ensure the right values are inputted.

```powershell title='GET /v1/incident/attributes'
curl -L 'http://ims.demo.agilopshub.com/v1/incident/INC_20241211_0001/attributes' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'
```

```json title='RESPONSE'
{
  "data": [
    {
      "name": "count",
      "type": "INT"
    },
    {
      "name": "pending",
      "type": "BOOLEAN"
    }
  ],
  "sent_at": "2024-12-16T07:47:39Z"
}
```

This will return a list of attributes and what are the types associated with it.
