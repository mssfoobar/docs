---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Service Creation

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

### 1.2 Rename the repository

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

### 2.1 Prepare information and executables

#### 2.1.1 Install `jq` if you don't have it (it is a json query)

```bash
sudo apt install jq
```

### 2.1.2 Get all the information you need for your service

Prepare the following information:

-   Service ID (e.g. aoh_solveallyourproblems)
-   Service Label (e.g. AGIL Ops Hub Solve All Your Problems Service)
-   Service Description (e.g. This service will solve all your problems.)
-   Keycloak Username: This is the username to log in to your admin user in Keycloak (e.g. user)
-   Keycloak Password: This is the password to log in to your admin user in Keycloak (e.g. password123)
-   Keycloak URL: This is the address of your Keycloak server (e.g. http://iam.dev.aoh)
-   Keycloak Realm: This is the Keycloak realm for your project (e.g. aoh)

### 2.1.3 Run the quickstart script

Ensure you are in the `./config` folder, it contains the following template configuration files that are used in the
ensuing commands:

-   client.json
-   group.json
-   role.json
-   quickstart.sh

The last file is a `quickstart` script that you can run to perform all the commands in section `2.`

If you can successfully run this script, you can skip steps ` 2.2` - `2.8`:

```bash
./quickstart.sh
```

The successful command will return you the `Client UUID`, `Client Secret` and `Client Service Account Name`.

You should copy this secret and place it in your `.env` file in step `5.1` to save you the trouble of executing the
command to retrieve the secret again.

### 2.2 Set Keycloak client information

Change the values for `CLIENT_ID`, `CLIENT_NAME` and `CLIENT_DESC` based on what's appropriate for your service.

```bash
CLIENT_ID="aoh_solveallyourproblems"
CLIENT_NAME="AGIL Ops Hub Solve All Your Problems Service"
CLIENT_DESC="This service will solve all your problems."
```

```bash
jq ".clientId = \"$CLIENT_ID\" |
 .name = \"$CLIENT_NAME\" |
 .description = \"$CLIENT_DESC\"" \
 client.json > new_client.json && mv new_client.json client.json
```

### 2.3 Prepare credentials to create Keycloak client

The commands will log you in to Keycloak and retrieve an access token, then use that access token to create a client for
your new service based on the `client.json` file we just created in
[step 2.2](#22-prepare-keycloak-client-information). Replace the `[username]`, `[password]`, `[url]`, and `[realm]` with
your appropriate Keycloak credentials.

Example: KEYCLOAK_USERNAME=user

```bash
KEYCLOAK_USERNAME=[username]
```

Example: KEYCLOAK_PASSWORD=password123

```bash
KEYCLOAK_PASSWORD=[password]
```

Ensure there is **no trailing slash** (e.g. `http://iam.dev.aoh` not `http://iam.dev.aoh/`)

```bash
KEYCLOAK_URL=[url]
```

:::caution
If you use the wrong `KEYCLOAK_URL`, such as if you point to a site that doesn't exist, `curl` will not reliably know that
is erroneous. You will likely get a blank output. If you are having problems, please double-check that your `KEYCLOAK_URL` is
pointing your correct Keycloak server host.
:::

Example: KEYCLOAK_REALM=aoh

```bash
KEYCLOAK_REALM=[realm]
```

With all the variables prepared, we can execute the following command to store the access token in the `TOKEN` variable.

```bash
TOKEN="$(curl -s -X POST -H "Content-Type: application/x-www-form-urlencoded" \
-d "username=$KEYCLOAK_USERNAME&password=$KEYCLOAK_PASSWORD&grant_type=password&client_id=admin-cli" \
$KEYCLOAK_URL/realms/master/protocol/openid-connect/token | jq -r ".access_token")"
```

:::note
This token expires after 1 minute. After which you will need to execute this command again to refresh the token. Some
subsequent commands in this guide still requires the token - in the scenario that they don't work, run this command
again to update the token.
:::

### 2.4 Create the Keycloak client

:::tip
If you are returned an error saying you are unauthorized - you might have keyed in the wrong user/password, or your
token might have expired. If it expired, just execute
[the command to set the token](#23-prepare-credentials-to-create-keycloak-client) again.
:::

Note that if successful, the following command does not give any feedback.

```bash
curl -s -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d @./client.json \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/clients
```

If you wish to confirm that your client was created, you can execute the following commands to retrieve the client (the
command assumes you have `TOKEN`, `KEYCLOAK_URL`, `KEYCLOAK_REALM` and `CLIENT_ID` set).

```bash
curl -s -X GET -H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Bearer $TOKEN" \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/clients/?clientId=$CLIENT_ID | jq -r ".[0]"

```

### 2.6 Create the new role for the Keycloak client

:::tip
If you are returned an error saying you are unauthorized - you might have keyed in the wrong user/password, or your
token might have expired. If it expired, just execute
[the command to set the token](#23-prepare-credentials-to-create-keycloak-client) again.
:::

The following commands are required to set your new client's service account's role.

Prepare the data for the new role:

```bash
jq ".name = \"$CLIENT_ID\" |
 .description = \"$ROLE_DESC\"" \
 role.json > new_role.json && mv new_role.json role.json
```

This will create the new role for your service in Keycloak:

```bash
curl -s -X POST -H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d @./role.json \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/roles
```

### 2.7 Create the new group for the Keycloak client

:::tip
If you are returned an error saying you are unauthorized - you might have keyed in the wrong user/password, or your
token might have expired. If it expired, just execute
[the command to set the token](#23-prepare-credentials-to-create-keycloak-client) again.
:::

The following commands are required to set your new client's service account's group.

Prepare the data for the new group:

```bash
jq ".name = \"$CLIENT_ID\" |
 .path = \"/$CLIENT_ID\" |
 .attributes.\"default-role\"[0] = \"$CLIENT_ID\" |
 .realmRoles[0] = \"$CLIENT_ID\"" \
 group.json > new_group.json && mv new_group.json group.json
```

This will create the new group for your service in Keycloak:

```bash
curl -s -X POST -H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d @./group_config.json \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/groups
```

### 2.7 Create the group-role mapping

:::tip
If you are returned an error saying you are unauthorized - you might have keyed in the wrong user/password, or your
token might have expired. If it expired, just execute
[the command to set the token](#23-prepare-credentials-to-create-keycloak-client) again.
:::

The following commands are to tie the group with the role. This is required for the correct claims to be generated.

Get the `id` of the client (not the same as `CLIENT_ID`):

```bash
CLIENT_UUID="$(curl -s -X GET -H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/clients/?clientId=$CLIENT_ID | jq -r ".[0].id")"
```

Get the role id:

```bash
ROLE_ID=$(curl -s -X GET -H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Bearer $TOKEN" \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/roles | jq -r ".[] | select(.name == \"$CLIENT_ID\").id")
```

Get the group id:

```bash
GROUP_ID=$(curl -s -X GET -H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Bearer $TOKEN" \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/groups | jq -r ".[] | select(.name == \"$CLIENT_ID\").id")
```

Get the service account's user id:

```bash
SERVICE_ACC_ID=$(curl -s -X GET -H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Bearer $TOKEN" \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/clients/$CLIENT_UUID/service-account-user | jq -r ".id")
```

Create group-role mapping:

```bash
curl -s -X POST -H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d "[{ \"id\": \"$ROLE_ID\", \"name\": \"$CLIENT_ID\" }]" \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/groups/$GROUP_ID/role-mappings/realm
```

### 2.8 Put the new service account into the group

:::tip
If you are returned an error saying you are unauthorized - you might have keyed in the wrong user/password, or your
token might have expired. If it expired, just execute
[the command to set the token](#23-prepare-credentials-to-create-keycloak-client) again.
:::

Put your new service client into the group:

```bash
curl -s -X PUT -H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Bearer $TOKEN" \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/users/$SERVICE_ACC_ID/groups/$GROUP_ID
```

This will now allow your service account to have the correct scopes to access the system with its new role.

## 3. Configure Internal Table Permissions

The permission for the role must be configured in Hasura - configure CRUD access to desired tables.

Refer to the following link on how to configure permissions in Hasura:
https://hasura.io/docs/latest/auth/authorization/permissions/

A

## 4. Understanding the Project Structure

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

## 5. Start writing your service

Congratulations, you can now start writing your service. Compiling and running your service requires the `Go` tool,
which you should already have installed. See [required tools](#required-tools) above. Without the `Go` tool, you won't
be able to build or run your `Go` program.

You may use any IDE you're comfortable with (such as [GoLand](https://www.jetbrains.com/go/)), however, we recommend
Visual Studio Code to keep all of us on the same development environment, which makes troubleshooting simpler.

### 5.1 Create a new `.env` file

This environment file is not meant to be checked in, and is used entirely for your local development. A sample `.env`
file is provided to you called `.env.sample`, with all the default environment variables we used to set up the
database connection. Copy this file and rename it to `.env`:

```bash
cp .env.sample .env
```

Then, open the file and fill in the values accordingly. One of the values you will require is the client secret. You can
either use the Keycloak admin UI to retrieve this, or run the following script:

:::note
This assumes you already have `TOKEN`, `KEYCLOAK_USERNAME`, `KEYCLOAK_PASSWORD`, `KEYCLOAK_URL`, `KEYCLOAK_REALM`,
`CLIENT_ID`, and `CLIENT_UUID` variables set. Otherwise, refer to [section 2.3](#22-prepare-keycloak-client-information)
and [section 2.4](#24-create-the-keycloak-client) for details on how they should be set.
:::

Use the token and the `id` to get the secret:

```bash
curl -s -X GET -H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN " \
$KEYCLOAK_URL/admin/realms/$KEYCLOAK_REALM/clients/$CLIENT_UUID/client-secret | echo IAM_CLIENT_SECRET is: $(jq -r ".value")
```

### 5.2 Update the template service's names to your new service's name

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

## 6. Provide a readiness and liveness endpoint

Every service is required to provide a readiness and liveness endpoint. The purpose of these is so Kubernetes can
periodically hit these endpoints to check if your service is alive, or ready.

Reference: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

The template code provides these endpoints to you via the `/v1/info/liveness` and `/v1/info/readiness` endpoints.

You will likely not need to change the `liveness` endpoint, however, if your services requires additional information
or steps to perform before it is ready to serve requests, you will need to make sure that all these steps are done
before you return a `200 OK` on the `readiness` endpoint.

## 7. Handling CORS

AGIL Ops Hub handles CORS with Traefik - you are not expected to handle CORS in your backend services. However, if you
have specific needs that requires CORS to be handled in your service itself, we recommend you use a middleware for `gin`
such as https://github.com/gin-contrib/cors.

During local development, you may run into issues with CORS in your local environment (e.g. when your browser calls
your locally run service with a different origin). In preview and production environments, Traefik will handle this for
you, however, to circumvent this during local development, you can disable CORS for your browser.

For Chrome, you can do so by executing a new instance of Chrome with the following two flags:

```bash
--disable-web-security
```

```bash
--user-data-dir="Path:\to\any\existing_folder"
```

To run with `disable-web-security`, you must also run with Chrome `user-data-dir`, specifying a directory for Chrome to
use to store your special 'disabled security' profile. Just create a folder anywhere that's convenient for you and use
that folder to store the proflile.

Example full command:

```bash
chrome.exe --disable-web-security --user-data-dir=~\tmp\
```

:::tip
You do not need to close existing instances of Chrome before running this command. If it isn't working for you,
double-check that the `--user-data-dir` path you are providing exists. As of version `118.0.5993.118` of Chrome,
you should expect to see a warning underneath the address bar stating:
`You are using an unsupported command-line flag: --disable-web-security. Stability and security will suffer.`
:::

## 8. Preparing your service for deployment

It is the responsibility of developers to ensure that their `docker-compose.yml` file is fully up to date and that their
services can be built and run as a container.

The `.github/workflows` folder contains GitHub actions to automatically build your service into a container image and
deploy this container image to `ghcr.io` (GitHub container registry), the scripts therein should be managed by your
DevOps engineer (which may or may not be you as well).

For details on *initial* deployment of this service, see the [documentation on service deployment configuration](/docs/category/-devops-onboarding-new-service).

For details on source code management, visit the
[documentation on Source Management](/docs/category/-source-management)

## 9. Documenting your service

Your service should be documented as in Open API yaml file. Our workflow consists of us creating Postman Collections
to share and test our API's, then converting them to Open API files.

```
TODO:
- Expand on OpenAPI documentation, commenting in code with gin-swagger could allow us to generate Open API files from
code, which can then be imported into Postman, and also have client SDK's generated for TypeScript
- https://github.com/swaggo/gin-swagger
```
