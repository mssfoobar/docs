"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[59076],{71729:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>b,default:()=>I,frontMatter:()=>w,metadata:()=>k,toc:()=>N});var l=a(74848),n=a(28453),i=a(77233),r=a.n(i),t=(a(22661),a(80811)),o=a.n(t),c=(a(41871),a(24791)),d=a.n(c),m=a(35654),p=a.n(m),h=a(69015),x=a.n(h),u=a(84919),j=a.n(u),f=a(84664),g=a.n(f),y=a(85225),_=(a(71156),a(7227));const w={id:"9-get-workflow-execution-list",title:"9. Get workflow execution list",description:"API to get running workflow executions",sidebar_label:"9. Get workflow execution list",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVktr20AQ/ivDHJoWhB+hPVS3BNIQSmlpG3oIJqylkbyJtKvMjuwkRv+9jCzHcWwHpy2l1Bdj7cx8j9Xu5zmKyQPGFzjzfJ0VfoajCFMKCdtKrHcY49GXMxAPOQlw7Zx1OSyLgW4pqbUuYISVYVOSEOvAOVptnpBJiTFCZ0rSYbVMPNt70w6PMCQTKg3Gc5S7SguCsHU5NhEy3dSWKcVYuKanrI7JMDGIvyaHTdTB3dTEdyu0yuS0DcQ6oZxYUdanagO4uhy3o8FnWVDZFOpCQgQpZaYuRJeGO0GDvX8ZaIfnM7BCZYCKGJTIOt5gN6Bned7KdbzEF3XpdKh2gndgXAqeU2IY38FrExKFDsmbHpxl4Hy3ZgOEihKbWUofuAWdo8U9+OAZyroQWxUEC5DQQliXRxBI3w8hIJNMYGqKmmBmZQIHrw562Ix0w0PlXaCgGg4HA/1aZ/75I0aYeCfkRFdNVRU2ad+l/lXQkvmmDX58RYkaVLGviMUuAFIje1S1O/KozDAbtf7p8x3ty4NyadOtGxPEsFyK1X3cWG4/EQZycmlkd8HbbVYdmxS+0k1NQf6cZ7upREjMnn/DqpJC0OO6Q2andLip9NyZ7lKh9P+R+m7bpp45IXamgG/EU2I4USJ/Q/OSVUky8SnGmFPbbmSCMfanw/5DfugLq+QWIVBzoSkgUsX9/iwreylND3uGD9sTb13mWzQrhcL9WObKJ+NMTqVqilCHLfQPe4PeALcFVOZ5lUqldrfNTYSVD1Ka1ofuvnzfg1OSLSEGhW1Py9r4+crd/aOws0/oVvpVYaxG1MKLeWfaBU6HGK3F7sQH0YX5fGwCnXPRNPp4cdurmakNZlxoImamCE8j8THRl+TYDrbXdLdK0Pa6xhjbDNqfxr7J9iyFLk9/kcK/GHbPy12k+UruSH+wVb0YX4yaaPmnSl+JRc9RklD1uGvjFtApD4f39OQ7Ns1PIOVx7g==",sidebar_class_name:"get api-method",info_path:"docs/40_modules/60_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},b=void 0,k={id:"modules/wfe/Workflow API/9-get-workflow-execution-list",title:"9. Get workflow execution list",description:"API to get running workflow executions",source:"@site/docs/40_modules/60_wfe/Workflow API/9-get-workflow-execution-list.api.mdx",sourceDirName:"40_modules/60_wfe/Workflow API",slug:"/modules/wfe/Workflow API/9-get-workflow-execution-list",permalink:"/docs/docs/modules/wfe/Workflow API/9-get-workflow-execution-list",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"9-get-workflow-execution-list",title:"9. Get workflow execution list",description:"API to get running workflow executions",sidebar_label:"9. Get workflow execution list",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVktr20AQ/ivDHJoWhB+hPVS3BNIQSmlpG3oIJqylkbyJtKvMjuwkRv+9jCzHcWwHpy2l1Bdj7cx8j9Xu5zmKyQPGFzjzfJ0VfoajCFMKCdtKrHcY49GXMxAPOQlw7Zx1OSyLgW4pqbUuYISVYVOSEOvAOVptnpBJiTFCZ0rSYbVMPNt70w6PMCQTKg3Gc5S7SguCsHU5NhEy3dSWKcVYuKanrI7JMDGIvyaHTdTB3dTEdyu0yuS0DcQ6oZxYUdanagO4uhy3o8FnWVDZFOpCQgQpZaYuRJeGO0GDvX8ZaIfnM7BCZYCKGJTIOt5gN6Bned7KdbzEF3XpdKh2gndgXAqeU2IY38FrExKFDsmbHpxl4Hy3ZgOEihKbWUofuAWdo8U9+OAZyroQWxUEC5DQQliXRxBI3w8hIJNMYGqKmmBmZQIHrw562Ix0w0PlXaCgGg4HA/1aZ/75I0aYeCfkRFdNVRU2ad+l/lXQkvmmDX58RYkaVLGviMUuAFIje1S1O/KozDAbtf7p8x3ty4NyadOtGxPEsFyK1X3cWG4/EQZycmlkd8HbbVYdmxS+0k1NQf6cZ7upREjMnn/DqpJC0OO6Q2andLip9NyZ7lKh9P+R+m7bpp45IXamgG/EU2I4USJ/Q/OSVUky8SnGmFPbbmSCMfanw/5DfugLq+QWIVBzoSkgUsX9/iwreylND3uGD9sTb13mWzQrhcL9WObKJ+NMTqVqilCHLfQPe4PeALcFVOZ5lUqldrfNTYSVD1Ka1ofuvnzfg1OSLSEGhW1Py9r4+crd/aOws0/oVvpVYaxG1MKLeWfaBU6HGK3F7sQH0YX5fGwCnXPRNPp4cdurmakNZlxoImamCE8j8THRl+TYDrbXdLdK0Pa6xhjbDNqfxr7J9iyFLk9/kcK/GHbPy12k+UruSH+wVb0YX4yaaPmnSl+JRc9RklD1uGvjFtApD4f39OQ7Ns1PIOVx7g==",sidebar_class_name:"get api-method",info_path:"docs/40_modules/60_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},sidebar:"wfe",previous:{title:"8. Start workflow execution",permalink:"/docs/docs/modules/wfe/Workflow API/8-start-workflow-execution"},next:{title:"10. Get workflow execution history",permalink:"/docs/docs/modules/wfe/Workflow API/10-get-workflow-execution-history"}},v={},N=[];function S(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"9. Get workflow execution list"}),"\n",(0,l.jsx)(o(),{method:"get",path:"/v1/workflow"}),"\n",(0,l.jsx)(s.p,{children:"API to get running workflow executions"}),"\n",(0,l.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Query Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)(p(),{className:"paramsItem",param:{in:"query",name:"page",schema:{type:"integer"},description:"page number to offset results, default to 1"}}),(0,l.jsx)(p(),{className:"paramsItem",param:{in:"query",name:"size",schema:{type:"integer"},description:"number of items per page, default to 10"}}),(0,l.jsx)(p(),{className:"paramsItem",param:{in:"query",name:"sort",schema:{type:"string"},description:"column to sort on and order by (asc, desc). If no order is specified, defaults to desc. For multiple columns sorting, separate each value with '&'."}})]})})]}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Header Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{in:"header",name:"Authorization",schema:{type:"string"},required:!0,description:"Bearer token"}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(_.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"data"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"items"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(j(),{collapsible:!1,name:"workflow_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"start_time",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,l.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,l.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "data": {\n    "items": [\n      {\n        "workflow_id": "string",\n        "start_time": "string"\n      }\n    ]\n  },\n  "sent_at": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(_.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Bad Request"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"errors"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,l.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(_.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"errors"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,l.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(_.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function I(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(S,{...e})}):S(e)}}}]);