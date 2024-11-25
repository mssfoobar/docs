---
sidebar_position: 50
---

Pre-requisite

- Cluster setup with the following (VPC-CNI, Coredns, kube-proxy, eks-pod-identify-agent)
- Ingress
- Databases (RDS)
- Storage driver installed
- Secrets manager installed for storing env secrets for the applications
- Secrets store for extraction of secrets for AOH application
- Certificate manager (for SSL certs. Please check your vendor for details)

### Apply overal IaC
Uisng kubectl cli and helm cli, apply the IaC within the "Manifest" and "helm" directory.

### apply overal secrets and config maps 
Using kubectl, create secrets and config maps from the"init" folder, and as well as secrets from individual 

### Apply overall DB
Deploy the lastest schema from application as detailed by the application pages

### Create these endpoints for the modules to work in your domain
- admin-iam
- app-room-mgmt
- dash-web
- dash
- evtm
- gis-web
- gis
- hasura
- hasuracookie
- iam
- iams-keycloak
- iams-web
- iams
- ian-web
- ian
- ims
- mail
- ptmgr
- replay-hasura
- replay-hasuracookie
- replay-web
- rnr-debezium
- rnr
- rtus-pms
- rtus-seh
- store
- stunserver
- tag
- tms
- traefik
- ucs-sfu
- ucs-signal
- ucs-stun
- ums
- unh
- web
- wf-admin
- wfd
- wfm

### Appandix 
### Sample Ingress (traefik) setup 

Reference tutorial to setup Sevrets manager in air gapped environment
https://www.youtube.com/watch?v=L6tn1YdMkF8

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
