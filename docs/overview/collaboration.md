---
sidebar_position: 2
---
import collabImage from '/img/collab.png';

# Collaboration 🕸️

This article outlines the modes of collaboration for AR2 development.

<div class="centerize"> 
    <Image img={collabImage} width="75%"/>
</div>

AOH shall avail its packages (eg. NPM registries and container images) to developers.

The project shall have the following repositories:
- Infrastructure code repository (Project Infra Repo). This contains the over-arching project deliverable setup.
- **Each module/service** within the project having:
  - source code repository (Dev Src Repo)
  - infrastructure code repository (Dev Infra Repo)
  - container image registry (Dev Container Registry)

The project shall have full control over their product's development and release processes.
The appropriate permissions can be governed via access control to the repositories.

Should the project engage external parties, these parties can have autonomy of their repositories/registries, to be **restricted** to the area demarcated as "External" only. The Project Infra Repo serves as the gatekeeper of the desired artifacts that the project's deliverable will entail.

**NOTE:** external parties shall <u>not</u> have access to non-External entities.
