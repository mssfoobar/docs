---
sidebar_position: 2
---

# Installation


### Setup web-base

To use this module, you'll need the web-base component. If you've already installed it, you can skip ahead.


### 1. Clone web-base repository

Use the github CLI to clone the web-base project.

```bash
git clone https://github.com/mssfoobar/web-base
```

Please refer to the web-base documentation to setup the pre-requisites for the web-base to work. You may refer to it
[here](https://mssfoobar.github.io/docs/docs/modules/base/Getting_Started/pre-requisite).

### 2. Install dependencies

Install node dependencies

```bash
npm install
```

Once done, you have a functioning web-base to install the dashboard module.

## Installing the Incident Management Service Module

### Configuring Environment Variables

The ims module has backend service that we need to connect to. To successfully connect to the backend services, you'll need to configure a few environment variables beforehand. You may refer to <a href="backend/introduction.md">here</a>

:::note
Please ensure that the `ims` services are set up and ready prior to installing the ims module.
:::

- IMS_URL = 'link to your ims backend service'

The web-base contains a module installer to install modules to the web-base. You may use this command to install the dashboard module. Running this command will download and copy over the required files over to your web-base repository, together with the dependencies installed into the package.json

### Installing the IMS Module via the CLI.

```bash
npx cli install @mssfoobar/ims
```

## Others

:::note
After installation, you may encounter errors due to the module's dependency on specific shadcn UI components. To resolve these issues, simply install the required shadcn UI components through its command tool. (It's already installed in the web-base) and you'll be able to proceed with your development.
