---
sidebar_position: 3
---

# Deployment 🌎

## Building Images

Building all services in docker-compose file.
```bash
docker-compose build
```

Building a specifc service.
```bash
docker-compose build {service-name}
```

:::warning

It is important to build the image following below naming convention.
Otherwise, pushing to ghcr will fail.

```bash
ghcr.io/NAMESPACE/IMAGE_NAME:tag
```

NAMESPACE must be personal account or organiztion to which the image will be scoped to.

:::

## Pushing to Container Registry

This project used ghcr (github container registry) to store images.

Working with ghcr
1. create a new github personal access token with at least ```write:pacakges``` access.
2. login to ghcr using cli.
```bash
export CR_PAT=YOUR_TOKEN
echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
```
3. push
```bash
docker push ghcr.io/NAMESPACE/IMAGE_NAME:latest
```

For more details, refer to github offical [documents](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

## Deploying Images in Docker Container

```bash
docker-compose up -d --remove-orphans
```

:::info
UCS services use both ```.env``` and ```.toml```.

.env is used for passing secret keys and .toml is for configuration.
:::

Configuring docker-compose file.
- Set env variable
```bash
    environment:
      - MINIO_ACCESS_KEY=${MINIO_ACCESS_KEY}
      - MINIO_SECRET_KEY=${MINIO_SECRET_KEY}
      - POSTGRESQL_USER=${POSTGRESQL_USER}
      - POSTGRESQL_PASSWORD=${POSTGRESQL_PASSWORD}
```
- Set toml config file location
```bash
    volumes:
      - "./configs/docker/app-room-mgmt.toml:/configs/app-room-mgmt.toml"
```

## CI/CD Pipeline

Every commit to main branch will trigger the github action workflow.

Following actions will be triggered by workflow -
- build & push the images into ghcr (github container registry)
- update the image tags in manifest files of staging server

Upon the update of mainfest files, Argo CD (continous delivery tool) will be notified new images' tag to deploy latest. 

Refer to ```publish.yml``` inside ```.github/workflows``` for more details.
