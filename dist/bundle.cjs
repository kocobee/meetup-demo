/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _puzzlet_promptdx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @puzzlet/promptdx */ \"@puzzlet/promptdx\");\n/* harmony import */ var _puzzlet_promptdx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_puzzlet_promptdx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prompts_4_prompt_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prompts/4.prompt.mdx */ \"./prompts/4.prompt.mdx\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst run = async () => {\n  const props = { name: \"Emily\" };\n  const result = await (0,_puzzlet_promptdx__WEBPACK_IMPORTED_MODULE_0__.runInference)(_prompts_4_prompt_mdx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n  console.log(result);\n}\n;(0,_puzzlet_promptdx__WEBPACK_IMPORTED_MODULE_0__.registerDefaultPlugins)().then(run);\n\n//# sourceURL=webpack://meetup-demo/./src/index.js?");

/***/ }),

/***/ "./prompts/4.prompt.mdx":
/*!******************************!*\
  !*** ./prompts/4.prompt.mdx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"type\":\"root\",\"children\":[{\"type\":\"yaml\",\"value\":\"name: basic-prompt\\nmetadata:\\n  model:\\n    name: gpt-4o-mini\\ntest_settings:\\n  props:\\n    name: Bob\",\"position\":{\"start\":{\"line\":1,\"column\":1,\"offset\":0},\"end\":{\"line\":9,\"column\":4,\"offset\":105}}},{\"type\":\"paragraph\",\"children\":[{\"type\":\"mdxJsxTextElement\",\"name\":\"System\",\"attributes\":[],\"children\":[{\"type\":\"text\",\"value\":\"Your name is \",\"position\":{\"start\":{\"line\":10,\"column\":9,\"offset\":114},\"end\":{\"line\":10,\"column\":22,\"offset\":127}}},{\"type\":\"mdxTextExpression\",\"value\":\"props.name\",\"position\":{\"start\":{\"line\":10,\"column\":22,\"offset\":127},\"end\":{\"line\":10,\"column\":34,\"offset\":139}},\"data\":{\"estree\":{\"type\":\"Program\",\"start\":128,\"end\":138,\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"MemberExpression\",\"start\":128,\"end\":138,\"object\":{\"type\":\"Identifier\",\"start\":128,\"end\":133,\"name\":\"props\",\"loc\":{\"start\":{\"line\":10,\"column\":22,\"offset\":128},\"end\":{\"line\":10,\"column\":27,\"offset\":133}},\"range\":[128,133]},\"property\":{\"type\":\"Identifier\",\"start\":134,\"end\":138,\"name\":\"name\",\"loc\":{\"start\":{\"line\":10,\"column\":28,\"offset\":134},\"end\":{\"line\":10,\"column\":32,\"offset\":138}},\"range\":[134,138]},\"computed\":false,\"optional\":false,\"loc\":{\"start\":{\"line\":10,\"column\":22,\"offset\":128},\"end\":{\"line\":10,\"column\":32,\"offset\":138}},\"range\":[128,138]},\"start\":128,\"end\":138,\"loc\":{\"start\":{\"line\":10,\"column\":22,\"offset\":128},\"end\":{\"line\":10,\"column\":32,\"offset\":138}},\"range\":[128,138]}],\"sourceType\":\"module\",\"comments\":[],\"loc\":{\"start\":{\"line\":10,\"column\":22,\"offset\":128},\"end\":{\"line\":10,\"column\":32,\"offset\":138}},\"range\":[128,138]}}}],\"position\":{\"start\":{\"line\":10,\"column\":1,\"offset\":106},\"end\":{\"line\":10,\"column\":43,\"offset\":148}}},{\"type\":\"text\",\"value\":\"\\n\",\"position\":{\"start\":{\"line\":10,\"column\":43,\"offset\":148},\"end\":{\"line\":11,\"column\":1,\"offset\":149}}},{\"type\":\"mdxJsxTextElement\",\"name\":\"User\",\"attributes\":[],\"children\":[{\"type\":\"text\",\"value\":\"What is your name?\",\"position\":{\"start\":{\"line\":11,\"column\":7,\"offset\":155},\"end\":{\"line\":11,\"column\":25,\"offset\":173}}}],\"position\":{\"start\":{\"line\":11,\"column\":1,\"offset\":149},\"end\":{\"line\":11,\"column\":32,\"offset\":180}}}],\"position\":{\"start\":{\"line\":10,\"column\":1,\"offset\":106},\"end\":{\"line\":11,\"column\":32,\"offset\":180}}}],\"position\":{\"start\":{\"line\":1,\"column\":1,\"offset\":0},\"end\":{\"line\":11,\"column\":32,\"offset\":180}}});\n\n//# sourceURL=webpack://meetup-demo/./prompts/4.prompt.mdx?");

/***/ }),

/***/ "@puzzlet/promptdx":
/*!************************************!*\
  !*** external "@puzzlet/promptdx" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@puzzlet/promptdx");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;