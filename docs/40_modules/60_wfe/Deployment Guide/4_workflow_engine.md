---
sidebar_position: 5
---
# Workflow Engine Deployment

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
git clone https://github.com/mssfoobar/wfe.git
cd ar2-wfe/schema/postgres
```

4. Create a new schema in Postgres. Replace `{password}` with your postgres password in step 1.
```bash
psql 'postgres://postgres:{password}@localhost:5432/postgres' -c "CREATE SCHEMA aoh_wfe"
```

4. And run the `schema.sql` script found inside the directory to initialize the schema.
```bash
psql 'postgres://postgres:{password}@localhost:5432/postgres?options=--search_path%3daoh_wfe' -f schema.sql
```

5. You should have a schema named `aoh_wfe` in your database. You can close the port-forwarding by pressing `Ctrl + C`
   in the terminal window opened in step 1.

## GHCR

To download the unh image from GHCR, we need to create secret named `gh-regcred.yaml`.

1. Generate a GitHub access token and make sure it has below permission
   ![ghcr](./ghcr.png)

2. Log in to Docker with your GitHub access token to download workflow-engine images hosted in this repo
```bash
export CR_PAT={your-gh-access-token}
echo $CR_PAT | docker login ghcr.io -u {your-gh-username} --password-stdin
```

3. Print the docker config.json in base64 encoded string
```bash
cat ~/.docker/config.json | base64
```

4. Change your directory into your cloned `https://github.com/mssfoobar/wfe.git` repo `deployment` folder. Open 
   the`gh-regcred.yaml` inside `ghcr` folder and update its `.dockerconfig` value with base64 string

5. And run below command to create it
```bash
kubectl apply gh-regcred.yaml
```

## Deploy WFE modules

1. Change your directory into your cloned `https://github.com/mssfoobar/wfe.git` repo `deployments/kubernetes` folder.

2. Update the env variables inside the `wfe-deployment.yml`, `wfm-deployment.yml`, `wfw-deployment.yml` & 
   `wfd-deployment.yml` files.

3. Now modules are ready to be deployed. Run the below command to deploy the WFE modules.
```bash
kubectl apply -f .
```

4. Check the status of the deployment by running
```bash
kubectl get deployments -A
```

5. Once the deployment is ready, WFM http server is now serving at `wfm.127.0.0.1.nip.io` and WFD web application is 
now serving at `wfd.127.0.0.1.nip.io`.
