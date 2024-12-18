---
id: custom_attributes
sidebar_position: 1
---

# Introduction

To enhance user flexibility, our incident management system allows configurators to define custom attributes tailored to their specific needs through a set of APIs. This enables incident owners to assign relevant values to these attributes, enriching the system's adaptability. To ensure data consistency and quality, incident owners must adhere to the predefined names and data types of these custom attributes.

```json title='example of a incident with attributes'
{
  "id": "INC_20241216_0001",
  "name": "Security Breach",
  //highlight-start
  "attributes": {
    "count": 1235,
    "pending": true
  },
  //highlight-end
  "location": ""
}
```
