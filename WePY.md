# WePY@腾讯

## 热度

Star : 18594

releases : 134

更新日期：8.12

当前版本：2.0.0 alpha

周下载：600+

## 特性

- 类 Vue 规范
- 使用 Vue Observer 实现数据绑定
- 支持 Vue watch/computed/mixin 等特性
- 基于原生组件实现组件化开发
- 支持 TypeScript
- 支持 Redux Vuex Promisify 插件
- 允许使用html标签，内部会自动转换
- 生命周期函数与原生小程序一样，并支持后续的添加 [参考文档](https://wepyjs.github.io/wepy-docs/2.x/#/base/instance?id=生命周期图示)
- 拥有单独的脚手架工具

## 版本迭代

当前版本2.x

>  全局安装 CLI 会覆盖老版本的 CLI 工具，新版本的 CLI 无法编译老版本的代码。因此，如果需要同时维护 WePY 1.7.x 和 WePY 2.0.x 的开发者，应当考虑在当前项目安装 CLI，而非全局安装。可以直接使用 1.7.x 的 CLI 去初始化 2.0.x 的项目，如下：`$ wepy init standard#2.0.x myproj`

## 程序与页面

原生小程序中，每个页面拥有独自的一个页面实例 Page，整个小程序只有一个 App 实例，是全部页面共享的。

同样的，在 WePY 的环境当中，每个 WePY 页面拥有独自的 WepyPage 实例。小程序也会有 WepyApp 实例。它们并非是继承自原生的 Page 和 App。WePY 提供 `wepy.app`，`wepy.page`，`wepy.component` 等入口 方法注册程序、页面、以及组件。注册后在组件的生命周期事件(onLaunch/onLoad/created)里，会自动创建相对应的 WePY 实例。

## 目录结构

```
node_modules
src
|- common
  |- eventHub.js
|- components
  |- xx.wpy
  |- xx.wpy
|- mixins
  |- test.js
|- pages
  |- index.wpy
|- store
  |- inedx.js
|- app.wyp
package.json
... ...
```

## WePY 单文件组件

WePY 单文件组件主要由 `<script>`，`<template>`，`<style>`，`<config>` 四部分组成（也包括小程序 `<wxs>`标签）。

## 生命周期

wepy component 实例生命周期与原生小程序的 **组件生命周期** 一致

## 模板语法

**WePY 继承了 WXML 的基本模板语法，并支持大部分 Vue 模板语法。**

> WXML（WeiXin Markup Language）是框架设计的一套标签语言，用来描述小程序页面的结构

同时，WePY **允许你使用大部分 HTML 模板标签**，经编译器编译后，会将模板标签的转换成标准的 WXML 模板语法。

##　Class 与 Style 绑定

WePY 推荐使用 `:class`，`:style` 进行样式属性绑定

## 性能

### 启动速度

```
小程序开始启动： Thu Aug 15 2019 10:34:49 GMT+0800 (GMT+08:00)
小程序启动完毕，耗时：20ms
```

启动在20ms左右

### 列表渲染：

**测试添加固定数量的数据，产生了如下情况：**

明显感受wepy是其余几款框架中渲染速度最慢的，可能与代码的处理方式不一样，由于wepy2.0存在bug，如果想要向原数据中多添加一组数据则需要将原数据进行一层深拷贝，早层额外的性能开销。同时当数据超过770条时，出现了延时长达30秒的停顿，已经属于无法正常使用的级别。

```
list.js:35 开始刷新!
list.js:59 列表渲染耗时：690 ms，添加列表数量：70，当前数据量: 70
list.js:35 开始刷新!
list.js:59 列表渲染耗时：874 ms，添加列表数量：140，当前数据量: 140
list.js:35 开始刷新!
list.js:59 列表渲染耗时：972 ms，添加列表数量：210，当前数据量: 210
list.js:35 开始刷新!
list.js:59 列表渲染耗时：1131 ms，添加列表数量：280，当前数据量: 280
list.js:35 开始刷新!
list.js:59 列表渲染耗时：275 ms，添加列表数量：350，当前数据量: 350
list.js:35 开始刷新!
list.js:59 列表渲染耗时：1370 ms，添加列表数量：420，当前数据量: 420
list.js:35 开始刷新!
list.js:59 列表渲染耗时：1491 ms，添加列表数量：490，当前数据量: 490
list.js:35 开始刷新!
list.js:59 列表渲染耗时：352 ms，添加列表数量：560，当前数据量: 560
list.js:35 开始刷新!
list.js:59 列表渲染耗时：369 ms，添加列表数量：630，当前数据量: 630
list.js:35 开始刷新!
list.js:59 列表渲染耗时：472 ms，添加列表数量：700，当前数据量: 700
list.js:35 开始刷新!
list.js:59 列表渲染耗时：417 ms，添加列表数量：770，当前数据量: 770
list.js:35 开始刷新!
list.js:59 列表渲染耗时：36901 ms，添加列表数量：840，当前数据量: 840
```

**测试成倍数据添加，产生了如下情况：**

单次添加数据超过217条时，出现长时间的延迟，应用已无法使用

```
list.js:35 开始刷新!
list.js:59 列表渲染耗时：381 ms，添加列表数量：7，当前数据量: 7
list.js:35 开始刷新!
list.js:59 列表渲染耗时：467 ms，添加列表数量：21，当前数据量: 21
list.js:35 开始刷新!
list.js:59 列表渲染耗时：573 ms，添加列表数量：49，当前数据量: 49
list.js:35 开始刷新!
list.js:59 列表渲染耗时：884 ms，添加列表数量：105，当前数据量: 105
list.js:35 开始刷新!
list.js:59 列表渲染耗时：1466 ms，添加列表数量：217，当前数据量: 217
list.js:35 开始刷新!
list.js:35 开始刷新!
```

**总结：**

虽然应用的启动速度完胜其他应用，但是性能上却远不如其他应用。大概是因为测试的版本为2.0.0α，当前版本不够稳定导致测试中出现了很多bug，在使用中也会出现bug，比如说使用微信原生接口停止下拉状态有时会失效、用户返回上级界面后无法重新进入原有的页面，非常影响用户体验。开发过程中的应用响应速度也不如其他框架，开发体验并不友好。

## 大小

197KB

$vendor 文件 89.8KB: @wepy vuex