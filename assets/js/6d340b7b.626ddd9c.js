"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[10433],{29606:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=o(74848),n=o(28453);const s={sidebar_position:7},r="Limit the number of queued requests",a={id:"modules/iams/configuring_for_production/limit_the_number_of_queued_requests",title:"Limit the number of queued requests",description:"A production environment should protect itself from an overload situation, so that it responds to as many valid requests as possible, and to continue regular operations once the situation returns to normal again. One way of doing this is rejecting additional requests once a certain threshold is reached.",source:"@site/docs/40_modules/92_iams/08_configuring_for_production/06_limit_the_number_of_queued_requests.md",sourceDirName:"40_modules/92_iams/08_configuring_for_production",slug:"/modules/iams/configuring_for_production/limit_the_number_of_queued_requests",permalink:"/docs/docs/modules/iams/configuring_for_production/limit_the_number_of_queued_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/40_modules/92_iams/08_configuring_for_production/06_limit_the_number_of_queued_requests.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"iams",previous:{title:"Exposing the Keycloak Administration APIs and UI on a different hostname",permalink:"/docs/docs/modules/iams/configuring_for_production/exposing_the_keycloak_administration_APIs_and_UI_on_a_different_hostname"},next:{title:"Introduction",permalink:"/docs/docs/modules/iams/IAMS API/iams-api"}},u={},d=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"limit-the-number-of-queued-requests",children:"Limit the number of queued requests"})}),"\n",(0,i.jsx)(t.p,{children:"A production environment should protect itself from an overload situation, so that it responds to as many valid requests as possible, and to continue regular operations once the situation returns to normal again. One way of doing this is rejecting additional requests once a certain threshold is reached."}),"\n",(0,i.jsx)(t.p,{children:"Load shedding should be implemented on all levels, including the load balancers in your environment. In addition to that, there is a feature in Keycloak to limit the number of requests that can\u2019t be processed right away and need to be queued."}),"\n",(0,i.jsx)(t.p,{children:"By default, there is no limit set. Set the option http-max-queued-requests to limit the number of queued requests to a given threshold matching your environment. Any request that exceeds this limit would return with an immediate 503 Server not Available response."}),"\n",(0,i.jsx)(t.p,{children:"To set http-max-queued-requests, use the following environment variable:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"KC_HTTP_MAX_QUEUED_REQUESTS"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);