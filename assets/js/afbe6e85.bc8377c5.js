"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[4104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>M});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},L=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),L=a,M=c["".concat(l,".").concat(L)]||c[L]||d[L]||r;return n?i.createElement(M,o(o({ref:t},p),{},{components:n})):i.createElement(M,o({ref:t},p))}));function M(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=L;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}L.displayName="MDXCreateElement"},7924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1},o="Svelte & SvelteKit",s={unversionedId:"web/technologies/svelte_sveltekit",id:"web/technologies/svelte_sveltekit",title:"Svelte & SvelteKit",description:"We've chosen Svelte as our primary component-based UI framework and SvelteKit as the web application framework",source:"@site/docs/web/technologies/1.svelte_sveltekit.md",sourceDirName:"web/technologies",slug:"/web/technologies/svelte_sveltekit",permalink:"/ar2-docs/docs/web/technologies/svelte_sveltekit",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/technologies/1.svelte_sveltekit.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"web",previous:{title:"Technologies \ud83d\udd29",permalink:"/ar2-docs/docs/category/technologies-"},next:{title:"Tailwind CSS",permalink:"/ar2-docs/docs/web/technologies/tailwind"}},l={},u=[{value:"What is Svelte?",id:"what-is-svelte",level:2},{value:"Why we&#39;ve chosen Svelte",id:"why-weve-chosen-svelte",level:3},{value:"What is SvelteKit?",id:"what-is-sveltekit",level:2},{value:"Why we&#39;ve chosen SvelteKit",id:"why-weve-chosen-sveltekit",level:3},{value:"More Reading",id:"more-reading",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"svelte--sveltekit"},"Svelte & SvelteKit"),(0,a.kt)("p",null,"We've chosen ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," as our primary component-based UI framework and ",(0,a.kt)("inlineCode",{parentName:"p"},"SvelteKit")," as the web application framework\n(routing) for ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Svelte Logo",src:n(66793).Z,width:"98",height:"118"})),(0,a.kt)("h2",{id:"what-is-svelte"},"What is Svelte?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," is a JavaScript framework for building user interfaces. It is component-based, much like the ever-popular ",(0,a.kt)("inlineCode",{parentName:"p"},"React"),".\nHowever, unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"React"),", it does not create a virtual DOM and diff changes against it. ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," shifts that work into the\n",(0,a.kt)("em",{parentName:"p"},"compile")," step instead. ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte's")," compiler can determine all the places where your code changes state -\n",(0,a.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/reactive-assignments"},"it does so by checking variable assignments"),"."),(0,a.kt)("h3",{id:"why-weve-chosen-svelte"},"Why we've chosen Svelte"),(0,a.kt)("p",null,"The knee-jerk reaction you might have is why use ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," when we already have ",(0,a.kt)("inlineCode",{parentName:"p"},"React"),", a mature, popular framework\nwith the backing of Facebook/Meta."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," is ",(0,a.kt)("strong",{parentName:"p"},"easier")," to pick up than ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," and is simply easy to learn in absolute terms. It's also feature-rich and\nhighly ",(0,a.kt)("strong",{parentName:"p"},"performant")," - because it does not use a virtual DOM, ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," is ",(0,a.kt)("em",{parentName:"p"},"fast"),"."),(0,a.kt)("p",null,"Our choice to go with ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," is also to get ahead of the curve. Trends are showing that ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," is well-loved by\nthe developer community and is constantly growing in popularity. ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," was voted the\n",(0,a.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks"},"most loved web framework"),"\nin the Stack Overflows' 2021 survey won the ",(0,a.kt)("a",{parentName:"p",href:"https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/"},"highest satisfaction ratings"),"\nin State of JS's 2020 survey."),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"Rich Harris'")," induction into ",(0,a.kt)("strong",{parentName:"p"},"Vercel")," at the end of 2021, ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," also now has the backing of a strong web-oriented tech-company\nand we believe it is a safe and forward-looking choice to use as our predominant framework."),(0,a.kt)("h2",{id:"what-is-sveltekit"},"What is SvelteKit?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SvelteKit")," is an application framework for building extremely high-performance web apps."),(0,a.kt)("p",null,"Building an app with all the modern best practices is complicated. Those practices include build\noptimizations, so that you load only the minimal required code; offline support; prefetching pages before the user\ninitiates navigation; and configurable rendering that allows you to generate HTML on the server or in the browser at\nruntime or at build-time. ",(0,a.kt)("inlineCode",{parentName:"p"},"SvelteKit")," does all that for us."),(0,a.kt)("p",null,"It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte")," plugin to provide a lightning-fast and feature-rich development experience with\nHot Module Replacement (HMR), where changes to your code are reflected in the browser instantly."),(0,a.kt)("h3",{id:"why-weve-chosen-sveltekit"},"Why we've chosen SvelteKit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SvelteKit")," is the easiest way to get started with ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte"),". It's the official web application framework for ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte"),"\nand is being developed closely in tandem with ",(0,a.kt)("inlineCode",{parentName:"p"},"Svelte"),". Apart from that, it also has many best practices and\noptimizations built-in whilst providing a great developer experience with ",(0,a.kt)("inlineCode",{parentName:"p"},"Vite's")," speedy ",(0,a.kt)("em",{parentName:"p"},"Hot Module Replacement"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately, at the time of writing, ",(0,a.kt)("inlineCode",{parentName:"p"},"SvelteKit")," is still in beta, and so breaking changes might occur now and then,\nwhich is a pain to deal with but we expect this issue to be resolved in the near future (as ",(0,a.kt)("inlineCode",{parentName:"p"},"SvelteKit")," enters v1.0)")),(0,a.kt)("h2",{id:"more-reading"},"More Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://svelte.dev/"},"Official Svelte Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kit.svelte.dev/"},"Official SvelteKit Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"Official Vite Website"))))}c.isMDXComponent=!0},66793:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5OC4xIDExOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTguMSAxMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkYzRTAwO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTkxLjgsMTUuNkM4MC45LTAuMSw1OS4yLTQuNyw0My42LDUuMkwxNi4xLDIyLjhDOC42LDI3LjUsMy40LDM1LjIsMS45LDQzLjljLTEuMyw3LjMtMC4yLDE0LjgsMy4zLDIxLjMKCWMtMi40LDMuNi00LDcuNi00LjcsMTEuOGMtMS42LDguOSwwLjUsMTguMSw1LjcsMjUuNGMxMSwxNS43LDMyLjYsMjAuMyw0OC4yLDEwLjRsMjcuNS0xNy41YzcuNS00LjcsMTIuNy0xMi40LDE0LjItMjEuMQoJYzEuMy03LjMsMC4yLTE0LjgtMy4zLTIxLjNjMi40LTMuNiw0LTcuNiw0LjctMTEuOEM5OS4yLDMyLjEsOTcuMSwyMi45LDkxLjgsMTUuNiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDAuOSwxMDMuOWMtOC45LDIuMy0xOC4yLTEuMi0yMy40LTguN2MtMy4yLTQuNC00LjQtOS45LTMuNS0xNS4zYzAuMi0wLjksMC40LTEuNywwLjYtMi42bDAuNS0xLjZsMS40LDEKCWMzLjMsMi40LDYuOSw0LjIsMTAuOCw1LjRsMSwwLjNsLTAuMSwxYy0wLjEsMS40LDAuMywyLjksMS4xLDQuMWMxLjYsMi4zLDQuNCwzLjQsNy4xLDIuN2MwLjYtMC4yLDEuMi0wLjQsMS43LTAuN0w2NS41LDcyCgljMS40LTAuOSwyLjMtMi4yLDIuNi0zLjhjMC4zLTEuNi0wLjEtMy4zLTEtNC42Yy0xLjYtMi4zLTQuNC0zLjMtNy4xLTIuNmMtMC42LDAuMi0xLjIsMC40LTEuNywwLjdsLTEwLjUsNi43CgljLTEuNywxLjEtMy42LDEuOS01LjYsMi40Yy04LjksMi4zLTE4LjItMS4yLTIzLjQtOC43Yy0zLjEtNC40LTQuNC05LjktMy40LTE1LjNjMC45LTUuMiw0LjEtOS45LDguNi0xMi43bDI3LjUtMTcuNQoJYzEuNy0xLjEsMy42LTEuOSw1LjYtMi41YzguOS0yLjMsMTguMiwxLjIsMjMuNCw4LjdjMy4yLDQuNCw0LjQsOS45LDMuNSwxNS4zYy0wLjIsMC45LTAuNCwxLjctMC43LDIuNmwtMC41LDEuNmwtMS40LTEKCWMtMy4zLTIuNC02LjktNC4yLTEwLjgtNS40bC0xLTAuM2wwLjEtMWMwLjEtMS40LTAuMy0yLjktMS4xLTQuMWMtMS42LTIuMy00LjQtMy4zLTcuMS0yLjZjLTAuNiwwLjItMS4yLDAuNC0xLjcsMC43TDMyLjQsNDYuMQoJYy0xLjQsMC45LTIuMywyLjItMi42LDMuOHMwLjEsMy4zLDEsNC42YzEuNiwyLjMsNC40LDMuMyw3LjEsMi42YzAuNi0wLjIsMS4yLTAuNCwxLjctMC43bDEwLjUtNi43YzEuNy0xLjEsMy42LTEuOSw1LjYtMi41CgljOC45LTIuMywxOC4yLDEuMiwyMy40LDguN2MzLjIsNC40LDQuNCw5LjksMy41LDE1LjNjLTAuOSw1LjItNC4xLDkuOS04LjYsMTIuN2wtMjcuNSwxNy41QzQ0LjgsMTAyLjUsNDIuOSwxMDMuMyw0MC45LDEwMy45Ii8+Cjwvc3ZnPgo="}}]);