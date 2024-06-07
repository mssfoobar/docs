---
sidebar_position: 3
---

# Roles & Groups

Keycloak has the concept of Roles and Groups; a user can have roles or groups, and a group can contain multiple roles.

## Roles in AOH (AGIL Ops Hub)

As explained in the [introduction](/docs/modules/iam/introduction#authentication-in-agil-ops-hub), AGIL Ops Hub uses roles,
and allows users have different roles depending on what team they are in. These roles are match the roles in Hasura
and is used to evaluate permission policies that control what tables the user is allowed to access. Combined with
Hasura's custom check for permissions, we have the ability to very flexibly control what tables users are allowed to
access.

The roles in AGIL Ops Hub map directly to roles in Keycloak - they are the same. However, the way we use groups in
keycloak is the same as roles. This is due to a quirk of how Keycloak assigns attributes to users - it does not merge
attributes from roles into the user attributes, but it does so from the groups. This means that if we want to create
custom claims based on the user's role by reading their role attributes, it won't work. This is why we put users in
groups as if they are their role.

However, we still have to give users a role, as users are only allowed to assume roles based on their
`x-hasura-allowed-role` claim.

## Creating a new role

To create a new role, you must create both a role, and a matching group, and assign the `default-role`` attribute in
that group.

### Creating a role in Keycloak

1. Click `Realm roles` on the left menu
2. Click `Create role`
3. Give the role a name and helpful description
4. Click save

### Creating a group in Keycloak

1. Click `Groups` on the left
2. Click `Create group`
3. Give your group a name, this should match the role (to avoid confusion)
4. Click on your newly created group
5. Click on the `attributes` tab
6. Create a new key, value pair with the key as `default-role` and the value as the name of your role
