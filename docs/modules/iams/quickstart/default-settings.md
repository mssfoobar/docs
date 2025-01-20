---
sidebar_position: 3
---

# Default Settings

The `Docker Compose` configuration files in the `dev-container repository` will initialize IAMS with the following default values:

## Keycloak Admin Account

`Keycloak` bootstrap admin account is created using the username and password that you have specified for the `DEV_USER` and `DEV_PASSWORD` in the `.env` 
file respectively.

Refer to [Set up the environment variables](../../get-started/local-development.mdx#2-set-up-the-environment-variables) for more information on configuring
the environment variables.

The Keycloak Admin Account is actually created by passing those values to Keycloak as environment variables, `KC_BOOTSTRAP_ADMIN_USERNAME` and
`KC_BOOTSTRAP_ADMIN_PASSWORD` in the `iams-keycloak` container.
Keycloak will use this value to create the bootstrap admin account during the initial startup. 

See https://www.keycloak.org/server/configuration#_creating_the_initial_admin_user for more information.



## AOH Realm System Admin Account

The `dev-container` will initialize IAMS with a default realm named `aoh` and create a default system admin under that realm using the same
username and password as specified for the Keycloak Admin Account.

The System Admin Account is created by the `iams-init` container which run a postman collection scripts, invoking `Keycloak` and `IAMS AAS` to
create those initial settings.

## Default URL

The default URLs for IAMS is as follows

- IAMS-Web Admin Console: http://iams-web.127.0.0.1.nip.io
- IAMS-Keycloak Admin Console: http://iams-keycloak.127.0.0.1.nip.io
- IAMS-AAS REST endpoints: http://iams-aas.127.0.0.1.nip.io

Note that the default domain `127.0.0.1.nip.io` will resolve to local loopback IP which mean you will not be able to access those URLs from another machine.

If you wish to access IAMS URLs from another machine, you will need to configure the `DEV_DOMAIN` environment variable in the `.env` file with `nip.io` 
URL that will resolve to your machine external network IP. 

For example, if your machine network IP is `192.168.6.28`, then you will need to change `DEV_DOMAIN` to `192.168.6.28.nip.io`.
Then IAMS will be accessible from another machine in your local network.  

## Default Realm

The `dev-container` will initialize IAMS with a default realm named `aoh`. Note that `realm` name is case-sensitive.

If you wish to change the default realm name to something else, you can do so by doing a search and replace on all entries of `aoh`, except the `name` at line 1, 
in the `/iams/compose.yml` file. 

## Default Tenant

The `dev-container` will initialize IAMS with a default tenant in `aoh` realm named `development`.

The tenant is created by the `iams-init` container using postman collection file. To change the name, you will need to modified the file `/iams/init/iams-aas-init.postman_collection.json`.



