
- replicaCount: number of replicas to spawn

-     IAM_URL: keycloak wrl
-     IAM_CLIENT_ID: client id name
 -    GRAPHQL_URL: graphql/hasura url endpoint
-     PUBLIC_SECURE_MODE: 1
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

-   routes:
-       match: put in your api path

- ingress:
-   hosts:
-     host: put in your api path
-       paths:
-         backend:
-             service:
-               name: put in your service name

# We usually recommend not to specify default resources and to leave this as a conscious
# choice for the user. This also increases chances charts run on environments with little
# resources, such as Minikube. If you do want to specify resources, uncomment the following
# lines, adjust them as necessary, and remove the curly braces after 'resources:'.
# limits:
#   cpu: 100m
#   memory: 128Mi
# requests:
#   cpu: 100m
#   memory: 128Mi

- autoscaling:
-   enabled: set whether you want the autoscaling 
-   minReplicas: minReplicas
-   maxReplicas: maxReplicas
-   targetCPUUtilizationPercentage: targeted CPU Utilisation percentage threshold
- revisionHistoryLimit: 3
