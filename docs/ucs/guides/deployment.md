---
sidebar_position: 4
---

# 🌎 Deployment

## Building Images

Building all services in docker-compose file.

```bash
docker-compose build
```

Building a specifc service.

```bash
docker-compose build {service-name}
```

:::warning

It is important to build the image following below naming convention.
Otherwise, pushing to ghcr will fail.

```bash
ghcr.io/NAMESPACE/IMAGE_NAME:tag
```

NAMESPACE must be personal account or organiztion to which the image will be scoped to.

:::

## Pushing to Container Registry

This project used ghcr (github container registry) to store images.

Working with ghcr

1. create a new github personal access token with at least `write:pacakges` access.
2. login to ghcr using cli.

```bash
export CR_PAT=YOUR_TOKEN
echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
```

3. push

```bash
docker push ghcr.io/NAMESPACE/IMAGE_NAME:latest
```

For more details, refer to github offical [documents](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

## Deploy UCS in Docker Container

```bash
docker-compose up -d --remove-orphans
```

:::info
UCS services use both `.env` and `.toml`.

.env is used for passing secret keys and .toml is for configuration.
:::

Configuring docker-compose file.

-   Set env variable

```bash
    environment:
      - MINIO_ACCESS_KEY=${MINIO_ACCESS_KEY}
      - MINIO_SECRET_KEY=${MINIO_SECRET_KEY}
      - POSTGRESQL_USER=${POSTGRESQL_USER}
      - POSTGRESQL_PASSWORD=${POSTGRESQL_PASSWORD}
```

-   Set toml config file location

```bash
    volumes:
      - "./configs/docker/app-room-mgmt.toml:/configs/app-room-mgmt.toml"
```

## Deploy UCS in kubernetes

### Preparing Manifest Repo

Create a new repository with below directory for UCS services.

Create three yaml files for each UCS service.

```bash
.
└── manifests
    ├── {service-name}-config.yaml
    ├── {service-name}-deployment.yaml
    ├── {service-name}-service.yaml
```

For detail explanation of yaml files, refer to official documents for:

-   [deployment.yaml](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
-   [service.yaml](https://kubernetes.io/docs/concepts/services-networking/service/)
-   [config.yaml](https://kubernetes.io/docs/concepts/configuration/configmap/)

You can use kompose to easily convert from docker-compose.yaml into deployment.yaml & service.yaml.

```bash
kompose convert -f docker-compose.yaml
```

config.yaml is to load ucs config .toml into deployment.

Example config.yaml.

```
apiVersion: v1
kind: ConfigMap
metadata:
  creationTimestamp: null
  name: app-room-mgmt-config
  namespace: common-ucs
data:
  app-room-mgmt.toml: |
    [log]
    level = "info"
    ...
```

And mount the config.yaml in deployment.yaml volumes.

```bash
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      volumes:
        - name: app-room-mgmt-claim0
          configMap:
            name: app-room-mgmt-config

```

### Deploy Using ArgoCD

If ArgoCD is setup for kubernetes deployment, you just have to create entrypoint for ArgoCD to find the manifest repo.

Create a yaml inside the repo where ArgoCD will look for entrypoint.

Make sure to provide the repoURL and path of minifest repo.

```bash
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ucs
  namespace: argocd
  finalizers:
  - resources-finalizer.argocd.argoproj.io
spec:
  destination:
    namespace: common-ucs
    name: in-cluster
  project: appbundle-project-ar2-dev
  source:
    path: manifests
    repoURL: https://github.com/example/ucs
    targetRevision: main
  syncPolicy:
    syncOptions:
    - CreateNamespace=true
    automated:
      prune: true
      allowEmpty: true
      selfHeal: true
```

Check if the Deployment was created using ArgoCD dashboard.

### Deploy Using kubectl

Before you begin, make sure your Kubernetes cluster is up and running. Follow the steps given below to create the above Deployment:

1.  Create the Deployment by running the following command:

```bash
kubectl apply -f https://github.com/example/ucs/manifest/app-room-mgmt-deployment.yaml
```

2.  Run `kubectl get deployments` to check if the Deployment was created.

## CI/CD Pipeline

Every commit to main branch will trigger the github action workflow.

Following actions will be triggered by workflow -

-   build & push the images into ghcr (github container registry)
-   update the image tags in manifest files of staging server

Upon the update of mainfest files, ArgoCD will pickup new images' tag to deploy latest servces.

Refer to `publish.yml` inside `.github/workflows` for more details.
