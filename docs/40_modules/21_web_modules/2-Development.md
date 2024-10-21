# Development

## Packaging Your Web-Base Module

After developing your custom module on top of the web-base, it's essential to package it correctly for distribution. To ensure a seamless integration with the web-base, It is recommended that:

- Organize your exports: Compartmentalize the files that need to be exported, making it easy for others to use your module. This can be achieved by:
- Creating reusable components using Svelte
- Defining routes for easy navigation
- Separating logic into JavaScript/TypeScript files

To keep your module organized and easy to maintain, please ensure the following.

- **Components/Modules folder**: Store all your reusable components and modules, such as Svelte components, in a single folder. We call this the lib folder
- **Routes (public and private) folders**: Organize your routes into two separate folders, allowing you to manage and customize them as needed.

## Folder Structure of Web-Base Before Packaging (IMPORTANT)

### Web-Base Packaging Manager Requirements

Our web-base features a built-in packaging manager that streamlines the process of extracting and publishing your modules to our registry. To ensure a seamless experience, it's essential to follow a specific folder structure in your project.

### Why a Standardized Folder Structure Matters

By adhering to our recommended folder structure, you'll enable the packaging manager to:

- Easily identify and extract the necessary files for packaging
- Publish your modules to our registry without errors or complications

### Example

To take advantage of the web-base packaging manager's features, please organize your project according to our guidelines. This will save you time and effort in the long run, and guarantee a hassle-free packaging experience.

As our web-base template relies on folder based, We **require** these files to be group them by project as well as the name of the module. e.g. if this module is a chat module for Project foo,
An example of the structure would be

```
    ...
    src
    ├── lib*
    │     └── [foo]
    │     │     └──[chat]
    │     │     │     └── ..... whatever files you put under here is up to you
    ...
    └── routes*
    │       └── [foo]
    │       │     └── [chat]
    │       │     │     ├── (private)
    │       │     │     │       └── ..... whatever files you put under here is up to you
    │       │     │     └── (public)
    │       │     │     │       └── ..... whatever files you put under here is up to you
    package.json
    ...
```

In this example, foo is the project name, and chat is the module name.

The contents of these three folders are entirely up to you. You have the flexibility to structure and implement your components, modules, and routes as you see fit, so long as you ensure this structure at the upper echelon of this folder hierachy.
