---
sidebar_position: 2
---

# Authorization & Optimistic Locking

## Authorization

All AOH modules' API calls require a bearer token in the Authorization header. If you are developing your own frontend 
application using [AOH WEB-BASE](../../93_base/01_Getting_Started/1-introduction.md), it will handle the authentication 
and authorization for you. You will just need to pass the access token stored in the cookie to the API via the 
Authorization header.

## Optimistic Locking

The AOH module API supports optimistic locking to prevent concurrent updates. When using the CRUD API, you will see the 
`occ_lock` field in the data object. This field must be included in your update requests to ensure that no other 
updates have occurred between the read and update operations.

Each time you send an update, include the current `occ_lock` value in the request body, as shown below:

```json
{
  "id": "123",
  "name": "Updated Resource",
  "occ_lock": 42
}
```

If the `occ_lock` value in the database has changed since your last read operation, the API will reject the update, 
preventing overwrites caused by concurrent modifications.

