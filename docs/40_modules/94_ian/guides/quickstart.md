---
sidebar_position: 1
---

# 🚀 Quickstart

## Pre-requisites

Required:

- [Go](https://go.dev/)
- [Git](https://git-scm.com/)

## Running Locally

1. Clone Repo

```bash
git clone https://github.com/mssfoobar/ian.git
```

2. Copy and remove the `.sample` in repository root directory. Provide the necessary variables inside the `.env` file.

3. Create database schema by running script in `/schema/postgres/schema.sql`

4. Start services by running command

```bash
go run cmd/ian/main.go
```
