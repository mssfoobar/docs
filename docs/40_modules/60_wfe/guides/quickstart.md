---
sidebar_position: 1
---

# Quickstart

WFE comprises three modules

- WFE (Workflowflow Engine - interpreter service for bpmn dsl)
- WFW (Workflow Worker - worker service which performs activity tasks)
- WFM (Workflow Manager - http server for workflow managmement)

## Running Locally

1. Clone Repo

```bash
git clone https://github.com/mssfoobar/ar2-wfe.git
```

2. Remove `.sample` from `.env.sample`. Fill all the env variables based on your environment configuration


3. Start services by running go command

```bash
go run cmd/workflow-manager/main.go -c .wfm.env
go run cmd/workflow-engine/main.go -c .wfe.env
go run cmd/workflow-worker/main.go -c .wfw.env
```

## Run With Docker

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