"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[7835],{846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>y,metadata:()=>u,toc:()=>_});var s=a(87462),r=(a(67294),a(3905)),p=a(70603),i=a(48147),l=a(61045),n=a(86776),m=a(69128),d=a(83329),o=(a(3186),a(18679));const y={id:"request-replay-start-resume",title:"Request Replay Start/Resume",description:"Start/Resume existing replay session",sidebar_label:"Request Replay Start/Resume",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"Start/Resume existing replay session",parameters:[{name:"replayid",in:"path",description:"ID of replay to start/resume",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{replay_speed:{description:"Mandatory field of replay speed",type:"number"}},required:["replay_speed"],example:{replay_speed:.5}}}}},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},created_at:{type:"string"},updated_at:{type:"string"},status:{type:"string"},display_status:{type:"string"},replay_start_timestamp:{type:"string"},replay_end_timestamp:{type:"string"},replay_last_timestamp:{type:"string"},replay_speed:{type:"number"}}}},sent_at:{type:"string"}}},example:{data:[{id:"ab076d0a-31b5-41b5-84f9-5188895dea13",created_at:"2023-06-15T18:42:11.709957+00:00",updated_at:"2023-06-15T18:52:31.317482+00:00",status:"NONE",display_status:"REPLAY_START_REQUESTED",replay_start_timestamp:"2023-06-13T00:00:00Z",replay_end_timestamp:"2023-06-13T03:00:00Z",replay_last_timestamp:"2023-06-13T01:00:00Z",replay_speed:.5}],sent_at:"2023-06-15T18:52:31Z"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"object",properties:{message:{type:"string"}}}}},example:{sent_at:"2023-06-15T18:53:12Z",errors:[{message:"replay session is not ready or already ended"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"put",path:"/replay/{replayid}/start",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{replay_speed:.5},info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request Replay Start/Resume",description:{content:"Start/Resume existing replay session",type:"text/plain"},url:{path:["replay",":replayid","start"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of replay to start/resume",type:"text/plain"},type:"any",value:"",key:"replayid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/rnr/Record & Replay API/record-replay",custom_edit_url:null},c=void 0,u={unversionedId:"rnr/Record & Replay API/request-replay-start-resume",id:"rnr/Record & Replay API/request-replay-start-resume",title:"Request Replay Start/Resume",description:"Start/Resume existing replay session",source:"@site/docs/rnr/Record & Replay API/request-replay-start-resume.api.mdx",sourceDirName:"rnr/Record & Replay API",slug:"/rnr/Record & Replay API/request-replay-start-resume",permalink:"/ar2-docs/docs/rnr/Record & Replay API/request-replay-start-resume",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-replay-start-resume",title:"Request Replay Start/Resume",description:"Start/Resume existing replay session",sidebar_label:"Request Replay Start/Resume",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"Start/Resume existing replay session",parameters:[{name:"replayid",in:"path",description:"ID of replay to start/resume",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{replay_speed:{description:"Mandatory field of replay speed",type:"number"}},required:["replay_speed"],example:{replay_speed:.5}}}}},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},created_at:{type:"string"},updated_at:{type:"string"},status:{type:"string"},display_status:{type:"string"},replay_start_timestamp:{type:"string"},replay_end_timestamp:{type:"string"},replay_last_timestamp:{type:"string"},replay_speed:{type:"number"}}}},sent_at:{type:"string"}}},example:{data:[{id:"ab076d0a-31b5-41b5-84f9-5188895dea13",created_at:"2023-06-15T18:42:11.709957+00:00",updated_at:"2023-06-15T18:52:31.317482+00:00",status:"NONE",display_status:"REPLAY_START_REQUESTED",replay_start_timestamp:"2023-06-13T00:00:00Z",replay_end_timestamp:"2023-06-13T03:00:00Z",replay_last_timestamp:"2023-06-13T01:00:00Z",replay_speed:.5}],sent_at:"2023-06-15T18:52:31Z"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"object",properties:{message:{type:"string"}}}}},example:{sent_at:"2023-06-15T18:53:12Z",errors:[{message:"replay session is not ready or already ended"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"put",path:"/replay/{replayid}/start",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{replay_speed:.5},info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request Replay Start/Resume",description:{content:"Start/Resume existing replay session",type:"text/plain"},url:{path:["replay",":replayid","start"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of replay to start/resume",type:"text/plain"},type:"any",value:"",key:"replayid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/rnr/Record & Replay API/record-replay",custom_edit_url:null},sidebar:"rnr",previous:{title:"Request Replay Session",permalink:"/ar2-docs/docs/rnr/Record & Replay API/request-replay-session"},next:{title:"Request Replay Stop/Pause",permalink:"/ar2-docs/docs/rnr/Record & Replay API/request-replay-stop-pause"}},g={},_=[{value:"Request Replay Start/Resume",id:"request-replay-startresume",level:2}],v={toc:_};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"request-replay-startresume"},"Request Replay Start/Resume"),(0,r.kt)("p",null,"Start/Resume existing replay session"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"replayid",in:"path",description:"ID of replay to start/resume",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"},mdxType:"ParamsItem"})))),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"replay_speed",required:!0,deprecated:void 0,schemaDescription:"Mandatory field of replay speed",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(p.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"OK")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"display_status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"replay_start_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"replay_end_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"replay_last_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"replay_speed",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "created_at": "string",\n      "updated_at": "string",\n      "status": "string",\n      "display_status": "string",\n      "replay_start_timestamp": "string",\n      "replay_end_timestamp": "string",\n      "replay_last_timestamp": "string",\n      "replay_speed": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "ab076d0a-31b5-41b5-84f9-5188895dea13",\n      "created_at": "2023-06-15T18:42:11.709957+00:00",\n      "updated_at": "2023-06-15T18:52:31.317482+00:00",\n      "status": "NONE",\n      "display_status": "REPLAY_START_REQUESTED",\n      "replay_start_timestamp": "2023-06-13T00:00:00Z",\n      "replay_end_timestamp": "2023-06-13T03:00:00Z",\n      "replay_last_timestamp": "2023-06-13T01:00:00Z",\n      "replay_speed": 0.5\n    }\n  ],\n  "sent_at": "2023-06-15T18:52:31Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": {\n    "message": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:53:12Z",\n  "errors": [\n    {\n      "message": "replay session is not ready or already ended"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);