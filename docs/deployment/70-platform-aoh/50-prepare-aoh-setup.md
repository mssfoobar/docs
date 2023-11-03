---
sidebar_position: 50
---

# Prepare AOH applications

//TODO: This section executes scripts which populate the necessary manifest files which is used in the setup (coming next).


## Prepare manifests in init folder

### Secret management (Vault)
//TODO:

### System
//TODO:

### Storage
//TODO:

### Ingress
//TODO: To automate: Populate Traefik cert with ACM Cert’s arn.

```bash
# Deploy traefik (from init folder)
kubectl create ns traefik
helm repo add traefik https://traefik.github.io/charts
 
cd \ar2-infra\argocd\<yourcluster>\init\traefik\
helm install traefik traefik/traefik -f ./values-xxx-x.yml –namespace traefik
```


# Prepare DB
### Install Database
### Apply overall Hasura Schema