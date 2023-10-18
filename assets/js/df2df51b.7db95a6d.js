"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),r=a(86010),i=a(51048),l=a(33609),s=a(1943),p=a(72957);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:m,className:h}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,s.U)(),[w,b]=(0,o.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=m){const e=f[m];null!=e&&e!==w&&y.some((t=>t.value===e))&&b(e)}const E=e=>{const t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==w&&(T(t),b(n),null!=m&&N(m,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:E},i,{className:(0,r.Z)("tabs__item",u,i?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},91745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),r=a(34259),i=a(18679);const l={sidebar_position:1},s="Backend Service Creation",p={unversionedId:"development/app/guides/services",id:"development/app/guides/services",title:"Backend Service Creation",description:"This section provides step-by-step instructions on how you can create a new service in the AGIL Ops Hub framework.",source:"@site/docs/development/app/guides/services.md",sourceDirName:"development/app/guides",slug:"/development/app/guides/services",permalink:"/aoh-docs/docs/development/app/guides/services",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/app/guides/services.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"development",previous:{title:"\ud83d\udcda Guides",permalink:"/aoh-docs/docs/category/-guides-2"},next:{title:"\ud83d\udcc1 Source Management",permalink:"/aoh-docs/docs/category/-source-management"}},c={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Recommended Tools:",id:"recommended-tools",level:4},{value:"Required Tools:",id:"required-tools",level:4},{value:"Setting up the repository",id:"setting-up-the-repository",level:2},{value:"1. Create a new repository for your service from the template",id:"1-create-a-new-repository-for-your-service-from-the-template",level:3},{value:"1.1 Clone the repository",id:"11-clone-the-repository",level:4},{value:"1.2 Renaname the repository",id:"12-renaname-the-repository",level:3},{value:"1.3 Change the <code>.git</code> repository to your own new one",id:"13-change-the-git-repository-to-your-own-new-one",level:3},{value:"2. Create a Keycloak client for your service",id:"2-create-a-keycloak-client-for-your-service",level:2},{value:"2.1 Install <code>jq</code> if you don&#39;t have it (it is a json query)",id:"21-install-jq-if-you-dont-have-it-it-is-a-json-query",level:3},{value:"2.2 Prepare Keycloak client information",id:"22-prepare-keycloak-client-information",level:3},{value:"2.3 Prepare credentials to create Keycloak client",id:"23-prepare-credentials-to-create-keycloak-client",level:3},{value:"2.4 Create the Keycloak client",id:"24-create-the-keycloak-client",level:3},{value:"3. Understanding the Project Structure",id:"3-understanding-the-project-structure",level:2},{value:"cmd",id:"cmd",level:3},{value:"pkg",id:"pkg",level:3},{value:"docker",id:"docker",level:3},{value:"docker-compose",id:"docker-compose",level:3},{value:"4. Start writing your service",id:"4-start-writing-your-service",level:2},{value:"4.1 Create a new <code>.env</code> file",id:"41-create-a-new-env-file",level:3},{value:"4.2 Update the template service&#39;s names to your new service&#39;s name",id:"42-update-the-template-services-names-to-your-new-services-name",level:3}],d={toc:u};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backend-service-creation"},"Backend Service Creation"),(0,o.kt)("p",null,"This section provides step-by-step instructions on how you can create a new service in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AGIL Ops Hub")," framework."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Pay careful attention to the ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Git")," requirements - all the commands are written for ",(0,o.kt)("strong",{parentName:"p"},"Linux"),". To follow\nthe steps painlessly on a Windows system, you should install ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl")," and run the commands in the ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl")," terminal. Also,\nmake sure ",(0,o.kt)("inlineCode",{parentName:"p"},"Git"),"'s credential manager is set up to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows Credential Manager"),". The steps to do this is\nstraightforward and available in the links provided in the ",(0,o.kt)("a",{parentName:"p",href:"#required-tools"},"Required Tools")," section.")),(0,o.kt)("h4",{id:"recommended-tools"},"Recommended Tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code")),(0,o.kt)("p",{parentName:"li"},"A popular text editor with many integrations with the technologies we use. Alternatively, you may use your preferred\ntext editor."))),(0,o.kt)("h4",{id:"required-tools"},"Required Tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"Windows Subsystem for Linux (Ubuntu Distribution)")),(0,o.kt)("p",{parentName:"li"},"If you are running on a Windows system, you'll want to install the Ubuntu distribution of WSL\n(Windows Subsystem for Linux). This is because we'll be giving you Linux commands and scripts to\nsimplify/standardize the steps required to get the project up and running."),(0,o.kt)("p",{parentName:"li"},"If you are comfortable with running the equivalent commands on Windows, you may skip this requirement, however,\nwe have scripts/commands ready (e.g. curl-ing the Keycloak Admin API endpoints) for you to run in Linux that might\nbe troublesome to perform on Windows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go")),(0,o.kt)("p",{parentName:"li"},"Golang runtime required for development.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git")),(0,o.kt)("p",{parentName:"li"},"Our version control system for source code. This is installed in Ubuntu by default. If you're using Windows, please\ninstall it. You can use GitHub Desktop or your favourite GUI package for this as well."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git#git-credential-manager-setup"},"https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git#git-credential-manager-setup")),(0,o.kt)("p",{parentName:"li"},"If you're using WSL, follow the above tutorial to ensure ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," in WSL works seamlessly with Windows. This means any\npassword you use when working with ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," on Windows will also work in WSL.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop")),(0,o.kt)("p",{parentName:"li"},"Contains the container run-time for container images as well as a user-interface for managing containers, and many\nmore additional features such as ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),", etc.\nEven if you are extremely familiar with containerization,\n",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/container-runtime/"},"Docker Engine")," alone will probably not be enough as we use\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."))),(0,o.kt)("h2",{id:"setting-up-the-repository"},"Setting up the repository"),(0,o.kt)("h3",{id:"1-create-a-new-repository-for-your-service-from-the-template"},"1. Create a new repository for your service from the template"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(67548).Z,width:"774",height:"576"})),(0,o.kt)("p",null,"The following repositories exist as GitHub templates, if you are hosting your source code on GitHub, you can go to\nthe respective repository links and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Use this template")," to create a new repository directly from the template,\notherwise, you may use the steps below to clone and create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," repository."),(0,o.kt)("h4",{id:"11-clone-the-repository"},"1.1 Clone the repository"),(0,o.kt)("p",null,"Refer to the pre-requisite section on how to set up ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," in WSL if your credentials in Windows are not being recognized\nin WSL."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Members contributing directly to AGIL Ops Hub will should have access to the repositories in ",(0,o.kt)("inlineCode",{parentName:"p"},"mssfoobar"),". Members of\nother projects will require access to the same repository in a different organisation."),(0,o.kt)("p",{parentName:"admonition"},"If you do not have access to the following repositories, approach the maintainers of ",(0,o.kt)("inlineCode",{parentName:"p"},"AOH")," to request for access.")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"1",label:"AGIL Ops Hub",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mssfoobar/aoh-service-template\n"))),(0,o.kt)(i.Z,{value:"2",label:"Other Projects",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DoisKoh/aoh-service-template\n")))),(0,o.kt)("h3",{id:"12-renaname-the-repository"},"1.2 Renaname the repository"),(0,o.kt)("p",null,"This example assumes you are creating a service called ",(0,o.kt)("inlineCode",{parentName:"p"},"solveallyourproblems"),". You should also replace ",(0,o.kt)("inlineCode",{parentName:"p"},"aoh")," with your project or\norganisation name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv aoh-service-template aoh-solveallyourproblems\n")),(0,o.kt)("h3",{id:"13-change-the-git-repository-to-your-own-new-one"},"1.3 Change the ",(0,o.kt)("inlineCode",{parentName:"h3"},".git")," repository to your own new one"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd aoh-solveallyourproblems\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf .git\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git init\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b main\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "initial commit"\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"[your-remote-url]")," with the actual URL of your remote Git repository (e.g.\ngit remote set-url origin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/aoh-solveallyourproblems"},"https://github.com/mssfoobar/aoh-solveallyourproblems"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," git remote set-url origin [your-remote-url]\n")),(0,o.kt)("h2",{id:"2-create-a-keycloak-client-for-your-service"},"2. Create a Keycloak client for your service"),(0,o.kt)("p",null,"Your new service will need to authenticate itself with Keycloak in order to access other services in our system (e.g.\nto connect to Hasura to write or read data in the database). To do this, it needs to register itself with Keycloak as a\nnew client and exchange its credentials for an access token that must be sent with each request to other services."),(0,o.kt)("h3",{id:"21-install-jq-if-you-dont-have-it-it-is-a-json-query"},"2.1 Install ",(0,o.kt)("inlineCode",{parentName:"h3"},"jq")," if you don't have it (it is a json query)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install jq\n")),(0,o.kt)("h3",{id:"22-prepare-keycloak-client-information"},"2.2 Prepare Keycloak client information"),(0,o.kt)("p",null,"Change the values for ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_DESC")," based on what's appropriate for your service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CLIENT_ID="aoh_solveallyourproblems"\nCLIENT_NAME="AGIL Ops Hub Solve All Your Problems Service"\nCLIENT_DESC="aoh_solveallyourproblems"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'jq ".clientId = \\"$CLIENT_ID\\" |\n .name = \\"$CLIENT_NAME\\" |\n .description = \\"$CLIENT_DESC\\"" \\\n service_client_template.json > client_config.json\n')),(0,o.kt)("h3",{id:"23-prepare-credentials-to-create-keycloak-client"},"2.3 Prepare credentials to create Keycloak client"),(0,o.kt)("p",null,"For the following command, you will need to prepare 3 bits of information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the username of the Keycloak admin account (e.g user)"),(0,o.kt)("li",{parentName:"ul"},"the password of the Keycloak admin account (e.g password123)"),(0,o.kt)("li",{parentName:"ul"},"the address to your Keycloak server (e.g. ",(0,o.kt)("a",{parentName:"li",href:"http://iam.dev.aoh"},"http://iam.dev.aoh"),")"),(0,o.kt)("li",{parentName:"ul"},"the Keycloak realm that your project is created under (e.g. ar2)")),(0,o.kt)("p",null,"The commands will log you in to Keycloak and retrieve an access token, then use that access token to create a client for\nyour new service based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_config.json")," file we just created in\n",(0,o.kt)("a",{parentName:"p",href:"#22-prepare-keycloak-client-information"},"step 2.2"),". Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"[username]"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"[password]"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"[iam_url]")," with your\nappropriate Keycloak credentials."),(0,o.kt)("p",null,"Example: USERNAME=user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"USERNAME=[username]\n")),(0,o.kt)("p",null,"Example: PASSWORD=password123"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PASSWORD=[password]\n")),(0,o.kt)("p",null,"Ensure there is ",(0,o.kt)("strong",{parentName:"p"},"no trailing slash")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://iam.dev.aoh")," not ",(0,o.kt)("inlineCode",{parentName:"p"},"http://iam.dev.aoh/"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"IAM_URL=[iam_url]\n")),(0,o.kt)("p",null,"Example: REALM=ar2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"REALM=[keycloak_realm]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'TOKEN="$(curl -s -X POST -H "Content-Type: application/x-www-form-urlencoded" \\\n-d "username=$USERNAME&password=$PASSWORD&grant_type=password&client_id=admin-cli" \\\n$IAM_URL/realms/master/protocol/openid-connect/token | jq -r ".access_token")"\n')),(0,o.kt)("h3",{id:"24-create-the-keycloak-client"},"2.4 Create the Keycloak client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d @./client_config.json \\\n$IAM_URL/admin/realms/$REALM/clients\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are returned an error saying you are unauthorized - you might have keyed in the wrong user/password, or your\ntoken might have expired. If it expired, just execute\n",(0,o.kt)("a",{parentName:"p",href:"#23-prepare-credentials-to-create-keycloak-client"},"the command to set the token")," again.")),(0,o.kt)("h2",{id:"3-understanding-the-project-structure"},"3. Understanding the Project Structure"),(0,o.kt)("p",null,"Below is a summary of our project structure, which follows Golang's standards. For more information, see:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang-standards/project-layout"},"https://github.com/golang-standards/project-layout")),(0,o.kt)("h3",{id:"cmd"},"cmd"),(0,o.kt)("p",null,"This is where the application code sits. This typically calls reusable packages from the ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg")," folder. If you have\ntypes, classes, etc. that can be reused in other applications, it should reside in ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg")," instead."),(0,o.kt)("p",null,"It's common for ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," to have a small ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function that simply imports code from ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg"),"."),(0,o.kt)("h3",{id:"pkg"},"pkg"),(0,o.kt)("p",null,"This should contain library code that can be used by other applications. Ideally, your package code could function as\nan SDK which can be imported and used in other Golang projects to access and process data in ",(0,o.kt)("inlineCode",{parentName:"p"},"AOH"),"."),(0,o.kt)("h3",{id:"docker"},"docker"),(0,o.kt)("p",null,"Your service may contain multiple packages in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg")," folder, each of these packages should have its own Dockerfile.\nIn this sample, we'll just have one called ",(0,o.kt)("inlineCode",{parentName:"p"},"service.Dockerfile"),", you should rename this accordingly.\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"solveallyourproblems.Dockerfile"),")"),(0,o.kt)("h3",{id:"docker-compose"},"docker-compose"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," file contains all the information needed for Docker to build a container image for your service.\nYou will need to"),(0,o.kt)("h2",{id:"4-start-writing-your-service"},"4. Start writing your service"),(0,o.kt)("p",null,"Congratulations, you can now start writing your service. Compiling and running your service requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," tool,\nwhich you should already have installed. See ",(0,o.kt)("a",{parentName:"p",href:"#required-tools"},"required tools")," above. Without the ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," tool, you won't\nbe able to build or run your ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," program."),(0,o.kt)("p",null,"You may use any IDE you're comfortable with (such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/go/"},"GoLand"),"), however, we recommend\nVisual Studio Code to keep all of us on the same development environment, which makes troubleshooting simpler."),(0,o.kt)("h3",{id:"41-create-a-new-env-file"},"4.1 Create a new ",(0,o.kt)("inlineCode",{parentName:"h3"},".env")," file"),(0,o.kt)("p",null,"This environment file is not meant to be checked in, and is used entirely for your local development. A sample ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"\nfile is provided to you called ",(0,o.kt)("inlineCode",{parentName:"p"},".env.sample"),", with all the default environment variables we used to set up the\ndatabase connection. Copy this file and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.sample .env\n")),(0,o.kt)("p",null,"Then, open the file and fill in the values accordingly. One of the values you will require is the client secret. You can\neither use the Keycloak admin UI to retrieve this, or run the following script:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This assumes you already have ",(0,o.kt)("inlineCode",{parentName:"p"},"USERNAME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PASSWORD"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"IAM_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REALM"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," variables set. Otherwise,\nrefer to ",(0,o.kt)("a",{parentName:"p",href:"#22-prepare-keycloak-client-information"},"section 2.3")," and ",(0,o.kt)("a",{parentName:"p",href:"#24-create-the-keycloak-client"},"section 2.4"),"\nfor details on how they should be set.")),(0,o.kt)("p",null,"Get the token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'TOKEN="$(curl -s -X POST -H "Content-Type: application/x-www-form-urlencoded" \\\n-d "username=$USERNAME&password=$PASSWORD&grant_type=password&client_id=admin-cli" \\\n$IAM_URL/realms/master/protocol/openid-connect/token | jq -r ".access_token")"\n')),(0,o.kt)("p",null,"Use the token to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ID="$(curl -s -X GET -H "Content-Type: application/json" \\\n-H "Authorization: Bearer $TOKEN " \\\n$IAM_URL/admin/realms/$REALM/clients/?clientId=$CLIENT_ID | jq -r ".[0].id")"\n')),(0,o.kt)("p",null,"Use the token and the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to get the secret:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s -X GET -H "Content-Type: application/json" \\\n-H "Authorization: Bearer $TOKEN " \\\n$IAM_URL/admin/realms/$REALM/clients/$ID/client-secret | echo IAM_CLIENT_SECRET is: $(jq -r ".value")\n')),(0,o.kt)("h3",{id:"42-update-the-template-services-names-to-your-new-services-name"},"4.2 Update the template service's names to your new service's name"),(0,o.kt)("p",null,"To get started, search for the text ",(0,o.kt)("inlineCode",{parentName:"p"},"TODO")," in the template project - in VSCode, the hotkey is ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + F")," to\nsearch for text in all folders. There, you'll find comments on what you should replace (mostly code relating to\nthe name of your service, and the name of the Go module)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"./go.mod\nUpdate your module name."),(0,o.kt)("li",{parentName:"ul"},"./cmd/service-name/main.go\nRename the 'service-name' folder appropriately (to whatever your package should be called)"),(0,o.kt)("li",{parentName:"ul"},"./pkg/constants\nAdd or remove any constants required."),(0,o.kt)("li",{parentName:"ul"},"./docker/service.Dockerfile\nRename all the occurrances of ",(0,o.kt)("inlineCode",{parentName:"li"},"servicename")," to an appropriate name for your service. Alsom add any additional build\nsteps if required."),(0,o.kt)("li",{parentName:"ul"},"./docker-compose.yml\nAdd any additional environment variables your service might need.")))}m.isMDXComponent=!0},67548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-repository-from-template-f3d98f6aef3f6a1a1c855aa7cdaf90aa.png"}}]);