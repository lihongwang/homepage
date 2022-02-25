(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9087:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(7460),i=n(7729),r=n(9097),o=n(2784),s=n(5632),l=n(6715),c=n(2322),d=l.ZP.div.withConfig({displayName:"Navbar__HeaderContainer",componentId:"sc-1h0hytp-0"})(["background:#fff;position:fixed;display:flex;justify-content:space-between;top:0;left:0;width:100%;z-index:99;border-bottom:1px solid rgb(219,219,219);box-shadow:0 0.15rem 1.75rem 0 rgb(31 45 65 / 15%);"]),u=l.ZP.div.withConfig({displayName:"Navbar__NavItemContainer",componentId:"sc-1h0hytp-1"})(["display:flex;align-items:center;gap:5px;padding:24px 28px;font-weight:700;color:#696969;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;&:hover{color:#68b5fb;}.active{color:#0074de;}"]),f=function(e){var t=e.item,n=(0,s.useRouter)(),a=(0,o.useState)(""),i=a[0],l=a[1],d=n.asPath.match(/\/([^\\/]*)/),f=(null===d||void 0===d?void 0:d[0])===t.path;return(0,o.useEffect)((function(){l(f?"active":"")}),[]),(0,c.jsx)(r.default,{href:t.path,children:(0,c.jsx)(u,{children:(0,c.jsxs)("div",{className:"mx-4 ".concat(i),children:[t.text,f&&(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down inline-block h-3 w-3",viewBox:"0 0 16 16",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})]})})})},p=function(e){var t=e.open,n=e.setOpen,a=e.logoTitle,i=e.items;return(0,c.jsxs)("div",{className:"absolute top-0 left-0 h-screen w-screen bg-white transform ".concat(t?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out filter drop-shadow-md "),children:[(0,c.jsx)("div",{className:"flex items-center justify-center filter drop-shadow-md bg-white h-20",children:(0,c.jsx)(r.default,{href:"/",children:(0,c.jsx)("div",{className:"text-xl font-semibold",children:a})})}),(0,c.jsx)("div",{className:"flex flex-col ml-4",children:i.map((function(e,a){return(0,c.jsx)(r.default,{href:e.path,children:(0,c.jsx)("div",{className:"text-xl font-medium my-4",onClick:function(){return setTimeout((function(){n(!t)}),100)},children:e.text})},"".concat(e.name,"-").concat(a))}))})]})},m=function(e){var t=e.logoTitle,n=e.items,a=(0,o.useState)(!1),i=a[0],s=a[1];return(0,c.jsxs)(d,{className:"flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center",children:[(0,c.jsx)(p,{open:i,setOpen:s,items:n,logoTitle:t}),(0,c.jsx)("div",{className:"w-3/12 flex items-center",children:(0,c.jsx)(r.default,{href:"/",children:(0,c.jsx)("div",{className:"text-2xl font-semibold",children:t})})}),(0,c.jsxs)("div",{className:"w-9/12 flex justify-end items-center",children:[(0,c.jsxs)("div",{className:"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden",onClick:function(){s(!i)},children:[(0,c.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(i?"rotate-45 translate-y-3.5":"")}),(0,c.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ".concat(i?"w-0":"w-full")}),(0,c.jsx)("span",{className:"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ".concat(i?"-rotate-45 -translate-y-3.5":"")})]}),(0,c.jsx)("div",{className:"hidden md:flex",children:n.map((function(e,t){return(0,c.jsx)(f,{item:e},"".concat(e.name,"-").concat(t))}))})]})]})},h=l.ZP.div.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-7cdrvu-0"})(["overflow:hidden;color:rgb(41,41,41);font-size:15px;padding:30px 15px;display:flex;align-items:center;justify-content:center;border-top:1px solid rgb(243,243,243);margin-top:50px;"]),b=function(e){var t=e.copywrite;e.footerNav;return(0,c.jsx)(h,{className:"footer",children:(0,c.jsx)("div",{className:"copywrite",children:(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})})})};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=l.ZP.div.withConfig({displayName:"Layout__MainContent",componentId:"aquhb9-0"})(["flex:1;margin-top:80px;"]),j=l.ZP.div.withConfig({displayName:"Layout__WrapContainer",componentId:"aquhb9-1"})([""]),w=function(e){var t=(new Date).getFullYear(),n={items:[{path:"/",name:"Home",text:"\u9996\u9875"},{path:"/articles",name:"Article",text:"\u535a\u5ba2"},{path:"/about",name:"About",text:"\u5173\u4e8e"},{path:"/contact",name:"Contact",text:"\u8054\u7cfb"}],logoTitle:"\u7693\u7f51"},a={copywrite:"\u676d\u5dde\u7693\u7f51\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8 \xa9 ".concat(t)},r=e.title,o=e.seo,s=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:r}),(0,c.jsx)("link",{type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600",rel:"stylesheet"}),(0,c.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",type:"text/css",rel:"stylesheet"}),o?function(e){var t=[];for(var n in e)t.push((0,c.jsx)("meta",{name:n.split("meta_")[1],content:e[n]},n));return t}(o):null]}),n?(0,c.jsx)(m,g({},n)):"",(0,c.jsx)(x,{className:"main-content",children:(0,c.jsx)(j,{className:"main-wrap",children:s})}),a?(0,c.jsx)(b,g({},a)):""]})}},7166:function(e,t,n){"use strict";n.r(t),n.d(t,{About:function(){return l},default:function(){return c}});var a=n(6715),i=n(9087),r=n(2322),o=[{title:"Careers",_metadata:{uid:"cs7cb6100633c8efc5"},description:"It takes a great team to achieve great results. it is our commitment to bring out the best in every team member and let every idea be heard. This is how we tackle challenging projects and deliver products we can all be proud of.",image:{uid:"blt9403bdc556379251",created_at:"2020-12-09T05:55:15.683Z",updated_at:"2020-12-09T05:55:15.683Z",content_type:"image/jpeg",file_size:"37861",tags:[],filename:"career.jpg",url:"https://images.contentstack.io/v3/assets/blt7db50cd7978895ca/blt9403bdc556379251/5fd066c33cac1a0b1bb73921/career.jpg",ACL:[],is_dir:!1,_version:1,title:"about.PNG",description:"",publish_details:[{environment:"bltbf6778af33222a17",locale:"en-us",time:"2020-12-09T05:55:17.084Z",version:1},{environment:"bltf6c0a7a81a1aa7b8",locale:"en-us",time:"2020-12-09T05:55:17.084Z",version:1}]},cta:{title:"",href:"#"}},{title:"News",_metadata:{uid:"cs2cff46bd98bf327e"},description:"We listen to our clients and develop a customized Website and Software/Application that will enhance your overall corporate image Buisness.",image:{uid:"blt6b7cbba6d918ed98",created_at:"2020-12-09T05:55:17.696Z",updated_at:"2020-12-09T05:55:17.696Z",content_type:"image/jpeg",file_size:"7027",tags:[],filename:"news.jpeg",url:"https://images.contentstack.io/v3/assets/blt7db50cd7978895ca/blt6b7cbba6d918ed98/5fd066c55fa8a51a6fb5bdbd/news.jpeg",ACL:[],is_dir:!1,parent_uid:null,_version:1,title:"about.PNG",description:"",publish_details:[{environment:"bltbf6778af33222a17",locale:"en-us",time:"2020-12-09T05:55:20.631Z",version:1},{environment:"bltf6c0a7a81a1aa7b8",locale:"en-us",time:"2020-12-09T05:55:20.631Z",version:1}]},cta:{title:"",href:"#"}},{title:"Partner Network",_metadata:{uid:"cs2bf8ac5b72bcf316"},description:"Partnership Program is designed to help businesses take advantage of our technical excellence and multi-year domain\\nexpertise.",image:{uid:"blta62f48f73cc8945b",created_at:"2020-12-09T05:54:54.163Z",updated_at:"2020-12-09T05:54:54.163Z",content_type:"image/jpeg",file_size:"70875",tags:[],filename:"partner_network.jpg",url:"https://images.contentstack.io/v3/assets/blt7db50cd7978895ca/blta62f48f73cc8945b/5fd066ae2600d41061073174/partner_network.jpg",ACL:[],is_dir:!1,parent_uid:null,_version:1,title:"partner_network.jpg",publish_details:[{environment:"bltbf6778af33222a17",locale:"en-us",time:"2020-12-09T05:54:55.077Z",version:1},{environment:"bltf6c0a7a81a1aa7b8",locale:"en-us",time:"2020-12-09T05:54:55.077Z",version:1}]},cta:{title:"",href:"#"}},{title:"Blog",_metadata:{uid:"cs9653c1f9665b52cf"},description:"We specialize in everything 'digital' \u2013 from Website designing, Logo designing to Content Management System,Copy Writing, Custom Software Development, SEO, e-commerce sites and many more.",image:{uid:"blt1f41d3b24b97494f",created_at:"2020-12-09T05:55:00.604Z",updated_at:"2020-12-09T05:55:00.604Z",content_type:"image/png",file_size:"64021",tags:[],filename:"blogs.png",url:"https://images.contentstack.io/v3/assets/blt7db50cd7978895ca/blt1f41d3b24b97494f/5fd066b428ec7250b20cf4af/blogs.png",ACL:[],is_dir:!1,parent_uid:null,_version:1,title:"blogs.png",publish_details:[{environment:"bltbf6778af33222a17",locale:"en-us",time:"2020-12-09T05:55:00.410Z",version:1},{environment:"bltf6c0a7a81a1aa7b8",locale:"en-us",time:"2020-12-09T05:55:00.410Z",version:1}]},cta:{title:"Visit Now",href:"/blog"}}],s=function(e){var t=e.title,n=void 0===t?"\u5173\u4e8e\u6211\u4eec":t,a=e.aboutContent,i=(void 0===a?o:a).map((function(e,t){return(0,r.jsxs)("div",{className:"thumbnailBx clearfix",children:[(0,r.jsx)("div",{className:"aboutContentLeft",children:(0,r.jsx)("img",{src:e.image.url,alt:e.image.filename})}),(0,r.jsx)("ul",{className:"aboutContentRight",children:(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("p",{children:e.description}),(0,r.jsx)("a",{href:e.cta.href,className:"ctaLink",children:e.cta.title})]})})]},t)}));return(0,r.jsxs)("div",{className:"aboutPage",children:[(0,r.jsx)("div",{className:"center head",children:(0,r.jsx)("h1",{children:n})}),(0,r.jsxs)("div",{className:"thumbnailContent",children:[(0,r.jsx)("div",{className:"",children:i}),(0,r.jsx)("div",{className:"clearfix"})]})]})};a.ZP.div.withConfig({displayName:"about__StyledAbout",componentId:"sc-1s0u3ux-0"})(["color:pink;"]);function l(e){return(0,r.jsx)(i.Z,{children:(0,r.jsx)(s,{})})}var c=l},4793:function(e,t,n){"use strict";var a=n(8066);t.default=void 0;var i,r=(i=n(2784))&&i.__esModule?i:{default:i},o=n(2172),s=n(5564),l=n(2104);var c={};function d(e,t,n,a){if(e&&o.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,i=s.useRouter(),u=r.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),n=a(t,2),r=n[0],s=n[1];return{href:r,as:e.as?o.resolveHref(i,e.as):s||r}}),[i,e.href,e.as]),f=u.href,p=u.as,m=e.children,h=e.replace,b=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=r.default.createElement("a",null,m));var x=(t=r.default.Children.only(m))&&"object"===typeof t&&t.ref,j=l.useIntersection({rootMargin:"200px"}),w=a(j,2),y=w[0],_=w[1],N=r.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);r.default.useEffect((function(){var e=_&&n&&o.isLocalURL(f),t="undefined"!==typeof g?g:i&&i.locale,a=c[f+"%"+p+(t?"%"+t:"")];e&&!a&&d(i,f,p,{locale:t})}),[p,f,_,g,n,i]);var C={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,i,r,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&a.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](n,a,{shallow:r,locale:l,scroll:s}))}(e,i,f,p,h,b,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(f)&&d(i,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:i&&i.locale,O=i&&i.isLocaleDomain&&o.getDomainLocale(p,k,i&&i.locales,i&&i.domainLocales);C.href=O||o.addBasePath(o.addLocale(p,k,i&&i.defaultLocale))}return r.default.cloneElement(t,C)};t.default=u},2104:function(e,t,n){"use strict";var a=n(8066);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=i.useRef(),c=i.useState(!1),d=a(c,2),u=d[0],f=d[1],p=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:a}),n}(n),i=a.id,r=a.observer,o=a.elements;return o.set(e,t),r.observe(e),function(){o.delete(e),r.unobserve(e),0===o.size&&(r.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!o&&!u){var e=r.requestIdleCallback((function(){return f(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[u]),[p,u]};var i=n(2784),r=n(564),o="undefined"!==typeof IntersectionObserver;var s=new Map},9107:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(7166)}])},9097:function(e,t,n){e.exports=n(4793)},5632:function(e,t,n){e.exports=n(5564)}},function(e){e.O(0,[774,888,179],(function(){return t=9107,e(e.s=t);var t}));var t=e.O();_N_E=t}]);