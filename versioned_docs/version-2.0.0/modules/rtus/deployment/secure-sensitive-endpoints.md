---
sidebar_position: 2
sidebar_label: Secure Sensitive Endpoints
---

#	Secure Sensitive Endpoints

The deployment manifests files in `dev-container` section expose all endpoints to facilitate development 
but should be disabled for production deployment.

**RTUS-PMS** : the REST APIs are intended to be invoked by backend services and not expose outside of Kubernetes. 
The Ingress Controller should not be created in production. The endpoints are: 

`{{server}}/admin/*`

`{{server}}/tenants/*`

RTUS has a dependency on **IAMS** and require **IAMS** to be deployed to work. 

For considerations to secure IAMS, please refer to [IAMS Production](../../iams/deployment/overview.md).

