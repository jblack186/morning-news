webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/jamie/Documents/morning-news/pages/index.js\";\n\n\n\n\n\nfunction Index(_ref) {\n  var news = _ref.news;\n  var image = news.response.docs.map(function (art) {\n    if (art.multimedia[0] ? console.log('art', art.multimedia[0].url) : null) return art.multimedia[0].url;\n  }); // console.log('news', news)\n  // console.log('img',image)\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2618736584\" + \" \" + 'home-container',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n        className: \"jsx-2618736584\" + \" \" + 'top-container',\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2618736584\" + \" \" + 'editors-part',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            className: \"jsx-2618736584\" + \" \" + 'editors',\n            children: \"Editor's Pick\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2618736584\",\n            children: \"hoewienw\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2618736584\" + \" \" + 'right-top-article',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2618736584\",\n            children: \"img\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2618736584\" + \" \" + 'top-bottom-articles',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n              src: image,\n              alt: \"top-article\",\n              className: \"jsx-2618736584\" + \" \" + 'top-image'\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-2618736584\",\n              children: \"img\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        id: \"2618736584\",\n        children: \".top-image.jsx-2618736584{width:100px;}.home-container.jsx-2618736584{min-height:90vh;height:100%;background-color:whitesmoke;}.top-container.jsx-2618736584{margin:0 auto;padding-top:100px;width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1000px){.top-container.jsx-2618736584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.editors-part.jsx-2618736584{width:40%;height:500px;border:solid black 1px;}.editors.jsx-2618736584{margin:0;}.right-top-article.jsx-2618736584{width:60%;height:500px;border:solid black 1px;}.top-bottom-articles.jsx-2618736584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZ0IsQUFJbUIsQUFHTSxBQU1GLEFBVUMsQUFPTCxBQU9ELEFBSUMsQUFPRyxTQVZmLENBUGUsQUFXQSxFQXJDakIsRUFTc0IsRUFOTixPQXdCVyxBQVdBLEtBbENLLElBTWxCLFVBQ0csSUFrQmYsQUFXQSxVQW5DQSxrQkFjMEIsQUF5QjFCLDBDQWhDZ0Msb0NBUTlCLCtFQU5GIiwiZmlsZSI6Ii9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe25ld3N9KSB7XG5cbiBjb25zdCBpbWFnZSA9ICBuZXdzLnJlc3BvbnNlLmRvY3MubWFwKGFydCA9PiB7XG4gICAgIGlmIChhcnQubXVsdGltZWRpYVswXSA/IGNvbnNvbGUubG9nKCdhcnQnLGFydC5tdWx0aW1lZGlhWzBdLnVybCkgOiBudWxsIClcblxuICAgcmV0dXJuIGFydC5tdWx0aW1lZGlhWzBdLnVybFxufSlcbi8vIGNvbnNvbGUubG9nKCduZXdzJywgbmV3cylcbi8vIGNvbnNvbGUubG9nKCdpbWcnLGltYWdlKVxuICAgIHJldHVybiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGFpbmVyJz5cbiAgICB7LyogPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhPkdvIHRvIGFib3V0PC9hPlxuICAgIDwvTGluaz4gKi99XG4gICAgey8qIDxkaXY+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8cD5XZWxjb21lPC9wPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RvcC1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VkaXRvcnMtcGFydCc+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2VkaXRvcnMnPkVkaXRvcidzIFBpY2s8L2gzPlxuICAgICAgICA8cD5ob2V3aWVudzwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LXRvcC1hcnRpY2xlJz5cbiAgICAgICAgPGRpdj5pbWc8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcC1ib3R0b20tYXJ0aWNsZXMnPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17aW1hZ2V9IGFsdD0ndG9wLWFydGljbGUnIC8+XG4gICAgICAgICAgPGRpdj5pbWc8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnRvcC1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgICAgLmhvbWUtY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogOTB2aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgfVxuXG4gICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIC5lZGl0b3JzLXBhcnQge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcblxuICAgICAgfVxuXG4gICAgICAuZWRpdG9ycyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0LXRvcC1hcnRpY2xlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG5cbiAgICAgIH1cblxuICAgICAgLnRvcC1ib3R0b20tYXJ0aWNsZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgXG4gIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICA8L0xheW91dD5cblxuICAgICl9XG4gICAgXG5cbiAgICBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/cT10ZWNoJmFwaS1rZXk9OWNEOUF4SWwyTGpiaHNLQk1RRTExRDF5NXZBanV4emYmZmFjZXRfZmllbGRzPXNvdXJjZSZmYWNldD10cnVlJmJlZ2luX2RhdGU9MjAyMDAxMDEmZW5kX2RhdGU9MjAyMDA4MzFcbiAgICAgIGApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB7bmV3czogZGF0YX1cbiAgICB9XG4iXX0= */\\n/*@ sourceURL=/Users/jamie/Documents/morning-news/pages/index.js */\"\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 3\n  }, this);\n}\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res, data;\n  return _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(\"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831\\n      \");\n\n        case 2:\n          res = _context.sent;\n          _context.next = 5;\n          return res.json();\n\n        case 5:\n          data = _context.sent;\n          return _context.abrupt(\"return\", {\n            news: data\n          });\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm5ld3MiLCJpbWFnZSIsInJlc3BvbnNlIiwiZG9jcyIsIm1hcCIsImFydCIsIm11bHRpbWVkaWEiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxLQUFULE9BQXVCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBRXJDLE1BQU1DLEtBQUssR0FBSUQsSUFBSSxDQUFDRSxRQUFMLENBQWNDLElBQWQsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUFDLEdBQUcsRUFBSTtBQUN6QyxRQUFJQSxHQUFHLENBQUNDLFVBQUosQ0FBZSxDQUFmLElBQW9CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQWtCSCxHQUFHLENBQUNDLFVBQUosQ0FBZSxDQUFmLEVBQWtCRyxHQUFwQyxDQUFwQixHQUErRCxJQUFuRSxFQUVGLE9BQU9KLEdBQUcsQ0FBQ0MsVUFBSixDQUFlLENBQWYsRUFBa0JHLEdBQXpCO0FBQ0YsR0FKZSxDQUFmLENBRnFDLENBT3RDO0FBQ0E7O0FBQ0ksc0JBQ0YscUVBQUMsMERBQUQ7QUFBQSwyQkFDRTtBQUFBLDBDQUFlLGdCQUFmO0FBQUEsOEJBUUE7QUFBQSw0Q0FBbUIsZUFBbkI7QUFBQSxnQ0FDRTtBQUFBLDhDQUFlLGNBQWY7QUFBQSxrQ0FDRTtBQUFBLGdEQUFjLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUEsOENBQWUsbUJBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxnREFBZSxxQkFBZjtBQUFBLG9DQUNFO0FBQTJCLGlCQUFHLEVBQUVSLEtBQWhDO0FBQXVDLGlCQUFHLEVBQUMsYUFBM0M7QUFBQSxrREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURFO0FBK0VFO0tBeEZrQkYsSztBQTJGcEJBLEtBQUssQ0FBQ1csZUFBTixpU0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSkMseURBQUsseUxBREQ7O0FBQUE7QUFDaEJDLGFBRGdCO0FBQUE7QUFBQSxpQkFHSEEsR0FBRyxDQUFDQyxJQUFKLEVBSEc7O0FBQUE7QUFHaEJDLGNBSGdCO0FBQUEsMkNBS2Y7QUFBQ2QsZ0JBQUksRUFBRWM7QUFBUCxXQUxlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7bmV3c30pIHtcblxuIGNvbnN0IGltYWdlID0gIG5ld3MucmVzcG9uc2UuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgICAgaWYgKGFydC5tdWx0aW1lZGlhWzBdID8gY29uc29sZS5sb2coJ2FydCcsYXJ0Lm11bHRpbWVkaWFbMF0udXJsKSA6IG51bGwgKVxuXG4gICByZXR1cm4gYXJ0Lm11bHRpbWVkaWFbMF0udXJsXG59KVxuLy8gY29uc29sZS5sb2coJ25ld3MnLCBuZXdzKVxuLy8gY29uc29sZS5sb2coJ2ltZycsaW1hZ2UpXG4gICAgcmV0dXJuIChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250YWluZXInPlxuICAgIHsvKiA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgPGE+R28gdG8gYWJvdXQ8L2E+XG4gICAgPC9MaW5rPiAqL31cbiAgICB7LyogPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDxwPldlbGNvbWU8L3A+XG4gICAgPC9kaXY+ICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9wLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdG9ycy1wYXJ0Jz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nZWRpdG9ycyc+RWRpdG9yJ3MgUGljazwvaDM+XG4gICAgICAgIDxwPmhvZXdpZW53PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtdG9wLWFydGljbGUnPlxuICAgICAgICA8ZGl2PmltZzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWJvdHRvbS1hcnRpY2xlcyc+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtpbWFnZX0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cbiAgICAgICAgICA8ZGl2PmltZzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAudG9wLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB9XG5cbiAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuICAgICAgLmVkaXRvcnMtcGFydCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuXG4gICAgICB9XG5cbiAgICAgIC5lZGl0b3JzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAucmlnaHQtdG9wLWFydGljbGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcblxuICAgICAgfVxuXG4gICAgICAudG9wLWJvdHRvbS1hcnRpY2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICBcbiAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuXG4gICAgKX1cbiAgICBcblxuICAgIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPXRlY2gmYXBpLWtleT05Y0Q5QXhJbDJMamJoc0tCTVFFMTFEMXk1dkFqdXh6ZiZmYWNldF9maWVsZHM9c291cmNlJmZhY2V0PXRydWUmYmVnaW5fZGF0ZT0yMDIwMDEwMSZlbmRfZGF0ZT0yMDIwMDgzMVxuICAgICAgYCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHtuZXdzOiBkYXRhfVxuICAgIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})