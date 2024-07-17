---
sidebar_position: 1
---

# 🚀 Quickstart

## Pre-requisites

Required:

- [Docker](https://www.docker.com/)

## Running Locally

1. Clone Repo
```bash
git clone https://github.com/mssfoobar/ar2-ims.git
```

2. Copy and remove the `.sample` in repository root directory. Provide the necessary variables inside the `.env` file.

3. Start services by running command
```bash
go run cmd/ims-manager/main.go -c ./.env
```

## Docker setup

1. Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
2. Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
3. Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup
4. Clone
```bash
git clone https://github.com/mssfoobar/ar2-ims.git
```

5. Start docker-compose
```bash
docker-compose up -d
```

6. Cleanup Docker
```bash
docker-compose down
```
