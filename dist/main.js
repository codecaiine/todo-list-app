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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n  width: 100%;\\n  height: 100vh;\\n  padding: 10px;\\n  background: #f6f6f6;\\n}\\n\\n.wrapper-container {\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nh1 {\\n  font-size: 60px;\\n  margin-bottom: 30px;\\n  color: brown;\\n  text-align: center;\\n}\\n\\n.wrapper {\\n  background: #fff;\\n  max-width: 40%;\\n  width: 100%;\\n  margin: 120px auto;\\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);\\n}\\n\\n.todo-title,\\n#form,\\n.task {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #dadadc;\\n  min-height: 30px;\\n  max-height: 70px;\\n  width: 95%;\\n  margin: 0 auto;\\n  align-items: center;\\n  gap: 15px;\\n  padding: 0 5px;\\n}\\n\\nbutton,\\n.text,\\nlabel {\\n  appearance: none;\\n  outline: none;\\n  border: none;\\n  background-color: inherit;\\n}\\n\\nlabel {\\n  padding-right: 80px;\\n}\\n\\nlabel:hover {\\n  cursor: text;\\n}\\n\\n#todoList li label {\\n  color: #545862;\\n  font-size: 15px;\\n  font-weight: 400;\\n}\\n\\n.wrapper .top h2 {\\n  width: 100%;\\n  display: flex;\\n  height: 55px;\\n  padding: 20px 15px;\\n  font-size: 17px;\\n  color: #333;\\n  font-weight: 400;\\n  border-bottom: 1px solid #f2f2f2;\\n}\\n\\nbutton i {\\n  color: #c3c4c7;\\n  transition: 250ms ease-in-out;\\n}\\n\\nbutton i:hover {\\n  color: brown;\\n  cursor: pointer;\\n}\\n\\n.text {\\n  font-size: 14px;\\n  caret-color: red;\\n  color: #545862;\\n  width: 70%;\\n}\\n\\n.text::placeholder {\\n  font-style: italic;\\n  opacity: 0.5;\\n}\\n\\n#todoList {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n#todoList li {\\n  position: relative;\\n  list-style: none;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  padding: 13px 15px;\\n  cursor: default;\\n  overflow: hidden;\\n  word-wrap: break-word;\\n}\\n\\n#todoList li input[type=\\\"checkbox\\\"] {\\n  margin-right: 5px;\\n  outline: 0;\\n}\\n\\n#todoList .ellipsis i:hover {\\n  cursor: move;\\n}\\n\\n.clear-completed {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 auto;\\n  text-decoration: none;\\n  color: #000;\\n  opacity: 0.8;\\n  height: 30px;\\n  transition: 300ms;\\n  font-size: 15px;\\n}\\n\\n.clear-completed:hover {\\n  text-decoration: underline;\\n  opacity: 1;\\n  color: blue;\\n}\\n\\n.box:checked + .form-label {\\n  text-decoration: line-through;\\n  opacity: 0.6;\\n}\\n\\n.wrapper footer {\\n  display: flex;\\n  height: 50px;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #cdced0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clearTodos.js":
/*!***************************!*\
  !*** ./src/clearTodos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTodos.js */ \"./src/showTodos.js\");\n/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage.js */ \"./src/setLocalStorage.js\");\n/* harmony import */ var _getTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTodos.js */ \"./src/getTodos.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n// eslint-disable-next-line import/no-cycle\n\n\nconst removeCompletedTasks = () => {\n  let tasks = (0,_getTodos_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n  tasks = tasks.filter((item) => item.completed === false);\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);\n  (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(tasks);\n  (0,_showTodos_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeCompletedTasks);\n\n//# sourceURL=webpack://todo-list-app/./src/clearTodos.js?");

/***/ }),

