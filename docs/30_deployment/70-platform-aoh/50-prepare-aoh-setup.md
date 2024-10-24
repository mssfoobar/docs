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

if needed to update the traefik, the following command can be used: 
```
helm upgrade  traefik traefik/traefik -f ./<your-values-file>.yml -n traefik
```

### Apply overall Hasura Schema
The latest DB package should have deployed the latest Hasura Schema
