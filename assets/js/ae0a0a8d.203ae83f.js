"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3069],{50243:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=r(74848),t=r(28453);const a={sidebar_position:20},i="Update Project Infra Repository",s={id:"development/devops_onboard/update-project-infra",title:"Update Project Infra Repository",description:"Update the project infrastructure to reference the service infra repository that was created in earlier step.",source:"@site/docs/20_development/51_devops_onboard/20-update-project-infra.md",sourceDirName:"20_development/51_devops_onboard",slug:"/development/devops_onboard/update-project-infra",permalink:"/docs/docs/development/devops_onboard/update-project-infra",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/20_development/51_devops_onboard/20-update-project-infra.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"development",previous:{title:"Setup Service Infra Repository",permalink:"/docs/docs/development/devops_onboard/setup-service-infra"},next:{title:"\ud83c\udf10 DevOps (maintenance)",permalink:"/docs/docs/category/-devops-maintenance"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setup IaC (Do only ONE of the following)",id:"setup-iac-do-only-one-of-the-following",level:2},{value:"Add repository to ArgoCD",id:"add-repository-to-argocd",level:2}];function p(e){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"update-project-infra-repository",children:"Update Project Infra Repository"})}),"\n",(0,o.jsx)(n.p,{children:"Update the project infrastructure to reference the service infra repository that was created in earlier step."}),"\n",(0,o.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,o.jsx)(n.p,{children:"Set the following environment variables"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# name of new service\n# e.g. ucs / rnr / wfe\nexport MYSERVICE=\n\n# URL to service infra repository\n# e.g. https://github.com/mssfoobar/ar2-ucs-infra\nexport MYSERVICE_REPO_URL=\n\n# path to required manifest from within service infra repository\n# e.g. for helm charts: dev/helm\nexport MYSERVICE_REPO_PATH=\n\n# full path to project's IaC repository root\n# e.g. full path to where the project IaC is checked out\nexport PRJ_IAC_ROOT=\n\n# project namespace\n# e.g. soh / hoc / aoc\nexport PRJ_NAMESPACE=\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setup-iac-do-only-one-of-the-following",children:"Setup IaC (Do only ONE of the following)"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For service infra using Helm Charts (non-reference) (TBD)\nCreate folder ",(0,o.jsx)(n.code,{children:"${PRJ_IAC_ROOT}/helm/${MYSERVICE}"}),"\n// TODO"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For service infra using Helm Charts (referencing external service-infra repository).",(0,o.jsx)(n.br,{}),"\n","Create manifest for ",(0,o.jsx)(n.em,{children:"myservice"}),":"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cat > ${PRJ_IAC_ROOT}/apps-children/${PRJ_NAMESPACE}-${MYSERVICE}.yaml << EOF\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: ${PRJ_NAMESPACE}-${MYSERVICE}-dev\n  namespace: argocd\n  finalizers:\n  - resources-finalizer.argocd.argoproj.io\nspec:\n  destination:\n    namespace: ${PRJ_NAMESPACE}\n    name: in-cluster\n  project: appbundle-project-aoh-dev\n  source:\n    path: ${MYSERVICE_REPO_PATH}\n    repoURL: ${MYSERVICE_REPO_URL}\n    targetRevision: main\n  syncPolicy:\n    syncOptions:\n    - CreateNamespace=true\n    automated:\n      prune: true\n      allowEmpty: true\n      selfHeal: true\nEOF\n"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["For service infra using manifest files (TBD).",(0,o.jsx)(n.br,{}),"\n","Create manifest for ",(0,o.jsx)(n.em,{children:"myservice"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cat > ${PRJ_IAC_ROOT}/apps-children/${PRJ_NAMESPACE}-${MYSERVICE}.yaml << EOF\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: ${PRJ_NAMESPACE}-${MYSERVICE}-dev\n  namespace: argocd\n  finalizers:\n  - resources-finalizer.argocd.argoproj.io\nspec:\n  destination:\n    namespace: ${PRJ_NAMESPACE}\n    name: in-cluster\n  project: appbundle-project-aoh-dev\n  source:\n    path: ${MYSERVICE_REPO_PATH}\n    repoURL: ${MYSERVICE_REPO_URL}\n    targetRevision: main\n  syncPolicy:\n    syncOptions:\n    - CreateNamespace=true\n    automated:\n      prune: true\n      allowEmpty: true\n      selfHeal: true\nEOF\n"})}),"\n",(0,o.jsx)(n.h2,{id:"add-repository-to-argocd",children:"Add repository to ArgoCD"}),"\n",(0,o.jsxs)(n.p,{children:["Engage administrator for the following procedure.",(0,o.jsx)(n.br,{}),"\n","From ArgoCD, ",(0,o.jsx)(n.code,{children:"Settings > Repositories > Connect Repo"}),".",(0,o.jsx)(n.br,{}),"\n","Fill up URL of service infra git repository, and credentials.\n",(0,o.jsx)(n.img,{alt:"image",src:r(96596).A+"",width:"777",height:"592"})]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},96596:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/add-repo-to-argocd-0a10202681589a8ab83561de477d125a.png"}}]);