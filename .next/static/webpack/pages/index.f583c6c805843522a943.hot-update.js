webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/jamie/Documents/morning-news/pages/index.js\";\n\n\n\n\n\nfunction Index(_ref) {\n  var news = _ref.news;\n  var image = news.docs.map(function (art) {\n    if (art.multimedia[0]) {\n      return art.multimedia[0].url;\n    }\n  });\n  var text = news.docs.map(function (art) {\n    if (art.headline) {\n      return art.headline.main;\n    }\n  });\n  console.log(text);\n  console.log('news', news);\n  console.log('img', image[1]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2618736584\" + \" \" + 'home-container',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n        className: \"jsx-2618736584\" + \" \" + 'top-container',\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2618736584\" + \" \" + 'editors-part',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            className: \"jsx-2618736584\" + \" \" + 'editors',\n            children: \"Editor's Pick\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-2618736584\",\n            children: \"hoewienw\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-2618736584\" + \" \" + 'right-top-article',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2618736584\",\n            children: \"img\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-2618736584\" + \" \" + 'top-bottom-articles',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-2618736584\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[0]),\n                alt: \"top-article\",\n                className: \"jsx-2618736584\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 13\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-2618736584\",\n                children: text[0]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-2618736584\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[1]),\n                alt: \"top-article\",\n                className: \"jsx-2618736584\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 11\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        id: \"2618736584\",\n        children: \".top-image.jsx-2618736584{width:100px;}.home-container.jsx-2618736584{min-height:90vh;height:100%;background-color:whitesmoke;}.top-container.jsx-2618736584{margin:0 auto;padding-top:100px;width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1000px){.top-container.jsx-2618736584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.editors-part.jsx-2618736584{width:40%;height:500px;border:solid black 1px;}.editors.jsx-2618736584{margin:0;}.right-top-article.jsx-2618736584{width:60%;height:500px;border:solid black 1px;}.top-bottom-articles.jsx-2618736584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEZ0IsQUFJbUIsQUFHTSxBQU1GLEFBVUMsQUFPTCxBQU9ELEFBSUMsQUFPRyxTQVZmLENBUGUsQUFXQSxFQXJDakIsRUFTc0IsRUFOTixPQXdCVyxBQVdBLEtBbENLLElBTWxCLFVBQ0csSUFrQmYsQUFXQSxVQW5DQSxrQkFjMEIsQUF5QjFCLDBDQWhDZ0Msb0NBUTlCLCtFQU5GIiwiZmlsZSI6Ii9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe25ld3N9KSB7XG5cbiBjb25zdCBpbWFnZSA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gICAgIGlmIChhcnQubXVsdGltZWRpYVswXSkge1xuICAgICAgIFxuICAgICAgcmV0dXJuIGFydC5tdWx0aW1lZGlhWzBdLnVybCB9XG5cbiAgIFxufSlcblxuY29uc3QgdGV4dCA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gIGlmIChhcnQuaGVhZGxpbmUpIHtcbiAgICBcbiAgIHJldHVybiBhcnQuaGVhZGxpbmUubWFpbiB9XG5cblxufSlcblxuY29uc29sZS5sb2codGV4dClcblxuY29uc29sZS5sb2coJ25ld3MnLCBuZXdzKVxuY29uc29sZS5sb2coJ2ltZycsaW1hZ2VbMV0pXG4gICAgcmV0dXJuIChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250YWluZXInPlxuICAgIHsvKiA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgPGE+R28gdG8gYWJvdXQ8L2E+XG4gICAgPC9MaW5rPiAqL31cbiAgICB7LyogPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDxwPldlbGNvbWU8L3A+XG4gICAgPC9kaXY+ICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9wLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdG9ycy1wYXJ0Jz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nZWRpdG9ycyc+RWRpdG9yJ3MgUGljazwvaDM+XG4gICAgICAgIDxwPmhvZXdpZW53PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtdG9wLWFydGljbGUnPlxuICAgICAgICA8ZGl2PmltZzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWJvdHRvbS1hcnRpY2xlcyc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17YGh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS8ke2ltYWdlWzBdfWB9IGFsdD0ndG9wLWFydGljbGUnIC8+XG4gICAgICAgICAgICA8cD57dGV4dFswXX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndG9wLWltYWdlJyBzcmM9e2BodHRwczovL3N0YXRpYzAxLm55dC5jb20vJHtpbWFnZVsxXX1gfSBhbHQ9J3RvcC1hcnRpY2xlJyAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIC50b3AtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAgIC5ob21lLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwdmg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgIH1cblxuICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICAuZWRpdG9ycy1wYXJ0IHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG5cbiAgICAgIH1cblxuICAgICAgLmVkaXRvcnMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodC10b3AtYXJ0aWNsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuXG4gICAgICB9XG5cbiAgICAgIC50b3AtYm90dG9tLWFydGljbGVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgIFxuICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgPC9MYXlvdXQ+XG5cbiAgICApfVxuICAgIFxuXG4gICAgSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgY29uc3Qge3F1ZXJ5fSA9IGN0eFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uP3E9dGVjaCZhcGkta2V5PTljRDlBeElsMkxqYmhzS0JNUUUxMUQxeTV2QWp1eHpmJmZhY2V0X2ZpZWxkcz1zb3VyY2UmZmFjZXQ9dHJ1ZSZiZWdpbl9kYXRlPTIwMjAwMTAxJmVuZF9kYXRlPTIwMjAwODMxXG4gICAgICBgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHtuZXdzOiBkYXRhLnJlc3BvbnNlfVxuICAgIH1cbiJdfQ== */\\n/*@ sourceURL=/Users/jamie/Documents/morning-news/pages/index.js */\"\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, this);\n}\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var query, res, data;\n    return _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = ctx.query;\n            _context.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(\"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831\\n      \");\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              news: data.response\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm5ld3MiLCJpbWFnZSIsImRvY3MiLCJtYXAiLCJhcnQiLCJtdWx0aW1lZGlhIiwidXJsIiwidGV4dCIsImhlYWRsaW5lIiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxLQUFULE9BQXVCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBRXJDLE1BQU1DLEtBQUssR0FBSUQsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFBQyxHQUFHLEVBQUk7QUFDaEMsUUFBSUEsR0FBRyxDQUFDQyxVQUFKLENBQWUsQ0FBZixDQUFKLEVBQXVCO0FBRXRCLGFBQU9ELEdBQUcsQ0FBQ0MsVUFBSixDQUFlLENBQWYsRUFBa0JDLEdBQXpCO0FBQThCO0FBR25DLEdBTmUsQ0FBZjtBQVFELE1BQU1DLElBQUksR0FBSVAsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFBQyxHQUFHLEVBQUk7QUFDakMsUUFBSUEsR0FBRyxDQUFDSSxRQUFSLEVBQWtCO0FBRWpCLGFBQU9KLEdBQUcsQ0FBQ0ksUUFBSixDQUFhQyxJQUFwQjtBQUEwQjtBQUc1QixHQU5hLENBQWQ7QUFRQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFFQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlgsSUFBcEI7QUFDQVUsU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFrQlYsS0FBSyxDQUFDLENBQUQsQ0FBdkI7QUFDSSxzQkFDRixxRUFBQywwREFBRDtBQUFBLDJCQUNFO0FBQUEsMENBQWUsZ0JBQWY7QUFBQSw4QkFRQTtBQUFBLDRDQUFtQixlQUFuQjtBQUFBLGdDQUNFO0FBQUEsOENBQWUsY0FBZjtBQUFBLGtDQUNFO0FBQUEsZ0RBQWMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBQSw4Q0FBZSxtQkFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLGdEQUFlLHFCQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBLHNDQUNFO0FBQTJCLG1CQUFHLHFDQUE4QkEsS0FBSyxDQUFDLENBQUQsQ0FBbkMsQ0FBOUI7QUFBd0UsbUJBQUcsRUFBQyxhQUE1RTtBQUFBLG9EQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUE7QUFBQSwwQkFBSU0sSUFBSSxDQUFDLENBQUQ7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUtFO0FBQUE7QUFBQSxxQ0FDQTtBQUEyQixtQkFBRyxxQ0FBOEJOLEtBQUssQ0FBQyxDQUFELENBQW5DLENBQTlCO0FBQXdFLG1CQUFHLEVBQUMsYUFBNUU7QUFBQSxvREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURFO0FBcUZFO0tBM0drQkYsSzs7QUE4R3BCQSxLQUFLLENBQUNhLGVBQU47QUFBQSwrUkFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLGlCQURlLEdBQ05ELEdBRE0sQ0FDZkMsS0FEZTtBQUFBO0FBQUEsbUJBRUpDLHlEQUFLLHlMQUZEOztBQUFBO0FBRWhCQyxlQUZnQjtBQUFBO0FBQUEsbUJBSUhBLEdBQUcsQ0FBQ0MsSUFBSixFQUpHOztBQUFBO0FBSWhCQyxnQkFKZ0I7QUFBQSw2Q0FNZjtBQUFDbEIsa0JBQUksRUFBRWtCLElBQUksQ0FBQ0M7QUFBWixhQU5lOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7bmV3c30pIHtcblxuIGNvbnN0IGltYWdlID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgICAgaWYgKGFydC5tdWx0aW1lZGlhWzBdKSB7XG4gICAgICAgXG4gICAgICByZXR1cm4gYXJ0Lm11bHRpbWVkaWFbMF0udXJsIH1cblxuICAgXG59KVxuXG5jb25zdCB0ZXh0ID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5oZWFkbGluZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5oZWFkbGluZS5tYWluIH1cblxuXG59KVxuXG5jb25zb2xlLmxvZyh0ZXh0KVxuXG5jb25zb2xlLmxvZygnbmV3cycsIG5ld3MpXG5jb25zb2xlLmxvZygnaW1nJyxpbWFnZVsxXSlcbiAgICByZXR1cm4gKFxuICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRhaW5lcic+XG4gICAgey8qIDxMaW5rIGhyZWY9Jy9hYm91dCc+XG4gICAgICA8YT5HbyB0byBhYm91dDwvYT5cbiAgICA8L0xpbms+ICovfVxuICAgIHsvKiA8ZGl2PlxuICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgPHA+V2VsY29tZTwvcD5cbiAgICA8L2Rpdj4gKi99XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0b3AtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlZGl0b3JzLXBhcnQnPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdlZGl0b3JzJz5FZGl0b3IncyBQaWNrPC9oMz5cbiAgICAgICAgPHA+aG9ld2llbnc8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC10b3AtYXJ0aWNsZSc+XG4gICAgICAgIDxkaXY+aW1nPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3AtYm90dG9tLWFydGljbGVzJz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7aW1hZ2VbMF19YH0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cbiAgICAgICAgICAgIDxwPnt0ZXh0WzBdfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17YGh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS8ke2ltYWdlWzFdfWB9IGFsdD0ndG9wLWFydGljbGUnIC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnRvcC1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgICAgLmhvbWUtY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogOTB2aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgfVxuXG4gICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIC5lZGl0b3JzLXBhcnQge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcblxuICAgICAgfVxuXG4gICAgICAuZWRpdG9ycyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0LXRvcC1hcnRpY2xlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG5cbiAgICAgIH1cblxuICAgICAgLnRvcC1ib3R0b20tYXJ0aWNsZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgXG4gIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICA8L0xheW91dD5cblxuICAgICl9XG4gICAgXG5cbiAgICBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgICBjb25zdCB7cXVlcnl9ID0gY3R4XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/cT10ZWNoJmFwaS1rZXk9OWNEOUF4SWwyTGpiaHNLQk1RRTExRDF5NXZBanV4emYmZmFjZXRfZmllbGRzPXNvdXJjZSZmYWNldD10cnVlJmJlZ2luX2RhdGU9MjAyMDAxMDEmZW5kX2RhdGU9MjAyMDA4MzFcbiAgICAgIGAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgXG4gICAgICByZXR1cm4ge25ld3M6IGRhdGEucmVzcG9uc2V9XG4gICAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})