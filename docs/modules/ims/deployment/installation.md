---
sidebar_position: 1
sidebar_label: Deployment
---

# Deployment

For development purposes, we utilize a repository named _dev_container_ that houses all our modules. This repository facilitates convenient retrieval of specific containers, including the IMS backend container, via Docker. In this section, we'll provide instructions on how to obtain and configure the IMS container, enabling you to run the IMS backend service locally.

## Pre-requisites

Required:

- [Docker](https://www.docker.com/)

Please ensure these steps are done before following.

1. Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
2. Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
3. Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup



## Clone Repository
Please run the following command to clone the ims container repository. 
```bash
git clone https://github.com/mssfoobar/dev-containers.git
```

Next, we are to clone our container. We have provided a container that provides you the IMS service together with all the other necessary services in a single docker file for ease of setup.

## Setting up environment variables

Here's a breakdown of the required environment variables for the IMS container:

| Variable Name            | Type   | Description                                                                        | Example                                                                                                   |
| ------------------------ | ------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| DEV_DOMAIN               | string | A descriptive title for the incident. This domain will be used by the IMS service. | If `DEV_DOMAIN` is set to `127.0.0.1.nip.io`, the IMS service URL would be `http://ims.127.0.0.1.nip.io`. |
| DEV_USER                 | string | Username for all services (for convenience).                                       |                                                                                                           |
| DEV_PASSWORD             | string | Password for all services (for convenience).                                       |                                                                                                           |
| DEV_USER_URL_ENCODED     | string | Global username URL-encoded (needed for connection strings).                       |                                                                                                           |
| DEV_PASSWORD_URL_ENCODED | string | Global password URL-encoded (needed for connection strings).                       | If `DEV_PASSWORD` is `P@ssw0rd`, then `DEV_PASSWORD_URL_ENCODED` would be `P%40ssword`.                   |

## Running the container

You may now run the container using the following command

```powershell
docker compose --env-file .env -f ims/compose.yml -f override.yml up -d
```

This will create the container and you may start to use the ims service. In order to access the IMS service for testing, you may use the following URL

```
ims.<insert the value of DEV_DOMAIN here>/v1/incident
```

With this, you may proceed to start your local development!

:::info
If you previously used a different service with a dev container that created an iams container, you'll need to delete the associated volume (.data) file. This ensures the iams service reinitializes correctly with the updated client data.
:::


## Using a Local Configuration File for Container Settings

For greater development flexibility, we provide a customizable YAML file that allows you to adjust certain container settings. This file is intended for your personal development environment and is not part of the project's shared configuration. This file will overwrite any specified parameters that is in the <i>./ims/compose.yml</i>

To customize, please modify the following file with your desired IDE

```powershell
vi ./overwrite.yml
```

Below is an snippet of <i>overwrite.yml</i>

```yaml
ims-db:
  ports:
    - 5432:5432
```

##

For this specific scenario, we are adjusting the <i>ports</i> parameter to redirect port 5432 in <i>./ims/compose.yml</i>

## Clean up

Once done with the service, if you want to delete the container, you may use the following command

```powershell
docker compose -f ims/compose.yml down -v
```
