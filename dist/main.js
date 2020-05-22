/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ \"./src/screen.js\");\n/* harmony import */ var _loaders_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders/sprite */ \"./src/loaders/sprite.js\");\n\n\n\n\nclass Game {\n  constructor(width, height) {\n    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__[\"default\"](width, height);\n  }\n\n  init() {\n    this.screen.init();\n\n    Object(_loaders_sprite__WEBPACK_IMPORTED_MODULE_1__[\"loadSpriteSheet\"])(\"world\");\n    //test\n  }\n\n  draw() {\n    console.log(\"DRAWING\");\n  }\n  update() {\n    this.draw();\n    requestAnimationFrame(this.update.bind(this));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngame.init();\ngame.update();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loaders/index.js":
/*!******************************!*\
  !*** ./src/loaders/index.js ***!
  \******************************/
/*! exports provided: loadImage, loadJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadJSON\", function() { return loadJSON; });\nfunction loadImage(url) {\n  return new Promise(resolve => {\n    const image = new Image();\n    image.onload = (() => {\n      resolve(image);\n    });\n    image.src = url;\n  });\n}\n\nfunction loadJSON(url) {\n  return fetch(url)\n    .then(r => r.json());\n}\n\n//# sourceURL=webpack:///./src/loaders/index.js?");

/***/ }),

/***/ "./src/loaders/sprite.js":
/*!*******************************!*\
  !*** ./src/loaders/sprite.js ***!
  \*******************************/
/*! exports provided: loadSpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSpriteSheet\", function() { return loadSpriteSheet; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/loaders/index.js\");\n\n\nconst loadSpriteSheet = async (name) => {\n  try {\n    const rawData = await Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"loadJSON\"])(`./assets/${name}/${name}.json`);\n\n    console.log(\"RAW DATA LOADED SUCCESSFULY\", rawData);\n  } catch (e) {\n    throw new Error(`Error loading SpriteSheet for ${name}`);\n  }\n}\n\n//# sourceURL=webpack:///./src/loaders/sprite.js?");

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Screen; });\nclass Screen {\n  constructor() {\n    this.width = window.innerWidth;\n    this.height = window.innerHeight;\n  }\n\n  init() {\n    this.canvas = document.createElement(\"canvas\");\n    this.canvas.style.width = this.width + \"px\";\n    this.canvas.style.height = this.height + \"px\";\n    this.context = this.canvas.getContext(\"2d\");\n\n    const body = document.getElementsByTagName(\"body\")[0];\n    body.appendChild(this.canvas);\n  }\n}\n\n//# sourceURL=webpack:///./src/screen.js?");

/***/ })

/******/ });