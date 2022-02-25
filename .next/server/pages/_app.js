"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./hocs/withScrollTop.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/display-name */





const ScrollTopContainer = external_styled_components_default().div.withConfig({
  displayName: "withScrollTop__ScrollTopContainer",
  componentId: "hibrlr-0"
})(["position:fixed;bottom:30px;right:20px;cursor:pointer;transition:opacity 0.2s linear 0s,visibility;opacity:1;visibility:visible;cursor:pointer;z-index:9999;div{width:40px;height:40px;border-radius:50%;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:20px;background-color:#0c74de;color:rgb(255,255,255);box-shadow:rgb(0 0 0 / 25%) 0px 5px 15px;transition:all 0.15s ease-in-out 0s;}"]);
const ScrollTopContainer1 = external_styled_components_default().div.withConfig({
  displayName: "withScrollTop__ScrollTopContainer1",
  componentId: "hibrlr-1"
})(["position:fixed;bottom:30px;right:25px;height:36px;width:36px;display:flex;justify-content:center;align-items:center;font-size:20px;cursor:pointer;z-index:10;background-color:#fff;border-radius:10px;border:1px solid #eaeaea;color:#666;transition:all 0.4s ease;box-shadow:0 2px 4px 0 rgb(17 17 18 / 10%);&:before{font-family:trx_addons_icons;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:0.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:0.2em;transition:all 0.3s ease;content:'e85a';}"]);

const withScrollTop = Components => props => {
  const {
    0: showButton,
    1: setShowButton
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const el = document.getElementById('__next');
    el.addEventListener('scroll', () => {
      if (el.scrollTop > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    return () => {
      el.removeEventListener('scroll', () => null);
    };
  }, []); // This function will scroll the window to the top

  const scrollToTop = () => {
    const el = document.getElementById('__next');
    el.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling

    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Components, _objectSpread({}, props)), showButton && /*#__PURE__*/jsx_runtime_.jsx(ScrollTopContainer, {
      onClick: scrollToTop,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0",
          viewBox: "0 0 512 512",
          height: "1em",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z"
          })
        })
      })
    })]
  });
};

/* harmony default export */ const hocs_withScrollTop = (withScrollTop);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MainContainer = external_styled_components_default().main.withConfig({
  displayName: "_app__MainContainer",
  componentId: "gx284s-0"
})(["display:flex;flex-direction:column;height:100%;width:100%;margin:0;padding:0;"]);

function CustomApp({
  Component,
  pageProps
}) {
  const Main = hocs_withScrollTop(MainContainer);
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
    defaultTheme: "light",
    attribute: "class",
    children: /*#__PURE__*/jsx_runtime_.jsx(Main, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (CustomApp);

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2434));
module.exports = __webpack_exports__;

})();