"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[76405],{25409:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>N,default:()=>S,frontMatter:()=>y,metadata:()=>v,toc:()=>_});var i=a(74848),n=a(28453),t=a(77233),l=a.n(t),d=(a(22661),a(80811)),r=a.n(d),m=(a(41871),a(24791)),o=a.n(m),c=(a(35654),a(69015)),p=a.n(c),h=a(84919),u=a.n(h),x=a(84664),f=a.n(x),j=a(85225),g=(a(71156),a(7227));const y={id:"send-message",title:"Send message",description:"This API creates a new message and sends it to the specified receiver(s).",sidebar_label:"Send message",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VU2P2zYQ/SvEnFJAsiVb3g/dNm0RLJBNgsTtoYaxmBVHNhOJVEjKu4ag/14MbW+t1N36sNHFhjScx3l877EDSa6wqvHKaMhhvlZO3Hy6FYUl9OQECk2PoibncEUCtRSOtHRCeeGN8GsSrqFClYqksFSQ2pB9434ZQQSWvrfk/Fsjt5B3UBjtSXv+i01TqQIZc/zVMXAHrlhTjfzPbxuCHMzDVyo8RNBY05D1ilz4qnxFR2XOW6VXEAE9Yd3wJ0iux8nFeJKJNMlnk5s78eeXOfQRPOx38t8rw/iKp/Zka6GNV+V+o9yARyd7r+SpLqWxNXrIoW2VHHSdJQlNk+wypnQ6jbMrOY2vZHkZS5yVVF4RlumU2x/4u1fSHSGgtbiFCJSn2v0/cn8EvTgPOzqnLINlH4Enjdr/NApUYfRPah4eJtk1RrudmCZJyj9DD9ztxe7aoiDnyraqtns/MO6aUJINy39DTye1e0Jad0ZHYnIhbtqVmCSTTCSX+ewqz2bi3d0ceGe/7gwSvye98uuTfZX2tCI7aJxOwnDRaxnMkfb36F88AomeYq9qGuyEx4qT6zhN58llnl3k2fVfz7xnSfJvqt8ip0aIiZG41RuslBQNWqzJk3XCWCHRo9gBjwJNNfm1kZBDY1zYPTJZMN6k431MOWCr2k04pUUHra0gh7X3TT4ed51CfU9aNkZp3/fQLyNgjj7/E1e/H0Z6jpvTmXKIlBdzYxAb5/pxGAWvbOOBi89t/ezM872sS3NM4a2OsWnEhyE5Q0GcqBF8lKpgqfGJ7urSUTJKGIRFUGMQuMaaYb6QlocL68f+R7fQq151e6N4evLjpkIVbosgu26vzwVsUmDx7hW6jGDN+s0X0HUP6OgPW/U9v/7ekt1CvlhGsEGr8CEEOWfvLnmCpL8Ry+6QGHOG5/KqDRfGj+7vo8OKm6Kgxr9Yuzyy2KePRyrvoDaS11h8ZIniI+QAEZhAbsiO8K6DCvWqZfpz2PXk528ij7eJ",sidebar_class_name:"post api-method",info_path:"docs/40_modules/94_ian/IAN API/in-app-notification",custom_edit_url:null,hide_send_button:!0},N=void 0,v={id:"modules/ian/IAN API/send-message",title:"Send message",description:"This API creates a new message and sends it to the specified receiver(s).",source:"@site/docs/40_modules/94_ian/IAN API/send-message.api.mdx",sourceDirName:"40_modules/94_ian/IAN API",slug:"/modules/ian/IAN API/send-message",permalink:"/docs/docs/modules/ian/IAN API/send-message",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"send-message",title:"Send message",description:"This API creates a new message and sends it to the specified receiver(s).",sidebar_label:"Send message",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VU2P2zYQ/SvEnFJAsiVb3g/dNm0RLJBNgsTtoYaxmBVHNhOJVEjKu4ag/14MbW+t1N36sNHFhjScx3l877EDSa6wqvHKaMhhvlZO3Hy6FYUl9OQECk2PoibncEUCtRSOtHRCeeGN8GsSrqFClYqksFSQ2pB9434ZQQSWvrfk/Fsjt5B3UBjtSXv+i01TqQIZc/zVMXAHrlhTjfzPbxuCHMzDVyo8RNBY05D1ilz4qnxFR2XOW6VXEAE9Yd3wJ0iux8nFeJKJNMlnk5s78eeXOfQRPOx38t8rw/iKp/Zka6GNV+V+o9yARyd7r+SpLqWxNXrIoW2VHHSdJQlNk+wypnQ6jbMrOY2vZHkZS5yVVF4RlumU2x/4u1fSHSGgtbiFCJSn2v0/cn8EvTgPOzqnLINlH4Enjdr/NApUYfRPah4eJtk1RrudmCZJyj9DD9ztxe7aoiDnyraqtns/MO6aUJINy39DTye1e0Jad0ZHYnIhbtqVmCSTTCSX+ewqz2bi3d0ceGe/7gwSvye98uuTfZX2tCI7aJxOwnDRaxnMkfb36F88AomeYq9qGuyEx4qT6zhN58llnl3k2fVfz7xnSfJvqt8ip0aIiZG41RuslBQNWqzJk3XCWCHRo9gBjwJNNfm1kZBDY1zYPTJZMN6k431MOWCr2k04pUUHra0gh7X3TT4ed51CfU9aNkZp3/fQLyNgjj7/E1e/H0Z6jpvTmXKIlBdzYxAb5/pxGAWvbOOBi89t/ezM872sS3NM4a2OsWnEhyE5Q0GcqBF8lKpgqfGJ7urSUTJKGIRFUGMQuMaaYb6QlocL68f+R7fQq151e6N4evLjpkIVbosgu26vzwVsUmDx7hW6jGDN+s0X0HUP6OgPW/U9v/7ekt1CvlhGsEGr8CEEOWfvLnmCpL8Ry+6QGHOG5/KqDRfGj+7vo8OKm6Kgxr9Yuzyy2KePRyrvoDaS11h8ZIniI+QAEZhAbsiO8K6DCvWqZfpz2PXk528ij7eJ",sidebar_class_name:"post api-method",info_path:"docs/40_modules/94_ian/IAN API/in-app-notification",custom_edit_url:null,hide_send_button:!0},sidebar:"ian",previous:{title:"Readiness",permalink:"/docs/docs/modules/ian/IAN API/readiness"},next:{title:"Update message status",permalink:"/docs/docs/modules/ian/IAN API/update-message-status"}},b={},_=[];function q(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Send message"}),"\n",(0,i.jsx)(r(),{method:"post",path:"/v1/messages"}),"\n",(0,i.jsx)(s.p,{children:"This API creates a new message and sends it to the specified receiver(s)."}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"09/06/24 10:52AM VST"}}),(0,i.jsx)(u(),{collapsible:!1,name:"body",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"This is a term notification"}}),(0,i.jsx)(u(),{collapsible:!1,name:"sender_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",example:"500e3047-e133-48d3-8df7-da5fef8eaf13"}}),(0,i.jsx)(u(),{collapsible:!1,name:"receiver_ids",required:!1,schemaName:"uuid[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",format:"uuid"},example:["500e3047-e133-48d3-8df7-da5fef8eaf13","500e3047-e133-48d3-8df7-da5fef8eaf14"]}}),(0,i.jsx)(u(),{collapsible:!1,name:"tenant_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",example:"500e3047-e133-48d3-8df7-da5fef8eaf13"}}),(0,i.jsx)(u(),{collapsible:!1,name:"icon_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",example:"500e3047-e133-48d3-8df7-da5fef8eaf13"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(g.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Message successfully created"})}),(0,i.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!0,open:!1,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Response Headers"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Date"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Content-Length"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"integer"})})]}),(0,i.jsx)("div",{})]})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2024-09-11T07:46:49Z"}})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "sent_at": "2024-09-11T07:46:49Z"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad request. Invalid parameters or data format."})}),(0,i.jsx)("div",{})]})]})})})]})}function S(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);