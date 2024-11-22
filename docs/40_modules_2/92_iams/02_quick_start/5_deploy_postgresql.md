---
sidebar_position: 6
---
# Deploy PostgreSQL

1. Navigate to the “postgres” directory.
2. Create the config map by executing the following commands:

```bash
kubectl apply -f 01-configmap.yaml
```

The config map contains the followings configuration which will be used by step 5 to create a default database:

* POSTGRES_DB – the name of the database to create
* POSTGRES_USER – the database user that has access to the database created
* POSTGRES_PASSWORD – the password of the database user

:::note
if you change the configuration values in this config map, you will also need to change the corresponding fields in IAMS-Keycloak deployment manifests file.
:::

3. Create persistent volumes:

```bash
kubectl apply -f 02-pv.yaml
```

This manifests file created a 10G bytes persistent volume backed by Kubernetes cluster host file system under `/data/postgresql directory`.

4. Create persistent volume claims:

```bash
kubectl apply -f 03-pvc.yaml
```

This manifests file claimed a 10G bytes storage from the persistent volume created in step 3.

5. Create Kubernetes deployment

```bash
kubectl apply -f 04-deployment.yaml
```

This manifests file will instruct Kubernetes to deploy a Pod using postgres version 16 image.

6. Create service

```bash
kubectl apply -f 05-service.yaml
```

This manifests file creates a `NodePort` service at port 30432.

You can access the PostgreSQL server using database administration tools, such as pgAdmin, via port 30432 on any of the Kubernetes Nodes.