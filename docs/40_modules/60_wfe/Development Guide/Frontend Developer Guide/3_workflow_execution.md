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
- `metadata` - Metadata of the workflow. It is a key-value map which can be accessed inside the workflow activity. 

:::note
Refer to [retrieving workflow metadata guide](../Activity%20Developer%20Guide/2_activity_development.md#retrieving-workflow-metadata) 
for how to retrieve workflow metadata inside the activity.
:::

<details>
<summary>Example API call</summary>
<div>
<p><strong>Request Body</strong></p>

```json
{
    "template_id": "ad4cdeaf-585d-41b7-9858-eda092df4478",
    "metadata": {
        "trigger_rule_id": "12345"
    }
}
```

</div><div>
<p><strong>Response Body</strong></p>

```json
{
    "workflow_id": "c9670b54-3cc4-48e6-a6f8-283786d23d6e",
}
```

</div>
</details>

The response body contains

- `workflow_id` - ID of the new workflow execution.

:::tip
If your frontend application is integrating with other systems, you can persist the `workflow_id` in your system's 
database to track the workflow execution.
:::


## Terminate Workflow

To terminate the running workflow, you can use the 
[Terminate Workflow Execution API](../../Workflow%20API/11-terminate-workflow-execution.api.mdx). `reason` for 
termination in the request body is optional.

