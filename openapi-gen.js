const docConfig = require("./docusaurus.config.js");
const cp = require("child_process");

const pluginConfig = docConfig.plugins
    .filter(
        (p) =>
            Array.isArray(p) &&
            p.length > 0 &&
            p[0] === "docusaurus-plugin-openapi-docs"
    )
    .pop()
    .pop().config;

Object.keys(pluginConfig).forEach((k) => {
    console.log(`Clearing Open API for ${k}`);

    cp.execSync(`npx docusaurus clean-api-docs ${k}`);

    if (pluginConfig[k].versions) {
        cp.execSync(`docusaurus clean-api-docs:version ${k}:all`);
    }
});

Object.keys(pluginConfig).forEach((k) => {
    console.log(`Generating Open API docs for ${k}`);

    cp.execSync(`npx docusaurus gen-api-docs ${k}`);

    if (pluginConfig[k].versions) {
        cp.execSync(`docusaurus gen-api-docs:version ${k}:all`);
    }
});
