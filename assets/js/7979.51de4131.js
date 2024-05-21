"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7979],{18679:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},1871:(e,t,r)=>{r.d(t,{b:()=>s,k:()=>l});var n=r(67294),a=r(43768);const o=n.createContext(null);function s(e){let{children:t,content:r}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return n.createElement(o.Provider,{value:a},t)}function l(){const e=(0,n.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}},51689:(e,t,r)=>{r.d(t,{D:()=>l,f:()=>i});var n=r(67294),a=r(43768);const o=Symbol("EmptyContext"),s=n.createContext(o);function l(e){let{children:t}=e;const[r,a]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:r,setExpandedItem:a})),[r]);return n.createElement(s.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(s);if(e===o)throw new a.i6("DocSidebarItemsExpandedStateProvider");return e}},85560:(e,t,r)=>{r.d(t,{a:()=>s});var n=r(67294),a=r(72957),o=r(43266);function s(e){let{threshold:t}=e;const[r,s]=(0,n.useState)(!1),l=(0,n.useRef)(!1),{startScroll:i,cancelScroll:c}=(0,a.Ct)();return(0,a.RF)(((e,r)=>{let{scrollY:n}=e;const a=r?.scrollY;a&&(l.current?l.current=!1:n>=a?(c(),s(!1)):n<t?s(!1):n+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,o.S)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:r,scrollToTop:()=>i(0)}}},4382:(e,t,r)=>{r.d(t,{S:()=>i});var n=r(67294),a=r(20107);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e,t){let{anchorTopOffset:r}=t;const n=e.find((e=>o(e).top>=r));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function l(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,n.useRef)(void 0),r=l();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:r}=e;const n=[];for(let a=t;a<=r;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=s(i,{anchorTopOffset:r.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}},89842:(e,t,r)=>{r.r(t),r.d(t,{AnnouncementBarProvider:()=>A.pl,BlogPostProvider:()=>x.n,Collapsible:()=>i.z,ColorModeProvider:()=>m.S,DEFAULT_SEARCH_TAG:()=>o.HX,DocProvider:()=>k.b,DocSidebarItemsExpandedStateProvider:()=>P.D,DocsPreferredVersionContextProvider:()=>T.L5,DocsSidebarProvider:()=>w.b,DocsVersionProvider:()=>y.q,HtmlClassNameProvider:()=>d.FG,NavbarProvider:()=>Z.V,NavbarSecondaryMenuFiller:()=>h.Zo,PageMetadata:()=>d.d,PluginHtmlClassNameProvider:()=>d.VC,ReactContextError:()=>u.i6,ScrollControllerProvider:()=>O.OC,SkipToContentFallbackId:()=>E.u,SkipToContentLink:()=>E.l,TabGroupChoiceProvider:()=>N.z,ThemeClassNames:()=>c.k,composeProviders:()=>u.Qc,containsLineNumbers:()=>R.nt,createStorageSlot:()=>a.W,docVersionSearchTag:()=>o.os,duplicates:()=>g.l,filterDocCardListItems:()=>s.MN,findFirstCategoryLink:()=>s.Wl,findSidebarCategory:()=>s.em,getPrismCssVariables:()=>R.QC,isActiveSidebarItem:()=>s._F,isDocsPluginEnabled:()=>s.cE,isMultiColumnFooterLinks:()=>v.a,isRegexpStringMatch:()=>p.F,isSamePath:()=>z.Mg,keyboardFocusedClassName:()=>W.h,listStorageKeys:()=>a._,listTagsByLetters:()=>f.P,parseCodeBlockTitle:()=>R.bc,parseLanguage:()=>R.Vo,parseLines:()=>R.nZ,processAdmonitionProps:()=>L,splitNavbarItems:()=>Z.A,translateTagsPageTitle:()=>f.M,uniq:()=>g.j,useAlternatePageUtils:()=>H.l,useAnnouncementBar:()=>A.nT,useBackToTopButton:()=>K.a,useBlogPost:()=>x.C,useCodeWordWrap:()=>X.F,useCollapsible:()=>i.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>o._q,useCurrentSidebarCategory:()=>s.jA,useDoc:()=>k.k,useDocById:()=>s.xz,useDocRouteMetadata:()=>s.hI,useDocSidebarItemsExpandedState:()=>P.f,useDocsPreferredVersion:()=>T.J,useDocsPreferredVersionByPluginId:()=>T.Oh,useDocsSidebar:()=>w.V,useDocsVersion:()=>y.E,useDocsVersionCandidates:()=>s.lO,useEvent:()=>u.zX,useFilteredAndTreeifiedTOC:()=>B.b,useHideableNavbar:()=>U.c,useHistoryPopHandler:()=>F.R,useHomePageRoute:()=>z.Ns,useIsomorphicLayoutEffect:()=>u.LI,useKeyboardNavigation:()=>W.t,useLayoutDoc:()=>s.vY,useLayoutDocsSidebar:()=>s.oz,useLocalPathname:()=>M.b,useLocationChange:()=>_.S,useLockBodyScroll:()=>j.N,useNavbarMobileSidebar:()=>I.e,useNavbarSecondaryMenu:()=>D.Y,usePluralForm:()=>l.c,usePrevious:()=>u.D9,usePrismTheme:()=>C.p,useScrollController:()=>O.sG,useScrollPosition:()=>O.RF,useScrollPositionBlocker:()=>O.o5,useSearchPage:()=>Q,useSidebarBreadcrumbs:()=>s.s1,useSmoothScrollTo:()=>O.Ct,useTOCHighlight:()=>G.S,useTabGroupChoice:()=>N.U,useThemeConfig:()=>n.L,useTitleFormatter:()=>V.p,useTreeifiedTOC:()=>B.a,useWindowSize:()=>b.i});var n=r(20107),a=r(92560),o=r(60246),s=r(78259),l=r(23777),i=r(54639),c=r(23702),u=r(43768),d=r(79488),m=r(9200),h=r(53086),b=r(13488),f=r(45565),v=r(42605),p=r(61500),g=r(33609),C=r(4779),T=r(86409),S=r(67294);function L(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=S.Children.toArray(e),r=t.find((e=>S.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=S.createElement(S.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r?.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:r}}var E=r(51515),P=r(51689),y=r(58801),w=r(84432),k=r(1871),x=r(79107),A=r(65830),N=r(1943),I=r(60735),D=r(84806),H=r(40626),R=r(82940),V=r(72733),_=r(43266),M=r(92668),F=r(75238),B=r(45067),O=r(72957),z=r(69003),Z=r(74704),G=r(4382),U=r(54828),W=r(78181),j=r(34267),q=r(16550),$=r(39962);const Y="q";function Q(){const e=(0,q.k6)(),{siteConfig:{baseUrl:t}}=(0,$.Z)(),[r,n]=(0,S.useState)("");(0,S.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get(Y)??"";n(e)}),[]);return{searchQuery:r,setSearchQuery:(0,S.useCallback)((t=>{const r=new URLSearchParams(window.location.search);t?r.set(Y,t):r.delete(Y),e.replace({search:r.toString()}),n(t)}),[e]),generateSearchPageLink:(0,S.useCallback)((e=>`${t}search?${Y}=${encodeURIComponent(e)}`),[t])}}var X=r(52144),K=r(85560)},45565:(e,t,r)=>{r.d(t,{M:()=>a,P:()=>o});var n=r(97325);const a=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function o(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[n]=t;return r.localeCompare(n)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},45067:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>l});var n=r(67294);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:r,...a}=e;r>=0?t[r].children.push(a):n.push(a)})),n}function o(e){return(0,n.useMemo)((()=>a(e)),[e])}function s(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[{...e,children:t}]:t}))}function l(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:o}=e;return(0,n.useMemo)((()=>s({toc:a(t),minHeadingLevel:r,maxHeadingLevel:o})),[t,r,o])}},83329:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(33609),s=r(51048),l=r(86010);const i={tabItem:"tabItem_es3Q",schemaTabActive:"schemaTabActive_dWHR",schemaTabsTopSection:"schemaTabsTopSection_sc6Y",schemaTabsListContainer:"schemaTabsListContainer_wmy4",schemaTabLabel:"schemaTabLabel_clV0",schemaTabsContainer:"schemaTabsContainer_HVyG",tabArrow:"tabArrow_zmvw",tabArrowLeft:"tabArrowLeft_RzDG",tabArrowRight:"tabArrowRight_X4Xu",marginVertical:"marginVertical_VWja"},{useScrollPositionBlocker:c,useTabGroupChoice:u}=r(89842);function d(e){const{lazy:t,block:r,defaultValue:s,values:d,groupId:m,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const p=null===s?s:s??b.find((e=>e.props.default))?.props.value??b[0]?.props.value;if(null!==p&&!f.some((e=>e.value===p)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${p}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:C}=u(),[T,S]=(0,a.useState)(p),L=[],{blockElementScrollPositionUntilNextRender:E}=c();if(null!=m){const e=g[m];null!=e&&e!==T&&f.some((t=>t.value===e))&&S(e)}const P=e=>{const t=e.currentTarget,r=L.indexOf(t),n=f[r].value;n!==T&&(E(t),S(n),null!=m&&C(m,n))},y=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=L.indexOf(e.currentTarget)+1;t=L[r]||L[0];break}case"ArrowLeft":{const r=L.indexOf(e.currentTarget)-1;t=L[r]||L[L.length-1];break}}t?.focus()},w=(0,a.useRef)(null),[k,x]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?x(!0):x(!1)}));return e.observe(w.current),()=>{e.disconnect()}}),[]);return a.createElement("div",{className:"tabs__container"},a.createElement("div",{className:i.schemaTabsTopSection},a.createElement("div",{className:i.schemaTabsContainer},k&&a.createElement("button",{className:(0,l.Z)(i.tabArrow,i.tabArrowLeft),onClick:()=>{w.current.scrollLeft-=90}}),a.createElement("div",{ref:w,role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)(i.schemaTabsListContainer,"tabs",{"tabs--block":r},h)},f.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("div",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>L.push(e),onKeyDown:y,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",i.tabItem,o?.className,{[i.schemaTabActive]:T===t})}),a.createElement("span",{className:i.schemaTabLabel},r??t))}))),k&&a.createElement("button",{className:(0,l.Z)(i.tabArrow,i.tabArrowRight),onClick:()=>{w.current.scrollLeft+=90}}))),a.createElement("hr",null),t?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0]??b.filter((e=>e.props.value===p))[0],{className:i.marginVertical}):a.createElement("div",{className:i.marginVertical},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);