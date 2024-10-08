---
sidebar_position: 3
---
# Deployment

## UNH Infrastructure

![Deploy](UNH%20deployment.png)

## Schema Initializing

1. If you have the IAMS setup already, you should have postgres installed on k3s. Let's forward the k3s postgres 
   port so that we can initialize the schema.

```bash
kubectl get pods -A ## here get the postgres pod name and its namespace
kubectl port-forward -n {namespace} pod/{postgres-name} 5432:5432 ## you need to leave the terminal open
```

2. Clone the repository and change your current directory to `schema/postgres`.

```bash
git clone https://github.com/mssfoobar/unh.git
cd unh/schema/postgres
```

3. Assuming your postgres have default username, password & db named `postgres`, you can run the below command to 
   create the schema. If not, please substitute your username, password & db name.

```bash
psql 'postgres://postgres:postgres@localhost:5432/postgres' -c "CREATE SCHEMA aoh_unh"
```

4. And run the `schema.sql` script found inside the directory to initialize the schema.

```bash
psql 'postgres://postgres:postgres@localhost:5432/postgres?options=--search_path%3daoh_unh' -f schema.sql
```

5. You should have a schema named `aoh_unh` in your database. You can close the port-forwarding by pressing `Ctrl + C` 
in the terminal window opened in step 1.

## GHCR

To download the unh image from GHCR, we need to create secret named `gh-regcred.yaml`.

1. Change your current directory to `ghcr`
2. Generate a GitHub access token and make sure it has below permission
   ![ghcr](./ghcr.png)
3. Log in to Docker with your GitHub access token to download workflow-engine images hosted in this repo
```bash
export CR_PAT={your-gh-access-token}
echo $CR_PAT | docker login ghcr.io -u {your-gh-username} --password-stdin
```
4. Print the docker config.json in base64 encoded string
```bash
cat ~/.docker/config.json | base64
```
5. Open the `gh-regcred.yaml` inside `ghcr` folder and update its `.dockerconfig` value with base64 string
6. And run below command to create it
```bash
kubectl apply gh-regcred.yaml
```

## Deploy UNH
 1. Change your directory into your cloned unh repo `deployment` folder.

2. Update the env variables inside the `unh-deployment.yml` file. If you don't know the host name of your service 
   inside k3s, you can look it up by running below command.

```bash
kubectl get svc -A
```

For example, if the postgres service name is `postgres-postgresql` and its namespace is `default`. It hostname will be 
`postgres-postgresql.default`. Except for the `IAMS_KEYCLOAK_HOST` which should be the host name of your 
keycloak ingressRouter. To get keycloak hostname run 

```bash
kubectl get pods -A ## here get the keycloak pod name and its namespace
kubectl describe pod/{keycloak-pod-name} -n {keycloak-namespace}
```

This will list down all the configs of the pod. Find its env variable `KC_HOSTNAME` and use its value to set 
`IAMS_KEYCLOAK_HOST`.

`IAMS_KEYCLOAK_CLIENT_ID` and `IAMS_KEYCLOAK_CLIENT_SECRET` should be the same as the ones you created in 
[prerequisite](./1_prerequisite.md)

3. Now everything is ready to go. Run the below command to deploy the UNH.

```bash
kubectl apply -f .
```
