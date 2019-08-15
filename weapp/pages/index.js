"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  config: {
    navigationBarTitleText: 'test'
  },
  onShow: function onShow() {
    var time = parseInt(new Date() - _store["default"].state.appStartTime);
    console.log("\u5C0F\u7A0B\u5E8F\u542F\u52A8\u5B8C\u6BD5\uFF0C\u8017\u65F6\uFF1A".concat(time, "ms"));
  },
  methods: {
    goToList: function goToList() {
      wx.navigateTo({
        url: '/pages/list'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToList($event)
      })();
    
  }}}, models: {} });