webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ "./components/hero.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.tsx");
/* harmony import */ var _components_content_project_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/content/project-item */ "./components/content/project-item.tsx");
/* harmony import */ var _components_animations_fade_in_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/animations/fade-in-up */ "./components/animations/fade-in-up.tsx");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../consts */ "./consts.ts");

var _jsxFileName = "/Users/jason/Work/trxrg.com/trxrg/pages/index.tsx";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-decoration: none;\n  color: #fff;\n  font-family: 'Fira Mono', monospace;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 45px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var keywords = ["jason werner", "trillcyborg", "trxrg", "react", "react-native", "javascript", "full-stack", "developer"];
var headerItems = [{
  label: 'BLOG',
  to: '/blog'
}];
var swish = '/static/images/swish.png';
var cosmo = '/static/images/cosmo.png';
var cryptofighters = '/static/images/cryptofighters.png';
var projects = [{
  name: 'swish',
  pic: swish,
  link: _consts__WEBPACK_IMPORTED_MODULE_9__["PROJECT_LINKS"].swish
}, {
  name: 'cosmo',
  pic: cosmo,
  link: _consts__WEBPACK_IMPORTED_MODULE_9__["PROJECT_LINKS"].cosmo
}, {
  name: 'cryptofighters',
  pic: cryptofighters,
  link: _consts__WEBPACK_IMPORTED_MODULE_9__["PROJECT_LINKS"].cryptofighters
}];
var ProjectList = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var EmailLink = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject2());

var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "TRXRG | ".concat(_consts__WEBPACK_IMPORTED_MODULE_9__["SITE_METADATA"].title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "keywords",
    content: keywords.join(", "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://github.com/trillcyborg",
    rel: "me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    items: headerItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_4__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_animations_fade_in_up__WEBPACK_IMPORTED_MODULE_8__["FadeInUp"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, projects.map(function (_ref) {
    var name = _ref.name,
        pic = _ref.pic,
        link = _ref.link;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_content_project_item__WEBPACK_IMPORTED_MODULE_7__["ProjectItem"], {
      key: name,
      pic: pic,
      link: link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      textAlign: 'center',
      marginBottom: 75
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmailLink, {
    href: "mailto://".concat(_consts__WEBPACK_IMPORTED_MODULE_9__["CONTACT"].email),
    rel: "me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, _consts__WEBPACK_IMPORTED_MODULE_9__["CONTACT"].email)))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.f62174a51e2270fa7361.hot-update.js.map