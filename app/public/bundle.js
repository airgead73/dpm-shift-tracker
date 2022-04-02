"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

(function () {
  var forms = Array.from(document.querySelectorAll('.form'));

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
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee($form) {
      var attrs, options, needsBody, body, formElements, response, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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

              _context.next = 6;
              return fetch(attrs.action, options);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              data = _context.sent;
              data.relocateTo = $form.getAttribute('target') || false;
              return _context.abrupt("return", data);

            case 12:
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

  if (forms.length) {
    initForms(forms);
  } else {
    return;
  }
})();
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

(function () {
  var btns = Array.from(document.querySelectorAll('.btn-fetch'));

  var confirmFetch = function confirmFetch() {
    var $confirmMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var isConfirmed = true;
    if ($confirmMessage) isConfirmed = confirm($confirmMessage);
    return isConfirmed;
  };

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
              isConfirmed = confirmFetch($btn.getAttribute('data-confirm'));

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

  if (btns.length) {
    initBtns(btns);
  } else {
    return;
  }
})();
//# sourceMappingURL=bundle.js.map
