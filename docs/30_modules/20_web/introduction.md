---
sidebar_position: 5
---

# Web Application

The web application of AGIL Ops Hub ties all the different modules together. As such, it can be thought of as the
biggest service in the system. Each module in the system may have zero or more back-end services supporting it. As the
web is the front of the entire system, it essentially depends on all other services to function properly. Setting
up the other services is beyond the scope of this document; you should refer to their approriate documentation on how
to set them up there, but we will point out whenever you need a specific service to run a specific feature.

Visit the [technologies section](/docs/docs/overview/technologies/svelte_sveltekit) for more information.

```
TODO:

-   Incorporate Typescript checks // Playwright tests before or as part of CI/CD
![status](https://github.com/mssfoobar/aoh-web/actions/workflows/web.yml/badge.svg)

-   To standardize formatting, we are using `prettier-plugin-tailwindcss`, which also handles Svelte code.
-   We plan to have `eslint` strictly lint the project (configuration requires review).

```
