"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[76196],{41447:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>v,default:()=>M,frontMatter:()=>f,metadata:()=>y,toc:()=>A});var n=s(74848),t=s(28453),r=s(77233),l=s.n(r),i=(s(22661),s(80811)),d=s.n(i),o=(s(41871),s(24791)),m=s.n(o),p=s(35654),c=s.n(p),u=(s(69015),s(84919)),h=s.n(u),x=s(84664),j=s.n(x),g=s(85225),b=(s(71156),s(7227));const f={id:"create-tenant-groups",title:"Create top level tenant group.",description:"Create top level tenant group.",sidebar_label:"Create top level tenant group.",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMFu2zgQ/RViTluAjdNuuwfd3GA3NdAiQeLuxTAWY3Eis5VIlhyl8Qr698WQsuPEwba+WKJmhm/mvTcDMDYJqhUsyaHjpC6j70OCtQYfKCJb7xYGKqgjIVOJmmI0BIzYEVOUEgM47Agq4By0MKDBOqggIG9BQ6TvvY1koOLYk4ZUb6lDqAbgXZC8xNG6BsZRH0rNe976aP/NOPb1toSGImgwlOpoQ/5Wwd/YWqOwriklxf4bOYVJofpAGCmqOpIhxxZbZZ1Cpz4ul9fqyQXqUPnXsa5LMCX+4M1OImrvmBzLI4bQ2jrXnn1NgnI4KvV4yar0u9b78n7zlWqWCUehgS0lybDmFILcj+bKtbsCdtTT8Abo8OETuYa3UL19/14/x575o8zUaWO60PbSh9RvsgIufF/anCKsY2ry+O587JDL0R/vhFFgy60E5cwbCpESOS68jhLwdOT5IAXvUun87fkb+XvK+EXWpOjsl2f+nD65+d1Ltb84nKRBBnLQ76dBf/m4scaQyy2+BE6xD6qle2pVsYVqZABnoKEj3nqxVvApU53nDTM0nXWzEp1mw95N46zZ2y5RvN97ro+tWII5VLPZMFjs0mvE9A85E7x1PI4nRrkkJ84mo0ohJTVEyDKum0cx//mAXWizkiY7HiT3KJzjs4z/8P5MJuej2PfOZxYmMSzmn2/V/HpxAnF+ufikrkJSH/uNWmTf8k6hM2pe/P0ZHTbUkWN1S/He1gQaZCgl/83Z+dl5FrFP3KE76uGnvDxBclAM0wPPQovWSdk89WFqeQWZMtDT5hOKqqMl2BxW6laYrlYwDBtM9CW24yjH33uKO6hWaw33GC1uZDirAYxN8mygusM20Qm0g+rht5vJPa8U6JchT4fodjIpbHt5Aw3faHe8s8f1qPcbVjCUzxflptdLKfKYfuI1Wd0lQ3gK/L+x6yMPXF/dLkHDZtqhnTeSE/GH7Df8UaD63HneB/lsgBZd02MjsaWm/P4DYP9ZOA==",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},v=void 0,y={id:"modules/iams/IAMS API/create-tenant-groups",title:"Create top level tenant group.",description:"Create top level tenant group.",source:"@site/docs/40_modules/92_iams/IAMS API/create-tenant-groups.api.mdx",sourceDirName:"40_modules/92_iams/IAMS API",slug:"/modules/iams/IAMS API/create-tenant-groups",permalink:"/docs/docs/modules/iams/IAMS API/create-tenant-groups",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-tenant-groups",title:"Create top level tenant group.",description:"Create top level tenant group.",sidebar_label:"Create top level tenant group.",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMFu2zgQ/RViTluAjdNuuwfd3GA3NdAiQeLuxTAWY3Eis5VIlhyl8Qr698WQsuPEwba+WKJmhm/mvTcDMDYJqhUsyaHjpC6j70OCtQYfKCJb7xYGKqgjIVOJmmI0BIzYEVOUEgM47Agq4By0MKDBOqggIG9BQ6TvvY1koOLYk4ZUb6lDqAbgXZC8xNG6BsZRH0rNe976aP/NOPb1toSGImgwlOpoQ/5Wwd/YWqOwriklxf4bOYVJofpAGCmqOpIhxxZbZZ1Cpz4ul9fqyQXqUPnXsa5LMCX+4M1OImrvmBzLI4bQ2jrXnn1NgnI4KvV4yar0u9b78n7zlWqWCUehgS0lybDmFILcj+bKtbsCdtTT8Abo8OETuYa3UL19/14/x575o8zUaWO60PbSh9RvsgIufF/anCKsY2ry+O587JDL0R/vhFFgy60E5cwbCpESOS68jhLwdOT5IAXvUun87fkb+XvK+EXWpOjsl2f+nD65+d1Ltb84nKRBBnLQ76dBf/m4scaQyy2+BE6xD6qle2pVsYVqZABnoKEj3nqxVvApU53nDTM0nXWzEp1mw95N46zZ2y5RvN97ro+tWII5VLPZMFjs0mvE9A85E7x1PI4nRrkkJ84mo0ohJTVEyDKum0cx//mAXWizkiY7HiT3KJzjs4z/8P5MJuej2PfOZxYmMSzmn2/V/HpxAnF+ufikrkJSH/uNWmTf8k6hM2pe/P0ZHTbUkWN1S/He1gQaZCgl/83Z+dl5FrFP3KE76uGnvDxBclAM0wPPQovWSdk89WFqeQWZMtDT5hOKqqMl2BxW6laYrlYwDBtM9CW24yjH33uKO6hWaw33GC1uZDirAYxN8mygusM20Qm0g+rht5vJPa8U6JchT4fodjIpbHt5Aw3faHe8s8f1qPcbVjCUzxflptdLKfKYfuI1Wd0lQ3gK/L+x6yMPXF/dLkHDZtqhnTeSE/GH7Df8UaD63HneB/lsgBZd02MjsaWm/P4DYP9ZOA==",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},sidebar:"iams",previous:{title:"Create child group in the group.",permalink:"/docs/docs/modules/iams/IAMS API/create-tenant-group-children"},next:{title:"Create a tenant membership. Adding user to the tenant as member.",permalink:"/docs/docs/modules/iams/IAMS API/create-tenant-membership"}},_={},A=[];function I(e){const a={p:"p",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Create top level tenant group."}),"\n",(0,n.jsx)(d(),{method:"post",path:"/admin/tenants/{tenantId}/groups"}),"\n",(0,n.jsx)(a.p,{children:"Create top level tenant group."}),"\n",(0,n.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(c(),{className:"paramsItem",param:{name:"tenantId",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Header Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(c(),{className:"paramsItem",param:{name:"Authorization",in:"header",description:"Valid access token as a Bearer credential in an HTTP Authorization header",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)(m(),{className:"openapi-tabs__mime",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(a.p,{children:"Body"})}),(0,n.jsx)("strong",{className:"openapi-schema__required",children:(0,n.jsx)(a.p,{children:"required"})})]}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(h(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{maxLength:255,type:"string"}}),(0,n.jsx)(h(),{collapsible:!1,name:"parentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(h(),{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(h(),{collapsible:!1,name:"subGroupCount",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(l(),{label:void 0,id:void 0,children:[(0,n.jsxs)(b.default,{label:"201",value:"201",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Created"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(j(),{className:"openapi-tabs__schema",children:(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"string"})})})]})})})})})})]}),(0,n.jsxs)(b.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(b.default,{label:"403",value:"403",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Forbidden"})}),(0,n.jsx)("div",{})]})]})})})]})}function M(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(I,{...e})}):I(e)}}}]);