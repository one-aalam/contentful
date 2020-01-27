webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogList.js":
/*!********************************!*\
  !*** ./components/BlogList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "../node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/aftalam/Desktop/projects/contentful/src/components/BlogList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var BlogList = function BlogList(_ref) {
  var allBlogs = _ref.allBlogs;

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    var date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  console.log(allBlogs);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-3863398726" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.allBlogs.length > 1 && props.allBlogs.map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: post.slug,
      href: {
        pathname: "/blog/".concat(post.slug)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3863398726",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-3863398726",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3863398726" + " " + "hero_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: post.document.data.hero_image,
      alt: post.document.data.hero_image,
      className: "jsx-3863398726",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3863398726" + " " + "blog__info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3863398726",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, post.document.data.title), __jsx("h3", {
      className: "jsx-3863398726",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " ", reformatDate(post.document.data.date)), __jsx("p", {
      className: "jsx-3863398726",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      source: truncateSummary(post.document.content),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3863398726",
    __self: this
  }, ".jsx-3863398726{margin-bottom:0;}a.jsx-3863398726:hover{opacity:1;}a.jsx-3863398726:hover li.jsx-3863398726 div.hero_image.jsx-3863398726 img.jsx-3863398726{opacity:0.8;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;}a.jsx-3863398726:hover li.jsx-3863398726 .blog__info.jsx-3863398726 h2.jsx-3863398726,a.jsx-3863398726:hover li.jsx-3863398726 .blog__info.jsx-3863398726 h3.jsx-3863398726,a.jsx-3863398726:hover li.jsx-3863398726 .blog__info.jsx-3863398726 p.jsx-3863398726{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.hero_image.jsx-3863398726{width:100%;height:33vh;overflow:hidden;background-color:#000;}.hero_image.jsx-3863398726 img.jsx-3863398726{object-fit:cover;object-position:50% 50%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;min-height:100%;}.blog__info.jsx-3863398726{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1.5rem 1.25rem;-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.3s ease-in;-webkit-transition:transform 0.3s ease-in;transition:transform 0.3s ease-in;border-bottom:1px solid #ebebeb;}.blog__info.jsx-3863398726 h2.jsx-3863398726,.blog__info.jsx-3863398726 h3.jsx-3863398726,.blog__info.jsx-3863398726 p.jsx-3863398726{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}li.jsx-3863398726{opacity:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:38vh;margin-bottom:0;}h2.jsx-3863398726{margin-bottom:0.5rem;}h3.jsx-3863398726{margin-bottom:1rem;}p.jsx-3863398726{max-width:900px;}@media (min-width:768px){li.jsx-3863398726{min-height:250px;height:33.333vh;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.hero_image.jsx-3863398726{height:100%;}.hero_image.jsx-3863398726 img.jsx-3863398726{min-width:100%;height:100%;width:auto;min-height:0;}.blog__info.jsx-3863398726{min-width:70%;}}@media (min-width:1280px){.blog__info.jsx-3863398726{padding:3rem;}h3.jsx-3863398726{margin-bottom:1.2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnRhbGFtL0Rlc2t0b3AvcHJvamVjdHMvY29udGVudGZ1bC9zcmMvY29tcG9uZW50cy9CbG9nTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ1MsQUFFMkIsQUFFSixBQUdFLEFBSWUsQUFJaEIsQUFNTSxBQU9KLEFBU2EsQUFJVixBQVFLLEFBR0YsQUFHSCxBQUlHLEFBS0wsQUFHRyxBQU1ELEFBS0QsQUFHUSxVQTVFekIsQ0FXYyxDQVJpQixBQXlEN0IsQ0FjQSxDQUxBLENBTmMsQ0ExQkQsQUFjZixBQTRCRixDQTlENEIsQUFzQ04sRUFQcEIsRUFIQSxBQWdDRSxFQWpFZ0IsSUFvREgsTUFSUSxLQVNOLENBcERPLEVBS1osVUFDbUIsQUErQzdCLFVBcERGLGFBVXdCLElBcEJ4QixZQTZCcUMsQUFLWixHQS9CWSxTQWtEbkMsZUFyQ2dCLGdCQUNsQixtQkFJeUIscUNBY0QsOEJBTHhCLEdBMUJBLDZCQWtCeUIsZ0JBY1AsT0FiVSxTQWNWLGdCQUNsQixpRUFkb0MsOEhBQ0YsZ0NBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9hZnRhbGFtL0Rlc2t0b3AvcHJvamVjdHMvY29udGVudGZ1bC9zcmMvY29tcG9uZW50cy9CbG9nTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5jb25zdCBCbG9nTGlzdCA9ICh7IGFsbEJsb2dzIH0pID0+IHtcblxuICBmdW5jdGlvbiB0cnVuY2F0ZVN1bW1hcnkoY29udGVudCkge1xuICAgIHJldHVybiBjb250ZW50LnNsaWNlKDAsIDIwMCkudHJpbUVuZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKVxuICAgIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xuICB9XG5cbiAgY29uc29sZS5sb2coYWxsQmxvZ3MpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIHtwcm9wcy5hbGxCbG9ncy5sZW5ndGggPiAxICYmIHByb3BzLmFsbEJsb2dzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAga2V5PXtwb3N0LnNsdWd9XG4gICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiBgL2Jsb2cvJHtwb3N0LnNsdWd9YCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5kb2N1bWVudC5kYXRhLmhlcm9faW1hZ2V9IGFsdD17cG9zdC5kb2N1bWVudC5kYXRhLmhlcm9faW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2luZm9cIj5cbiAgICAgICAgICAgICAgICA8aDI+e3Bvc3QuZG9jdW1lbnQuZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz4ge3JlZm9ybWF0RGF0ZShwb3N0LmRvY3VtZW50LmRhdGEuZGF0ZSl9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17dHJ1bmNhdGVTdW1tYXJ5KHBvc3QuZG9jdW1lbnQuY29udGVudCl9IC8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIGxpIGRpdi5oZXJvX2ltYWdlIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBoMiwgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBoMywgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBwIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyb19pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzN2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyb19pbWFnZSBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2luZm8gaDIsIC5ibG9nX19pbmZvIGgzLCAuYmxvZ19faW5mbyBwIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzh2aDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzMuMzMzdmg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVyb19pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvX2ltYWdlIGltZyB7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9nX19pbmZvIHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgIC5ibG9nX19pbmZvIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nTGlzdDsiXX0= */\n/*@ sourceURL=/Users/aftalam/Desktop/projects/contentful/src/components/BlogList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=index.js.6c664e602e9440c5f35a.hot-update.js.map