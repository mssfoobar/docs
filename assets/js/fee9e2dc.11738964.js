"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[116],{2991:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(74848),n=t(28453);const i={sidebar_position:4},r="Browser Logout using OpenID Logout Flow",l={id:"modules/iams/authentication/browser_logout",title:"Browser Logout using OpenID Logout Flow",description:"AGIL Ops Hub Web Framework also implement the OpenID Logout Flow to allow user to logout from Application.",source:"@site/docs/40_modules/92_iams/06_authentication/03_browser_logout.md",sourceDirName:"40_modules/92_iams/06_authentication",slug:"/modules/iams/authentication/browser_logout",permalink:"/docs/docs/modules/iams/authentication/browser_logout",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/40_modules/92_iams/06_authentication/03_browser_logout.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"iams",previous:{title:"ID Token, Access Token, and Refresh Token",permalink:"/docs/docs/modules/iams/authentication/ID_token_access_token_refresh_tokens"},next:{title:"Customize Login Screen",permalink:"/docs/docs/modules/iams/authentication/customize_login_screen"}},c={},d=[];function a(e){const o={code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"browser-logout-using-openid-logout-flow",children:"Browser Logout using OpenID Logout Flow"})}),"\n",(0,s.jsx)(o.p,{children:"AGIL Ops Hub Web Framework also implement the OpenID Logout Flow to allow user to logout from Application."}),"\n",(0,s.jsx)(o.p,{children:"The following flow chart depicts how the Logout Flow work:"}),"\n",(0,s.jsx)(o.p,{children:"::: Note\nAGIL Ops Hub Web Framework currently does not support Single Logout. Will implement this feature in future release.\n:::"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Logout",src:t(95405).A+"",width:"495",height:"327"})}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"User initiate the logout request to Web App Backend."}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Web App Backend then redirect the user to the Keycloak server with the following information:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"client_id"})," \u2013 the client id of the Web App Backend at Keycloak"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"post_logout_redirect_uri"})," \u2013 the URL that Keycloak should redirect user back to after logout"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"id_token_hint"})," \u2013 ID token of the user. Retrieve from the user cookies stored during login."]}),"\n"]}),"\n",(0,s.jsxs)(o.ol,{start:"3",children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Keycloak will then validate that ",(0,s.jsx)(o.code,{children:"id_token_hint"})," and ",(0,s.jsx)(o.code,{children:"post_logout_redirect_uri"})," are valid. If valid, Keycloak will terminate the user session and redirect user back to the specified ",(0,s.jsx)(o.code,{children:"post_logout_redirect_uri"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Web App Backend will instruct browser to delete the cookies that store the id and access tokens."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},95405:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/6.3_logout-3d6d0eb0f8d920897eeae875185f3430.png"}}]);