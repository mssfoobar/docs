---
sidebar_position: 1
---

# 🚀 Quickstart

## Pre-requisites

Required:

- [Docker](https://www.docker.com/)

Please ensure these steps are done before following.

1. Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
2. Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
3. Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup

:::info
If you previously used a different service with a dev container that created persistent data, you'll need to delete the 
associated volume in the `.data` directory at the root of the repository. This ensures the docker compose up to 
reinitialize the data correctly.
:::

## Installation

### 1. Clone Repository

Clone the dev container repository

```bash
git clone https://github.com/mssfoobar/dev-containers.git
```

### 2. Setting up environment variables

Next, we need to copy the sample `.env` file and remove the `.sample` in repository root directory. Provide the 
necessary variables inside the `.env` file.

Example `.env` file

```dotenv
# Root domain to use for all services
DEV_DOMAIN=172.17.0.1.nip.io

# Global username and password used for everything
DEV_USER=admin
DEV_PASSWORD=P@ssw0rd

# Global username and password used for everything - but URL encoded - this is needed for connection strings
# as some passwords might have special symbols in them, such as "@", causing database connection strings to fail
# For example, if your DEV_PASSWORD is "strong_p@ssword", in DEV_PASSWORD_URL_ENCODED, it must be "strong_p%40ssword"
DEV_USER_URL_ENCODED=admin
DEV_PASSWORD_URL_ENCODED=P%40ssw0rd
```

:::tip
`DEV_USER` and `DEV_PASSWORD` set the default username and password to be used for all services for convenience of 
access and development.
:::

If you want to use out-of-the-box activities such as Email, ChatGPT, UCS & IMS activities, you will need to configure
them in the `wfe/compose.yml` wfe-worker container environment.

### 3. Running the container

You may now run the container using the following command

```bash
docker compose --env-file .env -f wfe/compose.yml -f compose.override.yml --profile docker up -d
```

If you are using podman instead of docker, use `podman compose` instead of `docker compose`.

```bash
podman compose --env-file .env -f wfe/compose.yml -f compose.override.yml up -d
```

Once the services are up, you should be able to access the followings
- workflow designer - `http://wfd.{DEV_DOMAIN}`
- workflow manager - `http://wfm.{DEV_DOMAIN}`
- temporal ui - `http://wf-admin.{DEV_DOMAIN}`

`{DEV_DOMAIN}` is defined in the .env file at the root folder. For example, if your domain is 127.0.0.1.nip.io, then the
value of the workflow designer will be  http://wfd.127.0.0.1.nip.io

:::note
When prompted for user credentials, use `DEV_USER` and `DEV_PASSWORD` value set in the `.env` file.
:::

## Using compose.override.yml to customize container settings

The `compose.override.yml` file is used to override the default settings in the `./wfe/compose.yml` file. For 
example, if you are developing activity you need to port forward database port and temporal api port.

Below is an example of `compose.overwrite.yml` that map the port database port 5432 to host port 5432 and temporal 
api port 7233 to host port 7233.

```yaml
name: aoh
services:
  wfe-db:
    ports:
      - 5432:5432
  temporal:
    ports:
      - 7233:7233
```

## Clean up

You can clean up the container using the following command

```bash
docker compose --env-file .env -f wfe/compose.yml -f compose.override.yml --profile docker down
```
