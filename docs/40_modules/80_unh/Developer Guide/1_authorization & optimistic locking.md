---
sidebar_position: 2
---

# Authorization & Optimistic Locking

## Authorization

UNH does not validate the user's authorization token on its own. However, it requires an authenticated access token in
the Authorization Header to retrieve the user's tenant membership. This is necessary to support multi-tenancy, ensuring
that data operations are scoped to a single tenant, and preventing cross-tenant access.

If you are developing your own frontend module using [AOH WEB-BASE](../../93_base/01_Getting_Started/1-introduction.md),
it will handle the authentication and authorization for you. You will just need to pass the access token store in the
cookie to the UNH API via the Authorization Header.

## Optimistic Locking

The UNH API provides support for optimistic locking to prevent concurrent updates to the same data. When using the CRUD
API, you will see the `occ_lock` field in the data object. This field must be included in your update requests to ensure
that no other updates have occurred between the read and update operations.

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

