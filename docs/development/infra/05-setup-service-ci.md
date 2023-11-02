---
sidebar_position: 5
---
# Setup Service CI pipeline

The .github/workflows folder contains GitHub actions to automatically build your service into a container image and deploy this container image to ghcr.io (GitHub container registry).

The outputs of the CI pipeline which facilitates delivery are:
- building and publishing of the container image to the container registry
- updating the service's infra repository on the updated container image
