---
sidebar_position: 50
---

### Ingress

```bash
# Deploy traefik (from init folder)
kubectl create ns traefik
helm repo add traefik https://traefik.github.io/charts
 
cd \ar2-infra\argocd\<yourcluster>\init\traefik\
helm install traefik traefik/traefik -f ./values-xxx-x.yml –namespace traefik
```


# Prepare DB
DB Server should have already been deployed in previous steps found in `Infra platform`. Here we are installing DB schemas and essential data for AOH to function properly.

### Install Database
Check with deployment team for the latest DB package to deploy.

### Apply overall Hasura Schema
The latest DB package will also deploy the latest Hasura Schema
