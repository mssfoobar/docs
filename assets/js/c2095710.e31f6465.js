"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9602],{52278:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var a=n(74848),o=n(28453);const s={sidebar_position:80},i="Wrap up",t={id:"deployment/wrapup",title:"Wrap up",description:"Update load balancer with TLS secrets",source:"@site/docs/30_deployment/80-wrapup.md",sourceDirName:"30_deployment",slug:"/deployment/wrapup",permalink:"/docs/docs/deployment/wrapup",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/30_deployment/80-wrapup.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"deployment",previous:{title:"Configure AOH Applications",permalink:"/docs/docs/deployment/platform-aoh/configure-aoh-applications"},next:{title:"Loadtesting results",permalink:"/docs/docs/deployment/loadtest"}},c={},d=[{value:"Update load balancer with TLS secrets",id:"update-load-balancer-with-tls-secrets",level:3},{value:"Route53 zones",id:"route53-zones",level:3},{value:"Main Database configuration guide",id:"main-database-configuration-guide",level:3},{value:"RNR troubleshooting",id:"rnr-troubleshooting",level:3},{value:"adding service account to Database",id:"adding-service-account-to-database",level:3}];function l(e){const r={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"wrap-up",children:"Wrap up"})}),"\n",(0,a.jsx)(r.h3,{id:"update-load-balancer-with-tls-secrets",children:"Update load balancer with TLS secrets"}),"\n",(0,a.jsxs)(r.p,{children:["update and apply ",(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your cluster>\\init\\traefik\\values-for-aws-wfm.yml"})]}),"\n",(0,a.jsx)(r.h3,{id:"route53-zones",children:"Route53 zones"}),"\n",(0,a.jsx)(r.p,{children:"Setup set of shared dns names for the current version of deployment"}),"\n",(0,a.jsxs)(r.p,{children:["go to ",(0,a.jsx)(r.code,{children:"/ar2-infra/argocd/<clustername>/init/route53"}),"\nReplace the following with values from your cluster/environment:"]}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"<clustername>"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"<hostedzoneid>"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"<dns_name>"})}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Excecute the following command to get aws to generate the current route 53 records:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"aws route53 change-resource-record-sets --hosted-zone-id <hosted-zone-id> --change-batch file://<route53_record_file>.json"})}),"\n",(0,a.jsxs)(r.p,{children:['NOTE: the easiest way to obtain the "hostedzoneid" is to go to the hosted zone alias create record page,  Select Route traffic to " Alias to Network Load Balancer", ',(0,a.jsx)(r.code,{children:"<your region>"}),", ",(0,a.jsx)(r.code,{children:"<your load balancer>"}),', and the page will show the "Alias hosted zone ID", which is the ',(0,a.jsx)(r.code,{children:"<hostedzoneid>"})," you want to input."]}),"\n",(0,a.jsx)(r.h3,{id:"main-database-configuration-guide",children:"Main Database configuration guide"}),"\n",(0,a.jsx)(r.p,{children:"Customise the follow files to configure the Main Database to use any database service of your choosing"}),"\n",(0,a.jsxs)(r.p,{children:["NOTE:  ",(0,a.jsx)(r.code,{children:"<your-cluster-name> "})," is your cluster name"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\apps-children\\temporalio.yml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\aoh-sys\\timekeeper-deployment.yml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-ims\\imsmgr-deployment.yml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-rnr\\debezium-deployment.yml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-rnr\\periodic-backup-raw-cronjob.yml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-rnr\\periodic-cleanup-cronjob.yml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-rnr\\rnr-deployment.yml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-ucs\\app-room-config.yaml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-ucs\\app-room-mgmt-config.yaml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-ucs\\app-room-playback-config.yaml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-ucs\\app-room-recorder-config.yaml "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"\\ar2-infra\\argocd\\<your-cluster-name>\\manifests\\ar2-ucs\\app-room-sentry-config.yaml "})}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"rnr-troubleshooting",children:"RNR troubleshooting"}),"\n",(0,a.jsx)(r.p,{children:"For a new DB, make sure tha the aoh_rnr_user have permission to the database schema"}),"\n",(0,a.jsx)(r.h3,{id:"adding-service-account-to-database",children:"adding service account to Database"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:'# To be configured\nSERVICE_NAME="<FILL_UP_SERVICE_NAME>"\nSERVICE_PASSWORD="<FILL_UP_PASSWORD>"\nDB_USER=postgres\nDB_NAME=ar2\n\n# === Changes NOT required below\nSERVICE_USER="${SERVICE_NAME}_user"\n\n# Execute this\npsql -U ${DB_USER} -d ${DB_NAME} -c "CREATE SCHEMA if not exists ${SERVICE_NAME};" \npsql -U ${DB_USER} -d ${DB_NAME} -c "CREATE USER ${SERVICE_USER} WITH PASSWORD \'${SERVICE_PASSWORD}\';"\npsql -U ${DB_USER} -d ${DB_NAME} -c "GRANT ALL ON ALL TABLES IN SCHEMA ${SERVICE_NAME} TO ${SERVICE_USER};"\npsql -U ${DB_USER} -d ${DB_NAME} -c "GRANT USAGE ON SCHEMA ${SERVICE_NAME} to ${SERVICE_USER};"\npsql -U ${DB_USER} -d ${DB_NAME} -c "ALTER DEFAULT PRIVILEGES IN SCHEMA ${SERVICE_NAME} GRANT ALL ON TABLES TO ${SERVICE_USER};"\npsql -U ${DB_USER} -d ${DB_NAME} -c "ALTER SCHEMA ${SERVICE_NAME} OWNER TO ${SERVICE_USER};"\n\n'})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);