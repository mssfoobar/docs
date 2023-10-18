"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5243],{58283:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var o=a(87462),r=(a(67294),a(3905)),s=a(70603),n=a(48147),i=a(61045),m=a(86776),l=a(69128),d=a(83329),c=(a(3186),a(18679));const p={id:"get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",sidebar_label:"Get chat info by room ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query total sum of chat messages and chat attachments available from a particular room session",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},start_time:{type:"string"},record_count:{type:"integer"}}}},sent_at:{type:"string"}}},example:{data:[{id:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6",name:"test-room-ABC",start_time:"2022-09-07T13:00:00Z",record_count:2}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/rooms/{roomid}/chatinfo",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"Get chat info by room ID",description:{content:"API to query total sum of chat messages and chat attachments available from a particular room session",type:"text/plain"},url:{path:["rooms",":roomid","chatinfo"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},u=void 0,h={unversionedId:"ucs/Room Management API/get-chat-info-by-room-id",id:"ucs/Room Management API/get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",source:"@site/docs/ucs/Room Management API/get-chat-info-by-room-id.api.mdx",sourceDirName:"ucs/Room Management API",slug:"/ucs/Room Management API/get-chat-info-by-room-id",permalink:"/aoh-docs/docs/ucs/Room Management API/get-chat-info-by-room-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",sidebar_label:"Get chat info by room ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query total sum of chat messages and chat attachments available from a particular room session",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},start_time:{type:"string"},record_count:{type:"integer"}}}},sent_at:{type:"string"}}},example:{data:[{id:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6",name:"test-room-ABC",start_time:"2022-09-07T13:00:00Z",record_count:2}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/rooms/{roomid}/chatinfo",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"Get chat info by room ID",description:{content:"API to query total sum of chat messages and chat attachments available from a particular room session",type:"text/plain"},url:{path:["rooms",":roomid","chatinfo"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},sidebar:"ucs",previous:{title:"File upload",permalink:"/aoh-docs/docs/ucs/Room Management API/file-upload"},next:{title:"Get room info",permalink:"/aoh-docs/docs/ucs/Room Management API/get-room-info"}},f={},y=[{value:"Get chat info by room ID",id:"get-chat-info-by-room-id",level:2}],g={toc:y};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-chat-info-by-room-id"},"Get chat info by room ID"),(0,r.kt)("p",null,"API to query total sum of chat messages and chat attachments available from a particular room session"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(i.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"start_time",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"record_count",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "name": "string",\n      "start_time": "string",\n      "record_count": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n      "name": "test-room-ABC",\n      "start_time": "2022-09-07T13:00:00Z",\n      "record_count": 2\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);