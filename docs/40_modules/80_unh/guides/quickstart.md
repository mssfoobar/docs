---
sidebar_position: 1
---

# 🚀 Quickstart

## Running Locally

1. Clone Repo
```bash
git clone https://github.com/mssfoobar/unh.git
```

2. Remove `.sample` from `.env.sample` file naming in repository root directory. Provide the necessary env variables inside the `.env` file.

3. Start services by running command
```bash
go run cmd/unh/main.go -e ./.env
```
