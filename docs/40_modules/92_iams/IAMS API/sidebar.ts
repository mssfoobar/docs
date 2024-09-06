import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/92_iams/IAMS API/iams-api",
    },
    {
      type: "category",
      label: "Tenants Resource Permissions",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-user-permissions",
          label: "List all user permissions of a tenant resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-user-permissions",
          label: "Update user permission of a tenant resource",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-role-permissions",
          label: "List all role permissions of a tenant resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-role-permissions",
          label: "Update role permission of a tenant resource",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-group-permissions",
          label: "List all group permissions of a tenant resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-group-permissions",
          label: "Update group permission of a tenant resource",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Tenants Resources",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-tenant-resource",
          label: "Get tenant resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-tenant-resource",
          label: "Update tenant resource",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/delete-tenant-resource",
          label: "Delete tenant resource.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/add-scope-to-tenant-resource",
          label: "Add scope to tenant resource.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/remove-scope-from-tenant-resource",
          label: "Remove scope from resource.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-resources",
          label: "List all tenant resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-tenant-resource",
          label: "Create a tenant resource.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-resource-scopes-1",
          label: "List tenant resource scopes. Only name and ids are returned.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tenants Groups",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/add-user-to-tenant-group",
          label: "Add user to group.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/remove-user-from-tenant-group",
          label: "Remove user from group.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-tenant-group",
          label: "Get group by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-tenant-group",
          label: "Update tenant group",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/delete-tenant-group",
          label: "Delete group.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-groups",
          label: "List top level tenant groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-tenant-groups",
          label: "Create top level tenant group.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-group-roles",
          label: "List group roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/assign-group-with-tenant-roles",
          label: "Assign roles to group.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/unassign-group-with-tenant-roles",
          label: "Unassign roles from group.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-group-children",
          label: "List group children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-tenant-group-children",
          label: "Create child group in the group.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-user-tenant-groups",
          label: "List user groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-non-tenant-group-roles",
          label: "List of roles that can be assigned to group.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-group-members",
          label: "List users in group",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tenants",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenants",
          label: "List tenants",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-tenant",
          label: "Create a tenant.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-tenant",
          label: "Get tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/delete-tenant",
          label: "Delete tenant.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-tenant-count",
          label: "Returns the number of tenant that match the given criteria.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tenant Memberships",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-tenant-membership",
          label: "Create a tenant membership. Adding user to the tenant as member.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/delete-tenant-membership",
          label: "Delete tenant membership. Remove user from the Tenant",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-user-tenant-memberships",
          label: "List memberships of the user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-non-tenant-memberships",
          label: "List nonmemberships",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-non-tenant-memberships-count",
          label: "Returns the number of tenant nonmemberships.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-memberships",
          label: "List memberships",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-tenant-memberships-count",
          label: "Returns the number of tenant memberships.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "System administrator",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/add-sys-admin",
          label: "Assign user with System Admin Role.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/remove-sys-admin",
          label: "Unassign user with System Admin Role",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-role",
          label: "Get representation of the System Admin Role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-users-2",
          label: "List users with system-admin role",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tenants User Permissions",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-user-scope-permissions",
          label: "List all access scope that user has on a tenant resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/verify-user-access",
          label: "Verify if a user has access to a resource.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tenant administrator",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/assign-as-tenant-admin",
          label: "Assign user as Tenant Admin.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/unassign-as-tenant-admin",
          label: "Unassign user as Tenant Admin Role.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-users-1",
          label: "List all tenant administrators.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-user-count-1",
          label: "Get the tenant administrators count.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tenant Roles",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-tenant-roles",
          label: "Get role by rolename",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-tenant-role",
          label: "Update tenant role",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/delete-tenant-role",
          label: "Delete role.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-user-tenant-roles",
          label: "List of roles assigned to user.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/assign-user-with-tenant-roles",
          label: "Assign roles to user.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/unassign-user-with-tenant-roles",
          label: "Unassign roles from user.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-roles",
          label: "List roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-tenant-role",
          label: "Create a Role.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-role-users",
          label: "List of users with the specified role name.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/assign-users-with-tenant-role",
          label: "Assign users with the specified role name.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/unassign-users-with-tenant-role",
          label: "Unassign users with the specified role name.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-non-user-tenant-roles",
          label: "List of roles that can be assigned to user.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-non-tenant-role-users",
          label: "List of users that is not assigned with the specified role name.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tenants Scopes",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-tenant-scope",
          label: "Update tenant scope",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/delete-tenant-scope",
          label: "Delete tenant scope.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-scopes",
          label: "List all tenant scopes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-tenant-scope",
          label: "Create a tenant scope.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-tenant-resource-scopes",
          label: "List tenant resources containing specified scopes.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-user",
          label: "Get representation of the user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-user",
          label: "Update the user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/delete-user",
          label: "Delete the user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/update-user-password",
          label: "Set up a new password for the user.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/list-users",
          label: "List users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/create-user",
          label: "Create a new user Username must be unique.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/92_iams/IAMS API/get-user-count",
          label: "Returns the number of users that match the given criteria.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
