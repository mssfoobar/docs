---
sidebar_position: 1
---

# TDD Testing

Test-Driven Development (TDD) is a software development approach that emphasizes writing tests before writing the actual code.

## Introduction

We use [Vitest](https://vitest.dev/) for unit testing and [Playwright](https://playwright.dev/) for end-to-end tests.

We use `Vitest` becacuse it is Vite-native (this project is using `Svelte Kit` which uses `Vite`) and Jest compatible
(Jest is currently one of the most popular JavaScript unit testing frameworks). We use Playwright because it is both the
recommended end-to-end testing framework for Svelte Kit, and it is also very feature rich, performant, well maintained,
and quickly growing in [popularity](https://openbase.com/js/playwright/insights).

:::info

Learn some of Playwright's important features: https://www.youtube.com/watch?v=PXTspGn1im0

:::

## Running the tests

1. Ensure you install the browsers that Playwright uses:

```bash
npx playwright install
```

2. Execute the tests

```bash
npm run test
```

Tests are actually broken up into 3 parts, and running `npm run test` runs them all - unit tests, component tests, and
end-to-end tests. We've broken things up in this way as we've found the best way to run tests on our individual
Svelte components is to have them rendered out (instead of using something like jsdom to emulate the browser) - so we
use `Playwright` to run unit tests on our components, and `Vitest` to run unit tests on scripts.

If you wish to only run unit tests, run:

```bash
npm run test:unit
```

If you wish to only run component tests, run:

```bash
npm run test:comp
```

If you wish to only run integration tests, run:

```bash
npm run test:e2e
```

## Code Coverage

`Vitest` has native code coverage via [c8](https://github.com/bcoe/c8), run the script with:

```bash
npm run coverage
```

This coverage is only for unit tests via `Vitest`.

## Developing the tests

### Unit Tests

Unit tests are `Vitest` tests (see the [Vitest Docs](https://vitest.dev/api/)) for more info.

They are placed side-by-side in the directory of the file they are testing and have the same name as the file, with
either `.spec` added to the name. For example, tests for the `./src/lib/utils.ts` file should be
`./src/lib/utils.spec.ts`.

### Component Tests (unit tests for components)

The best way to test our components is by running the full end-to-end tests, which requires `Playwright`
(see the [Playwright Docs](https://playwright.dev/docs/intro)) for more info.

The component tests are meant be both an example of how to use the component, and the page that the tests run against.

These tests comprise of 2 parts, the `test.svelte` file that instantiates and renders the component, and the
`comp.test.ts` file is run by `Playwright` to visit the `test.svelte` page and perform actions to test the component.

Every `test.svelte` file should have a corresponding `comp.test.ts` file and a route that can be accessed by
by `Playwright` - our folders are structured such that the `src/routes/tests` folder follows the folder structure of the
components to be tested, so the routes are intuitive and can be navigated to programmartically.

### End-to-end or Integration Tests

End-to-end tests are `Playwright` tests (see the [Playwright Docs](https://playwright.dev/docs/intro)) for more info.

They are placed in the `./tests-e2e` directory. There is a default `example.test.ts` file that you can use to get started.

## Continuous Integration

This project has CI configured via GitHub Actions, refer to the `.github/workflows` yaml files to find out more.

## Allure Reporting Tool

Third party reporting tool for playwright test framework

### Installation

Run the following command to install dependancies

    npm install allure-playwright

### View Report

Run the following command to view report

    npm run view:report

## Usage of test ids for component identification

Every component to be tested must include an additional attribute called `data-testid`.
Please follow this naming convention so that the naming is unique:

```
data-testid="<component-name/page-name>-<component-functionality-name>-<ui/control-type>"
```

Example

-   Login button on a log in page

```HTML
<button data-testid="login-login-bttn" />
```

-   For long componentFunctionalityName like passwordError follow

```HTML
<h1 data-testid="login-password-error-lbl"></h1>
```

-   For login button inside a modal it can be like this

```HTML
<button data-testid="login-modal-login-bttn" />
```
