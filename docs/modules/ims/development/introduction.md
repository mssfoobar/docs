---
sidebar_position: 1
sidebar_label: Introduction
---

# Introduction

This backend service serves as the core of our Incident Management System (IMS), empowering organizations to effectively handle incidents. It provides a robust framework for identifying, prioritizing, diagnosing, resolving, and documenting incidents, enabling faster response times, improved communication, and a deeper understanding of operational risks.

## Key Personas

This system is designed to be used by several key personas, each with distinct responsibilities.

1. Configurator: Responsible for defining and managing <a href='Incident/Custom Attributes/attribute'>custom attributes</a> within the system.
2. Incident Owner: Assigned to investigate and resolve incidents, responsible for assigning values to relevant attributes.
3. Incident Reporter: Individuals who initially report incidents within the system.

## API Reference

The IMS API follows a <strong>RESTful</strong> architecture. This means it uses standard web principles:

<strong>Clear URLs:</strong> Resource locations are easily identifiable in the URLs. <br/>
<strong>Data Formats:</strong> The API responds with data in a standard format (JSON). <br/>
<strong>Input: </strong> Data is sent to the API in a common format (form-encoded). <br/>
<strong>Output: </strong>The API responds with data in a standard format (JSON).
