"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[86269],{62459:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>b,default:()=>S,frontMatter:()=>w,metadata:()=>v,toc:()=>N});var l=a(74848),i=a(28453),r=a(77233),n=a.n(r),t=(a(22661),a(80811)),m=a.n(t),o=(a(41871),a(24791)),d=a.n(o),c=a(35654),p=a.n(c),h=a(69015),x=a.n(h),j=a(84919),u=a.n(j),g=a(84664),f=a.n(g),_=a(85225),y=(a(71156),a(7227));const w={id:"6-get-workflow-template",title:"6. Get workflow template",description:"API to retrieve workflow template by id",sidebar_label:"6. Get workflow template",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVU1r20AQ/StiTy0IyzZtD74lEEooJSFp6CEEM5LG9sbSrjq7kusK/ffOyFai2HLbQOmhuljWfL15O/umVh6WTs3u1cbSepHZzdxjXmTgUT2EKkWXkC68tkbN1Nn1ZeBtQOhJY4VBFxJ0IUG8DXSqQlUAQY4eSVLXSkv0CiFFYqNhk2Qr/cqS/gFt9lC5ZIU5qFmt/LYQB8dlzFI1oSL8VmrCVM08lXgI6xyBkBjZGg17112BDtW8hdRiKMCvXlOqeZAvrrDGoRP/6XgsPy8BXH3inIk1Ho0XKxRFppO2r+jRiUt9XNLGj5h44YpsgeT1rkAK/g+8uKMh8LvGBwxPh9vBeZm+aSnVS4N02gNT7SHO+gViazMEIV0lhEx1Ogc/CKAzx9tBc1mkv4ruzCeimXcwfn6CFJsk88wm657RlHnMo9g0bHZ8aMN12ydU74aO/BzS4IZHBZ3/e2d/GgqzT2TJ9UxABFuZax5z9/vcOToHy6Hp6B7pdHLc6Z2B/UXF9P9p9f3QoV5ya2QgC26RKlaUCwHyL3ruULFkrmwqOmXbuWrlaqaiahIdyXNU9/StEVFrQe8Et6RMFNf7YhZFm0U+SrGajoCmShRNm4VtUWgv11l97XT8MxgmLpdeQyXJdrxMRuPRWA1tg4Wl5y2QS3QbzK1IB/xByuzl+MMo+Ij+eGkcJq6f+X7Fxtkz6vG7j9iiW1Fqaaj3NN6raqLCgT0Xstb3VgUTtBL6OaCuY3B4R1nTyGe+7sQKdM+vFZDeiSGznWon73xwC8jc4X7q9/PmZr9e3ganMHczb2TiK8hK+ceva9we7LTmgd33W1Vg7DzOkgQL34s9GlkZgadJu766/cID+BPV5skt",sidebar_class_name:"post api-method",info_path:"docs/40_modules/60_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},b=void 0,v={id:"modules/wfe/Workflow API/6-get-workflow-template",title:"6. Get workflow template",description:"API to retrieve workflow template by id",source:"@site/docs/40_modules/60_wfe/Workflow API/6-get-workflow-template.api.mdx",sourceDirName:"40_modules/60_wfe/Workflow API",slug:"/modules/wfe/Workflow API/6-get-workflow-template",permalink:"/docs/docs/modules/wfe/Workflow API/6-get-workflow-template",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"6-get-workflow-template",title:"6. Get workflow template",description:"API to retrieve workflow template by id",sidebar_label:"6. Get workflow template",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVU1r20AQ/StiTy0IyzZtD74lEEooJSFp6CEEM5LG9sbSrjq7kusK/ffOyFai2HLbQOmhuljWfL15O/umVh6WTs3u1cbSepHZzdxjXmTgUT2EKkWXkC68tkbN1Nn1ZeBtQOhJY4VBFxJ0IUG8DXSqQlUAQY4eSVLXSkv0CiFFYqNhk2Qr/cqS/gFt9lC5ZIU5qFmt/LYQB8dlzFI1oSL8VmrCVM08lXgI6xyBkBjZGg17112BDtW8hdRiKMCvXlOqeZAvrrDGoRP/6XgsPy8BXH3inIk1Ho0XKxRFppO2r+jRiUt9XNLGj5h44YpsgeT1rkAK/g+8uKMh8LvGBwxPh9vBeZm+aSnVS4N02gNT7SHO+gViazMEIV0lhEx1Ogc/CKAzx9tBc1mkv4ruzCeimXcwfn6CFJsk88wm657RlHnMo9g0bHZ8aMN12ydU74aO/BzS4IZHBZ3/e2d/GgqzT2TJ9UxABFuZax5z9/vcOToHy6Hp6B7pdHLc6Z2B/UXF9P9p9f3QoV5ya2QgC26RKlaUCwHyL3ruULFkrmwqOmXbuWrlaqaiahIdyXNU9/StEVFrQe8Et6RMFNf7YhZFm0U+SrGajoCmShRNm4VtUWgv11l97XT8MxgmLpdeQyXJdrxMRuPRWA1tg4Wl5y2QS3QbzK1IB/xByuzl+MMo+Ij+eGkcJq6f+X7Fxtkz6vG7j9iiW1Fqaaj3NN6raqLCgT0Xstb3VgUTtBL6OaCuY3B4R1nTyGe+7sQKdM+vFZDeiSGznWon73xwC8jc4X7q9/PmZr9e3ganMHczb2TiK8hK+ceva9we7LTmgd33W1Vg7DzOkgQL34s9GlkZgadJu766/cID+BPV5skt",sidebar_class_name:"post api-method",info_path:"docs/40_modules/60_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},sidebar:"wfe",previous:{title:"5. List workflow templates",permalink:"/docs/docs/modules/wfe/Workflow API/5-list-workflow-templates"},next:{title:"7. Delete workflow template",permalink:"/docs/docs/modules/wfe/Workflow API/7-delete-workflow-template"}},k={},N=[];function q(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_.default,{as:"h1",className:"openapi__heading",children:"6. Get workflow template"}),"\n",(0,l.jsx)(m(),{method:"post",path:"/v1/workflow_template/{template_id}"}),"\n",(0,l.jsx)(s.p,{children:"API to retrieve workflow template by id"}),"\n",(0,l.jsx)(_.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{name:"template_id",in:"path",schema:{type:"string"},required:!0}})})})]}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Header Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{in:"header",name:"Authorization",schema:{type:"string"},required:!0,description:"Bearer token"}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n(),{label:void 0,id:void 0,children:[(0,l.jsxs)(y.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"data"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"workflow_json",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object"}}),(0,l.jsx)(u(),{collapsible:!1,name:"designer_json",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object"}}),(0,l.jsx)(u(),{collapsible:!1,name:"editable",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,l.jsx)(u(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"created_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"updated_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"tenant_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"occ_lock",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}})]})]})}),(0,l.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "data": {\n    "id": "string",\n    "name": "string",\n    "workflow_json": {},\n    "designer_json": {},\n    "editable": true,\n    "created_at": "string",\n    "created_by": "string",\n    "updated_at": "string",\n    "updated_by": "string",\n    "tenant_id": "string",\n    "occ_lock": 0\n  },\n  "sent_at": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Bad Request"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"errors"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"errors"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function S(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(q,{...e})}):q(e)}}}]);