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

### Create a new service infra repository from the template

The new repository can be created by **one** of the following means:

- Create repository directly from template
The following repositories exist as GitHub templates, if you are hosting your source code on GitHub, you can go to
the respective repository links and click `Use this template` to create a new repository directly from the template.

- Clone the template repository and create a new git repository

<!--
  > :::caution
Members contributing directly to AGIL Ops Hub should have access to the repositories in `mssfoobar`. Members of
other projects will require access to the same repository in a different organisation.  
If you do not have access to the following repositories, approach the maintainers of `AOH` to request for access.
:::

```bash
git clone https://github.com/mssfoobar/aoh-service-template
```
-->

<!--
For non-`AGILOpsHub` (ie. not core product) development
-->
```bash
git clone https://github.com/DoisKoh/aoh-service-infra-template

# for AOH development, use this:
git clone https://github.com/mssfoobar/aoh-service-infra-template

```

### Rename the repository (from template name)

This example assumes you are creating the infra repository for a service called `MYSERVICE`.  

:::caution
For all files within the template service infra repository, ensure that:
- all instances of `aoh` are replaced with your project or organisation name.
- all instances of `service` are replaced with your service name.
:::

```bash
# Variables to be set
PROJECT=
SERVICE=

mv aoh-service-template ${PROJECT}-${SERVICE}-infra
cd ${PROJECT}-${SERVICE}-infra
rm -rf .git
git init
git checkout -b main
git add .
git commit -m "initial commit"
```

### Publish repository

Replace `[your-remote-url]` with the actual URL of your remote Git repository (e.g.
git remote set-url origin https://github.com/mssfoobar/AOH-MYSERVICE-infra)

```bash
 git remote set-url origin [your-remote-url]
```
