---
sidebar_position: 1
---

# Overview

This section provides instruction on how to setup local deployment for development.

For production development, please refer to [Configuring for Production](../deployment/configuring-for-production/overview.md)
on how to make the `IAMS` ready for production.

# Directory Structure

The `IAMS` “local development” deployment scripts/manifests files package should contain the following directories:

| Subdirectory  | Contains                                                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| iams-ass      | Deployment scripts/manifests files to deploy Authorization and Admin Service (IMAS-AAS)                                                   |
| iams-keycloak | Deployment scripts/manifests files to deploy customized Keycloak image (IAMS-Keycloak) and import scripts to load realm default settings. |
| postgres      | Deployment scripts/manifests files to deploy PostgreSQL server to store IAMS data.                                                        |

:::note
it is possible to reuse existing PostgreSQL server to store IAMS data instead ofdeploying another server instance. Refer to 2.7 (Deploy IAMS-Keycloak) for information to do so.
:::
