---
sidebar_position: 20
---

# Pre-requisites

// TODO: Create infra repo template (based on ar2-infra)

Firewall requirement:

Name	                inbound/outbound     Port	  type
APPS/Web	            (inbound)            443	  TCP
APPS/Web/cloudwatch	  (outbound)           443	  TCP
APPS	                (outbound)           3478	  UDP
APPS	                (outbound)           5000	  UDP
APPS	                (outbound)           3478	  TCP
Cloudwatch	          (outbound)           443	  TCP
Stun server	          (inbound)            3478	  UDP
SFU TCP	              (inbound)            3478	  TCP
SFU UDP	              (inbound)            5000	  UDP
Database	            (outbound)           5432	  TCP


## Software for installation client:
- Aws CLI
- Terraform
- Kubectl
- Helm

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
export AWS_PROFILE=<clustername>
aws eks update-kubeconfig --region ap-southeast-1  --name <clustername>
```

