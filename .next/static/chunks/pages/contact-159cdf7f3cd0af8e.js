(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{9087:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(7460),a=n(7729),o=n(9097),i=n(2784),s=n(5632),c=n(6715),l=n(2322),d=c.ZP.div.withConfig({displayName:"Navbar__HeaderContainer",componentId:"sc-1h0hytp-0"})(["background:#fff;position:fixed;display:flex;justify-content:space-between;top:0;left:0;width:100%;z-index:99;border-bottom:1px solid rgb(219,219,219);box-shadow:0 0.15rem 1.75rem 0 rgb(31 45 65 / 15%);"]),u=c.ZP.div.withConfig({displayName:"Navbar__NavItemContainer",componentId:"sc-1h0hytp-1"})(["display:flex;align-items:center;gap:5px;padding:24px 28px;font-weight:700;color:#696969;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;&:hover{color:#68b5fb;}.active{color:#0074de;}"]),f=function(e){var t=e.item,n=(0,s.useRouter)(),r=(0,i.useState)(""),a=r[0],c=r[1],d=n.asPath.match(/\/([^\\/]*)/),f=(null===d||void 0===d?void 0:d[0])===t.path;return(0,i.useEffect)((function(){c(f?"active":"")}),[]),(0,l.jsx)(o.default,{href:t.path,children:(0,l.jsx)(u,{children:(0,l.jsxs)("div",{className:"mx-4 ".concat(a),children:[t.text,f&&(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down inline-block h-3 w-3",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})]})})})},p=function(e){var t=e.open,n=e.setOpen,r=e.logoTitle,a=e.items;return(0,l.jsxs)("div",{className:"absolute top-0 left-0 h-screen w-screen bg-white transform ".concat(t?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out filter drop-shadow-md "),children:[(0,l.jsx)("div",{className:"flex items-center justify-center filter drop-shadow-md bg-white h-20",children:(0,l.jsx)(o.default,{href:"/",children:(0,l.jsx)("div",{className:"text-xl font-semibold",children:r})})}),(0,l.jsx)("div",{className:"flex flex-col ml-4",children:a.map((function(e,r){return(0,l.jsx)(o.default,{href:e.path,children:(0,l.jsx)("div",{className:"text-xl font-medium my-4",onClick:function(){return setTimeout((function(){n(!t)}),100)},children:e.text})},"".concat(e.name,"-").concat(r))}))})]})},h=function(e){var t=e.logoTitle,n=e.items,r=(0,i.useState)(!1),a=r[0],s=r[1];return(0,l.jsxs)(d,{className:"flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center",children:[(0,l.jsx)(p,{open:a,setOpen:s,items:n,logoTitle:t}),(0,l.jsx)("div",{className:"w-3/12 flex items-center",children:(0,l.jsx)(o.default,{href:"/",children:(0,l.jsx)("div",{className:"text-2xl font-semibold",children:t})})}),(0,l.jsxs)("div",{className:"w-9/12 flex justify-end items-center",children:[(0,l.jsxs)("div",{className:"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden",onClick:function(){s(!a)},children:[(0,l.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(a?"rotate-45 translate-y-3.5":"")}),(0,l.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ".concat(a?"w-0":"w-full")}),(0,l.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(a?"-rotate-45 -translate-y-3.5":"")})]}),(0,l.jsx)("div",{className:"hidden md:flex",children:n.map((function(e,t){return(0,l.jsx)(f,{item:e},"".concat(e.name,"-").concat(t))}))})]})]})},m=c.ZP.div.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-7cdrvu-0"})(["overflow:hidden;color:rgb(41,41,41);font-size:15px;padding:30px 15px;display:flex;align-items:center;justify-content:center;border-top:1px solid rgb(243,243,243);margin-top:50px;"]),x=function(e){var t=e.copywrite;e.footerNav;return(0,l.jsx)(m,{className:"footer",children:(0,l.jsx)("div",{className:"copywrite",children:(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})})})};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=c.ZP.div.withConfig({displayName:"Layout__MainContent",componentId:"aquhb9-0"})(["flex:1;margin-top:80px;"]),g=c.ZP.div.withConfig({displayName:"Layout__WrapContainer",componentId:"aquhb9-1"})([""]),w=function(e){var t=(new Date).getFullYear(),n={items:[{path:"/",name:"Home",text:"\u9996\u9875"},{path:"/articles",name:"Article",text:"\u535a\u5ba2"},{path:"/about",name:"About",text:"\u5173\u4e8e"},{path:"/contact",name:"Contact",text:"\u8054\u7cfb"}],logoTitle:"\u7693\u7f51"},r={copywrite:"\u676d\u5dde\u7693\u7f51\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8 \xa9 ".concat(t)},o=e.title,i=e.seo,s=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.default,{children:[(0,l.jsx)("title",{children:o}),(0,l.jsx)("link",{type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600",rel:"stylesheet"}),(0,l.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",type:"text/css",rel:"stylesheet"}),i?function(e){var t=[];for(var n in e)t.push((0,l.jsx)("meta",{name:n.split("meta_")[1],content:e[n]},n));return t}(i):null]}),n?(0,l.jsx)(h,j({},n)):"",(0,l.jsx)(b,{className:"main-content",children:(0,l.jsx)(g,{className:"main-wrap",children:s})}),r?(0,l.jsx)(x,j({},r)):""]})}},6427:function(e,t,n){"use strict";n.r(t),n.d(t,{Contact:function(){return s},default:function(){return c}});var r=n(9087),a=n(2322),o={address:"8th Floor, New Viva College, New, Viva College Rd, opposite DMart, Vartak Ward, Virar West, Virar, 401303",phone:2506455391,email:"contact@raweng.com"},i=function(e){var t=e.title,n=void 0===t?"\u8054\u7cfb\u6211\u4eec":t,r=e.contactDetails,i=void 0===r?o:r;return(0,a.jsx)("div",{className:"contactUs",children:(0,a.jsxs)("div",{className:"contactUsPage",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{children:n})}),(0,a.jsxs)("div",{className:"address",children:[(0,a.jsx)("h2",{children:i.address}),(0,a.jsx)("h2",{children:i.phone}),(0,a.jsx)("h2",{className:"emailId",children:(0,a.jsx)("a",{href:"#",children:i.email})})]})]})})};function s(e){return(0,a.jsx)(r.Z,{children:(0,a.jsx)(i,{})})}var c=s},4793:function(e,t,n){"use strict";var r=n(8066);t.default=void 0;var a,o=(a=n(2784))&&a.__esModule?a:{default:a},i=n(2172),s=n(5564),c=n(2104);var l={};function d(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),u=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?i.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),f=u.href,p=u.as,h=e.children,m=e.replace,x=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,g=c.useIntersection({rootMargin:"200px"}),w=r(g,2),y=w[0],N=w[1],_=o.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);o.default.useEffect((function(){var e=N&&n&&i.isLocalURL(f),t="undefined"!==typeof j?j:a&&a.locale,r=l[f+"%"+p+(t?"%"+t:"")];e&&!r&&d(a,f,p,{locale:t})}),[p,f,N,j,n,a]);var C={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}))}(e,a,f,p,m,x,v,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(f)&&d(a,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof j?j:a&&a.locale,k=a&&a.isLocaleDomain&&i.getDomainLocale(p,O,a&&a.locales,a&&a.domainLocales);C.href=k||i.addBasePath(i.addLocale(p,O,a&&a.defaultLocale))}return o.default.cloneElement(t,C)};t.default=u},2104:function(e,t,n){"use strict";var r=n(8066);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),l=a.useState(!1),d=r(l,2),u=d[0],f=d[1],p=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[p,u]};var a=n(2784),o=n(564),i="undefined"!==typeof IntersectionObserver;var s=new Map},9941:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(6427)}])},9097:function(e,t,n){e.exports=n(4793)},5632:function(e,t,n){e.exports=n(5564)}},function(e){e.O(0,[774,888,179],(function(){return t=9941,e(e.s=t);var t}));var t=e.O();_N_E=t}]);