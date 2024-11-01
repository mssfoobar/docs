---
sidebar_position: 50
---

Pre-requisite

- Cluster setup with the following (VPC-CNI, Coredns, kube-proxy, eks-pod-identify-agent)
- Ingress
- -Databases (RDS) 

### Apply overall DB
The latest DB package should have deployed the latest DB Schema

### Appandix 
### Sample Ingress (traefik) setup 

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

if need to rollback the helm chart for traefik, use the commnad below:
```
>helm rollback  traefik  <version_number>  -n traefik
```
