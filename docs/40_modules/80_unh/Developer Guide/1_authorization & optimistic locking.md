---
sidebar_position: 2
---
# Authorization & Optimistic Locking

## Authorization

UNH on its own doesn't validate the user's authorization token. However, it's still needs authenticated access token 
in the authorization header to retrieve the user's tenant membership. This is required to support multi-tenancy by 
scoping the data to a single tenant.

If you are developing your own frontend module using [AOH WEB-BASE](../../93_base/01_Getting_Started/1-introduction.md),
it should handle the authentication and authorization for you. So you just need to pass the access token store in the 
cookie to the UNH API inside the authorization header.

## Optimistic Locking 

UNH provides optimistic locking support in the API. When using the UNH API (specifically CRUD API), You will 
notice the `occ_lock` field in the data object. This is used to ensure that the data is not updated concurrently. So,
every time you update the data, you need to pass the current `occ_lock` value in the request body.
