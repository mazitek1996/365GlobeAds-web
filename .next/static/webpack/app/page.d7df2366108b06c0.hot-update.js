"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/index/home/hero/ipMessage.tsx":
/*!**********************************************************!*\
  !*** ./src/app/components/index/home/hero/ipMessage.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ipMessage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_getLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/getLocation */ \"(app-pages-browser)/./src/app/components/getLocation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ipMessage() {\n    _s();\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchLocation = async ()=>{\n            const location = await (0,_app_components_getLocation__WEBPACK_IMPORTED_MODULE_2__.getLocation)();\n            if (location && location.city) {\n                setCity(location.city);\n            }\n        };\n        fetchLocation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: city && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"lg:relative -top-[6rem] text-base md:text-lg text-gray-400 mt-4 mb-[3rem]\",\n                children: [\n                    \"365GlobeAds is determined to offer you top-notch service in \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-indigo-400\",\n                        children: city\n                    }, void 0, false, {\n                        fileName: \"/home/mmeli/Documents/amon work/365GlobeAds/src/app/components/index/home/hero/ipMessage.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 71\n                    }, this),\n                    \".Our team of expert marketers and creative designers are dedicated to delivering exceptional digital marketing services that elevate your brand and drive success. We don't just offer services, we create strategies that transform your business.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mmeli/Documents/amon work/365GlobeAds/src/app/components/index/home/hero/ipMessage.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/mmeli/Documents/amon work/365GlobeAds/src/app/components/index/home/hero/ipMessage.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mmeli/Documents/amon work/365GlobeAds/src/app/components/index/home/hero/ipMessage.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ipMessage, \"fTqoKiweNg91JjuQTJL/E7z+zoY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC9ob21lL2hlcm8vaXBNZXNzYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSW1EO0FBQ1E7QUFFNUMsU0FBU0k7O0lBRXRCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxnQkFBZ0I7WUFDcEIsTUFBTUMsV0FBVyxNQUFNTCx3RUFBV0E7WUFDbEMsSUFBSUssWUFBWUEsU0FBU0gsSUFBSSxFQUFFO2dCQUM3QkMsUUFBUUUsU0FBU0gsSUFBSTtZQUN2QjtRQUNGO1FBRUFFO0lBQ0YsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNFO2tCQUFLSixzQkFDSiw4REFBQ0k7c0JBQ0MsNEVBQUNDO2dCQUFHQyxXQUFVOztvQkFBNEU7a0NBQzVCLDhEQUFDQzt3QkFBS0QsV0FBVTtrQ0FBbUJOOzs7Ozs7b0JBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJIO0dBNUJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2luZGV4L2hvbWUvaGVyby9pcE1lc3NhZ2UudHN4P2IyZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9nZXRMb2NhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpcE1lc3NhZ2UoKSB7XG5cbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaExvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCBnZXRMb2NhdGlvbigpO1xuICAgICAgaWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uLmNpdHkpIHtcbiAgICAgICAgc2V0Q2l0eShsb2NhdGlvbi5jaXR5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hMb2NhdGlvbigpO1xuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+e2NpdHkgJiYgKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJsZzpyZWxhdGl2ZSAtdG9wLVs2cmVtXSB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyB0ZXh0LWdyYXktNDAwIG10LTQgbWItWzNyZW1dXCI+XG4gICAgICAgICAgMzY1R2xvYmVBZHMgaXMgZGV0ZXJtaW5lZCB0byBvZmZlciB5b3UgdG9wLW5vdGNoIHNlcnZpY2UgaW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwXCI+e2NpdHl9PC9zcGFuPi5PdXIgdGVhbSBvZiBleHBlcnQgbWFya2V0ZXJzIGFuZCBjcmVhdGl2ZSBkZXNpZ25lcnMgYXJlIGRlZGljYXRlZFxudG8gZGVsaXZlcmluZyBleGNlcHRpb25hbCBkaWdpdGFsIG1hcmtldGluZyBzZXJ2aWNlcyB0aGF0IGVsZXZhdGVcbnlvdXIgYnJhbmQgYW5kIGRyaXZlIHN1Y2Nlc3MuIFdlIGRvbid0IGp1c3Qgb2ZmZXIgc2VydmljZXMsIHdlXG5jcmVhdGUgc3RyYXRlZ2llcyB0aGF0IHRyYW5zZm9ybSB5b3VyIGJ1c2luZXNzLlxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgKX08L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRMb2NhdGlvbiIsImlwTWVzc2FnZSIsImNpdHkiLCJzZXRDaXR5IiwiZmV0Y2hMb2NhdGlvbiIsImxvY2F0aW9uIiwiZGl2IiwiaDMiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/index/home/hero/ipMessage.tsx\n"));

/***/ })

});