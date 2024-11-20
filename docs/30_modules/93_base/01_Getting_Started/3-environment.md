# Installation

### 1. Clone the repository:

1. Clone the repository:

```
git clone https://github.com/mssfoobar/web-base
```

### 2. Configuring Environment Variables

To configure variables that differ between environments, we use environment variables. These variables are stored in a .env file located at the root of the directory.
To get started, please make a copy of the .env.example file located at the root of the repository., which contains the required variables, and rename it to .env. This new file will hold your environment-specific configuration details.

:::note
As stated above, Keycloak is required to be deployed prior to this installation. Please ensure that this is completed before proceeding further.
:::

There is an env-sample file to be used. You may copy it out and fill up its value

```
cp .env-sample .env
```

Please have these variables filled out accordingly.

## Installation

### 1. Install Dependencies

Now that we have our environment variables configured, let's install the dependencies required for our project.

Run the following command:

```bash
npm install
```

This command will install all the dependencies listed in the package.json file, which is located at the root of our project directory.

What to expect:
After running the command, verify that the dependencies have been installed correctly by checking the node_modules directory. You should see a list of installed dependencies.

```
- root
  ├── **_node_modules_**
  ├── package-lock.json
  ├── package.json
  ├── playwright.config.ts
  ├── postcss.config.js
  ├── src
  ...
```

### 2. Starting the Development Server

Now that we have our dependencies installed, let's start the development server.

Run the following command:

```bash
npm run dev
```

## Congratulations! Your Development Server is Up and Running

Congratulations, your development server has successfully started, and the login page is now live in your default browser! This marks the beginning of your deployment journey, and you're now ready to start building your module.

### Time to Create Your Pages and Components!

With the server up and running, you can now focus on writing your pages and components for your module. This is where the magic happens, and your application starts to take shape.

### What to Do Next?

- Create new pages: Start building the pages that will make up your module. Think about the features and functionality you want to include, and how you want to organize your content.
- Design your components: Break down your pages into smaller, reusable components. This will make it easier to manage your code and create a consistent user experience.
- Write your code: Start writing the code that will bring your pages and components to life. Use your favorite programming languages and frameworks to create a robust and scalable application.

:::info
As you start writing your code, you'll notice that the page updates in real-time without requiring a full rebuild. This is made possible by our hot-reloading feature, which saves you time and effort by automatically applying changes to the running application.
:::
