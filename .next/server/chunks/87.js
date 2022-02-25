"use strict";
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 9087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// UNUSED EXPORTS: Layout

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar.tsx






const HeaderContainer = external_styled_components_default().div.withConfig({
  displayName: "Navbar__HeaderContainer",
  componentId: "sc-1h0hytp-0"
})(["background:#fff;position:fixed;display:flex;justify-content:space-between;top:0;left:0;width:100%;z-index:99;border-bottom:1px solid rgb(219,219,219);box-shadow:0 0.15rem 1.75rem 0 rgb(31 45 65 / 15%);"]);
const NavItemContainer = external_styled_components_default().div.withConfig({
  displayName: "Navbar__NavItemContainer",
  componentId: "sc-1h0hytp-1"
})(["display:flex;align-items:center;gap:5px;padding:24px 28px;font-weight:700;color:#696969;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;&:hover{color:#68b5fb;}.active{color:#0074de;}"]);

const NavLink = props => {
  const {
    item
  } = props;
  const router = (0,router_.useRouter)();
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)('');
  const matcher = router.asPath.match(/\/([^\\/]*)/);
  const isCurrent = (matcher === null || matcher === void 0 ? void 0 : matcher[0]) === item.path;
  (0,external_react_.useEffect)(() => {
    setActive(isCurrent ? 'active' : '');
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: item.path,
    children: /*#__PURE__*/jsx_runtime_.jsx(NavItemContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `mx-4 ${active}`,
        children: [item.text, isCurrent && /*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          className: "bi bi-arrow-down inline-block h-3 w-3",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          })
        })]
      })
    })
  });
};

const MobileNav = props => {
  const {
    open,
    setOpen,
    logoTitle,
    items
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md `,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center filter drop-shadow-md bg-white h-20",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xl font-semibold",
          children: logoTitle
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col ml-4",
      children: items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: item.path,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xl font-medium my-4",
          onClick: () => setTimeout(() => {
            setOpen(!open);
          }, 100),
          children: item.text
        })
      }, `${item.name}-${index}`))
    })]
  });
};

const Navbar = props => {
  const {
    logoTitle,
    items
  } = props;
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderContainer, {
    className: "flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(MobileNav, {
      open: open,
      setOpen: setOpen,
      items: items,
      logoTitle: logoTitle
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-3/12 flex items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-2xl font-semibold",
          children: logoTitle
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-9/12 flex justify-end items-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden",
        onClick: () => {
          setOpen(!open);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''}`
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''}`
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "hidden md:flex",
        children: items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          item: item
        }, `${item.name}-${index}`))
      })]
    })]
  });
};
/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Footer.tsx


const FooterContainer = external_styled_components_default().div.withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "sc-7cdrvu-0"
})(["overflow:hidden;color:rgb(41,41,41);font-size:15px;padding:30px 15px;display:flex;align-items:center;justify-content:center;border-top:1px solid rgb(243,243,243);margin-top:50px;"]);
const Footer = props => {
  const {
    copywrite,
    footerNav
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(FooterContainer, {
    className: "footer",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "copywrite",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        dangerouslySetInnerHTML: {
          __html: copywrite
        }
      })
    })
  });
};
/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MainContent = external_styled_components_default().div.withConfig({
  displayName: "Layout__MainContent",
  componentId: "aquhb9-0"
})(["flex:1;margin-top:80px;"]);
const WrapContainer = external_styled_components_default().div.withConfig({
  displayName: "Layout__WrapContainer",
  componentId: "aquhb9-1"
})([""]);
const Layout = props => {
  const year = new Date().getFullYear();
  const header = {
    items: [{
      path: '/',
      name: 'Home',
      text: '首页'
    }, {
      path: '/articles',
      name: 'Article',
      text: '博客'
    }, {
      path: '/about',
      name: 'About',
      text: '关于'
    }, {
      path: '/contact',
      name: 'Contact',
      text: '联系'
    }],
    logoTitle: '皓网'
  };
  const footer = {
    copywrite: `杭州皓网信息技术有限公司 © ${year}`
  };
  const {
    title,
    seo,
    children
  } = props;

  function metaData(tmpSeo) {
    const metaArr = [];

    for (const key in tmpSeo) {
      metaArr.push( /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: key.split('meta_')[1],
        content: tmpSeo[key]
      }, key));
    }

    return metaArr;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
        type: "text/css",
        rel: "stylesheet"
      }), seo ? metaData(seo) : null]
    }), header ? /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, _objectSpread({}, header)) : '', /*#__PURE__*/jsx_runtime_.jsx(MainContent, {
      className: "main-content",
      children: /*#__PURE__*/jsx_runtime_.jsx(WrapContainer, {
        className: "main-wrap",
        children: children
      })
    }), footer ? /*#__PURE__*/jsx_runtime_.jsx(components_Footer, _objectSpread({}, footer)) : '']
  });
};
/* harmony default export */ const components_Layout = (Layout);

/***/ })

};
;