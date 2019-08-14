"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _listData = require('../data/list-data.js');

var _tools = require('../utils/tools.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_core["default"].page({
  data: {
    data: [],
    refreshCount: 1,
    renderStartTime: new Date(),
    multiply: false
  },
  methods: {
    handleSwitchChange: function handleSwitchChange(e) {
      this.multiply = e.$wx.detail.value;
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var _this = this;

    setTimeout(function () {
      console.log('开始刷新!');
      _this.renderStartTime = new Date();
      var push_data = [];

      if (_this.multiply) {
        for (var i = 0; i < _this.refreshCount; i++) {
          var sort_list_data = (0, _tools.shuffle)(_listData.list_data);
          push_data = [].concat(_toConsumableArray(push_data), _toConsumableArray(sort_list_data));
        }

        _this.refreshCount = _this.refreshCount * 2;
      } else {
        for (var _i = 0; _i < 10; _i++) {
          var _sort_list_data = (0, _tools.shuffle)(_listData.list_data);

          push_data = [].concat(_toConsumableArray(push_data), _toConsumableArray(_sort_list_data));
        }
      }

      console.log(_this);
      _this.data = [].concat(_toConsumableArray(push_data), _toConsumableArray(_this.data));

      _this.$nextTick(function () {
        var time = parseInt(new Date() - _this.renderStartTime);
        console.log("\u5217\u8868\u6E32\u67D3\u8017\u65F6\uFF1A".concat(time, " ms\uFF0C\u6DFB\u52A0\u5217\u8868\u6570\u91CF\uFF1A").concat(_this.data.length - _this.dataLength, "\uFF0C\u5F53\u524D\u6570\u636E\u91CF: ").concat(_this.data.length));
        wx.stopPullDownRefresh();
      });
    }, 500);
  },
  onUnload: function onUnload() {
    this.data = [];
    this.refreshCount = 1;
    this.renderStartTime = new Date();
    this.multiply = false;
    console.log('onUnload');
  },
  onLoad: function onLoad() {
    this.dataLength = this.data.length;
  }
}, {info: {"components":{"card":{"path":"..\\components\\card"}},"on":{}}, handlers: {'6-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSwitchChange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"card":{"path":"..\\components\\card"}},"on":{}}, handlers: {'6-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSwitchChange($event)
      })();
    
  }}}, models: {} });