"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[31012],{67072:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=i(74848),a=i(28453);const d={sidebar_position:5},c="Notification Template",o={id:"modules/unh/Developer Guide/notification template",title:"Notification Template",description:"Data Binding",source:"@site/docs/40_modules/80_unh/Developer Guide/5_notification template.md",sourceDirName:"40_modules/80_unh/Developer Guide",slug:"/modules/unh/Developer Guide/notification template",permalink:"/docs/docs/modules/unh/Developer Guide/notification template",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/40_modules/80_unh/Developer Guide/5_notification template.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"unh",previous:{title:"Distribution List",permalink:"/docs/docs/modules/unh/Developer Guide/distribution list"},next:{title:"Sending Notification",permalink:"/docs/docs/modules/unh/Developer Guide/sending notification"}},s={},l=[{value:"Data Binding",id:"data-binding",level:2},{value:"Supported parameters for data binding in their respective channels",id:"supported-parameters-for-data-binding-in-their-respective-channels",level:4},{value:"Recipient Contact Data for Binding",id:"recipient-contact-data-for-binding",level:4},{value:"Create Notification Template",id:"create-notification-template",level:2},{value:"Distribution List",id:"distribution-list",level:3},{value:"Email Notification",id:"email-notification",level:3},{value:"Push Notification",id:"push-notification",level:3},{value:"Custom Notification",id:"custom-notification",level:3},{value:"API Example",id:"api-example",level:3}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"notification-template",children:"Notification Template"})}),"\n",(0,t.jsx)(n.h2,{id:"data-binding",children:"Data Binding"}),"\n",(0,t.jsxs)(n.p,{children:["UNH supports data binding in notification templates, allowing dynamic data to be injected into the notification\ncontent. To bind data to the notification, use the following syntax: ",(0,t.jsx)(n.code,{children:"{{variable_name}}"}),". When the\n",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/UNH%20API/send-notification",children:"Send Notification API"})," is called, UNH will replace the placeholder variable\nwith the corresponding data value."]}),"\n",(0,t.jsx)(n.h4,{id:"supported-parameters-for-data-binding-in-their-respective-channels",children:"Supported parameters for data binding in their respective channels"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Email Notification","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"subject"}),"\n",(0,t.jsx)(n.li,{children:"body"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Push Notification","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"title"}),"\n",(0,t.jsx)(n.li,{children:"body"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Custom Notification","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"param_value"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"recipient-contact-data-for-binding",children:"Recipient Contact Data for Binding"}),"\n",(0,t.jsx)(n.p,{children:"UNH also exposes the recipient contact data, which can be bound to the notifications. These data are resolved contact\ndata of Keycloak users during Send Notification API call. All data are available as array of strings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api.distribution.user_ids"})," - Keycloak user IDs"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api.distribution.email_addr"})," - Email addresses"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api.distribution.phone_num"})," - Phone numbers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api.distribution.fcm_tokens"})," - FCM tokens"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To See the example of how data binding works in a notification template, please continue reading the section below."}),"\n",(0,t.jsx)(n.h2,{id:"create-notification-template",children:"Create Notification Template"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Channels are not mandatory fields in the request body. If you don't want to send to a specific channel, simply exclude it."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The IDs in the below examples are randomly generated and will differ from those generated in your own. Please adjust\naccordingly."})}),"\n",(0,t.jsxs)(n.p,{children:["Let's create a new notification template using the previously created ",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/Developer%20Guide/channel%20configuration",children:"channels"})," and\n",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/Developer%20Guide/distribution%20list",children:"distribution list"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"distribution-list",children:"Distribution List"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"distribution_list_id"})," corresponds to the ID of the distribution list created earlier in the\n",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/Developer%20Guide/distribution%20list",children:"Distribution List"})," section."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "distribution_list_id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"email-notification",children:"Email Notification"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"channel_id"})," is the ID of email channel from the ",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/Developer%20Guide/channel%20configuration",children:"Channel Configuration"})," section. The\n",(0,t.jsx)(n.code,{children:"subject"})," and ",(0,t.jsx)(n.code,{children:"body"})," fields can include placeholders, which will be dynamically replaced with data when the\n",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/UNH%20API/send-notification",children:"Send Notification API"})," is called."]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, placeholders ",(0,t.jsx)(n.code,{children:"incident_id"})," and ",(0,t.jsx)(n.code,{children:"incident_type"})," are used, and they will be replaced with\ncorresponding values during the Send Notification API call."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "email_notification": {\n        "channel_id": "f446054c-98a5-4df9-aeea-f687e66951e0",\n        "subject": "Incident - {{incident_id}}",\n        "body": "Incident type {{incident_type}} occurred. Please stay alert."\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"push-notification",children:"Push Notification"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"channel_id"})," is the ID of the push notification channel that we created earlier in\n",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/Developer%20Guide/channel%20configuration",children:"Channel Configuration"})," section. The ",(0,t.jsx)(n.code,{children:"title"})," and ",(0,t.jsx)(n.code,{children:"body"})," fields can also contain\nplaceholders to inject dynamic data at runtime, and the ",(0,t.jsx)(n.code,{children:"image_url"})," allows you to display an image in the mobile\nnotification."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "push_notification": {\n        "channel_id": "193b38d0-2fd2-40cc-93ae-96c1e7fd4c7d",\n        "title": "Incident - {{incident_id}}",\n        "body": "Incident type {{incident_type}} occurred. Please stay alert.",\n        "image_url": "http://www.example.com/img/logo.png"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"custom-notification",children:"Custom Notification"}),"\n",(0,t.jsxs)(n.p,{children:["For custom notifications, we do not need to specify a ",(0,t.jsx)(n.code,{children:"channel_id"})," in the request body. Instead, we use the parameter\nIDs of the custom channel along with their values in the request body."]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we will reuse the two parameters we created in the ",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/Developer%20Guide/channel%20configuration",children:"channel configuration"}),".\nThe second parameter, ",(0,t.jsx)(n.code,{children:"recipients"})," (ID: ",(0,t.jsx)(n.code,{children:"72148187-eaca-4d8f-95bd-6ef769a2b5ae"}),") is a multi-value attribute. To set\nmultiple values for ",(0,t.jsx)(n.code,{children:"recipients"}),", each value is passed as a separate item in the request body, as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "custom_notification": [\n        {\n            "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",\n            "param_value": "Incident type {{incident_type}} occurred. Please stay alert."\n        },\n        {\n            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",\n            "param_value": "b976db3c-09cb-432b-95b0-c6ede8178e3f"\n        },\n        {\n            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",\n            "param_value": "b976db3c-09cb-432b-95b0-c6ede8178e3f"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can bind the ",(0,t.jsx)(n.code,{children:"param_value"})," to the resolved user IDs from the distribution list using\n",(0,t.jsx)(n.code,{children:"{{api.distribution.user_ids}}"}),". This allows you to reference the Keycloak user IDs resolved from the distribution\nlist during the Send Notification API call."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "custom_notification": [\n        {\n            "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",\n            "param_value": "Incident type {{incident_type}} occurred. Please stay alert."\n        },\n        {\n            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",\n            "param_value": "{{api.distribution.user_ids}}"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"api-example",children:"API Example"}),"\n",(0,t.jsxs)(n.p,{children:["Using the configuration examples provided above, we can now call the\n",(0,t.jsx)(n.a,{href:"/docs/docs/modules/unh/UNH%20API/create-notification-template",children:"Create Notification Template API"})," with a request body as shown below:"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("th",{children:"Request"})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl --location \'{{unh_endpoint}}/v1/admin/notification_template\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: {{access_token}}\' \\\n--data \'{\n    "name": "incident notification",\n    "distribution_list_id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58",\n    "email_notification": {\n        "channel_id": "f446054c-98a5-4df9-aeea-f687e66951e0",\n        "subject": "Incident - {{incident_id}}",\n        "body": "Incident type {{incident_type}} occurred. Please stay alert."\n    },\n    "push_notification": {\n        "channel_id": "193b38d0-2fd2-40cc-93ae-96c1e7fd4c7d",\n        "title": "Incident - {{incident_id}}",\n        "body": "Incident type {{incident_type}} occurred. Please stay alert.",\n        "image_url": "http://www.example.com/img/logo.png"\n    },\n    "custom_notification": [\n        {\n            "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",\n            "param_value": "Incident type {{incident_type}} occurred. Please stay alert."\n        },\n        {\n            "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",\n            "param_value": "{{api.distribution.user_ids}}"\n        }\n    ]\n}\'\n'})})})}),(0,t.jsx)("tr",{children:(0,t.jsx)("th",{children:"Response"})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "id": "eedd87f7-6dd5-4e66-8cbb-a4263c150ea8",\n        "name": "incident notification",\n        "email_notification": {\n            "channel_id": "f446054c-98a5-4df9-aeea-f687e66951e0",\n            "subject": "test email bind subject - {{foo}}",\n            "body": "test email bind body - {{bar}}"\n        },\n        "push_notification": {\n            "channel_id": "193b38d0-2fd2-40cc-93ae-96c1e7fd4c7d",\n            "title": "Incident - {{incident_id}}",\n            "body": "Incident type {{incident_type}} occurred. Please stay alert.",\n            "image_url": "http://www.example.com/img/logo.png"\n        },\n        "custom_notification": [\n            {\n                "id": "3a3b5bf1-639f-4575-8fc8-185ee0fce21a",\n                "name": "in-app channel",\n                "endpoint": "http://mssfoobar/in-app/send",\n                "parameters": [\n                    {\n                        "id": "ef073e12-37c2-40fb-b71a-0349260a3d4f",\n                        "param_id": "5a101f30-d8e8-4347-a4fb-438593ca7405",\n                        "param_name": "msg",\n                        "param_value": "Incident type {{incident_type}} occurred. Please stay alert.",\n                        "is_multi_value": false\n                    },\n                    {\n                        "id": "255697b1-5243-4c7f-b68e-a674e153920d",\n                        "param_id": "72148187-eaca-4d8f-95bd-6ef769a2b5ae",\n                        "param_name": "recipients",\n                        "param_value": "{{api.distribution.user_ids}}",\n                        "is_multi_value": true\n                    }\n                ]\n            }\n        ],\n        "distribution_list_id": "d00c61bf-8722-4ef7-9a28-f60925e8ca58",\n        "created_at": "2024-10-09T03:46:15.707271Z",\n        "created_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",\n        "updated_at": "2024-10-09T03:46:15.707271Z",\n        "updated_by": "42bd1bee-2061-4843-be8e-d796ff3eed65",\n        "tenant_id": "a9e57d96-4dc8-42dd-96a7-9cd60a954973",\n        "occ_lock": 0\n    },\n    "sent_at": "2024-10-09T03:46:15Z"\n}\n'})})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}}}]);