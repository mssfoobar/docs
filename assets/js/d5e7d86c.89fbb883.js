"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[79759],{71495:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=o(74848),n=o(28453);const r={},a="Overview",t={id:"modules/web_packages/Packages/Logger/Overview",title:"Overview",description:"The logger we are using is Pino and is basically a wrapper with specific configurations set over the Pino logger. We",source:"@site/docs/40_modules/22_web_packages/Packages/10_Logger/1-Overview.md",sourceDirName:"40_modules/22_web_packages/Packages/10_Logger",slug:"/modules/web_packages/Packages/Logger/Overview",permalink:"/docs/docs/modules/web_packages/Packages/Logger/Overview",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/40_modules/22_web_packages/Packages/10_Logger/1-Overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"web_packages",previous:{title:"Logger",permalink:"/docs/docs/category/logger"},next:{title:"Installation",permalink:"/docs/docs/modules/web_packages/Packages/Logger/Installation"}},c={},d=[{value:"What is Pino?",id:"what-is-pino",level:2},{value:"Why we&#39;ve chosen Pino",id:"why-weve-chosen-pino",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsx)(s.p,{children:"The logger we are using is Pino and is basically a wrapper with specific configurations set over the Pino logger. We\nsimply detect when the application is in production mode and prevents logging in the browser."}),"\n",(0,i.jsx)(s.h2,{id:"what-is-pino",children:"What is Pino?"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Pino"})," is a Node.js logger that uses minimum resources for logging."]}),"\n",(0,i.jsx)(s.h3,{id:"why-weve-chosen-pino",children:"Why we've chosen Pino"}),"\n",(0,i.jsxs)(s.p,{children:["Using minimum resources for logging is very important. Log messages tend to get added over time and this can lead to a\nthrottling effect on applications \u2013 such as reduced requests per second. Pino claims to be over ",(0,i.jsx)(s.code,{children:"5x"})," faster than\nalternatives."]}),"\n",(0,i.jsxs)(s.p,{children:["See the ",(0,i.jsx)(s.a,{href:"https://getpino.io/#/docs/benchmarks",children:"Benchmarks"})," for comparisons."]}),"\n",(0,i.jsxs)(s.p,{children:["There are many logging libraries out there such as ",(0,i.jsx)(s.code,{children:"Winston"})," and ",(0,i.jsx)(s.code,{children:"Bunyan"}),". However, we chose ",(0,i.jsx)(s.code,{children:"Pino"})," over them as it is\nvery ",(0,i.jsx)(s.strong,{children:"low overhead"}),", and is has the ability to log on the browser, which is something Winston cannot do. We require\nour JavaScript code to be isomorphic as we use Svelte Kit (the same code is expected to run on both the browser and the\nserver/Node.js)"]})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);