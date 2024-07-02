---
sidebar_position: 80
---

# Wrap up

### Update load balancer with TLS secrets
update and apply `\ar2-infra\argocd\<your cluster>\init\traefik\values-for-aws-wfm.yml`

### Route53 zones
Setup set of shared dns names for the current version of deployment

go to `/ar2-infra/argocd/<clustername>/init/route53`
Replace the following with values from your cluster/environment:
1. `<clustername>`
1. `<hostedzoneid>`
1. `<dns_name>`

Excecute the following command to get aws to generate the current route 53 records:

`aws route53 change-resource-record-sets --hosted-zone-id <hosted-zone-id> --change-batch file://<route53_record_file>.json`

NOTE: the easiest way to obtain the "hostedzoneid" is to go to the hosted zone alias create record page,  Select Route traffic to " Alias to Network Load Balancer", `<your region>`, `<your load balancer>`, and the page will show the "Alias hosted zone ID", which is the `<hostedzoneid>` you want to input.

### Main Database configuration guide
Customise the follow files to configure the Main Database to use any database service of your choosing

NOTE:  `<your-cluster-name> ` is your cluster name
-  `\ar2-infra\argocd\<your-cluster-name>\apps-children\temporalio.yml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\aoh-sys\timekeeper-deployment.yml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-ims\imsmgr-deployment.yml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-rnr\debezium-deployment.yml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-rnr\periodic-backup-raw-cronjob.yml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-rnr\periodic-cleanup-cronjob.yml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-rnr\rnr-deployment.yml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-ucs\app-room-config.yaml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-ucs\app-room-mgmt-config.yaml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-ucs\app-room-playback-config.yaml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-ucs\app-room-recorder-config.yaml `
-  `\ar2-infra\argocd\<your-cluster-name>\manifests\ar2-ucs\app-room-sentry-config.yaml `

### RNR troubleshooting
For a new DB, make sure tha tthe aoh_rnr_user have permission to the database schema

