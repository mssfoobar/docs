"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[86382],{9437:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>w,contentTitle:()=>_,default:()=>N,frontMatter:()=>v,metadata:()=>k,toc:()=>P});var n=a(74848),l=a(28453),r=a(77233),i=a.n(r),t=(a(22661),a(80811)),d=a.n(t),o=(a(41871),a(24791)),c=a.n(o),m=a(35654),p=a.n(m),h=a(69015),u=a.n(h),x=a(84919),j=a.n(x),f=a(84664),g=a.n(f),y=a(85225),b=(a(71156),a(7227));const v={id:"create-playback-room",title:"Create playback room",description:"API to create a playback instance",sidebar_label:"Create playback room",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVFFP2zAQ/iuWedgm1TQppZS8MdgDmiZQYZo0VqGrfWkNiZPZTkcV5b/Pl7TQ0bKtL02c83fffffd1dzD3PHkjpcZrGYgH/m0xxU6aXXpdWF4ws+uL5kvmLQIHhmwTSTTxnkwEnmPl2AhR4+WsGpuwku4aYsi1yp81oRTgl/w1+CXF6xIGQVSDou+siYEWfxZaYuKJ95W2ONOLjAHntTcr0qCdt5qM+dNj+MT5GVGZ+k4VsMUUJwolCKOVSTgZHQsoggieRrjaJaOeDMldFcWxqEjwEEU0d+ftK4+BxILBNVWVPPzwng0Xty22es3+WzTgbLMtARC7D+4ANs0ga7skOjqTsA+4GL2gNKTxLYo0XrdsVbgt6PAWliR0B5z9+/boSn7pFSVbdnca3PvMDBVbk9cW4YLNdyD3/t5S4QN0bsuJ1fpaRydDlMRp0qJ4QxHAsZyJHAYHY2llOOTNOZvEDkaRfSjBj5nD90bHIloJOLj23icDAdJHH9fUxzua+xHUGwSzIXOU8XH+2IuQ4esgYzdoF2iZZ+sLSwnyGDxRUF1lIVrVSVLJ7y/HPQ3U9EnL7t+3Xm/4USWULrBqGwW4hfel0m/H/ovKEzk89wfKlwODsEOdkbkAlOoMs86nNbA2qRFK732rdUmND9fwMAcczJXj1PG7vpyF/HggH1bgH/nmMFfP4zYzLYMhywWcTuPdK4ww91zEo4EyKG17HrYzzuM5+1Asa8z1y/2/6+1sraWxydPAus2dathvdb+rqvveXv12qXjwn+y3j5BrgV1K4TW9QwcfrVZ09BxcIFdhfPwuASrYUZahiYp7eg59DmFzOFfang/We+pD+yNRba3gs3QGhrZJWQVvYXHR1y9bM1m2mxWUMuq+3gmJZZ+69rulplu+fT66uY2OPc3mP/6Og==",sidebar_class_name:"post api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},_=void 0,k={id:"modules/ucs/Universal Comms API/v2/create-playback-room",title:"Create playback room",description:"API to create a playback instance",source:"@site/docs/40_modules/30_ucs/Universal Comms API/v2/create-playback-room.api.mdx",sourceDirName:"40_modules/30_ucs/Universal Comms API/v2",slug:"/modules/ucs/Universal Comms API/v2/create-playback-room",permalink:"/docs/docs/modules/ucs/Universal Comms API/v2/create-playback-room",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-playback-room",title:"Create playback room",description:"API to create a playback instance",sidebar_label:"Create playback room",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVFFP2zAQ/iuWedgm1TQppZS8MdgDmiZQYZo0VqGrfWkNiZPZTkcV5b/Pl7TQ0bKtL02c83fffffd1dzD3PHkjpcZrGYgH/m0xxU6aXXpdWF4ws+uL5kvmLQIHhmwTSTTxnkwEnmPl2AhR4+WsGpuwku4aYsi1yp81oRTgl/w1+CXF6xIGQVSDou+siYEWfxZaYuKJ95W2ONOLjAHntTcr0qCdt5qM+dNj+MT5GVGZ+k4VsMUUJwolCKOVSTgZHQsoggieRrjaJaOeDMldFcWxqEjwEEU0d+ftK4+BxILBNVWVPPzwng0Xty22es3+WzTgbLMtARC7D+4ANs0ga7skOjqTsA+4GL2gNKTxLYo0XrdsVbgt6PAWliR0B5z9+/boSn7pFSVbdnca3PvMDBVbk9cW4YLNdyD3/t5S4QN0bsuJ1fpaRydDlMRp0qJ4QxHAsZyJHAYHY2llOOTNOZvEDkaRfSjBj5nD90bHIloJOLj23icDAdJHH9fUxzua+xHUGwSzIXOU8XH+2IuQ4esgYzdoF2iZZ+sLSwnyGDxRUF1lIVrVSVLJ7y/HPQ3U9EnL7t+3Xm/4USWULrBqGwW4hfel0m/H/ovKEzk89wfKlwODsEOdkbkAlOoMs86nNbA2qRFK732rdUmND9fwMAcczJXj1PG7vpyF/HggH1bgH/nmMFfP4zYzLYMhywWcTuPdK4ww91zEo4EyKG17HrYzzuM5+1Asa8z1y/2/6+1sraWxydPAus2dathvdb+rqvveXv12qXjwn+y3j5BrgV1K4TW9QwcfrVZ09BxcIFdhfPwuASrYUZahiYp7eg59DmFzOFfang/We+pD+yNRba3gs3QGhrZJWQVvYXHR1y9bM1m2mxWUMuq+3gmJZZ+69rulplu+fT66uY2OPc3mP/6Og==",sidebar_class_name:"post api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucs",previous:{title:"Create chat 1-1 room",permalink:"/docs/docs/modules/ucs/Universal Comms API/v2/create-chat-1-1-room"},next:{title:"Create room",permalink:"/docs/docs/modules/ucs/Universal Comms API/v2/create-room"}},w={},P=[];function A(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Create playback room"}),"\n",(0,n.jsx)(d(),{method:"post",path:"/v2/playback/rooms/{roomid}"}),"\n",(0,n.jsx)(s.p,{children:"API to create a playback instance"}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(i(),{label:void 0,id:void 0,children:[(0,n.jsxs)(b.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!0,open:!1,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Response Headers"})})}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Content-Type"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"duration_in_seconds",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "duration_in_seconds": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(b.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "df91094f-1fdd-4be6-a8c6-e4038ccc87f1",\n      "duration_in_seconds": 3600000\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(b.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Bad Request"})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(b.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{})]})]})})})]})}function N(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}}}]);