---
sidebar_position: 1
sidebar_label: Overview
---

#	Overview

This section provides instruction on how to setup local deployment for development.

For production development, please refer to [Deployment](../deployment/overview.md) section on how to make the RTUS ready for production.

The Docker Compose file to start up RTUS can be found under `rtus` directory in `dev-containers` repository. For more information on dev-containers, 
please refer to [Local Development](../../get-started/local-development.mdx).

To run RTUS module, navigate to the `dev-containers` directory in your local machine and execute the following:

```bash

podman compose --env-file .env -f .\rtus\compose.yml up -d

```

## Accessing RTUS OpenAPI Doc

After successful startup the RTUS, you will be able to access the OpenAPI Doc for RTUS-PMS using the following link:

http://rtus-pms.127.0.0.1.nip.io/swagger-ui/index.html

And access the OpenAPI Doc for RTUS-SEH using the following link:

http://rtus-seh.127.0.0.1.nip.io/swagger-ui/index.html

Alternately, you can also download a copy of the doc as json file from the rtus repository under:

https://github.com/mssfoobar/rtus/releases/download/v1.0.0/apidocs.zip
