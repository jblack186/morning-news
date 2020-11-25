webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/jamie/Documents/morning-news/pages/index.js\";\n\n\n\n\n\nfunction Index(_ref) {\n  var news = _ref.news;\n  var image = news.docs.map(function (art) {\n    if (art.multimedia[0]) {\n      return art.multimedia[0].url;\n    }\n  });\n  var text = news.docs.map(function (art) {\n    if (art.headline) {\n      return art.headline.main;\n    }\n  });\n  var headline = news.docs.map(function (art) {\n    if (art.headline) {\n      return art.headline.main;\n    }\n  });\n  var author = news.docs.map(function (art) {\n    if (art.byline) {\n      return art.byline.original;\n    }\n  });\n  console.log(text);\n  console.log('news', news);\n  console.log('img', image[1]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3270775206\" + \" \" + 'home-container',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n        className: \"jsx-3270775206\" + \" \" + 'top-container',\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3270775206\" + \" \" + 'editors-part',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            className: \"jsx-3270775206\" + \" \" + 'editor-pick',\n            children: \"Editor's Pick\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-3270775206\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[4]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\" + \" \" + 'author',\n              children: author[4]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-3270775206\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[5]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\" + \" \" + 'author',\n              children: author[5]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-3270775206\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[6]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\" + \" \" + 'author',\n              children: author[6]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-3270775206\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[7]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\" + \" \" + 'author',\n              children: author[7]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-3270775206\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\" + \" \" + 'author',\n              children: author[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-3270775206\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\" + \" \" + 'author',\n              children: author[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-3270775206\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\" + \" \" + 'author',\n              children: author[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3270775206\" + \" \" + 'right-top-article',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3270775206\" + \" \" + 'top-article',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3270775206\",\n              children: text[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n              src: \"https://static01.nyt.com/\".concat(image[3]),\n              alt: \"top-article\",\n              className: \"jsx-3270775206\" + \" \" + 'top-image'\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3270775206\" + \" \" + 'top-bottom-articles',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3270775206\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[0]),\n                alt: \"top-article\",\n                className: \"jsx-3270775206\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 13\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-3270775206\",\n                children: text[0]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3270775206\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[1]),\n                alt: \"top-article\",\n                className: \"jsx-3270775206\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-3270775206\",\n                children: text[1]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        id: \"3270775206\",\n        children: \".top-image.jsx-3270775206{width:100px;}.home-container.jsx-3270775206{min-height:90vh;height:100%;background-color:whitesmoke;}.top-container.jsx-3270775206{margin:0 auto;padding-top:100px;width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1000px){.top-container.jsx-3270775206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.editor-pick.jsx-3270775206{margin:0;color:#0d42a2;font-size:2rem;font-weight:800;}.editors-part.jsx-3270775206 li.jsx-3270775206{list-style:none;}.author.jsx-3270775206{font-size:.9rem;color:#aaa;border-bottom:1px solid #aaa;padding-bottom:15px;}.editors-part.jsx-3270775206{width:40%;height:500px;}.editors.jsx-3270775206{margin:0;}.right-top-article.jsx-3270775206{width:60%;height:500px;border:solid black 1px;}.top-article.jsx-3270775206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}..jsx-3270775206 .top-bottom-articles.jsx-3270775206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HZ0IsQUFJbUIsQUFHTSxBQU1GLEFBVUMsQUFNTixBQU9NLEFBSUEsQUFPTCxBQU1ELEFBSUMsQUFPRyxBQVVBLFNBNUNDLEFBd0JoQixDQU5lLEFBVUEsRUFyRGpCLEVBU3NCLEVBTk4sQUE2QmYsQUFJYSxPQVZLLEFBbUJqQixBQVN5QixJQWpCTSxDQWpDRCxJQU1sQixNQWlCTSxJQWhCSCxJQTZDZixRQTVCRCxFQXZCQyxBQWlDc0Isa0JBbkJJLEFBMEMxQixBQVNBLEVBL0JELHdDQTNCaUMsb0NBUTlCLCtFQU5GIiwiZmlsZSI6Ii9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe25ld3N9KSB7XG5cbiBjb25zdCBpbWFnZSA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gICAgIGlmIChhcnQubXVsdGltZWRpYVswXSkge1xuICAgICAgIFxuICAgICAgcmV0dXJuIGFydC5tdWx0aW1lZGlhWzBdLnVybCB9XG59KVxuXG5jb25zdCB0ZXh0ID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5oZWFkbGluZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5oZWFkbGluZS5tYWluIH1cbn0pXG5cbmNvbnN0IGhlYWRsaW5lID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5oZWFkbGluZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5oZWFkbGluZS5tYWluIH1cbn0pXG5cbmNvbnN0IGF1dGhvciA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gIGlmIChhcnQuYnlsaW5lKSB7XG4gICAgXG4gICByZXR1cm4gYXJ0LmJ5bGluZS5vcmlnaW5hbCB9XG59KVxuXG5cbmNvbnNvbGUubG9nKHRleHQpXG5cbmNvbnNvbGUubG9nKCduZXdzJywgbmV3cylcbmNvbnNvbGUubG9nKCdpbWcnLGltYWdlWzFdKVxuICAgIHJldHVybiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGFpbmVyJz5cbiAgICB7LyogPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhPkdvIHRvIGFib3V0PC9hPlxuICAgIDwvTGluaz4gKi99XG4gICAgey8qIDxkaXY+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8cD5XZWxjb21lPC9wPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RvcC1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VkaXRvcnMtcGFydCc+XG4gICAgICA8aDQgY2xhc3NOYW1lPSdlZGl0b3ItcGljayc+RWRpdG9yJ3MgUGljazwvaDQ+XG4gICAgICA8bGk+XG4gICAgICAgIDxwPnt0ZXh0WzRdfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdhdXRob3InPnthdXRob3JbNF19PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPHA+e3RleHRbNV19PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2F1dGhvcic+e2F1dGhvcls1XX08L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8cD57dGV4dFs2XX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYXV0aG9yJz57YXV0aG9yWzZdfTwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxwPnt0ZXh0WzddfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdhdXRob3InPnthdXRob3JbN119PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPHA+e3RleHRbM119PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2F1dGhvcic+e2F1dGhvclszXX08L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8cD57dGV4dFszXX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYXV0aG9yJz57YXV0aG9yWzNdfTwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxwPnt0ZXh0WzNdfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdhdXRob3InPnthdXRob3JbM119PC9wPlxuICAgICAgPC9saT5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC10b3AtYXJ0aWNsZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWFydGljbGUnPlxuICAgICAgICA8cD57dGV4dFszXX08L3A+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7aW1hZ2VbM119YH0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWJvdHRvbS1hcnRpY2xlcyc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17YGh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS8ke2ltYWdlWzBdfWB9IGFsdD0ndG9wLWFydGljbGUnIC8+XG4gICAgICAgICAgICA8cD57dGV4dFswXX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndG9wLWltYWdlJyBzcmM9e2BodHRwczovL3N0YXRpYzAxLm55dC5jb20vJHtpbWFnZVsxXX1gfSBhbHQ9J3RvcC1hcnRpY2xlJyAvPlxuICAgICAgICAgIDxwPnt0ZXh0WzFdfTwvcD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAudG9wLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB9XG5cbiAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5lZGl0b3ItcGljayB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwZDQyYTI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgfVxuXG4gICAgIC5lZGl0b3JzLXBhcnQgbGkge1xuICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgIH1cblxuICAgICAuYXV0aG9yIHtcbiAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgIH1cblxuICAgICAgLmVkaXRvcnMtcGFydCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICAuZWRpdG9ycyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0LXRvcC1hcnRpY2xlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG5cbiAgICAgIH1cblxuICAgICAgLnRvcC1hcnRpY2xlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIC50b3AtYXJ0aWNsZSB7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgLlxuXG4gICAgICAudG9wLWJvdHRvbS1hcnRpY2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICBcbiAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuXG4gICAgKX1cbiAgICBcblxuICAgIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICAgIGNvbnN0IHtxdWVyeX0gPSBjdHhcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPXRlY2gmYXBpLWtleT05Y0Q5QXhJbDJMamJoc0tCTVFFMTFEMXk1dkFqdXh6ZiZmYWNldF9maWVsZHM9c291cmNlJmZhY2V0PXRydWUmYmVnaW5fZGF0ZT0yMDIwMDEwMSZlbmRfZGF0ZT0yMDIwMDgzMVxuICAgICAgYCApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB7bmV3czogZGF0YS5yZXNwb25zZX1cbiAgICB9XG4iXX0= */\\n/*@ sourceURL=/Users/jamie/Documents/morning-news/pages/index.js */\"\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 3\n  }, this);\n}\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var query, res, data;\n    return _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = ctx.query;\n            _context.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(\"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831\\n      \");\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              news: data.response\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm5ld3MiLCJpbWFnZSIsImRvY3MiLCJtYXAiLCJhcnQiLCJtdWx0aW1lZGlhIiwidXJsIiwidGV4dCIsImhlYWRsaW5lIiwibWFpbiIsImF1dGhvciIsImJ5bGluZSIsIm9yaWdpbmFsIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLEtBQVQsT0FBdUI7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFFckMsTUFBTUMsS0FBSyxHQUFJRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUFDLEdBQUcsRUFBSTtBQUNoQyxRQUFJQSxHQUFHLENBQUNDLFVBQUosQ0FBZSxDQUFmLENBQUosRUFBdUI7QUFFdEIsYUFBT0QsR0FBRyxDQUFDQyxVQUFKLENBQWUsQ0FBZixFQUFrQkMsR0FBekI7QUFBOEI7QUFDbkMsR0FKZSxDQUFmO0FBTUQsTUFBTUMsSUFBSSxHQUFJUCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUFDLEdBQUcsRUFBSTtBQUNqQyxRQUFJQSxHQUFHLENBQUNJLFFBQVIsRUFBa0I7QUFFakIsYUFBT0osR0FBRyxDQUFDSSxRQUFKLENBQWFDLElBQXBCO0FBQTBCO0FBQzVCLEdBSmEsQ0FBZDtBQU1BLE1BQU1ELFFBQVEsR0FBSVIsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFBQyxHQUFHLEVBQUk7QUFDckMsUUFBSUEsR0FBRyxDQUFDSSxRQUFSLEVBQWtCO0FBRWpCLGFBQU9KLEdBQUcsQ0FBQ0ksUUFBSixDQUFhQyxJQUFwQjtBQUEwQjtBQUM1QixHQUppQixD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QUE7QUFBQSxnQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURFO0FBaUpFO0tBaExrQlIsSzs7QUFtTHBCQSxLQUFLLENBQUNnQixlQUFOO0FBQUEsK1JBQXdCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxpQkFEZSxHQUNORCxHQURNLENBQ2ZDLEtBRGU7QUFBQTtBQUFBLG1CQUVKQyx5REFBSyx5TEFGRDs7QUFBQTtBQUVoQkMsZUFGZ0I7QUFBQTtBQUFBLG1CQUlIQSxHQUFHLENBQUNDLElBQUosRUFKRzs7QUFBQTtBQUloQkMsZ0JBSmdCO0FBQUEsNkNBTWY7QUFBQ3JCLGtCQUFJLEVBQUVxQixJQUFJLENBQUNDO0FBQVosYUFOZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe25ld3N9KSB7XG5cbiBjb25zdCBpbWFnZSA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gICAgIGlmIChhcnQubXVsdGltZWRpYVswXSkge1xuICAgICAgIFxuICAgICAgcmV0dXJuIGFydC5tdWx0aW1lZGlhWzBdLnVybCB9XG59KVxuXG5jb25zdCB0ZXh0ID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5oZWFkbGluZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5oZWFkbGluZS5tYWluIH1cbn0pXG5cbmNvbnN0IGhlYWRsaW5lID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5oZWFkbGluZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5oZWFkbGluZS5tYWluIH1cbn0pXG5cbmNvbnN0IGF1dGhvciA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gIGlmIChhcnQuYnlsaW5lKSB7XG4gICAgXG4gICByZXR1cm4gYXJ0LmJ5bGluZS5vcmlnaW5hbCB9XG59KVxuXG5cbmNvbnNvbGUubG9nKHRleHQpXG5cbmNvbnNvbGUubG9nKCduZXdzJywgbmV3cylcbmNvbnNvbGUubG9nKCdpbWcnLGltYWdlWzFdKVxuICAgIHJldHVybiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGFpbmVyJz5cbiAgICB7LyogPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhPkdvIHRvIGFib3V0PC9hPlxuICAgIDwvTGluaz4gKi99XG4gICAgey8qIDxkaXY+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8cD5XZWxjb21lPC9wPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RvcC1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VkaXRvcnMtcGFydCc+XG4gICAgICA8aDQgY2xhc3NOYW1lPSdlZGl0b3ItcGljayc+RWRpdG9yJ3MgUGljazwvaDQ+XG4gICAgICA8bGk+XG4gICAgICAgIDxwPnt0ZXh0WzRdfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdhdXRob3InPnthdXRob3JbNF19PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPHA+e3RleHRbNV19PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2F1dGhvcic+e2F1dGhvcls1XX08L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8cD57dGV4dFs2XX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYXV0aG9yJz57YXV0aG9yWzZdfTwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxwPnt0ZXh0WzddfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdhdXRob3InPnthdXRob3JbN119PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPHA+e3RleHRbM119PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2F1dGhvcic+e2F1dGhvclszXX08L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8cD57dGV4dFszXX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYXV0aG9yJz57YXV0aG9yWzNdfTwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxwPnt0ZXh0WzNdfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdhdXRob3InPnthdXRob3JbM119PC9wPlxuICAgICAgPC9saT5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC10b3AtYXJ0aWNsZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWFydGljbGUnPlxuICAgICAgICA8cD57dGV4dFszXX08L3A+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7aW1hZ2VbM119YH0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWJvdHRvbS1hcnRpY2xlcyc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17YGh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS8ke2ltYWdlWzBdfWB9IGFsdD0ndG9wLWFydGljbGUnIC8+XG4gICAgICAgICAgICA8cD57dGV4dFswXX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndG9wLWltYWdlJyBzcmM9e2BodHRwczovL3N0YXRpYzAxLm55dC5jb20vJHtpbWFnZVsxXX1gfSBhbHQ9J3RvcC1hcnRpY2xlJyAvPlxuICAgICAgICAgIDxwPnt0ZXh0WzFdfTwvcD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAudG9wLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB9XG5cbiAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5lZGl0b3ItcGljayB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwZDQyYTI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgfVxuXG4gICAgIC5lZGl0b3JzLXBhcnQgbGkge1xuICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgIH1cblxuICAgICAuYXV0aG9yIHtcbiAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgIH1cblxuICAgICAgLmVkaXRvcnMtcGFydCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICAuZWRpdG9ycyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0LXRvcC1hcnRpY2xlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG5cbiAgICAgIH1cblxuICAgICAgLnRvcC1hcnRpY2xlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIC50b3AtYXJ0aWNsZSB7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgLlxuXG4gICAgICAudG9wLWJvdHRvbS1hcnRpY2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICBcbiAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuXG4gICAgKX1cbiAgICBcblxuICAgIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICAgIGNvbnN0IHtxdWVyeX0gPSBjdHhcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPXRlY2gmYXBpLWtleT05Y0Q5QXhJbDJMamJoc0tCTVFFMTFEMXk1dkFqdXh6ZiZmYWNldF9maWVsZHM9c291cmNlJmZhY2V0PXRydWUmYmVnaW5fZGF0ZT0yMDIwMDEwMSZlbmRfZGF0ZT0yMDIwMDgzMVxuICAgICAgYCApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB7bmV3czogZGF0YS5yZXNwb25zZX1cbiAgICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})