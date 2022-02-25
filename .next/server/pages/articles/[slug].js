"use strict";
(() => {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 6164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9087);
/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1912);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9961);
/* harmony import */ var _mdx_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3279);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_markdown__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__]);
([_markdown__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Article({
  frontMatter,
  html
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "md:container md:mx-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
          className: "text-3xl font-bold hover:text-gray-700 pb-4",
          children: frontMatter.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: ["by ", frontMatter.author.name]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__.MDXRemote, _objectSpread(_objectSpread({}, html), {}, {
          components: _mdx_elements__WEBPACK_IMPORTED_MODULE_5__/* .mdxElements */ .e
        }))]
      })
    })
  });
}
const getStaticProps = async ({
  params
}) => {
  const POSTS_PATH = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(process.cwd(), process.env.articleMarkdownPath); // read markdown file into content and frontmatter

  const articleMarkdownContent = (0,_markdown__WEBPACK_IMPORTED_MODULE_3__/* .getParsedFileContentBySlug */ .t)(params.slug, POSTS_PATH); // generate HTML

  const renderedHTML = await (0,_markdown__WEBPACK_IMPORTED_MODULE_3__/* .renderMarkdown */ .a)(articleMarkdownContent.content);
  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderedHTML
    }
  };
};
const getStaticPaths = async () => {
  const POSTS_PATH = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(process.cwd(), process.env.articleMarkdownPath);
  const paths = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(POSTS_PATH) // Remove file extensions for page paths
  .map(path => path.replace(/\.mdx?$/, '')) // Map the path into the static paths object required by Next.js
  .map(slug => ({
    params: {
      slug
    }
  }));
  return {
    paths,
    fallback: false
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);
});

/***/ }),

/***/ 1912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _lib_markdown__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "a": () => (/* reexport safe */ _lib_markdown__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _lib_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_markdown__WEBPACK_IMPORTED_MODULE_0__]);
_lib_markdown__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


});

/***/ }),

/***/ 5085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getParsedFileContentBySlug),
/* harmony export */   "a": () => (/* binding */ renderMarkdown)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__]);
next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const getParsedFileContentBySlug = (slug, postsPath) => {
  const postFilePath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsPath, `${slug}.mdx`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(postFilePath);
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  return {
    frontMatter: data,
    content
  };
};
const renderMarkdown = markdownContent => {
  return (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(markdownContent || '');
};
});

/***/ }),

/***/ 3279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* reexport */ mdxElements)
});

// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ../../libs/shared/mdx-elements/src/lib/custom-link/custom-link.tsx
const _excluded = ["as", "href"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function CustomLink(_ref) {
  let {
    as,
    href
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    as: as,
    href: href,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread({}, otherProps))
  });
}
/* harmony default export */ const custom_link = (CustomLink);
;// CONCATENATED MODULE: ../../libs/shared/mdx-elements/src/lib/youtube/youtube.tsx
// libs/shared/mdx-elements/src/lib/youtube/youtube.tsx


function Youtube(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "youtube-embed",
    children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
      src: `https://www.youtube.com/embed/${props.uid}`,
      width: "100%",
      height: "500px",
      title: props.title
    })
  });
}
/* harmony default export */ const youtube = ((/* unused pure expression or super */ null && (Youtube)));
;// CONCATENATED MODULE: ../../libs/shared/mdx-elements/src/lib/mdx-elements.tsx
// libs/shared/mdx-elements/src/lib/mdx-elements.ts


const mdxElements = {
  Youtube: Youtube,
  a: custom_link
};
;// CONCATENATED MODULE: ../../libs/shared/mdx-elements/src/index.ts


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

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

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [945,97,87], () => (__webpack_exec__(6164)));
module.exports = __webpack_exports__;

})();