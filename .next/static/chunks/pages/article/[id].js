/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/article/[id]"],{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar article1 = function(param) {\n    var article = param.article;\n    // const router = useRouter();\n    // const { id } = router.query;  //article id\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Silvia\\\\Desktop\\\\next_app\\\\next-app\\\\pages\\\\article\\\\[id]\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 12\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Silvia\\\\Desktop\\\\next_app\\\\next-app\\\\pages\\\\article\\\\[id]\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: article.title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Silvia\\\\Desktop\\\\next_app\\\\next-app\\\\pages\\\\article\\\\[id]\\\\index.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: article.body\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Silvia\\\\Desktop\\\\next_app\\\\next-app\\\\pages\\\\article\\\\[id]\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Silvia\\\\Desktop\\\\next_app\\\\next-app\\\\pages\\\\article\\\\[id]\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: \"Go back\"\n            })\n        ]\n    }));\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (article1);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1g7O0FBRTVCLEdBQUssQ0FBQ0UsUUFBTyxHQUFHLFFBQVEsUUFBUyxDQUFDO1FBQWZBLE9BQU8sU0FBUEEsT0FBTztJQUN0QixFQUE4QjtJQUM5QixFQUE2QztJQUU3QyxNQUFNLHVFQUFFQyxDQUFHOzs7Ozs7OztpRkFDTkMsQ0FBRTs7Ozs7OzswQkFBRUYsT0FBTyxDQUFDRyxLQUFLOztpRkFDakJDLENBQUM7Ozs7Ozs7MEJBQUVKLE9BQU8sQ0FBQ0ssSUFBSTs7aUZBQ2ZDLENBQUU7Ozs7Ozs7O2lGQUNGUCxrREFBSTtnQkFBQ1EsSUFBSSxFQUFDLENBQUc7Ozs7Ozs7MEJBQUUsQ0FBTzs7OztBQUUvQixDQUFDOztBQWdERCwrREFBZVAsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanM/ZmY3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgYXJ0aWNsZSA9ICh7IGFydGljbGUgfSkgPT4ge1xyXG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAvLyBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7ICAvL2FydGljbGUgaWRcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8aDE+e2FydGljbGUudGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57YXJ0aWNsZS5ib2R5fTwvcD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiID5HbyBiYWNrPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbi8vIFNlcnZlci1TaWRlLVJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4geyAgLy9mZXRjaCBkYXRhIG9uIGVhY2ggcmVxdWVzdCAhXHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7Y29udGV4dC5wYXJhbXMuaWR9YCk7XHJcblxyXG4vLyAgICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIGFydGljbGVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBTdGF0aWMgR2VuZXJhdGlvbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7ICAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7Y29udGV4dC5wYXJhbXMuaWR9YCk7XHJcblxyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYXJ0aWNsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBsZXQgcGF0aHMgPSBkYXRhLm1hcChhcnRpY2xlID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBhcnRpY2xlLmlkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxpbmsiLCJhcnRpY2xlIiwiZGl2IiwiaDEiLCJ0aXRsZSIsInAiLCJib2R5IiwiYnIiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article/[id]/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Farticle%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CSilvia%5CDesktop%5Cnext_app%5Cnext-app%5Cpages%5Carticle%5C%5Bid%5D%5Cindex.js!":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Farticle%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CSilvia%5CDesktop%5Cnext_app%5Cnext-app%5Cpages%5Carticle%5C%5Bid%5D%5Cindex.js! ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/article/[id]\",\n      function () {\n        return __webpack_require__(/*! ./pages/article/[id]/index.js */ \"./pages/article/[id]/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/article/[id]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZhcnRpY2xlJTJGJTVCaWQlNUQmYWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNTaWx2aWElNUNEZXNrdG9wJTVDbmV4dF9hcHAlNUNuZXh0LWFwcCU1Q3BhZ2VzJTVDYXJ0aWNsZSU1QyU1QmlkJTVEJTVDaW5kZXguanMhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0VBQStCO0FBQ3REO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz82ZTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvYXJ0aWNsZS9baWRdXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2FydGljbGUvW2lkXVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Farticle%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CSilvia%5CDesktop%5Cnext_app%5Cnext-app%5Cpages%5Carticle%5C%5Bid%5D%5Cindex.js!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Farticle%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5CSilvia%5CDesktop%5Cnext_app%5Cnext-app%5Cpages%5Carticle%5C%5Bid%5D%5Cindex.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);