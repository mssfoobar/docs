"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[43835],{24946:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>v,default:()=>w,frontMatter:()=>x,metadata:()=>f,toc:()=>A});var i=a(74848),n=a(28453),r=a(77233),t=a.n(r),d=(a(22661),a(80811)),l=a.n(d),o=(a(41871),a(24791)),m=a.n(o),c=a(35654),u=a.n(c),p=(a(69015),a(84919)),h=a.n(p),g=(a(84664),a(85225)),j=(a(71156),a(7227));const x={id:"assign-user-with-tenant-roles",title:"Assign roles to user.",description:"Assign roles to user.",sidebar_label:"Assign roles to user.",hide_title:!0,hide_table_of_contents:!0,api:"eJydVd9P2zAQ/lcsP21SaWDbU98K26DSGKi02wOqpmtyNIbEzmyXrYvyv+/OTkpLOjHRh8r2/b77vkstPaycHN3KGWrQXkxNgU4uBtJUaMEroyeZHElwTq303KH9rnwedaPqQFZgoUSPlv3UUtOFLHzQIeOBVJruFficzhZ/rpVF8untGgfSpTmWIEe19JuK7Zy3Sq9k0wy2rtYUtucoQ5daVXGG9DifTz4KcydYdSi+Gi98juEWfLwu7njtc2PVn9CGLnyOkKHtJfANCpUJSFN0TnjzgFqAEyBOESxakVJo1F5BIRRJtLiYza7FXgCx9fz/uS6iMjp/arINa+xnxSMSXI1QTnRuhxQiNZoG5NkCqqpQaUghuXdsVvcjgrWw4RZ4LN3Ou1neY+oZBJYB4xUGqcr62XKqkF3pYhPragZtn3tlPevtAXlaKIwA3BEvDd1BHwrE5YLSAUYvJ0YGXnn2HRo4xcqio3gRB03DCvszCg+uMtrF+t8dn/SHcUZhPFmQ8odD8rmGFg+d0vu+0mdjlyojLDFSn8nGgaTCMi8Jg5EMVB6RMzfM4sq4MCtm0EgmkJVKJ5GoLqk7xjYJG9JD5F2T2JbodH3sWL62BZPB+2qUJHWtoHRHAO4H6qwySvum6VHkHDWvFMxEdCTYB0OYUTd9gvGn31BW3P2nZbKd1L7HDhAL5uadCaNtBzcZX96I8fWkZzM+n3wRV5UTF+ulmARS+g0xMhPjSN5L0LDCkgTihvJUKa8PrjvanwyPh8c8Hm5mCQGf3b74R/8Po9njb59UBcGSvYV+1u1obmUYDZm2w6HTaGehhvnw23Yz2m5t5zxiclDXS3A4twUNgp6puZbgfUvHR7AKlm1/M+X4TOC4g8JhL9ftnpBvpi3i3wrO61AN3a7QvCkeoVjzjY4PuNn9IPCGfVXcF5f8K7JqO9gsSLNdwNyXKDyLWRzN2MWTcW9jMgC3JLu+upmR8rJdyKXJ2MbCLx4T/YfgJlQadkV4q2UBerUm4JE8+uTfX7ufnbg=",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},v=void 0,f={id:"modules/iams/IAMS API/assign-user-with-tenant-roles",title:"Assign roles to user.",description:"Assign roles to user.",source:"@site/docs/40_modules/92_iams/IAMS API/assign-user-with-tenant-roles.api.mdx",sourceDirName:"40_modules/92_iams/IAMS API",slug:"/modules/iams/IAMS API/assign-user-with-tenant-roles",permalink:"/docs/docs/modules/iams/IAMS API/assign-user-with-tenant-roles",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assign-user-with-tenant-roles",title:"Assign roles to user.",description:"Assign roles to user.",sidebar_label:"Assign roles to user.",hide_title:!0,hide_table_of_contents:!0,api:"eJydVd9P2zAQ/lcsP21SaWDbU98K26DSGKi02wOqpmtyNIbEzmyXrYvyv+/OTkpLOjHRh8r2/b77vkstPaycHN3KGWrQXkxNgU4uBtJUaMEroyeZHElwTq303KH9rnwedaPqQFZgoUSPlv3UUtOFLHzQIeOBVJruFficzhZ/rpVF8untGgfSpTmWIEe19JuK7Zy3Sq9k0wy2rtYUtucoQ5daVXGG9DifTz4KcydYdSi+Gi98juEWfLwu7njtc2PVn9CGLnyOkKHtJfANCpUJSFN0TnjzgFqAEyBOESxakVJo1F5BIRRJtLiYza7FXgCx9fz/uS6iMjp/arINa+xnxSMSXI1QTnRuhxQiNZoG5NkCqqpQaUghuXdsVvcjgrWw4RZ4LN3Ou1neY+oZBJYB4xUGqcr62XKqkF3pYhPragZtn3tlPevtAXlaKIwA3BEvDd1BHwrE5YLSAUYvJ0YGXnn2HRo4xcqio3gRB03DCvszCg+uMtrF+t8dn/SHcUZhPFmQ8odD8rmGFg+d0vu+0mdjlyojLDFSn8nGgaTCMi8Jg5EMVB6RMzfM4sq4MCtm0EgmkJVKJ5GoLqk7xjYJG9JD5F2T2JbodH3sWL62BZPB+2qUJHWtoHRHAO4H6qwySvum6VHkHDWvFMxEdCTYB0OYUTd9gvGn31BW3P2nZbKd1L7HDhAL5uadCaNtBzcZX96I8fWkZzM+n3wRV5UTF+ulmARS+g0xMhPjSN5L0LDCkgTihvJUKa8PrjvanwyPh8c8Hm5mCQGf3b74R/8Po9njb59UBcGSvYV+1u1obmUYDZm2w6HTaGehhvnw23Yz2m5t5zxiclDXS3A4twUNgp6puZbgfUvHR7AKlm1/M+X4TOC4g8JhL9ftnpBvpi3i3wrO61AN3a7QvCkeoVjzjY4PuNn9IPCGfVXcF5f8K7JqO9gsSLNdwNyXKDyLWRzN2MWTcW9jMgC3JLu+upmR8rJdyKXJ2MbCLx4T/YfgJlQadkV4q2UBerUm4JE8+uTfX7ufnbg=",sidebar_class_name:"post api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},sidebar:"iams",previous:{title:"Assign roles to group.",permalink:"/docs/docs/modules/iams/IAMS API/assign-group-with-tenant-roles"},next:{title:"Assign users with the specified role name.",permalink:"/docs/docs/modules/iams/IAMS API/assign-users-with-tenant-role"}},y={},A=[];function _(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Assign roles to user."}),"\n",(0,i.jsx)(l(),{method:"post",path:"/admin/tenants/{tenantId}/users/{userId}/roles"}),"\n",(0,i.jsx)(s.p,{children:"Assign roles to user."}),"\n",(0,i.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(u(),{className:"paramsItem",param:{name:"tenantId",in:"path",required:!0,schema:{type:"string"}}}),(0,i.jsx)(u(),{className:"paramsItem",param:{name:"userId",in:"path",description:"UUID of user. Not the username",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(u(),{className:"paramsItem",param:{name:"Authorization",in:"header",description:"Valid access token as a Bearer credential in an HTTP Authorization header",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(j.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"array"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Role name is required."})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(j.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Created"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(j.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(j.default,{label:"403",value:"403",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Forbidden"})}),(0,i.jsx)("div",{})]})]})})})]})}function w(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);