var index =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pages/header/burger.js":
/*!***************************************!*\
  !*** ./src/js/pages/header/burger.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').on('click', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').toggleClass('open');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.letter').toggleClass('white');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu').toggleClass('on');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('overflow-hidden');\n  });\n}));\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/header/burger.js?");

/***/ }),

/***/ "./src/js/pages/header/scrollMenu.js":
/*!*******************************************!*\
  !*** ./src/js/pages/header/scrollMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  var navbarHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').outerHeight();\n  var delta = 5;\n  var lastScrollTop = 0;\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(hasScrolled);\n\n  function hasScrolled() {\n    var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollTop();\n    if (Math.abs(lastScrollTop - scrollTop) <= delta) return;\n\n    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').removeClass('nav-dovn').addClass('nav-up');\n    } else {\n      if (scrollTop + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() < jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height()) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').removeClass('nav-up').addClass('nav-down');\n      }\n    }\n\n    lastScrollTop = scrollTop;\n  }\n\n  ; // const PREVSCROLLPOS = $(window).pageYOfset;\n  // $(window).scroll = () => {\n  // \tlet currentScrollPos = $(window).pageYOfset;\n  // \tif (PREVSCROLLPOS > currentScrollPos) {\n  // \t\t$('.header').style.top = \"0%\";\n  // \t} else {\n  // \t\t$('.header').style.top = \"-10%\";\n  // \t}\n  // \tPREVSCROLLPOS = currentScrollPos\n  // \tconsole.log(currentScrollPos);\n  // }\n}));\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/header/scrollMenu.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/burger */ \"./src/js/pages/header/burger.js\");\n/* harmony import */ var _header_scrollMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/scrollMenu */ \"./src/js/pages/header/scrollMenu.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ \"./src/js/pages/main.js\");\n\n\n\n // $(() => {\n//   if (process.env.NODE_ENV === 'development') {\n//     console.log('%c App loaded meta', 'color: #fff; background: #ff0000; font-size: 22px;font-weight: bold;',\n//       '\\n process.env.NODE_ENV:', process.env.NODE_ENV,\n//     );\n//   } \n// });\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/index.js?");

/***/ }),

/***/ "./src/js/pages/main.js":
/*!******************************!*\
  !*** ./src/js/pages/main.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  var menuItems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#exploreWrap');\n  scrollAnimate();\n\n  function scrollAnimate() {\n    menuItems.on('click', function (e) {\n      var href = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr(\"href\");\n      var offsetTop = href === \"#\" ? 0 : jquery__WEBPACK_IMPORTED_MODULE_0___default()(href).offset().top;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop().animate({\n        scrollTop: offsetTop\n      }, 850);\n      e.preventDefault();\n    });\n  }\n}));\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/main.js?");

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./src/js/pages/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! G:\\code\\replica\\src\\js\\pages\\index.js */\"./src/js/pages/index.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/multi_./src/js/pages/index.js?");

/***/ })

/******/ });