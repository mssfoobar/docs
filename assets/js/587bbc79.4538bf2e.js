"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="\ud83c\udd95 Introduction",c={unversionedId:"web/introduction",id:"web/introduction",title:"\ud83c\udd95 Introduction",description:"The web application of AGIL Ops Hub ties all the different modules together. As such, it can be thought of as the",source:"@site/docs/40_web/introduction.md",sourceDirName:"40_web",slug:"/web/introduction",permalink:"/aoh-docs/docs/web/introduction",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/40_web/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"web",next:{title:"API",permalink:"/aoh-docs/docs/category/api"}},s={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-introduction"},"\ud83c\udd95 Introduction"),(0,o.kt)("p",null,"The web application of AGIL Ops Hub ties all the different modules together. As such, it can be thought of as the\nbiggest service in the system. Each module in the system may have zero or more back-end services supporting it. As the\nweb is the front of the entire system, it essentially depends on all other services to function properly. Setting\nup the other services is beyond the scope of this document; you should refer to their approriate documentation on how\nto set them up there, but we will point out whenever you need a specific service to run a specific feature."),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/technologies/svelte_sveltekit"},"technologies section")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TODO:\n\n-   Incorporate Typescript checks // Playwright tests before or as part of CI/CD\n![status](https://github.com/mssfoobar/aoh-web/actions/workflows/web.yml/badge.svg)\n\n-   To standardize formatting, we are using `prettier-plugin-tailwindcss`, which also handles Svelte code.\n-   We plan to have `eslint` strictly lint the project (configuration requires review).\n\n")))}p.isMDXComponent=!0}}]);