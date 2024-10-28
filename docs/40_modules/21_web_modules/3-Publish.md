# Publishing

## Steps

As mentioned previously, There is a packaging manager integrated into the web-base that extracts the exported files to creates a package and publish it.
To run it,

### 1. Packaging the module

```bash
npx cli package
```

If this is successful, there will be a mod folder with all your exported files and folders inside at the root of your directory.

:::warning
Please do not modify the **mod** folder as the package manager will be publishing this to the registry.
:::

#### Why a Standardized Folder Structure is Crucial

As mentioned in the Development section, it's essential to organize your package according to our recommended folder structure. This ensures that the packaging manager can easily locate the required files and folders, making the packaging process smooth and error-free.

#### Packaging Manager Input Requirements

To successfully package your module, the packaging manager needs some essential information from you. Please provide the following:

- **Module Name**: The name of your module
- **Project Name**: The name of your project
- **Lib Folder**: The absolute path to the lib folder containing your module's code
- **Public Route Folder**: The absolute path to the public route folder
- **Private Route Folder**: The absolute path to the private route folder
- **package.json**: The absolute path to the package.json file, which ensures that the package has the necessary dependencies. The manager takes your web-base package.json and constructs its own to ensure that it has the necessary dependencies

## 2. Publshing the package

Please run

```
  npx cli publish
```

Once done, your package is published and ready for installation.
