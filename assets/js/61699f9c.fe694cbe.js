"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[71314],{19880:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=i(74848),o=i(28453);const s={sidebar_position:1},a="Introduction",d={id:"modules/ian/introduction",title:"Introduction",description:"The In-App Notifications (IAN) module provides three frontend components: Toast, Notification Badge, and Dropdown Menu, as well as the backend API service. It seamlessly integrates with our RTUS (Real-Time Update System) and UNH (Unified Notification Hub) modules via the IAN backend service.",source:"@site/docs/40_modules/94_ian/introduction.md",sourceDirName:"40_modules/94_ian",slug:"/modules/ian/introduction",permalink:"/docs/docs/modules/ian/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/40_modules/94_ian/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ian",next:{title:"Getting Started",permalink:"/docs/docs/category/getting-started"}},r={},c=[{value:"Toast Notification",id:"toast-notification",level:2},{value:"Notification Badge",id:"notification-badge",level:2},{value:"Dropdown Menu",id:"dropdown-menu",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsxs)(t.p,{children:["The In-App Notifications (IAN) module provides ",(0,n.jsx)(t.strong,{children:"three"})," frontend components: ",(0,n.jsx)(t.code,{children:"Toast"}),", ",(0,n.jsx)(t.code,{children:"Notification Badge"}),", and ",(0,n.jsx)(t.code,{children:"Dropdown Menu"}),", as well as the backend API service. It seamlessly integrates with our RTUS (Real-Time Update System) and ",(0,n.jsx)(t.a,{href:"/docs/docs/modules/unh/introduction",children:"UNH (Unified Notification Hub)"})," modules via the IAN backend service."]}),"\n",(0,n.jsx)(t.h2,{id:"toast-notification",children:"Toast Notification"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"toast",src:i(7207).A+"",width:"1914",height:"908"})}),"\n",(0,n.jsxs)(t.p,{children:["The toast notification can be integrated with RTUS, which uses ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events",children:"server-sent events"})," under the hood to perform real-time notification updates. As seen in the gif above, whenever a new notification is pushed via an API call, the toast will be triggered in real-time."]}),"\n",(0,n.jsx)(t.h2,{id:"notification-badge",children:"Notification Badge"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"notification_badge",src:i(9635).A+"",width:"1916",height:"906"}),"\nAs seen in the top right of the page in the gif above, when a new update is pushed via the RTUS, the number of unread messages, in red, will also be updated."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"To clearly show the notification badge changes, the toast notification location is set to bottom-right in the gif. This is a configuration change that is easily done as part of a built-in feature that comes with shadcn-svelte's sonner(toast) component."})}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-menu",children:"Dropdown Menu"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"dropdown_menu",src:i(26789).A+"",width:"1918",height:"902"}),'\nThe dropdown menu is expanded by clicking on the notification badge. Upon expansion, a list of notifications will be displayed. Within the dropdown menu itself, there is a toggle switch that allows users to toggle between all notifications and unread notifications, as well as a "mark all as read" button that will mark all notifications on the list as read.']})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},26789:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dropdown_menu-3b5ca06e749879128f7b84f64da56192.gif"},9635:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/notification_badge-6529533c30fb04501d9632c4c097fc9a.gif"},7207:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/toast_notification-c112ad5669492684e83f33918c513500.gif"}}]);