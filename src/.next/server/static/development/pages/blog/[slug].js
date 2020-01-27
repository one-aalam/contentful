module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/blog/[slug].js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
var _jsxFileName = "/Users/aftalam/Desktop/projects/contentful/src/components/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_1__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_1__["logPageView"])();
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, this.props.children);
  }

}

/***/ }),

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogTemplate; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/aftalam/Desktop/projects/contentful/src/pages/blog/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function BlogTemplate(props) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  const markdownBody = props.content;
  const frontmatter = props.data;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    siteTitle: props.siteTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-1783773852" + " " + "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-1783773852" + " " + "blog__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: frontmatter.hero_image,
    alt: `blog_hero_${frontmatter.title}`,
    className: "jsx-1783773852",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1783773852" + " " + "blog__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1783773852",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, frontmatter.title), __jsx("h3", {
    className: "jsx-1783773852",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, reformatDate(frontmatter.date))), __jsx("div", {
    className: "jsx-1783773852" + " " + "blog__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: markdownBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-1783773852" + " " + "blog__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Written By: ", frontmatter.author)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1783773852",
    __self: this
  }, ".blog.jsx-1783773852 h1.jsx-1783773852{margin-bottom:.7rem;}.blog__hero.jsx-1783773852{min-height:300px;height:60vh;width:100%;margin:0;overflow:hidden;}.blog__hero.jsx-1783773852 img.jsx-1783773852{margin-bottom:0;object-fit:cover;min-height:100%;min-width:100%;object-position:center;}.blog__info.jsx-1783773852{padding:1.5rem 1.25rem;width:100%;max-width:768px;margin:0 auto;}.blog__info.jsx-1783773852 h1.jsx-1783773852{margin-bottom:0.66rem;}.blog__info.jsx-1783773852 h3.jsx-1783773852{margin-bottom:0;}.blog__body.jsx-1783773852{width:100%;padding:0 1.25rem;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.blog__body.jsx-1783773852 a.jsx-1783773852{padding-bottom:1.5rem;}.blog__body.jsx-1783773852:last-child{margin-bottom:0;}.blog__body.jsx-1783773852 h1.jsx-1783773852 h2.jsx-1783773852 h3.jsx-1783773852 h4.jsx-1783773852 h5.jsx-1783773852 h6.jsx-1783773852 p.jsx-1783773852{font-weight:normal;}.blog__body.jsx-1783773852 p.jsx-1783773852{color:inherit;}.blog__body.jsx-1783773852 ul.jsx-1783773852{list-style:initial;}.blog__body.jsx-1783773852 ul.jsx-1783773852 ol.jsx-1783773852{margin-left:1.25rem;margin-bottom:1.25rem;padding-left:1.45rem;}.blog__footer.jsx-1783773852{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1.5rem 1.25rem;width:100%;max-width:800px;margin:0 auto;}.blog__footer.jsx-1783773852 h2.jsx-1783773852{margin-bottom:0;}.blog__footer.jsx-1783773852 a.jsx-1783773852{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.blog__footer.jsx-1783773852 a.jsx-1783773852 svg.jsx-1783773852{width:20px;}@media (min-width:768px){.blog.jsx-1783773852{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.blog__body.jsx-1783773852{max-width:800px;padding:0 2rem;}.blog__body.jsx-1783773852 span.jsx-1783773852{width:100%;margin:1.5rem auto;}.blog__body.jsx-1783773852 ul.jsx-1783773852 ol.jsx-1783773852{margin-left:1.5rem;margin-bottom:1.5rem;}.blog__hero.jsx-1783773852{min-height:600px;height:75vh;}.blog__info.jsx-1783773852{text-align:center;padding:2rem 0;}.blog__info.jsx-1783773852 h1.jsx-1783773852{max-width:500px;margin:0 auto 0.66rem auto;}.blog__footer.jsx-1783773852{padding:2.25rem;}}@media (min-width:1440px){.blog__hero.jsx-1783773852{height:70vh;}.blog__info.jsx-1783773852{padding:3rem 0;}.blog__footer.jsx-1783773852{padding:2rem 2rem 3rem 2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnRhbGFtL0Rlc2t0b3AvcHJvamVjdHMvY29udGVudGZ1bC9zcmMvcGFnZXMvYmxvZy9bc2x1Z10uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNPLEFBRytCLEFBSUgsQUFPRCxBQVFPLEFBTUQsQUFHTixBQUlMLEFBUVcsQUFHTixBQUdHLEFBR0wsQUFHSyxBQUdDLEFBTVAsQUFTRyxBQUdILEFBS0YsQUFLSSxBQUlHLEFBSUwsQUFJUSxBQUlGLEFBSUMsQUFJRixBQUlBLEFBTUosQUFHRyxBQUdhLFdBMUZaLEFBOENwQixBQWF1QixDQTBCckIsRUFwRUYsQ0F1RUUsQ0E3R2lCLEFBaUJuQixBQWVBLEFBMkJBLEFBaUJtQixBQW9CWSxBQUk3QixDQTNHWSxBQStGRSxDQUlHLENBekRuQixBQU1BLEFBMkN5QixDQS9GekIsQUF1RHdCLEVBOUJ4QixBQWVBLENBckJhLEtBd0dYLENBdEhXLEFBNEJHLEFBbUVkLENBUkEsQ0FKQSxFQTVFZ0IsQUE0RmhCLENBcEZnQixNQWRQLEFBMEZULEVBeENxQixDQXRCUixBQTBFYixNQXJHZ0IsQUFNRCxDQVFELGFBb0NoQixDQTNDeUIsQUFRekIsQ0FkQSxTQXFEZ0MsQUFZQSxBQVVOLGFBcEUxQiw4QkFvQndCLG1DQWlEdEIscUNBdEJtQixBQVlBLE1BdENJLHVGQTJCQSxBQVl6QixZQXRDQSxXQTJCYSxXQUNLLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9hZnRhbGFtL0Rlc2t0b3AvcHJvamVjdHMvY29udGVudGZ1bC9zcmMvcGFnZXMvYmxvZy9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1RlbXBsYXRlKHByb3BzKSB7XG4gIGZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShmdWxsRGF0ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmdWxsRGF0ZSlcbiAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbiAgfVxuICBjb25zdCBtYXJrZG93bkJvZHkgPSBwcm9wcy5jb250ZW50XG4gIGNvbnN0IGZyb250bWF0dGVyID0gcHJvcHMuZGF0YVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBzaXRlVGl0bGU9e3Byb3BzLnNpdGVUaXRsZX0+XG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYmxvZ1wiPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImJsb2dfX2hlcm9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtmcm9udG1hdHRlci5oZXJvX2ltYWdlfVxuICAgICAgICAgICAgYWx0PXtgYmxvZ19oZXJvXyR7ZnJvbnRtYXR0ZXIudGl0bGV9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19faW5mb1wiPlxuICAgICAgICA8aDE+e2Zyb250bWF0dGVyLnRpdGxlfTwvaDE+XG4gICAgICAgIDxoMz57cmVmb3JtYXREYXRlKGZyb250bWF0dGVyLmRhdGUpfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2JvZHlcIj5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYXJrZG93bkJvZHl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvZ19fZm9vdGVyXCI+XG4gICAgICAgIFdyaXR0ZW4gQnk6IHtmcm9udG1hdHRlci5hdXRob3J9XG4gICAgICAgIDwvaDI+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuYmxvZyBoMSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZ19faGVybyB7XG4gICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19oZXJvIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nX19pbmZvIHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS4yNXJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19pbmZvIGgxIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjY2cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19pbmZvIGgzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2dfX2JvZHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2JvZHkgYSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmxvZ19fYm9keTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19ib2R5IGgxIGgyIGgzIGg0IGg1IGg2IHAge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2JvZHkgcCB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2JvZHkgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2JvZHkgdWwgb2wge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjQ1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2dfX2Zvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS4yNXJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19mb290ZXIgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2Zvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19mb290ZXIgYSBzdmcge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmJsb2cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19ib2R5IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19ib2R5IHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDEuNXJlbSBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19fYm9keSB1bCBvbCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faGVybyB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzV2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyBoMSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC42NnJlbSBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19fZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgIC5ibG9nX19oZXJvIHtcbiAgICAgICAgICAgIGhlaWdodDogNzB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19fZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAzcmVtIDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuXG4gICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgICApO1xuXG59XG5cbkJsb2dUZW1wbGF0ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjdHgpIHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjdHgucXVlcnlcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vLi4vcG9zdHMvJHtzbHVnfS5tZGApXG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGltcG9ydChgLi4vLi4vZGF0YS9jb25maWcuanNvbmApXG4gIGNvbnN0IGRhdGEgPSBtYXR0ZXIoY29udGVudC5kZWZhdWx0KTtcbiAgcmV0dXJuIHtcbiAgICBzaXRlVGl0bGU6IGNvbmZpZy50aXRsZSxcbiAgICAuLi5kYXRhXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/aftalam/Desktop/projects/contentful/src/pages/blog/[slug].js */"));
}

BlogTemplate.getInitialProps = async function (ctx) {
  const {
    slug
  } = ctx.query;
  const content = await __webpack_require__("./posts lazy recursive ^\\.\\/.*\\.md$")(`./${slug}.md`);
  const config = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../../data/config.json */ "./data/config.json", 3));
  const data = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(content.default);
  return _objectSpread({
    siteTitle: config.title
  }, data);
};

/***/ }),

/***/ "./posts lazy recursive ^\\.\\/.*\\.md$":
/*!**************************************************!*\
  !*** ./posts lazy ^\.\/.*\.md$ namespace object ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bali.md": [
		"./posts/bali.md",
		1
	],
	"./mara.md": [
		"./posts/mara.md",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./posts lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('UA-156928044-1');
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
const logEvent = (category = '', action = '', label = 'generic') => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/blog/[slug].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aftalam/Desktop/projects/contentful/src/pages/blog/[slug].js */"./pages/blog/[slug].js");


/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=[slug].js.map