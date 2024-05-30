---
sidebar_position: 1
description: A useful list of commands to to
---

# ✔️ Runbook

## AR2 Web Server

### Running the server in dev mode

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows" default>

```bash
npm run clean; npm run generate; npm run dev
```

</TabItem>
<TabItem value="macOS" label="macOS">

```bash
npm run clean && npm run generate&& npm run dev
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
npm run clean && npm run generate&& npm run dev
```

</TabItem>
</Tabs>

## Database Administration

### Connecting to Postgres Database

```
psql -h <HOST> -d postgres -U postgres -p <PORT>
```

e.g. with default Postgres container

```
psql -h localhost -d postgres -U postgres -p 5432
```

### Connecting to Postgres Database & Running Command Immediately

```
psql -h <HOST> -d postgres -U postgres -p <PORT> -c <COMMAND>
```

e.g. with default Postgres container

```
psql -h localhost -d postgres -U postgres -p 5432 -c "CREATE DATABASE ar2;"
```

### Start psql connection with an SQL file

This is useful for loading dumps in the form of `.sql` files.

```bash
psql -h <HOST> -d ar2 -U postgres -p <PORT> -f <PATH_TO_SQL>
```

### Retrieving Database Dump from Hasura

Reference: https://hasura.io/docs/latest/api-reference/pgdump/

Do a POST request to http://\{\{hasura_url\}\}/v1alpha1/pg_dump with the following body:
:::note
Remember to supply any required credentials through the header (e.g. x-hasura-admin-secret)
:::

```
POST /v1alpha1/pg_dump HTTP/1.1
Content-Type: application/json
X-Hasura-Role: admin
{
  "opts": [ "--no-owner", "--no-acl"],
  "clean_output": true,
  "source": "ar2"
}
```

## Docker & Docker Compose

### Build + Create + Start (detached)

```bash
docker compose up -d --build
```

### Stop + Remove (images) + Remove (volumes)

```bash
docker compose down --rmi local -v
```
