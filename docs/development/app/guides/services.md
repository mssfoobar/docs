---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Backend Service Creation

This section provides step-by-step instructions on how you can create a new service in the `AGIL Ops Hub` framework.

## Pre-requisites

:::tip
Pay careful attention to the `wsl` and `Git` requirements - all the commands are written for **Linux**. To follow
the steps painlessly on a Windows system, you should install `wsl` and run the commands in the `wsl` terminal. Also,
make sure `Git`'s credential manager is set up to use `Windows Credential Manager`. The steps to do this is
straightforward and available in the links provided in the [Required Tools](#required-tools) section.
:::

#### Recommended Tools:

-   [Visual Studio Code](https://code.visualstudio.com/download)

    A popular text editor with many integrations with the technologies we use. Alternatively, you may use your preferred
    text editor.

#### Required Tools:

-   [Windows Subsystem for Linux (Ubuntu Distribution)](https://learn.microsoft.com/en-us/windows/wsl/install)

    If you are running on a Windows system, you'll want to install the Ubuntu distribution of WSL
    (Windows Subsystem for Linux). This is because we'll be giving you Linux commands and scripts to
    simplify/standardize the steps required to get the project up and running.

    If you are comfortable with running the equivalent commands on Windows, you may skip this requirement, however,
    we have scripts/commands ready (e.g. curl-ing the Keycloak Admin API endpoints) for you to run in Linux that might
    be troublesome to perform on Windows.

-   [Go](https://go.dev/)

    Golang runtime required for development.

-   [Git](https://git-scm.com/downloads)

    Our version control system for source code. This is installed in Ubuntu by default. If you're using Windows, please
    install it. You can use GitHub Desktop or your favourite GUI package for this as well.

    https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git#git-credential-manager-setup

    If you're using WSL, follow the above tutorial to ensure `git` in WSL works seamlessly with Windows. This means any
    password you use when working with `git` on Windows will also work in WSL.

-   [Docker Desktop](https://www.docker.com/products/docker-desktop/)

    Contains the container run-time for container images as well as a user-interface for managing containers, and many
    more additional features such as `docker-compose`, etc.
    Even if you are extremely familiar with containerization,
    [Docker Engine](https://www.docker.com/products/container-runtime/) alone will probably not be enough as we use
    `docker-compose`.

## 1. Setting up the repository

### Create a new repository for your service from the template

![image](./images/create-repository-from-template.png)

The following repositories exist as GitHub templates, if you are hosting your source code on GitHub, you can go to
the respective repository links and click `Use this template` to create a new repository directly from the template,
otherwise, you may use the steps below to clone and create a new `git` repository.

### 1.1 Clone the repository

Refer to the pre-requisite section on how to set up `git` in WSL if your credentials in Windows are not being recognized
in WSL.

:::caution
Members contributing directly to AGIL Ops Hub will should have access to the repositories in `mssfoobar`. Members of
other projects will require access to the same repository in a different organisation.

If you do not have access to the following repositories, approach the maintainers of `AOH` to request for access.
:::

<Tabs>
<TabItem value="1" label="AGIL Ops Hub" default>

```bash
git clone https://github.com/mssfoobar/aoh-service-template
```

</TabItem>
<TabItem value="2" label="Other Projects">

```bash
git clone https://github.com/DoisKoh/aoh-service-template
```

</TabItem>
</Tabs>

### 1.2 Renaname the repository

This example assumes you are creating a service called `solveallyourproblems`. You should also replace `aoh` with your project or
organisation name.

```bash
mv aoh-service-template aoh-solveallyourproblems
```

### 1.3 Change the `.git` repository to your own new one

```bash
cd aoh-solveallyourproblems
```

```bash
rm -rf .git
```

```bash
git init
```

```bash
git checkout -b main
```

```bash
git add .
```

```bash
git commit -m "initial commit"
```

Replace `[your-remote-url]` with the actual URL of your remote Git repository (e.g.
git remote set-url origin https://github.com/mssfoobar/aoh-solveallyourproblems)

```bash
 git remote set-url origin [your-remote-url]
```

## 2. Create a Keycloak client for your service

Your new service will need to authenticate itself with Keycloak in order to access other services in our system (e.g.
to connect to Hasura to write or read data in the database). To do this, it needs to register itself with Keycloak as a
new client and exchange its credentials for an access token that must be sent with each request to other services.

### 2.1 Install `jq` if you don't have it (it is a json query)

```bash
sudo apt install jq
```

### 2.2 Prepare Keycloak client information

Change the values for `CLIENT_ID`, `CLIENT_NAME` and `CLIENT_DESC` based on what's appropriate for your service.

```bash
CLIENT_ID="aoh_solveallyourproblems"
CLIENT_NAME="AGIL Ops Hub Solve All Your Problems Service"
CLIENT_DESC="aoh_solveallyourproblems"
```

```bash
jq ".clientId = \"$CLIENT_ID\" |
 .name = \"$CLIENT_NAME\" |
 .description = \"$CLIENT_DESC\"" \
 service_client_template.json > client_config.json
```

### 2.3 Prepare credentials to create Keycloak client

For the following command, you will need to prepare 3 bits of information:

-   the username of the Keycloak admin account (e.g user)
-   the password of the Keycloak admin account (e.g password123)
-   the address to your Keycloak server (e.g. http://iam.dev.aoh)
-   the Keycloak realm that your project is created under (e.g. ar2)

The commands will log you in to Keycloak and retrieve an access token, then use that access token to create a client for
your new service based on the `client_config.json` file we just created in
[step 2.2](#22-prepare-keycloak-client-information). Replace the `[username]`, `[password]`, and `[iam_url]` with your
appropriate Keycloak credentials.

Example: USERNAME=user

```bash
USERNAME=[username]
```

Example: PASSWORD=password123

```bash
PASSWORD=[password]
```

Ensure there is **no trailing slash** (e.g. `http://iam.dev.aoh` not `http://iam.dev.aoh/`)

```bash
IAM_URL=[iam_url]
```

:::caution
If you use the wrong `IAM_URL`, such as if you point to a site that doesn't exist, `curl` will not reliably know that
is erroneous. You will likely get a blank output. If you are having problems, please double-check that your `IAM_URL` is
pointing your correct IAM server host.
:::

Example: REALM=ar2

```bash
REALM=[keycloak_realm]
```

```bash
TOKEN="$(curl -s -X POST -H "Content-Type: application/x-www-form-urlencoded" \
-d "username=$USERNAME&password=$PASSWORD&grant_type=password&client_id=admin-cli" \
$IAM_URL/realms/master/protocol/openid-connect/token | jq -r ".access_token")"
```

### 2.4 Create the Keycloak client

Note that if successful, the following command does not give any feedback.

```bash
curl -s -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d @./client_config.json \
$IAM_URL/admin/realms/$REALM/clients
```

:::tip
If you are returned an error saying you are unauthorized - you might have keyed in the wrong user/password, or your
token might have expired. If it expired, just execute
[the command to set the token](#23-prepare-credentials-to-create-keycloak-client) again.
:::

If you wish to confirm that your client was created, you can execute the following commands to retrieve the client (the
command assumes you have `TOKEN`, `IAM_URL`, `REALM` and `CLIENT_ID` set).

```bash
curl -s -X GET -H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Bearer $TOKEN" \
$IAM_URL/admin/realms/$REALM/clients/?clientId=$CLIENT_ID | jq -r ".[0]"
```

## 3. Understanding the Project Structure

Below is a summary of our project structure, which follows Golang's standards. For more information, see:
https://github.com/golang-standards/project-layout

### cmd

This is where the application code sits. This typically calls reusable packages from the `pkg` folder. If you have
types, classes, etc. that can be reused in other applications, it should reside in `pkg` instead.

It's common for `cmd` to have a small `main` function that simply imports code from `pkg`.

### pkg

This should contain library code that can be used by other applications. Ideally, your package code could function as
an SDK which can be imported and used in other Golang projects to access and process data in `AOH`.

### docker

Your service may contain multiple packages in your `pkg` folder, each of these packages should have its own Dockerfile.
In this sample, we'll just have one called `service.Dockerfile`, you should rename this accordingly.
(e.g. `solveallyourproblems.Dockerfile`)

### docker-compose

The `docker-compose` file contains all the information needed for Docker to build a container image for your service.
You will need to

## 4. Start writing your service

Congratulations, you can now start writing your service. Compiling and running your service requires the `Go` tool,
which you should already have installed. See [required tools](#required-tools) above. Without the `Go` tool, you won't
be able to build or run your `Go` program.

You may use any IDE you're comfortable with (such as [GoLand](https://www.jetbrains.com/go/)), however, we recommend
Visual Studio Code to keep all of us on the same development environment, which makes troubleshooting simpler.

### 4.1 Create a new `.env` file

This environment file is not meant to be checked in, and is used entirely for your local development. A sample `.env`
file is provided to you called `.env.sample`, with all the default environment variables we used to set up the
database connection. Copy this file and rename it to `.env`:

```bash
cp .env.sample .env
```

Then, open the file and fill in the values accordingly. One of the values you will require is the client secret. You can
either use the Keycloak admin UI to retrieve this, or run the following script:

:::note
This assumes you already have `USERNAME`, `PASSWORD`, `IAM_URL`, `REALM`, and `CLIENT_ID` variables set. Otherwise,
refer to [section 2.3](#22-prepare-keycloak-client-information) and [section 2.4](#24-create-the-keycloak-client)
for details on how they should be set.
:::

Get the token:

```bash
TOKEN="$(curl -s -X POST -H "Content-Type: application/x-www-form-urlencoded" \
-d "username=$USERNAME&password=$PASSWORD&grant_type=password&client_id=admin-cli" \
$IAM_URL/realms/master/protocol/openid-connect/token | jq -r ".access_token")"
```

Use the token to get the `id`:

```bash
ID="$(curl -s -X GET -H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN " \
$IAM_URL/admin/realms/$REALM/clients/?clientId=$CLIENT_ID | jq -r ".[0].id")"
```

Use the token and the `id` to get the secret:

```bash
curl -s -X GET -H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN " \
$IAM_URL/admin/realms/$REALM/clients/$ID/client-secret | echo IAM_CLIENT_SECRET is: $(jq -r ".value")
```

### 4.2 Update the template service's names to your new service's name

To get started, search for the text `TODO` in the template project - in VSCode, the hotkey is `Ctrl + Shift + F` to
search for text in all folders. There, you'll find comments on what you should replace (mostly code relating to
the name of your service, and the name of the Go module)

-   ./go.mod
    Update your module name.
-   ./cmd/service-name/main.go
    Rename the 'service-name' folder appropriately (to whatever your package should be called)
-   ./pkg/constants
    Add or remove any constants required.
-   ./docker/service.Dockerfile
    Rename all the occurrances of `servicename` to an appropriate name for your service. Alsom add any additional build
    steps if required.
-   ./docker-compose.yml
    Add any additional environment variables your service might need.
