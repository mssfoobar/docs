"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[78019],{35341:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>N,default:()=>z,frontMatter:()=>y,metadata:()=>q,toc:()=>L});var i=a(74848),n=a(28453),r=a(77233),l=a.n(r),t=(a(22661),a(80811)),d=a.n(t),m=(a(41871),a(24791)),c=a.n(m),o=a(35654),p=a.n(o),h=a(69015),u=a.n(h),x=a(84919),j=a.n(x),g=a(84664),b=a.n(g),f=a(85225),_=(a(71156),a(7227));const y={id:"30-list-distribution-lists",title:"30. List Distribution Lists",description:"API to list Distribution Lists by pagination in query parameters. If no query parameters are specified, default to page 1 with 10 items.",sidebar_label:"30. List Distribution Lists",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVtuO2zYQ/RViHpoWEHzp5UVvKZq2ixZt0TZPhmHQ4shiQpHMcLTNRtC/F0PZWTuWnd1FEQT1i2AOD8/MHF5OD6x3CcoVdL6BdQEGU0U2sg0eSnj+x43ioJxNrH6wicluOwmpX23ipLZ3Kuqd9TqPWa/edEgyRrpFRkozdVMrH87GlSZUKWJla4umUAZr3TkWrqh3qJbqH8uNWi6UZWzTDAq4B0O56sFKenlZKMDrFqEEgUIBqWqw1VD2wHdRxq1n3CHB8GF5mct37RZJqENdJ2RFmDrH6SSrJQzFNGmy7x5HuucL9Vibiki56FO+xWXCQDxFKOr43TlfFVzXellUkCp4pb1RgQySCPilTpVQp+qrg1pjzKYJhZKsI5Nn6sdAqu0c2+hQjSQpU1i/K1RCEYxRoa4adatdh6Omz754NoNhXQBhisEnTFLD14uFfE4z//0XKKAKntGzRHWMzlZ5s81fJZnSn7chbF9hJQ2KFCIS25HAaD6epYm09DRL8Gj0hVnWTMox6jYRkC1CXrtNl5A2J+hL+R3Ax2gKDp+O3lHo4qPh+HYPx1Zb90RsbILHx2ErQs1oNponO3oIb+8mw10019CH8AU0o9eeNxdUDlW1caF6fRQcTzoM+VdAQs+XqPPV9dENtl/wnKEYr6GpAAeWPYJVIJMuJSfpfTt1BL/XRv2JbzpM/N+dxWuNQKJA6QGb4sLaLaZ02sv3u+eo0uV5pS+97rgJZN+h+f+U+t2UqDf7s6/+QrpFUi8kkU9R8yGrFrkJBkrYYYZrbqCE+e1yrk1r/dwcWY2NmA9573Ku4+PfkYMSGuZYzud93/lmg97EYD0PQ35crK9DTsCyw6yuFbR26rfAtt6Xpn7utjDleepA6ipEIuP05WwxW+QjHBK3Ondq/1J/s5hlozRhnT5k7e+b/zmZrr1+jG95Hp22Pl+TlC/8UbUV3C6hgKybFHWm3LqAJiSWmX2/1QlfkhsGGR59jehpbNJbhwbKWruEV3rzGMd2If3XeHfvFbMxgRKy23p4Gg/1cFdT2DvHJ6bwOdq66+WOvvW+3LX8ISv1QrlaDwU0qI28b6t+j3leVRiPUWf3kqzy/jr56cXfMAz/Aq/tcUQ=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/80_unh/UNH API/universal-notification-hub",custom_edit_url:null,hide_send_button:!0},N=void 0,q={id:"modules/unh/UNH API/30-list-distribution-lists",title:"30. List Distribution Lists",description:"API to list Distribution Lists by pagination in query parameters. If no query parameters are specified, default to page 1 with 10 items.",source:"@site/docs/40_modules/80_unh/UNH API/30-list-distribution-lists.api.mdx",sourceDirName:"40_modules/80_unh/UNH API",slug:"/modules/unh/UNH API/30-list-distribution-lists",permalink:"/docs/docs/modules/unh/UNH API/30-list-distribution-lists",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"30-list-distribution-lists",title:"30. List Distribution Lists",description:"API to list Distribution Lists by pagination in query parameters. If no query parameters are specified, default to page 1 with 10 items.",sidebar_label:"30. List Distribution Lists",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVtuO2zYQ/RViHpoWEHzp5UVvKZq2ixZt0TZPhmHQ4shiQpHMcLTNRtC/F0PZWTuWnd1FEQT1i2AOD8/MHF5OD6x3CcoVdL6BdQEGU0U2sg0eSnj+x43ioJxNrH6wicluOwmpX23ipLZ3Kuqd9TqPWa/edEgyRrpFRkozdVMrH87GlSZUKWJla4umUAZr3TkWrqh3qJbqH8uNWi6UZWzTDAq4B0O56sFKenlZKMDrFqEEgUIBqWqw1VD2wHdRxq1n3CHB8GF5mct37RZJqENdJ2RFmDrH6SSrJQzFNGmy7x5HuucL9Vibiki56FO+xWXCQDxFKOr43TlfFVzXellUkCp4pb1RgQySCPilTpVQp+qrg1pjzKYJhZKsI5Nn6sdAqu0c2+hQjSQpU1i/K1RCEYxRoa4adatdh6Omz754NoNhXQBhisEnTFLD14uFfE4z//0XKKAKntGzRHWMzlZ5s81fJZnSn7chbF9hJQ2KFCIS25HAaD6epYm09DRL8Gj0hVnWTMox6jYRkC1CXrtNl5A2J+hL+R3Ax2gKDp+O3lHo4qPh+HYPx1Zb90RsbILHx2ErQs1oNponO3oIb+8mw10019CH8AU0o9eeNxdUDlW1caF6fRQcTzoM+VdAQs+XqPPV9dENtl/wnKEYr6GpAAeWPYJVIJMuJSfpfTt1BL/XRv2JbzpM/N+dxWuNQKJA6QGb4sLaLaZ02sv3u+eo0uV5pS+97rgJZN+h+f+U+t2UqDf7s6/+QrpFUi8kkU9R8yGrFrkJBkrYYYZrbqCE+e1yrk1r/dwcWY2NmA9573Ku4+PfkYMSGuZYzud93/lmg97EYD0PQ35crK9DTsCyw6yuFbR26rfAtt6Xpn7utjDleepA6ipEIuP05WwxW+QjHBK3Ondq/1J/s5hlozRhnT5k7e+b/zmZrr1+jG95Hp22Pl+TlC/8UbUV3C6hgKybFHWm3LqAJiSWmX2/1QlfkhsGGR59jehpbNJbhwbKWruEV3rzGMd2If3XeHfvFbMxgRKy23p4Gg/1cFdT2DvHJ6bwOdq66+WOvvW+3LX8ISv1QrlaDwU0qI28b6t+j3leVRiPUWf3kqzy/jr56cXfMAz/Aq/tcUQ=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/80_unh/UNH API/universal-notification-hub",custom_edit_url:null,hide_send_button:!0},sidebar:"unh",previous:{title:"29. Create Distribution List",permalink:"/docs/docs/modules/unh/UNH API/29-create-distribution-list"},next:{title:"31. Get Distribution List",permalink:"/docs/docs/modules/unh/UNH API/31-get-distribution-list"}},v={},L=[];function A(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"30. List Distribution Lists"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/v1/admin/distribution_list"}),"\n",(0,i.jsx)(s.p,{children:"API to list Distribution Lists by pagination in query parameters. If no query parameters are specified, default to page 1 with 10 items."}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{in:"query",name:"page",schema:{type:"integer"},description:"page number to offset results, default to 1"}}),(0,i.jsx)(p(),{className:"paramsItem",param:{in:"query",name:"size",schema:{type:"integer"},description:"number of items per page, default to 10"}}),(0,i.jsx)(p(),{className:"paramsItem",param:{in:"query",name:"sort",schema:{type:"string"},description:"column to sort on and order by (asc, desc). If no order is specified, defaults to desc. For multiple columns sorting, separate each value with '&'."}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(_.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"data"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"data"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"internal_user_id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"internal_role_id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"internal_group_id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"external_email",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"external_phone",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"tenant_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"occ_lock",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}})]})]})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"page"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"number",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(j(),{collapsible:!1,name:"size",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(j(),{collapsible:!1,name:"total_records",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}})]})]})})]})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "data": {\n        "id": "string",\n        "name": "string",\n        "internal_user_id": [\n          "string"\n        ],\n        "internal_role_id": [\n          "string"\n        ],\n        "internal_group_id": [\n          "string"\n        ],\n        "external_email": [\n          "string"\n        ],\n        "external_phone": [\n          "string"\n        ],\n        "created_at": "string",\n        "created_by": "string",\n        "updated_at": "string",\n        "updated_by": "string",\n        "tenant_id": "string",\n        "occ_lock": 0\n      }\n    }\n  ],\n  "sent_at": "string",\n  "page": {\n    "number": 0,\n    "size": 0,\n    "total_records": 0\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(_.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"errors"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(_.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"errors"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(_.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "sent_at": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function z(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}}}]);