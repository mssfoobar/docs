---
sidebar_position: 8
---

# Deploy IAMS-Keycloak

1.	Navigate to the “iams-keycloak” directory.

2.	 Edit `00-ghcr-key.yaml` and replace `{ghrc personal access key}` with the actual base64 encoded `dockerconfigjson` string generated in step 3 of [Prepare Personal Access Token](./6_prepare_personal_access_token.md)

3.	Create the GHRC secret
```bash
kubectl apply -f 00-ghcr-key.yaml
```

4.	Change the access permission of `01-create-configmap.sh`
```bash
chmod 755 01-create-configmap.sh
```

5.	Create the Configmap
```bash
./01-create-configmap.sh
```

    This step will create a config map that contains the content of `realm-import.json` file.
    `realm-import.json` file contains the default realm settings required for IAMS to work.
    
6.	Create Service
```bash
kubectl apply -f 02-service.yaml
```
This manifests file creates a ClusterIP services for accessing IAMS-Keycloak pod.

7.	Edit `03-deployment.yaml` and change the value of the `KC_HOSTNAME` environment variable to the actual FQDN of your Kubernetes Cluster.

The example value in the `03-deployment.yaml` is using `nip.io` to create a FQDN to point to the Kubernetes Cluster.
To use `nip.io`, simply replace `10.10.10.100` in the example value with the Ipv4 address of your Kubernetes Cluster.

8.	Create the Deployment
```bash
kubectl apply -f 04-deployment.yaml
```
This manifests file will instruct Kubernetes to deploy a Pod using iams-keycloak image from AGIL Ops Hub container registry.
This manifests defines the following environment variables which instructs how iams-keycloak should be initialized:

| Environment Variable | Description |
| --- | --- |
|DEFAULT_REALM |	The name of the realm to be created.|
|KC_DB |	The database type to be used to store the data. Default value is “postgres”. Change this value if you wish to use other database type.|
|KC_DB_URL_DATABASE	|The name of the database to use. The default value match the POSTGRES_DB value.|
|KC_DB_USERNAME	|The username of the database user. The default value match the POSTGRES_USER value.|
|KC_DB_PASSWORD	|The password of the database user. The default value match the POSTGRES_PASSWORD value |
|KC_DB_URL_HOST	| The host URL of the database. The default value match the name field in 05-service.yaml in the postgres directory. |
|KC_DB_URL_PORT	| The port number to access the database. The default value match the port field in  05-service.yaml in the postgres directory. |
| KC_HTTP_ENABLED |	Enable HTTP. The default value allow iams-keycloak to be access via HTTP. |
| KEYCLOAK_ADMIN | The username of the default administrator. You will use to setup the realm. |
| KEYCLOAK_ADMIN_PASSWORD |	The password of the default administrator. |
|KC_HOSTNAME	| The URL to access the iams-keycloak. This value should match the Host value in 04-ingress.yaml. |
|KC_HOSTNAME_BACKCHANNEL_DYNAMIC |	Whether to allow the backchannel URL to be the same as the frontchannel URL (URL specified in KC_HOSTNAME).  The backchannel is used by IAMS-AAS to communicate with IAMS-Keycloak. This value should set to true. |
|KC_HTTP_PORT	| The HTTP port number to use. The default value match the port field value in 04-ingress.yaml. |
| KC_HEALTH_ENABLED	| Whether to enable the liveness and readiness probe endpoints. This value should set to true. |


9.	Edit `04-ingress.yaml` and change the value of the `Host` field to the same value as `KC_HOSTNAME` in step 7.

10.	Create the ingress
```bash
kubectl apply -f 04-ingress.yaml
```
    This manifests defines an ingress allowing IAMS-Keycloak using the URL defined in `KC_HOSTNAME`.
