---
sidebar_position: 1
sidebar_label: Web
---

# Web Technologies

This stack may not apply to you if you're only using the backend containers for modules.

## Technology List

The following is a _non-exhaustive_ list of the **key** technologies used in our web development stack.

-   [Svelte](#svelte) : Web component framework.
-   [SvelteKit](#sveltekit) : Progressively-enhanced single-page application framework for Svelte.
-   [Tailwind CSS](#tailwind-css) : Utility-class CSS framework.
-   [Shadcn-Svelte](#shadcn-svelte) : Components for Svelte utilizing Tailwind CSS and Shadcn design system.
-   [Iconify](#iconify) : Iconography library and framework.
-   [Docusaurus](#docusaurus) : Static site generator for Markdown-based documentation.

#### Other Notable Libraries

-   [JointJS](https://www.jointjs.com/) : JavaScript diagramming library.
-   [Apache ECharts](https://echarts.apache.org/) : Open-source charting library.
-   [CesiumJS](https://cesium.com/platform/cesiumjs/) : Open-source JavaScript library used for creating 3D globes and
    maps in web browsers.
-   [urql](https://commerce.nearform.com/open-source/urql/docs/) : Extensible GraphQL client with support for caching,
    retries, deduplication, subscriptions and more.
-   [Vitest](https://vitest.dev/) : Vite-native testing framework with Jest compatible API, and out-of-the-box
    TypeScript support
-   [Playwright](https://playwright.dev/) : End-to-end web testing and automation framework.

---

## TypeScript

`TypeScript` is `JavaScript` with tooling that adds static type-checking support. Though it adds a lot build complexity and
tools on top of vanilla `JavaScript`, it massively helps with the issue of scaling `JavaScript` code bases, and is an
absolute must for code to be maintainable in large organisations.

### Why we've chosen TypeScript

With `TypeScript`, code can be validated better with developer tools. Developers' intentions can be stated clearly with
types, and stronger tooling allows for large code bases to be easier to understand and easier to validate.

### Links

-   [Official Keycloak Website](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

---

## Svelte

`Svelte` is a component-based JavaScript framework for building user interfaces. It is much like the ever-popular
`React`, however, unlike `React`, it does not create a virtual DOM and diff changes against it. `Svelte` shifts that
work into the _compile_ step instead.

### Why we've chosen Svelte

The knee-jerk reaction you might have is why use `Svelte` when we already have `React`, a mature, popular framework
with the backing of Facebook/Meta.

`Svelte` is **easier** to pick up than `React` and is simply easy to learn in absolute terms. It's also feature-rich and
highly **performant** - because it does not use a virtual DOM, `Svelte` is _fast_.

Our choice to go with `Svelte` is also to get ahead of the curve. Trends are showing that `Svelte` is well-loved by
the developer community and is constantly growing in popularity. `Svelte` was voted the
[most loved web framework](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)
in the Stack Overflows' 2021 survey won the [highest satisfaction ratings](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/)
in State of JS's 2020 survey.

With **Rich Harris'** induction into **Vercel** at the end of 2021, `Svelte` also now has the backing of a strong
web-oriented tech-company and we believe it is a safe and forward-looking choice to use as our predominant framework.

## SvelteKit

`SvelteKit` is a web application server framework for building extremely high-performance progressively enhanced
single-page applications using `Svelte`.

Building an app with all the modern best practices is complicated. Those practices include build
optimizations, so that you load only the minimal required code... offline support... prefetching pages before the user
initiates navigation... and configurable rendering that allows you to generate HTML on the server or in the browser at
runtime or at build-time. `SvelteKit` does all that for us.

It uses `Vite` with a `Svelte` plugin to provide a lightning-fast and feature-rich development experience with
Hot Module Replacement (HMR), where changes to your code are reflected in the browser instantly.

### Why we've chosen SvelteKit

`SvelteKit` is the easiest way to get started with `Svelte`. It's the official web application framework for `Svelte`
and is being developed closely in tandem with `Svelte`. Apart from that, it also has many best practices and
optimizations built-in whilst providing a great developer experience with `Vite's` speedy _Hot Module Replacement_.

### Links

-   [Official Svelte Website](https://svelte.dev/)
-   [Official SvelteKit Website](https://kit.svelte.dev/)
-   [Official Vite Website](https://vitejs.dev/)

---

## Tailwind CSS

`Tailwind` is a utility CSS Framework with flexibility, optimization and heavy DX focus. It is a highly customizable,
low-level CSS framework that gives you all the building blocks you need to build bespoke designs without opinionated
styles you have to fight to override.

### Why we've chosen Tailwind CSS

When thinking about utility-class CSS Frameworks, two frameworks come to mind: `Tailwind CSS` and `Bootstrap`.

While `Bootstrap` comes with a set of pre-styled responsive, components that make up a UI kit, `Tailwind CSS` offers a
responsive design system that is more flexible and customizable. It also adds its powerful
[state variants](https://tailwindcss.com/docs/hover-focus-and-other-states) system.

#### Using Tailwind CSS

Simply add the Tailwind CSS classes to your HTML elements to get going!

```html
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

You can also use [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values), which
basically works just like inline-styles. It is not recommended to break out of the constraints, but you may do so if
it is really necessary (you should consider if you really have to whenever you decide to do this).

```html
<div class="top-[117px]">Hello world!</div>
```

Another powerful Tailwind feature to take note of is the ability to
[conditionally apply classes based on states](https://tailwindcss.com/docs/hover-focus-and-other-states).

In this example, hovering over the `<div>` will apply the `bg-gray-300` class.

```html
<div class="bg-gray-200 hover:bg-gray-300">Hello world!</div>
```

This feature even works with styling
[based on other related elements' state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state).

Tailwind is highly extensible and has many more useful features. Read their official documentation for more info.

### Links

-   [Official Tailwind CSS Website](https://tailwindcss.com/)
-   [Install Tailwind CSS with SvelteKit](https://tailwindcss.com/docs/guides/sveltekit)
-   [Tailwind Core Concepts](https://tailwindcss.com/docs/utility-first)

---

## Shadcn-Svelte

`Shadcn-Svelte` works as a 'base' design system, i.e. a design system that has been designed to be extended upon.
Critically, it uses with the other technologies and shares many of its philosophies (`Svelte` and `Tailwind CSS`).

Note that `Shadcn-Svelte` is based on the `Shadcn` design system. It is the `Svelte` implementation of the project.

### Why we've chosen `Shadcn-Svelte`

Apart from very high-quality components that address many issues such as themeing, accessibility, and validation,
`Shadcn-Svelte` uses a distribution pattern that fits perfectly with how we want to release our modules. Since projects
often need the option to extend or even completely change their web components, `Shadcn-Svelte`'s method of distributing
the source code directly allows users to change anything they want. It provides a CLI tool to help with quick
installation of the components users need.

### Links

-   [Official Shadcn-Svelte Website](https://next.shadcn-svelte.com/)
-   [Official Shadcn Design System Figma](https://www.figma.com/community/file/1203061493325953101)

---

## Iconify

Iconify is a massive library of icons - the aggregation of all the free and open-source icons available on the web. It
also provides a strong pattern of accessing and rendering these icons.

### Why we've chosen Iconify

Apart from the large number of icons available, the three main reasons for using iconify are:

1. You can extend it by adding your own custom icons
2. You can serve icons dynamically by loading icons from a server, which you can also self-host
3. It's open-source, free, and easy to use

### Links

-   [Official Iconify Website](https://iconify.design/)

---

## Docusaurus

Docusaurus is an open-source static site generator that creates documentation-focused websites based on Markdown files.
It is based on React.

### Why we've chosen Docusaurus

It's easy to use and is very widely adopted in the industry as a documentation framework with a highly reputable
company (Meta) backing its development and maintenance.

### Links

-   [Official Docusaurus Website](https://docusaurus.io/)
