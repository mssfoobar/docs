---
sidebar_position: 556
---



- replicaCount: number of replicas to spawn

-     IAM_URL: keycloak wrl
-     IAM_CLIENT_ID: client id name
 -    GRAPHQL_URL: graphql/hasura url endpoint
-     PUBLIC_SECURE_MODE:  SSL mode
-     PUBLIC_REPLAY_MODE: toggle replay mode 
-     NODE_ENV: development # development | preview | staging | production
-     ORIGIN: DNS for origin
-     PUBLIC_DOMAIN: domain name for cookies
-     TAG_URL: tag url  endpoint
-     DASH_URL: dash url endpoint


-        MINIO_ACCESS_KEY: s3 bucket access_key
-        MINIO_SECRET_KEY: s3 bucket secret_key
-        IAM_CLIENT_SECRET: iam/keycloak secret key
-        MAPBOX_SECRET_ACCESS_TOKEN: mapbox secret access token
-        PUBLIC_MAPBOX_ACCESS_TOKEN: public mapbox access token

-  pullPolicy: image pull policy when pods restarts
-  repository: image repo uri
-  tag: image tag
 
- imagePullSecrets: key for pulling images (if needed)
- nameOverride: name override for helm chart to 
- fullnameOverride: name override for helm chart
- create: Specifies whether a service account should be created
  
- annotations: Annotations to add to the service account
- name: The name of the service account to use. If not set and create is true, a name is generated using the fullname template

- traefik:

-   routes-> match: put in your api path

- traefik -> ingress -> hosts: put in your api path
- traefik -> ingress -> paths-> backend -> service-> name: put in your service name

- adjust CPU and memory as necessary, 

- autoscaling:
-   enabled: set whether you want the autoscaling 
-   minReplicas: minReplicas
-   maxReplicas: maxReplicas
-   targetCPUUtilizationPercentage: targeted CPU Utilisation percentage threshold
- revisionHistoryLimit: revision history of the deployment you want to keep
