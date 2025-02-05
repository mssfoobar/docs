---
sidebar_position: 2
sidebar_label: Prerequisites and Dependencies
---

#   Prerequisites and Dependencies

##  Assumptions

Information in this document assume that:

- You are using the RTUS `Local Development` `Docker Compose` files from `dev-containers` repository to run RTUS locally in Podman Desktop. 
For more information, please refer to Local Development (/modules/get-started/local-development)

-	You are accessing AGIL Ops Hub private container registry for the container image.

:::note
As mentioned in [Release Packages](../../get-started/release-packages.mdx), project should move the container image to project own 
Container Registry and access the container image from there, instead of accessing directly from AGIL Ops Hub registry.

If you have done, please remember to modify the `Docker Compose` files to pull images from your project Container Registry.
:::

## Prerequisites

-	Have working `Podman Desktop` or `Docker Engine` on your local machine.
-	Able to pull RTUS and dependent containers from AGIL Ops Hub Container Registry or project Container Registry.

## Dependencies

-	[IAMS Module](../../iams/overview/features.md)
-	Database: PostgreSQL

:::note
Docker Compose file from dev-container will deploy PostgreSQL database container.
:::


