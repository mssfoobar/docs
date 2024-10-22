---
sidebar_position: 2
---

# Deployment

## Docker setup

### Required
- Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
- Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
- Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup

### Running service
Navigate to repository directory

1. Build docker image
```bash
docker build -t <SERVICE_NAME> . -f docker/ian.Dockerfile --build-arg GITHUB_PAT=<GITHUB_PAT>
```
* Note: [GITHUB_PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

2. Copy and remove the `.sample` in repository root directory. Provide the necessary variables inside the `.env` file.

3. Start docker-compose

```bash
docker-compose up -d
```

Now ian service is running with host and port in .env.

## Kubernetes setup

### Pre-step
- Initialize postgres database for ian service.
    - Initialize by docker compose:
        1. Navigate to repository directory
        2. Start postgres

        ```bash
        docker-compose up -d
        ```
        3. Now postgres is running, can connect to postgres via docker network.


### Running service
1. Navigate to `manifest` folder

2. Fullfil and correct variables in `01-configmap.yaml`

3. Create a config map
```bash
kubectl apply -f 01-configmap.yaml
```

4. Create a deployment
```bash
kubectl apply -f 02-deployment.yaml
```

5. Create a service 
```bash
kubectl apply -f 03-service.yaml
```

6. Create an ingress
```bash
kubectl apply -f 04-ingress.yaml
```

7. Update your host into `/etc/hosts`

Now ian service is running with the port in config map, with the host in ingress (default ian.localhost)
