---
sidebar_position: 2
---

# 💻 Development

## Activity

An Activity is a normal function or method that executes a single, well-defined action (either short or long-running), such as calling another service, transcoding a media file, or sending an email message. Activity code should be deterministic.

### Activity Function Definition

Let's define a simple activity which has input and output as string data type.

```go
type Activities struct{}

func (a *Activities) SimpleActivity(ctx context.Context, input []interface{}) (string, error) {
  str, ok := input[0].(string)
	if !ok {
		return nil, errors.New("invalid input")
	}
	return "Result_" + str, nil
}
```

The first parameter of an activity definition is a context.  
Context is used by Temporal to pass around Workflow Execution Context.

The second parameter is an array of interface{}.
We use an array of interface{} to support the Workflow Engine to interpret as many parameters as defined by the Activity Developer.  
It is important to always typecast the input parameter and return error if there is to avoid runtime errors.

And then we return the result as string.

### Dynamic Activity Registration

If you notice in earlier example, we have declared `Activites` struct type and defined the function with receiver as `Actvities`.  
Reason is we want to register the activity dynamically which allow us to add new activities in Workflow Worker without having to rebuild the Workflow Engine.
Otherwise, Workflow Engine service will need to statically register the activities defined in Workflow Worker service.

```go
func main() {
// ...
    yourWorker := worker.New(temporalClient, "your-custom-task-queue-name", worker.Options{})

    yourWorker.RegisterActivityWithOptions(&yourapp.Activities{})

    err = yourWorker.Run(worker.InterruptCh())
// ...
}
```
