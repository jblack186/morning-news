webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/jamie/Documents/morning-news/pages/index.js\";\n\n\n\n\n\nfunction Index(_ref) {\n  var news = _ref.news;\n  var image = news.docs.map(function (art) {\n    if (art.multimedia[0]) {\n      return art.multimedia[0].url;\n    }\n  });\n  var text = news.docs.map(function (art) {\n    if (art.article) {\n      return art.article.url;\n    }\n  });\n  console.log('news', news);\n  console.log('img', image[1]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2618736584\" + \" \" + 'home-container',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n        className: \"jsx-2618736584\" + \" \" + 'top-container',\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2618736584\" + \" \" + 'editors-part',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            className: \"jsx-2618736584\" + \" \" + 'editors',\n            children: \"Editor's Pick\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2618736584\",\n            children: \"hoewienw\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2618736584\" + \" \" + 'right-top-article',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2618736584\",\n            children: \"img\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2618736584\" + \" \" + 'top-bottom-articles',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-2618736584\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[0]),\n                alt: \"top-article\",\n                className: \"jsx-2618736584\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 13\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-2618736584\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 3\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-2618736584\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[1]),\n                alt: \"top-article\",\n                className: \"jsx-2618736584\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 11\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        id: \"2618736584\",\n        children: \".top-image.jsx-2618736584{width:100px;}.home-container.jsx-2618736584{min-height:90vh;height:100%;background-color:whitesmoke;}.top-container.jsx-2618736584{margin:0 auto;padding-top:100px;width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1000px){.top-container.jsx-2618736584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.editors-part.jsx-2618736584{width:40%;height:500px;border:solid black 1px;}.editors.jsx-2618736584{margin:0;}.right-top-article.jsx-2618736584{width:60%;height:500px;border:solid black 1px;}.top-bottom-articles.jsx-2618736584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEZ0IsQUFJbUIsQUFHTSxBQU1GLEFBVUMsQUFPTCxBQU9ELEFBSUMsQUFPRyxTQVZmLENBUGUsQUFXQSxFQXJDakIsRUFTc0IsRUFOTixPQXdCVyxBQVdBLEtBbENLLElBTWxCLFVBQ0csSUFrQmYsQUFXQSxVQW5DQSxrQkFjMEIsQUF5QjFCLDBDQWhDZ0Msb0NBUTlCLCtFQU5GIiwiZmlsZSI6Ii9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe25ld3N9KSB7XG5cbiBjb25zdCBpbWFnZSA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gICAgIGlmIChhcnQubXVsdGltZWRpYVswXSkge1xuICAgICAgIFxuICAgICAgcmV0dXJuIGFydC5tdWx0aW1lZGlhWzBdLnVybCB9XG5cbiAgIFxufSlcblxuY29uc3QgdGV4dCA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gIGlmIChhcnQuYXJ0aWNsZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5hcnRpY2xlLnVybCB9XG5cblxufSlcblxuY29uc29sZS5sb2coJ25ld3MnLCBuZXdzKVxuY29uc29sZS5sb2coJ2ltZycsaW1hZ2VbMV0pXG4gICAgcmV0dXJuIChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250YWluZXInPlxuICAgIHsvKiA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgPGE+R28gdG8gYWJvdXQ8L2E+XG4gICAgPC9MaW5rPiAqL31cbiAgICB7LyogPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDxwPldlbGNvbWU8L3A+XG4gICAgPC9kaXY+ICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9wLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdG9ycy1wYXJ0Jz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nZWRpdG9ycyc+RWRpdG9yJ3MgUGljazwvaDM+XG4gICAgICAgIDxwPmhvZXdpZW53PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtdG9wLWFydGljbGUnPlxuICAgICAgICA8ZGl2PmltZzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWJvdHRvbS1hcnRpY2xlcyc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17YGh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS8ke2ltYWdlWzBdfWB9IGFsdD0ndG9wLWFydGljbGUnIC8+XG4gIDxwPnt9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7aW1hZ2VbMV19YH0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAudG9wLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB9XG5cbiAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuICAgICAgLmVkaXRvcnMtcGFydCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuXG4gICAgICB9XG5cbiAgICAgIC5lZGl0b3JzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAucmlnaHQtdG9wLWFydGljbGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcblxuICAgICAgfVxuXG4gICAgICAudG9wLWJvdHRvbS1hcnRpY2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICBcbiAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuXG4gICAgKX1cbiAgICBcblxuICAgIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICAgIGNvbnN0IHtxdWVyeX0gPSBjdHhcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPXRlY2gmYXBpLWtleT05Y0Q5QXhJbDJMamJoc0tCTVFFMTFEMXk1dkFqdXh6ZiZmYWNldF9maWVsZHM9c291cmNlJmZhY2V0PXRydWUmYmVnaW5fZGF0ZT0yMDIwMDEwMSZlbmRfZGF0ZT0yMDIwMDgzMVxuICAgICAgYCApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB7bmV3czogZGF0YS5yZXNwb25zZX1cbiAgICB9XG4iXX0= */\\n/*@ sourceURL=/Users/jamie/Documents/morning-news/pages/index.js */\"\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 3\n  }, this);\n}\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var query, res, data;\n    return _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = ctx.query;\n            _context.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(\"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831\\n      \");\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              news: data.response\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm5ld3MiLCJpbWFnZSIsImRvY3MiLCJtYXAiLCJhcnQiLCJtdWx0aW1lZGlhIiwidXJsIiwidGV4dCIsImFydGljbGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxPQUF1QjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUVyQyxNQUFNQyxLQUFLLEdBQUlELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQUMsR0FBRyxFQUFJO0FBQ2hDLFFBQUlBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlLENBQWYsQ0FBSixFQUF1QjtBQUV0QixhQUFPRCxHQUFHLENBQUNDLFVBQUosQ0FBZSxDQUFmLEVBQWtCQyxHQUF6QjtBQUE4QjtBQUduQyxHQU5lLENBQWY7QUFRRCxNQUFNQyxJQUFJLEdBQUlQLElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQUMsR0FBRyxFQUFJO0FBQ2pDLFFBQUlBLEdBQUcsQ0FBQ0ksT0FBUixFQUFpQjtBQUVoQixhQUFPSixHQUFHLENBQUNJLE9BQUosQ0FBWUYsR0FBbkI7QUFBd0I7QUFHMUIsR0FOYSxDQUFkO0FBUUFHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JWLElBQXBCO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBa0JULEtBQUssQ0FBQyxDQUFELENBQXZCO0FBQ0ksc0JBQ0YscUVBQUMsMERBQUQ7QUFBQSwyQkFDRTtBQUFBLDBDQUFlLGdCQUFmO0FBQUEsOEJBUUE7QUFBQSw0Q0FBbUIsZUFBbkI7QUFBQSxnQ0FDRTtBQUFBLDhDQUFlLGNBQWY7QUFBQSxrQ0FDRTtBQUFBLGdEQUFjLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUEsOENBQWUsbUJBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxnREFBZSxxQkFBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQSxzQ0FDRTtBQUEyQixtQkFBRyxxQ0FBOEJBLEtBQUssQ0FBQyxDQUFELENBQW5DLENBQTlCO0FBQXdFLG1CQUFHLEVBQUMsYUFBNUU7QUFBQSxvREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFLRTtBQUFBO0FBQUEscUNBQ0E7QUFBMkIsbUJBQUcscUNBQThCQSxLQUFLLENBQUMsQ0FBRCxDQUFuQyxDQUE5QjtBQUF3RSxtQkFBRyxFQUFDLGFBQTVFO0FBQUEsb0RBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERTtBQXFGRTtLQXpHa0JGLEs7O0FBNEdwQkEsS0FBSyxDQUFDWSxlQUFOO0FBQUEsK1JBQXdCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxpQkFEZSxHQUNORCxHQURNLENBQ2ZDLEtBRGU7QUFBQTtBQUFBLG1CQUVKQyx5REFBSyx5TEFGRDs7QUFBQTtBQUVoQkMsZUFGZ0I7QUFBQTtBQUFBLG1CQUlIQSxHQUFHLENBQUNDLElBQUosRUFKRzs7QUFBQTtBQUloQkMsZ0JBSmdCO0FBQUEsNkNBTWY7QUFBQ2pCLGtCQUFJLEVBQUVpQixJQUFJLENBQUNDO0FBQVosYUFOZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe25ld3N9KSB7XG5cbiBjb25zdCBpbWFnZSA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gICAgIGlmIChhcnQubXVsdGltZWRpYVswXSkge1xuICAgICAgIFxuICAgICAgcmV0dXJuIGFydC5tdWx0aW1lZGlhWzBdLnVybCB9XG5cbiAgIFxufSlcblxuY29uc3QgdGV4dCA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gIGlmIChhcnQuYXJ0aWNsZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5hcnRpY2xlLnVybCB9XG5cblxufSlcblxuY29uc29sZS5sb2coJ25ld3MnLCBuZXdzKVxuY29uc29sZS5sb2coJ2ltZycsaW1hZ2VbMV0pXG4gICAgcmV0dXJuIChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250YWluZXInPlxuICAgIHsvKiA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgPGE+R28gdG8gYWJvdXQ8L2E+XG4gICAgPC9MaW5rPiAqL31cbiAgICB7LyogPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDxwPldlbGNvbWU8L3A+XG4gICAgPC9kaXY+ICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9wLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdG9ycy1wYXJ0Jz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nZWRpdG9ycyc+RWRpdG9yJ3MgUGljazwvaDM+XG4gICAgICAgIDxwPmhvZXdpZW53PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtdG9wLWFydGljbGUnPlxuICAgICAgICA8ZGl2PmltZzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWJvdHRvbS1hcnRpY2xlcyc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17YGh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS8ke2ltYWdlWzBdfWB9IGFsdD0ndG9wLWFydGljbGUnIC8+XG4gIDxwPnt9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7aW1hZ2VbMV19YH0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAudG9wLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB9XG5cbiAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuICAgICAgLmVkaXRvcnMtcGFydCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuXG4gICAgICB9XG5cbiAgICAgIC5lZGl0b3JzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAucmlnaHQtdG9wLWFydGljbGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcblxuICAgICAgfVxuXG4gICAgICAudG9wLWJvdHRvbS1hcnRpY2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICBcbiAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuXG4gICAgKX1cbiAgICBcblxuICAgIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICAgIGNvbnN0IHtxdWVyeX0gPSBjdHhcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPXRlY2gmYXBpLWtleT05Y0Q5QXhJbDJMamJoc0tCTVFFMTFEMXk1dkFqdXh6ZiZmYWNldF9maWVsZHM9c291cmNlJmZhY2V0PXRydWUmYmVnaW5fZGF0ZT0yMDIwMDEwMSZlbmRfZGF0ZT0yMDIwMDgzMVxuICAgICAgYCApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB7bmV3czogZGF0YS5yZXNwb25zZX1cbiAgICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})