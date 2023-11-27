"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:10},a="Setup Service Infra Repository",p={unversionedId:"development/devops_onboard/setup-service-infra",id:"development/devops_onboard/setup-service-infra",title:"Setup Service Infra Repository",description:"Introduction",source:"@site/docs/development/devops_onboard/10-setup-service-infra.md",sourceDirName:"development/devops_onboard",slug:"/development/devops_onboard/setup-service-infra",permalink:"/aoh-docs/docs/development/devops_onboard/setup-service-infra",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/devops_onboard/10-setup-service-infra.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"development",previous:{title:"Introduction",permalink:"/aoh-docs/docs/development/devops_onboard/intro"},next:{title:"Update Project Infra Repository",permalink:"/aoh-docs/docs/development/devops_onboard/update-project-infra"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setting up the service infra repository",id:"setting-up-the-service-infra-repository",level:2},{value:"Create a new service infra repository directly from template using Github web console",id:"create-a-new-service-infra-repository-directly-from-template-using-github-web-console",level:3},{value:"Create a new service infra repository from template by cloning to local",id:"create-a-new-service-infra-repository-from-template-by-cloning-to-local",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-service-infra-repository"},"Setup Service Infra Repository"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Service Infra Repository serves as an extension of the Project Infrastructure Repository, and can be referenced by the latter.",(0,o.kt)("br",{parentName:"p"}),"\n","For instructions to setup the project infrastructure, refer ",(0,o.kt)("a",{parentName:"p",href:"docs/deployment/overview"},"here"),".  ")),(0,o.kt)("p",null,"This guide provides instructions on how to create a ",(0,o.kt)("strong",{parentName:"p"},"new")," service infrastructure repository in an ",(0,o.kt)("strong",{parentName:"p"},"existing")," project."),(0,o.kt)("p",null,"The Service Infra Repository contains IaC which determine how the service (container image) shall be deployed.\nAs part of the CI, the service's IaC is updated when a service's container image is successfully built as a result of changes to the service's source code."),(0,o.kt)("h1",{id:"create-service-infra-repository"},"Create Service Infra Repository"),(0,o.kt)("p",null,"The following instructions assume that you are\ncreating the service infra repo for a service called ",(0,o.kt)("inlineCode",{parentName:"p"},"MYSERVICE"),". "),(0,o.kt)("h2",{id:"setting-up-the-service-infra-repository"},"Setting up the service infra repository"),(0,o.kt)("p",null,"The new repository can be created by ",(0,o.kt)("u",null,(0,o.kt)("strong",{parentName:"p"},"one"))," of the following means:"),(0,o.kt)("h3",{id:"create-a-new-service-infra-repository-directly-from-template-using-github-web-console"},"Create a new service infra repository directly from template using Github web console"),(0,o.kt)("p",null,"Create repository directly from template\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"aoh-service-infra-template")," repository exist as a GitHub template. If you are hosting your source code on GitHub, you can go to\nthe respective repository links and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Use this template")," to create a new repository directly from the template."),(0,o.kt)("p",null,"After that, clone the repository to local.",(0,o.kt)("br",{parentName:"p"}),"\n","Customize template for new repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./init-template.sh <PROJECT_NAME> <SERVICE_NAME>\n")),(0,o.kt)("p",null,"then commit and push the changes."),(0,o.kt)("h3",{id:"create-a-new-service-infra-repository-from-template-by-cloning-to-local"},"Create a new service infra repository from template by cloning to local"),(0,o.kt)("p",null,"Pre-create empty service infra repository (using name format ",(0,o.kt)("inlineCode",{parentName:"p"},"<PROJECT>-<SERVICE>-infra"),") on Github and then use service infra template repository to populate it."),(0,o.kt)("p",null,"Clone ",(0,o.kt)("inlineCode",{parentName:"p"},"aoh-service-infra-template")," repository to local."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For AOH core development, use this:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/mssfoobar/aoh-service-infra-template"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Use this for non-AOH-core development\ngit clone https://github.com/DoisKoh/aoh-service-infra-template\n")),(0,o.kt)("p",null,"Customize template for new repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./init-template.sh <PROJECT_NAME> <SERVICE_NAME>\n")),(0,o.kt)("p",null,"Then rename and publish repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./init-repo.sh <PROJECT_NAME> <SERVICE_NAME>\n")),(0,o.kt)("h1",{id:"configure-service-infra-repository"},"Configure Service Infra Repository"),(0,o.kt)("p",null,"With reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"service"),"'s source code repository, configure ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/helm/values.yaml")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"service-infra")," repository that was setup in the previous step.\nSearch for ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE THIS SECTION")," for areas to be updated."))}u.isMDXComponent=!0}}]);