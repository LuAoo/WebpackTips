(function () {
  "use strict";

  var __webpack_modules__ = ({
/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
  // __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

/***/ (function (__unused_webpack_module, qwe, __webpack_require__) {
        //调用r的目的就是给qwe记录是一个esModule
        __webpack_require__.r(qwe);

        //分别将第二个参数中的方法给qwe(export)
        __webpack_require__.d(qwe, {
          "sum": function () { return sum; }
        });
        const sum = (num1, num2) => {
          return num1 + num2
        }
        /***/
      }),
/***/ "./src/js/math2.js":
/*!*************************!*\
  !*** ./src/js/math2.js ***!
  \*************************/
/***/ (function (__unused_webpack_module, qwe, __webpack_require__) {
        __webpack_require__.r(qwe);
        __webpack_require__.d(qwe, {
          "sum2": function () { return sum2; }

        });
        const sum2 = (num1, num2) => {
          return num1 + num2
        }
      })
  });
  /************************************************************************/
  // The module cache
  //webpack的缓存文件,最终导出的是exports对象
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    //如果当前缓存对象中没有该id的值,则将其添加到缓存对象中
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed\
      exports: {}
    };

    // Execute the module function

    //调用我们方法__webpack_modules__相应的方法
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /************************************************************************/
  /* webpack/runtime/define property getters */
  !function () {
    // define getter functions for harmony exports
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  }();

  /* webpack/runtime/hasOwnProperty shorthand */
  !function () {
    __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
  }();

  /* webpack/runtime/make namespace object */
  !function () {
    // define __esModule on exports(做了一层标记)
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  }();

  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    /*!*************************!*\
      !*** ./src/es_index.js ***!
      \*************************/
    __webpack_require__.r(__webpack_exports__);



    //拿到我们的目标对象并执行(返回export对象)
/* harmony import */ var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/math */ "./src/js/math.js");
/* harmony import */ var _js_math2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/math2 */ "./src/js/math2.js");
    console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(10, 20));
    console.log((0, _js_math2__WEBPACK_IMPORTED_MODULE_1__.sum2)(10, 20));
  }();
})()
  ;
//# sourceMappingURL=trunk.js.map