"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[84813],{84934:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(23230),n=a(13555),i=a(74848);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.jsx)(n.A,{permalink:a,title:(0,i.jsx)(s.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(n.A,{permalink:r,title:(0,i.jsx)(s.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},64331:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(89101),n=a(8406),i=a(74848);function r(e){let{items:t,component:a=n.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.in,{content:t,children:(0,i.jsx)(a,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},98798:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(96540);var s=a(18215),n=a(23230),i=a(17153),r=a(18630),l=a(41532),o=a(14783),g=a(6953),c=a(84934),d=a(51210),u=a(64331),h=a(48811),p=a(85225),m=a(74848);function x(e){let{tag:t}=e;const a=(0,l.ZD)(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.be,{title:a,description:t.description}),(0,m.jsx)(d.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:a,sidebar:s,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,m.jsxs)(g.A,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.default,{as:"h1",children:r}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.default,{href:t.allTagsPath,children:(0,m.jsx)(n.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:a}),(0,m.jsx)(c.A,{metadata:i})]})}function f(e){return(0,m.jsxs)(i.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,m.jsx)(x,{...e}),(0,m.jsx)(b,{...e})]})}},48811:(e,t,a)=>{a.d(t,{A:()=>g});a(96540);var s=a(18215),n=a(96907),i=a(18630),r=a(79489),l=a(74848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(n.Rc,{}),className:(0,s.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(n.Uh,{})})}function g(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.AE,{}),(0,l.jsx)(o,{...e})]})}},41532:(e,t,a)=>{a.d(t,{ZD:()=>l,np:()=>c,uz:()=>g,wI:()=>o});a(96540);var s=a(23230),n=a(57824),i=a(74848);function r(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,s.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=r();return(0,s.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=r();return(0,s.translate)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const g=()=>(0,s.translate)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,i.jsx)(s.default,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);