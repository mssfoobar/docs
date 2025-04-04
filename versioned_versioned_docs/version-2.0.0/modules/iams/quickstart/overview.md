---
sidebar_position: 1
---

# Overview

This section provides instruction on how to setup local deployment for development.

For production development, please refer to [Configuring for Production](../deployment/overview.md)
on how to make the `IAMS` ready for production.

The `Docker Compose` file to start up `IAMS` can be found under `iams` directory in `dev-containers` repository.
For more information on `dev-containers`, please refer to [Local Development](../../get-started/local-development.mdx).

To run IAMS module, navigate to the `dev-containers` directory in your local machine and execute the following:

```
podman compose --env-file .env -f .\iams\compose.yml up -d
```

## Accessing Keycloak Admin Console

After successful startup the `IAMS` module using `Docker Compose`, you will be able to login to the Keycloak Admin Console
using the following link: http://iams-keycloak.127.0.0.1.nip.io/ .

The bootstrap `admin username` and `password` is what you have configured in the [Set up the environment variables](../../get-started/local-development.mdx#2-set-up-the-environment-variables)
steps in the `Local Development` section.

## Accessing IAMS-Web 

IAMS provides a Web Admin Console to manage tenant, user, role, group, resource, and scope within a realm.

It can be access via  http://iams-web.127.0.0.1.nip.io.

The `dev-containers` file will create a `system administrator` with the same username and password as what you have configured for bootstrap admin user for Keycloak.


## Accessing `IAMS-AAS` OpenAPI Doc

The OpenAPI Doc for IAMS-AAS can be access using the following link when the IAMS module is running:

http://iams-aas.127.0.0.1.nip.io/swagger-ui/index.html

Alternately, you can also download a copy of the doc as json file from `iams` repository under:

`\apidoc\iams-aas-api-docs.json`

