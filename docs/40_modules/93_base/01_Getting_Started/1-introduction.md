---
sidebar_position: 1
---

# Introduction

The Web-base template is a frontend foundation built using Svelte, designed to accelerate the development of any frontend module. This template provides a solid starting point for building robust and scalable web applications.

## Key Features

- Public/Private Route Separation: The template includes a built-in routing system that separates protected and public routes, ensuring that sensitive areas of the application are only accessible to authenticated users while providing that control to the user.
- Keycloak Authentication: Web-base integrates with Keycloak, a popular open-source identity and access management solution, to provide secure authentication and authorization as well as multitenancy.
- Basic UI Components: The template includes a set of basic UI components, such as navigation, buttons, and forms, to help you get started with building your frontend module.

## Prerequisite Requirements:

### 1. Github CLI

As our repository is stored in Github. Please have Git CLI installed before proceeding further.

### Windows

1. Download the Git for Windows installer from the official Git website: https://git-scm.com/download/win
2. Execute the installer and follow the prompts to complete the installation process.

### macOS (using Homebrew)

1. Install Git using Homebrew by executing the following command in your terminal:

```
brew install git
```

### 2. Keycloak

This frontend web template requires a functional Keycloak setup prior to deployment. Keycloak is an open-source identity and access management solution that provides authentication and authorization services. If not, please refer to https://mssfoobar.github.io/docs/docs/category/-manual-keycloak-realm-setup

## Getting Started

### 1. Clone the repository:

1. Clone the repository:

```
git clone https://github.com/mssfoobar/docs
```

### 2. Configuring Environment Variables

To configure variables that differ between environments, we use environment variables. These variables are stored in a .env file located at the root of the directory.
To get started, please make a copy of the .env.example file located at the root of the repository., which contains the required variables, and rename it to .env. This new file will hold your environment-specific configuration details.

:::note
As stated above, Keycloak is required to be deployed prior to this installation. Please ensure that this is completed before proceeding further.
:::

The following variables _must_ be configured:

- **IAM_URL**: the full URL for the OIDC provider. (This is provided during the keycloak deployment)
- **IAM_CLIENT_ID and IAM_CLIENT_SECRET**: credentials to connect to the IAM server (This is provided during the keycloak setup)
- **PUBLIC_DOMAIN**: this is the domain of your web module.
- **LOGIN_DESTINATION**: the route to navigate to after successful login
- **LOGIN_PAGE**: the route for the login page

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
