---
sidebar_position: 3
---
# Deployment

## UNH Infrastructure

![Deploy](UNH%20deployment.png)

## Postgres

Install postgres using bitnami helm chart.
```bash
helm install {release-name} oci://registry-1.docker.io/bitnamicharts/postgresql
```

## Schema Initializing

1. Now that your postgres is up and running, we need to initialize the schema. First get the postgres password.
```bash
 kubectl get secret --namespace default postgres-release-postgresql -o jsonpath="{.data.postgres-password}" | base64 -d
```

2. Port forward your local port to postgres port.
```bash
kubectl port-forward --namespace default svc/postgres-release-postgresql 5432:5432
```

3. Clone the repository and change your current directory to `schema/postgres`.
```bash
git clone https://github.com/mssfoobar/unh.git
cd unh/schema/postgres
```

4. Create a new schema in Postgres. Replace `{password}` with your postgres password in step 1.
```bash
psql 'postgres://postgres:{password}@localhost:5432/postgres' -c "CREATE SCHEMA aoh_unh"
```

4. And run the `schema.sql` script found inside the directory to initialize the schema.
```bash
psql 'postgres://postgres:{password}@localhost:5432/postgres?options=--search_path%3daoh_unh' -f schema.sql
```

5. You should have a schema named `aoh_unh` in your database. You can close the port-forwarding by pressing `Ctrl + C`
   in the terminal window opened in step 1.

## GHCR

To download the unh image from GHCR, we need to create secret named `gh-regcred.yaml`.

1. Change your current directory to `ghcr`
2. Generate a GitHub access token and make sure it has below permission
   ![ghcr](./ghcr.png)
3. Log in to Docker with your GitHub access token
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
kubectl apply -f gh-regcred.yaml
```

## Deploy UNH
1. Change your directory into your cloned unh repo `deployments` folder.

2. Update the env variables inside the `unh-deployment.yml` file. If you don't know the host name of your service 
   inside k3s, you can look it up by running below command.

```bash
kubectl get svc -A
```

For example, if the postgres service name is `postgres-postgresql` and its namespace is `default`. It's hostname will be 
`postgres-postgresql.default`. 

Except for the `IAMS_KEYCLOAK_HOST` which should be the host name of your 
keycloak ingressRouter. To get keycloak hostname run 

```bash
kubectl get pods -A ## here get the keycloak pod name and its namespace
kubectl describe pod/{keycloak-pod-name} -n {keycloak-namespace}
```

This will list down all the configs of the pod. Find its env variable `KC_HOSTNAME` and use its value to set 
`IAMS_KEYCLOAK_HOST`.

`IAMS_KEYCLOAK_CLIENT_ID` and `IAMS_KEYCLOAK_CLIENT_SECRET` should be the same as the ones you created in 
[prerequisite](./1_prerequisite.md)

3. Generate AES-256 hex encoded string by running below command and set it for `AES_256_KEY` env variable

```bash
openssl rand -hex 32
```

4. Now everything is ready to go. Run the below command to deploy the UNH.

```bash
kubectl apply -f .
```

4. Check the status of the deployment by running

```bash
kubectl get deployments -A
```

5. Once the deployment is ready, UNH server is now serving at `unh.127.0.0.1.nip.io`.