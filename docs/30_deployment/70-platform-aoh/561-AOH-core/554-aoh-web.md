
replicaCount: number of replicas to spawn

env:
  normal:
    IAM_URL: keycloak wrl
    IAM_CLIENT_ID: client id name
    GRAPHQL_URL: graphql/hasura url endpoint
    PUBLIC_SECURE_MODE: 1
    PUBLIC_REPLAY_MODE: toggle replay mode 
    NODE_ENV: development # development | preview | staging | production
    ORIGIN: https://web.qa.agilopshub.com
    PUBLIC_DOMAIN: qa.agilopshub.com
    TAG_URL: https://tag.qa.agilopshub.com
    DASH_URL: https://dash.qa.agilopshub.com

  secret:
    - name: ar2-web-secret
      envSecretMap:
        MINIO_ACCESS_KEY: store_access_key
        MINIO_SECRET_KEY: store_secret_key
        IAM_CLIENT_SECRET: iam_client_secret
        MAPBOX_SECRET_ACCESS_TOKEN: mapbox_secret_access_token
        PUBLIC_MAPBOX_ACCESS_TOKEN: public_mapbox_access_token

image:
  pullPolicy: IfNotPresent
  repository: ghcr.io/mssfoobar/aoh-web
  #repository: 891377050246.dkr.ecr.ap-southeast-1.amazonaws.com/ar2-web/ar2-web
  # Overrides the image tag whose default is the chart appVersion.
  tag: develop-5bc5823
  #tag: 0.0.0

imagePullSecrets:
  - name: gh-regcred
nameOverride: ""
fullnameOverride: ""

serviceAccount:
  # Specifies whether a service account should be created
  create: false
  # Annotations to add to the service account
  annotations: {}
  # The name of the service account to use.
  # If not set and create is true, a name is generated using the fullname template
  name: ""

podAnnotations: {}

podSecurityContext:
  {}
  # fsGroup: 2000

securityContext:
  {}
  # capabilities:
  #   drop:
  #   - ALL
  # readOnlyRootFilesystem: true
  # runAsNonRoot: true
  # runAsUser: 1000

service:
  type: ClusterIP
  port: 3000
  liveness:
    path: /api/info/health
  readiness:
    path: /api/info/ready

traefik:
  enabled: false
  name: web-http
  annotations: {}
  entryPoints:
    - web

  routes:
    - match: Host(`web.qa.agilopshub.com`)
      services:
        - name: ar2-web-wfm-qa
          port: 3000
  tls: {}

ingress:
  enabled: false
  className: "traefik"
  annotations: {}
  hosts:
    - host: web.qa.agilopshub.com
      paths:
        - path: /
          pathType: ImplementationSpecific
          backend:
            service:
              name: ar2-web-wfm-qa
              port:
                number: 3000
  tls: []
  #  - secretName: chart-example-tls
  #    hosts:
  #      - chart-example.local

resources: {}
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
#resources:
#  limits:
#    cpu: 200m
#    memory: 128Mi
#  requests:
#    cpu: 200m
#    memory: 128Mi

autoscaling:
#  enabled: true
  enabled: false
  minReplicas: 1
  maxReplicas: 200
  targetCPUUtilizationPercentage: 0
  # targetMemoryUtilizationPercentage: 80

nodeSelector: {}

tolerations: []

affinity: {}

secret: {}

# env:

#   normal:
#     PORT: 3000

command:
  - "node"
  - "build"

containerPort: 3000

revisionHistoryLimit: 3
