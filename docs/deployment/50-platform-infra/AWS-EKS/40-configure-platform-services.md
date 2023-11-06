---
sidebar_position: 40
---

# Configure Platform Services

## AWS
// TODO:
### Secrets manager
// TODO: Set up secrets manager outline to be filled in

### Route53 zones
Setup set of shared dns names for the current version of deployment

go to /ar2-infra/argocd/<clustername>/init/route53
excecute the following command to get aws to generate the current route 53 records:

aws route53 change-resource-record-sets --hosted-zone-id <hosted-zone-id> --change-batch file://<route53_record_file>.json

### ACM
Certificate ARN to be used by Ingress configuration.  
To be customised by project/deplpyment



