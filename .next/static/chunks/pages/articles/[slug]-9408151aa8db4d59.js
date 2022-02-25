(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{9087:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(7460),o=n(7729),a=n(9097),c=n(2784),i=n(5632),s=n(6715),l=n(2322),u=s.ZP.div.withConfig({displayName:"Navbar__HeaderContainer",componentId:"sc-1h0hytp-0"})(["background:#fff;position:fixed;display:flex;justify-content:space-between;top:0;left:0;width:100%;z-index:99;border-bottom:1px solid rgb(219,219,219);box-shadow:0 0.15rem 1.75rem 0 rgb(31 45 65 / 15%);"]),f=s.ZP.div.withConfig({displayName:"Navbar__NavItemContainer",componentId:"sc-1h0hytp-1"})(["display:flex;align-items:center;gap:5px;padding:24px 28px;font-weight:700;color:#696969;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;&:hover{color:#68b5fb;}.active{color:#0074de;}"]),d=function(e){var t=e.item,n=(0,i.useRouter)(),r=(0,c.useState)(""),o=r[0],s=r[1],u=n.asPath.match(/\/([^\\/]*)/),d=(null===u||void 0===u?void 0:u[0])===t.path;return(0,c.useEffect)((function(){s(d?"active":"")}),[]),(0,l.jsx)(a.default,{href:t.path,children:(0,l.jsx)(f,{children:(0,l.jsxs)("div",{className:"mx-4 ".concat(o),children:[t.text,d&&(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down inline-block h-3 w-3",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})]})})})},p=function(e){var t=e.open,n=e.setOpen,r=e.logoTitle,o=e.items;return(0,l.jsxs)("div",{className:"absolute top-0 left-0 h-screen w-screen bg-white transform ".concat(t?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out filter drop-shadow-md "),children:[(0,l.jsx)("div",{className:"flex items-center justify-center filter drop-shadow-md bg-white h-20",children:(0,l.jsx)(a.default,{href:"/",children:(0,l.jsx)("div",{className:"text-xl font-semibold",children:r})})}),(0,l.jsx)("div",{className:"flex flex-col ml-4",children:o.map((function(e,r){return(0,l.jsx)(a.default,{href:e.path,children:(0,l.jsx)("div",{className:"text-xl font-medium my-4",onClick:function(){return setTimeout((function(){n(!t)}),100)},children:e.text})},"".concat(e.name,"-").concat(r))}))})]})},m=function(e){var t=e.logoTitle,n=e.items,r=(0,c.useState)(!1),o=r[0],i=r[1];return(0,l.jsxs)(u,{className:"flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center",children:[(0,l.jsx)(p,{open:o,setOpen:i,items:n,logoTitle:t}),(0,l.jsx)("div",{className:"w-3/12 flex items-center",children:(0,l.jsx)(a.default,{href:"/",children:(0,l.jsx)("div",{className:"text-2xl font-semibold",children:t})})}),(0,l.jsxs)("div",{className:"w-9/12 flex justify-end items-center",children:[(0,l.jsxs)("div",{className:"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden",onClick:function(){i(!o)},children:[(0,l.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(o?"rotate-45 translate-y-3.5":"")}),(0,l.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ".concat(o?"w-0":"w-full")}),(0,l.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(o?"-rotate-45 -translate-y-3.5":"")})]}),(0,l.jsx)("div",{className:"hidden md:flex",children:n.map((function(e,t){return(0,l.jsx)(d,{item:e},"".concat(e.name,"-").concat(t))}))})]})]})},h=s.ZP.div.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-7cdrvu-0"})(["overflow:hidden;color:rgb(41,41,41);font-size:15px;padding:30px 15px;display:flex;align-items:center;justify-content:center;border-top:1px solid rgb(243,243,243);margin-top:50px;"]),b=function(e){var t=e.copywrite;e.footerNav;return(0,l.jsx)(h,{className:"footer",children:(0,l.jsx)("div",{className:"copywrite",children:(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})})})};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=s.ZP.div.withConfig({displayName:"Layout__MainContent",componentId:"aquhb9-0"})(["flex:1;margin-top:80px;"]),j=s.ZP.div.withConfig({displayName:"Layout__WrapContainer",componentId:"aquhb9-1"})([""]),w=function(e){var t=(new Date).getFullYear(),n={items:[{path:"/",name:"Home",text:"\u9996\u9875"},{path:"/articles",name:"Article",text:"\u535a\u5ba2"},{path:"/about",name:"About",text:"\u5173\u4e8e"},{path:"/contact",name:"Contact",text:"\u8054\u7cfb"}],logoTitle:"\u7693\u7f51"},r={copywrite:"\u676d\u5dde\u7693\u7f51\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8 \xa9 ".concat(t)},a=e.title,c=e.seo,i=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.default,{children:[(0,l.jsx)("title",{children:a}),(0,l.jsx)("link",{type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600",rel:"stylesheet"}),(0,l.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",type:"text/css",rel:"stylesheet"}),c?function(e){var t=[];for(var n in e)t.push((0,l.jsx)("meta",{name:n.split("meta_")[1],content:e[n]},n));return t}(c):null]}),n?(0,l.jsx)(m,x({},n)):"",(0,l.jsx)(y,{className:"main-content",children:(0,l.jsx)(j,{className:"main-wrap",children:i})}),r?(0,l.jsx)(b,x({},r)):""]})}},3185:function(e,t,n){"use strict";n.r(t),n.d(t,{Article:function(){return P},__N_SSG:function(){return N},default:function(){return C}});var r={};n.r(r),n.d(r,{MDXContext:function(){return l},MDXProvider:function(){return p},useMDXComponents:function(){return f},withMDXComponents:function(){return u}});var o=n(7460),a=n(9087),c=n(2784),i=n(2322),s=n.t(i,2);const l=c.createContext({});function u(e){return function(t){const n=f(t.components);return c.createElement(e,{...t,allComponents:n})}}function f(e){const t=c.useContext(l);return c.useMemo((()=>"function"===typeof e?e(t):{...t,...e}),[t,e])}const d={};function p({components:e,children:t,disableParentContext:n}){let r=f(e);return n&&(r=e||d),c.createElement(l.Provider,{value:r},t)}function m({compiledSource:e,frontmatter:t,scope:n,components:o={},lazy:a}){const[i,l]=(0,c.useState)(!a||"undefined"===typeof window);(0,c.useEffect)((()=>{if(a){const e=window.requestIdleCallback((()=>{l(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const u=(0,c.useMemo)((()=>{const o=Object.assign({opts:{...r,...s}},{frontmatter:t},n),a=Object.keys(o),c=Object.values(o),i=Reflect.construct(Function,a.concat(`${e}`));return i.apply(i,c).default}),[n,e]);if(!i)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=c.createElement(p,{components:o},c.createElement(u,null));return a?c.createElement("div",null,f):f}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var b=n(9097),v=["as","href"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){return(0,i.jsx)("div",{className:"youtube-embed",children:(0,i.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e.uid),width:"100%",height:"500px",title:e.title})})}var w={Youtube:j,a:function(e){var t=e.as,n=e.href,r=h(e,v);return(0,i.jsx)(b.default,{as:t,href:n,children:(0,i.jsx)("a",y({},r))})}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=!0;function P(e){var t=e.frontMatter,n=e.html;return(0,i.jsx)(a.Z,{children:(0,i.jsx)("div",{className:"md:container md:mx-auto",children:(0,i.jsxs)("article",{children:[(0,i.jsx)("h1",{className:"text-3xl font-bold hover:text-gray-700 pb-4",children:t.title}),(0,i.jsxs)("div",{children:["by ",t.author.name]}),(0,i.jsx)("hr",{}),(0,i.jsx)(m,O(O({},n),{},{components:w}))]})})})}var C=P},4793:function(e,t,n){"use strict";var r=n(8066);t.default=void 0;var o,a=(o=n(2784))&&o.__esModule?o:{default:o},c=n(2172),i=n(5564),s=n(2104);var l={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,b=e.shallow,v=e.scroll,x=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var y=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,j=s.useIntersection({rootMargin:"200px"}),w=r(j,2),g=w[0],O=w[1],N=a.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);a.default.useEffect((function(){var e=O&&n&&c.isLocalURL(d),t="undefined"!==typeof x?x:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,O,x,n,o]);var P={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}))}(e,o,d,p,h,b,v,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof x?x:o&&o.locale,_=o&&o.isLocaleDomain&&c.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);P.href=_||c.addBasePath(c.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(t,P)};t.default=f},2104:function(e,t,n){"use strict";var r=n(8066);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(2784),a=n(564),c="undefined"!==typeof IntersectionObserver;var i=new Map},2225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[slug]",function(){return n(3185)}])},9097:function(e,t,n){e.exports=n(4793)},5632:function(e,t,n){e.exports=n(5564)}},function(e){e.O(0,[774,888,179],(function(){return t=2225,e(e.s=t);var t}));var t=e.O();_N_E=t}]);