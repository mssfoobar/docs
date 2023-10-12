"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[8700],{34439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var s=a(87462),r=(a(67294),a(3905)),i=a(70603),l=a(48147),n=(a(61045),a(86776)),p=a(69128),o=a(83329),m=(a(3186),a(18679));const d={id:"request-replay-info",title:"Request Replay Info",description:"gets valid timestamp for new replay session",sidebar_label:"Request Replay Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"gets valid timestamp for new replay session",responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{valid_start_timestamp:{type:"string"},valid_end_timestamp:{type:"string"},valid_min_replay_speed:{type:"number"},valid_max_replay_speed:{type:"number"}}}},sent_at:{type:"string"}}},example:{data:[{valid_start_timestamp:"2023-06-13T00:00:00Z",valid_end_timestamp:"2023-06-13T03:00:00Z",valid_min_replay_speed:.5,valid_max_replay_speed:4}],sent_at:"2023-06-15T18:48:56Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"get",path:"/info/replay",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request Replay Info",description:{content:"gets valid timestamp for new replay session",type:"text/plain"},url:{path:["info","replay"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/rnr/Record & Replay API/record-replay",custom_edit_url:null},c=void 0,y={unversionedId:"rnr/Record & Replay API/request-replay-info",id:"rnr/Record & Replay API/request-replay-info",title:"Request Replay Info",description:"gets valid timestamp for new replay session",source:"@site/docs/rnr/Record & Replay API/request-replay-info.api.mdx",sourceDirName:"rnr/Record & Replay API",slug:"/rnr/Record & Replay API/request-replay-info",permalink:"/ar2-docs/docs/rnr/Record & Replay API/request-replay-info",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-replay-info",title:"Request Replay Info",description:"gets valid timestamp for new replay session",sidebar_label:"Request Replay Info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"gets valid timestamp for new replay session",responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{valid_start_timestamp:{type:"string"},valid_end_timestamp:{type:"string"},valid_min_replay_speed:{type:"number"},valid_max_replay_speed:{type:"number"}}}},sent_at:{type:"string"}}},example:{data:[{valid_start_timestamp:"2023-06-13T00:00:00Z",valid_end_timestamp:"2023-06-13T03:00:00Z",valid_min_replay_speed:.5,valid_max_replay_speed:4}],sent_at:"2023-06-15T18:48:56Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"get",path:"/info/replay",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request Replay Info",description:{content:"gets valid timestamp for new replay session",type:"text/plain"},url:{path:["info","replay"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/rnr/Record & Replay API/record-replay",custom_edit_url:null},sidebar:"rnr",previous:{title:"Request Replay End",permalink:"/ar2-docs/docs/rnr/Record & Replay API/request-replay-end"},next:{title:"Request  Replay Init",permalink:"/ar2-docs/docs/rnr/Record & Replay API/request-replay-init"}},u={},v=[{value:"Request Replay Info",id:"request-replay-info",level:2}],_={toc:v};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"request-replay-info"},"Request Replay Info"),(0,r.kt)("p",null,"gets valid timestamp for new replay session"),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"OK")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"valid_start_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"valid_end_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"valid_min_replay_speed",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"valid_max_replay_speed",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "valid_start_timestamp": "string",\n      "valid_end_timestamp": "string",\n      "valid_min_replay_speed": 0,\n      "valid_max_replay_speed": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "valid_start_timestamp": "2023-06-13T00:00:00Z",\n      "valid_end_timestamp": "2023-06-13T03:00:00Z",\n      "valid_min_replay_speed": 0.5,\n      "valid_max_replay_speed": 4\n    }\n  ],\n  "sent_at": "2023-06-15T18:48:56Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);