---
sidebar_position: 5
---
# Introduction

This section provides a detailed description of how services are *initially* setup and configured for CI/CD in AGIL Ops Hub.

## Setup Service CI pipeline

The outputs of the CI pipeline that facilitates CD are:
- building and publishing of the container image to the container registry
- updating the service's infra repository on the updated container image

The `.github/workflows` folder in the service source-code repository (created from the template) contains GitHub actions to produce these outputs. It is configured to :
- build your service into a container image and publish this container image. The workflow currently publishes to ghcr.io (GitHub container registry).
- update the `Service Infra Repository` (to be setup in the following step) with the new container image.

:::note
This is for the initial setup only. 
Further customizations, such as the introduction of additional parameters for the service application could require modifications to this github workflow.
:::