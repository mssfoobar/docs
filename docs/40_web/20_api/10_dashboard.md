---
sidebar_position: 1
---

# Dashboarding

AGIL Ops Hub deals with dashboarding with a custom widget system using [GridStack.js](https://gridstackjs.com/). Widgets
can be moved, resized, added, and removed in a dynamic grid.

## Extending your components to work with the widget system

To enable your component to be registered to the widget system, create a new folder in
`/src/lib/core/modules/dashboard/components/widgets`. Give the folder a name to describe your widget; e.g. `Indicator`.
For a `.svelte` file to be regitered into the widget systen, you must create a folder called `WidgetConfig` adjacent to
it, and create an `index.svelte` file in it.

The following 4 highlighted lines are the new files/folders you should have.

```bash {8-11}
src
├── lib
│   ├── core
│   │   ├── modules
│   │   │   ├── dashboard
│   │   │   │   ├── components
│   │   │   │   │   ├── widgets
│   │   │   │   │   │   ├── Indicator
│   │   │   │   │   │   │   ├── index.svelte
│   │   │   │   │   │   │   └── WidgetConfig
│   │   │   │   │   │   │       └── index.svelte
│   │   │   │   │   │   └── ...
│   │   │   │   │   └── ...
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── ...
│   └── ...
└── ...
```

`Indicator/index.svelte` is the actual Svelte component definition of your widget (how it should look and behave), and
`WidgetConfig/index.svelte`is the Svelte component that can be used to configure your widget.

Your component will now appear in the `WidgetList` component, which is instantiated in the `WidgetView` component,
which is in turn instantiated in the `dashboard` page; it can now be added or removed from the widget dashboard.

Your `WidgetConfig` component is meant to provide configuration controls for your new 'widgetized' component, here is
an example configuration widget that just accepts a text input. The text input's value is then bound to the desired
config property (in this case `threshold`), and that value gets passed to your widget in the `dashboard`.

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

This config will then be persisted and read to load the widget-specific configuration.

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

## Providing important widget properties

Upon adding your widget to the widget view, it will get initialized with a default size - to ensure your widget looks
nice, you need to specify what that size should be, you do this by exporting some constants that will be bound to your
widget when it's initialized in the grid.

You will also need to export a title, and Font Awesome icon that will be used to represent your widget for during
selection.

```tsx title=MyFavouriteComponent/index.svelte {5-8}
<script lang="ts">
  import { faToilet } from '@fortawesome/pro-duotone-svg-icons';

  export let config = { color: "red" }; // 2-way bound default
  export const widgetTitle = 'My Favourite Widget';
  export const widgetIcon = faToilet;
  export const widgetWidth = 2;
  export const widgetHeight = 2;
  export const widgetMinWidth = 4;
  export const widgetMinHeight = 4;
  export const widgetMaxWidth = 8;
  export const widgetMaxHeight = 8;
  export const widgetCategory = 'Demo Widgets';
  export const widgetLimit = Number.POSITIVE_INFINITY;
  export const widgetEnabled = true;
</script>

<div style="border: 1px solid; padding: 1rem; ;{ config ? `color: ${config.color}` : ''}">
  Foo Bar
</div>

```

-   `widgetWidth` and `widgetHeight` determine how your widget will be initially rendered before users drag the resize
    handle and change its size.
-   `widgetMinWidth`, `widgetMinHeight`, `widgetMaxWidth`, and `widgetMaxHeight` are used
    to limit how much smaller or larger the widget can be resized in terms of cells. Specifying these values are to
    restrict the bounds of the widget so people won't be able to resize the widget beyond its intended size.
-   `widgetCategory` refers to which accordion category in the widget list that this new widget will appear in; this is
    for filtering and categorization purposes.
-   `widgetLimit` determines how many instances of this same widget is allowed in a single dashboard at any one time.
-   `widgetEnabled` this boolean can be set to false if you do not wish for this widget to be available to add into the
    dashboard - you can use this flag to disable widgets your widgets that are no longer in use without having to delete
    them

A template widget that provides a good springboard for creating new widgets exists in the widget folder, and can be
copied and modified accordingly. It also has an example on how to subscribe to changes in data in your widget, and how
to use configurable data sources; which will be elaborated on in the next section.

## Data Sources

For many widgets in the dashboard, it is desirable for them to track certain values in the system - for example, how
many incidents are currently open. Widgets can have a hard-coded GraphQL subscription to certain data sources... or,
with the power of GraphQL introspection, can have these queries be dynamically configured.

Within the core library (`src/lib/core/core.ts`), a store called `dataSource` is exported. This data source store is
populatd when the app-wide layout is loaded, allowing it to be accessible by all components. This data source is
essentially just a simplified GraphQL introspection query. You can use this to limit (or have no limit)
what data sources a widget an be configured to use; for example, in the template widget, it is limiting selectable
data sources to any aggregate queries with `sum` in it, and whose column/field is named 'number'.

You can see how this is done in the template widget's WidgetConfig below; the schema/introspection query is iterated
through to look for any field that follows the expected format (named `number` and of type `numeric`), and limited to
aggregate sums - limiting the selection this way makes it easier for users to configure their widgets, but allowing
full access to all data sources and providing a universal selector and mapper is also a viable solution (albeit this
might provide a paralyzingly large clutter of options to the user).

```js title=Template/WidgetConfig/index.svelte {4,14}
// Irrelevant code above ...

// Limit to only fields that are named 'number'
export const expectedFormat = [{ name: "number", type: "numeric" }];

// Irrelevant code between ...

// List of data source names (valid GraphQL query roots)
const validQueries: Array<DropdownItem> = [];

// Look for aggregate > sum queries with expected format
// aggregate > sum follows Hasura's aggregate sum schema
$dataSource.__schema?.types?.forEach((query) => {
    let isQueryValid = expectedFormat.every((format) => {
        return query?.fields?.some((field) => {
            if (field?.name !== "aggregate") {
                return false;
            }

            let aggregateFields = field?.type?.fields;

            return aggregateFields.some((aField) => {
                if (aField?.name !== "sum") {
                    return false;
                }

                let sumFields = aField?.type?.fields;

                return sumFields.some(
                    (sField) =>
                        sField?.name === format.name &&
                        sField?.type?.name === format.type
                );
            });
        });
    });

    if (isQueryValid) {
        validQueries.push({ label: query.name, value: query.name });
    }
});

// Irrelevant code below ...
```
