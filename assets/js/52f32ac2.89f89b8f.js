"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[79603],{49755:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>f,default:()=>I,frontMatter:()=>g,metadata:()=>v,toc:()=>w});var t=s(74848),n=s(28453),i=s(77233),d=s.n(i),l=(s(22661),s(80811)),o=s.n(l),r=(s(41871),s(24791)),h=s.n(r),m=s(35654),c=s.n(m),u=s(69015),p=s.n(u),x=(s(84919),s(84664)),b=s.n(x),y=s(85225),j=(s(71156),s(7227));const g={id:"get-dashboard-layout-by-name",title:"Get Dashboard (Layout) by Name",description:"Get Dashboard (Layout) by Name",sidebar_label:"Get Dashboard (Layout) by Name",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVtuO2zYQ/RWBfUkAc01K1PUtSIJt0E0WaFwUaLEQKJG6JLKoiNRuDMP/3iElO3a9RQv0tg9raTQ8PHNmOMM9MrzWKPsVCa6bQvFRoIcVGvjIt9LI0X7aox5eUPbNJXeGFWp7sA7cNPCsy0ZuOcr2yOwG663N2PY1OqzQKL9M7SgFysw4ycODtehB9Vpq6+8TYn+E1OXYDqZVFvX+B8BsJBeOwx69Vr2RvcEbB77/w+1WSH7l26GzJj4MXVtyi7j+pAH2AGTecPOXATbNtPL81Hs11Z5PfOaRKCNJxgLv9v3GoR1p3cm+Bhmew23Bo5bjBTAN4hDWA0A5A1j/K7rPoanikyyNVfWEBtJx43xakBjFVZX6ZVjglNMSsyJkOA04vPqiEiVNCk4jIKPKMu9U+Rll/uqY4I3UxntzzLJHwe0yKwYcwPjUilqauTbcnpCmIkkqiUlQxJhRVmGeFPCvIBGJEx9I0NO63IaSu3UiIiyIA4GpSDhmgqaYpzTEEQkLEQWsYHEM60b1hLLQitVNW+AROCird2iLpK0bs3zvq7Z2arXGCf2uF1ZSZeXv1NNr1cFjhmxtwarj63eEEVJVNlxQ8qOaxtLVj2rysuGj0Xl7xMm1Uz3ndT3K2tbSCm2laKftGTbstGmgxhvV2Sh9Mts+Gm4mvZFfgS26g5jg1DQXrvZ8zNQufL8Hw2mfM3dKyNF64f8ezhoU15KcigVBWAYEFwGzIicUp2lV4SAKeETTgFR+8XeTQ74lh/zDyfmXskLJ/5ET6H0Vf4RQWtuFZuilAy/ZEj6hiR8n2E8CHzMmfFxUfoR9FgUxpIrSgl8cXwoI8xabn++vTuymabUHO3jwM2kpvEqN3tI69I33znit0bKr7Hf5KPvZiWuP90c3t8Q00sFslZg6eYNO1RWkLEp4yjAtkxCzWMQ4ISnwJXERJyH8Qat7nu/9h7f/Hd+Hg02L1rx2zX4qS3ix2Ybum3PjjqnPMAHh082xz/9im7Rt05ckb+V5m3xxx3dqMi+9Yud9mAcjzM5GWXXgRKHVPCIztD4N0LVtuOv95UA9ODbj43HqTmMHixpjhmy93jvnXPZiUDBRDgdka6ntK3V+oqwPoFiImSm9ITfETotBabPlbqYszf5Pg7iI+TSAbO7WQ8dh9gOs47hfAjy/RCwzZYWy390agHUDXKz3fl9wLX8aO4gGzF8mOe7ADo+PfGx5YUMCHUSr7TPIWfFOyytipxGKXvy43DReerDzs4QXI+93VifeTXJuDp/l7vqG44pmvoQ4JrPTKyidwZwtv75nPJyVwO1be1X4DW5sESk=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/91_dash/Dash API/dash",custom_edit_url:null,hide_send_button:!0},f=void 0,v={id:"modules/dash/Dash API/get-dashboard-layout-by-name",title:"Get Dashboard (Layout) by Name",description:"Get Dashboard (Layout) by Name",source:"@site/docs/40_modules/91_dash/Dash API/get-dashboard-layout-by-name.api.mdx",sourceDirName:"40_modules/91_dash/Dash API",slug:"/modules/dash/Dash API/get-dashboard-layout-by-name",permalink:"/docs/docs/modules/dash/Dash API/get-dashboard-layout-by-name",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-dashboard-layout-by-name",title:"Get Dashboard (Layout) by Name",description:"Get Dashboard (Layout) by Name",sidebar_label:"Get Dashboard (Layout) by Name",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVtuO2zYQ/RWBfUkAc01K1PUtSIJt0E0WaFwUaLEQKJG6JLKoiNRuDMP/3iElO3a9RQv0tg9raTQ8PHNmOMM9MrzWKPsVCa6bQvFRoIcVGvjIt9LI0X7aox5eUPbNJXeGFWp7sA7cNPCsy0ZuOcr2yOwG663N2PY1OqzQKL9M7SgFysw4ycODtehB9Vpq6+8TYn+E1OXYDqZVFvX+B8BsJBeOwx69Vr2RvcEbB77/w+1WSH7l26GzJj4MXVtyi7j+pAH2AGTecPOXATbNtPL81Hs11Z5PfOaRKCNJxgLv9v3GoR1p3cm+Bhmew23Bo5bjBTAN4hDWA0A5A1j/K7rPoanikyyNVfWEBtJx43xakBjFVZX6ZVjglNMSsyJkOA04vPqiEiVNCk4jIKPKMu9U+Rll/uqY4I3UxntzzLJHwe0yKwYcwPjUilqauTbcnpCmIkkqiUlQxJhRVmGeFPCvIBGJEx9I0NO63IaSu3UiIiyIA4GpSDhmgqaYpzTEEQkLEQWsYHEM60b1hLLQitVNW+AROCird2iLpK0bs3zvq7Z2arXGCf2uF1ZSZeXv1NNr1cFjhmxtwarj63eEEVJVNlxQ8qOaxtLVj2rysuGj0Xl7xMm1Uz3ndT3K2tbSCm2laKftGTbstGmgxhvV2Sh9Mts+Gm4mvZFfgS26g5jg1DQXrvZ8zNQufL8Hw2mfM3dKyNF64f8ezhoU15KcigVBWAYEFwGzIicUp2lV4SAKeETTgFR+8XeTQ74lh/zDyfmXskLJ/5ET6H0Vf4RQWtuFZuilAy/ZEj6hiR8n2E8CHzMmfFxUfoR9FgUxpIrSgl8cXwoI8xabn++vTuymabUHO3jwM2kpvEqN3tI69I33znit0bKr7Hf5KPvZiWuP90c3t8Q00sFslZg6eYNO1RWkLEp4yjAtkxCzWMQ4ISnwJXERJyH8Qat7nu/9h7f/Hd+Hg02L1rx2zX4qS3ix2Ybum3PjjqnPMAHh082xz/9im7Rt05ckb+V5m3xxx3dqMi+9Yud9mAcjzM5GWXXgRKHVPCIztD4N0LVtuOv95UA9ODbj43HqTmMHixpjhmy93jvnXPZiUDBRDgdka6ntK3V+oqwPoFiImSm9ITfETotBabPlbqYszf5Pg7iI+TSAbO7WQ8dh9gOs47hfAjy/RCwzZYWy390agHUDXKz3fl9wLX8aO4gGzF8mOe7ADo+PfGx5YUMCHUSr7TPIWfFOyytipxGKXvy43DReerDzs4QXI+93VifeTXJuDp/l7vqG44pmvoQ4JrPTKyidwZwtv75nPJyVwO1be1X4DW5sESk=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/91_dash/Dash API/dash",custom_edit_url:null,hide_send_button:!0},sidebar:"dash",previous:{title:"Get Dashboard (Layout) by Id",permalink:"/docs/docs/modules/dash/Dash API/get-dashboard-layout-by-id"},next:{title:"Get Dashboard List by User Id (Paginated)",permalink:"/docs/docs/modules/dash/Dash API/get-dashboard-list-by-user-id-paginated"}},_={},w=[];function P(e){const a={p:"p",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get Dashboard (Layout) by Name"}),"\n",(0,t.jsx)(o(),{method:"get",path:"/dashboard/name/{dashboard_name}"}),"\n",(0,t.jsx)(a.p,{children:"Get Dashboard (Layout) by Name"}),"\n",(0,t.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(c(),{className:"paramsItem",param:{name:"dashboard_name",in:"path",schema:{type:"string"},required:!0}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(d(),{label:void 0,id:void 0,children:(0,t.jsxs)(j.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"OK"})}),(0,t.jsxs)(s,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Content-Type"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(a.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(a.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Content-Length"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(a.p,{children:"integer"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(h(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(a.p,{children:"object"})})})]})}),(0,t.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p(),{responseExample:"{}",language:"json"})}),(0,t.jsx)(j.default,{label:"Example",value:"Example",children:(0,t.jsx)(p(),{responseExample:'{\n  "data": {\n    "id": "7ff92c5b-9a1c-4b54-93ab-92dfdc18ba16",\n    "occ_lock": 2,\n    "name": "Test Dashboard 1",\n    "description": "test",\n    "widgets": [\n      {\n        "id": "adeb88fe-03b7-414f-a8bf-ab060782b541",\n        "widget_type_id": "d604373d-1d8a-4d19-a915-605bd634b477",\n        "row": 5,\n        "column": 3,\n        "width": 5,\n        "height": 5,\n        "config": {\n          "title": "Indicator",\n          "lowColor": "",\n          "highColor": "#0400ff",\n          "dataSource": "aoh_charts_indicator_sample_aggregate",\n          "mediumColor": "",\n          "lowThreshold": "20",\n          "lowStatusText": "Low",\n          "showThreshold": true,\n          "highStatusText": "High",\n          "mediumThreshold": 100,\n          "mediumStatusText": "Med"\n        }\n      },\n      {\n        "id": "f4335c30-b34a-4d81-99ff-363a61930f2b",\n        "widget_type_id": "d604373d-1d8a-4d19-a915-605bd634b477",\n        "row": 0,\n        "column": 0,\n        "width": 5,\n        "height": 5,\n        "config": {\n          "title": "Indicator",\n          "lowColor": "",\n          "highColor": "",\n          "dataSource": "aoh_charts_indicator_sample_aggregate",\n          "mediumColor": "",\n          "lowThreshold": 10,\n          "lowStatusText": "Low",\n          "showThreshold": true,\n          "highStatusText": "High",\n          "mediumThreshold": 100,\n          "mediumStatusText": "Med"\n        }\n      }\n    ],\n    "favourite": true,\n    "tags": [\n      {\n        "id": "d2018278-2832-44d2-bf26-246370f211ba",\n        "occ_lock": 1,\n        "text": "TWO",\n        "description": "This tag is used for examples. It itself is even used as an example for the tag module."\n      },\n      {\n        "id": "39468a94-1c85-47d7-8096-207b78555575",\n        "occ_lock": 1,\n        "text": "ONE",\n        "description": "This tag is used for examples. It itself is even used as an example for the tag module."\n      }\n    ]\n  },\n  "message": "success",\n  "sent_at": "2024-08-29T06:08:43Z"\n}',language:"json"})})]})})})})]})})})})]})}function I(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(P,{...e})}):P(e)}}}]);