---
sidebar_position: 60
---

# Setup AOH Applications

This section covers the setup of AOH.
It starts off with ArgoCD as it is used as the main CD mechanism to deploy entire AOH.
ArgoCD deploys:
- Foundation Services
- Application Services


## Install Foundation Services

### Install ArgoCD

```bash
# Create namespace
kubectl create namespace argocd
 
# Deploy
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
 
# Get ArgoCD access credentials
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo

# Forward UI for access
kubectl port-forward --address localhost -n argocd svc/argocd-server 19080:80
```

### log into Argocd
Log into Argocd using the command below:
argocd login <ipaddress:port> --name <name> --password <password>

### Add the necessary repo into ArgoCD
```bash
argocd repo add https://github.com/mssfoobar/<repo> --username <username> --password <git_key> --insecure-skip-server-verification
```

### Create aoh storage class

```bash
cd init/k8s
kubectl apply -f sc—retain.yml
 
cd /ar2-infra/argocd/<clustername>/
# Add root and project manifests (triggers sync)
kubectl apply -f root-app-<clustername>.yml
kubectl apply -f projects/project-<clustername>.yml
```

### Create the following database for postgres if they are not created
 - ar2
 - temporal
 - temporal-visibility

### Init (mass)
folder: `/ar2-infra/argocd/<clustername>/init/`
```bash
# Init general secrets
kubectl apply -f external_secrets/secrets

# Init minio secrets
kubectl apply -f minio

# Deploy Traefik
kubectl create ns traefik
helm repo add traefik https://traefik.github.io/charts
helm install traefik traefik/traefik -f traefik/values-xxx-x.yml –namespace traefik
```

### Prepare Keycloak
//NOTE: requires MINIO, AWS secrets, Keycloak initialisation


Put `stengg.agiirad.keycloak.user.*#*#*#*#*.jar` file into minio bucket `common-iam/public`
Upload it within bucket of `common-iam` while creating a folder named `public`

Log into keycloak  
To be regen in keycloak and update into aws secrets:  
In Keycload, go to Clients,  

For Aoh_rnr:  
Place into aws_secrets:  
`.common-rnr.iam.client_secret : <secrets>`

For Ar2_web:  
Place into aws_secrets:  
Select realms -> ar2-> Clients ->xxxx service -> Credentials  

![kc1](/img/keycloak/keycloak_client_details_credentials.jpg)


### Generate the Client secret and place them into the aws secrets under “iam”

json file (re-11clean.json) to be imported from keycloak console

Under keycloak local host UI, on top right left click drop down and Create Realm .  
Browse and upload the extracted version  of the json file.  
Relam name should be auto-filled as shown below:  

![kc2](/img/keycloak/deploy-keycloak-create-realm-check.jpg)

### Change Client Access setting in Keycloak,
Go to Keycloak -> Client -> Client details -> Access setting -> valid redirect URIs

![kc3](/img/keycloak/deploy-keycloak-client-redirect-check.jpg)

### Check Hasura system endpoints (should already deployed when DB is deployed)
go hasura
system -> endpoint

![h3](/img/deploy-hasura-endpoint-check.jpg)


### Reload Hasura metadata
```bash
hasura --skip-update-check metadata --endpoint <http://localhost:port> --admin-secret <hasura-admin-secret> reload
```

