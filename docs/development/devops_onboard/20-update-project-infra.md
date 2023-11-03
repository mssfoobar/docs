---
sidebar_position: 20
---

# Update Project Infrastructure

Update the project infrastructure to reference the service infra repository that was created in earlier step.

## Pre-requisites
Set the following environment variables
```bash
# name of new service
# e.g. aoh-ucs
export MYSERVICE=

# URL to service infra repository
# e.g. https://github.com/mssfoobar/ar2-ucs-infra
export MYSERVICE_REPO_URL=

# path to required manifest from within service infra repository
# e.g. argocd/dev2/manifests/
export MYSERVICE_REPO_PATH=

# full path to project's IaC repository root
# e.g. full path to where the project IaC is checked out
export PRJ_IAC_ROOT=

# project namespace
# e.g. soh / hoc / aoc
export PRJ_NAMESPACE=
```

## For service infra using Helm Charts (non-reference)
Create folder `${PRJ_IAC_ROOT}/helm/${MYSERVICE}`
// TODO

## For service infra using Helm Charts (referencing external service-infra repository)
Create manifest for *myservice*:
```bash
cat < EOF > ${PRJ_IAC_ROOT}/apps-children/${MYSERVICE}.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: aoh-${MYSERVICE}-dev
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


## For service infra using manifest files

Create manifest for *myservice*:
```bash
cat < EOF > ${PRJ_IAC_ROOT}/apps-children/${MYSERVICE}.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: aoh-${MYSERVICE}-dev
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