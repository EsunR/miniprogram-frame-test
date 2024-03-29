# MpVue@美团

## 热度

Star : 18281

releases : 20

更新日期：5.14

当前版本：1.4.4 / 2.0.2

周下载：1400+

## 特点

- 完整的 Vue 开发体验
- H5 和小程序的代码可以复用，在未来最理想的状态是，可以一套代码可以直接跑在多端：WEB、小程序（微信和支付宝）、Native（借助weex）。

## 介绍

`mpvue` （[github 地址请参见](https://github.com/Meituan-Dianping/mpvue)）是一个使用 [Vue.js](https://vuejs.org/) 开发小程序的前端框架。框架基于 `Vue.js` 核心，`mpvue` 修改了 `Vue.js` 的 [runtime](http://mpvue.com/mpvue) 和 [compiler](http://mpvue.com/mpvue-template-compiler) 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 `Vue.js` 开发体验。

## 目录结构

```
src
|- components
|- pages
   |- counter
      |- index.vue
      |- main.js
      |- store.js
   |- index
      |- index.vue
      |- main.js
|- utils
   |- index.js
|- app.json
|- App.vue
|- main.js
static
package.json
... ...
```

## 状态管理

只能使用 Vuex

## 性能测试

### 启动耗时

```
小程序开始启动： Wed Aug 14 2019 12:33:14 GMT+0800 (GMT+08:00)
main.js:103 
小程序启动完毕，耗时：300ms
```

经过多次实机测试，mpvue 小程序的启动时间在330ms左右。

### 多列表组件渲染情况

**测试添加固定数量的数据，产生了如下情况：**

每次固定添加70条数据，当添加到 1000+ 时渲染列表会出现掉帧卡顿，之后恢复正常，到1700+时页面向下滑动会白屏，整个应用无响应崩溃。

处理渲染时长结果如下：

```
开始刷新!
main.js:159 列表渲染耗时：33 ms，添加列表数量：70，当前数据量: 70
main.js:141 开始刷新!
main.js:159 列表渲染耗时：46 ms，添加列表数量：140，当前数据量: 140
main.js:141 开始刷新!
main.js:159 列表渲染耗时：98 ms，添加列表数量：210，当前数据量: 210
main.js:141 开始刷新!
main.js:159 列表渲染耗时：125 ms，添加列表数量：280，当前数据量: 280
main.js:141 开始刷新!
main.js:159 列表渲染耗时：160 ms，添加列表数量：350，当前数据量: 350
main.js:141 开始刷新!
main.js:159 列表渲染耗时：151 ms，添加列表数量：420，当前数据量: 420
main.js:141 开始刷新!
main.js:159 列表渲染耗时：77 ms，添加列表数量：490，当前数据量: 490
main.js:141 开始刷新!
main.js:159 列表渲染耗时：178 ms，添加列表数量：560，当前数据量: 560
main.js:141 开始刷新!
main.js:159 列表渲染耗时：194 ms，添加列表数量：630，当前数据量: 630
main.js:141 开始刷新!
main.js:159 列表渲染耗时：198 ms，添加列表数量：700，当前数据量: 700
main.js:141 开始刷新!
main.js:159 列表渲染耗时：239 ms，添加列表数量：770，当前数据量: 770
main.js:141 开始刷新!
main.js:159 列表渲染耗时：210 ms，添加列表数量：840，当前数据量: 840
main.js:141 开始刷新!
main.js:159 列表渲染耗时：252 ms，添加列表数量：910，当前数据量: 910
main.js:141 开始刷新!
main.js:159 列表渲染耗时：193 ms，添加列表数量：980，当前数据量: 980
main.js:141 开始刷新!
main.js:159 列表渲染耗时：312 ms，添加列表数量：1050，当前数据量: 1050
main.js:141 开始刷新!
main.js:159 列表渲染耗时：388 ms，添加列表数量：1120，当前数据量: 1120
main.js:141 开始刷新!
main.js:159 列表渲染耗时：400 ms，添加列表数量：1190，当前数据量: 1190
main.js:141 开始刷新!
main.js:159 列表渲染耗时：407 ms，添加列表数量：1260，当前数据量: 1260
main.js:141 开始刷新!
main.js:159 列表渲染耗时：415 ms，添加列表数量：1330，当前数据量: 1330
main.js:141 开始刷新!
main.js:159 列表渲染耗时：448 ms，添加列表数量：1400，当前数据量: 1400
main.js:141 开始刷新!
main.js:159 列表渲染耗时：454 ms，添加列表数量：1470，当前数据量: 1470
main.js:141 开始刷新!
main.js:159 列表渲染耗时：453 ms，添加列表数量：1540，当前数据量: 1540
main.js:141 开始刷新!
main.js:159 列表渲染耗时：489 ms，添加列表数量：1610，当前数据量: 1610
main.js:141 开始刷新!
main.js:159 列表渲染耗时：543 ms，添加列表数量：1680，当前数据量: 1680
main.js:141 开始刷新!
main.js:159 列表渲染耗时：593 ms，添加列表数量：1750，当前数据量: 1750
main.js:141 开始刷新!
main.js:159 列表渲染耗时：637 ms，添加列表数量：1820，当前数据量: 1820
```



**测试成倍数据添加，产生了如下情况：**

在一次性256条数据时，正常浏览页面时会出现卡顿掉帧的情况；在一次性插入1700+条数据时，页面已经无法浏览，组件已经无法正常渲染，出现白屏情况，在滑动时整个小程序无响应。

处理渲染时长结果如下：

```
main.js:141 开始刷新!
main.js:159 列表渲染耗时：16 ms，添加列表数量：7，当前数据量: 7
main.js:141 开始刷新!
main.js:159 列表渲染耗时：23 ms，添加列表数量：21，当前数据量: 21
main.js:141 开始刷新!
main.js:159 列表渲染耗时：28 ms，添加列表数量：49，当前数据量: 49
main.js:141 开始刷新!
main.js:159 列表渲染耗时：35 ms，添加列表数量：105，当前数据量: 105
main.js:141 开始刷新!
main.js:159 列表渲染耗时：101 ms，添加列表数量：217，当前数据量: 217
main.js:141 开始刷新!
main.js:159 列表渲染耗时：139 ms，添加列表数量：441，当前数据量: 441
main.js:141 开始刷新!
main.js:159 列表渲染耗时：319 ms，添加列表数量：889，当前数据量: 889
main.js:141 开始刷新!
main.js:159 列表渲染耗时：544 ms，添加列表数量：1785，当前数据量: 1785
main.js:141 开始刷新!
main.js:159 列表渲染耗时：1169 ms，添加列表数量：3577，当前数据量: 3577
```

**总结：**

当新的数据触发视图更新时，500条数据以内可以保证页面数据的正常浏览，且不会影响到用户体验，之后渲染时长会逐渐增长，超过1000条数据之后会出现明显卡顿，甚至出现应用崩溃的情况。

而且MpVue的视图判定刷新很奇怪，其他框架按照这种视图刷新的规则都能精确计算出视图刷新的时刻，而mpvue在视图刷新结束后还会等待一段时间才能刷新出来数据，同时MpVue似乎不太稳定，出现了数次返回失效的情况

### 编译文件大小

258kb

