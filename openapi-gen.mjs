import docConfig from "./docusaurus.config.js";
import cp from "child_process";
import util from "util";

const execPromise = util.promisify(cp.exec);

const pluginConfig = docConfig.plugins
    .filter(
        (p) =>
            Array.isArray(p) &&
            p.length > 0 &&
            p[0] === "docusaurus-plugin-openapi-docs"
    )
    .pop()
    .pop().config;

await Promise.all(
    Object.keys(pluginConfig)
        .map((k) => {
            console.log(`Clearing Open API for ${k}`);

            let promises = [];

            promises.push(execPromise(`npx docusaurus clean-api-docs ${k}`));

            if (pluginConfig[k].versions) {
                promises.push(
                    execPromise(`docusaurus clean-api-docs:version ${k}:all`)
                );
            }
        })
        .flat(1)
);

await Promise.all(
    Object.keys(pluginConfig)
        .map((k) => {
            console.log(`Generating Open API docs for ${k}`);

            let promises = [];

            promises.push(execPromise(`npx docusaurus gen-api-docs ${k}`));

            if (pluginConfig[k].versions) {
                promises.push(
                    execPromise(`docusaurus gen-api-docs:version ${k}:all`)
                );
            }
        })
        .flat(1)
);
