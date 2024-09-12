---
sidebar_position: 1
---

# Introduction

The Web-base template is a frontend foundation built using Svelte, designed to accelerate the development of any frontend module. This template provides a solid starting point for building robust and scalable web applications.

# Key Features

- Public/Private Route Separation: The template includes a built-in routing system that separates protected and public routes, ensuring that sensitive areas of the application are only accessible to authenticated users while providing that control to the user.
- Keycloak Authentication: Web-base integrates with Keycloak, a popular open-source identity and access management solution, to provide secure authentication and authorization as well as multitenancy.
- Basic UI Components: The template includes a set of basic UI components, such as navigation, buttons, and forms, to help you get started with building your frontend module.

## Prerequisite Requirement: Keycloak Setup

This frontend web template requires a functional Keycloak setup prior to deployment. Keycloak is an open-source identity and access management solution that provides authentication and authorization services. If not, please refer to https://mssfoobar.github.io/docs/docs/category/-manual-keycloak-realm-setup

## Environment variables

Please refer to .env-template to fill in the necessary variables and rename it to .env or make a copy and paste it to the root of the repository.

## Running the Application

- Install depencencies: `npm install`

- Either:

  - Development server: `npm run dev`

  - Build
    - Build code: `npm run build`
    - Preview built code: `npm run preview`
