# AGIL Ops Hub - Documentation

This repo uses [Docusaurus 2](https://docusaurus.io/), a modern static website generator, to generate a our
documentation site from markdown files.

Read the docusaurus docs to learn more.

The site is currently deployed to GitHub Pages via the `gh-pages` branch.

[Documentation Site](https://mssfoobar.github.io/aoh-docs/)

# Commands

## Clean Open API Files

```bash
npx docusaurus clean-api-docs incidentMgmtSys && \
npx docusaurus clean-api-docs recordReplay && \
npx docusaurus clean-api-docs workflow && \
npx docusaurus clean-api-docs ucs && npx docusaurus clean-api-docs:version ucs:all
```

## Generate Open API Files

```bash
npx docusaurus gen-api-docs incidentMgmtSys && \
npx docusaurus gen-api-docs recordReplay && \
npx docusaurus gen-api-docs workflow && \
npx docusaurus gen-api-docs ucs && npx docusaurus gen-api-docs:version ucs:all
```
