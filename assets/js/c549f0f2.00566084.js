"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:60},l="Setup AOH Applications",s={unversionedId:"deployment/platform-aoh/setup-aoh-applications",id:"deployment/platform-aoh/setup-aoh-applications",title:"Setup AOH Applications",description:"This section covers the setup of AOH.",source:"@site/docs/30_deployment/70-platform-aoh/60-setup-aoh-applications.md",sourceDirName:"30_deployment/70-platform-aoh",slug:"/deployment/platform-aoh/setup-aoh-applications",permalink:"/aoh-docs/docs/deployment/platform-aoh/setup-aoh-applications",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/70-platform-aoh/60-setup-aoh-applications.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"deployment",previous:{title:"prepare-aoh-setup",permalink:"/aoh-docs/docs/deployment/platform-aoh/prepare-aoh-setup"},next:{title:"Configure AOH Applications",permalink:"/aoh-docs/docs/deployment/platform-aoh/configure-aoh-applications"}},i={},c=[{value:"Install Foundation Services",id:"install-foundation-services",level:2},{value:"Install ArgoCD",id:"install-argocd",level:3},{value:"log into Argocd",id:"log-into-argocd",level:3},{value:"Add the necessary repo into ArgoCD",id:"add-the-necessary-repo-into-argocd",level:3},{value:"Create aoh storage class",id:"create-aoh-storage-class",level:3},{value:"If the steps above failed, check if the following Databases exists",id:"if-the-steps-above-failed-check-if-the-following-databases-exists",level:3},{value:"Init (mass)",id:"init-mass",level:3},{value:"Certs",id:"certs",level:3},{value:"Prepare Keycloak",id:"prepare-keycloak",level:3},{value:"Generate the Client secret and place them into the aws secrets under \u201ciam\u201d",id:"generate-the-client-secret-and-place-them-into-the-aws-secrets-under-iam",level:3},{value:"Change Client Access setting in Keycloak,",id:"change-client-access-setting-in-keycloak",level:3},{value:"Check Hasura system endpoints (should already deployed when DB is deployed)",id:"check-hasura-system-endpoints-should-already-deployed-when-db-is-deployed",level:3},{value:"Reload Hasura metadata",id:"reload-hasura-metadata",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup-aoh-applications"},"Setup AOH Applications"),(0,r.kt)("p",null,"This section covers the setup of AOH.\nIt starts off with ArgoCD as it is used as the main CD mechanism to deploy entire AOH.\nArgoCD deploys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Foundation Services"),(0,r.kt)("li",{parentName:"ul"},"Application Services")),(0,r.kt)("h2",{id:"install-foundation-services"},"Install Foundation Services"),(0,r.kt)("h3",{id:"install-argocd"},"Install ArgoCD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create namespace\nkubectl create namespace argocd\n \n# Deploy\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n \n# Get ArgoCD access credentials\nkubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo\n\n# Forward UI for access\nkubectl port-forward --address localhost -n argocd svc/argocd-server 19080:80\n')),(0,r.kt)("h3",{id:"log-into-argocd"},"log into Argocd"),(0,r.kt)("p",null,"Log into Argocd using the command below:\n",(0,r.kt)("inlineCode",{parentName:"p"},"argocd login <ipaddress:port> --name <name> --password <password>")),(0,r.kt)("h3",{id:"add-the-necessary-repo-into-argocd"},"Add the necessary repo into ArgoCD"),(0,r.kt)("p",null,"Obtain the latest list from the product team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"argocd repo add https://github.com/mssfoobar/<repo> --username <username> --password <git_key> --insecure-skip-server-verification\n")),(0,r.kt)("h3",{id:"create-aoh-storage-class"},"Create aoh storage class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /ar2-infra/argocd/<clustername>/init/k8s\nkubectl apply -f sc\u2014retain.yml\n \ncd /ar2-infra/argocd/<clustername>/\n# Add root and project manifests (triggers sync)\nkubectl apply -f root-app-<clustername>.yml\nkubectl apply -f projects/project-<clustername>.yml\n")),(0,r.kt)("h1",{id:"prepare-db"},"Prepare DB"),(0,r.kt)("p",null,"Extract the files from the DB deployment package obtained from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/aoh-db"},"https://github.com/mssfoobar/aoh-db"),"."),(0,r.kt)("p",null,"Follow the instructions to deploy the Database schema, essential data, demo data and Hasura schema.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/aoh-db"},"https://github.com/mssfoobar/aoh-db")),(0,r.kt)("h3",{id:"if-the-steps-above-failed-check-if-the-following-databases-exists"},"If the steps above failed, check if the following Databases exists"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ar2"),(0,r.kt)("li",{parentName:"ul"},"temporal"),(0,r.kt)("li",{parentName:"ul"},"temporal-visibility")),(0,r.kt)("h3",{id:"init-mass"},"Init (mass)"),(0,r.kt)("p",null,"folder: ",(0,r.kt)("inlineCode",{parentName:"p"},"/ar2-infra/argocd/<clustername>/init/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Init general secrets\nkubectl apply -f external_secrets/secrets\n\n# Init minio secrets\nkubectl apply -f minio\n\n# Deploy Traefik\nkubectl create ns traefik\nhelm repo add traefik https://traefik.github.io/charts\nhelm install traefik traefik/traefik -f traefik/values-xxx-x.yml \u2013namespace traefik\n")),(0,r.kt)("h3",{id:"certs"},"Certs"),(0,r.kt)("p",null,"For Projects that needs to install certificates, refer to traefik documentations to where to place the certificates to be used.\n",(0,r.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/https/tls/"},"https://doc.traefik.io/traefik/https/tls/")),(0,r.kt)("h3",{id:"prepare-keycloak"},"Prepare Keycloak"),(0,r.kt)("p",null,"//NOTE: requires MINIO, AWS secrets, Keycloak initialisation"),(0,r.kt)("p",null,"Put ",(0,r.kt)("inlineCode",{parentName:"p"},"stengg.agiirad.keycloak.user.*#*#*#*#*.jar")," file into minio bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"common-iam/public"),"\nUpload it within bucket of ",(0,r.kt)("inlineCode",{parentName:"p"},"common-iam")," while creating a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"public")),(0,r.kt)("p",null,"Log into keycloak",(0,r.kt)("br",{parentName:"p"}),"\n","Regen user key in keycloak and update into aws secrets:",(0,r.kt)("br",{parentName:"p"}),"\n","In Keycload, go to Clients,  "),(0,r.kt)("p",null,"For client iam secret:",(0,r.kt)("br",{parentName:"p"}),"\n","Place into aws_secrets:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".common-rnr.iam.client_secret : <secrets>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".aoh_web.iam.client_secret : <secrets>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ar2_web.iam.client_secret : <secrets>"))),(0,r.kt)("p",null,"Go into Minio -> Identity -> Users\nRegenatrate the Access keys and place it into the follow Aws-secrets:"),(0,r.kt)("p",null,"For commmon-iam:\nRegen the key,\nPlace into aws_secrets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".common-iam.store.access_key : <secrets>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".common-iam.store.secret_key : <secrets>"))),(0,r.kt)("p",null,"For commmon-rnr:\nRegen the key,\nPlace into aws_secrets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".common-rnr.store.access_key : <secrets>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".common-rnr.store.secret_key : <secrets>"))),(0,r.kt)("p",null,"For ar2-ucs:\nregen the key and place into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ar2-ucs.store.access_key : <secrets>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ar2-ucs.store.secret_key : <secrets>"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kc1",src:a(59355).Z,width:"1339",height:"728"})),(0,r.kt)("h3",{id:"generate-the-client-secret-and-place-them-into-the-aws-secrets-under-iam"},"Generate the Client secret and place them into the aws secrets under \u201ciam\u201d"),(0,r.kt)("p",null,"json file (re-11clean.json) to be imported from keycloak console"),(0,r.kt)("p",null,"Under keycloak local host UI, on top right left click drop down and Create Realm .",(0,r.kt)("br",{parentName:"p"}),"\n","Browse and upload the extracted version  of the json file.",(0,r.kt)("br",{parentName:"p"}),"\n","Relam name should be auto-filled as shown below:  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kc2",src:a(73179).Z,width:"1442",height:"726"})),(0,r.kt)("h3",{id:"change-client-access-setting-in-keycloak"},"Change Client Access setting in Keycloak,"),(0,r.kt)("p",null,"Go to Keycloak -> Client -> Client details -> Access setting -> valid redirect URIs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kc3",src:a(91641).Z,width:"1128",height:"864"})),(0,r.kt)("h3",{id:"check-hasura-system-endpoints-should-already-deployed-when-db-is-deployed"},"Check Hasura system endpoints (should already deployed when DB is deployed)"),(0,r.kt)("p",null,"go hasura\nsystem -> endpoint"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"h3",src:a(38025).Z,width:"1984",height:"1192"})),(0,r.kt)("h3",{id:"reload-hasura-metadata"},"Reload Hasura metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hasura --skip-update-check metadata --endpoint <http://localhost:port> --admin-secret <hasura-admin-secret> reload\n")))}m.isMDXComponent=!0},38025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-hasura-endpoint-check-3343f040f4b81d23f7359cb75ab4fb1c.jpg"},91641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-keycloak-client-redirect-check-14f94b93fb820fdbd5623e605a6ee773.jpg"},73179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-keycloak-create-realm-check-0c727ddc3b90a5806ba019b70937d464.jpg"},59355:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_client_details_credentials-c2dba54718c26b041717be8fdac69172.jpg"}}]);