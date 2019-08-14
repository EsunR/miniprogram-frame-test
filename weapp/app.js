"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _store = _interopRequireDefault(require('store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].app({
  hooks: {},
  globalData: {
    userInfo: null
  },
  onLaunch: function onLaunch() {
    _store["default"].commit('setAppStartTime', new Date());

    console.log('小程序开始启动：', _store["default"].state.appStartTime);
  },
  methods: {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });