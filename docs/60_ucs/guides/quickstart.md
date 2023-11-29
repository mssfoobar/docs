---
sidebar_position: 1
---

# 🚀 Quickstart

## Pre-requisites

Required:

- [Docker](https://www.docker.com/)
- [K3s](https://k3s.io/)

## Running Locally

For configuration of the forked services, please refer to official documentations from the referenced repositories:-

- [ION](https://github.com/ionorg/ion) - ION backend services: SFU, signal, app-room, islb
- [ION-app-web](https://github.com/ionorg/ion-app-web)

### Docker setup:-

1. Install [Docker](https://docs.docker.com/desktop/install/ubuntu/)
2. Install [Docker-Compose](https://docs.docker.com/compose/install/linux/)
3. Docker [Post-installation](https://docs.docker.com/engine/install/linux-postinstall/) setup
4. Clone

```bash
git clone https://github.com/mssfoobar/VidConf.git
```

5. Change "localhost" to hostname or domain name in file `VidConf/VidConf-ion-app-web/Caddyfile`
6. Update the postgresql/minio/systemUserId configuration for the following:-
   - `./VidConf-ion/configs/docker/app-room.toml`
   - `./VidConf-ion/configs/docker/app-room-mgmt.toml`
   - `./VidConf-ion/configs/docker/app-room-sentry.toml`
   - `./VidConf-ion/configs/docker/app-room-recorder.toml`
   - `./VidConf-ion/configs/docker/app-room-playback.toml`
7. Setup

```bash
 cd VidConf/
 ./scripts/setupDocker.sh
```

8. Verify
9. Chat: https://localhost:9090
10. Stop containers

```bash
 ./scripts/stopDocker.sh
```

11. Start containers

```bash
 ./scripts/startDocker.sh
```

12. Cleanup Docker

```bash
 ./scripts/cleanupDocker.sh
```

### K3s setup:-

1. Install K3s
2. Install krelay for UDP port forwarding
3. Clone project

```bash
 git clone https://github.com/mssfoobar/VidConf.git
```

4. Configure IP address - Update local IP address inside file: web-caddy-file---configmap.yaml
5. Setup

```bash
 ./scripts/setupK3s.sh
 k3s kubectl relay --address 0.0.0.0 deployment/sfu 5000:5000
 k3s kubectl port-forward deployment/signal 5551:5551 --address='0.0.0.0'
 k3s kubectl port-forward deployment/sfu 3478:3478 --address='0.0.0.0'
 k3s kubectl port-forward deployment/nats 4222:4222 --address='0.0.0.0'
 k3s kubectl port-forward deployment/redis 6379:6379 --address='0.0.0.0'
 k3s kubectl port-forward deployment/web 9090:9090 --address='0.0.0.0'
```

7. Verify Chat: http://local_ip_address:9090
