---
sidebar_position: 80
---

# Wrap up

### Point DNS (Route53) to Ingress Controller
//TODO: To automate: fill up entries in Route53 for hosted zone

### Update load balancer with TLS secrets
update and apply `\ar2-infra\argocd\<your cluster>\init\traefik\values-for-aws-wfm.yml`

### Route53 zones
Setup set of shared dns names for the current version of deployment

go to `/ar2-infra/argocd/<clustername>/init/route53`
Replace the following with values from your cluster/environment:
 - <clustername>
 - <hostedzoneid>
 - <dns_name>

excecute the following command to get aws to generate the current route 53 records:

`aws route53 change-resource-record-sets --hosted-zone-id <hosted-zone-id> --change-batch file://<route53_record_file>.json`
