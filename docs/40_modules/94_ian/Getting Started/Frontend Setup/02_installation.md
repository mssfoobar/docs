# Installation Guide
This section assumes that you will be using our SSE Client to handle real-time updates with the IAN components, and have successfuly went through the [prerequisites](./01_prerequisites.md) section. It also assumes that you are using web base.

## 1. Installing the SSE Client
There are 2 ways of installing the SSE Client: via the CLI (command line interface) or via package.json.

### Install via command line
```
npm install @mssfoobar/sse-client
```

### Install via package.json
Add the dependency below into the `dependencies` object in your `package.json`, and save the file. Afterwards, run `npm i` or `npm install` to install the sse-client.
```npm title="package.json"
"@mssfoobar/sse-client":"*",
```

## 2. Installing IAN package
The `internal CLI tool` built by AOH will be used to install the ian package. If you are using one of the latest versions of the Web base, the CLI tool is already part of the web base, and you can verify by checking if your package.json has the following:
```package.json
"@mssfoobar/cli": "^1.0.3"
```

:::note
Do note that your CLI version may differ with the one above, as the one above is the latest version **as of** the time of writing this documentation.
:::

:::warning
The CLI tool only works if you did not remove the aoh folder within the src/lib folder in the original web base. This is because it will install the ian package and duplicate them into the src/lib/aoh folder.
:::
Run the following CLI command in the terminal inside your web directory.
```
npx cli install @mssfoobar/ian
```
You will be prompted to enter the path to your root folder, although the tool will attempt to auto-generate that path for you. Do check if it is accurate. If not, please enter the correct path to your root folder.

Afterwards, simply click enter, and the tool will start to install the ian package.

Once completed, you should see new files being generated in the `src/lib/aoh/ian` folder, as well as the `routes/(private)/aoh/ian` folder.

```
├── src
│    └── lib
│    │     └── aoh
│    │          ├── core
│    │ ...      └── ian
│    │               ├── api
│    │               ├── assets
│    │               ├── components
│    │               ├── stores
│    │               ├── types
│    │               └── utils
│    │
│
└── routes
    ├── (private)
    │    ├── example
    │    │
    │    │── aoh
    │    │    └── ian
    │    │         └── api
    │    │              └── messages
             ...
```

## 3. Install svelte-sonner
Svelte-sonner is one of the dependencies of the shadcn-svelte sonner (toast) component.
### Install via package.json
Add the dependency below into the `dependencies` object in your `package.json`, and save the file. Afterwards, run `npm i` or `npm install` to install svelte-sonner.
```npm
"svelte-sonner": "^0.3.28",
```


