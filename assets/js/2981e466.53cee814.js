"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[93502],{76163:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>b,contentTitle:()=>I,default:()=>A,frontMatter:()=>_,metadata:()=>v,toc:()=>N});var n=s(74848),t=s(28453),i=s(77233),r=s.n(i),l=(s(22661),s(80811)),d=s.n(l),o=(s(41871),s(24791)),c=s.n(o),p=s(35654),m=s.n(p),h=(s(69015),s(84919)),x=s.n(h),u=s(84664),j=s.n(u),f=s(85225),y=(s(71156),s(7227));const _={id:"create-tenant-scope",title:"Create a tenant scope.",description:"Create a tenant scope.",sidebar_label:"Create a tenant scope.",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1vEzEQ/SuWTyCl3RY47S2toI1E1aoJXKoITdbTxO2ubWyndFntf2fG3oRECQhyyPpjPp7fvJlORlgGWT7IGRowMYhpZR0GOR9J+nqI2pqJkqWsPELEbJVs5Eg68NBgRM8ROmloQ5Yx2ZDTSGpDewdxRWuP39faI8WKfo0jGaoVNiDLTsbWsV+IXpul7PvRNtR4HVfW658JxibeCkGhp53CUHnt0l0pv0KtlYCqwhBEtM9oBAQB4gLBoxeEX6GJGmqh6caI69nsTuwlENvI/451no0xxAurWraorCEGIi/BuVpXKXbxFBhldxjKLp6wisymZ8ajJvbpVqvDdJwL1K2p2wysHw1EHeFQRh1rPkrFukfnMRCszGTPBvuPTAfBWRNy/ndn5/zZ5/gyiYAr+7+v3ALjzB+Oxf5iYCgGJUhG7w+NPlm/0IoKmZ54DBxVPAtQBH74KWElia4sa9jZkIhmQZayANVoU2TrUHQb3fZFyD1AdUf/slH32tcsvhhdWRRdp6EJJwDhGxrlrDax7w8keYWGWwiVyIEEx2DJME33v2Xz8RUaV6c6DsLf0MWSf7SJx6Gck/HNVIzvJgfJxleTz+LWBXG9XohJ0npsSehKjHNP3ICBJTZ0IaYER1fcwvy87H9+enZ6xhmZpQbMDpo/MruHYFvriK+xcDVQt1K4xFs3kP4gE+nkOtBOq3JnYITt9Flxrci+6xYQ8IuviV86Js48qf+Bli/gNSyYFKqO0oHXVOVHqAMeQNvqVb65H3T/VjCMY5CHQzAtMwT1mne0fMZ2d771c7IdZgZjyNeXOdPJrE0zcuN+0CU85rIH18fFv9rOd1R8dzudkfFimDeNVezj4QfPB/pPUG16eerkdNbJGsxyTQKg+xyTf78AxNIQMA==",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},I=void 0,v={id:"modules/iams/IAMS API/create-tenant-scope",title:"Create a tenant scope.",description:"Create a tenant scope.",source:"@site/docs/40_modules/92_iams/IAMS API/create-tenant-scope.api.mdx",sourceDirName:"40_modules/92_iams/IAMS API",slug:"/modules/iams/IAMS API/create-tenant-scope",permalink:"/docs/docs/modules/iams/IAMS API/create-tenant-scope",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-tenant-scope",title:"Create a tenant scope.",description:"Create a tenant scope.",sidebar_label:"Create a tenant scope.",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1vEzEQ/SuWTyCl3RY47S2toI1E1aoJXKoITdbTxO2ubWyndFntf2fG3oRECQhyyPpjPp7fvJlORlgGWT7IGRowMYhpZR0GOR9J+nqI2pqJkqWsPELEbJVs5Eg68NBgRM8ROmloQ5Yx2ZDTSGpDewdxRWuP39faI8WKfo0jGaoVNiDLTsbWsV+IXpul7PvRNtR4HVfW658JxibeCkGhp53CUHnt0l0pv0KtlYCqwhBEtM9oBAQB4gLBoxeEX6GJGmqh6caI69nsTuwlENvI/451no0xxAurWraorCEGIi/BuVpXKXbxFBhldxjKLp6wisymZ8ajJvbpVqvDdJwL1K2p2wysHw1EHeFQRh1rPkrFukfnMRCszGTPBvuPTAfBWRNy/ndn5/zZ5/gyiYAr+7+v3ALjzB+Oxf5iYCgGJUhG7w+NPlm/0IoKmZ54DBxVPAtQBH74KWElia4sa9jZkIhmQZayANVoU2TrUHQb3fZFyD1AdUf/slH32tcsvhhdWRRdp6EJJwDhGxrlrDax7w8keYWGWwiVyIEEx2DJME33v2Xz8RUaV6c6DsLf0MWSf7SJx6Gck/HNVIzvJgfJxleTz+LWBXG9XohJ0npsSehKjHNP3ICBJTZ0IaYER1fcwvy87H9+enZ6xhmZpQbMDpo/MruHYFvriK+xcDVQt1K4xFs3kP4gE+nkOtBOq3JnYITt9Flxrci+6xYQ8IuviV86Js48qf+Bli/gNSyYFKqO0oHXVOVHqAMeQNvqVb65H3T/VjCMY5CHQzAtMwT1mne0fMZ2d771c7IdZgZjyNeXOdPJrE0zcuN+0CU85rIH18fFv9rOd1R8dzudkfFimDeNVezj4QfPB/pPUG16eerkdNbJGsxyTQKg+xyTf78AxNIQMA==",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},sidebar:"iams",previous:{title:"Create a Role.",permalink:"/docs/docs/modules/iams/IAMS API/create-tenant-role"},next:{title:"Create a tenant.",permalink:"/docs/docs/modules/iams/IAMS API/create-tenant"}},b={},N=[];function g(e){const a={p:"p",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Create a tenant scope."}),"\n",(0,n.jsx)(d(),{method:"post",path:"/admin/tenants/{tenantId}/scopes"}),"\n",(0,n.jsx)(a.p,{children:"Create a tenant scope."}),"\n",(0,n.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(m(),{className:"paramsItem",param:{name:"tenantId",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Header Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(m(),{className:"paramsItem",param:{name:"Authorization",in:"header",description:"Valid access token as a Bearer credential in an HTTP Authorization header",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)(c(),{className:"openapi-tabs__mime",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(a.p,{children:"Body"})}),(0,n.jsx)("strong",{className:"openapi-schema__required",children:(0,n.jsx)(a.p,{children:"required"})})]}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(y.default,{label:"201",value:"201",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Created"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(j(),{className:"openapi-tabs__schema",children:(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"string"})})})]})})})})})})]}),(0,n.jsxs)(y.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(y.default,{label:"403",value:"403",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Forbidden"})}),(0,n.jsx)("div",{})]})]})})})]})}function A(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);