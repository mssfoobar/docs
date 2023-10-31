---
sidebar_position: 1
---

# 🆕 Introduction

AGIL Ops Hub or `AOH` is a package of Svelte components that can be re-used for AR2 projects.

The repository itself (https://github.com/mssfoobar/aoh-web) is a good starting point for a fully pre-configured
`Svelte` & `Svelte-Kit` project containing Tailwind CSS, Playwright, Font Awesome, and many other
dependencies.

The chosen technologies and libraries have a heavy focus on developer experience in mind, with ease-of-learning and
maintainability as key considerations.

As the web is the front of the entire system, it essentially depends on all other services to function properly. Setting
up the other services is beyond the scope of this document; you should refer to their approriate documentation on how
to set them up there, but we will point out whenever you need a specific service to run a specific feature.

### Additional Comments

-   To standardize formatting, we are using `prettier-plugin-tailwindcss`, which also handles Svelte code.
-   We plan to have `eslint` strictly lint the project (configuration requires review).

Visit the [technologies section](/docs/overview/technologies/svelte_sveltekit) for more information.

## Testing

## [Playwright](https://playwright.dev/)

We are using Playwright to handle testing - Playwright simulates a browser environment and allows us to navigate around
a virtual browser environment to run our tests. It can be used with other test runners, but also includes it's own,
which is what we are using.

To configure Playwright, look at `playwright.config.ts` - there you can decide what virtual browsers Playwright should
use to test your code on.

To write test fixtures, add your tests into the "aoh-web/tests" folder.

https://playwright.dev/docs/api/class-fixtures

There is currently (as of 19th April 2022) no idiomatic/recommended way to test individual Svelte components
(.svelte files). The current workaround I have for this is to use a dedicated test page for individual components.
`@testing-library/svelte` works well with Jest but still has its limitations (e.g. testing slots must be done by
using props + dynamic components). Our testing method will be updated when we have a clean, Playwright Test way of
running Svelte Component tests.

## Font Awesomes Caching Recommendations for CI

Font Awesome has some recommendations regarding caching

-   [https://fontawesome.com/v6/docs/web/dig-deeper/continuous-integration](https://fontawesome.com/v6/docs/web/dig-deeper/continuous-integration)

```
TODO:

-   Incorporate Typescript checks // Playwright tests before or as part of CI/CD
![status](https://github.com/mssfoobar/aoh-web/actions/workflows/web.yml/badge.svg)

```
