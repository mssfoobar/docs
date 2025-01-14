---
sidebar_position: 3
---

# Pre-requisites

-   Kubernetes distribution with Traefik Ingress installed
-   Read access to AGIL Ops Hub container registry

# Assumptions

All installation instructions assume that

-   You are using the IAMS “local development”
-   deployment scripts/manifests files.
-   You are using Kubernetes cluster with Traefik Kubernetes Ingress
    -   The installation instructions are tested using K3S, a lightweight Kubernetes distribution that come with Traefik Ingress
        preinstalled.
-   You have the necessary permission right to execute kubectl commands against the Kubernetes cluster.
-   You are executing the following instructions in a Linux environment.
