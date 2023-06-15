---
sidebar_position: 3
---

# Common Errors & Mistakes ❌

## Web

### Errors when executing `npm run dev`

#### ERR_MODULE_NOT_FOUND

Sample Error:

```
error when starting dev server:
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '...' imported from ...
```

This type of error (ERR_MODULE_NOT_FOUND) typically happens when a new npm package is included into the project and you were not informed
of it, or might have forgotten to add/install it. You shouldbe able to resolve it simply by installing the new package.

Run:

```
npm install
```

#### No matching export in `"src/generated/types.ts for import "..."`

Sample Error:

```
X [ERROR] No matching export in "src/generated/types.ts" for import "MapDataDocument"

    src/routes/(app)/map-view/+page.ts:4:28:
      4 │ import { type MapDataQuery, MapDataDocument } from '$generated-types';
```

You need to run `npm run generate` to generate the types from the GraphQL schema. This is likely to occur when you've
pulled other developers' changes and they might have added new queries to the project.

### Error when executing `npm run getschema`

#### endpoint is required: `gq <endpoint>`

Sample Error:

```
> @mssfoobar/ar2-web@0.2.0 getschema
> env-cmd -f .env.development -x gq -H "X-Hasura-Admin-Secret: $PUBLIC_HASURA_ADMIN_KEY" --introspect > schema.graphql

 »   Error: endpoint is required: `gq <endpoint>`
```

Our usage of the `gq` command (which is 'graphqurl') requires the environment variable `GRAPHQURL_ENDPOINT` - it is not
set in your `.env.development` file, check the
[ar2-web wiki](https://github.com/mssfoobar/ar2-web/wiki/Environment-Variables) on what value you might need to set for
it.

#### Executing query... error: `invalid x-hasura-admin-secret/x-hasura-access-key`

Sample Error:

```
> @mssfoobar/ar2-web@0.2.0 getschema

Executing query... error
Error:  {
  errors: [
    {
      extensions: [Object],
      message: 'invalid x-hasura-admin-secret/x-hasura-access-key'
    }
  ]
}
```

Calling the introspection endpoint to get the full schema requires privileged access. You need to set the
`PUBLIC_HASURA_ADMIN_KEY` environment variable in your `.env.development` file, check the
[ar2-web wiki](https://github.com/mssfoobar/ar2-web/wiki/Environment-Variables) on what value you might need to set for
it.

### Error when executing `npm run generate`

Sample Error:

```
✔ Parse Configuration
⚠ Generate outputs
  ❯ Generate src/generated/types.ts
    ✔ Load GraphQL schemas
    ✔ Load GraphQL documents
    ✖ Not all operations have an unique name: EmergencyDepartmentData
```

This error occurs when you run `npm run generate` when you already have generated types, and graphql-codegen seems to attempt to merge the types instead of replace them.

Delete your `/src/generated` folder (or just the `/src/generated/types.ts`) and run the command again, it should generate the types just fine.

You can do this by running `npm run clean`, which deletes the generated types.

This can also occur when not all operations have a unique name - especially if you had multiple identical operations in different files, then changed one of them without renaming them (so you really ended up with 2 different operations with the same name).

### Missing user role

Users' current role is based on their `active_membership` relationship to a membership they have. This is through the
foreign key `membership_id` in the `user_user` table. It is highly likely that the user has no active membership set
(no `membership_id` set). This relationship is used by Keycloak to populate the access token with the claims for the
user's role.

## Database

### Error when restoring SQL dump

Sample Error:

```
ar2-database-postgres-1        | psql:/docker-entrypoint-initdb.d/dump.sql:243: ERROR:  end-of-copy marker corrupt
```

The `dump.sql` file is likely invalid - take precaution to not auto-format SQL files upon saving unless you are sure of your formatter.
The same applies to .yml files (wherein the indentation matters).
