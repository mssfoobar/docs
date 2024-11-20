---
sidebar_position: 2
---

# Theming System

Go straight to the [implementation](#understanding-the-implementation) section if you want to know the details on how we handle our theming.

## Switching themes

To switch themes programmatically, import 'theme' from the `Theme.ts` store in `src/lib/stores/Themes.ts`, and change
it to whatever theme you want:

```jsx
import { theme, THEMES } from "$lib/stores/Theme";

$theme = THEMES.OPSHUB;
```

This triggers a different `.css` file to be loaded, resulting in the theme change.

## Creating a new theme

To create a new theme, add a new `.css` file under `/static/themes/{new-theme-name}.css`.

```css title="/static/themes/{new-theme-name}.css"
.theme {
    /*Primary*/
    --primary: 250 83 5;
    --primary-dark: 250 83 5;

    --on-primary: 255 255 255;
    --on-primary-dark: 255 255 255;

    --primary-container: 33 33 33;
    --primary-container-dark: 33 33 33;

    /** ... and much more **/
}
```

This results in you overriding the `.theme` class with different values for the css variables. The values are in RGB,
without commas - this gets read by a function by Tailwind - which allows us to add opacity values; this is so you get
the ability to append a slash and a number when using these Tailwind classes to get opacity.

The following example results in using the `on-primary` color, with 60% opacity, applied to texts (font color - basically
CSS's `color` property).

```jsx
<div class="text-on-primary/60">Hello World!</div>
```

For your new theme to be coherent, you must thoughtfully choose all the colors for every CSS variable. You can find the
complete list of CSS variables you need to define in the existing examples in the `/static/themes` folder, or in the
`tailwind.config.cjs` file, at the `theme.extend.colors` setting.

You must also extend the theme list in the `Theme.ts` store:

```jsx title="/src/lib/stores/Themes.ts"
{new-theme-name}
```

## Extending themes

To extend the theme with more colours to choose from (we use Material UI's specification as a baseline), you may go to
the `tailwind.config.cjs` file and add more properties to the `theme.extend.colors` setting. Each property there
corresponds to a color in Tailwind and these colors are mapped to your theme colours in the `.css` file you define
through CSS variables.

For example, if you need a new type of themeable colour called `attention`, you can add it like so:

```jsx title="tailwind.config.cjs"
module.exports = {
    ...,
    theme: {
        ...,
        extend: {
            ...,
            colors: {
                ...,
                'attention': withOpacityValue('--attention')
            }
        },
    }
}
```

The function `withOpacityValue` is defined at the top of the file - it is used by Tailwind to handle alpha in colors.

## Understanding the implementation

At the root layout in our Svelte Kit app, the theme store changes a reactive variable that decides which `.css` file
gets loaded in our `<head>` element.

```jsx title="src/routes/+layout.svelte"
<script lang="ts">

...

    onMount(() => {
        // Modify themeTouse when theme store changes
        theme.subscribe(changedTheme => {
            if (window) {
                let storedTheme = window.localStorage.getItem('theme') as THEMES;

                // Give priority to stored theme
                if (storedTheme) {
                    themeToUse = storedTheme;
                } else {
                    themeToUse = changedTheme;
                }
            }
        });
    });

...

<script>

...

<svelte:head>
    <title>{$title}</title>
    <!-- Load css based on theme name -->
    <link rel="stylesheet" href={'/themes/' + themeToUse + '.css'} />
</svelte:head>

...
```

The alternative is to change the CSS appended to the root element ( `<html>` ) based on the theme.

Both approaches requires javascript to load preferences in the user's localStorage before updating to
the final theme. With our approach we only get the flash of the different theme on the initial server-rendered page.
We want to maintain fast rendering instead of hiding/pausing visible elements and only showing them the pageafter the
final theme is chosen.

The flash can be solved by the server also rendering the correct preference - either via storing preferences in the
database or using cookies. The plan is to use a cookie-based solution for this.

We also add support for the user to change themes by storing their preference on the device (localStorage API). You
should allow the user to set or clear this local storage if you wish to allow them to change themes on-the-fly, on a
per-device basis. If no stored theme is used, the app will default to whatever gets loaded in the latest layout. This
way, you can switch between themes depending on the layout or page by setting the `theme` store.
