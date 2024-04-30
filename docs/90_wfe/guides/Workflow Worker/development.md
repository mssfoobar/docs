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

### Activity Heartbeat

:::info
To allow cancellation of the activity, it must heartbeat periodically
:::

If the activity is a long-running process (eg Event listener), it must heartbeat to allow the activity cancellation.

Below is an example HttpCall activity. Note that before and after executing long-running processes, it will heartbeat and catch cancellation from the workflow.
```go
// HttpCall take in 'method', 'endpoint' and 'payload' as input
// Successful execution return http response
func (a *Activities) HttpCall(ctx context.Context, input []interface{}) (interface{}, error) {
	logger := activity.GetLogger(ctx)

	method, ok := input[0].(string)
	if !ok {
		return nil, errors.New("invalid input")
	}
	endpoint, ok := input[1].(string)
	if !ok {
		return nil, errors.New("invalid input")
	}
	payload, ok := input[2].(string)
	if !ok {
		return nil, errors.New("invalid input")
	}

	b := []byte(payload)

	client := &http.Client{}

	req, err := http.NewRequest(method, endpoint, bytes.NewReader(b))
	if err != nil {
		return nil, err
	}

	// heartbeat report before long-running process
	activity.RecordHeartbeat(ctx, "status-report-to-workflow")
    // catch cancellation from workflow by checking ctx.Done
	select {
	case <-ctx.Done():
	return nil, ctx.Err()
	default:
	}
	
	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	// heartbeat after long-running process
	activity.RecordHeartbeat(ctx, "status-report-to-workflow")
    // catch cancellation from workflow by checking ctx.Done
	select {
	case <-ctx.Done():
		return nil, ctx.Err()
	default:
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}
	defer func() {
		if err := res.Body.Close(); err != nil {
			logger.Error(err.Error())
		}
	}()

	var result interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}

	// catch cancellation from workflow by checking ctx.Done
	select {
	case <-ctx.Done():
		return nil, ctx.Err()
	default:
	}

	return result, nil
}
```

