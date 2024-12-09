---
sidebar_position: 4
---
# Monitor Workflow

When the workflow is running, it will generate events in the database. These events can be used to monitor the 
state of the workflow.

## Workflow Events

Belows are the events that will be generated by the workflow with their description.

<table>
<tr><th>Event</th><th>Description</th></tr>
<tr><td>WorkflowExecutionStarted</td><td>always the first event in a workflow execution event history</td></tr>
<tr><td>WorkflowExecutionCompleted</td><td>indicates that the workflow execution has successfully completed</td></tr>
<tr><td>WorkflowExecutionFailed</td><td>indicates that the workflow execution has unsuccessfully completed with error</td></tr>
<tr><td>WorkflowExecutionTimedOut</td><td>indicates that the workflow execution has timed out due to the workflow having not been completed within the given timeout duration</td></tr>
<tr><td>WorkflowExecutionCancelRequested</td><td>indicates that a request has been made to cancel the workflow execution</td></tr>
<tr><td>WorkflowExecutionCanceled</td><td>indicates that the workflow execution has been canceled</td></tr>
<tr><td>WorkflowExecutionTerminated</td><td>indicates that the workflow execution has been terminated</td></tr>
<tr><td>WorkflowTaskScheduled</td><td>indicates that the workflow task has been scheduled</td></tr>
<tr><td>WorkflowTaskStarted</td><td>indicates that the workflow task has started</td></tr>
<tr><td>WorkflowTaskCompleted</td><td>indicates that the workflow task has completed</td></tr>
<tr><td>WorkflowTaskFailed</td><td>indicates that the workflow task has failed</td></tr>
<tr><td>WorkflowTaskTimedOut</td><td>indicates that the workflow task has timed out</td></tr>
<tr><td>ActivityTaskScheduled</td><td>indicates that the activity task has been scheduled</td></tr>
<tr><td>ActivityTaskStarted</td><td>indicates that the activity task has started</td></tr>
<tr><td>ActivityTaskCompleted</td><td>indicates that the activity task has completed</td></tr>
<tr><td>ActivityTaskFailed</td><td>indicates that the activity task has failed</td></tr>
<tr><td>ActivityTaskTimedOut</td><td>indicates that the activity task has timed out</td></tr>
<tr><td>ActivityTaskCancelRequested</td><td>indicates that a request has been made to cancel the activity task</td></tr>
<tr><td>ActivityTaskCanceled</td><td>indicates that the activity task has been canceled</td></tr>
<tr><td>FormTaskScheduled</td><td>indicates that the form task has been scheduled</td></tr>
<tr><td>FormTaskStarted</td><td>indicates that the form task has started</td></tr>
<tr><td>FormTaskCompleted</td><td>indicates that the form task has completed</td></tr>
<tr><td>FormTaskFailed</td><td>indicates that the form task has failed</td></tr>
<tr><td>FormTaskCanceled</td><td>indicates that the form task has been canceled</td></tr>
<tr><td>RecoverTaskScheduled</td><td>indicates that the recover task has been scheduled</td></tr>
<tr><td>RecoverTaskStarted</td><td>indicates that the recover task has started</td></tr>
<tr><td>RecoverTaskCompleted</td><td>indicates that the recover task has completed</td></tr>
<tr><td>RecoverTaskFailed</td><td>indicates that the recover task has failed</td></tr>
<tr><td>RecoverTaskCanceled</td><td>indicates that the recover task has been canceled</td></tr>
<tr><td>CallActivityTaskScheduled</td><td>indicates that the callActivity task has been scheduled</td></tr>
<tr><td>CallActivityTaskStarted</td><td>indicates that the callActivity task has started</td></tr>
<tr><td>CallActivityTaskCompleted</td><td>indicates that the callActivity task has completed</td></tr>
<tr><td>CallActivityTaskFailed</td><td>indicates that the callActivity task has failed</td></tr>
<tr><td>CallActivityTaskCanceled</td><td>indicates that the callActivity task has been canceled</td></tr>
</table>

## Tracking Workflow Execution History

To track the workflow execution history, you can use the 
[Get Workflow Execution History API](../../Workflow%20API/10-get-workflow-execution-state-history.api.mdx) which returns 
the history of the workflow execution states up to the current state.

<details>
<summary>Example API response</summary>

```json
{
    "data": [
        {
            "id": "718bcfc1-e748-40f0-836a-f94d3c5ca0ec",
            "workflow_id": "1d2d6a7f-5d86-41ab-85a7-0d9256d9f8e6",
            "workflow_run_id": "077659fe-1b6c-4db1-87a6-64833267319b",
            "activity_name": "",
            "activity_type": "",
            "event": "WorkflowExecutionStarted",
            "data": {},
            "created_at": "2024-10-24T10:47:35.14814Z"
        },
        {
            "id": "4c5bbffc-03fe-441f-a099-e23b5da954f1",
            "workflow_id": "1d2d6a7f-5d86-41ab-85a7-0d9256d9f8e6",
            "workflow_run_id": "077659fe-1b6c-4db1-87a6-64833267319b",
            "activity_name": "example",
            "activity_type": "ExampleActivity",
            "event": "ActivityTaskScheduled",
            "data": {
                "input": [
                    "{\"input\": \"Hello\"}" 
                ]
            },
            "created_at": "2024-10-24T10:47:35.160881Z"
        },
        {
            "id": "a9a8b6fd-03fe-43df-bcd6-686c3fcbe0d4",
            "workflow_id": "1d2d6a7f-5d86-41ab-85a7-0d9256d9f8e6",
            "workflow_run_id": "077659fe-1b6c-4db1-87a6-64833267319b",
            "activity_name": "example",
            "activity_type": "ExampleActivity",
            "event": "ActivityTaskStarted",
            "data": {},
            "created_at": "2024-10-24T10:47:35.165684Z"
        },
        {
            "id": "f2dfd9e4-db39-4484-97a2-3f6ef2f424c8",
            "workflow_id": "1d2d6a7f-5d86-41ab-85a7-0d9256d9f8e6",
            "workflow_run_id": "077659fe-1b6c-4db1-87a6-64833267319b",
            "activity_name": "example",
            "activity_type": "ExampleActivity",
            "event": "ActivityTaskCompleted",
            "data": {
                "result": [
                    {
                        "output": "Hello"
                    }
                ]
            },
            "created_at": "2024-10-24T10:47:35.166853Z"
        },
        {
            "id": "76600b19-a9ed-452e-897a-bd019aee82c1",
            "workflow_id": "1d2d6a7f-5d86-41ab-85a7-0d9256d9f8e6",
            "workflow_run_id": "077659fe-1b6c-4db1-87a6-64833267319b",
            "activity_name": "",
            "activity_type": "",
            "event": "WorkflowExecutionCompleted",
            "data": {},
            "created_at": "2024-10-24T10:53:02.343729Z"
        }
    ],
    "sent_at": "2024-10-30T09:37:27Z",
    "page": {
        "number": 1,
        "size": 5,
        "total_records": 5,
        "count": 5,
        "sort": [
            ""
        ]
    }
}
```

</details>

Based on the event type in the response, you can create the corresponding event handler user interface.
