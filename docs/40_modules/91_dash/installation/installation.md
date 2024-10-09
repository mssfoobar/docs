# Installation

### Setup web-base

To use the dash module, you require the web-base. If you do, you may skip this section.

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

## Installing the Dashboard (dash) module.

### Configuring Environment Variables

The dash module has backend services that we need to connect to. To successfully connect to the backend services, you'll need to configure a few environment variables beforehand.

:::note
Please ensure that the `dash` and `tag` services are set up and ready prior to installing the dash module.
:::

- DASH_URL = 'link to your dash backend service'
- TAG_URL = 'link to your tag backend service'

The web-base contains a module installer to install modules to the web-base. You may use this command to install the dashboard module. Running this command will download and copy over the required files over to your web-base repository, together with the dependencies installed into the package.json

### Installing the dash package

```bash
npx cli install dash
```

## Others

:::note
After installation, you may encounter errors due to the module's dependency on specific shadcn UI components. To resolve these issues, simply install the required shadcn UI components through its command tool. (It's already installed in the web-base) and you'll be able to proceed with your development.
