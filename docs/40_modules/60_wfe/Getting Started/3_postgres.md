---
sidebar_position: 3
---
# Temporal Server

## Docker Compose

Easiest way to deploy temporal server is to use their official docker compose.
You can find the docker compose file [here](https://github.com/temporalio/docker-compose).

Clone their repository and run `docker-compose up -d` to start the temporal server.
```bash
git clone https://github.com/temporalio/docker-compose
cd docker-compose
docker-compose up -d
```

Temporal api will be available at `localhost:7233` and its web UI at `http://localhost:8080`.

## Deploying in Kubernetes using Helm Chart

To deploy minimal installation with required dependencies only, run the following command:

First clone the helm chart repository and change your current directory to `helm-charts`
```bash
git clone https://github.com/temporalio/helm-charts
cd helm-charts
```

And run helm install command
```bash
helm install \
    --repo https://go.temporal.io/helm-charts \
    --set server.replicaCount=1 \
    --set cassandra.config.cluster_size=1 \
    --set elasticsearch.replicas=1 \
    --set prometheus.enabled=false \
    --set grafana.enabled=false \
    temporaltest temporal \
    --timeout 15m
```

Once the installation is complete, you will find the below pods in your kubernetes cluster
```bash
$ kubectl get pods
NAME                                           READY   STATUS    RESTARTS   AGE
temporaltest-admintools-6cdf56b869-xdxz2       1/1     Running   0          11m
temporaltest-cassandra-0                       1/1     Running   0          11m
temporaltest-frontend-5d5b6d9c59-v9g5j         1/1     Running   2          11m
temporaltest-history-64b9ddbc4b-bwk6j          1/1     Running   2          11m
temporaltest-matching-c8887ddc4-jnzg2          1/1     Running   2          11m
temporaltest-metrics-server-7fbbf65cff-rp2ks   1/1     Running   0          11m
temporaltest-web-77f68bff76-ndkzf              1/1     Running   0          11m
temporaltest-worker-7c9d68f4cf-8tzfw           1/1     Running   2          11m
```

Temporal server is ready. However, we still need to create a namespace for workflow to run in. For that you need to
shell into the `admin-tools` container and use its pre-installed cli to create a namespace.

Shell into `admin-tools` container via [k9s](https://k9scli.io/) or by running `kubectl exec`:
```bash
$ kubectl exec -it services/temporaltest-admintools /bin/bash
bash-5.0#
```

From there, you can use `tctl` to create a new namespace called `default`:
```bash
tctl --namespace default namespace re
```

If you list the namespace, you will find the namespace `default`:
```bash
temporaltest-admintools-5bbf66d8bf-4rrqk:/etc/temporal$ tctl namespace list
Name: default
Id: ad73dd50-ac5f-4c58-ae6c-34e54fe316cd
Description: 
OwnerEmail: 
NamespaceData: map[string]string(nil)
State: Registered
Retention: 72h0m0s
ActiveClusterName: active
Clusters: active
HistoryArchivalState: Disabled
IsGlobalNamespace: false
FailoverVersion: 0
FailoverHistory: []
VisibilityArchivalState: Disabled
Bad binaries to reset:
+-----------------+----------+------------+--------+
| BINARY CHECKSUM | OPERATOR | START TIME | REASON |
+-----------------+----------+------------+--------+
+-----------------+----------+------------+--------+
```

You can forward your machine's local port to temporal frontend
```bash
$ kubectl port-forward services/temporaltest-frontend-headless 7233:7233
Forwarding from 127.0.0.1:7233 -> 7233
Forwarding from [::1]:7233 -> 7233
```

Similarly forward local port to temporal web ui
```bash
$ kubectl port-forward services/temporaltest-web 8080:8080
Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080
```

Temporal api will be available at `localhost:7233` and its web UI at `http://localhost:8080`.
