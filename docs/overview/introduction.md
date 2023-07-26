---
sidebar_position: 1
---

# Introduction 🆕

## Introduction

AgilRAD 2.0 or `AR2` is a platform for developing, testing, and deploying C2 (Command & Control) systems. Out of the
box, we aim to support many different use-cases but mainly with C2 systems in-mind.

**Planned Features**

-   Charting [✔️]
-   Configurable dashboards [✔️]
-   Text, Audio, and Video chat [✔️]
-   Real-time Mapping [✔️]
-   Recording & Playback [✔️]
-   Incident Management
-   Complex Event Processing
-   Simulation

## Philosophy

For the system to be successful, we require buy-in from all stakeholders, including and especially developers. The stack
we have is extremely modern, aimed to please as many parties as possible. Clients' demands based on current technology
trends; which emphasizes secure, scalable, flexible systems, are met with the micro-service architecture. To help with
developers' needs, we focus on provided strong documentation, powerful modern tooling, and automation wherever it makes
sense.

## Technologies

To support the infrastructure to allow our systems to be distributed, scalable, durable, performant,
maintainable, and to allow automated testing, security scanning and alerting, and deployment, many different pieces
need to fit together to support the backbone of the system.

The following is the evolving list of technologies chosen to support development of the **AR2** platform.

# Platform Infrastructure

### Container Management

-   [Kubernetes](https://kubernetes.io/) [✓]

    In order to support a micro-services architecture, we need to be able to orchestrate the automatic scaling or services.
    Our services need to be containerized and monitored, stood up or down depending on their needs, and have their traffic
    routed accordingly. The de-facto standard across the industry for container orchestration is Kubernetes, which is what
    we've adopted.

### Ingress Controller

-   [Traefik Kubernetes Ingress Controller](https://doc.traefik.io/traefik/providers/kubernetes-ingress/) [✓]

    We use Traefik as a reverse proxy and load balancer to manage access to cluster services in Kubernetes. It is open
    source, well-documented, and is actively maintained and developed by a large community of users and contributors.

### Service Mesh

-   [Gloo Mesh](https://www.solo.io/products/gloo-mesh/)

    We plan to use Gloo Mesh for service discovery and observability - this will be required to manage the communication
    between many services in a structured, reliable way.

### Secrets Management

-   No candidate

### Access Control

-   Access Control Tables
-   [Hasura Permissions](https://hasura.io/docs/latest/auth/authorization/permissions/)

### DevSecOps

-   [GitHub Actions](https://github.com/features/actions) [✓]
-   [Terraform](https://www.terraform.io/)

### Monitoring & Logging

-   [Elasticsearch](https://www.elastic.co/)
-   [Fluentd](https://www.fluentd.org/)
-   [Kibana](https://www.elastic.co/kibana/)

-   API Gateway
    -   [NGINX](https://www.nginx.com/)
-   Cloud Migration
    -   No Candidate
-   Visualization
    -   [Grafana](https://grafana.com/) [✓]

### Workflow Engine

[Temporal](https://temporal.io/) [✓]

### Rules Engine

Candidates:

-   [Grule Engine](https://github.com/hyperjumptech/grule-rule-engine)

### Messaging Bus

Candidates:

-   [NATS (Neural Autonomic Transport System)](https://nats.io/)
-   [Apache Kafka](https://kafka.apache.org/)

### Visualization Engine

-   GIS (Geographic Information System)
    Candidates:
    -   [Tile38](https://tile38.com/) - Geospatial Database & Geofencing Server
    -   ???
-   3D
    Candidates:
    -   [Xeokit](https://xeokit.io/)
    -   [ThreeJS](https://threejs.org/)
    -   [Unreal Engine](https://www.unrealengine.com/)
    -   [Unity](https://unity.com/)
-   Mapping
    Candidates:

    -   [OpenLayers](https://openlayers.org/)\*
    -   [Mapbox](https://www.mapbox.com/) - complicated, expensive
    -   [Leaflet](https://leafletjs.com/) - likely not powerful enough, but very easy to use

### Digital Twin

-   Process Simulation
    -   ???
-   Phyiscal Simulation
    -   ???
-   Optimization Engine
    -   Route, Resource and Other Model Optimization
        Candidates:
        -   [OR Tools](https://developers.google.com/optimization)
    -   Process Mining
        -   ???

### Universal Communications

-   Chat, Audio and Video (Web RTC)
    -   [Pion](https://github.com/pion/webrtc) [✓]
-   Email (?)

# Web

### Component Framework

-   [Svelte](https://svelte.dev/) [✓]

### Web Application Framework

-   [Svelte Kit](https://kit.svelte.dev/) [✓]
-   [jointJS](https://www.jointjs.com/)

### User Experience

-   Design & Concept
    Figma
-   Design System
    Extend Material UI?

### Designer Suite

-   Design & Concept
-   Form Designer
-   Workflow Designer
-   Rule Designer
-   Optimizationb Designer
-   Simulation Designer

### Anomaly Detection

-   DA BU (Internal)

### AI/ML Engine

-   DA BU (Internal)

### Fusion Engine

-   DA BU (Internal)

### Templating Engine

### Templating Language

### Database

-   SQL
    -   Non-distributed
        -   [PostgreSQL](https://www.postgresql.org/) [✓]
    -   Distributed
        -   [Yugabyte](https://www.yugabyte.com/)
        -   [CockroachDB](https://www.cockroachlabs.com/)
-   No-SQL
    -   Non-distributed
        -   [MongoDB](https://www.mongodb.com/)
    -   Distributed
        -   [Apache Cassandra](https://cassandra.apache.org/_/index.html)
        -   [MongoDB](https://www.mongodb.com/)

### Documentation

-   [Docusaurus](https://docusaurus.io/)
-   [Open API](https://www.openapis.org/)
