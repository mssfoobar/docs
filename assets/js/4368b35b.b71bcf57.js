"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[69010],{40651:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>b,default:()=>R,frontMatter:()=>v,metadata:()=>q,toc:()=>k});var r=a(74848),l=a(28453),n=a(77233),i=a.n(n),t=(a(22661),a(80811)),d=a.n(t),m=(a(41871),a(24791)),p=a.n(m),c=a(35654),o=a.n(c),u=a(69015),h=a.n(u),x=a(84919),j=a.n(x),y=a(84664),g=a.n(y),_=a(85225),f=(a(71156),a(7227));const v={id:"request-replay-start-resume",title:"Request Replay Start/Resume",description:"Start/Resume existing replay session",sidebar_label:"Request Replay Start/Resume",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVk2P2zYQ/SvEHIoUlW3JsrNe3TZdHxZtk63Xe0gMwxiLY1upJCok5awh6L8XFKVd+TMuEKA6GLL4OB/vzZBTgMa1gmAGnFaYxxrmDnBSoYwyHYkUAnjSKHVvQipPiNFLpHSUrpmkLMYdU6SUgTmQocSENEljrYAUE4IALCzi4EBkjGWoN3Do4eGeiVVjUQumKo+y8ggOqHBDCUJQgN5lxqjSMkrXUDog6VseSeIQaJmTA/SCSRYbDC7dm/fcxY7vLYedgfkZDVa3naE3Go1uh5zQ86GcWxOk9AfBd8ZFKFJNqTavmGVxFKIJsvdVmUiL41jE8iuF2uQvRUZSR6TMqk1moTIywRUHCf+FKUct5I6tIop5K3u7wWmsp3myJAnlXqqzfevzVtqHjt3usDSP2a4ykSobXd91j4P69Ac4Pyt9jrqNQilxZ0pAU6J+vDviJ8UOJaEmvkB9cjnP+KVlpVHn6uQSj5Ql7TykodVU5kJHCSmNSXYJSim/DhijutLkazUdVocRWFGqT+duVlsVYrWZWZqv65N97qHv9v2O+77jDafeKBj0A8/r3ri3t8Ob31w3cF3YF+MAP+wHvtf1vZvBqP+Kb6iHj58+juFYEpiMH/+8+7x4mt5NpovJ+O/n8dN0fA/nlXnz6k8rL4HrfoFz8uyh/SP0oUZ7cO8I3uq+eUuZU0R8qeUbnGrJD8jZxJ5PP683zxeKAySlkFd0aEJK4ZpOFttBuZ3N3g+8vuGs8TlrmYX964VFiqVCM0nId0xIhrF9pZQTh3JuvQ5PcfiQapIpxuyJ5JYkGxt3/xOb//EcvMzydTQP/MB3z9KsSG6jkBp+d1RzXFNaOpCQ3ghzUGR5FaC5vwPobb2elahXNFd82at60DRzxbT1lcsYAthonQW9nkxll9O230XZP5oC7u0Awuzu6m42Ykze7ufxpWvODBgrUXEV6WoEmFAoJGe/sEkFBgdMVNaZ13W77lEId48PbCUkk83O1zKsaDKaZkLpBKsSqUecOsDaC2uPS4cOWuPFtWNVLbymF93LYozS6qozpBa1GDPYeq9HDzgQtGYuq8jcgY1Q2kCLYomKnmVclubzt5zkDoLZ3IEtygiXhrhZYY5f884hWGGs6EIa7yb1XPIr+8EYdzKTpjHSSh6Mc/MPHPiHdu3psZyXDmwIOckqPrv8u42iMzVG3rYftXPpNDvuwpAyfRE7b9X84/MUHFjWo2EieHU04XdDN363kYqKFDv0mW8FxJiuc9tf1qR5/gWaJdRD",sidebar_class_name:"put api-method",info_path:"docs/40_modules/50_rnr/Record & Replay API/record-replay",custom_edit_url:null,hide_send_button:!0},b=void 0,q={id:"modules/rnr/Record & Replay API/request-replay-start-resume",title:"Request Replay Start/Resume",description:"Start/Resume existing replay session",source:"@site/docs/40_modules/50_rnr/Record & Replay API/request-replay-start-resume.api.mdx",sourceDirName:"40_modules/50_rnr/Record & Replay API",slug:"/modules/rnr/Record & Replay API/request-replay-start-resume",permalink:"/docs/docs/modules/rnr/Record & Replay API/request-replay-start-resume",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-replay-start-resume",title:"Request Replay Start/Resume",description:"Start/Resume existing replay session",sidebar_label:"Request Replay Start/Resume",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVk2P2zYQ/SvEHIoUlW3JsrNe3TZdHxZtk63Xe0gMwxiLY1upJCok5awh6L8XFKVd+TMuEKA6GLL4OB/vzZBTgMa1gmAGnFaYxxrmDnBSoYwyHYkUAnjSKHVvQipPiNFLpHSUrpmkLMYdU6SUgTmQocSENEljrYAUE4IALCzi4EBkjGWoN3Do4eGeiVVjUQumKo+y8ggOqHBDCUJQgN5lxqjSMkrXUDog6VseSeIQaJmTA/SCSRYbDC7dm/fcxY7vLYedgfkZDVa3naE3Go1uh5zQ86GcWxOk9AfBd8ZFKFJNqTavmGVxFKIJsvdVmUiL41jE8iuF2uQvRUZSR6TMqk1moTIywRUHCf+FKUct5I6tIop5K3u7wWmsp3myJAnlXqqzfevzVtqHjt3usDSP2a4ykSobXd91j4P69Ac4Pyt9jrqNQilxZ0pAU6J+vDviJ8UOJaEmvkB9cjnP+KVlpVHn6uQSj5Ql7TykodVU5kJHCSmNSXYJSim/DhijutLkazUdVocRWFGqT+duVlsVYrWZWZqv65N97qHv9v2O+77jDafeKBj0A8/r3ri3t8Ob31w3cF3YF+MAP+wHvtf1vZvBqP+Kb6iHj58+juFYEpiMH/+8+7x4mt5NpovJ+O/n8dN0fA/nlXnz6k8rL4HrfoFz8uyh/SP0oUZ7cO8I3uq+eUuZU0R8qeUbnGrJD8jZxJ5PP683zxeKAySlkFd0aEJK4ZpOFttBuZ3N3g+8vuGs8TlrmYX964VFiqVCM0nId0xIhrF9pZQTh3JuvQ5PcfiQapIpxuyJ5JYkGxt3/xOb//EcvMzydTQP/MB3z9KsSG6jkBp+d1RzXFNaOpCQ3ghzUGR5FaC5vwPobb2elahXNFd82at60DRzxbT1lcsYAthonQW9nkxll9O230XZP5oC7u0Awuzu6m42Ykze7ufxpWvODBgrUXEV6WoEmFAoJGe/sEkFBgdMVNaZ13W77lEId48PbCUkk83O1zKsaDKaZkLpBKsSqUecOsDaC2uPS4cOWuPFtWNVLbymF93LYozS6qozpBa1GDPYeq9HDzgQtGYuq8jcgY1Q2kCLYomKnmVclubzt5zkDoLZ3IEtygiXhrhZYY5f884hWGGs6EIa7yb1XPIr+8EYdzKTpjHSSh6Mc/MPHPiHdu3psZyXDmwIOckqPrv8u42iMzVG3rYftXPpNDvuwpAyfRE7b9X84/MUHFjWo2EieHU04XdDN363kYqKFDv0mW8FxJiuc9tf1qR5/gWaJdRD",sidebar_class_name:"put api-method",info_path:"docs/40_modules/50_rnr/Record & Replay API/record-replay",custom_edit_url:null,hide_send_button:!0},sidebar:"rnr",previous:{title:"Request Replay Session",permalink:"/docs/docs/modules/rnr/Record & Replay API/request-replay-session"},next:{title:"Request Replay Stop/Pause",permalink:"/docs/docs/modules/rnr/Record & Replay API/request-replay-stop-pause"}},N={},k=[];function S(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.default,{as:"h1",className:"openapi__heading",children:"Request Replay Start/Resume"}),"\n",(0,r.jsx)(d(),{method:"put",path:"/v1/replay/{replayid}/start"}),"\n",(0,r.jsx)(s.p,{children:"Start/Resume existing replay session"}),"\n",(0,r.jsx)(_.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(o(),{className:"paramsItem",param:{name:"replayid",in:"path",description:"ID of replay to start/resume",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}})})})]}),"\n",(0,r.jsx)(p(),{className:"openapi-tabs__mime",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(s.p,{children:"Body"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(j(),{collapsible:!1,name:"replay_speed",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{description:"Mandatory field of replay speed",type:"number"}})})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsxs)(i(),{label:void 0,id:void 0,children:[(0,r.jsxs)(f.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})}),(0,r.jsx)("div",{children:(0,r.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(s.p,{children:"data"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(s.p,{children:"object[]"})})]})}),(0,r.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,r.jsx)(s.p,{children:"Array ["})})}),(0,r.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"display_status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"replay_start_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"replay_end_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"replay_last_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"replay_speed",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,r.jsx)(s.p,{children:"]"})})})]})]})}),(0,r.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(h(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "created_at": "string",\n      "updated_at": "string",\n      "status": "string",\n      "display_status": "string",\n      "replay_start_timestamp": "string",\n      "replay_end_timestamp": "string",\n      "replay_last_timestamp": "string",\n      "replay_speed": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,r.jsx)(f.default,{label:"Example",value:"Example",children:(0,r.jsx)(h(),{responseExample:'{\n  "data": [\n    {\n      "id": "ab076d0a-31b5-41b5-84f9-5188895dea13",\n      "created_at": "2023-06-15T18:42:11.709957+00:00",\n      "updated_at": "2023-06-15T18:52:31.317482+00:00",\n      "status": "NONE",\n      "display_status": "REPLAY_START_REQUESTED",\n      "replay_start_timestamp": "2023-06-13T00:00:00Z",\n      "replay_end_timestamp": "2023-06-13T03:00:00Z",\n      "replay_last_timestamp": "2023-06-13T01:00:00Z",\n      "replay_speed": 0.5\n    }\n  ],\n  "sent_at": "2023-06-15T18:52:31Z"\n}',language:"json"})})]})})})})]}),(0,r.jsxs)(f.default,{label:"400",value:"400",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Bad Request"})}),(0,r.jsx)("div",{children:(0,r.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(s.p,{children:"errors"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(s.p,{children:"object"})})]})}),(0,r.jsx)("div",{style:{marginLeft:"1rem"},children:(0,r.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})]})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(h(),{responseExample:'{\n  "sent_at": "string",\n  "errors": {\n    "message": "string"\n  }\n}',language:"json"})}),(0,r.jsx)(f.default,{label:"Example",value:"Example",children:(0,r.jsx)(h(),{responseExample:'{\n  "sent_at": "2023-06-15T18:53:12Z",\n  "errors": [\n    {\n      "message": "replay session is not ready or already ended"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,r.jsxs)(f.default,{label:"500",value:"500",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Internal Server Error"})}),(0,r.jsx)("div",{children:(0,r.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(s.p,{children:"errors"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(s.p,{children:"object[]"})})]})}),(0,r.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,r.jsx)(s.p,{children:"Array ["})})}),(0,r.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,r.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(h(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,r.jsx)(f.default,{label:"Example",value:"Example",children:(0,r.jsx)(h(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]})]})})})]})}function R(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(S,{...e})}):S(e)}}}]);