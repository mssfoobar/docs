"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[79603],{49755:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>D,contentTitle:()=>f,default:()=>T,frontMatter:()=>g,metadata:()=>_,toc:()=>w});var t=s(74848),n=s(28453),d=s(77233),o=s.n(d),i=(s(22661),s(80811)),l=s.n(i),r=(s(41871),s(24791)),h=s.n(r),m=s(35654),c=s.n(m),p=s(69015),u=s.n(p),x=(s(84919),s(84664)),b=s.n(x),y=s(85225),j=(s(71156),s(7227));const g={id:"get-dashboard-layout-by-name",title:"Get Dashboard (Layout) by Name",description:"Get Dashboard (Layout) by Name",sidebar_label:"Get Dashboard (Layout) by Name",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVttu2zgQ/RVh9qUFxJi6X96KtsgWmzZA60WBBoZBiZTEVhZVkUpqCPr3xVC2azcpdoG9PcUZHR7OzBnOzASG1RryO+BMN4ViA4eNCz0b2E4YMeCnCTq2E5B/h2ytwQXZQQ49Mw24oMtG7BjkE5h9j2htBtnVMLswiK+jHASH3AyjmDdo0b3qtNCI9ynFP1zocpC9kQpZb38DFxrBuPVhgpeqM6IzZG3Jp59e54L4xnZ9iybW960sGTKuPmvVwTy78IqZv0ywbkbX8TPnxVg7PvVDh8Y5TfMwcK7fri3b0a0b0dWmeZJXdkbUYrgg9oIkghkJyoUA8Y/cfYpNFZ9FaTCrJ7YJODMWIznkkFRV5pdRQTLmlSQsopBkAStI5vOKl15aMC8GF1RZbltVfoHcd48Cr4U2zqujyo4H7g+qGKENuPAgeS3MUhv2TsZFkaaVIDQoEhJ6YUVYWlSEFTSmSeoXUeidzm0xlK09x2MaBknAicdTRkLuZYRlXkRiGhU8DsIiTBJwYVAPkEeYrHbcdZAHlgrzHWGRyLoxh+9dJWubLWlsot90HFOqMP2tenipWjVADlhbsm6O//5CQ0qrCsNlhn1Q41Da+lHNtmzYYPRWHnm22mZ9y+p6EDXWkgs7weW4O+Nu1cO6GYRuVItR+nSxfTDMjHotvhnI4UY94KtpLqD4PhbXLrC/yro53XMG9yg9Wi/wbwXH6jyIU4VBEJUBJUUQYpJTj2RZVZEgDljsZQGt/OLvikO/i0P/YXH+JVU8+n9osnGhYvdqHCR2oYX60IEPanGfeqmfpMRPA5+EIfdJUfkx8cM4SGjle17BLp6v54JZrlh/vH30YteN1I5htSO1M2rBnUoNzqF16CvnjXGk0aKt8Lu4F90CYtph3RFmj5hGWJqd4mMrruBUXUEWxinLQuKVaUTChCckpVlMfJoUSRpFUZREP/H39t3r/87fzYyyaM1q2+zHshRao9qiM1tm7DP1Q0JT4mfrY5//hE0a2/Slk9fivE0+u2F7NZrnTrF33i2DcSdMozA7tcB+aUdkDqvTAF1hw11NlwN1tt4M98epOw4t5NAY0+er1WTBW9HxXsnOzDNgLcmuUucvCjHgAlIsnnpX9IritOiVNjtmZ8qh2f9pEBcxnwYQarfqWyY7pLU+TocAz5eIw0xxIf9ha9i40ChtED1NBdPi96GdZzR/HcWwh/xu48I9GyQrMKS7CbjU+JtDXrFWi0eOnUYoPHt/2DSeO+A+7fDByLo95om1o1iawxexf7zh2KJZlhDryQJ6UZaiN2fHH+8Zm7MSuH6Nq8IfbmwRKQ==",sidebar_class_name:"get api-method",info_path:"docs/40_modules/91_dash/Dash API/dash",custom_edit_url:null,hide_send_button:!0},f=void 0,_={id:"modules/dash/Dash API/get-dashboard-layout-by-name",title:"Get Dashboard (Layout) by Name",description:"Get Dashboard (Layout) by Name",source:"@site/docs/40_modules/91_dash/Dash API/get-dashboard-layout-by-name.api.mdx",sourceDirName:"40_modules/91_dash/Dash API",slug:"/modules/dash/Dash API/get-dashboard-layout-by-name",permalink:"/docs/docs/modules/dash/Dash API/get-dashboard-layout-by-name",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-dashboard-layout-by-name",title:"Get Dashboard (Layout) by Name",description:"Get Dashboard (Layout) by Name",sidebar_label:"Get Dashboard (Layout) by Name",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVttu2zgQ/RVh9qUFxJi6X96KtsgWmzZA60WBBoZBiZTEVhZVkUpqCPr3xVC2azcpdoG9PcUZHR7OzBnOzASG1RryO+BMN4ViA4eNCz0b2E4YMeCnCTq2E5B/h2ytwQXZQQ49Mw24oMtG7BjkE5h9j2htBtnVMLswiK+jHASH3AyjmDdo0b3qtNCI9ynFP1zocpC9kQpZb38DFxrBuPVhgpeqM6IzZG3Jp59e54L4xnZ9iybW960sGTKuPmvVwTy78IqZv0ywbkbX8TPnxVg7PvVDh8Y5TfMwcK7fri3b0a0b0dWmeZJXdkbUYrgg9oIkghkJyoUA8Y/cfYpNFZ9FaTCrJ7YJODMWIznkkFRV5pdRQTLmlSQsopBkAStI5vOKl15aMC8GF1RZbltVfoHcd48Cr4U2zqujyo4H7g+qGKENuPAgeS3MUhv2TsZFkaaVIDQoEhJ6YUVYWlSEFTSmSeoXUeidzm0xlK09x2MaBknAicdTRkLuZYRlXkRiGhU8DsIiTBJwYVAPkEeYrHbcdZAHlgrzHWGRyLoxh+9dJWubLWlsot90HFOqMP2tenipWjVADlhbsm6O//5CQ0qrCsNlhn1Q41Da+lHNtmzYYPRWHnm22mZ9y+p6EDXWkgs7weW4O+Nu1cO6GYRuVItR+nSxfTDMjHotvhnI4UY94KtpLqD4PhbXLrC/yro53XMG9yg9Wi/wbwXH6jyIU4VBEJUBJUUQYpJTj2RZVZEgDljsZQGt/OLvikO/i0P/YXH+JVU8+n9osnGhYvdqHCR2oYX60IEPanGfeqmfpMRPA5+EIfdJUfkx8cM4SGjle17BLp6v54JZrlh/vH30YteN1I5htSO1M2rBnUoNzqF16CvnjXGk0aKt8Lu4F90CYtph3RFmj5hGWJqd4mMrruBUXUEWxinLQuKVaUTChCckpVlMfJoUSRpFUZREP/H39t3r/87fzYyyaM1q2+zHshRao9qiM1tm7DP1Q0JT4mfrY5//hE0a2/Slk9fivE0+u2F7NZrnTrF33i2DcSdMozA7tcB+aUdkDqvTAF1hw11NlwN1tt4M98epOw4t5NAY0+er1WTBW9HxXsnOzDNgLcmuUucvCjHgAlIsnnpX9IritOiVNjtmZ8qh2f9pEBcxnwYQarfqWyY7pLU+TocAz5eIw0xxIf9ha9i40ChtED1NBdPi96GdZzR/HcWwh/xu48I9GyQrMKS7CbjU+JtDXrFWi0eOnUYoPHt/2DSeO+A+7fDByLo95om1o1iawxexf7zh2KJZlhDryQJ6UZaiN2fHH+8Zm7MSuH6Nq8IfbmwRKQ==",sidebar_class_name:"get api-method",info_path:"docs/40_modules/91_dash/Dash API/dash",custom_edit_url:null,hide_send_button:!0},sidebar:"dash",previous:{title:"Get Dashboard (Layout) by Id",permalink:"/docs/docs/modules/dash/Dash API/get-dashboard-layout-by-id"},next:{title:"Get Dashboard List by User Id (Paginated)",permalink:"/docs/docs/modules/dash/Dash API/get-dashboard-list-by-user-id-paginated"}},D={},w=[];function N(e){const a={p:"p",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get Dashboard (Layout) by Name"}),"\n",(0,t.jsx)(l(),{method:"get",path:"/dashboard/name/{dashboard_name}"}),"\n",(0,t.jsx)(a.p,{children:"Get Dashboard (Layout) by Name"}),"\n",(0,t.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(c(),{className:"paramsItem",param:{name:"dashboard_name",in:"path",schema:{type:"string"},required:!0}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(o(),{label:void 0,id:void 0,children:(0,t.jsxs)(j.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"OK"})}),(0,t.jsxs)(s,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Content-Type"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(a.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(a.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Content-Length"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(a.p,{children:"integer"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(h(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(a.p,{children:"object"})})})]})}),(0,t.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:"{}",language:"json"})}),(0,t.jsx)(j.default,{label:"Example",value:"Example",children:(0,t.jsx)(u(),{responseExample:'{\n  "data": {\n    "id": "7ff92c5b-9a1c-4b54-93ab-92dfdc18ba16",\n    "occ_lock": 2,\n    "name": "Test Dashboard 1",\n    "description": "test",\n    "widgets": [\n      {\n        "id": "adeb88fe-03b7-414f-a8bf-ab060782b541",\n        "widget_type_id": "d604373d-1d8a-4d19-a915-605bd634b477",\n        "row": 5,\n        "column": 3,\n        "width": 5,\n        "height": 5,\n        "config": {\n          "title": "Indicator",\n          "lowColor": "",\n          "highColor": "#0400ff",\n          "dataSource": "aoh_charts_indicator_sample_aggregate",\n          "mediumColor": "",\n          "lowThreshold": "20",\n          "lowStatusText": "Low",\n          "showThreshold": true,\n          "highStatusText": "High",\n          "mediumThreshold": 100,\n          "mediumStatusText": "Med"\n        }\n      },\n      {\n        "id": "f4335c30-b34a-4d81-99ff-363a61930f2b",\n        "widget_type_id": "d604373d-1d8a-4d19-a915-605bd634b477",\n        "row": 0,\n        "column": 0,\n        "width": 5,\n        "height": 5,\n        "config": {\n          "title": "Indicator",\n          "lowColor": "",\n          "highColor": "",\n          "dataSource": "aoh_charts_indicator_sample_aggregate",\n          "mediumColor": "",\n          "lowThreshold": 10,\n          "lowStatusText": "Low",\n          "showThreshold": true,\n          "highStatusText": "High",\n          "mediumThreshold": 100,\n          "mediumStatusText": "Med"\n        }\n      }\n    ],\n    "favourite": true,\n    "tags": [\n      {\n        "id": "d2018278-2832-44d2-bf26-246370f211ba",\n        "occ_lock": 1,\n        "text": "TWO",\n        "description": "This tag is used for examples. It itself is even used as an example for the tag module."\n      },\n      {\n        "id": "39468a94-1c85-47d7-8096-207b78555575",\n        "occ_lock": 1,\n        "text": "ONE",\n        "description": "This tag is used for examples. It itself is even used as an example for the tag module."\n      }\n    ]\n  },\n  "message": "success",\n  "sent_at": "2024-08-29T06:08:43Z"\n}',language:"json"})})]})})})})]})})})})]})}function T(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(N,{...e})}):N(e)}}}]);