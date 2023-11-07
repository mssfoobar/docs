---
sidebar_position: 10
---
# Setup Service Infra Repository

## Introduction

:::note
The Service Infra Repository serves as an extension of the Project Infrastructure Repository, and can be referenced by the latter.  
For instructions to setup the project infrastructure, refer [here](docs/deployment/overview).  
:::

This guide provides instructions on how to create a **new** service infrastructure repository in an **existing** project.

The Service Infra Repository contains IaC which determine how the service (container image) shall be deployed.
As part of the CI, the service's IaC is updated when a service's container image is successfully built as a result of changes to the service's source code.

# Create Service Infra Repository

The following instructions assume that you are
creating the service infra repo for a service called `MYSERVICE`. 

## Setting up the service infra repository


The new repository can be created by <u>**one**</u> of the following means:

### Create a new service infra repository directly from template using Github web console
Create repository directly from template
The `aoh-service-infra-template` repository exist as a GitHub template. If you are hosting your source code on GitHub, you can go to
the respective repository links and click `Use this template` to create a new repository directly from the template.

After that, clone the repository to local.  
Customize template for new repo.
```bash
./init-template.sh <PROJECT_NAME> <SERVICE_NAME>
```
then commit and push the changes.

### Create a new service infra repository from template by cloning to local

Pre-create empty service infra repository (using name format `<PROJECT>-<SERVICE>-infra`) on Github and then use service infra template repository to populate it.

Clone `aoh-service-infra-template` repository to local.
:::note
For AOH core development, use this:  
`git clone https://github.com/mssfoobar/aoh-service-infra-template`
:::

```bash
# Use this for non-AOH-core development
git clone https://github.com/DoisKoh/aoh-service-infra-template
```

Customize template for new repo.
```bash
./init-template.sh <PROJECT_NAME> <SERVICE_NAME>
```

Then rename and publish repository
```bash
./init-repo.sh <PROJECT_NAME> <SERVICE_NAME>
```

# Configure Service Infra Repository

With reference to `docker-compose.yml` file in `service`'s source code repository, configure `dev/helm/values.yaml` file in the `service-infra` that was setup in the previous step.
Search for `UPDATE THIS SECTION` for areas to be updated.