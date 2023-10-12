(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[5980],{73255:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/modal.3c7a482.382.png 382w",images:[{path:a.p+"assets/ideal-img/modal.3c7a482.382.png",width:382,height:124}],src:a.p+"assets/ideal-img/modal.3c7a482.382.png",toString:function(){return a.p+"assets/ideal-img/modal.3c7a482.382.png"},placeholder:void 0,width:382,height:124},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAX0lEQVQImRXEWw5AMBAAwN5GkCxRa7ckom2UCvVI/+r+5xDzMWLdY3jSGV/tDkkTKou9xd60ypTNILQLs7+1262/nX/sco1mk0ojTRJY1DjmQEXFOfB/xQVQBtQBp5o/LkoVg+RJcM8AAAAASUVORK5CYII="}},18679:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},34259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),o=a(51048),s=a(33609),i=a(1943),d=a(72957);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:m,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,i.U)(),[A,N]=(0,l.useState)(v),y=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=m){const e=f[m];null!=e&&e!==A&&h.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,a=y.indexOf(t),n=h[a].value;n!==A&&(x(t),N(n),null!=m&&w(m,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;t=y[a]??y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;t=y[a]??y[y.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},b)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>y.push(e),onKeyDown:C,onClick:T},o,{className:(0,r.Z)("tabs__item",u,o?.className,{"tabs__item--active":A===t})}),a??t)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,o.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}},72970:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>b});var n=a(87462),l=(a(67294),a(3905)),r=a(34259),o=a(18679),s=a(15944),i=a(73255),d=a.n(i);const c={sidebar_position:9},u="Modal",p={unversionedId:"web/api/components/modal",id:"web/api/components/modal",title:"Modal",description:"Modal allows the user to create a page infront as well as deactivates all other contents.",source:"@site/docs/web/api/components/10.modal.mdx",sourceDirName:"web/api/components",slug:"/web/api/components/modal",permalink:"/ar2-docs/docs/web/api/components/modal",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/api/components/10.modal.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"web",previous:{title:"Button",permalink:"/ar2-docs/docs/web/api/components/button"},next:{title:"Link",permalink:"/ar2-docs/docs/web/api/components/link"}},m={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameter",id:"parameter",level:2}],g={toc:b};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modal"},"Modal"),(0,l.kt)("p",null,"Modal allows the user to create a page infront as well as deactivates all other contents."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{class:"",label:"Preview",value:"preview",mdxType:"TabItem"},(0,l.kt)("div",{class:"bg-red-200"},(0,l.kt)(s.Z,{img:d(),mdxType:"Image"}))),(0,l.kt)(o.Z,{label:"Svelte",value:"html",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sv",metastring:'title="MyPage/+page.svelte"',title:'"MyPage/+page.svelte"'},'<script lang="ts">\n    import Modal from \'$lib/components/basic/Modal/index.svelte\'\n    import Button from \'$lib/components/basic/Button/index.svelte\'\n<\/script>\n\n<div class="p-4 flex gap-2">\n    <Modal widthClass="w-96" heightClass="h-32">\n    \x3c!-- Insert content here --\x3e\n        <div\n            class="w-full h-full flex flex-col p-2 rounded-lg gap-2 bg-surface-4 dark:bg-surface-dark-4 border border-outline dark:border-outline-dark">\n            <p class="font-medium">Congratulations</p>\n            <p class="font-light text-sm">\n                You\'ve been selected for a chance to get one year of subscription to use Wikipedia for free!\n            </p>\n            <div class="w-full flex justify-end">\n                <Button\n                    setClass="rounded uppercase text-sm px-2 border border-outline dark:border-outline-dark bg-error-container dark:bg-error-container-dark "\n                    >Ok</Button>\n            </div>\n        </div>\n    </Modal>\n</div>\n')))),(0,l.kt)("h2",{id:"parameter"},"Parameter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"widthClass")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the width class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heightClass")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the height class")))))}h.isMDXComponent=!0}}]);