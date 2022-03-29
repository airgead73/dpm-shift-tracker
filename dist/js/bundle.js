"use strict";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./gulp/scripts/index.js":
    /*!*******************************!*\
      !*** ./gulp/scripts/index.js ***!
      \*******************************/

    /***/
    function gulpScriptsIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index.js */ \"./gulp/scripts/modules/index.js\");\nconst forms = Array.from(document.querySelectorAll('.form'));\nconst btns = Array.from(document.querySelectorAll('.btn-fetch'));\n\n\n\nif(btns.length) {\n  (0,_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.initBtns)(btns);\n} else {\n  console.log('page does not have fetch buttons')\n}\n\n\nif(forms.length) {\n  (0,_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.initForms)(forms)\n} else {\n  console.log('page does not have forms')\n}\n\n//# sourceURL=webpack://dpm-shift-tracker/./gulp/scripts/index.js?");
      /***/
    },

    /***/
    "./gulp/scripts/modules/btns.js":
    /*!**************************************!*\
      !*** ./gulp/scripts/modules/btns.js ***!
      \**************************************/

    /***/
    function gulpScriptsModulesBtnsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./gulp/scripts/modules/utils.js\");\n\n\nconst handleResponse = ($data) => {\n  const { success, message, relocateTo } = $data;\n\n  alert(message);\n\n  if(relocateTo) {\n    window.location.replace(relocateTo);\n  } else {\n    window.location.reload();\n  }\n\n}\n\nconst fetchData = async ($btn) => {\n\n  // confirm\n\n  const isConfirmed = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.confirmFetch)($btn.getAttribute('data-confirm'));\n\n  if(!isConfirmed) return;\n\n  // if confirmed, continue\n\n  const action = $btn.getAttribute('data-action');\n  const method = $btn.getAttribute('data-method');  \n\n  const options = {\n    method,\n    headers: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    }\n  }\n\n  const response = await fetch(action, options);\n  const data = await response.json();\n\n  return handleResponse(data);\n\n}\n\nconst initBtns = ($btns) => {\n  $btns.forEach((btn) => {\n\n    btn.addEventListener('click', (event) => {\n      event.preventDefault(); \n      fetchData(event.target);      \n    });\n\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBtns);\n\n//# sourceURL=webpack://dpm-shift-tracker/./gulp/scripts/modules/btns.js?");
      /***/
    },

    /***/
    "./gulp/scripts/modules/forms.js":
    /*!***************************************!*\
      !*** ./gulp/scripts/modules/forms.js ***!
      \***************************************/

    /***/
    function gulpScriptsModulesFormsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleResponse = ($data) => {\n\n  const { success, message, relocateTo } = $data;\n\n  alert(message);\n\n  if(relocateTo) {\n    window.location.replace(relocateTo); \n  } else {\n    window.location.reload();\n  }\n\n}\n\nconst fetchData = async ($form) => {\n  const attrs = $form.getAttributeNames().reduce((acc, name) => {\n    return {...acc, [name]: $form.getAttribute(name)}\n  }, {});\n\n  const options = {\n    method: attrs.method,\n    headers: {\n      'Content-Type': attrs.enctype,\n      'Accept': attrs.enctype\n    }\n  }\n\n  const needsBody = attrs.method === 'POST' || attrs.method === 'PUT';\n \n  if(needsBody) {\n    let body = {};\n    let formElements = Array.from($form.elements);\n    formElements = formElements.filter(element => {\n      if(element.hasAttribute('name')) {\n        return element;\n      }\n    });\n\n    formElements.forEach(element => {\n      const property = element.getAttribute('name');\n      const value = $form[property].value;\n      body[property] = value;\n      \n    });\n    \n    options.body = JSON.stringify(body);\n    \n  }\n\n  const response = await fetch(attrs.action, options);\n  const data = await response.json();\n  \n  data.relocateTo = $form.getAttribute('target') || false;\n\n  return data;   \n\n}\n\nconst initForms = ($forms) => {\n  $forms.forEach((form) => {\n    form.addEventListener('submit', (event) => {\n      event.preventDefault();\n      fetchData(event.target).then(data => handleResponse(data));\n    });\n    \n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initForms);\n\n//# sourceURL=webpack://dpm-shift-tracker/./gulp/scripts/modules/forms.js?");
      /***/
    },

    /***/
    "./gulp/scripts/modules/index.js":
    /*!***************************************!*\
      !*** ./gulp/scripts/modules/index.js ***!
      \***************************************/

    /***/
    function gulpScriptsModulesIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initBtns\": () => (/* reexport safe */ _btns_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"initForms\": () => (/* reexport safe */ _forms_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ \"./gulp/scripts/modules/forms.js\");\n/* harmony import */ var _btns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btns.js */ \"./gulp/scripts/modules/btns.js\");\n\n\n\n\n\n//# sourceURL=webpack://dpm-shift-tracker/./gulp/scripts/modules/index.js?");
      /***/
    },

    /***/
    "./gulp/scripts/modules/utils.js":
    /*!***************************************!*\
      !*** ./gulp/scripts/modules/utils.js ***!
      \***************************************/

    /***/
    function gulpScriptsModulesUtilsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"confirmFetch\": () => (/* binding */ confirmFetch)\n/* harmony export */ });\nconst confirmFetch = ($confirmMessage = false) => {\n\n  let isConfirmed = true; \n\n  if($confirmMessage) isConfirmed = confirm($confirmMessage);  \n\n  return isConfirmed;\n\n}\n\n\n\n//# sourceURL=webpack://dpm-shift-tracker/./gulp/scripts/modules/utils.js?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module can't be inlined because the eval devtool is used.

  /******/


  var __webpack_exports__ = __webpack_require__("./gulp/scripts/index.js");
  /******/

  /******/

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gKiBBVFRFTlRJT046IFRoZSBcImV2YWxcIiBkZXZ0b29sIGhhcyBiZWVuIHVzZWQgKG1heWJlIGJ5IGRlZmF1bHQgaW4gbW9kZTogXCJkZXZlbG9wbWVudFwiKS5cbiAqIFRoaXMgZGV2dG9vbCBpcyBuZWl0aGVyIG1hZGUgZm9yIHByb2R1Y3Rpb24gbm9yIGZvciByZWFkYWJsZSBvdXRwdXQgZmlsZXMuXG4gKiBJdCB1c2VzIFwiZXZhbCgpXCIgY2FsbHMgdG8gY3JlYXRlIGEgc2VwYXJhdGUgc291cmNlIGZpbGUgaW4gdGhlIGJyb3dzZXIgZGV2dG9vbHMuXG4gKiBJZiB5b3UgYXJlIHRyeWluZyB0byByZWFkIHRoZSBvdXRwdXQgZmlsZSwgc2VsZWN0IGEgZGlmZmVyZW50IGRldnRvb2wgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uZmlndXJhdGlvbi9kZXZ0b29sLylcbiAqIG9yIGRpc2FibGUgdGhlIGRlZmF1bHQgZGV2dG9vbCB3aXRoIFwiZGV2dG9vbDogZmFsc2VcIi5cbiAqIElmIHlvdSBhcmUgbG9va2luZyBmb3IgcHJvZHVjdGlvbi1yZWFkeSBvdXRwdXQgZmlsZXMsIHNlZSBtb2RlOiBcInByb2R1Y3Rpb25cIiAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL21vZGUvKS5cbiAqL1xuXG4vKioqKioqL1xuKGZ1bmN0aW9uICgpIHtcbiAgLy8gd2VicGFja0Jvb3RzdHJhcFxuXG4gIC8qKioqKiovXG4gIFwidXNlIHN0cmljdFwiO1xuICAvKioqKioqL1xuXG4gIHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0ge1xuICAgIC8qKiovXG4gICAgXCIuL2d1bHAvc2NyaXB0cy9pbmRleC5qc1wiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAhKioqIC4vZ3VscC9zY3JpcHRzL2luZGV4LmpzICoqKiFcbiAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8qKiovXG4gICAgZnVuY3Rpb24gZ3VscFNjcmlwdHNJbmRleEpzKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICBldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbW9kdWxlc19pbmRleF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tb2R1bGVzL2luZGV4LmpzICovIFxcXCIuL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2luZGV4LmpzXFxcIik7XFxuY29uc3QgZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpO1xcbmNvbnN0IGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZmV0Y2gnKSk7XFxuXFxuXFxuXFxuaWYoYnRucy5sZW5ndGgpIHtcXG4gICgwLF9tb2R1bGVzX2luZGV4X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18uaW5pdEJ0bnMpKGJ0bnMpO1xcbn0gZWxzZSB7XFxuICBjb25zb2xlLmxvZygncGFnZSBkb2VzIG5vdCBoYXZlIGZldGNoIGJ1dHRvbnMnKVxcbn1cXG5cXG5cXG5pZihmb3Jtcy5sZW5ndGgpIHtcXG4gICgwLF9tb2R1bGVzX2luZGV4X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18uaW5pdEZvcm1zKShmb3JtcylcXG59IGVsc2Uge1xcbiAgY29uc29sZS5sb2coJ3BhZ2UgZG9lcyBub3QgaGF2ZSBmb3JtcycpXFxufVxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL2RwbS1zaGlmdC10cmFja2VyLy4vZ3VscC9zY3JpcHRzL2luZGV4LmpzP1wiKTtcbiAgICAgIC8qKiovXG4gICAgfSxcblxuICAgIC8qKiovXG4gICAgXCIuL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2J0bnMuanNcIjpcbiAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICEqKiogLi9ndWxwL3NjcmlwdHMvbW9kdWxlcy9idG5zLmpzICoqKiFcbiAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKioqL1xuICAgIGZ1bmN0aW9uIGd1bHBTY3JpcHRzTW9kdWxlc0J0bnNKcyhfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgZXZhbChcIl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXFxcImRlZmF1bHRcXFwiOiAoKSA9PiAoX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18pXFxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF91dGlsc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlscy5qcyAqLyBcXFwiLi9ndWxwL3NjcmlwdHMvbW9kdWxlcy91dGlscy5qc1xcXCIpO1xcblxcblxcbmNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKCRkYXRhKSA9PiB7XFxuICBjb25zdCB7IHN1Y2Nlc3MsIG1lc3NhZ2UsIHJlbG9jYXRlVG8gfSA9ICRkYXRhO1xcblxcbiAgYWxlcnQobWVzc2FnZSk7XFxuXFxuICBpZihyZWxvY2F0ZVRvKSB7XFxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlbG9jYXRlVG8pO1xcbiAgfSBlbHNlIHtcXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcbiAgfVxcblxcbn1cXG5cXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoJGJ0bikgPT4ge1xcblxcbiAgLy8gY29uZmlybVxcblxcbiAgY29uc3QgaXNDb25maXJtZWQgPSAoMCxfdXRpbHNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy5jb25maXJtRmV0Y2gpKCRidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpcm0nKSk7XFxuXFxuICBpZighaXNDb25maXJtZWQpIHJldHVybjtcXG5cXG4gIC8vIGlmIGNvbmZpcm1lZCwgY29udGludWVcXG5cXG4gIGNvbnN0IGFjdGlvbiA9ICRidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xcbiAgY29uc3QgbWV0aG9kID0gJGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0aG9kJyk7ICBcXG5cXG4gIGNvbnN0IG9wdGlvbnMgPSB7XFxuICAgIG1ldGhvZCxcXG4gICAgaGVhZGVyczoge1xcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXFxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xcbiAgICB9XFxuICB9XFxuXFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFjdGlvbiwgb3B0aW9ucyk7XFxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xcblxcbiAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlKGRhdGEpO1xcblxcbn1cXG5cXG5jb25zdCBpbml0QnRucyA9ICgkYnRucykgPT4ge1xcbiAgJGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XFxuXFxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxcbiAgICAgIGZldGNoRGF0YShldmVudC50YXJnZXQpOyAgICAgIFxcbiAgICB9KTtcXG5cXG4gIH0pO1xcbn1cXG5cXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fID0gKGluaXRCdG5zKTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kcG0tc2hpZnQtdHJhY2tlci8uL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2J0bnMuanM/XCIpO1xuICAgICAgLyoqKi9cbiAgICB9LFxuXG4gICAgLyoqKi9cbiAgICBcIi4vZ3VscC9zY3JpcHRzL21vZHVsZXMvZm9ybXMuanNcIjpcbiAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAhKioqIC4vZ3VscC9zY3JpcHRzL21vZHVsZXMvZm9ybXMuanMgKioqIVxuICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKioqL1xuICAgIGZ1bmN0aW9uIGd1bHBTY3JpcHRzTW9kdWxlc0Zvcm1zSnMoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgIGV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcXG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFxcXCJkZWZhdWx0XFxcIjogKCkgPT4gKF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fKVxcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xcbmNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKCRkYXRhKSA9PiB7XFxuXFxuICBjb25zdCB7IHN1Y2Nlc3MsIG1lc3NhZ2UsIHJlbG9jYXRlVG8gfSA9ICRkYXRhO1xcblxcbiAgYWxlcnQobWVzc2FnZSk7XFxuXFxuICBpZihyZWxvY2F0ZVRvKSB7XFxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlbG9jYXRlVG8pOyBcXG4gIH0gZWxzZSB7XFxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcXG4gIH1cXG5cXG59XFxuXFxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCRmb3JtKSA9PiB7XFxuICBjb25zdCBhdHRycyA9ICRmb3JtLmdldEF0dHJpYnV0ZU5hbWVzKCkucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcXG4gICAgcmV0dXJuIHsuLi5hY2MsIFtuYW1lXTogJGZvcm0uZ2V0QXR0cmlidXRlKG5hbWUpfVxcbiAgfSwge30pO1xcblxcbiAgY29uc3Qgb3B0aW9ucyA9IHtcXG4gICAgbWV0aG9kOiBhdHRycy5tZXRob2QsXFxuICAgIGhlYWRlcnM6IHtcXG4gICAgICAnQ29udGVudC1UeXBlJzogYXR0cnMuZW5jdHlwZSxcXG4gICAgICAnQWNjZXB0JzogYXR0cnMuZW5jdHlwZVxcbiAgICB9XFxuICB9XFxuXFxuICBjb25zdCBuZWVkc0JvZHkgPSBhdHRycy5tZXRob2QgPT09ICdQT1NUJyB8fCBhdHRycy5tZXRob2QgPT09ICdQVVQnO1xcbiBcXG4gIGlmKG5lZWRzQm9keSkge1xcbiAgICBsZXQgYm9keSA9IHt9O1xcbiAgICBsZXQgZm9ybUVsZW1lbnRzID0gQXJyYXkuZnJvbSgkZm9ybS5lbGVtZW50cyk7XFxuICAgIGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiB7XFxuICAgICAgaWYoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSkge1xcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XFxuICAgICAgfVxcbiAgICB9KTtcXG5cXG4gICAgZm9ybUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XFxuICAgICAgY29uc3QgcHJvcGVydHkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xcbiAgICAgIGNvbnN0IHZhbHVlID0gJGZvcm1bcHJvcGVydHldLnZhbHVlO1xcbiAgICAgIGJvZHlbcHJvcGVydHldID0gdmFsdWU7XFxuICAgICAgXFxuICAgIH0pO1xcbiAgICBcXG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XFxuICAgIFxcbiAgfVxcblxcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhdHRycy5hY3Rpb24sIG9wdGlvbnMpO1xcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcXG4gIFxcbiAgZGF0YS5yZWxvY2F0ZVRvID0gJGZvcm0uZ2V0QXR0cmlidXRlKCd0YXJnZXQnKSB8fCBmYWxzZTtcXG5cXG4gIHJldHVybiBkYXRhOyAgIFxcblxcbn1cXG5cXG5jb25zdCBpbml0Rm9ybXMgPSAoJGZvcm1zKSA9PiB7XFxuICAkZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XFxuICAgICAgZmV0Y2hEYXRhKGV2ZW50LnRhcmdldCkudGhlbihkYXRhID0+IGhhbmRsZVJlc3BvbnNlKGRhdGEpKTtcXG4gICAgfSk7XFxuICAgIFxcbiAgfSk7XFxufVxcblxcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18gPSAoaW5pdEZvcm1zKTtcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kcG0tc2hpZnQtdHJhY2tlci8uL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2Zvcm1zLmpzP1wiKTtcbiAgICAgIC8qKiovXG4gICAgfSxcblxuICAgIC8qKiovXG4gICAgXCIuL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2luZGV4LmpzXCI6XG4gICAgLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgISoqKiAuL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2luZGV4LmpzICoqKiFcbiAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKi9cbiAgICBmdW5jdGlvbiBndWxwU2NyaXB0c01vZHVsZXNJbmRleEpzKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICBldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcXFwiaW5pdEJ0bnNcXFwiOiAoKSA9PiAoLyogcmVleHBvcnQgc2FmZSAqLyBfYnRuc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1xcXCJkZWZhdWx0XFxcIl0pLFxcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXFxcImluaXRGb3Jtc1xcXCI6ICgpID0+ICgvKiByZWV4cG9ydCBzYWZlICovIF9mb3Jtc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1xcXCJkZWZhdWx0XFxcIl0pXFxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9mb3Jtc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9mb3Jtcy5qcyAqLyBcXFwiLi9ndWxwL3NjcmlwdHMvbW9kdWxlcy9mb3Jtcy5qc1xcXCIpO1xcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYnRuc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9idG5zLmpzICovIFxcXCIuL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2J0bnMuanNcXFwiKTtcXG5cXG5cXG5cXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9kcG0tc2hpZnQtdHJhY2tlci8uL2d1bHAvc2NyaXB0cy9tb2R1bGVzL2luZGV4LmpzP1wiKTtcbiAgICAgIC8qKiovXG4gICAgfSxcblxuICAgIC8qKiovXG4gICAgXCIuL2d1bHAvc2NyaXB0cy9tb2R1bGVzL3V0aWxzLmpzXCI6XG4gICAgLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgISoqKiAuL2d1bHAvc2NyaXB0cy9tb2R1bGVzL3V0aWxzLmpzICoqKiFcbiAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKi9cbiAgICBmdW5jdGlvbiBndWxwU2NyaXB0c01vZHVsZXNVdGlsc0pzKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICBldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcXFwiY29uZmlybUZldGNoXFxcIjogKCkgPT4gKC8qIGJpbmRpbmcgKi8gY29uZmlybUZldGNoKVxcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xcbmNvbnN0IGNvbmZpcm1GZXRjaCA9ICgkY29uZmlybU1lc3NhZ2UgPSBmYWxzZSkgPT4ge1xcblxcbiAgbGV0IGlzQ29uZmlybWVkID0gdHJ1ZTsgXFxuXFxuICBpZigkY29uZmlybU1lc3NhZ2UpIGlzQ29uZmlybWVkID0gY29uZmlybSgkY29uZmlybU1lc3NhZ2UpOyAgXFxuXFxuICByZXR1cm4gaXNDb25maXJtZWQ7XFxuXFxufVxcblxcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL2RwbS1zaGlmdC10cmFja2VyLy4vZ3VscC9zY3JpcHRzL21vZHVsZXMvdXRpbHMuanM/XCIpO1xuICAgICAgLyoqKi9cbiAgICB9XG4gICAgLyoqKioqKi9cblxuICB9O1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIFRoZSBtb2R1bGUgY2FjaGVcblxuICAvKioqKioqL1xuXG4gIHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuXG4gIC8qKioqKiovXG5cbiAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgIC8qKioqKiovXG4gICAgLy8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cbiAgICAvKioqKioqL1xuICAgIHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuICAgIC8qKioqKiovXG5cbiAgICBpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKioqKiovXG4gICAgICByZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4gICAgICAvKioqKioqL1xuICAgIH1cbiAgICAvKioqKioqL1xuICAgIC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cbiAgICAvKioqKioqL1xuXG5cbiAgICB2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXG4gICAgICAvKioqKioqL1xuICAgICAgZXhwb3J0czoge31cbiAgICAgIC8qKioqKiovXG5cbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXG4gICAgLyoqKioqKi9cblxuICAgIF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cbiAgICAvKioqKioqL1xuXG5cbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gICAgLyoqKioqKi9cbiAgfVxuICAvKioqKioqL1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqKioqKi9cblxuICAvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cblxuICAvKioqKioqL1xuXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqL1xuICAgIC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcblxuICAgIC8qKioqKiovXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24gKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcbiAgICAgIC8qKioqKiovXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBkZWZpbml0aW9uW2tleV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICB9XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgIH1cbiAgICAgIC8qKioqKiovXG5cbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgfSkoKTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuXG4gIC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cblxuICAvKioqKioqL1xuXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqL1xuICAgIF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgfSkoKTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuXG4gIC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cblxuICAvKioqKioqL1xuXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqL1xuICAgIC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcblxuICAgIC8qKioqKiovXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgICAgIC8qKioqKiovXG4gICAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogJ01vZHVsZSdcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgLyoqKioqKi9cbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgfSkoKTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKioqKiovXG5cbiAgLyoqKioqKi9cbiAgLy8gc3RhcnR1cFxuXG4gIC8qKioqKiovXG4gIC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXG4gIC8qKioqKiovXG4gIC8vIFRoaXMgZW50cnkgbW9kdWxlIGNhbid0IGJlIGlubGluZWQgYmVjYXVzZSB0aGUgZXZhbCBkZXZ0b29sIGlzIHVzZWQuXG5cbiAgLyoqKioqKi9cblxuXG4gIHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vZ3VscC9zY3JpcHRzL2luZGV4LmpzXCIpO1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG5cbn0pKCk7Il0sImZpbGUiOiJidW5kbGUuanMifQ==
