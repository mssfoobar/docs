---
sidebar_position: 2
---
# Workflow Execution

Workflow Execution is the actual running workflow instance in the Workflow Engine.

## Start Workflow

To start a new workflow execution, you can use the 
[Start Workflow Execution API](../../Workflow%20API/8-start-workflow-execution.api.mdx) with the following parameters in 
the request body:

- `template_id` - ID of the workflow template.
- `incident_id` - ID of the incident associated to the workflow execution. 

:::tip
`incident_id` is used for passing business logic into the workflow activity. For example, you can have activity that can
utilize the incident_id to query the incident details. You can exclude `incident_id` in the request body if you 
don't need it.
:::

<details>
<summary>Example API call</summary>
<div>
<p><strong>Request Body</strong></p>

```json
{
    "template_id": "ad4cdeaf-585d-41b7-9858-eda092df4478",
    "incident_id": "123e4567-e89b-12d3-a456-426655440000"
}
```

</div><div>
<p><strong>Response Body</strong></p>

```json
{
    "workflow_id": "c9670b54-3cc4-48e6-a6f8-283786d23d6e",
    "workflow_run_id": "65e9ec0c-5a0f-41d3-9d52-26ffee91c6fd"
}
```

</div>
</details>

The response body contains

- `workflow_id` - ID of the new workflow execution.
- `workflow_run_id` - ID of the new workflow execution run. `workflow_id` can have multiple `workflow_run_id` in the 
  scenario when same workflow is restarted.

:::tip
If your frontend application is integrating with other systems, you can persist the `workflow_id` and `workflow_run_id` 
in your system's database to track the workflow execution.
:::


## Terminate Workflow

To terminate the running workflow, you can use the 
[Terminate Workflow Execution API](../../Workflow%20API/11-terminate-workflow-execution.api.mdx). `reason` for 
termination in the request body is optional.

