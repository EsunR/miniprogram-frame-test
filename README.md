# 微信小程序框架及原生小程序对比报告

参与对比的小程序框架：WeWP（腾讯）、Trao（京东）、MpVue（美团）、uni-app（DCloud）

## 1. 简述

小程序框架通常能对原生的小程序进行一些功能上的拓展与弥补，随着原生小程序的逐渐完善，原生小程序开发虽然也能够弥补过去的不足，但是开发者面临的更大的一个问题是多个规范的小程序的适配问题，以及新开发者的学习难易度问题，然而使用小程序框架就能够比较完美的解决这些问题，这也就是小程序框架使用的必要性。

小程序框架主要解决了原生小程序开发的以下几个痛点：

- 使用小程序框架能够解决多端的适配问题，达到一套代码多端适配。
- 小程序框架极大的为开发者的开发提供了遍历，开发风格趋近甚至相等与Vue、React这种常用的框架规范，减少了开发者的学习成本。
- 具有sass、less这种css预解析的方案。
- 支持async/await异步编程。
- 生命周期钩子得以完善。
- 拥有更好的生态，部分Vue/React的周边工具可以提供给小程序使用。
- 更好的编辑器。

同时，小程序框架也有一些不足，这些不足极大的影响了我们如何选用小程序框架，本篇评测报告也将着重从以下几点来讨论如何选择一个合适的小程序框架：

- 跨端能力是否足够强大。
- 对Vue、React能力的迁移与支持情况。
- 对原生小程序功能的支持情况。
- 编码风格与规范。
- 性能问题。

## 2. 当前热度

热度由 Github 项目的 Star 与 NPM 平台下载量来判断得出，以下是具体的详细数据：

|         | Github Star | NPM周下载量 | 最近更新日期 | 发行版本数 | 发行时间       |
| ------- | ----------- | ----------- | ------------ | ---------- | -------------- |
| WePY    | 18619       | 600+        | 8.12         | 134        | 2016年11月13日 |
| MpVue   | 18327       | 1400+       | 5.14         | 20         | 2016年4月10日  |
| uni-app | 10915       | 600+        | 8.7          | 14         | 2018年7月8日   |
| Taro    | 20928       | 2800+       | 8.12         | 227        | 2018年4月8日   |

由以上数据可以得出，截至当前（8.15），热度的排序应该依次为：**Taro > MpVue > WePY > uni-app**

排序的产生可能是由以下原因造成的：

1. Taro拥有较为完整的开发文档，并且在跨端上得益于React Native，比uni-app的处理方案更好（详见述的跨端对比），并且Taro属于React阵营，React开发者可能更多拥入Taro开发小程序，所以使用用户较多。
2. MpVue作为最早的一批框架阵营，用于一定的用户基数，同时使用规范极大的保留了Vue的规范，所以收到大多数Vue开发者的亲赖。
3. WePY也属于较早的框架阵营，当前发行了2.0.0的版本，与Vue的开发相似，所以同样属于Vue阵营。
4. uni-app是四款框架中最为年轻的框架，内部引用了其他框架的核心代码并对其进行了一定程度的优化，同时支持多端，热度正在逐渐攀升。

Taro在热度上具有绝对的优势，同时目前处于活跃状态；而MpVue的活跃度已经有所下降，官方文档内容也较少；WePY正处于2.0.0的迭代时期，也处于更新活跃阶段，但是稳定性上存在一定的问题；uni-app集成了mpvue的设计，在性能上也有所优化，应用案例最多，但是缺少大型应用，具有一定的潜力框架。

## 3. 开发差别

### 开发风格

WePY：接近于 Vue.js，支持组件 Props 传值，自定义事件、组件分布式复用Mixin、计算属性函数computed、模板内容分发slot等等

MpVue：基于 Vue.js 核心，修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，为小程序开发引入了整套 Vue.js 开发体验。

