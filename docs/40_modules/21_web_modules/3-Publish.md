# Publishing

## Steps

As mentioned previously, There is a packaging manager integrated into the web-base that extracts the exported files to creates a package and publish it.
To run it,

### 1. Packaging the module

```bash
npx cli package
```

1. The CLI tool will ask you for your package name - this corresponds to the name of the folder you're putting all your modules files in ((i.e. "chat" in the development guide's example)[https://mssfoobar.github.io/docs/docs/modules/web_modules/Development#example]).

2. Next, it will ask for your project name - this is `aoh` when doing development for AOH modules ((see "foo" in the development guide's example)[https://mssfoobar.github.io/docs/docs/modules/web_modules/Development#example]).

3. Now it will ask for the path to the web folder that you're trying to package. Since you're likely already executing this in the web folder, the default should already be correct (you can just press enter).

4. Now it will ask for the path to your web's `package.json`, the default should also already be correct, otherwise, provide it the absolute path.

5. The next steps asks for your `lib` folder, which is where all your web components and libraries reside. The default assumes it will be in `src/lib/<project-name>/<module-name>`, which is how you should be structuring your folders.

6. Finally, it will ask for your public and private routes if any. Your modules may have API routes that need to be called and these steps allow you to include them in your package. The installation step will later copy these out for the developers, following the same folder structure.

7. The final steps is to confirm the repository URL for your package - the tool is currently built to support publishing to `GitHub Packages` this URL must be the URL to your current source code.

If this is successful, there will be a mod folder with all your exported files and folders inside at the root of your directory. This is published to the URL supplied in step 7.

:::note
The **mod** folder is used the publishing step and can be deleted when your package has been published.
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
