---
sidebar_position: 2
---

# Pre-requisites

// TODO: Create infra repo template (based on ar2-infra)


## Software for installation client:
Aws CLI
Terraform
Kubectl
Helm

## Configuration
AWS account and profile

To set profile:


For windows:
```
setx AWS_PROFILE <clustername>
aws eks update-kubeconfig --region ap-southeast-1  --name <clustername>
```


For linux:
```
export AWS_PROFILE=soh-qa
aws eks update-kubeconfig --region ap-southeast-1  --name <clustername>
```

