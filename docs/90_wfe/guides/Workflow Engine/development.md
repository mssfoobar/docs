---
sidebar_position: 2
---

# 💻 Development

## DSL

WFE interprets dsl genereted by Workflow Designer

<details>
<summary>Example Workflow DSL</summary>

```json
{
  "name": "ExampleDSL",
  "schema_json": {
    "variables": {
      "Input": 1,
      "Form_FormJSON": "{}"
    },
    "specVersion": "2.0",
    "root": {
      "sequence": {
        "elements": [
          {
            "activity": {
              "activityId": "d29a7b91-9a13-426d-9ce4-ccacd2f0e844",
              "name": "Activity",
              "type": "SampleActivityNumber",
              "arguments": ["Input"],
              "result": "Activity_result"
            }
          },
          {
            "parallel": {
              "branches": [
                {
                  "switch": {
                    "input": "Activity_result",
                    "cases": [
                      {
                        "conditional": {
                          "operator": "EQ",
                          "value": 1,
                          "element": {
                            "activity": {
                              "activityId": "4cab9800-9feb-48ac-8803-98718f76e4cd",
                              "name": "Activity1",
                              "type": "SampleActivity1",
                              "arguments": [],
                              "result": "Activity1_result"
                            }
                          }
                        }
                      },
                      {
                        "conditional": {
                          "operator": "EQ",
                          "value": 2,
                          "element": {
                            "activity": {
                              "activityId": "128668dc-09d0-4b96-8f5c-878350f8057c",
                              "name": "Activity2",
                              "type": "SampleActivity1",
                              "arguments": [],
                              "result": "Activity2_result"
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "form": {
                    "formId": "e31a5f78-3c24-4136-849d-e15133d2d233",
                    "name": "Form",
                    "type": "Checklist",
                    "arguments": ["Form_FormJSON"],
                    "result": "Form_result"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```

</details>

Above example workflow dsl will trigger the execution of the workflow in following steps:-

```bash
.
├── execute Activity
└── parallel
    ├── form
    └── switch
        ├── case
        │   └── execute Activity1
        └── case
            └── execute Activity2
```

## Workflow Event History

History events are generated at run time by Temporal server.  
Refer to their [documentation](https://docs.temporal.io/references/events) for more details.  
We use the generated events to track the status of the workflow execution.

To handle the form submission and manual recovery of the switch state, WFE implements following addtional events -

1. FormTaskScheduled
1. FormTaskStarted
1. FormTaskCompleted
1. FormTaskFailed
1. FormTaskCanceled
1. RecoverTaskScheduled
1. RecoverTaskStarted
1. RecoverTaskCompleted
1. RecoverTaskFailed
1. RecoverTaskCanceled
