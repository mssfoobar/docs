---
sidebar_position: 2
sidebar_label: Known Issues
---

# Known Issues

## Incorrect Swagger UI Documentation

-   The Swagger UI documentation indicates certain fields like `created_at`, `created_by`, `updated_at`, and `updated_by` will be returned in the response body for various Tag API endpoints. However, these fields are not actually included in the API responses - we are still deliberating if all services should return these fields.

-   Also, the `message` field in the response body is currently not being populated as indicated in the documentation - the response messages for errors are typically more detailed and specific to the error encountered than the generic messages in the Swagger UI. We are considering changing the messages them selves to be more informative rather than just matching the Swagger UI documentation.
