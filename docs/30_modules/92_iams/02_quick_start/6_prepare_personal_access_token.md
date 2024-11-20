---
sidebar_position: 7
---

# Prepare Personal Access Token

Personal Access Token is required to access AGIL Ops Hub Container Registry to download the container image.

You can skip this steps if you are using other means to deploy IAMS-Keycloak and IAMS-AAS images.

1. Refer to the following link to create a personal access token:

[https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)

2. Once you have generated and copy the access token, execute the following command to base64 encode your access token:

```bash
echo -n "<username>:<personal access token>" | base64
```

    where `<username>` is your GitHub username and `<personal access token>` is the token copy from step 1.


3.	Next you will need to compose a new dockerconfigjson string and base64 encode it using the following command:

```bash
echo -n  '{"auths":{"ghcr.io":{"auth":"<encoded personal access token>"}}}' | base64
```

    where `<encoded personal access token>` is the output string obtained in step 2.

