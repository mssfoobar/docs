---
sidebar_position: 6
---
# Form Activity

When workflow executes form activities, it generates form events in the workflow history
- FormTaskScheduled
- FormTaskStarted
- FormTaskCompleted

### FormTaskScheduled

ForTaskScheduled input value in attributes field is the [form-js](https://github.com/bpmn-io/form-js) schema object to 
be rendered in client browser.

```json
{
    "event_type": "FormTaskScheduled",
    "task_name": "example",
    "task_type": "Form",
    "attributes": {
        "input": [
            {
                "name": "example",
                "formSchema": {
                    "id": "Form_1gi96ut",
                    "type": "default",
                    "exporter": {
                        "name": "form-js (https://demo.bpmn.io)",
                        "version": "1.7.0"
                    }
                },
                "formInput": {}
            }
        ]
    }
}
```

- `formSchema` - JSON schema of the form in [form-js](https://github.com/bpmn-io/form-js) format
- `formInput` - Initial values of the form input fields (such as text, number, date, etc.)

To render form in client browser, use `formSchema` and `formInput` in `importSchema` method.

```javascript
import { Form } from '@bpmn-io/form-js';

const form = new Form({
    container: document.querySelector('#form'),
});

await form.importSchema(formSchema, formInput);

form.on('submit', (event) => {
    console.log(event.data, event.errors);
});
```

### FormTaskStarted

ForTaskStarted will create a new child workflow which will wait for form submission. Its child `workflow_id` and 
`run_id` can be found inside the `attributes` field.

```json
{
    "event_type": "FormTaskStarted",
    "task_name": "example",
    "task_type": "Form",
    "attributes": {
        "workflow_id": "0ee7f976-d85d-4856-8e5c-b5b635baca7a_29",
        "workflow_run_id": "f6704d77-ad60-47ee-a328-48f7748d41c7"
    }
}
```

:::caution
Do not confuse `workflow_id` created by form activity with `workflow_id` from
[Start Workflow API](../../Workflow%20API/8-start-workflow-execution.api.mdx). Former is the child `workflow_id` and
latter is the parent `workflow_id`. When you interact with form activity, you should use the child `workflow_id`.
:::

To submit the form, call the [Signal Workflow API](../../Workflow%20API/12-signal-workflow-activity.api.mdx) with 
`workflow_id`and `activity_name`.

```javascript
import { Form } from '@bpmn-io/form-js';

const form = new Form({
container: document.querySelector('#form'),
});

await form.importSchema(formSchema, formInput);

form.on('submit', (event) => {
    const axios = require('axios');
    let data = JSON.stringify({
        "data": event.data,
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '{{wfm_base_url}}/v1/signal/workflow/:workflowid/activity_name/:activity_name',
        headers: {
            'Authorization': '{{bearer_token}}',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: data
    };

    axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);

        });
});
```

### FormTaskCompleted

When form is finally submitted, this event will be created with the submitted form data inside the `result` field.
```json
{
    "event_type": "FormTaskStarted",
    "task_name": "example",
    "task_type": "Form",
    "attributes": {
        "result": [
            {
                "exampleKey": "exampleValue"
            }
        ]
    }
}
```