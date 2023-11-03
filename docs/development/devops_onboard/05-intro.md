---
sidebar_position: 5
---
# Introduction

This section provides a detailed description of how services are *initially* setup and configured for CI/CD in AGIL Ops Hub.

## Setup Service CI pipeline

The outputs of the CI pipeline which facilitates delivery are:
- building and publishing of the container image to the container registry
- updating the service's infra repository on the updated container image

The .github/workflows folder in the service source-code repository (as created from the template) contains GitHub actions to serve the purposes above. It is designed to :
- build your service into a container image and publish this container image to ghcr.io (GitHub container registry).
- update the service infra repository (which will be setup in the steps following this) with the new container image

:::note
This is for the initial setup only. 
Further customizations, such as the introduction of additional parameters for the service application could require modifications to this github workflow.
:::