/***/ "./src/getTodos.js":
/*!*************************!*\
  !*** ./src/getTodos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTasksFromLocalStorage = () => {\n  let myTasks;\n  if (localStorage.getItem('allTasks') === null) {\n    myTasks = [];\n  } else {\n    myTasks = JSON.parse(localStorage.getItem('allTasks'));\n  }\n  return myTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasksFromLocalStorage);\n\n//# sourceURL=webpack://todo-list-app/./src/getTodos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _showTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showTodos.js */ \"./src/showTodos.js\");\n/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setLocalStorage.js */ \"./src/setLocalStorage.js\");\n/* harmony import */ var _getTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTodos.js */ \"./src/getTodos.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove.js */ \"./src/remove.js\");\n/* harmony import */ var _clearTodos_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearTodos.js */ \"./src/clearTodos.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\n\nconst input = document.querySelector('.text');\nconst form = document.getElementById('form');\nconst removeCompleted = document.querySelector('.clear-completed');\n\nfunction clearInput() {\n  input.value = '';\n}\n\nconst addTodoTask = (e) => {\n  const tasks = (0,_getTodos_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n  e.preventDefault();\n\n  if (input.value === '') {\n    return;\n  }\n\n  const todo = {\n    description: input.value,\n    completed: false,\n    index: tasks.length + 1,\n  };\n\n  clearInput();\n  (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveTodoInLocalStorage)(todo);\n  (0,_showTodos_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n};\n\nconst setIndex = (tasks) => {\n  for (let i = 0; i < tasks.length; i += 1) {\n    tasks[i].index = i + 1;\n  }\n};\n\nform.addEventListener('submit', addTodoTask);\n\nconst myTodoList = document.getElementById('todoList');\nmyTodoList.addEventListener('click', (event) => {\n  if (event.target.classList.contains('delete-task')) {\n    const listKey = event.target.parentElement.parentElement.dataset.key;\n    (0,_remove_js__WEBPACK_IMPORTED_MODULE_4__.default)(listKey);\n  }\n});\nremoveCompleted.addEventListener('click', _clearTodos_js__WEBPACK_IMPORTED_MODULE_5__.default);\n\n(0,_showTodos_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setIndex);\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTodos.js */ \"./src/showTodos.js\");\n/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage.js */ \"./src/setLocalStorage.js\");\n/* harmony import */ var _getTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTodos.js */ \"./src/getTodos.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n// eslint-disable-next-line import/no-cycle\n\n\nconst removeTodo = (key) => {\n  const tasks = (0,_getTodos_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n  tasks.splice((key - 1), 1);\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);\n  (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(tasks);\n  (0,_showTodos_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTodo);\n\n//# sourceURL=webpack://todo-list-app/./src/remove.js?");

/***/ }),

/***/ "./src/setLocalStorage.js":
/*!********************************!*\
  !*** ./src/setLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage),\n/* harmony export */   \"saveTodoInLocalStorage\": () => (/* binding */ saveTodoInLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _getTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTodos.js */ \"./src/getTodos.js\");\n\n\nconst setLocalStorage = (lists) => {\n  localStorage.setItem('allTasks', JSON.stringify(lists));\n};\n\nconst saveTodoInLocalStorage = (item) => {\n  const tasks = (0,_getTodos_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  tasks.push(item);\n  setLocalStorage(tasks);\n};\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/setLocalStorage.js?");

/***/ }),

/***/ "./src/showTodos.js":
/*!**************************!*\
  !*** ./src/showTodos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTodos.js */ \"./src/getTodos.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setLocalStorage.js */ \"./src/setLocalStorage.js\");\n\n\n\n\nconst myTodoList = document.getElementById('todoList');\nconst showTasks = () => {\n  myTodoList.innerHTML = '';\n  const tasks = (0,_getTodos_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  for (let i = 0; i < tasks.length; i += 1) {\n    const holder = document.createElement('div');\n    holder.innerHTML += ` <li class=\"task\" id=\"${tasks[i].index}\" data-key=\"${tasks[i].index}\" draggable=\"true\">\n    <div>\n      <input id=\"box-${i}\" type=\"checkbox\" class=\"box\" id=\"list-box\" name=\"list-box\">\n      <label id=\"label-${i}\" class=\"form-label\">${tasks[i].description}</label>\n    </div>\n  \n    <button id=\"${tasks[i].index}\" class=\"delete\"><i class='fa fa-trash delete-task'></i></button>\n  </li>`;\n\n    while (holder.firstChild) {\n      myTodoList.appendChild(holder.firstChild);\n    }\n\n    const label = document.getElementById(`label-${i}`);\n    const box = document.getElementById(`box-${i}`);\n\n    box.checked = tasks[i].completed;\n    box.addEventListener('change', (event) => {\n      (0,_status_js__WEBPACK_IMPORTED_MODULE_1__.default)(event.target, tasks[i]);\n      (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(tasks);\n    });\n\n    label.addEventListener('dblclick', () => {\n      label.setAttribute('contenteditable', 'true');\n    });\n\n    label.addEventListener('focus', () => {\n      label.parentElement.parentElement.style.backgroundColor = '#dadadc';\n    });\n\n    label.addEventListener('blur', () => {\n      label.parentElement.parentElement.style.backgroundColor = '#fff';\n      tasks[i].description = label.innerHTML;\n      (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(tasks);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTasks);\n\n//# sourceURL=webpack://todo-list-app/./src/showTodos.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateStaus = (check, todo) => {\n  todo.completed = check.checked;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStaus);\n\n//# sourceURL=webpack://todo-list-app/./src/status.js?");

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
/******/ 			id: moduleId,
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;