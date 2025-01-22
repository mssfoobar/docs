---
sidebar_position: 3
sidebar_label: Secure Database Credentials
---

# Secure the Database Credential

Keycloak deployed using the instructions in the Quick Start section is mean for development and need to be modified if to use for production. One of the key changes is to ensure that the database credential is not directly hardcoded in the deployment manifests file.

The database credential should be stored in Kubernetes Secrets.

Note that by default, the data in a Kubernetes `Secrets` is obfuscated by using merely `Base64` encoding. This encoding method does not encrypt the data within it.

To protect the secrets, the following steps should be taken:

-   Enable Encryption at Rest.
-   Enable or configure RBAC rules to restrict access to the secrets in a cluster.
-   Restrict Secret access to specific containers, or the containers that require access to the secret to perform their operations.
-   Consider using external Secret store providers, such as `Hashicorp’s Vault`.

For more information on Kubernetes Secrets, refer to the following link:
[https://kubernetes.io/docs/concepts/configuration/secret/](https://kubernetes.io/docs/concepts/configuration/secret/)
