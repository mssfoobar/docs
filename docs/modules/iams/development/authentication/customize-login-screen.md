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

-   Create a new theme that for all 5 theme types and set it as the default themes using the environment variable `KC_SPI_THEME_DEFAULT` with the value of your theme (i.e., the folder name).
-   Customize only specific pages in specific theme type that you need. For example, AGIL Ops Hub come with a custom theme (`aoh_default`) that only customize the login and select active tenant page.

In most project, you will not need to completely override the default themes and customize selective pages will be sufficient for most projects’ needs.

To create a complete new theme that override all the theme types in default `Keycloak` theme, most practical approach is to copy the content from `base` and `keycloak` folder into your custom theme folder and start customize from there.

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

-   Create a persistent volume using local Kubernetes host file system and mount it to the Keycloak container’s `/opt/keycloak/themes` folder. By doing so, you can directly create theme folders and files in the host file system which will appear in the Keycloak theme folder.
-   Add the following environment variable to Keycloak deployment file to disable theme caching. Doing so, will allow changes in theme files to take effect immediately without having to restart Keycloak pod:
    -   `KC_SPI_THEME_STATIC_MAX_AGE` – `1`
    -   `KC_SPI_THEME_CACHE_THEMES` – `false`
    -   `KC_SPI_THEME_CACHE_TEMPLATES` – `false`

The followings are sample scripts to setup Keycloak in Kubernetes for themes development:

1. Script to create persistent volume. It maps the persistent volume to host file system directory `/data/themes/mytheme` where mytheme is the customize theme.

```jsx title="keycloak-pv.yaml"
apiVersion: v1
kind: PersistentVolume
metadata:
  name: keycloak-volume
    #namespace: ar2
  labels:
    type: local
    app: iams-keycloak
spec:
  storageClassName: manual
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteMany
  hostPath:
    path: /data/themes/mytheme
```

2. Save the script above as yaml file (e.g., `keycloak-pv.yaml`)

3. Execute the following command to create the persistent volume in Kubernetes:

```bash
kubectl apply –f  keycloak-pv.yaml
```

4. Followings are script to create a persistent volume claim:

```jsx title="keycloak-pvc.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: keycloak-volume-claim
  labels:
    app: iams-keycloak
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
```

5. Save the script above as yaml file (e.g., `keycloak-pvc.yaml`)

6. Execute the following command to create the persistent volume claim in Kubernetes:

```bash
kubectl apply –f  keycloak-pvc.yaml
```

7. Followings are script to create keycloak deployment. Text highlighted in red are the changes to the deployment manifests scripts used in [Deploy IAMS-Keycloak](../../quickstart/overview.md).

```jsx title="04-deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: iams-keycloak
  labels:
    app: iams-keycloak
spec:
  replicas: 1
  selector:
    matchLabels:
      app: iams-keycloak
  template:
    metadata:
      labels:
        app: iams-keycloak
    spec:
      imagePullSecrets:
        - name: gh-regcred
      containers:
      - name: iams-keycloak
        imagePullPolicy: Always
        image: ghcr.io/mssfoobar/iams/iams-keycloak:latest-dev
        args:
        - start
        - --import-realm
        env:
        - name: DEFAULT_REALM
          value: "AOH"
        - name: KC_DB
          value: "postgres"
        - name: KC_DB_URL_DATABASE
          value: "keycloak"
        - name: KC_DB_USERNAME
          value: "keycloak"
        - name: KC_DB_PASSWORD
          value: "admin"
        - name: KC_DB_URL_HOST
          value: "postgres"
        - name: KC_DB_URL_PORT
          value: "5432"
        - name: KC_HTTP_ENABLED
          value: "true"
        - name: KEYCLOAK_ADMIN
          value: "admin"
        - name: KEYCLOAK_ADMIN_PASSWORD
          value: "admin"
        - name: KC_HOSTNAME
          value: "http://iams-keycloak.10.10.10.100.nip.io"
        - name: KC_HOSTNAME_BACKCHANNEL_DYNAMIC
          value: "true"
        - name: KC_HTTP_PORT
          value: "80"
        // highlight-start
        - name: KC_SPI_THEME_STATIC_MAX_AGE
          value: "1"
        - name: KC_SPI_THEME_CACHE_THEMES
          value: "false"
        - name: KC_SPI_THEME_CACHE_TEMPLATES
          value: "false"
        // highlight-end
        ports:
        - name: http
          containerPort: 80
        - name: https
          containerPort: 8443
        volumeMounts:
        - name: keycloak-realm-config
          mountPath: /opt/keycloak/data/import/realm-import.json
          subPath: realm-import.json
        // highlight-start
        volumeMounts:
            - mountPath: /opt/keycloak/themes/mytheme
              name: themesdata
        // highlight-end
      volumes:
        - name: keycloak-realm-config
          configMap:
            name: keycloak-realm-config
            items:
              - key: realm-import.json
                path: realm-import.json
      // highlight-start
      volumes:
        - name: themesdata
          persistentVolumeClaim:
            claimName: keycloak-volume-claim
      // highlight-end
```

8. Save the script above as yaml file (e.g., `04-deployment.yaml`)

9. Execute the following command to create the keycloak deployment in Kubernetes:

```bash
kubectl apply –f  04-deployment.yaml
```

Next, you will also need to perform the following to activate the themes:

1. Login to the Web Admin Console and navigate to the realm.

2. Click on Realm settings in the side menu

![realm setting](/img/modules/iams/authentication/realm-settings.png)

3. Click on the `Themes` tab:

![themes](/img/modules/iams/authentication/themes.png)

4. Select you theme from the dropdown menu of the theme type and click on `Save` to activate the themes

![themes](/img/modules/iams/authentication/save.png)

## Production

For production, you can continue to use the persistent volume method as in development but remove the environment variables that disable the caching of themes.

Alternatively, you can also add the themes folder directly into the container images. The steps are as followings:

-   Build a new image based on IAMS Keycloak image and add the custom themes to the image.
-   Tag and push the new image to your container registry
-   Change the deployment manifests file to point to the new image.

The following is a sample docker build script to create a new container image. This script assume that your custom theme is in the mytheme folder.

```jsx title="DockerBuild"
FROM ghcr.io/mssfoobar/iams/iams-keycloak:latest-dev AS builder

WORKDIR /opt/keycloak

COPY --chown=keycloak:keycloak --chmod=744 mytheme /opt/keycloak/themes/mytheme

RUN /opt/keycloak/bin/kc.sh build

FROM ghcr.io/mssfoobar/iams/iams-keycloak:latest-dev

COPY --from=builder /opt/keycloak/ /opt/keycloak/
COPY --from=builder /opt/keycloak/themes/mytheme /opt/keycloak/themes/mytheme

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

Modified the Keycloak deployment manifests file in 2.7 to point to your image.

```bash
…
containers:
      - name: iams-keycloak
        imagePullPolicy: Always
        image: < container registry url>/<image name>:latest
        args:
…
```

Execute the command to deploy the new container:

```bash
kubectl apply -f 04-deployment.yaml
```
