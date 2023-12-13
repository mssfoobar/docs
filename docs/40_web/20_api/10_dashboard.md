---
sidebar_position: 1
---

# Dashboarding

AGIL Ops Hub deals with dashboarding with a custom widget system using [GridStack.js](https://gridstackjs.com/). Widgets
can be moved, resized, added, and removed in a dynamic grid.

## Extending your components to work with the widget system

To enable your component to be registered to the widget system, go to the add a folder called `WidgetConfig` and create an
`index.svelte` file in it.

This will make your component appear on the `widget-view` route, where it can be added or removed from the widget
dashboard.

Your `WidgetConfig` component is meant to provide configuration controls for your new 'widgetized' component, here is
an example configuration widget that just accepts a text input. The text input's value is then bound to the desired
config property (in this case `threshold`), and that value gets passed to your widget in the `widget-view`.

You _must_ declare the 'config' prop and use it to pass values to your main widget.

```tsx title=MyFavouriteComponent/WidgetConfig/index.svelte
<script lang="ts">
  export let config = { color: "red" }; //default
</script>

<div>Config: </div>
<input bind:value={ config.color } />

```

Inside your main component, to read the config data, you export the same 'config' prop - then read that prop and use
the values you want accordingly. When your components are rendered dynamically, the 'config' prop is passed from the
configuration component to the main component.

This config can then be persisted (in a database or whatever... in our case, we are storing it in the database) and then
read to load widget-specific configuration.

```tsx title=MyFavouriteComponent/index.svelte
<script>
  export let config = { color: "red" }; // 2-way bound default
</script>

<div style="border: 1px solid; padding: 1rem; ;{ config ? `color: ${config.color}` : ''}">
  Foo Bar
</div>

```

:::note

If you want to know more, you can view this simple example on StackBlitz to understand how the components are
dynamically rendered and the config prop is passed in: https://stackblitz.com/edit/dynamic-rendering-with-config

The StackBlitz example is a heavily simplified version without GridStack and saving incorporated.
:::

## Providing a default widget size, title, and icon

Upon adding your widget to the widget view, it will get initialized with a default size - to ensure your widget looks
nice, you should specify what that size should be, you do this by exporting some constants that will be bound to your
widget when it's initialized in the grid.

You will also need to export a title, and Font Awesome icon that will be used to represent your widget for during
selection.

```tsx title=MyFavouriteComponent/index.svelte {5-8}
<script lang="ts">
  import { faToilet } from '@fortawesome/pro-duotone-svg-icons';

  export let config = { color: "red" }; // 2-way bound default
  export const widgetTitle = 'My Favourite Widget';
  export const widgetIcon = faToilet;
  export const widgetWidth = 3;
  export const widgetHeight = 4;
</script>

<div style="border: 1px solid; padding: 1rem; ;{ config ? `color: ${config.color}` : ''}">
  Foo Bar
</div>

```
