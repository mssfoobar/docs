"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[4773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Pitfalls \u26b0\ufe0f",s={unversionedId:"web/reference/pitfalls",id:"web/reference/pitfalls",title:"Pitfalls \u26b0\ufe0f",description:"Svelte",source:"@site/docs/web/reference/pitfalls.md",sourceDirName:"web/reference",slug:"/web/reference/pitfalls",permalink:"/ar2-docs/docs/web/reference/pitfalls",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/reference/pitfalls.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"web",previous:{title:"Docusaurus \ud83e\udd96",permalink:"/ar2-docs/docs/web/reference/docusaurus-reference"},next:{title:"Architecture",permalink:"/ar2-docs/docs/web/architecture"}},l={},c=[{value:"Svelte",id:"svelte",level:2},{value:"Asynchronous onMount functions",id:"asynchronous-onmount-functions",level:3},{value:"Svelte Store Usage",id:"svelte-store-usage",level:3},{value:"Keying <code>{#each}</code> Blocks",id:"keying-each-blocks",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pitfalls-\ufe0f"},"Pitfalls \u26b0\ufe0f"),(0,o.kt)("h2",{id:"svelte"},"Svelte"),(0,o.kt)("h3",{id:"asynchronous-onmount-functions"},"Asynchronous onMount functions"),(0,o.kt)("p",null,"If you run an onMount function asynchronously, it returns a promise instead of a function. This will result in the\nreturned 'function' not being called."),(0,o.kt)("p",null,"See reference discussion: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sveltejs/svelte/issues/4927"},"https://github.com/sveltejs/svelte/issues/4927")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'onMount(async () => {\n    bar = await baz();\n\n    return () => {\n        console.log("I\'m never called!");\n    };\n});\n')),(0,o.kt)("p",null,"To get around this, you can create and run an async function immediately inside onMount:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"onMount(() => {\n    async function foo() {\n        bar = await baz();\n    }\n\n    foo();\n\n    return () => console.log('Nowm, I do get called when destroyed.');\n});\n")),(0,o.kt)("h3",{id:"svelte-store-usage"},"Svelte Store Usage"),(0,o.kt)("p",null,"Any store which is meant to be specific to each individual client only always be set in ",(0,o.kt)("inlineCode",{parentName:"p"},"onMount")," or in a ",(0,o.kt)("inlineCode",{parentName:"p"},"is (browser)"),"\ncheck. This is because stores run on the server are global."),(0,o.kt)("p",null,"See reference discussion: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sveltejs/kit/discussions/4339"},"https://github.com/sveltejs/kit/discussions/4339")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Understanding this is very important for avoiding bugs and potential leaking of sensitive information on the browser.\nPlease look through the linked discussion thoroughly.")),(0,o.kt)("h3",{id:"keying-each-blocks"},"Keying ",(0,o.kt)("inlineCode",{parentName:"h3"},"{#each}")," Blocks"),(0,o.kt)("p",null,"If you use Svelte with any other framework that might manipulate the DOM or have an internal representation of the DOM\n(e.g. GridStack), you will very likely run into issues with this."),(0,o.kt)("p",null,"See how and why to use ",(0,o.kt)("inlineCode",{parentName:"p"},"keyed each blocks"),": ",(0,o.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/keyed-each-blocks"},"https://svelte.dev/tutorial/keyed-each-blocks")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, when you modify the value of an each block, it will add and remove items at the end of the block, and update\nany values that have changed. That might not be what you want.")),(0,o.kt)("p",null,"This will cause the frameworks' representations of the DOM to go out of sync. Adding a unique identifier (or 'key')\nto the each block will allow Svelte to keep track of which element needs to be removed."),(0,o.kt)("h1",{id:"graphql"},"GraphQL"),(0,o.kt)("p",null,"There's definitely stuff we should write here..."),(0,o.kt)("h1",{id:"others"},"Others"),(0,o.kt)("p",null,"There's definitely stuff we should write here..."))}p.isMDXComponent=!0}}]);