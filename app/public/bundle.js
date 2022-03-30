"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./assets/scripts/modules/btns.js":
    /*!****************************************!*\
      !*** ./assets/scripts/modules/btns.js ***!
      \****************************************/

    /***/
    function assetsScriptsModulesBtnsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "./assets/scripts/modules/utils.js");

      var handleResponse = function handleResponse($data) {
        var success = $data.success,
            message = $data.message,
            relocateTo = $data.relocateTo;
        alert(message);

        if (relocateTo) {
          window.location.replace(relocateTo);
        } else {
          window.location.reload();
        }
      };

      var fetchData = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee($btn) {
          var isConfirmed, action, method, options, response, data;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // confirm
                  isConfirmed = (0, _utils_js__WEBPACK_IMPORTED_MODULE_0__.confirmFetch)($btn.getAttribute('data-confirm'));

                  if (isConfirmed) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  // if confirmed, continue
                  action = $btn.getAttribute('data-action');
                  method = $btn.getAttribute('data-method');
                  options = {
                    method: method,
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                    }
                  };
                  _context.next = 8;
                  return fetch(action, options);

                case 8:
                  response = _context.sent;
                  _context.next = 11;
                  return response.json();

                case 11:
                  data = _context.sent;
                  return _context.abrupt("return", handleResponse(data));

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function fetchData(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      var initBtns = function initBtns($btns) {
        $btns.forEach(function (btn) {
          btn.addEventListener('click', function (event) {
            event.preventDefault();
            fetchData(event.target);
          });
        });
      };
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = initBtns;
      /***/
    },

    /***/
    "./assets/scripts/modules/forms.js":
    /*!*****************************************!*\
      !*** ./assets/scripts/modules/forms.js ***!
      \*****************************************/

    /***/
    function assetsScriptsModulesFormsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });

      var handleResponse = function handleResponse($data) {
        var success = $data.success,
            message = $data.message,
            relocateTo = $data.relocateTo;
        alert(message);

        if (relocateTo) {
          window.location.replace(relocateTo);
        } else {
          window.location.reload();
        }
      };

      var fetchData = /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2($form) {
          var attrs, options, needsBody, body, formElements, response, data;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  attrs = $form.getAttributeNames().reduce(function (acc, name) {
                    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, name, $form.getAttribute(name)));
                  }, {});
                  options = {
                    method: attrs.method,
                    headers: {
                      'Content-Type': attrs.enctype,
                      'Accept': attrs.enctype
                    }
                  };
                  needsBody = attrs.method === 'POST' || attrs.method === 'PUT';

                  if (needsBody) {
                    body = {};
                    formElements = Array.from($form.elements);
                    formElements = formElements.filter(function (element) {
                      if (element.hasAttribute('name')) {
                        return element;
                      }
                    });
                    formElements.forEach(function (element) {
                      var property = element.getAttribute('name');
                      var value = $form[property].value;
                      body[property] = value;
                    });
                    options.body = JSON.stringify(body);
                  }

                  _context2.next = 6;
                  return fetch(attrs.action, options);

                case 6:
                  response = _context2.sent;
                  _context2.next = 9;
                  return response.json();

                case 9:
                  data = _context2.sent;
                  data.relocateTo = $form.getAttribute('target') || false;
                  return _context2.abrupt("return", data);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function fetchData(_x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      var initForms = function initForms($forms) {
        $forms.forEach(function (form) {
          form.addEventListener('submit', function (event) {
            event.preventDefault();
            fetchData(event.target).then(function (data) {
              return handleResponse(data);
            });
          });
        });
      };
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = initForms;
      /***/
    },

    /***/
    "./assets/scripts/modules/index.js":
    /*!*****************************************!*\
      !*** ./assets/scripts/modules/index.js ***!
      \*****************************************/

    /***/
    function assetsScriptsModulesIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initBtns": function initBtns() {
          return (
            /* reexport safe */
            _btns_js__WEBPACK_IMPORTED_MODULE_1__["default"]
          );
        },

        /* harmony export */
        "initForms": function initForms() {
          return (
            /* reexport safe */
            _forms_js__WEBPACK_IMPORTED_MODULE_0__["default"]
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forms.js */
      "./assets/scripts/modules/forms.js");
      /* harmony import */


      var _btns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./btns.js */
      "./assets/scripts/modules/btns.js");
      /***/

    },

    /***/
    "./assets/scripts/modules/utils.js":
    /*!*****************************************!*\
      !*** ./assets/scripts/modules/utils.js ***!
      \*****************************************/

    /***/
    function assetsScriptsModulesUtilsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "confirmFetch": function confirmFetch() {
          return (
            /* binding */
            _confirmFetch
          );
        }
        /* harmony export */

      });

      var _confirmFetch = function _confirmFetch() {
        var $confirmMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var isConfirmed = true;
        if ($confirmMessage) isConfirmed = confirm($confirmMessage);
        return isConfirmed;
      };
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


  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

  (function () {
    /*!*******************************!*\
      !*** ./assets/scripts/app.js ***!
      \*******************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modules/index.js */
    "./assets/scripts/modules/index.js");

    var forms = Array.from(document.querySelectorAll('.form'));
    var btns = Array.from(document.querySelectorAll('.btn-fetch'));

    if (btns.length) {
      (0, _modules_index_js__WEBPACK_IMPORTED_MODULE_0__.initBtns)(btns);
    } else {
      console.log('page does not have fetch buttons');
    }

    if (forms.length) {
      (0, _modules_index_js__WEBPACK_IMPORTED_MODULE_0__.initForms)(forms);
    } else {
      console.log('page does not have forms');
    }
  })();
  /******/

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qKioqKiovXG4oZnVuY3Rpb24gKCkge1xuICAvLyB3ZWJwYWNrQm9vdHN0cmFwXG5cbiAgLyoqKioqKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIC8qKioqKiovXG5cbiAgdmFyIF9fd2VicGFja19tb2R1bGVzX18gPSB7XG4gICAgLyoqKi9cbiAgICBcIi4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9idG5zLmpzXCI6XG4gICAgLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICEqKiogLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2J0bnMuanMgKioqIVxuICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKi9cbiAgICBmdW5jdGlvbiBhc3NldHNTY3JpcHRzTW9kdWxlc0J0bnNKcyhfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgLyogaGFybW9ueSBleHBvcnQgKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICAgICAgICAvKiBoYXJtb255IGV4cG9ydCAqL1xuICAgICAgICBcImRlZmF1bHRcIjogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fO1xuICAgICAgICB9XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovXG5cbiAgICAgIH0pO1xuICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICB2YXIgX3V0aWxzX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgICAgLyohIC4vdXRpbHMuanMgKi9cbiAgICAgIFwiLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3V0aWxzLmpzXCIpO1xuXG4gICAgICB2YXIgaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZSgkZGF0YSkge1xuICAgICAgICB2YXIgc3VjY2VzcyA9ICRkYXRhLnN1Y2Nlc3MsXG4gICAgICAgICAgICBtZXNzYWdlID0gJGRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgIHJlbG9jYXRlVG8gPSAkZGF0YS5yZWxvY2F0ZVRvO1xuICAgICAgICBhbGVydChtZXNzYWdlKTtcblxuICAgICAgICBpZiAocmVsb2NhdGVUbykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlbG9jYXRlVG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGZldGNoRGF0YSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoJGJ0bikge1xuICAgICAgICAgIHZhciBpc0NvbmZpcm1lZCwgYWN0aW9uLCBtZXRob2QsIG9wdGlvbnMsIHJlc3BvbnNlLCBkYXRhO1xuICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAvLyBjb25maXJtXG4gICAgICAgICAgICAgICAgICBpc0NvbmZpcm1lZCA9ICgwLCBfdXRpbHNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy5jb25maXJtRmV0Y2gpKCRidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpcm0nKSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpc0NvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAvLyBpZiBjb25maXJtZWQsIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICBhY3Rpb24gPSAkYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZCA9ICRidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1ldGhvZCcpO1xuICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKGFjdGlvbiwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTE7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBoYW5kbGVSZXNwb25zZShkYXRhKSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBmZXRjaERhdGEoX3gpIHtcbiAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSgpO1xuXG4gICAgICB2YXIgaW5pdEJ0bnMgPSBmdW5jdGlvbiBpbml0QnRucygkYnRucykge1xuICAgICAgICAkYnRucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmZXRjaERhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqL1xuXG5cbiAgICAgIHZhciBfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXyA9IGluaXRCdG5zO1xuICAgICAgLyoqKi9cbiAgICB9LFxuXG4gICAgLyoqKi9cbiAgICBcIi4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb3Jtcy5qc1wiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgISoqKiAuL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZm9ybXMuanMgKioqIVxuICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8qKiovXG4gICAgZnVuY3Rpb24gYXNzZXRzU2NyaXB0c01vZHVsZXNGb3Jtc0pzKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgICAvKiBoYXJtb255IGV4cG9ydCAqL1xuXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovXG4gICAgICAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX187XG4gICAgICAgIH1cbiAgICAgICAgLyogaGFybW9ueSBleHBvcnQgKi9cblxuICAgICAgfSk7XG5cbiAgICAgIHZhciBoYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKCRkYXRhKSB7XG4gICAgICAgIHZhciBzdWNjZXNzID0gJGRhdGEuc3VjY2VzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAkZGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgcmVsb2NhdGVUbyA9ICRkYXRhLnJlbG9jYXRlVG87XG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChyZWxvY2F0ZVRvKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVsb2NhdGVUbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgZmV0Y2hEYXRhID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKCRmb3JtKSB7XG4gICAgICAgICAgdmFyIGF0dHJzLCBvcHRpb25zLCBuZWVkc0JvZHksIGJvZHksIGZvcm1FbGVtZW50cywgcmVzcG9uc2UsIGRhdGE7XG4gICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBhdHRycyA9ICRmb3JtLmdldEF0dHJpYnV0ZU5hbWVzKCkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYWNjKSwge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIG5hbWUsICRmb3JtLmdldEF0dHJpYnV0ZShuYW1lKSkpO1xuICAgICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhdHRycy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogYXR0cnMuZW5jdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogYXR0cnMuZW5jdHlwZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgbmVlZHNCb2R5ID0gYXR0cnMubWV0aG9kID09PSAnUE9TVCcgfHwgYXR0cnMubWV0aG9kID09PSAnUFVUJztcblxuICAgICAgICAgICAgICAgICAgaWYgKG5lZWRzQm9keSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50cyA9IEFycmF5LmZyb20oJGZvcm0uZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkZm9ybVtwcm9wZXJ0eV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgYm9keVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goYXR0cnMuYWN0aW9uLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgICAgICAgZGF0YS5yZWxvY2F0ZVRvID0gJGZvcm0uZ2V0QXR0cmlidXRlKCd0YXJnZXQnKSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBmZXRjaERhdGEoX3gyKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9KCk7XG5cbiAgICAgIHZhciBpbml0Rm9ybXMgPSBmdW5jdGlvbiBpbml0Rm9ybXMoJGZvcm1zKSB7XG4gICAgICAgICRmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmZXRjaERhdGEoZXZlbnQudGFyZ2V0KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGVSZXNwb25zZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovXG5cblxuICAgICAgdmFyIF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fID0gaW5pdEZvcm1zO1xuICAgICAgLyoqKi9cbiAgICB9LFxuXG4gICAgLyoqKi9cbiAgICBcIi4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9pbmRleC5qc1wiOlxuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgISoqKiAuL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvaW5kZXguanMgKioqIVxuICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8qKiovXG4gICAgZnVuY3Rpb24gYXNzZXRzU2NyaXB0c01vZHVsZXNJbmRleEpzKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgICAvKiBoYXJtb255IGV4cG9ydCAqL1xuXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovXG4gICAgICAgIFwiaW5pdEJ0bnNcIjogZnVuY3Rpb24gaW5pdEJ0bnMoKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8qIHJlZXhwb3J0IHNhZmUgKi9cbiAgICAgICAgICAgIF9idG5zX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiBoYXJtb255IGV4cG9ydCAqL1xuICAgICAgICBcImluaXRGb3Jtc1wiOiBmdW5jdGlvbiBpbml0Rm9ybXMoKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8qIHJlZXhwb3J0IHNhZmUgKi9cbiAgICAgICAgICAgIF9mb3Jtc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLyogaGFybW9ueSBleHBvcnQgKi9cblxuICAgICAgfSk7XG4gICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgIHZhciBfZm9ybXNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gICAgICAvKiEgLi9mb3Jtcy5qcyAqL1xuICAgICAgXCIuL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZm9ybXMuanNcIik7XG4gICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgIHZhciBfYnRuc19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgIC8qISAuL2J0bnMuanMgKi9cbiAgICAgIFwiLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2J0bnMuanNcIik7XG4gICAgICAvKioqL1xuXG4gICAgfSxcblxuICAgIC8qKiovXG4gICAgXCIuL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvdXRpbHMuanNcIjpcbiAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICEqKiogLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3V0aWxzLmpzICoqKiFcbiAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKioqL1xuICAgIGZ1bmN0aW9uIGFzc2V0c1NjcmlwdHNNb2R1bGVzVXRpbHNKcyhfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgLyogaGFybW9ueSBleHBvcnQgKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICAgICAgICAvKiBoYXJtb255IGV4cG9ydCAqL1xuICAgICAgICBcImNvbmZpcm1GZXRjaFwiOiBmdW5jdGlvbiBjb25maXJtRmV0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8qIGJpbmRpbmcgKi9cbiAgICAgICAgICAgIF9jb25maXJtRmV0Y2hcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0ICovXG5cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgX2NvbmZpcm1GZXRjaCA9IGZ1bmN0aW9uIF9jb25maXJtRmV0Y2goKSB7XG4gICAgICAgIHZhciAkY29uZmlybU1lc3NhZ2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgICAgICB2YXIgaXNDb25maXJtZWQgPSB0cnVlO1xuICAgICAgICBpZiAoJGNvbmZpcm1NZXNzYWdlKSBpc0NvbmZpcm1lZCA9IGNvbmZpcm0oJGNvbmZpcm1NZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGlzQ29uZmlybWVkO1xuICAgICAgfTtcbiAgICAgIC8qKiovXG5cbiAgICB9XG4gICAgLyoqKioqKi9cblxuICB9O1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIFRoZSBtb2R1bGUgY2FjaGVcblxuICAvKioqKioqL1xuXG4gIHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuXG4gIC8qKioqKiovXG5cbiAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgIC8qKioqKiovXG4gICAgLy8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cbiAgICAvKioqKioqL1xuICAgIHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuICAgIC8qKioqKiovXG5cbiAgICBpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKioqKiovXG4gICAgICByZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4gICAgICAvKioqKioqL1xuICAgIH1cbiAgICAvKioqKioqL1xuICAgIC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cbiAgICAvKioqKioqL1xuXG5cbiAgICB2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXG4gICAgICAvKioqKioqL1xuICAgICAgZXhwb3J0czoge31cbiAgICAgIC8qKioqKiovXG5cbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXG4gICAgLyoqKioqKi9cblxuICAgIF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cbiAgICAvKioqKioqL1xuXG5cbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gICAgLyoqKioqKi9cbiAgfVxuICAvKioqKioqL1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqKioqKi9cblxuICAvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cblxuICAvKioqKioqL1xuXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqL1xuICAgIC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcblxuICAgIC8qKioqKiovXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24gKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcbiAgICAgIC8qKioqKiovXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBkZWZpbml0aW9uW2tleV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICB9XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgIH1cbiAgICAgIC8qKioqKiovXG5cbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgfSkoKTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuXG4gIC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cblxuICAvKioqKioqL1xuXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqL1xuICAgIF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgfSkoKTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuXG4gIC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cblxuICAvKioqKioqL1xuXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqL1xuICAgIC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcblxuICAgIC8qKioqKiovXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgICAgIC8qKioqKiovXG4gICAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogJ01vZHVsZSdcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgLyoqKioqKi9cbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgfSkoKTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgdmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTsgLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaXNvbGF0ZWQgYWdhaW5zdCBvdGhlciBtb2R1bGVzIGluIHRoZSBjaHVuay5cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAhKioqIC4vYXNzZXRzL3NjcmlwdHMvYXBwLmpzICoqKiFcbiAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgdmFyIF9tb2R1bGVzX2luZGV4X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgIC8qISAuL21vZHVsZXMvaW5kZXguanMgKi9cbiAgICBcIi4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9pbmRleC5qc1wiKTtcblxuICAgIHZhciBmb3JtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKSk7XG4gICAgdmFyIGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZmV0Y2gnKSk7XG5cbiAgICBpZiAoYnRucy5sZW5ndGgpIHtcbiAgICAgICgwLCBfbW9kdWxlc19pbmRleF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLmluaXRCdG5zKShidG5zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3BhZ2UgZG9lcyBub3QgaGF2ZSBmZXRjaCBidXR0b25zJyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1zLmxlbmd0aCkge1xuICAgICAgKDAsIF9tb2R1bGVzX2luZGV4X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18uaW5pdEZvcm1zKShmb3Jtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwYWdlIGRvZXMgbm90IGhhdmUgZm9ybXMnKTtcbiAgICB9XG4gIH0pKCk7XG4gIC8qKioqKiovXG5cbn0pKCk7Il0sImZpbGUiOiJidW5kbGUuanMifQ==
