---
sidebar_position: 4
---

# User Interface State

Automatically saving what the user was last doing can provide a seamless way for users to work across multiple devices.
It can also allow them to resume their work without having to explicitly click `save` every time.

A `uiState` store is provided in the core library (`src/lib/core/core.ts`) for this purpose.

To use the store, simply import it and add whatever UI state you need to store under the appropriate namespace when
saving, and read on initialization to restore the state.

The following example shows how you might store user input that has not been submitted.

```jsx
<script lang="ts" context="module">
    import { uiState } from '$lib/core/core';
    import { onMount } from 'svelte'

    const UI_STATE_EXAMPLE = "example_state_key"
</script>

<script lang="ts">

    let inputValue = "";

    onMount(()=> {
        // Restore last saved input
        inputValue = $uiState.other[UI_STATE_EXAMPLE]
    });
</script>

<input bind:value={inputValue} on:input={()=>{
    // Save input every time it is changed
    $uiState.other[UI_STATE_EXAMPLE] = inputValue;
}} />
```

You can update the `uiState` store as frequently as you want (within reason), as calls to the API are automatically
handled by the framework and debounced at a reasonable threshold.

# Limitations

As of the current implementation, there are some considerations to note:

-   It might not be wise to store sensitive information in this state variable as it will be stored in the database
-   The UI state variable can grow very large if used loose-handedly or is not checked (e.g. storing unbounded user
    inputs)
-   Adding additional namespaces requires core change
