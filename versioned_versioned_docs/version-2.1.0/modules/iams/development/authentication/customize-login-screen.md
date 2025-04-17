---
sidebar_position: 4
---

# Customize Login Screen

Keycloak provides theme support which allows us to customize the look and feel of end-user facing pages so they can be integrated with your applications.
This section provides high level instruction on how to approach the customization. For more detail information, please refer to Keycloak official documentation at the following link:
[https://www.keycloak.org/docs/25.0.4/server_development/#\_themes](https://www.keycloak.org/docs/25.0.4/server_development/#_themes)

Keycloak come with default themes. You can access the source of the default themes at Keycloak github repo:

[https://github.com/keycloak/keycloak/tree/main/themes/src/main/resources/theme](https://github.com/keycloak/keycloak/tree/main/themes/src/main/resources/theme)

This folder contains the following subfolder:

-   base – is a skeletal theme that contains HTML templates and message bundles; all themes, including custom ones, generally inherit from it
-   keycloak – contains images and stylesheets for beautifying pages; if we don’t provide a custom theme, this is the one used by default
-   keycloak.v2 – contains react based theme; part of new Admin Console; old console is deprecated and will be removed in Keycloak 21.

It is not recommended to modify the existing themes directly. Instead, we should create a new theme that extends the default themes.
To create a new customized theme, we’ll need to add a new folder under the following folder in the Keycloak container:

```bash
/opt/keycloak/themes
```

The folder name will be the name of your custom theme

Keycloak support the following types of themes:

-   welcome – the default landing page
-   login – for login, OTP, grant, registration, and forgot password pages
-   account – for user account management pages
-   admin – for Keycloak admin console
-   email – for emails that are sent by the server

Depending on project needs, you can

-   Create a new theme that for all 5 theme types and set it as the default themes using the environment variable `KC_SPI_THEME_DEFAULT` with the value of 
    your theme (i.e., the folder name).
-   Customize only specific pages in specific theme type that you need. For example, AGIL Ops Hub come with a custom theme (`aoh_default`) that only customize 
    the login and select active tenant page.

In most project, you will not need to completely override the default themes and customize selective pages will be sufficient for most projects’ needs.

To create a complete new theme that override all the theme types in default `Keycloak` theme, most practical approach is to copy the content from `base` and `keycloak` 
folder into your custom theme folder and start customize from there.

If you intend to only customize few pages in the specific theme type, then pragmatic approach would be to:

-   Create subfolder in your custom theme folder that represent the theme type you want to customize (e.g., login)
-   Create `theme.properties` file in the subfolder.
-   Copy the specific pages that you want to customize from the keycloak default themes into your subfolder.

Example content for _theme.properties_ file:

```jsx title="theme.properties"
parent=base
import=common/keycloak
styles=css/login.css
```

## Development

During theme development, you might want to perform the following setup to simply development:

-   Modify the `Docker Compose` configuration file to mount the local directory as a volume to the Keycloak container’s `/opt/keycloak/themes` folder. 
    By doing so, you can directly create theme folders and files in the host file system which will appear in the Keycloak theme folder.

-   Add the following environment variable to Keycloak deployment file to disable theme caching. Doing so, will allow changes in theme files to take effect 
    immediately without having to restart Keycloak pod:
    -   `KC_SPI_THEME_STATIC_MAX_AGE` – `1`
    -   `KC_SPI_THEME_CACHE_THEMES` – `false`
    -   `KC_SPI_THEME_CACHE_TEMPLATES` – `false`

The followings are sample modifications to the `/iams/compose.yml` file in `dev-container` to mount the local directory to the Keycloak container for themes development:

```jsx title="/iams/compose.yml"
name: aoh

include:
    - ../infra/compose.yml

services:
    iams-db:
        image: postgres:17.0
// highlight-start
...
// highlight-end
        volumes:
            - iams-db-volume:/var/lib/postgresql/data
    iams-keycloak:
        labels:
            - traefik.enable=true
            - traefik.http.routers.iams-keycloak.rule=Host(`iams-keycloak.${DEV_DOMAIN}`)
            - traefik.http.routers.iams-keycloak.middlewares=permissive-headers
            - traefik.http.services.iams-keycloak.loadBalancer.server.port=8080
        image: ghcr.io/mssfoobar/iams/iams-keycloak:latest-dev
        command: -v start --import-realm
        environment:
            - KC_BOOTSTRAP_ADMIN_USERNAME=${DEV_USER}
            - KC_BOOTSTRAP_ADMIN_PASSWORD=${DEV_PASSWORD}
            - KC_DB=postgres
            - KC_DB_URL_DATABASE=iams
            - KC_DB_USERNAME=${DEV_USER}
            - KC_DB_PASSWORD=${DEV_PASSWORD}
            - KC_DB_URL_HOST=iams-db # use internal address / docker network alias
            - KC_DB_URL_PORT=5432
            - KC_HTTP_ENABLED=true
            - KC_HOSTNAME=http://iams-keycloak.${DEV_DOMAIN}
            - KC_HOSTNAME_BACKCHANNEL_DYNAMIC=true
            - KC_HTTP_PORT=8080
            - KC_HEALTH_ENABLED=true
            - KC_PROXY_HEADERS=xforwarded
            - PROXY_ADDRESS_FORWARDING=true
            - DEFAULT_REALM=aoh # to override realm-import.json file values with env var
            - DEV_DOMAIN=${DEV_DOMAIN} # to override realm-import.json file values with env var
            - DEV_USER=${DEV_USER} # to override realm-import.json file values with env var
            - DEV_PASSWORD=${DEV_PASSWORD} # to override realm-import.json file values with env var
// highlight-start
            - KC_SPI_THEME_STATIC_MAX_AGE=1
            - KC_SPI_THEME_CACHE_THEMES=false
            - KC_SPI_THEME_CACHE_TEMPLATES=false            
// highlight-end
        healthcheck:
            test: "exec 3<>/dev/tcp/localhost/9000; echo -e 'GET /health/ready HTTP/1.1\r\nHost: localhost\r\nConnection: close\r\n\r\n' >&3;cat <&3 | grep -q '\"status\": \"UP\"' && exit 0 || exit 1"
            interval: 10s
            timeout: 5s
            retries: 30 # keycloak might take a long time to initialize
        volumes:
            - ../iams/keycloak:/opt/keycloak/data/import
// highlight-start
            - ../iams/keycloak/themes/mytheme:/opt/keycloak/themes/mytheme
// highlight-end
        expose:
            - 8080
        deploy:
            replicas: 1
            restart_policy:
                condition: on-failure
                delay: 3s
        depends_on:
            iams-db:
                condition: service_started
    iams-aas:
        labels:
            - traefik.enable=true
// highlight-start
...
// highlight-end
        deploy:
            replicas: 1
            restart_policy:
                condition: on-failure
                delay: 20s
volumes:
    iams-db-volume:

```


Next, you will also need to perform the following to activate the themes:

1. Login to the Keycloak Web Admin Console and navigate to the realm.

2. Click on Realm settings in the side menu

![realm setting](/img/modules/iams/development/authentication/login-screen/realm-settings.png)

3. Click on the `Themes` tab:

![themes](/img/modules/iams/development/authentication/login-screen/themes.png)

4. Select you theme from the dropdown menu of the theme type and click on `Save` to activate the themes

![themes](/img/modules/iams/development/authentication/login-screen/save.png)


## Production

For production, it is recommended to add the themes folder directly into the container images. 

The steps are as followings:

-   Build a new image based on IAMS Keycloak image and add the custom themes to the image.
-   Tag and push the new image to your container registry
-   Change the deployment manifests file to point to the new image.

The following is a sample docker build script to create a new container image. This script assume that your custom theme is in the `mytheme` folder.

```jsx title="DockerBuild"
FROM ghcr.io/mssfoobar/iams/iams-keycloak:latest AS builder

WORKDIR /opt/keycloak

COPY --chown=keycloak:keycloak --chmod=755 mytheme /opt/keycloak/themes/mytheme

RUN /opt/keycloak/bin/kc.sh build

FROM ghcr.io/mssfoobar/iams/iams-keycloak:latest

COPY --from=builder /opt/keycloak/ /opt/keycloak/
COPY --from=builder --chmod=755 /opt/keycloak/themes/mytheme /opt/keycloak/themes/mytheme

USER keycloak

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
```

Save the content as Dockerfile and execute the following command to build the image:

```bash
docker build –t <container registry url>/<image name> .
```

where `<container registry url>` should be replace with the actual URL to your container registry and `<image name>` is the name of your container image.

Next, execute the following command to push the newly created image to your container registry:

```bash
docker push <container registry url>/<image name>:latest
```

Modified the your Keycloak deployment manifests file to your image.

