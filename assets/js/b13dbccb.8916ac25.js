"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[43835],{24946:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>f,default:()=>I,frontMatter:()=>g,metadata:()=>y,toc:()=>v});var i=a(74848),n=a(28453),r=a(77233),t=a.n(r),l=(a(22661),a(80811)),d=a.n(l),o=(a(41871),a(24791)),m=a.n(o),c=a(35654),p=a.n(c),u=(a(69015),a(84919)),h=a.n(u),x=(a(84664),a(85225)),j=(a(71156),a(7227));const g={id:"assign-user-with-tenant-roles",title:"Assign roles to user.",description:"Assign roles to user.",sidebar_label:"Assign roles to user.",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsCTxvg1e22k2/pPgNsa9Em26EIBsZiE2225El0t8zwfx8o2Wk7Z+jQnBKJpB7J9146YNwEKK5gQRYtqwtXUYBVBq4hj2ycnWsoAEMwG7sM5L8Y3qbYFJpBgx5rYvJSpwOLNUEBHGPmGjIwFgpokLeQgacfrfGkoWDfUgah3FKNUHTAu0byAntjN9D32b5UG8hPCmkKpTeNIIQClsv5a+WulYQeqU+OFW8p/oo1HvfurOWt8+Z3HMP4/JZQk58A+IyV0QrLkkJQ7L6TVRgUqlNCT16VnjRZNlgpYxVa9X6xOFf3HlD7yv+PdZWCKfCp0zuJuI9KVqSkG2WCGsseQQals0yWJQObpjJlhJB/C5LWTV9E73EnI2Cqw51zt/5GJQsJvBCGDcVbo6doBSrqM1vtUl99Nsx50tZfsz1wX1aGEgHvXK+dqwjtoYekXTQ20uhhYH0GbFhqxwFeUOMpkOXEg76XgPs7igehcTak/p8fn0yX8coTMmnB//LQ/dLiwIcx6MU06K3za6M1CY6/OTiLIlVedKnYJTFABjXx1omKGxfirkRBBeSoa2PzJNSQd6Ni+1wSQ94l3fW5H4QeyN+MKm99JWJgboo87zqDdXiGGL6S1Y0zlvt+IpF3ZMVSSKtUSEkNobCw7uKWxm9+Yd3I9G/NZL+p+xVHQqxEm9curnZY3Hz28VLNzueTnNm7+Qd11gT1vl2reRQl7xRarWZJvB/R4oZqsqwuyd+YUuxD+k75J0fHR8eyHhlmjZGfo1/8Y/6H2cz0i/OmQmOlWpxnN6zmCuJqIBtcVIZf3DHUuB852zujH217KysurqDr1hho6au+l+MfLfkdFFerDG7QG1wP89UmyHcNxTVWgSZY9z4BTy4Gxj9VgutQD6NXWHGKG6xa+QUZfKfd3T8EcdhHvfugyT8C1TDBftVno7XLXNLlq4Ti2UJK3CZPHFMIuBfZ+dnlAjJYD4ZcOy05Hn/KmvBnetzFTqNXxLMOKrSbFjcSm2rK5w+7n524",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},f=void 0,y={id:"modules/iams/IAMS API/assign-user-with-tenant-roles",title:"Assign roles to user.",description:"Assign roles to user.",source:"@site/docs/40_modules/92_iams/IAMS API/assign-user-with-tenant-roles.api.mdx",sourceDirName:"40_modules/92_iams/IAMS API",slug:"/modules/iams/IAMS API/assign-user-with-tenant-roles",permalink:"/docs/docs/modules/iams/IAMS API/assign-user-with-tenant-roles",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assign-user-with-tenant-roles",title:"Assign roles to user.",description:"Assign roles to user.",sidebar_label:"Assign roles to user.",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsCTxvg1e22k2/pPgNsa9Em26EIBsZiE2225El0t8zwfx8o2Wk7Z+jQnBKJpB7J9146YNwEKK5gQRYtqwtXUYBVBq4hj2ycnWsoAEMwG7sM5L8Y3qbYFJpBgx5rYvJSpwOLNUEBHGPmGjIwFgpokLeQgacfrfGkoWDfUgah3FKNUHTAu0byAntjN9D32b5UG8hPCmkKpTeNIIQClsv5a+WulYQeqU+OFW8p/oo1HvfurOWt8+Z3HMP4/JZQk58A+IyV0QrLkkJQ7L6TVRgUqlNCT16VnjRZNlgpYxVa9X6xOFf3HlD7yv+PdZWCKfCp0zuJuI9KVqSkG2WCGsseQQals0yWJQObpjJlhJB/C5LWTV9E73EnI2Cqw51zt/5GJQsJvBCGDcVbo6doBSrqM1vtUl99Nsx50tZfsz1wX1aGEgHvXK+dqwjtoYekXTQ20uhhYH0GbFhqxwFeUOMpkOXEg76XgPs7igehcTak/p8fn0yX8coTMmnB//LQ/dLiwIcx6MU06K3za6M1CY6/OTiLIlVedKnYJTFABjXx1omKGxfirkRBBeSoa2PzJNSQd6Ni+1wSQ94l3fW5H4QeyN+MKm99JWJgboo87zqDdXiGGL6S1Y0zlvt+IpF3ZMVSSKtUSEkNobCw7uKWxm9+Yd3I9G/NZL+p+xVHQqxEm9curnZY3Hz28VLNzueTnNm7+Qd11gT1vl2reRQl7xRarWZJvB/R4oZqsqwuyd+YUuxD+k75J0fHR8eyHhlmjZGfo1/8Y/6H2cz0i/OmQmOlWpxnN6zmCuJqIBtcVIZf3DHUuB852zujH217KysurqDr1hho6au+l+MfLfkdFFerDG7QG1wP89UmyHcNxTVWgSZY9z4BTy4Gxj9VgutQD6NXWHGKG6xa+QUZfKfd3T8EcdhHvfugyT8C1TDBftVno7XLXNLlq4Ti2UJK3CZPHFMIuBfZ+dnlAjJYD4ZcOy05Hn/KmvBnetzFTqNXxLMOKrSbFjcSm2rK5w+7n524",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},sidebar:"iams",previous:{title:"Assign roles to group.",permalink:"/docs/docs/modules/iams/IAMS API/assign-group-with-tenant-roles"},next:{title:"Assign users with the specified role name.",permalink:"/docs/docs/modules/iams/IAMS API/assign-users-with-tenant-role"}},N={},v=[];function _(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.default,{as:"h1",className:"openapi__heading",children:"Assign roles to user."}),"\n",(0,i.jsx)(d(),{method:"post",path:"/admin/tenants/{tenantId}/users/{userId}/roles"}),"\n",(0,i.jsx)(s.p,{children:"Assign roles to user."}),"\n",(0,i.jsx)(x.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"tenantId",in:"path",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"userId",in:"path",description:"UUID of user. Not the username",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Authorization",in:"header",description:"Valid access token as a Bearer credential in an HTTP Authorization header",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(j.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"array"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Role name is required."})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(j.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Created"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(j.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(j.default,{label:"403",value:"403",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Forbidden"})}),(0,i.jsx)("div",{})]})]})})})]})}function I(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);