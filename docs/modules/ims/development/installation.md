---
sidebar_position: 1
sidebar_label: Installation
---

# Deployment

For development purposes, we utilize a repository named _dev_container_ that houses all our modules. This repository facilitates convenient retrieval of specific containers, including the IMS backend container, via Docker. In this section, we'll provide instructions on how to obtain and configure the IMS container, enabling you to run the IMS backend service locally.

## Clone Repository
Please run the following command to clone the ims container repository. 
```bash
git clone https://github.com/mssfoobar/dev-containers.git
```

## Configuration
Before running the container, you can adjust the database schema to meet your specific requirements. As outlined [here](../overview/concepts/incident.mdx), the 'category' and 'status' fields are enums reliant on code tables: `incident_type` and `incident_status`. To establish the permissible values for these enums, modify the `/ims/db-init/schema.sql` file within the `dev-container` repository. This SQL script is executed during the initialization of the 'ims' container within the development environment.


Next, we are to clone our container. We have provided a container that provides you the IMS service together with all the other necessary services in a single docker file for ease of setup.

## Running the container

You may now run the container using the following command

```powershell
docker compose --env-file .env -f ims/compose.yml -f override.yml up -d
```

This will create the container and you may start to use the ims service. In order to access the IMS service for testing, you may use the following URL

```
ims.<insert the value of DEV_DOMAIN here>/v1/incident
```

With this, you may proceed to start your local development!

:::info
If you previously used a different service with a dev container that created an iams container, you'll need to delete the associated volume (.data) file. This ensures the iams service reinitializes correctly with the updated client data.
:::


