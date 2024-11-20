---
sidebar_position: 5
---
# Signal Workflow

Signaling workflow allows you to send data to workflow activity. For signal to work, the activity it is signaled to must
have a listener waiting for it. To know which activity is waiting for a signal, you can look at the `event` type of 
the activity. Currently, there are 2 events that can be used for signaling.
- `FormTaskStarted` - this event waits for the user to submit a form via signaling
- `RecoverTaskStarted` - this event waits for the user to recover the workflow via signaling

## Signal Workflow API

To send data into the workflow call the [Signal Workflow API](../../Workflow%20API/12-signal-workflow-activity.api.mdx) with
the data you want to send in the `data` field of the request body.

For detail usage of signal workflow, please refer to the
- [Form Activity](6_form_activity.md)
- [Recovery Activity](7_switch_recovery.md)
