"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const n={sidebar_position:3},i="Roles & Groups",l={unversionedId:"iam/roles_and_groups",id:"iam/roles_and_groups",title:"Roles & Groups",description:"Keycloak has the concept of Roles and Groups; a user can have roles or groups, and a group can contain multiple roles.",source:"@site/docs/50_iam/30_roles_and_groups.md",sourceDirName:"50_iam",slug:"/iam/roles_and_groups",permalink:"/aoh-docs/docs/iam/roles_and_groups",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/50_iam/30_roles_and_groups.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"iam",previous:{title:"Administering OIDC Clients",permalink:"/aoh-docs/docs/iam/clients"}},s={},u=[{value:"Roles in AOH (AGIL Ops Hub)",id:"roles-in-aoh-agil-ops-hub",level:2},{value:"Creating a new role",id:"creating-a-new-role",level:2},{value:"Creating a role in Keycloak",id:"creating-a-role-in-keycloak",level:3},{value:"Creating a group in Keycloak",id:"creating-a-group-in-keycloak",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roles--groups"},"Roles & Groups"),(0,a.kt)("p",null,"Keycloak has the concept of Roles and Groups; a user can have roles or groups, and a group can contain multiple roles."),(0,a.kt)("h2",{id:"roles-in-aoh-agil-ops-hub"},"Roles in AOH (AGIL Ops Hub)"),(0,a.kt)("p",null,"As explained in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/iam/introduction#authentication-in-agil-rad"},"introduction"),", AGIL Ops Hub uses roles,\nand allows users have different roles depending on what team they are in. These roles are match the roles in Hasura\nand is used to evaluate permission policies that control what tables the user is allowed to access. Combined with\nHasura's custom check for permissions, we have the ability to very flexibly control what tables users are allowed to\naccess."),(0,a.kt)("p",null,"The roles in AGIL Ops Hub map directly to roles in Keycloak - they are the same. However, the way we use groups in\nkeycloak is the same as roles. This is due to a quirk of how Keycloak assigns attributes to users - it does not merge\nattributes from roles into the user attributes, but it does so from the groups. This means that if we want to create\ncustom claims based on the user's role by reading their role attributes, it won't work. This is why we put users in\ngroups as if they are their role."),(0,a.kt)("p",null,"However, we still have to give users a role, as users are only allowed to assume roles based on their\n",(0,a.kt)("inlineCode",{parentName:"p"},"x-hasura-allowed-role")," claim."),(0,a.kt)("h2",{id:"creating-a-new-role"},"Creating a new role"),(0,a.kt)("p",null,"To create a new role, you must create both a role, and a matching group, and assign the `default-role`` attribute in\nthat group."),(0,a.kt)("h3",{id:"creating-a-role-in-keycloak"},"Creating a role in Keycloak"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Realm roles")," on the left menu"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create role")),(0,a.kt)("li",{parentName:"ol"},"Give the role a name and helpful description"),(0,a.kt)("li",{parentName:"ol"},"Click save")),(0,a.kt)("h3",{id:"creating-a-group-in-keycloak"},"Creating a group in Keycloak"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Groups")," on the left"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create group")),(0,a.kt)("li",{parentName:"ol"},"Give your group a name, this should match the role (to avoid confusion)"),(0,a.kt)("li",{parentName:"ol"},"Click on your newly created group"),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"attributes")," tab"),(0,a.kt)("li",{parentName:"ol"},"Create a new key, value pair with the key as ",(0,a.kt)("inlineCode",{parentName:"li"},"default-role")," and the value as the name of your role")))}d.isMDXComponent=!0}}]);