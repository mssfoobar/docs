"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[80326],{46551:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>b,default:()=>M,frontMatter:()=>q,metadata:()=>v,toc:()=>R});var n=a(74848),i=a(28453),l=a(77233),r=a.n(l),t=(a(22661),a(80811)),d=a.n(t),c=(a(41871),a(24791)),m=a.n(c),o=a(35654),p=a.n(o),h=a(69015),u=a.n(h),x=a(84919),j=a.n(x),g=a(84664),y=a.n(g),f=a(85225),_=(a(71156),a(7227));const q={id:"request-replay-session",title:"Request Replay Session",description:"gets information of specified `id`",sidebar_label:"Request Replay Session",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVm1v2jAQ/iuWP6ybViAhhJd869SqqrapFXQf1qqiJj6Ku7zNNqgo4r/vLgmU8lYmTRqKwMTnu/PzPOdzzq14Mjy45xLGYhpZ/nCKQxNqlVmVJjzgT2ANU8k41bGgVywdM5NBqMYKJHtU8pGf8kxoEYMFTb5ynuAfXKohi8RcSTRQ5CoTdsI3/V+dk8fSlNmUYbz1cGhvwgnEggc5t/OM/BqrVfLEF6cY4fdUaZA8sHoKpxxeRJxFZCNGTqctHVHz3JFfa9FXtzXu1Xy32+32fAnC9fjigVyYLE0MGArQdBz6eZvh9VdMIkwTC4mlWZFlkQqL7BrPhkzy7RzT0TOElqDRaQbaqjKAFHbdSmgt5gSPhdi8vxqh3IVCqEFYkENhd05PM3lo2lhhp2bnlFSGaBkeMCmJIwtth1bFgKM4O2QKiTzOMBLmSJeoR1iHJpnGI9B8gR/cH9K2e+80u1LMkpv7EubjBPQWe5RP06s57Zrr37rdoNUMXLfecXo9v/PZcQLU1lsyNu27gefV3Xan3Xq1X0LPvw8uh4Pb65thIcdNZnj/4ubb2c81i33EvAb1bosg+Nzxfey8sfa2rDcp2nTexKfecv1Oq7m2qqLLqftUgCt+tuHw23cVia1dhflFSNbHEwCjswutU/3v6nS/aFAyFOqIakVUjHiCncLbkN4BDNwCuWXM+zW3fIAjOpGVZCfHyPWEMZmCSU4sgxdlLJ5/ZSb+LnSvEEidiIgNQM9A/1eE//KcPIz8kdB7gefshd4gJioEpgxLUsvm2LTwIJDzClIMge1wksqygRYdEntfwBszt1FWQSNftscFlXmBcRllqiO0nFibBY2GTnRdwqxZF7q51TvPy6bNytVFO6PWWexb2aIP9iFMtWQfsFAoGrqgOOVyt+7UnS2nZzdXDNsv7qdaWfXmasvET5YaG4uC7qrVL8uwjMIqZW76zl/Fc9y9omLPwottoGO8RVA/I3zyCtF7PnNXJwsOgtWlA8GYYJ5kkucjYeCHjhYLeo2p6jm+x+FMaCVGhBQCj4cqjZG0sYgMHEj+Y7+6eHxi799fdm5iKeykoEREU/qHw18wX785oZxwG6gspJdSLKfPwhAyu7ZwqxBJCisFXl7covL/AE1LR74=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/50_rnr/Record & Replay API/record-replay",custom_edit_url:null,hide_send_button:!0},b=void 0,v={id:"modules/rnr/Record & Replay API/request-replay-session",title:"Request Replay Session",description:"gets information of specified `id`",source:"@site/docs/40_modules/50_rnr/Record & Replay API/request-replay-session.api.mdx",sourceDirName:"40_modules/50_rnr/Record & Replay API",slug:"/modules/rnr/Record & Replay API/request-replay-session",permalink:"/docs/docs/modules/rnr/Record & Replay API/request-replay-session",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-replay-session",title:"Request Replay Session",description:"gets information of specified `id`",sidebar_label:"Request Replay Session",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVm1v2jAQ/iuWP6ybViAhhJd869SqqrapFXQf1qqiJj6Ku7zNNqgo4r/vLgmU8lYmTRqKwMTnu/PzPOdzzq14Mjy45xLGYhpZ/nCKQxNqlVmVJjzgT2ANU8k41bGgVywdM5NBqMYKJHtU8pGf8kxoEYMFTb5ynuAfXKohi8RcSTRQ5CoTdsI3/V+dk8fSlNmUYbz1cGhvwgnEggc5t/OM/BqrVfLEF6cY4fdUaZA8sHoKpxxeRJxFZCNGTqctHVHz3JFfa9FXtzXu1Xy32+32fAnC9fjigVyYLE0MGArQdBz6eZvh9VdMIkwTC4mlWZFlkQqL7BrPhkzy7RzT0TOElqDRaQbaqjKAFHbdSmgt5gSPhdi8vxqh3IVCqEFYkENhd05PM3lo2lhhp2bnlFSGaBkeMCmJIwtth1bFgKM4O2QKiTzOMBLmSJeoR1iHJpnGI9B8gR/cH9K2e+80u1LMkpv7EubjBPQWe5RP06s57Zrr37rdoNUMXLfecXo9v/PZcQLU1lsyNu27gefV3Xan3Xq1X0LPvw8uh4Pb65thIcdNZnj/4ubb2c81i33EvAb1bosg+Nzxfey8sfa2rDcp2nTexKfecv1Oq7m2qqLLqftUgCt+tuHw23cVia1dhflFSNbHEwCjswutU/3v6nS/aFAyFOqIakVUjHiCncLbkN4BDNwCuWXM+zW3fIAjOpGVZCfHyPWEMZmCSU4sgxdlLJ5/ZSb+LnSvEEidiIgNQM9A/1eE//KcPIz8kdB7gefshd4gJioEpgxLUsvm2LTwIJDzClIMge1wksqygRYdEntfwBszt1FWQSNftscFlXmBcRllqiO0nFibBY2GTnRdwqxZF7q51TvPy6bNytVFO6PWWexb2aIP9iFMtWQfsFAoGrqgOOVyt+7UnS2nZzdXDNsv7qdaWfXmasvET5YaG4uC7qrVL8uwjMIqZW76zl/Fc9y9omLPwottoGO8RVA/I3zyCtF7PnNXJwsOgtWlA8GYYJ5kkucjYeCHjhYLeo2p6jm+x+FMaCVGhBQCj4cqjZG0sYgMHEj+Y7+6eHxi799fdm5iKeykoEREU/qHw18wX785oZxwG6gspJdSLKfPwhAyu7ZwqxBJCisFXl7covL/AE1LR74=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/50_rnr/Record & Replay API/record-replay",custom_edit_url:null,hide_send_button:!0},sidebar:"rnr",previous:{title:"Request  Replay Jump Init",permalink:"/docs/docs/modules/rnr/Record & Replay API/request-replay-jump-init"},next:{title:"Request Replay Start/Resume",permalink:"/docs/docs/modules/rnr/Record & Replay API/request-replay-start-resume"}},N={},R=[];function E(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Request Replay Session"}),"\n",(0,n.jsx)(d(),{method:"get",path:"/v1/replay/{replayid}"}),"\n",(0,n.jsxs)(s.p,{children:["gets information of specified ",(0,n.jsx)(s.code,{children:"id"})]}),"\n",(0,n.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"replayid",in:"path",description:"ID of replay to get information",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(_.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"display_status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"replay_start_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"replay_end_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"replay_last_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"replay_speed",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "created_at": "string",\n      "updated_at": "string",\n      "status": "string",\n      "display_status": "string",\n      "replay_start_timestamp": "string",\n      "replay_end_timestamp": "string",\n      "replay_last_timestamp": "string",\n      "replay_speed": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "ab076d0a-31b5-41b5-84f9-5188895dea13",\n      "created_at": "2023-06-15T18:42:11.709957+00:00",\n      "updated_at": "2023-06-15T18:48:33.167647+00:00",\n      "status": "MSG_STOP_OK",\n      "display_status": "REPLAY_STOP_OK",\n      "replay_start_timestamp": "2023-06-13T00:00:00Z",\n      "replay_end_timestamp": "2023-06-13T03:00:00Z",\n      "replay_last_timestamp": "2023-06-13T00:02:02.415742Z",\n      "replay_speed": 0.5\n    }\n  ],\n  "sent_at": "2023-06-15T18:48:56Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(_.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Bad Request Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "string",\n  "errors": {\n    "message": "string"\n  }\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "2023-06-15T18:48:12Z",\n  "errors": [\n    {\n      "message": "Session id \'ab076d0a-31b5-41b5-84f9-5188895dea13\'  doesn\'t exist"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(_.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]})]})})})]})}function M(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(E,{...e})}):E(e)}}}]);