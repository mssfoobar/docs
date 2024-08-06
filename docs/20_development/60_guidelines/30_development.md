---
sidebar_position: 50
---

# Development Conventions

This section provides general guidelines for development as well as their justification. It also deals with one of the
two hardest problems in computer science. Namely, naming.

---

## Naming Git Repositories

For all source code stored in Git repositories, services will typically namespace them under organizations, or projects
(e.g. GitHub and GitLab respectively). This means we do not need to add additional prefixes for our repositories.

To keep things easy to remember and associate with naming in code, we shall name all repositories based on the
abbreviation of the module they're for, and the repository description must continue the full module name at
the beginning.

For example, for `Unified Notification Hub` the repository name shall be:

```text
unh
```

and a sample description would be:

```text
Unified Notification Hub - supports email, sms, push notifications, and customized notification channels.
```

---

## Database

### Naming schemas

Services within our system might have to share database with other external services. The deployment configuration
is highly dependent on the project the system is ultimately deployed to. Because of this, all schemas shall be
prefixed with `aoh_` to avoid clashes in naming:

```text
aoh_[repository name]
```

Example for a service named `Unified Notification Hub` with the repository abbreviation `unh`, the schema name shall be:

```text
aoh_unh
```

See Also: [Git Repository Naming](#git-repository-naming)

---

### Naming tables

Tables should be named after the entity they represent, in singular form (so a table representing notifications should
be called `notification`)

:::warning
That's notification WITHOUT the "S"!
:::

---

### Naming views

Views shall be prefixed with `v_`, this allows us to clearly see which tables are views. Database management UI's
would also typically sort tables by name, allowing all views to be grouped together neatly.

```text
v_[view name]
```

Example:

```text
v_notification_template
```

:::note
To be discussed: _naming materialized views_
:::

---

### Naming association tables

Association tables are commonly used to map the relationship between entities, especially for many-to-many
relationships. We'll use the simple, common covention of concatenating the two tables names and suffixing `_mapping`
behind.

```text
[table 1]_[table 2]_mapping
```

Example:

```text
user_notification_mapping
```

---

### Naming the database user

Direct database access for each service is via a unique database account. We do this instead of having a shared
account for the purpose having the ability to apply access control between services. We'll also have to namespace
this user account as we might share the database with other external services (as is often the case with
projects being deployed into existing infrastructure)

```text
aoh_[repo name]_user
```

Example:

```text
aoh_unh_user
```

See Also:

-   [Git Repository Naming](#git-repository-naming)
-   [Naming Schemas](#naming-schemas)

### Mandatory Database Fields

The following fields are mandatory and must be _not nullable_.

-   `id`: UUID | This must always be the primary key for the table
-   `created_at`: TIMESTAMP | The UTC timestamp when this record was first created, default to `NOW()`
-   `updated_at`: TIMESTAMP | The UTC timestamp when this record was last updated, use database triggers
-   `created_by`: TEXT | The reference to the user who created this record - do not apply database constraints
-   `updated_by`: TEXT | The reference to the user who last modified this record - do not apply database constraints
-   `tenant_id`: TEXT | The reference to the tenant this row belongs to - do not apply database constraints
-   `occ_lock`: INT | A mutex for optimistic concurrency control

:::note
We only apply database constraints (e.g. foreign key constraints) when the reference is within the same service
(schema). This is to avoid coupling the services at the database level.
:::

:::note
To be discussed: additional field for soft delete (or archive tables)
:::

## Endpoints

### Kubernetes Liveness and Readiness probes

All services must provide a `liveness` and `readiness` endpoint for Kubernetes to call. As a rule, we'll use
`livez` and `readyz` at the root path, which is common with Google's internal practices. However, certain frameworks
might already provide such endpoints for the same purpose, requiring you to utilize their naming scheme; in such a
scenario, you should stick with the framework's built-in endpoints (e.g. SpringBoot's `/actuator/health/liveness` &
`/actuator/health/readiness`).

-   Liveness Endpoint: `/livez`
-   Readiness Endpoint: `/readyz`

### Web Pages

The routing of web pages shall also be namespaced - first by the project, then by the module:

```
/[project]/[module]/...
```

Examples:

-   View all incidents page: `/aoh/incidents/`
-   View specific incident: `/aoh/incidents/inc-20240607-0001`
-   Dashboard page: `/aoh/dashboard?name=My+First+Dashboard`
