---
sidebar_position: 1
sidebar_label: Scope
keywords:
    - features
    - modules
---

# Scope

## Purpose

AGIL Ops Hub is an in-house platform designed to accelerate the development and deployment of enterprise command and
control systems within our organization. Developed by a small, dedicated team, it emphasizes modularity and reusability
to cater to diverse project needs across various teams.

As a large systems integrator, we face challenges in standardizing development tools and technology stacks due to
varying customer requirements often necessitating significant customization. AGIL Ops Hub addresses this by providing a
flexible, yet standardized, foundation with a suite of pre-built, commonly required modules for command and control
systems.

## In Scope

-   **Reference architecture and development framework:**

    AGIL Ops Hub provides a foundational architecture that is flexible enough to accomodate to different ways
    of organizing teams, and can be deployed on many kinds of environments. This is currently achieved via a
    microservice-based approach.

-   **Modular Components:**

    Offering a set of ready-to-deploy modules covering common command and control functionalities.

-   **Development Acceleration:**

    Facilitating rapid development by providing reusable components, standardized development
    practices (e.g. logging), and tooling (like the Web Framework CLI).

-   **Internal Use:**

    Primarily intended for use by internal development teams within the company for building client solutions.

## Out of Scope

-   **End-to-End Client Solutions:**

    AGIL Ops Hub provides the platform and building blocks, but it is not a complete, off-the-shelf command and control
    application. Significant development and customization are expected for each specific project implementation.

-   **Client-Specific Business Logic:**

    While the platform provides core functionalities, the unique business rules, workflows, and domain-specific logic
    for each end-client system must be developed by the project teams.

-   **Hardware Integration:**

    Direct integration with specific hardware components is generally outside the core platform's scope, although
    modules might provide APIs or interfaces to facilitate such integrations.

-   **External Commercial Product:**

    AGIL Ops Hub is currently an internal platform and is not intended for direct sale or licensing as a standalone
    commercial product.

-   **Non-Command & Control Systems:**

    While modules might be adaptable, the platform's primary design focus is on enterprise command and control systems.
    Suitability for drastically different application types is not guaranteed or explicitly supported
