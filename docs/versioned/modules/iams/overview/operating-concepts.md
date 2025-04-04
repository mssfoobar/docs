---
sidebar_position: 3
sidebar_label: Operating Concepts
---

# Operating Concepts

## Domain Model

The domain model of IAMS revolves around the following key entities:

1. **Realm** – A top-level entity in IAMS. Realms can be used to organize tenants, users, roles, group, and resources.
2. **Tenant** – A separate entity or organization within a realm. Each tenant has its own set of roles, groups, and resources.
3. **User** – An individual in a realm. Users can have membership in multiple tenants and assigned multiple roles within the tenant he/she is member of.
4. **Role** – A role identifies a type or category of user. Admin, user, manager, and employee are all typical roles that may exist in a tenant. Applications often assign access and permissions to specific roles rather than individual users as dealing with users can be too fine-grained and hard to manage.
5. **Group** – A collection of users within a tenant. Group can be used to assign roles or permissions to multiple users at once.
6. **Resource** – A resource represents an entity or object within the system that can be accessed or managed by users with the appropriate roles or permissions
7. **Scope** – A scope is a bounded extent of access that is possible to perform on a resource. It usually indicates what can be done with a given resource. An example of some common scopes are `view`, `edit`, `delete` etc.

## Entity Descriptions

### Realm

#### Description

A realm represents a top-level entity that owns multiple tenants. Realms can be used to organize tenants, users, roles, and resources.

Realm need to be created in Keycloak. It can be created via Keycloak Admin Console.

Realm name is unique within Keycloak.

As part of the deployment steps in Quick Start, a default Realm named AOH will be created.

#### Relationships

-   Multiple Realms can be created for each application. But typically only one is created unless you are implementing Separate Realm for Each Tenant approach for multitenancy.
-   Each realm can have one or more tenants.
-   Each realm can have users and users are unique across realm.

### Tenant

#### Description

A tenant represents a separate entity or organization within a realm. Each tenant has its own set of roles, group, and resources.

A tenant name is unique within a realm.

#### Relationships

-   A tenant belongs to one realm.
-   A tenant is associated with one or more roles, groups, and resources.

### User

#### Description

A user is an individual who belongs to a realm. User can be a member of one or more tenants within the realm.

Username is unique within a realm.

Users can have multiple roles within a tenant and can belong to multiple groups within a tenant.

User can be granted with scoped access to one or more resources from the tenant that he is member of (i.e., User-based Access Control).

#### Relationships

-   A user belongs to one realm.
-   A user can be member of one or more tenants from the realm he belongs to.
-   A user can be associated with one or more roles from the tenant that he is member of.
-   A user can be associated with one or more groups from the tenant that he is member of.
-   A user can be granted with scoped access to one or more resources from the tenant that he is member of.

### Role

#### Description

A role identifies a type or category of user. Admin, user, manager, and employee are all typical roles that may exist in a tenant. Applications often assign access and permissions to specific roles rather than individual users as dealing with users can be too fine-grained and hard to manage.

Role name is unique within a tenant. Different Roles can exist in different tenants that have the same name.

A tenant can have one or more roles and roles can be granted with scoped access to one or more resources from the tenant it belongs to (i.e., Role-based Access Control).

Roles can be assigned to users or groups.

#### Relationships

-   A role belongs to one tenant.
-   A role can be assigned to one or more users or groups within a tenant.
-   A role is can be granted with scoped access to one or more resources from the tenant that it belongs to.

### Group

#### Description

A is a collection of users within a tenant. Groups can be used to assign roles or permissions to multiple users at once.

A group can have sub-groups. Name of the group must be unique within siblings.

A group can be assigned to one or more roles.

A group can be granted with scoped access to one or more resources from the tenant it belongs to (i.e., Group-based Access Control).

#### Relationships

-   A group belongs to one tenant.
-   A group can have subgroups.
-   A group can be assigned with one or more users within a tenant.
-   A group can be granted with scoped access to one or more resources from the tenant it belongs to.

### Resource

#### Description

A resource represents an entity or object within the tenant that can be accessed or managed by users with the appropriate roles or permissions.

A resource name must be unique within the tenant.

A resource has one or more scopes that are used to represent scoped access to a resource that can be granted to user, roles, or group within the tenant.

#### Relationship

-   A resource belongs to one tenant.
-   A resource is associated with one or more scopes.

### Scope

#### Description

A scope is a bounded extent of access that is possible to perform on a resource. It usually indicates what can be done with a given resource. Example of scopes are view, edit, delete, and so on.

However, scope can also be related to specific information provided by a resource. In this case, you can have an Incident resource and a eSOP scope, where the eSOP scope is used to define specific permissions for users to access the eSOP information of an Incident.

A scope belongs to a tenant and its name must be unique within the tenant.

A scope can be associated with one or more resources in the same tenant.

#### Relationships

-   A scope belongs to one tenant.
-   A scope is associated with one or more resources.
-   A scope and resource pair formed a permission that can be assigned to users, groups, or roles.
