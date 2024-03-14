---
sidebar_position: 1
---

# 🚀 Quickstart

WFE comprises three modules

- WFE (Workflow Engine - interpreter service for bpmn dsl)
- WFW (Workflow Worker - worker service which performs activity tasks)
- WFM (Workflow Manager - http server for workflow management)

## Pre-requisites

Required:

- [Docker](https://www.docker.com/)

## Running Locally

1. Clone Repo

```bash
git clone https://github.com/mssfoobar/ar2-wfe.git
```

2. Create .env file in project root directory

```
LOG_LEVEL=
APP_PORT=
TEMPORAL_HOST=
TEMPORAL_PORT=
TEMPORAL_NAMESPACE=
TEMPORAL_TASKQUEU=
TEMPORAL_WORKFLOWTYPE=
HASURA_HOST=
HASURA_PORT=
GQL_ENDPOINT=
HASURA_GRAPHQL_ADMIN_SECRET=
UCS_URL_PROTOCOL=
UCS_HOST=
UCS_PORT=
```

3. Start services by running command

```bash
go run cmd/workflow-manager/main.go
go run cmd/workflow-engine/main.go
go run cmd/workflow-worker/main.go
```

## Docker setup

1. Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
2. Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
3. Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup
4. Clone

```bash
git clone https://github.com/mssfoobar/ar2-wfe.git
```

5. Start docker-compose

```bash
docker-compose up -d
```

6. Cleanup Docker

```bash
docker-compose down
```
