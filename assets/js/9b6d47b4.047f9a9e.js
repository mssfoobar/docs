"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7469],{38068:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(74848),n=t(28453);const o={},i="Chat",a={id:"modules/web/modules/ucs/chat",title:"Chat",description:"Summary",source:"@site/docs/40_modules/20_web/30_modules/ucs/2-chat.md",sourceDirName:"40_modules/20_web/30_modules/ucs",slug:"/modules/web/modules/ucs/chat",permalink:"/docs/docs/modules/web/modules/ucs/chat",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/40_modules/20_web/30_modules/ucs/2-chat.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"web",previous:{title:"Quick Start",permalink:"/docs/docs/modules/web/modules/ucs/quickstart"},next:{title:"Room",permalink:"/docs/docs/modules/web/modules/ucs/room"}},d={},c=[{value:"Summary",id:"summary",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Parameter",id:"parameter",level:3},{value:"Usage",id:"usage",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"chat",children:"Chat"})}),"\n",(0,r.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(s.p,{children:"The chat is the web component that allows the user to communicate with one or more other users. Inorder to join the room, the user must pass a set of prepared data."}),"\n",(0,r.jsx)(s.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsx)(s.p,{children:"The chat component requires a GraphQL client to be defined and initialized prior to the usage of the Chat component. This is due to the UCS using Graphql's query and subscription feature to retrieve messages at runtime. Without a functional GraphQL client with the appropriate schemas configured. The UCS cannot work."}),"\n",(0,r.jsx)(s.h3,{id:"parameter",children:"Parameter"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"uid"})," (string): Unique identifier for the the user."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"username"})," (string): The that is shown to other participants when you send messages or interact within the chat"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"room"})," (",(0,r.jsx)(s.a,{href:"room",children:"room"}),"): The properties of the room."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["The value of ",(0,r.jsx)(s.em,{children:"room"})," should be obtained from the database used by the UCS module and not randomly filled by the user."]})}),"\n",(0,r.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-svelte",children:'<script lang="ts">\n  import Chat from "$lib/core/modules/ucs/components/Messaging/Chat/index.svelte";\n\n  let uid: string = "user1"\n  let displayName: string = "User One"\n  let room: Room  = { name: "My Room"\n                                id: "b62dd622-ffbf-4f7b-bec1-fb18bc2f1e67",\n                                status: "Started",\n                                allowed_user_id: ["f47ac10b-58cc-4372-a567-0e02b2c3d479", "3e16eaa5-3a7e-4ae0-92bf-32fe2b0e19f1"],\n                                is_chat1to1: true,\n                                archived_user_id: [ \u02dd], }\n  let client: GQLClient = createGraphqlClient();\n<\/script>\n\n\x3c!-- Usage example --\x3e\n<Chat\n    uid={uid}\n    username={displayName}\n    room={room}\n/>\n'})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);