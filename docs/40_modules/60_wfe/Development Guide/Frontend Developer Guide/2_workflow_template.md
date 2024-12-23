---
sidebar_position: 3
---
# Workflow Template

Workflow Templates are created using Workflow Designer and are used to run workflows in the backend.
Workflow Template object has the following fields:
- `name`: The name of the workflow template.
- `schema_json`: The workflow execution instruction in JSON format. Used by the backend to execute the workflow.
- `designer_json`: The BPMN representation of the workflow in JSON format. Used by the frontend to render the BPMN diagram.

## List Workflow Templates

To list workflow templates, please refer to the [List Workflow Templates API](../../Workflow%20API/5-list-workflow-templates.api.mdx).
API will return a list of workflow templates with pagination.

<details>
<summary>Example API response</summary>

```json
{
  "data": [
    {
      "id": "ad4cdeaf-585d-41b7-9858-eda092df4478",
      "name": "example workflow",
      "schema_json": {
        "start": "Activity",
        "states": [
          {
            "name": "Activity",
            "next": "End",
            "activity": {
              "id": "2a8b6440-bc13-4f16-a829-36f5304aab2b",
              "type": "SendEmail",
              "result": "Result_Activity",
              "options": {
                "startToCloseTimeout": 300
              },
              "arguments": [
                "Activity_SendTo",
                "Activity_Subject",
                "Activity_Message"
              ],
              "boundaryEvents": []
            }
          },
          {
            "end": {
              "id": "45fa6a9d-94b6-4aee-b9e4-05284989a8cd",
              "terminate": false
            },
            "name": "End"
          }
        ],
        "variables": {
          "Activity_SendTo": "someone@email.com",
          "Activity_Message": "How r you?",
          "Activity_Subject": "Greeting"
        },
        "specVersion": "2.0"
      },
      "designer_json": {
        "name": "SimpleWorkflow",
        "type": "bpmn",
        "cells": [
          {
            "z": 1,
            "id": "2d9a644a-08d6-4943-ad71-5219c6fcc461",
            "size": {
              "width": 40,
              "height": 40
            },
            "type": "wf.Start",
            "angle": 0,
            "attrs": {},
            "position": {
              "x": 430,
              "y": 250
            }
          },
          {
            "z": 4,
            "id": "2a8b6440-bc13-4f16-a829-36f5304aab2b",
            "size": {
              "width": 100,
              "height": 80
            },
            "type": "wf.Activity",
            "angle": 0,
            "attrs": {
              "data": {
                "result": "Result_Activity",
                "resultType": "null",
                "taskResult": null,
                "typeOptions": {
                  "SendTo": "someone@email.com",
                  "Message": "How r you?",
                  "Subject": "Greeting"
                }
              },
              "type": {
                "text": "SendEmail"
              },
              "label": {
                "text": "Activity"
              }
            },
            "markup": [
              {
                "tagName": "rect",
                "selector": "background"
              },
              {
                "tagName": "image",
                "selector": "icon"
              },
              {
                "tagName": "path",
                "selector": "border"
              },
              {
                "tagName": "text",
                "selector": "label"
              },
              {
                "tagName": "g",
                "selector": "markers"
              },
              {
                "tagName": "text",
                "selector": "type",
                "attributes": {
                  "fill": "var(--on-background)"
                }
              }
            ],
            "position": {
              "x": 560,
              "y": 230
            },
            "subscribers": {}
          },
          {
            "z": 5,
            "id": "82e9a3d4-99aa-4ab9-bdee-23cb5269fdde",
            "type": "wf.Flow",
            "attrs": {},
            "labels": [],
            "source": {
              "id": "2d9a644a-08d6-4943-ad71-5219c6fcc461"
            },
            "target": {
              "id": "2a8b6440-bc13-4f16-a829-36f5304aab2b"
            }
          },
          {
            "z": 8,
            "id": "45fa6a9d-94b6-4aee-b9e4-05284989a8cd",
            "size": {
              "width": 40,
              "height": 40
            },
            "type": "wf.End",
            "angle": 0,
            "attrs": {},
            "position": {
              "x": 750,
              "y": 250
            }
          },
          {
            "z": 9,
            "id": "cc3bbf53-5fe3-46cf-9728-7573b4ce0b68",
            "type": "wf.Flow",
            "attrs": {},
            "labels": [],
            "source": {
              "id": "2a8b6440-bc13-4f16-a829-36f5304aab2b"
            },
            "target": {
              "id": "45fa6a9d-94b6-4aee-b9e4-05284989a8cd"
            }
          }
        ],
        "workflowData": {
          "id": "",
          "name": "SimpleWorkflow"
        }
      },
      "editable": true,
      "created_at": "2024-10-29T09:04:04.90828Z",
      "created_by": "d6f80e07-3b30-4968-8550-d3a441966e95",
      "updated_at": "2024-10-29T09:04:04.90828Z",
      "updated_by": "d6f80e07-3b30-4968-8550-d3a441966e95",
      "tenant_id": "3ca9a629-6a64-4d40-9a93-cc8da0595754",
      "occ_lock": 0
    }
  ],
  "sent_at": "2024-10-30T05:22:20Z",
  "page": {
    "number": 1,
    "size": 3,
    "total_records": 1,
    "count": 1,
    "sort": [
      "created_at desc"
    ]
  }
}
```

</details>

## Render Workflow BPMN diagram

We used [jointJS+](https://www.jointjs.com/demos/bpmn) to generate the BPMN diagram to represent the workflow. 
The `designer_json` field inside the workflow template object is the jointJS BPMN JSON format. So you can use the 
jointJS library to render the diagram in the frontend.

```javascript
var graph = new joint.dia.Graph
var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 600,
    height: 400,
    gridSize: 10,
    model: graph
});

var rect = new joint.shapes.basic.Rect({
    position: { x: 50, y: 70 },
    size: { width: 100, height: 40 }
});

// load the workflow template graph
graph.fromJSON(workflowTemplate.designer_json);
```

For jointJS+ api reference, please refer to their [API Documentation](https://docs.jointjs.com/api/dia/Paper/).

## Build Custom UI for Workflow

To build a custom UI for a workflow (for example, a list of workflow execution steps), you need to build your own 
renderer that will interpret the workflow defined in `schema_json`. For more information about `schema_json`, refer 
to the Workflow DSL documentation.