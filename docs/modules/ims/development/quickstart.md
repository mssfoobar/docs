---
sidebar_position: 2
sidebar_label: Quickstart
---

# Quickstart

## Pre-requisites

Required:

-   [Docker](https://www.docker.com/)

Please ensure these steps are done before following.

1. Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
2. Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
3. Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup

```bash
git clone https://github.com/mssfoobar/dev-containers.git
```

:::info
If you previously used a different service with a dev container that created an iams container, you'll need to delete the associated volume (.data) file. This ensures the iams service reinitializes correctly with the updated client data.
:::

## Installation

### 1. Clone Repository

Please run the following command to clone the ims container repository.

Next, we are to clone our container. We have provided a container that provides you the IMS service together with all the other necessary services in a single docker file for ease of setup.

### 2. Setting up environment variables

<div class="attribute">
  <div class="attributeheader"><span class="attributename">DEV_DOMAIN</span> <span class="attributetype">string</span></div>
    A rough title of what the incident is about.
    This is the domain that the IMS service will be using. E.g. if the value of DEV_DOMAIN
is <i>127.0.0.1.nip.io</i>, inorder to access the IMS service, the appropriate url will be http://ims.<i>127.0.0.1.nip.io</i>
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">DEV_USER</span> <span class="attributetype">string</span></div>
    The username to be used for all services for convenience of access and development
</div>
<div class="attribute">
  <div class="attributeheader"><span class="attributename">DEV_PASSWORD</span> <span class="attributetype">string</span></div>
    The password to be used for all services for convenience of access and development
</div>
<div class="attribute">
  <div class="attributeheader"><span class="attributename">DEV_USER_URL_ENCODED</span> <span class="attributetype">string</span></div>
    Global username used for everything - but URL encoded - this is needed for connection strings#    
</div>

<div class="attribute">
  <div class="attributeheader"><span class="attributename">DEV_PASSWORD_URL_ENCODED</span> <span class="attributetype">string</span></div>
  Global password used for everything - but URL encoded - this is needed for connection strings
  (E.g. If <span class="attributename">DEV_PASSWORD</span> was <i>P@ssw0rd</i>, then <span class="attributename">
    DEV_PASSWORD_URL_ENCODED</span> would be <i>P%40ssword</i> as the special character '@' must be encoded)
</div>

### 3. Running the container

You may now run the container using the following command

```powershell
docker compose --env-file .env -f ims/compose.yml -f override.yml up -d
```

This will create the container and you may start to use the ims service. In order to access the IMS service for testing, you may use the following URL

```
ims.<insert the value of DEV_DOMAIN here>/v1/incident
```

With this, you may proceed to start your local development!

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
