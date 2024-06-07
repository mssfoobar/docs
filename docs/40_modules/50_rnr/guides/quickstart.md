---
sidebar_position: 1
---

# 🚀 Quickstart

Sub-modules

- REPLAYMGR (http service to manage replay session)
- DBOP  (db operator to initialize & cleanup replay db)
- MSGOP (msg operator to playback replay by reading nats jetstream messages)

## Pre-requisites

### Required Services

- postgres (live db)
- postgres (replay db)
- nats (jetstream enable)
- minio (store db snapshot)
- Debezium (nats connector)

:::note

Debezium should be configured to capture change data event on postgres (live db).
Refer to this [document](https://natsbyexample.com/examples/integrations/debezium/cli) for how to configure debezium with nats.

:::

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/mssfoobar/ar2-rnr.git
```

2. Each module have their own `{ service_name }.env.sample` file. 
Copy and remove the `.sample` in repository root directory. Provide the necessary variables inside the `.env` file.


3. Start services by go command

```bash
go run cmd/replay-manager/main.go -c ./.replay-manager.env
go run cmd/db-operator/main.go -c ./.db-operator.env
go run cmd/msg-operator/main.go -c ./.msg-operator.env
```

## Running with Docker

1. Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
2. Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
3. Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup
4. Clone

```bash
git clone https://github.com/mssfoobar/ar2-rnr.git
```

5. Start docker-compose

```bash
docker-compose up -d
```

6. Cleanup Docker

```bash
docker-compose down
```

:::warning

By this point, record & replay services will be up and running.
You can verify the service liveness by hitting at the liveness & readiness endpoint. 
Even though service is alive you won't be able to start the playback session yet since there is no db snapshot to start the playback session.
Refer to this infra [repo](https://github.com/mssfoobar/ar2-infra/tree/main/argocd/dev2/manifests/ar2-rnr) on how we set up periodic backup & clean cronjob.

:::