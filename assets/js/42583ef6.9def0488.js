(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5025],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18679:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(67294),o=r(86010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:r},t)}},34259:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(87462),o=r(67294),a=r(86010),i=r(51048),l=r(33609),c=r(1943),s=r(72957);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:r,defaultValue:i,values:d,groupId:p,className:f}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??m.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,c.U)(),[w,O]=(0,o.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:R}=(0,s.o5)();if(null!=p){const e=h[p];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const k=e=>{const t=e.currentTarget,r=E.indexOf(t),n=b[r].value;n!==w&&(R(t),O(n),null!=p&&g(p,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;t=E[r]??E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;t=E[r]??E[E.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},f)},b.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:T,onClick:k},i,{className:(0,a.Z)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,o.cloneElement)(m.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,i.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},62976:(e,t,r)=>{"use strict";r(67294),r(93162)},51889:(e,t,r)=>{"use strict";r(67294),r(79524),r(7909)},13986:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));r(51889),r(34259),r(18679),r(62976);const a={id:"record-replay",title:"Record & Replay",description:"API for record & replay service",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},i=void 0,l={unversionedId:"rnr/Record & Replay API/record-replay",id:"rnr/Record & Replay API/record-replay",title:"Record & Replay",description:"API for record & replay service",source:"@site/docs/80_rnr/Record & Replay API/record-replay.info.mdx",sourceDirName:"80_rnr/Record & Replay API",slug:"/rnr/Record & Replay API/record-replay",permalink:"/aoh-docs/docs/rnr/Record & Replay API/record-replay",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"record-replay",title:"Record & Replay",description:"API for record & replay service",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"rnr",previous:{title:"\ud83c\udd95 Introduction",permalink:"/aoh-docs/docs/rnr/introduction"},next:{title:"liveness",permalink:"/aoh-docs/docs/rnr/Record & Replay API/liveness"}},c={},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.0"),(0,o.kt)("h1",{id:"record--replay"},"Record & Replay"),(0,o.kt)("p",null,"API for record & replay service"))}p.isMDXComponent=!0},93162:function(e,t,r){var n,o,a,i=r(25108);o=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){s(n.response,t,r)},n.onerror=function(){i.error("could not download file")},n.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r.g&&r.g.global===r.g?r.g:void 0,c=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,r){var i=l.URL||l.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):o(c.href)?n(e,t,r):a(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,i){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),r);else if(o(e))n(e,r,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,r);var a="application/octet-stream"===e.type,i=/constructor/i.test(l.HTMLElement)||l.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||a&&i||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var d=l.URL||l.webkitURL,p=d.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});l.saveAs=s.saveAs=s,e.exports=s})?n.apply(t,o):n)||(e.exports=a)}}]);