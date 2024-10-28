---
sidebar_position: 2
---

# WFM API Guide

## Start Workflow Execution

To start a new workflow execution call [Start Workflow API](../Workflow%20API/start-workflow.api.mdx) with workflow template id in request body.

<table>
<thead><tr><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>

```
curl -L '{{wfm_endpoint}}/v1/workflow' \
--header 'Content-Type: application/json' \
--header 'Authorization: {{bearer_token}}' \
--data '{
    "template_id": "dbf5d6fe-a7ac-4352-8ced-e3653592a3a7"
}'
```

</td><td>

```json
{
    "data": {
        "workflow_id": "f446054c-98a5-4df9-aeea-f687e66951e0",
        "workflow_run_id": "f446054c-98a5-4df9-aeea-f687e66951e0_1"
    },
    "sent_at": "2024-10-08T06:41:21Z"
}
```

</td></tr>
</tbody></table>

API will return `workflow_id` and `workflow_run_id`. It is recommended to persist the id of the execution in your database to make it easier to query.

## Get Workflow Execution States

To get the workflow execution states call Get Workflow History API, which will list down all the execution states of the workflow in chronological orders.

<table>
<thead><tr><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>

```
curl -L '{{wfm_endpoint}}/v1/workflow/f99dadba-4642-437c-a8f2-b5e72a09d8d6' \
--header 'Authorization: {{bearer_token}}'
```

</td><td>

```json
{
    "data": [
    ],
    "sent_at": "2024-10-08T06:41:21Z"
}
```

</td></tr>
</tbody></table>

You can consume the workflow execution state data to build your own monitoring dashboard.

## List Running Workflows

Calling Workflow Execution List API will return all the running workflows in its started time descending order by default.

<table>
<thead><tr><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>

```
curl --location --globoff '{{wfm_endpoint}}/v1/workflow/f99dadba-4642-437c-a8f2-b5e72a09d8d6' \
--header 'Authorization: {{bearer_token}}'
```

</td><td>

```json
{
    "data": [
    ],
    "sent_at": "2024-10-08T06:41:21Z"
}
```

</td></tr>
</tbody></table>

## Signal Workflow

Signaling in workflow is sending the data to the workflow execution state listener.
Workflow execution will create listener when its expect user input to proceed workflow execution.
Below are events when workflow execution state will creat a listener.
- FormTaskStarted
- RecoverTaskStarted

To input data into the workflow execution state, call Signal Workflow API. 

<table>
<thead><tr><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>

```
curl --location --globoff '{{wfm_endpoint}}/v1/workflow/f99dadba-4642-437c-a8f2-b5e72a09d8d6' \
--header 'Authorization: {{bearer_token}}'
```

</td><td>

```json
{
    "data": [
    ],
    "sent_at": "2024-10-08T06:41:21Z"
}
```

</td></tr>
</tbody></table>

## Terminate Workflow