---
sidebar_position: 1
---

# Overview

Workflow Engine (WFE) is an eSOP system developed for AOH projects.
At its core, WFE uses [Temporal](https://temporal.io) (workflow orchestration platform) to orchestrate the business 
process model as per [BPMN 2.0 spec](https://www.omg.org/spec/BPMN/2.0/About-BPMN).

### Features
-   Workflow orchestration
-   Web application to design business processes model
-   Developer SDK for customized business process (activity) development
-   APIs for managing workflow execution

### Submodules
Workflow Engine consists of the following submodules:
-   Workflow Engine (WFE) - Core Engine responsible for orchestration of workflow and activity execution
-   Workflow Manager (WFM) - Provides APIs to create and manage workflow templates and workflow executions
-   Workflow Worker (WFW) - An out-of-the-box generic activity worker service
-   Workflow Designer (WFD) - Web application for creating and editing workflow templates