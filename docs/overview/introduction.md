---
sidebar_position: 1
---

# Introduction 🆕

## Introduction

AGIL Ops Hub or `AOH` is a platform for developing, testing, and deploying C2 (Command & Control) systems. Out of the
box, we aim to support many different use-cases but mainly with C2 systems in-mind.

### Features (Planned)

-   Charting [✔️]
-   Configurable dashboards [✔️]
-   Text, Audio, and Video chat [✔️]
-   Real-time Mapping [✔️]
-   Recording & Playback [✔️]
-   Incident Management
-   Complex Event Processing
-   Simulation

### Designer Suite (Planned)

-   Form Designer [✔️]
-   Workflow Designer
-   Rule Designer
-   Optimization Designer
-   Simulation Designer

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

The following is the evolving list of technologies chosen to support development of the **AOH** platform.

# Platform Infrastructure

:::info

Items in the list that do not have a tick [✓] are prospective candidates that are being evaluated.

:::

### Container Management

-   [Kubernetes](https://kubernetes.io/) [✓]

    In order to support a micro-services architecture, we need to be able to orchestrate the automatic scaling or services.
    Our services need to be containerized and monitored, stood up or down depending on their needs, and have their traffic
    routed accordingly. The de-facto standard across the industry for container orchestration is Kubernetes, which is what
    we've adopted.

-   [Docker](https://www.docker.com/) [✓]

    Container engine.

### Ingress Controller

-   [Traefik Kubernetes Ingress Controller](https://doc.traefik.io/traefik/providers/kubernetes-ingress/) [✓]

    We use Traefik as a reverse proxy and load balancer to manage access to cluster services in Kubernetes. It is open
    source, well-documented, and is actively maintained and developed by a large community of users and contributors.

-   ~~[NGINX](https://docs.nginx.com/nginx-ingress-controller/)~~

### Service Mesh

-   [Gloo Mesh](https://www.solo.io/products/gloo-mesh/)

    We plan to use Gloo Mesh for service discovery and observability - this will be required to manage the communication
    between many services in a structured, reliable way.

### Secrets Management

-   No candidate

### Access Control

-   Access Control Tables [✓]
-   [Hasura Permissions](https://hasura.io/docs/latest/auth/authorization/permissions/) [✓]

### Continuous Integration

-   [GitHub](https://github.com/)

    Source control and collaboration.

-   [GitHub Actions](https://github.com/features/actions) [✓]

    Task runner for automation.

-   [Terraform](https://www.terraform.io/)

    Terraform codifies cloud APIs into declarative configuration files.

### Continuous Deployment

-   [ArgoCD](https://argoproj.github.io/cd/) [✓]

    Declarative continuous delivery with a fully-loaded UI.

### Monitoring & Logging

-   [Kibana](https://www.elastic.co/kibana/) [✓]

    The interface for querying/filtering and visualizing log data.

-   [Elasticsearch](https://www.elastic.co/) [✓]

    For providing queries across logs.

-   [Fluentd](https://www.fluentd.org/) [✓]

    Collects and aggregates logs.

#### Monitoring

-   [Prometheus](https://prometheus.io/docs/introduction/overview/) [✓]

    Monitors and triggers alerts based on metrics such as CPU usage, memory usage, response times, error rates, etc.

#### Visualization

-   [Grafana](https://grafana.com/) [✓]

    Used for visualization of the health of the system (e.g. request rate, CPU usage, etc) - basically the visualization
    of Prometheus.

### Cloud Migration

-   No Candidate

### Workflow Engine

-   [Whirl](https://github.com/mssfoobar/whirl) [✓]

    In-house solution for defining and running workflows.

-   [Temporal](https://temporal.io/) [✓]

    A workflow engine used to orchestrate and ensure durable workflows across a distributed system.

### Rules Engine

-   [Grule Engine](https://github.com/hyperjumptech/grule-rule-engine)

    An open-source rule engine written in Golang.

### Messaging Bus

-   [NATS (Neural Autonomic Transport System)](https://nats.io/) [✓]
-   [Apache Kafka](https://kafka.apache.org/)

### Mapping

-   [Mapbox](https://www.mapbox.com/) [✓]

    A powerful, feature-rich mapping service - it has mobile SDK's, front-end JavaScript SDK's and services that provide
    a lot of features such as navigation and geocoding. Self-hosted option available via `Atlas`.

-   ~~[OpenLayers](https://openlayers.org/)~~
-   ~~[Leaflet](https://leafletjs.com/)~~

#### GIS (Geographic Information System)

-   [Tile38](https://tile38.com/)

    Geospatial Database & Geofencing Server.

-   [TurfJS](https://turfjs.org/)

    Simple geospatial analysis library.

### Digital Twin

#### 3D Visualization

-   [ThreeJS](https://threejs.org/) [✓]
-   [Mapbox](https://www.mapbox.com/) [✓]
-   ~~[Xeokit](https://xeokit.io/)~~
-   ~~[Unreal Engine](https://www.unrealengine.com/)~~
-   ~~[Unity](https://unity.com/)~~

#### Process Simulation

-   No candidate

#### Phyiscal Simulation

-   No candidate

#### Optimization Engine

##### Route, Resource and Other Model Optimization

-   [OR Tools](https://developers.google.com/optimization)

##### Process Mining

-   No candidate

### Universal Communications

#### Chat, Audio and Video (Web RTC)

-   [Pion](https://github.com/pion/webrtc) [✓]

#### Email & SMS

-   No candidate

#### Notifications

-   [Novu](https://novu.co/)

# Web

### Component Framework

-   [Svelte](/ar2-docs/docs/web/technologies/svelte_sveltekit) [✓]

    Component framework for JavaScript - compiles code written in `Svelte` (similar to JSX) into pure JavaScript.

-   ~~[React](https://react.dev/)~~

### Web Application Framework

-   [Svelte Kit](/ar2-docs/docs/web/technologies/svelte_sveltekit) [✓]

    Web application framework with first-class support for Svelte - handles routing, server-side rendering, hybrid-rendering,
    client-side routing, etc.

#### CSS / Styling

-   [TailwindCSS](/ar2-docs/docs/web/technologies/tailwind) [✓]

    A CSS design system with extensive tooling.

#### Drawing

-   [JointJS](https://www.jointjs.com/) [✓]

    A powerful JavaScript diagramming library.

#### Charts

-   [Apache ECharts](/ar2-docs/docs/web/technologies/echarts) [✓]

    A powerful open-source charting library.

### Iconography

-   [Font Awesome](http://localhost:3030/ar2-docs/docs/web/technologies/fontawesome) [✓]

    An extensive icon library with support for SVG's, layering and transformations, animations and is extensible.

### Graph QL

-   [urql](/ar2-docs/docs/web/technologies/urql) [✓]

    Extensible GraphQL client with support for caching, retries, deduplication, subscriptions and more.

### User Experience

#### Design & Concept

-   [Figma](https://www.figma.com/) [✓]

    De-facto standard for UI design and collaboration.

#### Design System

-   Bespoke, inspired by Material UI. We are currently lacking the resources to build and maintain a full-fledged
    design system. Please consider volunteering yourself (full-time) if you would like to participate.

### Anomaly Detection

-   DA BU (Internal)

### AI/ML Engine

-   DA BU (Internal)

### Fusion Engine

-   DA BU (Internal)

### Templating Engine

Explored and dropped

### Templating Language

Explored and dropped

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

### Testing

-   [Playwright](/ar2-docs/docs/web/technologies/playwright) [✓]

    End-to-end/integration testing framework.

-   [Allure Framework] [✓]

    Reporting tool for tests.

### Documentation

-   [Docusaurus](https://docusaurus.io/) [✓]

    Open-source site generator based on markdown files.

-   [Open API](https://www.openapis.org/)

    Currently probably the only API specification standard that's widely adopted.
