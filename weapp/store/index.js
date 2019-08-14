"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _x = _interopRequireDefault(require('../vendor.js')(2));

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

var store = new _x["default"].Store({
  state: {
    appStartTime: 0
  },
  mutations: {
    setAppStartTime: function setAppStartTime(state, time) {
      state.appStartTime = time;
    }
  }
});
var _default = store;
exports["default"] = _default;