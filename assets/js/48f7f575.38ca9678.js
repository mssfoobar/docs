"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[50629],{8197:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(74848),t=n(28453);const i={sidebar_position:3},o="Deployment",l={id:"modules/ptmgr/Getting Started/deployment",title:"Deployment",description:"PTMGR Infrastructure",source:"@site/docs/40_modules/95_ptmgr/Getting Started/2_deployment.md",sourceDirName:"40_modules/95_ptmgr/Getting Started",slug:"/modules/ptmgr/Getting Started/deployment",permalink:"/docs/docs/modules/ptmgr/Getting Started/deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/40_modules/95_ptmgr/Getting Started/2_deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"ptmgr",previous:{title:"Prerequisite",permalink:"/docs/docs/modules/ptmgr/Getting Started/prerequisite"},next:{title:"\ud83d\udcda Developer Guide",permalink:"/docs/docs/category/-developer-guide-1"}},d={},c=[{value:"PTMGR Infrastructure",id:"ptmgr-infrastructure",level:2},{value:"Postgres",id:"postgres",level:2},{value:"Schema Initializing",id:"schema-initializing",level:2},{value:"GHCR",id:"ghcr",level:2},{value:"Deploy PTMGR",id:"deploy-ptmgr",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"deployment",children:"Deployment"})}),"\n",(0,r.jsx)(s.h2,{id:"ptmgr-infrastructure",children:"PTMGR Infrastructure"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Deploy",src:n(59014).A+"",width:"272",height:"292"})}),"\n",(0,r.jsx)(s.h2,{id:"postgres",children:"Postgres"}),"\n",(0,r.jsx)(s.p,{children:"Install postgres using bitnami helm chart."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"helm install {release-name} oci://registry-1.docker.io/bitnamicharts/postgresql\n"})}),"\n",(0,r.jsx)(s.h2,{id:"schema-initializing",children:"Schema Initializing"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Now that your postgres is up and running, we need to initialize the schema. First get the postgres password."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:' kubectl get secret --namespace default postgres-release-postgresql -o jsonpath="{.data.postgres-password}" | base64 -d\n'})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsx)(s.li,{children:"Port forward your local port to postgres port."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl port-forward --namespace default svc/postgres-release-postgresql 5432:5432\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["Clone the repository and change your current directory to ",(0,r.jsx)(s.code,{children:"schema/postgres"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/mssfoobar/ptmgr.git\ncd ptmgr/schema/postgres\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsxs)(s.li,{children:["Create a new schema in Postgres. Replace ",(0,r.jsx)(s.code,{children:"{password}"})," with your postgres password in step 1."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"psql 'postgres://postgres:{password}@localhost:5432/postgres' -c \"CREATE SCHEMA aoh_ptmgr\"\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsxs)(s.li,{children:["And run the ",(0,r.jsx)(s.code,{children:"schema.sql"})," script found inside the directory to initialize the schema."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"psql 'postgres://postgres:{password}@localhost:5432/postgres?options=--search_path%3daoh_ptmgr' -f schema.sql\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"5",children:["\n",(0,r.jsxs)(s.li,{children:["You should have a schema named ",(0,r.jsx)(s.code,{children:"aoh_ptmgr"})," in your database. You can close the port-forwarding by pressing ",(0,r.jsx)(s.code,{children:"Ctrl + C"}),"\nin the terminal window opened in step 1."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"ghcr",children:"GHCR"}),"\n",(0,r.jsxs)(s.p,{children:["To download the PTMGR image from GHCR, we need to create secret named ",(0,r.jsx)(s.code,{children:"gh-regcred.yaml"}),"."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Change your current directory to ",(0,r.jsx)(s.code,{children:"ghcr"})]}),"\n",(0,r.jsxs)(s.li,{children:["Generate a GitHub access token and make sure it has below permission\n",(0,r.jsx)(s.img,{alt:"ghcr",src:n(20403).A+"",width:"1774",height:"183"})]}),"\n",(0,r.jsx)(s.li,{children:"Log in to Docker with your GitHub access token"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"export CR_PAT={your-gh-access-token}\necho $CR_PAT | docker login ghcr.io -u {your-gh-username} --password-stdin\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsx)(s.li,{children:"Print the docker config.json in base64 encoded string"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cat ~/.docker/config.json | base64\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"5",children:["\n",(0,r.jsxs)(s.li,{children:["Open the ",(0,r.jsx)(s.code,{children:"gh-regcred.yaml"})," inside ",(0,r.jsx)(s.code,{children:"ghcr"})," folder and update its ",(0,r.jsx)(s.code,{children:".dockerconfig"})," value with base64 string"]}),"\n",(0,r.jsx)(s.li,{children:"And run below command to create it"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f gh-regcred.yaml\n"})}),"\n",(0,r.jsx)(s.h2,{id:"deploy-ptmgr",children:"Deploy PTMGR"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Change your directory into your cloned ptmgr repo ",(0,r.jsx)(s.code,{children:"deployments"})," folder."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Update the env variables inside the ",(0,r.jsx)(s.code,{children:"ptmgr-deployment.yml"})," file. If you don't know the host name of your service\ninside k3s, you can look it up by running below command."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get svc -A\n"})}),"\n",(0,r.jsxs)(s.p,{children:["For example, if the postgres service name is ",(0,r.jsx)(s.code,{children:"postgres-postgresql"})," and its namespace is ",(0,r.jsx)(s.code,{children:"default"}),". It's hostname will be\n",(0,r.jsx)(s.code,{children:"postgres-postgresql.default"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Except for the ",(0,r.jsx)(s.code,{children:"IAMS_KEYCLOAK_HOST"})," which should be the host name of your\nkeycloak ingressRouter. To get keycloak hostname run"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get pods -A ## here get the keycloak pod name and its namespace\nkubectl describe pod/{keycloak-pod-name} -n {keycloak-namespace}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This will list down all the configs of the pod. Find its env variable ",(0,r.jsx)(s.code,{children:"KC_HOSTNAME"})," and use its value to set\n",(0,r.jsx)(s.code,{children:"IAMS_KEYCLOAK_HOST"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"IAMS_KEYCLOAK_CLIENT_ID"})," and ",(0,r.jsx)(s.code,{children:"IAMS_KEYCLOAK_CLIENT_SECRET"})," should be the same as the ones you created in\n",(0,r.jsx)(s.a,{href:"/docs/docs/modules/ptmgr/Getting%20Started/prerequisite",children:"prerequisite"})]}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsx)(s.li,{children:"Now everything is ready to go. Run the below command to deploy the PTMGR."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f .\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsx)(s.li,{children:"Check the status of the deployment by running"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get deployments -A\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"5",children:["\n",(0,r.jsxs)(s.li,{children:["Once the deployment is ready, PTMGR server is now serving at ",(0,r.jsx)(s.code,{children:"ptmgr.127.0.0.1.nip.io"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},59014:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/PTMGR-infra-8683be6e3ae2e0b0f631b94357bfc8a3.png"},20403:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/ghcr-372e7d1f2bce888e95e6fdd7439f4674.png"}}]);