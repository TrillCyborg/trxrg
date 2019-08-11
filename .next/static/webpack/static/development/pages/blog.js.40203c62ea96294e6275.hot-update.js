webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/content/blog-item.tsx":
/*!******************************************!*\
  !*** ./components/content/blog-item.tsx ***!
  \******************************************/
/*! exports provided: BlogItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItem", function() { return BlogItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/jason/Work/trxrg.com/trxrg/components/content/blog-item.tsx";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: 'Fira Mono';\n  opacity: 0.6;\n  font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SubText = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Tags = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(SubText)(_templateObject2(), styled_system__WEBPACK_IMPORTED_MODULE_4__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_4__["paddingRight"]);
var CardWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var BlogItem = function BlogItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 3 / 4, 3 / 4, 1 / 2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: props.path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rebass__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    p: 3,
    m: 3,
    borderRadius: 8,
    sx: {
      boxShadow: "0 0 16px rgba(0, 0, 0, .25)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    px: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", {
    style: {
      fontFamily: 'Maven Pro'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
    style: {
      fontFamily: 'Anonymous Pro'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, props.summary), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tags, {
    maxWidth: ['50%', '60%'],
    pr: '7px',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, props.tags.map(function (tag) {
    return "#".concat(tag, " ");
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SubText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(props.publishedAt, 'YYYY/MM/DD').format('MM/DD/YYYY'))))))));
};

/***/ })

})
//# sourceMappingURL=blog.js.40203c62ea96294e6275.hot-update.js.map