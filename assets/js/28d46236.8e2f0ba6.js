"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[79462],{26230:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>I,contentTitle:()=>q,default:()=>z,frontMatter:()=>b,metadata:()=>v,toc:()=>S});var i=a(74848),r=a(28453),n=a(77233),t=a.n(n),l=(a(22661),a(80811)),m=a.n(l),d=(a(41871),a(24791)),c=a.n(d),o=a(35654),p=a.n(o),h=a(69015),u=a.n(h),g=a(84919),x=a.n(g),j=a(84664),f=a.n(j),y=a(85225),N=(a(71156),a(7227));const b={id:"list-users",title:"List users",description:"List users",sidebar_label:"List users",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVt9v2kgQ/ldG+0J7coHk2nvwW6o7pUhJG12SvqDoNNhjvI296+6OUyjy/17NGhMIOYoIPemewDs7M9/83G+hGKdexWN168l5dRcpW5FD1taMUhWrQntuRZGq0GFJLB/xeKEMlqRi5QldkqtIaaNi9bUmN1eRSsknTldiR8XqDK7ZaTOFxBpGbSgFbaD25MRIBJl2nsE6KNAztGfWAZWoiz78SRnWBUPrCSaU44O2DrSHylGmZ28m6CmFV9Sf9iPIrBXlzNrfXvfh1lM4yUTBZHrWmUGTQi+zthdENMOk89BXkXL0tdaOUhVnWHiKlE9yKlHFC8XzKsQdIlJNE61SEcLYnYkrnGoT0gs2yzzxXr60YZqSU5HKrCuR26PfTze8lzjb7fsSZ7qsS3Dk64I9eP2d4FXaZtcDWzgZDl8fD1BX35f1hnXAOUFiy6ogpjWJziC0JPRC9XrSEOxqelH5Ph4IOCg/j3hNdGzIMi+HIu50twE/So6NN0z0IWCD4jbS5fHRYYqV3TDfW1sQGviW6ySHlDJtyMO3nDinFmRA5KG3Kn8vgp6ktvsfwPfaRdR1dQ/K2jOUyEneLqVifmgUZzXn1unvYd100eSEaRjczXA+Y6FTwCQhL5vgngygB4T3hI4cJI5SMqyxkGKggQ83N1ew4QBWlh/BSg12Yb2Ty76yxpMX+elwKD+b0D7dq0hJM5BhkWJVFToJPgdfvFxZbLtA51ASp5nKYPoR1HjVhesDvzZJq711F3Xm7OQLhY6onLyPrFu8On0mqjUD8UK28gWZKecqPn33Ltq+/Ahin9srmPtcbuPc66bBSUHr0Uza/hZh4giZ0htdkmcsq5++A3+8FTVkdnpSc5uqp4nENNVSQiyuNlL6b/V72jpdeJ/J6Uw/D72JFGsu5Ew4zN9UOfJkuB2IpglW3g5Ptnvu1uCytykNdjbFF9pzeIiEFpXEuRWuNA2veYWSZjXAtNRm0F3y5B464lS7QgaRuYoHg8VCY+nfIPp/yKSV1YabZms8z8kIK6MUWkMgNmR8tMlsCH0Z5+js8hrOrkbba/V8dAGfKg8f6gmMwjDzPOyes3boL9HglEoyDNfkHnQioyCYW/2T/rA/lLJW1nOJYeqWe2YjGxteVyVhmvGgKlCHhgoJWCwzNVYhU8u5CxQ0t55FsFgIsbt1RdPIcbuIJYOp9st+Xa7DJ15X2+J/yDyfzdg9zdep9gMWtVxSsu33T8Zz5HOHu47OHuhtb7q5A0LLaQ8E8EuY5Q6wa3z3qIhfTC1/VuOPvwD0C9nlDshrL/VRER9MMXdg7ZjGgUD/W5K5K44lIX6M404+nJZAVDy+a6KOWcp+bpXkYanWtbaYm1hZPZ/nf92opvkBZayuyw==",sidebar_class_name:"get api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},q=void 0,v={id:"modules/iams/IAMS API/list-users",title:"List users",description:"List users",source:"@site/docs/40_modules/92_iams/IAMS API/list-users.api.mdx",sourceDirName:"40_modules/92_iams/IAMS API",slug:"/modules/iams/IAMS API/list-users",permalink:"/docs/docs/modules/iams/IAMS API/list-users",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-users",title:"List users",description:"List users",sidebar_label:"List users",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVt9v2kgQ/ldG+0J7coHk2nvwW6o7pUhJG12SvqDoNNhjvI296+6OUyjy/17NGhMIOYoIPemewDs7M9/83G+hGKdexWN168l5dRcpW5FD1taMUhWrQntuRZGq0GFJLB/xeKEMlqRi5QldkqtIaaNi9bUmN1eRSsknTldiR8XqDK7ZaTOFxBpGbSgFbaD25MRIBJl2nsE6KNAztGfWAZWoiz78SRnWBUPrCSaU44O2DrSHylGmZ28m6CmFV9Sf9iPIrBXlzNrfXvfh1lM4yUTBZHrWmUGTQi+zthdENMOk89BXkXL0tdaOUhVnWHiKlE9yKlHFC8XzKsQdIlJNE61SEcLYnYkrnGoT0gs2yzzxXr60YZqSU5HKrCuR26PfTze8lzjb7fsSZ7qsS3Dk64I9eP2d4FXaZtcDWzgZDl8fD1BX35f1hnXAOUFiy6ogpjWJziC0JPRC9XrSEOxqelH5Ph4IOCg/j3hNdGzIMi+HIu50twE/So6NN0z0IWCD4jbS5fHRYYqV3TDfW1sQGviW6ySHlDJtyMO3nDinFmRA5KG3Kn8vgp6ktvsfwPfaRdR1dQ/K2jOUyEneLqVifmgUZzXn1unvYd100eSEaRjczXA+Y6FTwCQhL5vgngygB4T3hI4cJI5SMqyxkGKggQ83N1ew4QBWlh/BSg12Yb2Ty76yxpMX+elwKD+b0D7dq0hJM5BhkWJVFToJPgdfvFxZbLtA51ASp5nKYPoR1HjVhesDvzZJq711F3Xm7OQLhY6onLyPrFu8On0mqjUD8UK28gWZKecqPn33Ltq+/Ahin9srmPtcbuPc66bBSUHr0Uza/hZh4giZ0htdkmcsq5++A3+8FTVkdnpSc5uqp4nENNVSQiyuNlL6b/V72jpdeJ/J6Uw/D72JFGsu5Ew4zN9UOfJkuB2IpglW3g5Ptnvu1uCytykNdjbFF9pzeIiEFpXEuRWuNA2veYWSZjXAtNRm0F3y5B464lS7QgaRuYoHg8VCY+nfIPp/yKSV1YabZms8z8kIK6MUWkMgNmR8tMlsCH0Z5+js8hrOrkbba/V8dAGfKg8f6gmMwjDzPOyes3boL9HglEoyDNfkHnQioyCYW/2T/rA/lLJW1nOJYeqWe2YjGxteVyVhmvGgKlCHhgoJWCwzNVYhU8u5CxQ0t55FsFgIsbt1RdPIcbuIJYOp9st+Xa7DJ15X2+J/yDyfzdg9zdep9gMWtVxSsu33T8Zz5HOHu47OHuhtb7q5A0LLaQ8E8EuY5Q6wa3z3qIhfTC1/VuOPvwD0C9nlDshrL/VRER9MMXdg7ZjGgUD/W5K5K44lIX6M404+nJZAVDy+a6KOWcp+bpXkYanWtbaYm1hZPZ/nf92opvkBZayuyw==",sidebar_class_name:"get api-method",info_path:"docs/40_modules/92_iams/IAMS API/iams-api",custom_edit_url:null,hide_send_button:!0},sidebar:"iams",previous:{title:"List users with system-admin role",permalink:"/docs/docs/modules/iams/IAMS API/list-users-2"},next:{title:"Remove scope from resource.",permalink:"/docs/docs/modules/iams/IAMS API/remove-scope-from-tenant-resource"}},I={},S=[];function _(e){const s={p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List users"}),"\n",(0,i.jsx)(m(),{method:"get",path:"/admin/users"}),"\n",(0,i.jsx)(s.p,{children:"List users"}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"search",in:"query",description:"A String contained in username, first or last name, or email. Default search behavior is prefix-based (e.g., foo or foo*). Use foo for infix search and 'foo' for exact search.",required:!1,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"first",in:"query",description:"Pagination offset",required:!1,schema:{type:"integer",format:"int32"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"max",in:"query",description:"Maximum results size (defaults to 100)",required:!1,schema:{type:"integer",format:"int32"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"username",in:"query",description:"A String contained in username, or the complete username, if param 'exact' is true",required:!1,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"firstName",in:"query",description:"A String contained in firstname, or the complete firstname, if param 'exact' is true",required:!1,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"lastName",in:"query",description:"A String contained in lastName, or the complete lastName, if param 'exact' is true",required:!1,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"email",in:"query",description:"A String contained in email, or the complete email, if param 'exact' is true",required:!1,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"exact",in:"query",description:"Boolean which defines whether the params 'firstname', 'lastname', 'email' and 'username' must match exactly",required:!1,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Authorization",in:"header",description:"Valid access token as a Bearer credential in an HTTP Authorization header",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(N.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Ok"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{maxLength:255,type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"firstName",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{maxLength:255,type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"lastName",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{maxLength:255,type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"email",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{maxLength:255,type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdTimestamp",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"property name*"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"string[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"emailVerified",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(N.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'[\n  {\n    "id": "string",\n    "username": "string",\n    "firstName": "string",\n    "lastName": "string",\n    "email": "string",\n    "enabled": true,\n    "createdTimestamp": 0,\n    "attributes": {},\n    "emailVerified": true\n  }\n]',language:"json"})})]})})})})]}),(0,i.jsxs)(N.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{})]})]})})})]})}function z(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);