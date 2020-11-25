webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/jamie/Documents/morning-news/pages/index.js\";\n\n\n\n\n\nfunction Index(_ref) {\n  var news = _ref.news;\n  var image = news.docs.map(function (art) {\n    if (art.multimedia[0]) {\n      return art.multimedia[0].url;\n    }\n  });\n  var text = news.docs.map(function (art) {\n    if (art.headline) {\n      return art.headline.main;\n    }\n  });\n  var headline = news.docs.map(function (art) {\n    if (art.headline) {\n      return art.headline.main;\n    }\n  });\n  var author = news.docs.map(function (art) {\n    if (art.byline) {\n      return art.byline.original;\n    }\n  });\n  console.log(text);\n  console.log('news', news);\n  console.log('img', image[1]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3370782053\" + \" \" + 'home-container',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n        className: \"jsx-3370782053\" + \" \" + 'top-container',\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3370782053\" + \" \" + 'editors-part',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            className: \"jsx-3370782053\" + \" \" + 'editor-pick',\n            children: \"Editor's Pick\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\",\n            children: text[4]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\",\n            children: text[5]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\",\n            children: text[6]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\",\n            children: text[7]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\",\n            children: text[3]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\",\n            children: text[3]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3370782053\",\n            children: text[3]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3370782053\" + \" \" + 'right-top-article',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3370782053\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n              src: \"https://static01.nyt.com/\".concat(image[3]),\n              alt: \"top-article\",\n              className: \"jsx-3370782053\" + \" \" + 'top-image'\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: \"jsx-3370782053\",\n              children: text[3]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3370782053\" + \" \" + 'top-bottom-articles',\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3370782053\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[0]),\n                alt: \"top-article\",\n                className: \"jsx-3370782053\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 13\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-3370782053\",\n                children: text[0]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3370782053\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: \"https://static01.nyt.com/\".concat(image[1]),\n                alt: \"top-article\",\n                className: \"jsx-3370782053\" + \" \" + 'top-image'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: \"jsx-3370782053\",\n                children: text[1]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        id: \"3370782053\",\n        children: \".top-image.jsx-3370782053{width:100px;}.home-container.jsx-3370782053{min-height:90vh;height:100%;background-color:whitesmoke;}.top-container.jsx-3370782053{margin:0 auto;padding-top:100px;width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:1000px){.top-container.jsx-3370782053{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.editor-pick.jsx-3370782053{margin:0;color:#0d42a2;font-size:2rem;font-weight:800;}.editors-part.jsx-3370782053{width:40%;height:500px;border:solid black 1px;}.editors.jsx-3370782053{margin:0;}.right-top-article.jsx-3370782053{width:60%;height:500px;border:solid black 1px;}.top-bottom-articles.jsx-3370782053{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZ0IsQUFJbUIsQUFHTSxBQU1GLEFBVUMsQUFNTixBQU9DLEFBT0QsQUFJQyxBQU9HLFNBeEJDLEFBY2hCLENBUGUsQUFXQSxFQTNDakIsRUFTc0IsRUFOTixPQXVCRyxBQU9RLEFBV0EsS0F4Q0ssSUFNbEIsTUFpQk0sSUFoQkgsSUF3QmYsQUFXQSxRQWxCRCxFQXZCQyxrQkFjMEIsQUErQjFCLDBDQXRDZ0Msb0NBUTlCLCtFQU5GIiwiZmlsZSI6Ii9Vc2Vycy9qYW1pZS9Eb2N1bWVudHMvbW9ybmluZy1uZXdzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe25ld3N9KSB7XG5cbiBjb25zdCBpbWFnZSA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gICAgIGlmIChhcnQubXVsdGltZWRpYVswXSkge1xuICAgICAgIFxuICAgICAgcmV0dXJuIGFydC5tdWx0aW1lZGlhWzBdLnVybCB9XG59KVxuXG5jb25zdCB0ZXh0ID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5oZWFkbGluZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5oZWFkbGluZS5tYWluIH1cbn0pXG5cbmNvbnN0IGhlYWRsaW5lID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5oZWFkbGluZSkge1xuICAgIFxuICAgcmV0dXJuIGFydC5oZWFkbGluZS5tYWluIH1cbn0pXG5cbmNvbnN0IGF1dGhvciA9ICBuZXdzLmRvY3MubWFwKGFydCA9PiB7XG4gIGlmIChhcnQuYnlsaW5lKSB7XG4gICAgXG4gICByZXR1cm4gYXJ0LmJ5bGluZS5vcmlnaW5hbCB9XG59KVxuXG5cbmNvbnNvbGUubG9nKHRleHQpXG5cbmNvbnNvbGUubG9nKCduZXdzJywgbmV3cylcbmNvbnNvbGUubG9nKCdpbWcnLGltYWdlWzFdKVxuICAgIHJldHVybiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGFpbmVyJz5cbiAgICB7LyogPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhPkdvIHRvIGFib3V0PC9hPlxuICAgIDwvTGluaz4gKi99XG4gICAgey8qIDxkaXY+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8cD5XZWxjb21lPC9wPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RvcC1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VkaXRvcnMtcGFydCc+XG4gICAgICA8aDQgY2xhc3NOYW1lPSdlZGl0b3ItcGljayc+RWRpdG9yJ3MgUGljazwvaDQ+XG4gICAgICA8cD57dGV4dFs0XX08L3A+XG4gICAgICA8cD48L3A+XG4gICAgICA8cD57dGV4dFs1XX08L3A+XG4gICAgICA8cD57dGV4dFs2XX08L3A+XG4gICAgICA8cD57dGV4dFs3XX08L3A+XG4gICAgICA8cD57dGV4dFszXX08L3A+XG4gICAgICA8cD57dGV4dFszXX08L3A+XG4gICAgICA8cD57dGV4dFszXX08L3A+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LXRvcC1hcnRpY2xlJz5cbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7aW1hZ2VbM119YH0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cbiAgICAgICAgICA8cD57dGV4dFszXX08L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcC1ib3R0b20tYXJ0aWNsZXMnPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndG9wLWltYWdlJyBzcmM9e2BodHRwczovL3N0YXRpYzAxLm55dC5jb20vJHtpbWFnZVswXX1gfSBhbHQ9J3RvcC1hcnRpY2xlJyAvPlxuICAgICAgICAgICAgPHA+e3RleHRbMF19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcC1pbWFnZScgc3JjPXtgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7aW1hZ2VbMV19YH0gYWx0PSd0b3AtYXJ0aWNsZScgLz5cbiAgICAgICAgICA8cD57dGV4dFsxXX08L3A+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnRvcC1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgICAgLmhvbWUtY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogOTB2aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgfVxuXG4gICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuZWRpdG9yLXBpY2sge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjMGQ0MmEyO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgIH1cblxuICAgICAgLmVkaXRvcnMtcGFydCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuXG4gICAgICB9XG5cbiAgICAgIC5lZGl0b3JzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAucmlnaHQtdG9wLWFydGljbGUge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcblxuICAgICAgfVxuXG4gICAgICAudG9wLWJvdHRvbS1hcnRpY2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICBcbiAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuXG4gICAgKX1cbiAgICBcblxuICAgIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICAgIGNvbnN0IHtxdWVyeX0gPSBjdHhcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPXRlY2gmYXBpLWtleT05Y0Q5QXhJbDJMamJoc0tCTVFFMTFEMXk1dkFqdXh6ZiZmYWNldF9maWVsZHM9c291cmNlJmZhY2V0PXRydWUmYmVnaW5fZGF0ZT0yMDIwMDEwMSZlbmRfZGF0ZT0yMDIwMDgzMVxuICAgICAgYCApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB7bmV3czogZGF0YS5yZXNwb25zZX1cbiAgICB9XG4iXX0= */\\n/*@ sourceURL=/Users/jamie/Documents/morning-news/pages/index.js */\"\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 3\n  }, this);\n}\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_jamie_Documents_morning_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var query, res, data;\n    return _Users_jamie_Documents_morning_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = ctx.query;\n            _context.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(\"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831\\n      \");\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              news: data.response\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm5ld3MiLCJpbWFnZSIsImRvY3MiLCJtYXAiLCJhcnQiLCJtdWx0aW1lZGlhIiwidXJsIiwidGV4dCIsImhlYWRsaW5lIiwibWFpbiIsImF1dGhvciIsImJ5bGluZSIsIm9yaWdpbmFsIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLEtBQVQsT0FBdUI7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFFckMsTUFBTUMsS0FBSyxHQUFJRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUFDLEdBQUcsRUFBSTtBQUNoQyxRQUFJQSxHQUFHLENBQUNDLFVBQUosQ0FBZSxDQUFmLENBQUosRUFBdUI7QUFFdEIsYUFBT0QsR0FBRyxDQUFDQyxVQUFKLENBQWUsQ0FBZixFQUFrQkMsR0FBekI7QUFBOEI7QUFDbkMsR0FKZSxDQUFmO0FBTUQsTUFBTUMsSUFBSSxHQUFJUCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUFDLEdBQUcsRUFBSTtBQUNqQyxRQUFJQSxHQUFHLENBQUNJLFFBQVIsRUFBa0I7QUFFakIsYUFBT0osR0FBRyxDQUFDSSxRQUFKLENBQWFDLElBQXBCO0FBQTBCO0FBQzVCLEdBSmEsQ0FBZDtBQU1BLE1BQU1ELFFBQVEsR0FBSVIsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFBQyxHQUFHLEVBQUk7QUFDckMsUUFBSUEsR0FBRyxDQUFDSSxRQUFSLEVBQWtCO0FBRWpCLGFBQU9KLEdBQUcsQ0FBQ0ksUUFBSixDQUFhQyxJQUFwQjtBQUEwQjtBQUM1QixHQUppQixD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QUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUF3R0U7S0F2SWtCUixLOztBQTBJcEJBLEtBQUssQ0FBQ2dCLGVBQU47QUFBQSwrUkFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLGlCQURlLEdBQ05ELEdBRE0sQ0FDZkMsS0FEZTtBQUFBO0FBQUEsbUJBRUpDLHlEQUFLLHlMQUZEOztBQUFBO0FBRWhCQyxlQUZnQjtBQUFBO0FBQUEsbUJBSUhBLEdBQUcsQ0FBQ0MsSUFBSixFQUpHOztBQUFBO0FBSWhCQyxnQkFKZ0I7QUFBQSw2Q0FNZjtBQUFDckIsa0JBQUksRUFBRXFCLElBQUksQ0FBQ0M7QUFBWixhQU5lOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7bmV3c30pIHtcblxuIGNvbnN0IGltYWdlID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgICAgaWYgKGFydC5tdWx0aW1lZGlhWzBdKSB7XG4gICAgICAgXG4gICAgICByZXR1cm4gYXJ0Lm11bHRpbWVkaWFbMF0udXJsIH1cbn0pXG5cbmNvbnN0IHRleHQgPSAgbmV3cy5kb2NzLm1hcChhcnQgPT4ge1xuICBpZiAoYXJ0LmhlYWRsaW5lKSB7XG4gICAgXG4gICByZXR1cm4gYXJ0LmhlYWRsaW5lLm1haW4gfVxufSlcblxuY29uc3QgaGVhZGxpbmUgPSAgbmV3cy5kb2NzLm1hcChhcnQgPT4ge1xuICBpZiAoYXJ0LmhlYWRsaW5lKSB7XG4gICAgXG4gICByZXR1cm4gYXJ0LmhlYWRsaW5lLm1haW4gfVxufSlcblxuY29uc3QgYXV0aG9yID0gIG5ld3MuZG9jcy5tYXAoYXJ0ID0+IHtcbiAgaWYgKGFydC5ieWxpbmUpIHtcbiAgICBcbiAgIHJldHVybiBhcnQuYnlsaW5lLm9yaWdpbmFsIH1cbn0pXG5cblxuY29uc29sZS5sb2codGV4dClcblxuY29uc29sZS5sb2coJ25ld3MnLCBuZXdzKVxuY29uc29sZS5sb2coJ2ltZycsaW1hZ2VbMV0pXG4gICAgcmV0dXJuIChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250YWluZXInPlxuICAgIHsvKiA8TGluayBocmVmPScvYWJvdXQnPlxuICAgICAgPGE+R28gdG8gYWJvdXQ8L2E+XG4gICAgPC9MaW5rPiAqL31cbiAgICB7LyogPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDxwPldlbGNvbWU8L3A+XG4gICAgPC9kaXY+ICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9wLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdG9ycy1wYXJ0Jz5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2VkaXRvci1waWNrJz5FZGl0b3IncyBQaWNrPC9oND5cbiAgICAgIDxwPnt0ZXh0WzRdfTwvcD5cbiAgICAgIDxwPjwvcD5cbiAgICAgIDxwPnt0ZXh0WzVdfTwvcD5cbiAgICAgIDxwPnt0ZXh0WzZdfTwvcD5cbiAgICAgIDxwPnt0ZXh0WzddfTwvcD5cbiAgICAgIDxwPnt0ZXh0WzNdfTwvcD5cbiAgICAgIDxwPnt0ZXh0WzNdfTwvcD5cbiAgICAgIDxwPnt0ZXh0WzNdfTwvcD5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtdG9wLWFydGljbGUnPlxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndG9wLWltYWdlJyBzcmM9e2BodHRwczovL3N0YXRpYzAxLm55dC5jb20vJHtpbWFnZVszXX1gfSBhbHQ9J3RvcC1hcnRpY2xlJyAvPlxuICAgICAgICAgIDxwPnt0ZXh0WzNdfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWJvdHRvbS1hcnRpY2xlcyc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3AtaW1hZ2UnIHNyYz17YGh0dHBzOi8vc3RhdGljMDEubnl0LmNvbS8ke2ltYWdlWzBdfWB9IGFsdD0ndG9wLWFydGljbGUnIC8+XG4gICAgICAgICAgICA8cD57dGV4dFswXX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndG9wLWltYWdlJyBzcmM9e2BodHRwczovL3N0YXRpYzAxLm55dC5jb20vJHtpbWFnZVsxXX1gfSBhbHQ9J3RvcC1hcnRpY2xlJyAvPlxuICAgICAgICAgIDxwPnt0ZXh0WzFdfTwvcD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAudG9wLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB9XG5cbiAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5lZGl0b3ItcGljayB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwZDQyYTI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgfVxuXG4gICAgICAuZWRpdG9ycy1wYXJ0IHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG5cbiAgICAgIH1cblxuICAgICAgLmVkaXRvcnMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodC10b3AtYXJ0aWNsZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuXG4gICAgICB9XG5cbiAgICAgIC50b3AtYm90dG9tLWFydGljbGVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgIFxuICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgPC9MYXlvdXQ+XG5cbiAgICApfVxuICAgIFxuXG4gICAgSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgY29uc3Qge3F1ZXJ5fSA9IGN0eFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uP3E9dGVjaCZhcGkta2V5PTljRDlBeElsMkxqYmhzS0JNUUUxMUQxeTV2QWp1eHpmJmZhY2V0X2ZpZWxkcz1zb3VyY2UmZmFjZXQ9dHJ1ZSZiZWdpbl9kYXRlPTIwMjAwMTAxJmVuZF9kYXRlPTIwMjAwODMxXG4gICAgICBgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHtuZXdzOiBkYXRhLnJlc3BvbnNlfVxuICAgIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})