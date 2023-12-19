---
sidebar_position: 20
---

# Update Project Infra Repository

Update the project infrastructure to reference the service infra repository that was created in earlier step.

## Pre-requisites
Set the following environment variables
```bash
# name of new service
# e.g. ucs / rnr / wfe
export MYSERVICE=

# URL to service infra repository
# e.g. https://github.com/mssfoobar/ar2-ucs-infra
export MYSERVICE_REPO_URL=

# path to required manifest from within service infra repository
# e.g. for helm charts: dev/helm
export MYSERVICE_REPO_PATH=

# full path to project's IaC repository root
# e.g. full path to where the project IaC is checked out
export PRJ_IAC_ROOT=

# project namespace
# e.g. soh / hoc / aoc
export PRJ_NAMESPACE=
```

## Setup IaC (Do only ONE of the following)
1. For service infra using Helm Charts (non-reference) (TBD)
Create folder `${PRJ_IAC_ROOT}/helm/${MYSERVICE}`
// TODO

1. For service infra using Helm Charts (referencing external service-infra repository).  
Create manifest for *myservice*:
  ```bash
  cat > ${PRJ_IAC_ROOT}/apps-children/${PRJ_NAMESPACE}-${MYSERVICE}.yaml << EOF
  apiVersion: argoproj.io/v1alpha1
  kind: Application
  metadata:
    name: ${PRJ_NAMESPACE}-${MYSERVICE}-dev
    namespace: argocd
    finalizers:
    - resources-finalizer.argocd.argoproj.io
  spec:
    destination:
      namespace: ${PRJ_NAMESPACE}
      name: in-cluster
    project: appbundle-project-aoh-dev
    source:
      path: ${MYSERVICE_REPO_PATH}
      repoURL: ${MYSERVICE_REPO_URL}
      targetRevision: main
    syncPolicy:
      syncOptions:
      - CreateNamespace=true
      automated:
        prune: true
        allowEmpty: true
        selfHeal: true
  EOF
  ```
1. For service infra using manifest files (TBD).  
Create manifest for *myservice*:
  ```bash
  cat > ${PRJ_IAC_ROOT}/apps-children/${PRJ_NAMESPACE}-${MYSERVICE}.yaml << EOF
  apiVersion: argoproj.io/v1alpha1
  kind: Application
  metadata:
    name: ${PRJ_NAMESPACE}-${MYSERVICE}-dev
    namespace: argocd
    finalizers:
    - resources-finalizer.argocd.argoproj.io
  spec:
    destination:
      namespace: ${PRJ_NAMESPACE}
      name: in-cluster
    project: appbundle-project-aoh-dev
    source:
      path: ${MYSERVICE_REPO_PATH}
      repoURL: ${MYSERVICE_REPO_URL}
      targetRevision: main
    syncPolicy:
      syncOptions:
      - CreateNamespace=true
      automated:
        prune: true
        allowEmpty: true
        selfHeal: true
  EOF
  ```
## Add repository to ArgoCD
Engage administrator for the following procedure.  
From ArgoCD, `Settings > Repositories > Connect Repo`.   
Fill up URL of service infra git repository, and credentials.
![image](./images/add-repo-to-argocd.png)
