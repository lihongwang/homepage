(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{9087:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(7460),i=n(7729),a=n(9097),s=n(2784),o=n(5632),l=n(6715),c=n(2322),d=l.ZP.div.withConfig({displayName:"Navbar__HeaderContainer",componentId:"sc-1h0hytp-0"})(["background:#fff;position:fixed;display:flex;justify-content:space-between;top:0;left:0;width:100%;z-index:99;border-bottom:1px solid rgb(219,219,219);box-shadow:0 0.15rem 1.75rem 0 rgb(31 45 65 / 15%);"]),f=l.ZP.div.withConfig({displayName:"Navbar__NavItemContainer",componentId:"sc-1h0hytp-1"})(["display:flex;align-items:center;gap:5px;padding:24px 28px;font-weight:700;color:#696969;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;&:hover{color:#68b5fb;}.active{color:#0074de;}"]),u=function(e){var t=e.item,n=(0,o.useRouter)(),r=(0,s.useState)(""),i=r[0],l=r[1],d=n.asPath.match(/\/([^\\/]*)/),u=(null===d||void 0===d?void 0:d[0])===t.path;return(0,s.useEffect)((function(){l(u?"active":"")}),[]),(0,c.jsx)(a.default,{href:t.path,children:(0,c.jsx)(f,{children:(0,c.jsxs)("div",{className:"mx-4 ".concat(i),children:[t.text,u&&(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down inline-block h-3 w-3",viewBox:"0 0 16 16",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})]})})})},h=function(e){var t=e.open,n=e.setOpen,r=e.logoTitle,i=e.items;return(0,c.jsxs)("div",{className:"absolute top-0 left-0 h-screen w-screen bg-white transform ".concat(t?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out filter drop-shadow-md "),children:[(0,c.jsx)("div",{className:"flex items-center justify-center filter drop-shadow-md bg-white h-20",children:(0,c.jsx)(a.default,{href:"/",children:(0,c.jsx)("div",{className:"text-xl font-semibold",children:r})})}),(0,c.jsx)("div",{className:"flex flex-col ml-4",children:i.map((function(e,r){return(0,c.jsx)(a.default,{href:e.path,children:(0,c.jsx)("div",{className:"text-xl font-medium my-4",onClick:function(){return setTimeout((function(){n(!t)}),100)},children:e.text})},"".concat(e.name,"-").concat(r))}))})]})},m=function(e){var t=e.logoTitle,n=e.items,r=(0,s.useState)(!1),i=r[0],o=r[1];return(0,c.jsxs)(d,{className:"flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center",children:[(0,c.jsx)(h,{open:i,setOpen:o,items:n,logoTitle:t}),(0,c.jsx)("div",{className:"w-3/12 flex items-center",children:(0,c.jsx)(a.default,{href:"/",children:(0,c.jsx)("div",{className:"text-2xl font-semibold",children:t})})}),(0,c.jsxs)("div",{className:"w-9/12 flex justify-end items-center",children:[(0,c.jsxs)("div",{className:"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden",onClick:function(){o(!i)},children:[(0,c.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(i?"rotate-45 translate-y-3.5":"")}),(0,c.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ".concat(i?"w-0":"w-full")}),(0,c.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(i?"-rotate-45 -translate-y-3.5":"")})]}),(0,c.jsx)("div",{className:"hidden md:flex",children:n.map((function(e,t){return(0,c.jsx)(u,{item:e},"".concat(e.name,"-").concat(t))}))})]})]})},x=l.ZP.div.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-7cdrvu-0"})(["overflow:hidden;color:rgb(41,41,41);font-size:15px;padding:30px 15px;display:flex;align-items:center;justify-content:center;border-top:1px solid rgb(243,243,243);margin-top:50px;"]),p=function(e){var t=e.copywrite;e.footerNav;return(0,c.jsx)(x,{className:"footer",children:(0,c.jsx)("div",{className:"copywrite",children:(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})})})};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=l.ZP.div.withConfig({displayName:"Layout__MainContent",componentId:"aquhb9-0"})(["flex:1;margin-top:80px;"]),v=l.ZP.div.withConfig({displayName:"Layout__WrapContainer",componentId:"aquhb9-1"})([""]),b=function(e){var t=(new Date).getFullYear(),n={items:[{path:"/",name:"Home",text:"\u9996\u9875"},{path:"/articles",name:"Article",text:"\u535a\u5ba2"},{path:"/about",name:"About",text:"\u5173\u4e8e"},{path:"/contact",name:"Contact",text:"\u8054\u7cfb"}],logoTitle:"\u7693\u7f51"},r={copywrite:"\u676d\u5dde\u7693\u7f51\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8 \xa9 ".concat(t)},a=e.title,s=e.seo,o=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:a}),(0,c.jsx)("link",{type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600",rel:"stylesheet"}),(0,c.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",type:"text/css",rel:"stylesheet"}),s?function(e){var t=[];for(var n in e)t.push((0,c.jsx)("meta",{name:n.split("meta_")[1],content:e[n]},n));return t}(s):null]}),n?(0,c.jsx)(m,w({},n)):"",(0,c.jsx)(g,{className:"main-content",children:(0,c.jsx)(v,{className:"main-wrap",children:o})}),r?(0,c.jsx)(p,w({},r)):""]})}},5929:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o},default:function(){return l}});var r=n(6577),i=n(9097),a=n(9087),s=n(2322),o=!0;function l(e){var t=e.posts;return(0,s.jsx)(a.Z,{children:(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0",children:t.map((function(e){var t=e.slug,n=e.frontmatter;return(0,s.jsx)("div",{className:"border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col",children:(0,s.jsx)(i.default,{href:"/articles/".concat(t),children:(0,s.jsxs)("a",{children:[(0,s.jsx)(r.default,{width:650,height:340,alt:n.title,src:"/".concat(n.socialImage)}),(0,s.jsx)("h1",{className:"p-4",children:n.title})]})})},t)}))})})}},3200:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return n(5929)}])}},function(e){e.O(0,[130,774,888,179],(function(){return t=3200,e(e.s=t);var t}));var t=e.O();_N_E=t}]);