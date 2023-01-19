---
sidebar_position: 1
---

# Web Introduction ✨

AgilRAD 2.0 Web or `AR2 Web` is a package of Svelte components that can be re-used for AR2 projects.

The repository itself (https://github.com/mssfoobar/ar2-web) is a good starting point for a fully pre-configured
`Svelte` & `Svelte-Kit` project containing Tailwind CSS, Playwright, Font Awesome, Docusaurus, and many other
dependencies.

The chosen technologies and libraries have a heavy focus on developer experience in mind, with ease-of-learning and
maintainability as key considerations.

Out of the box, AR2 Web aims to support many different use-cases but mainly with C2 (Command & Control) systems in-mind.

Supported Features **(Planned)**:

- Real-time Mapping [✔️]
- Charting [✔️]
- Configurable dashboards [✔️]
- Text, Audio, and Video chat [✔️]
- Recording & Playback
- Incident Management
- Complex Event Processing
- Simulation

As the web is the front of the entire system, it essentially depends on all other services to function properly. Setting
up the other services is beyond the scope of this document; you should refer to their approriate documentation on how
to set them up there, but we will point out whenever you need a specific service to run a specific feature.

### Additional Comments

- To standardize formatting, we are using `prettier-plugin-tailwindcss`, which also handles Svelte code.
- We plan to have `eslint` strictly lint the project (configuration requires review).

Visit the [technologies section](./technologies/1.svelte_sveltekit.md) for more information.

<!--



## Testing

## [Playwright](https://playwright.dev/)

We are using Playwright to handle testing - Playwright simulates a browser environment and allows us to navigate around
a virtual browser environment to run our tests. It can be used with other test runners, but also includes it's own,
which is what we are using.

To configure Playwright, look at `playwright.config.ts` - there you can decide what virtual browsers Playwright should
use to test your code on.

To write test fixtures, add your tests into the "ar2-web/tests" folder.

https://playwright.dev/docs/api/class-fixtures

There is currently (as of 19th April 2022) no idiomatic/recommended way to test individual Svelte components
(.svelte files). The current workaround I have for this is to use a dedicated test page for individual components.
`@testing-library/svelte` works well with Jest but still has its limitations (e.g. testing slots must be done by
using props + dynamic components). Our testing method will be updated when we have a clean, Playwright Test way of
running Svelte Component tests.

## Font Awesomes Caching Recommendations for CI

Font Awesome has some recommendations regarding caching

-   [https://fontawesome.com/v6/docs/web/dig-deeper/continuous-integration](https://fontawesome.com/v6/docs/web/dig-deeper/continuous-integration)

## Known warning when building:

```
Missing svelte.config.js — skipping
```

This occurs due to `npm prepare` being automatically run on `npm ci` - the `prepare` script runs `svelte-kit sync`, which is meant to prepare files for development. This warning can be safely ignored

Reference issues associated with this warning:

-   [https://github.com/sveltejs/kit/issues/4165](https://github.com/sveltejs/kit/issues/4165)
-   [https://github.com/sveltejs/kit/issues/4366](https://github.com/sveltejs/kit/issues/4366)

# Notable Information, Issues, and Workarounds

## SvelteKit

SvelteKit is currently still in beta, issues will continue to be fixed as the SvelteKit project stabilizes.

> 'document' or 'window' is not defined

SvelteKit has a hybrid server-side-rendering and client-side-rendering model - the initial page is rendered on the
server, then subsequent execution of .svelte components is done on the client-side. This method provides a great
experience for site visitors but introduces some additional complexity. One important thing to note is that certain
libraries depend on the DOM to load (e.g. gridstack.js), loading on the server intially results in errors due to
`window` or `document` not existing on the server (nodejs). To circumvent this, we need to use dynamic imports.

Note:

We are using the SVG+JS for extra features. combining this with SVG Sprites can allow us to save a lot of space. However,
for maintainbility reasons, we are currently using the full set of icons (15MB).

https://fontawesome.com/v6/docs/apis/javascript/tree-shaking

Using tree-shaking, we can get rid of all the unused icons - this configuration will be handled in the future.

https://fontawesome.com/docs/web/dig-deeper/webfont-vs-svg#side-by-side-comparison

If many instances of the same icon is needed - use SVG Sprites for better performance.
If many different icons are needed - load everything and use the Web Fonts + CSS method.

The SVG + JS method of using Font Awesome is all contained in a js file (all.js). This can be massively optimized by
choosing only the styles that you need. [FontAwesome SVG+JS](https://fontawesome.com/docs/web/setup/host-yourself/svg-js)

### Todo:

-   Incorporate Typescript checks // Playwright tests before or as part of CI/CD

![status](https://github.com/mssfoobar/ar2-web/actions/workflows/web.yml/badge.svg) -->
