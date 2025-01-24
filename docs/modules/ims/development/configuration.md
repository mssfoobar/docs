---
sidebar_label: Post-deployment
sidebar_position: 2
---

# Post Deployment

Once your backend service is set up, you can start using it right away. However, if the incident schema is missing fields you need, you can configure it to better suit your requirements. If no changes are needed, you can skip this section and proceed to use the APIs.

As mentioned earlier, deployers can customize their instance by extending the incident module with [custom attributes](/docs/modules/ims/overview/concepts/attribute.mdx). This section will guide you through the extension process.


To extend the incident module, deployers must define the _attribute-meta_ table. This table serves as a schema, specifying the names and data types of additional attributes for incident objects. This enables incident owners to incorporate these custom fields when creating new incidents.

:::warning
Attribute metadata definition is a responsibility reserved ONLY for _**deployers**_ to ensure consistency and adherence across all users."
:::

## Creating attribute metadata

```typescript title="POST /v1/incident/attributes" showLineNumbers
  const headers: HeaderInit = {
    "Authorization": 'Bearer your_access_token',
    "Content-Type": 'application/json'
  }
  const response = await fetch(`${incidentEndpoint}/v1/incident/attributes`,
                                headers: headers,
                                body: JSON.stringify(requestBody))
```

```json title="Request" showLineNumbers
{
  "name": "isPending"
  "type": "BOOLEAN"
}

```

To create an attribute metadata entry, invoke the create attribute API, providing the name and type of the new attribute within the request body.
Based on the request body above, this will allow users to input a boolean field "isPending" into the incident.

:::warning
We recommend that definining the attribute metadata should be done at the start of the deployment as changing it when users are already using might cause conflicts to the data.
:::

## Listing attribute metadata

For users to know what are the customized attribute fields they can define in their incidents. Users may call this API to list down all metadata attribute defined by the deployer.

```typescript title="GET /v1/incident/attributes"
  const response = await fetch(`${incidentEndpoint}/v1/incident/attributes`, headers: headers)
  const data = await response.json();
  console.log(data)
```

```json title="Response" showLineNumbers
{
  "data": [
    {
      "name": "isPending",
      "type": "BOOLEAN"
    }
  ]
}
```

## Deleting attribute metadata

```typescript title="DELETE /v1/incident/attributes" showLineNumbers
 const response = await fetch(`${incidentEndpoint}/v1/incident/attributes/isPending`, headers: headers);
 if(response.ok) {
        console.log("isPending is deleted!")
 }
```

Alternatively, you may also delete a metadata attribute with the delete api.

:::warning
Once again, we do **strongly** emphasise to do this at the start and finalising your metadata before letting the service be available to your targeted users.
:::


## Commence Development
Once you finalised your metadata, users can define these additional attributes to their incident, which will be what we will be guiding you in the next section.
