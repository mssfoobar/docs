---
sidebar_position: 10
description: A useful list of commands to to
---

# Runbook

## Regenerate all Open API docs

We have a script ready that reads the `docusaurus.config.js` to clear and regenerate all Open API docs.

```bash
npm run openapi-gen
```

## Clear or generate specific Open API doc

If you want to clear a specific Open API doc, run:

```bash
npx docusaurus clean-api-docs <module_name>
```

If you want to generate a specific Open API doc, run:

```bash
npx docusaurus gen-api-docs <module_name>
```

If your Open API has versions, additionally run the command appending `:version` and `:all`:

```bash
npx docusaurus clean-api-docs:version <module_name>:all
```

```bash
npx docusaurus gen-api-docs:version <module_name>:all
```
