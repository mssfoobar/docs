---
sidebar_position: 2
sidebar_label: Prerequisites and Dependencies
---

#   Prerequisites and Dependencies

##  Assumptions

Rest of the information assume that 
- You are using the IAMS `Local Development` `Docker Compose` Configuration files in `dev-containers` repository to run IAMS locally in 
Podman Desktop.
For more information on `dev-containers`, please refer to [Local Development](../../get-started/local-development.mdx).
- You are accessing AGIL Ops Hub private container registry for the container image.

:::note
As mentioned in [Release Packages](../../get-started/release-packages.mdx), project should move the container image to project 
own `Container Registry` and access the container image from there, instead of accessing directly from AGIL Ops Hub registry.
:::

## Prerequisites

- Have working `Podman Desktop` or `Docker Engine` on your local machine.
- Have read access to AGIL Ops Hub container registry.


## Dependencies

- Database: PostgreSQL, MS SQL, or Oracle.
:::note
`Docker Compose` file from `dev-container` will deploy PostgreSQL database container. 
:::

- No dependency on other modules.

:::note
`IAMS-Web` is currently not implemented as `Web Component`.

In future release, this will change. It will be implemented as `Web Component`, allowing project to deploy `IAMS-Web` together with
`Web Components` from other modules.
::: 
