"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6080],{97798:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>k,default:()=>N,frontMatter:()=>b,metadata:()=>P,toc:()=>R});var r=a(74848),i=a(28453),t=a(77233),o=a.n(t),n=(a(22661),a(80811)),d=a.n(n),l=(a(41871),a(24791)),m=a.n(l),c=a(35654),p=a.n(c),h=a(69015),u=a.n(h),v=a(84919),f=a.n(v),j=a(84664),x=a.n(j),g=a(85225),y=(a(71156),a(7227));const b={id:"revoke-administrator-rights-from-user-id",title:"Revoke administrator rights from user id",description:"API to revoke administrator rights from a user in a particular room",sidebar_label:"Revoke administrator rights from user id",hide_title:!0,hide_table_of_contents:!0,api:"eJytVlFv4zYM/iuC7qEbEJ/tpHVTv92teSi2YUPWYcCy4sBYdKKrbXmSkrvAyH8faSVt0gRdsV0fCpkSqY/8yE/ppIeFk/lMWmNqJx8GUqErrG69No3M5Ydf74Q3wuLaPKIAVetGO2/BGyusXiy9E6U1tQCxcmiFbmjVgvW6WFVARyiqHEiyQI0eLV/VyYY+KDZvakXbmm9qwS/ly+vvboUpRY3odbPYR7P490pbVDL3doUD6Yol1iDzTvpNy4EJIB2X24HEr1C3FdvKcaouS8DoWmERpalKIrjOrqIkgaS4STGblxl5PIHjdN4Ers/7RYl2pXkLVt14XKA9ApsmwyS7Ht1sH0IAdP6jURv2KgydbzwvoW0rXQCDiT87RtSdhjfzz1h4psCaFokXdLy7i2osfxxn9TM0iundiFJjpfYpftJKFFBVzINfoqDGoKgvCr49THh2cMvDYXpH18t9suQd/F1rGhdgDpPkFOAvP9LF36gOlOnhKbAWNsy5x9q9pYo12Ed3pvP6VBwB/AT+7PZROQKK2UFAOf23gWNO7pS42JfvgmePB4SNMB5nxWg+jjDLrqPLYpRG89GNioajQoEaJcPRVXYhub2eMFKth6MoyaL06j4d55fDPE3/3CVyeY6Gj6DENPDIzXt17swdkWQbqMRvaNc0JhNriXMOSWqwNNQk5FCRMPQaQSOWy3g9jHstirugD9uYU6XPMJHbuK+JZOgcMyjKylbku/S+zeOYGiJi36he1P69wvXwPdjhyfjeYgmryosQp68Gt8/0eeAm5zv2WV50U5qeXu17kZnSrYIGCBZYc3cOJCMM161PEbx7J/5Ygr9wosEvfzWRKCyCR1GQUaRR2vPJ9lCkl3ZG0Brna+h7fidcb+oc0UvbEZoDbflGqr9reo9ffdxWoHvAPVPdju1ZqEp4ewYyf3oResrZ8iTDgXXiaEkZs2fXzcHh77babtlM9FhSyBkt12A1zJkQ6gylHa+p1UqoHL6S9HfTnXR9L84+O2fT2QtHw7KxhmrFX7R8xM3zC8fPyv/A8foL8x9g7Yq6ZVVeIijqfi5V2PwhAInuOcSz84nKclLB40NRYOtfPftwMPG3k58m9xM6Pt+9abVR/c8B+MK9QP97qKYvTdBZtnWygmaxotGi/RCV//4BzdX2kQ==",sidebar_class_name:"delete api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},k=void 0,P={id:"modules/ucs/Universal Comms API/v2/revoke-administrator-rights-from-user-id",title:"Revoke administrator rights from user id",description:"API to revoke administrator rights from a user in a particular room",source:"@site/docs/40_modules/30_ucs/Universal Comms API/v2/revoke-administrator-rights-from-user-id.api.mdx",sourceDirName:"40_modules/30_ucs/Universal Comms API/v2",slug:"/modules/ucs/Universal Comms API/v2/revoke-administrator-rights-from-user-id",permalink:"/docs/docs/modules/ucs/Universal Comms API/v2/revoke-administrator-rights-from-user-id",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"revoke-administrator-rights-from-user-id",title:"Revoke administrator rights from user id",description:"API to revoke administrator rights from a user in a particular room",sidebar_label:"Revoke administrator rights from user id",hide_title:!0,hide_table_of_contents:!0,api:"eJytVlFv4zYM/iuC7qEbEJ/tpHVTv92teSi2YUPWYcCy4sBYdKKrbXmSkrvAyH8faSVt0gRdsV0fCpkSqY/8yE/ppIeFk/lMWmNqJx8GUqErrG69No3M5Ydf74Q3wuLaPKIAVetGO2/BGyusXiy9E6U1tQCxcmiFbmjVgvW6WFVARyiqHEiyQI0eLV/VyYY+KDZvakXbmm9qwS/ly+vvboUpRY3odbPYR7P490pbVDL3doUD6Yol1iDzTvpNy4EJIB2X24HEr1C3FdvKcaouS8DoWmERpalKIrjOrqIkgaS4STGblxl5PIHjdN4Ers/7RYl2pXkLVt14XKA9ApsmwyS7Ht1sH0IAdP6jURv2KgydbzwvoW0rXQCDiT87RtSdhjfzz1h4psCaFokXdLy7i2osfxxn9TM0iundiFJjpfYpftJKFFBVzINfoqDGoKgvCr49THh2cMvDYXpH18t9suQd/F1rGhdgDpPkFOAvP9LF36gOlOnhKbAWNsy5x9q9pYo12Ed3pvP6VBwB/AT+7PZROQKK2UFAOf23gWNO7pS42JfvgmePB4SNMB5nxWg+jjDLrqPLYpRG89GNioajQoEaJcPRVXYhub2eMFKth6MoyaL06j4d55fDPE3/3CVyeY6Gj6DENPDIzXt17swdkWQbqMRvaNc0JhNriXMOSWqwNNQk5FCRMPQaQSOWy3g9jHstirugD9uYU6XPMJHbuK+JZOgcMyjKylbku/S+zeOYGiJi36he1P69wvXwPdjhyfjeYgmryosQp68Gt8/0eeAm5zv2WV50U5qeXu17kZnSrYIGCBZYc3cOJCMM161PEbx7J/5Ygr9wosEvfzWRKCyCR1GQUaRR2vPJ9lCkl3ZG0Brna+h7fidcb+oc0UvbEZoDbflGqr9reo9ffdxWoHvAPVPdju1ZqEp4ewYyf3oResrZ8iTDgXXiaEkZs2fXzcHh77babtlM9FhSyBkt12A1zJkQ6gylHa+p1UqoHL6S9HfTnXR9L84+O2fT2QtHw7KxhmrFX7R8xM3zC8fPyv/A8foL8x9g7Yq6ZVVeIijqfi5V2PwhAInuOcSz84nKclLB40NRYOtfPftwMPG3k58m9xM6Pt+9abVR/c8B+MK9QP97qKYvTdBZtnWygmaxotGi/RCV//4BzdX2kQ==",sidebar_class_name:"delete api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucs",previous:{title:"Pause playback",permalink:"/docs/docs/modules/ucs/Universal Comms API/v2/pause-playback"},next:{title:"Server liveness",permalink:"/docs/docs/modules/ucs/Universal Comms API/v2/server-liveness"}},_={},R=[];function Y(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Revoke administrator rights from user id"}),"\n",(0,r.jsx)(d(),{method:"delete",path:"/v2/rooms/{roomid}/users/{userid}/admin"}),"\n",(0,r.jsx)(s.p,{children:"API to revoke administrator rights from a user in a particular room"}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of meeting room",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}}),(0,r.jsx)(p(),{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user to revoke admin rights",required:!0,schema:{type:"integer"},example:10206739}})]})})]}),"\n",(0,r.jsx)(m(),{className:"openapi-tabs__mime",children:(0,r.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(s.p,{children:"Body"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(f(),{collapsible:!1,name:"requestor",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field of user_id calling the API",type:"string"}})})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsxs)(o(),{label:void 0,id:void 0,children:[(0,r.jsxs)(y.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})}),(0,r.jsx)("div",{children:(0,r.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(s.p,{children:"data"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(s.p,{children:"object[]"})})]})}),(0,r.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,r.jsx)(s.p,{children:"Array ["})})}),(0,r.jsx)(f(),{collapsible:!1,name:"remarks",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,r.jsx)(s.p,{children:"]"})})})]})]})}),(0,r.jsx)(f(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,r.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,r.jsx)(y.default,{label:"Example",value:"Example",children:(0,r.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "Revoke administrator rights from userId \'10206739\' in roomId \'a886c3b8-e667-4c31-b39d-23cdad302356\'"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,r.jsxs)(y.default,{label:"400",value:"400",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Bad Request"})}),(0,r.jsx)("div",{})]}),(0,r.jsxs)(y.default,{label:"500",value:"500",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Internal Server Error"})}),(0,r.jsx)("div",{})]})]})})})]})}function N(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(Y,{...e})}):Y(e)}}}]);