uni-app：使用 Vue.js 开发所有前端应用的框架

Taro：套遵循 React 语法规范

### 开发工具

在开发工具上，WePY、Taro提供了单独的cli工具，而MpVue与uni-app采用的是使用vue-cli拉取模板。同时uni-app拥有DCloud开发的HBuilderX的支持，可以说是在开发工具上最为完善了。

### 状态管理

对于小程序中使用状态管理工具，可能存在一些问题。如MpVue与uni-app如果需要在全局使用Vuex需要手动去挂载store对象，而WePY则需要通过在单文件内导入方式使用，不同的框架使用状态管理的方式存在一定的差异性。各框架对状态管理工具的支持情况：

WePY：Redux(wepy/redux) Vuex(wepy/x)

MpVue：Vuex

uni-app：Vuex

> `uni-app` 内置了 vuex

React：Redux

> 在 Taro 中可以自由地使用 `React` 生态中非常流行的数据流管理工具 Redux 来解决复杂项目的数据管理问题。而为了更方便地使用 `Redux` ，Taro 提供了与 react-redux API 几乎一致的包 `@tarojs/redux` 来让开发人员获得更加良好的开发体验。

### 生命周期

原生的小程序生命周期并不够完善，借助框架的特性，支持到更多的生命周期，以下是各框架对小程序生命周期的补充以及应用规范：

WePY：wepy在小程序原有的页面声明周期规范上，新增了 `created` `attached` `ready` `moved`（实际上只是将组件的生命周期提升到页面上使用），没有新增组件的生命周期。支持后续生命周期函数补充与修改，达到在wepy未更新的情况下使用小程序新增的生命周期函数。总体上，WePY对生命周期函数的处理时将每个页面与组件都添加上组件的生命周期函数，然后再判页面与组件的类型，如果是页面则再执行页面的生命周期函数。

MpVue：同 vue，不同的是会在小程序 onReady 后，再去触发 vue mounted 生命周期。除了 Vue 本身的生命周期外，mpvue 还兼容了小程序生命周期，但是官方不推荐使用。

uni-app：uni-app 完整支持 Vue 实例的生命周期，同时还新增 应用生命周期 及 页面生命周期。对于特定的平台，uni-app也支持了特定平台独有的生命周期函数，比如微信小程序独有的 `onResize`。

Tora：Taro 会将原始文件的生命周期钩子函数转换为 Taro 的生命周期，同时支持React的生命周期函数。在开发过程中仍能够使用小程序独有的生命周期函数写法，使用原生写法并不会无法解析。

|         | 开发工具 | NPM周下载量 | 最近更新日期 | 发行版本数 | 发行时间       |
| ------- | -------- | ----------- | ------------ | ---------- | -------------- |
| WePY    | 18619    | 600+        | 8.12         | 134        | 2016年11月13日 |
| MpVue   | 18327    | 1400+       | 5.14         | 20         | 2016年4月10日  |
| uni-app | 10915    | 600+        | 8.7          | 14         | 2018年7月8日   |
| Taro    | 20928    | 2800+       | 8.12         | 227        | 2018年4月8日   |

## 事件绑定

WePY：事件处理与Vue一致，经过测试也可以使用原生的事件，如 `bindchange` `bindtap` 等

MpVue/uni-app：引入了 Vue.js 的虚拟 DOM ，在前文模版中绑定的事件会被挂在到 vnode 上，同时 compiler 在 wxml 上绑定了小程序的事件，并做了相应的映射，所以在真实点击的时候通过 runtime 中 `handleProxy` 通过事件类型分发到 vnode 的事件上，同 Vue 在 WEB 的机制一样，所以可以做到无损支持。同时还顺便支持了自定义事件和 `$emit` 机制。

Taro：遵循React规范，在编译时将事件转换为小程序事件，之间存在对应关系，如果强行使用小程序原生事件，如 `bindtap` 则会报错。

