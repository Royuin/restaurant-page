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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/Labrada-VariableFont_wght.ttf */ \"./src/assets/fonts/Labrada-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/imgs/ramen-shop.jpg */ \"./src/assets/imgs/ramen-shop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --off-white: #ccc;\\n  --main-color: #ff6b63;\\n  --pale-main-color: #ff9691;\\n  --transparent-black: rgba(5, 5, 5, 0.75);\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: inherit;\\n}\\n\\n@font-face {\\n  font-family: 'main font';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n  background-color: #222;\\n  color: var(--off-white);\\n  line-height: 1.5;\\n  font-family: 'main font', sans-serif;\\n}\\n\\n#content {\\n  display: flex;\\n  text-align: center;\\n  flex-direction: column;\\n  min-height: 100vh;\\n}\\n\\nheader {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  width: 100%;\\n  height: clamp(250px, 40vw, 1000px);\\n  margin-bottom: 5vw;\\n}\\n\\nnav {\\n  font-size: clamp(20px, 3vw, 40px);\\n  background-color: var(--transparent-black);\\n  padding: 10px 20px;\\n  color: var(--main-color);\\n  width: 100%;\\n}\\n\\nnav > a {\\n  color: var(--pale-main-color);\\n  margin: 0 10px;\\n}\\n\\nnav > a:hover {\\n  color: var(--main-color);\\n  border-bottom: var(--main-color) solid 2px;\\n  cursor: pointer;\\n}\\n\\n.menu-nav,\\n.contact-nav {\\n  font-size: clamp(18px, 2vw, 40px);\\n  background-color: var(--transparent-black);\\n  padding: 10px 20px;\\n  color: var(--main-color);\\n  width: 100%;\\n}\\n\\n.main-menu {\\n  margin-top: 10%;\\n  display: grid;\\n  grid-template-columns: 35vw 35vw;\\n  grid-template-rows: 1fr;\\n  gap: 3vw;\\n  margin-bottom: 5%;\\n  place-content: center;\\n  place-items: center;\\n}\\n\\n.card {\\n  background-color: var(--transparent-black);\\n  color: var(--main-color);\\n  font-size: 2.5rem;\\n  width: 35vw;\\n  height: 35vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  padding: 0 5%;\\n  overflow: auto;\\n  min-width: 0;\\n  min-height: 0;\\n}\\n\\n.card > p {\\n  font-size: clamp(17px, 3vw, 75px);\\n}\\n\\n.card > img {\\n  height: 65%;\\n}\\n\\n.quote {\\n  margin-top: 5vw;\\n  font-size: clamp(19px, 2vw, 45px);\\n  background-color: var(--transparent-black);\\n  padding: 10px 5% 10px 5%;\\n  color: var(--off-white);\\n  white-space: pre-line;\\n}\\n\\np {\\n  padding: 1% 15% 3% 15%;\\n  font-size: clamp(16px, 2vw, 20px);\\n}\\n\\na {\\n  color: var(--main-color);\\n}\\n\\nfooter {\\n  background-color: var(--transparent-black);\\n  margin-top: auto;\\n  width: 100%;\\n  padding: 15px;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n  width: 50%;\\n  margin-bottom: 15%;\\n  padding: 25px;\\n  margin-top: 10px;\\n}\\n\\n.contact-main {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.contact-main > h2 {\\n  font-size: clamp(23px, 3.5vw, 35px);\\n}\\n\\n.contact-main > h3 {\\n  font-size: clamp(20px, 3vw, 30px);\\n}\\n\\n.contact-heading {\\n  margin-top: 15px;\\n  border-bottom: 2px solid var(--main-color);\\n  margin-bottom: 5%;\\n}\\n\\nh3 {\\n  margin-top: 15px;\\n}\\n\\n@media (max-width: 1000px) {\\n  .main-menu {\\n    display: grid;\\n    row-gap: 2rem;\\n    grid-template-columns: 1fr;\\n  }\\n\\n  .card {\\n    width: 65vw;\\n    height: 65vw;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContactPage\": () => (/* binding */ makeContactPage)\n/* harmony export */ });\nfunction makeContactHeader() {\n  const content = document.createElement('div');\n  content.setAttribute('id', 'content');\n  document.body.appendChild(content);\n\n  const nav = document.createElement('nav');\n  nav.classList = 'contact-nav';\n  content.appendChild(nav);\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Roku Sunset';\n  nav.appendChild(h1);\n\n  const homeLink = document.createElement('a');\n  homeLink.textContent = 'Home';\n  homeLink.classList = 'home-link';\n  nav.appendChild(homeLink);\n\n  const menuLink = document.createElement('a');\n  menuLink.textContent = 'Menu';\n  menuLink.classList = 'menu-link';\n  nav.appendChild(menuLink);\n\n  const contactLink = document.createElement('a');\n  contactLink.textContent = 'Contact';\n  contactLink.classList = 'contact-link';\n  nav.appendChild(contactLink);\n}\n\nfunction makeMainContent() {\n  const contentMain = document.createElement('main');\n  contentMain.classList = 'contact-main';\n  content.appendChild(contentMain);\n\n  const contactHeading = document.createElement('h2');\n  contactHeading.textContent = 'Contact Us';\n  contactHeading.classList = 'contact-heading';\n  contentMain.appendChild(contactHeading);\n\n  const locationHeading = document.createElement('h3');\n  locationHeading.textContent = 'Location';\n  contentMain.appendChild(locationHeading);\n  const location = document.createElement('p');\n  location.textContent = '123 Fake Location Blvd. State, Country 12345';\n  contentMain.appendChild(location);\n\n  const hoursHeading = document.createElement('h3');\n  hoursHeading.textContent = 'Hours';\n  contentMain.appendChild(hoursHeading);\n  const hours = document.createElement('p');\n  hours.textContent =\n    'Monday, Tuesday, Wednesday, Thursday: \\n 9 am - 10 pm \\n Friday, Saturday, Sunday: 10 am - 12 pm';\n  contentMain.appendChild(hours);\n\n  const messageUs = document.createElement('h3');\n  messageUs.textContent = 'Message Us';\n  contentMain.appendChild(messageUs);\n\n  const form = document.createElement('form');\n  contentMain.appendChild(form);\n\n  const nameLabel = document.createElement('label');\n  nameLabel.for = 'name';\n  nameLabel.textContent = 'Name: ';\n  form.appendChild(nameLabel);\n  const nameInput = document.createElement('input');\n  nameInput.type = 'text';\n  nameInput.id = 'name';\n  nameInput.name = 'name';\n  form.appendChild(nameInput);\n\n  const emailLabel = document.createElement('label');\n  emailLabel.for = 'email';\n  emailLabel.textContent = 'Email: ';\n  form.appendChild(emailLabel);\n  const emailInput = document.createElement('input');\n  emailInput.type = 'email';\n  emailInput.name = 'email';\n  emailInput.id = 'email';\n  form.appendChild(emailInput);\n\n  const textAreaLabel = document.createElement('label');\n  textAreaLabel.for = 'message';\n  textAreaLabel.textContent = 'Write your message: ';\n  form.appendChild(textAreaLabel);\n  const textArea = document.createElement('textarea');\n  textArea.id = 'message';\n  textArea.name = 'message';\n  form.appendChild(textArea);\n\n  const submitBtn = document.createElement('button');\n  submitBtn.type = 'submit';\n  submitBtn.textContent = 'Send Message';\n  form.appendChild(submitBtn);\n}\n\nfunction makeFooter() {\n  const footerTag = document.createElement('footer');\n  content.appendChild(footerTag);\n\n  const copyright = document.createTextNode('Copyright \\xA9 ');\n  footerTag.appendChild(copyright);\n\n  const copyrightLink = document.createElement('a');\n  copyrightLink.href = 'https://github.com/Royuin';\n  copyrightLink.textContent = 'Royuin ';\n  footerTag.appendChild(copyrightLink);\n\n  const rightsReserved = document.createTextNode('2023 All Rights Reserved');\n  footerTag.appendChild(rightsReserved);\n}\n\nfunction makeContactPage() {\n  makeContactHeader();\n  makeMainContent();\n  makeFooter();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeHomePage\": () => (/* binding */ makeHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_ramen_shop_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/ramen-shop.jpg */ \"./src/assets/imgs/ramen-shop.jpg\");\n\n\nfunction makeHeader() {\n  const content = document.createElement('div');\n  content.setAttribute('id', 'content');\n  document.body.appendChild(content);\n\n  const header = document.createElement('header');\n  content.appendChild(header);\n\n  const nav = document.createElement('nav');\n  header.appendChild(nav);\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Roku Sunset';\n  nav.appendChild(h1);\n\n  const homeBtn = document.createElement('a');\n  homeBtn.textContent = 'Home';\n  homeBtn.classList = 'home-link';\n  nav.appendChild(homeBtn);\n\n  const menuBtn = document.createElement('a');\n  menuBtn.textContent = 'Menu';\n  menuBtn.classList = 'menu-link';\n  nav.appendChild(menuBtn);\n\n  const contactBtn = document.createElement('a');\n  contactBtn.textContent = 'Contact';\n  contactBtn.classList = 'contact-link';\n  nav.appendChild(contactBtn);\n\n  const quoteP = document.createElement('p');\n  quoteP.classList = 'quote';\n  quoteP.textContent = '\"Only the pure in heart can make a good soup.\" \\n';\n  quoteP.textContent += '-Ludwig Van Beethoven';\n  header.appendChild(quoteP);\n}\n\nfunction makeHomeInfo() {\n  const aboutP1 = document.createElement('p');\n  aboutP1.textContent = `Broth made from scratch with homemade noodles we serve the best ramen you haven't had yet. With only one location\nyou can be sure we put it all we got into each and every bowl of ramen you eat.`;\n  content.appendChild(aboutP1);\n\n  const aboutP2 = document.createElement('p');\n  aboutP2.textContent =\n    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quas autem sapiente ullam explicabo delectus totam culpa deserunt saepe laudantium facere eum quis, unde molestiae est magni at ut quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta tenetur recusandae suscipit quibusdam provident dolorem officiis dolores? Similique quibusdam tenetur, minus sed dignissimos aliquid! Illum eaque quam veniam excepturi.';\n  content.appendChild(aboutP2);\n\n  const historyH2 = document.createElement('h2');\n  historyH2.textContent = 'History of Roku Sunset';\n  content.appendChild(historyH2);\n\n  const historyP = document.createElement('p');\n  historyP.textContent =\n    'While this restaurant may not actually exist, you can rest assured this website was made with a love of web development and good bowl of ramen.';\n  content.appendChild(historyP);\n}\n\nfunction makeFooter() {\n  const footerTag = document.createElement('footer');\n  content.appendChild(footerTag);\n\n  const copyright = document.createTextNode('Copyright \\xA9 ');\n  footerTag.appendChild(copyright);\n\n  const copyrightLink = document.createElement('a');\n  copyrightLink.href = 'https://github.com/Royuin';\n  copyrightLink.textContent = 'Royuin ';\n  footerTag.appendChild(copyrightLink);\n\n  const rightsReserved = document.createTextNode('2023 All Rights Reserved');\n  footerTag.appendChild(rightsReserved);\n}\n\nfunction makeHomePage() {\n  makeHeader();\n  makeHomeInfo();\n  makeFooter();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_fonts_Labrada_VariableFont_wght_ttf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/fonts/Labrada-VariableFont_wght.ttf */ \"./src/assets/fonts/Labrada-VariableFont_wght.ttf\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_3__.makeHomePage)();\n\nlet homeLink = document.querySelector('.home-link');\nlet menuLink = document.querySelector('.menu-link');\nlet contactLink = document.querySelector('.contact-link');\n\nfunction addListener() {\n  let homeLink = document.querySelector('.home-link');\n  let menuLink = document.querySelector('.menu-link');\n  let contactLink = document.querySelector('.contact-link');\n\n  homeLink.addEventListener('click', () => {\n    const content = document.getElementById('content');\n\n    document.body.removeChild(content);\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_3__.makeHomePage)();\n    addListener();\n  });\n\n  menuLink.addEventListener('click', () => {\n    const content = document.getElementById('content');\n\n    document.body.removeChild(content);\n\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.makeMenuPage)();\n    addListener();\n  });\n\n  contactLink.addEventListener('click', () => {\n    const content = document.getElementById('content');\n\n    document.body.removeChild(content);\n\n    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.makeContactPage)();\n    addListener();\n  });\n}\n\nhomeLink.addEventListener('click', () => {\n  const content = document.getElementById('content');\n\n  document.body.removeChild(content);\n\n  (0,_home__WEBPACK_IMPORTED_MODULE_3__.makeHomePage)();\n  addListener();\n});\n\nmenuLink.addEventListener('click', () => {\n  const content = document.getElementById('content');\n\n  document.body.removeChild(content);\n\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.makeMenuPage)();\n  addListener();\n});\n\ncontactLink.addEventListener('click', () => {\n  const content = document.getElementById('content');\n\n  document.body.removeChild(content);\n\n  (0,_contact__WEBPACK_IMPORTED_MODULE_4__.makeContactPage)();\n  addListener();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeMenuPage\": () => (/* binding */ makeMenuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_tonkotsu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/tonkotsu-ramen.jpg */ \"./src/assets/imgs/tonkotsu-ramen.jpg\");\n/* harmony import */ var _assets_imgs_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/imgs/shoyu-ramen.jpg */ \"./src/assets/imgs/shoyu-ramen.jpg\");\n/* harmony import */ var _assets_imgs_miso_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/imgs/miso-ramen.jpg */ \"./src/assets/imgs/miso-ramen.jpg\");\n/* harmony import */ var _assets_imgs_udon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/imgs/udon.jpg */ \"./src/assets/imgs/udon.jpg\");\n/* harmony import */ var _assets_imgs_soba_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/imgs/soba.jpg */ \"./src/assets/imgs/soba.jpg\");\n/* harmony import */ var _assets_imgs_miso_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/imgs/miso.jpg */ \"./src/assets/imgs/miso.jpg\");\n\n\n\n\n\n\n\nfunction makeMenuHeader() {\n  const content = document.createElement('div');\n  content.setAttribute('id', 'content');\n  document.body.appendChild(content);\n\n  const nav = document.createElement('nav');\n  nav.classList = 'menu-nav';\n  content.appendChild(nav);\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Roku Sunset';\n  nav.appendChild(h1);\n\n  const homeLink = document.createElement('a');\n  homeLink.textContent = 'Home';\n  homeLink.classList = 'home-link';\n  nav.appendChild(homeLink);\n\n  const menuLink = document.createElement('a');\n  menuLink.textContent = 'Menu';\n  menuLink.classList = 'menu-link';\n  nav.appendChild(menuLink);\n\n  const contactLink = document.createElement('a');\n  contactLink.textContent = 'Contact';\n  contactLink.classList = 'contact-link';\n  nav.appendChild(contactLink);\n}\n\nfunction makeMainMenu() {\n  const mainMenu = document.createElement('div');\n  mainMenu.classList = 'main-menu';\n  content.appendChild(mainMenu);\n\n  const tonkotsuRamen = document.createElement('div');\n  tonkotsuRamen.classList = 'card';\n  const tonkotsuRamenText = document.createElement('p');\n  tonkotsuRamenText.textContent = 'Tonkotsu Ramen';\n  tonkotsuRamen.appendChild(tonkotsuRamenText);\n  const tonkotsuRamenImg = document.createElement('img');\n  tonkotsuRamenImg.src = _assets_imgs_tonkotsu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  tonkotsuRamen.appendChild(tonkotsuRamenImg);\n  mainMenu.appendChild(tonkotsuRamen);\n\n  const shoyuRamen = document.createElement('div');\n  shoyuRamen.classList = 'card';\n  const shoyuRamenText = document.createElement('p');\n  shoyuRamenText.textContent = 'Shoyu Ramen';\n  shoyuRamen.appendChild(shoyuRamenText);\n  const shoyuRamenImg = document.createElement('img');\n  shoyuRamenImg.src = _assets_imgs_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  shoyuRamen.appendChild(shoyuRamenImg);\n  mainMenu.appendChild(shoyuRamen);\n\n  const misoRamen = document.createElement('div');\n  misoRamen.classList = 'card';\n  const misoRamenText = document.createElement('p');\n  misoRamenText.textContent = 'Miso Ramen';\n  misoRamen.appendChild(misoRamenText);\n  const misoRamenImg = document.createElement('img');\n  misoRamenImg.src = _assets_imgs_miso_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  misoRamen.appendChild(misoRamenImg);\n  mainMenu.appendChild(misoRamen);\n\n  const misoSoup = document.createElement('div');\n  misoSoup.classList = 'card';\n  const misoSoupText = document.createElement('p');\n  misoSoupText.textContent = 'Miso Soup';\n  misoSoup.appendChild(misoSoupText);\n  const misoSoupImg = document.createElement('img');\n  misoSoupImg.src = _assets_imgs_miso_jpg__WEBPACK_IMPORTED_MODULE_5__;\n  misoSoup.appendChild(misoSoupImg);\n  mainMenu.appendChild(misoSoup);\n\n  const udon = document.createElement('div');\n  udon.classList = 'card';\n  const udonText = document.createElement('p');\n  udonText.textContent = 'Udon';\n  udon.appendChild(udonText);\n  const udonImg = document.createElement('img');\n  udonImg.src = _assets_imgs_udon_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  udon.appendChild(udonImg);\n  mainMenu.appendChild(udon);\n\n  const soba = document.createElement('div');\n  soba.classList = 'card';\n  const sobaText = document.createElement('p');\n  sobaText.textContent = 'Soba';\n  soba.appendChild(sobaText);\n  const sobaImg = document.createElement('img');\n  sobaImg.src = _assets_imgs_soba_jpg__WEBPACK_IMPORTED_MODULE_4__;\n  soba.appendChild(sobaImg);\n  mainMenu.appendChild(soba);\n}\n\nfunction makeFooter() {\n  const footerTag = document.createElement('footer');\n  content.appendChild(footerTag);\n\n  const copyright = document.createTextNode('Copyright \\xA9 ');\n  footerTag.appendChild(copyright);\n\n  const copyrightLink = document.createElement('a');\n  copyrightLink.href = 'https://github.com/Royuin';\n  copyrightLink.textContent = 'Royuin ';\n  footerTag.appendChild(copyrightLink);\n\n  const rightsReserved = document.createTextNode('2023 All Rights Reserved');\n  footerTag.appendChild(rightsReserved);\n}\n\nfunction makeMenuPage() {\n  makeMenuHeader();\n  makeMainMenu();\n  makeFooter();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/fonts/Labrada-VariableFont_wght.ttf":
/*!********************************************************!*\
  !*** ./src/assets/fonts/Labrada-VariableFont_wght.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Labrada-VariableFont_wght.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/Labrada-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/imgs/miso-ramen.jpg":
/*!****************************************!*\
  !*** ./src/assets/imgs/miso-ramen.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"miso-ramen.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/miso-ramen.jpg?");

/***/ }),

/***/ "./src/assets/imgs/miso.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/miso.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"miso.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/miso.jpg?");

/***/ }),

/***/ "./src/assets/imgs/ramen-shop.jpg":
/*!****************************************!*\
  !*** ./src/assets/imgs/ramen-shop.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ramen-shop.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/ramen-shop.jpg?");

/***/ }),

/***/ "./src/assets/imgs/shoyu-ramen.jpg":
/*!*****************************************!*\
  !*** ./src/assets/imgs/shoyu-ramen.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"shoyu-ramen.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/shoyu-ramen.jpg?");

/***/ }),

/***/ "./src/assets/imgs/soba.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/soba.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"soba.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/soba.jpg?");

/***/ }),

/***/ "./src/assets/imgs/tonkotsu-ramen.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/tonkotsu-ramen.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"tonkotsu-ramen.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/tonkotsu-ramen.jpg?");

/***/ }),

/***/ "./src/assets/imgs/udon.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/udon.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"udon.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/imgs/udon.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;