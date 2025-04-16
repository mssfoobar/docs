---
sidebar_position: 3
sidebar_label: Infrastructure
---

# Infrastructure Technologies

In the case of infrastructure, it will always vary widely from project to project. However, we provide a reference
Kubernetes-based infrastructure for deployment, and Docker-based infrastructure for local development.

The technologies here should be viewed as for reference only unless otherwise stated. Individual projects and
deployments usually swap these components out as they have clients tend to have

## Technologist List

The following is a _non-exhaustive_ list of technologies we use in the management of our infrastructure.

-   [Docker](#docker) :
-   [Kubernetes](#kubernetes) :
-   [Traefik](#traefik) : Cloud-native reverse-proxy.
-   [ArgoCD](#argocd) : GitOps

---

## Docker

Docker is an open source container provider. Essentially, we are containerizing and distributing our applications
as containers. We're directly dependent on Docker, but Docker & containers has become synonymous.

We're actually officially using `Podman` but projects are free to purchase and use Docker Desktop if it suites them.

### Why we've chosen Docker

Any OCI (Open Container Initiative) compliant container engine should be sufficient.

### Links

-   [Official Docker Website](https://www.docker.com/)
-   [Official Podman Website](https://podman.io/)
-   [Official Containerd Website](https://containerd.io/)

---

## Kubernetes

In order to support a micro-services architecture, we need to be able to orchestrate the automatic scaling or services.
Our services need to be containerized and monitored, stood up or down depending on their needs, and have their traffic
routed accordingly.

### Why we've chosen Kubernetes

The de-facto standard across the industry for container orchestration is Kubernetes, which is what we've adopted.

### Links

-   [Official Kubernetes Website](https://kubernetes.io/)

---

## Traefik

Traefik is a cloud-native HTTP reverse proxy and load balancer designed for use with microservices.

### Why we've chosen Traefik

We use Traefik as a reverse proxy and load balancer to manage access to cluster services in Kubernetes. It is open
source, well-documented, and is actively maintained and developed by a large community of users and contributors.

### Links

-   [Official Traefik Website](https://doc.traefik.io/traefik/providers/kubernetes-ingress/)

---

## ArgoCD

Declarative continuous delivery GitOps tool with a fully-loaded UI built for Kubernetes.

### Why we've chosen ArgoCD

ArgoCD allows to easily automate deployments using Git repositories as the source of truth.

### Links

-   [Official ArgoCD Website](https://argoproj.github.io/cd/)
-   [What is GitOps?](https://about.gitlab.com/topics/gitops/)
