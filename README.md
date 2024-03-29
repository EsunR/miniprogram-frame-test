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

## 3. 开发差异

### 开发风格

- WePY：接近于 Vue.js，支持组件 Props 传值，自定义事件、组件分布式复用Mixin、计算属性函数computed、模板内容分发slot等等

- MpVue：基于 Vue.js 核心，修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，为小程序开发引入了整套 Vue.js 开发体验。

- uni-app：使用 Vue.js 开发所有前端应用的框架

- Taro：套遵循 React 语法规范

### 开发工具

在开发工具上，WePY、Taro提供了单独的cli工具，而MpVue与uni-app采用的是使用vue-cli拉取模板。同时uni-app拥有DCloud开发的HBuilderX的支持，可以说是在开发工具上最为完善了。

### 状态管理

对于小程序中使用状态管理工具，可能存在一些问题。如MpVue与uni-app如果需要在全局使用Vuex需要手动去挂载store对象，而WePY则需要通过在单文件内导入方式使用，不同的框架使用状态管理的方式存在一定的差异性。各框架对状态管理工具的支持情况：

- WePY：Redux(wepy/redux) Vuex(wepy/x)

- MpVue：Vuex

- uni-app：Vuex

  > `uni-app` 内置了 vuex

- Taro：Redux、MobX

  > 在 Taro 中可以自由地使用 `React` 生态中非常流行的数据流管理工具 Redux 来解决复杂项目的数据管理问题。而为了更方便地使用 `Redux` ，Taro 提供了与 react-redux API 几乎一致的包 `@tarojs/redux` 来让开发人员获得更加良好的开发体验。

### 生命周期

原生的小程序生命周期并不够完善，借助框架的特性，支持到更多的生命周期，以下是各框架对小程序生命周期的补充以及应用规范：

- WePY：wepy在小程序原有的页面声明周期规范上，新增了 `created` `attached` `ready` `moved`（实际上只是将组件的生命周期提升到页面上使用），没有新增组件的生命周期。支持后续生命周期函数补充与修改，达到在wepy未更新的情况下使用小程序新增的生命周期函数。总体上，WePY对生命周期函数的处理时将每个页面与组件都添加上组件的生命周期函数，然后再判页面与组件的类型，如果是页面则再执行页面的生命周期函数。

- MpVue：同 vue，不同的是会在小程序 onReady 后，再去触发 vue mounted 生命周期。除了 Vue 本身的生命周期外，mpvue 还兼容了小程序生命周期，但是官方不推荐使用。

- uni-app：uni-app 完整支持 Vue 实例的生命周期，同时还新增 应用生命周期 及 页面生命周期。对于特定的平台，uni-app也支持了特定平台独有的生命周期函数，比如微信小程序独有的 `onResize`。

- Tora：Taro 会将原始文件的生命周期钩子函数转换为 Taro 的生命周期，同时支持React的生命周期函数。在开发过程中仍能够使用小程序独有的生命周期函数写法，使用原生写法并不会无法解析。

### 事件处理

- WePY：事件处理与Vue一致，经过测试也可以使用原生的事件，如 `bindchange` `bindtap` 等

- MpVue/uni-app：引入了 Vue.js 的虚拟 DOM ，在前文模版中绑定的事件会被挂在到 vnode 上，同时 compiler 在 wxml 上绑定了小程序的事件，并做了相应的映射，所以在真实点击的时候通过 runtime 中 `handleProxy` 通过事件类型分发到 vnode 的事件上，同 Vue 在 WEB 的机制一样，所以可以做到无损支持。同时还顺便支持了自定义事件和 `$emit` 机制。

- Taro：遵循React规范，在编译时将事件转换为小程序事件，之间存在对应关系，如果强行使用小程序原生事件，如 `bindtap` 则会报错。

### 生态与拓展性

- Babel、TypeScript、css 预编译、语法校验：

  均支持，同时 Taro 支持 CSS Modules

- UI 组件库：

  Taro 拥有专属的 Taro UI 提供了丰富的组件，支持多端；uni-app 则提供了 uni ui 但是组件质量不如 Taro UI，但是拥有额外的社区组件来丰富组件库；mpvue 与 wepy 则是只有第三方 UI 。

- 异步编程：

  微信小程序中经常存在一些异步的方法，但是异步方法的回调写法并不符合 ES6 的Promise 规范，所以部分框架对其进行了改良。uni-app 将原生的改良 API 存放于 `uni` 对象中，如 `wx.request` 改良为 Promise 写法的 `uni.request`；Taro 则将改写的方法存放于 `Taro` 对象下，可以直接调用；

  同时，如果框架支持 async functions 在编程中可以带来极大的遍历。 Taro可以通过 `@tarojs/async-await` 来实现支持；uni-app 默认支持 async functions；（前两个都是在官方文档中声明可以完全支持的）wepy 通过 `wepy-async-function` 来实现支持；mpvue 的官方文档中尚未给出说明是否支持 async function，且网上相关资料较少。

## 4. 跨端能力

- WePY：当前仅支持微信小程序
- MpVue：微信小程序、支付宝小程序、百度小程序、头条小程序
- Taro：支持移动端（基于React-Native）、H5、微信小程序、支付宝小程序、百度小程序、头条小程序，Taro 可以在业务逻辑中根据环境变量使用条件编译，也可以直接使用条件编译文件。
- uni-app：支持Android/iOS（uni-app 基于 weex 定制了一套 nvue 方案 弥补 weex API 的不足）、H5、微信小程序、支付宝小程序、百度小程序、头条小程序，拥有自己的条件编译语法。

跨端能力排名：**uni-app ≈ Taro > WePY > MpVue**

## 5. 文档

- WePY：提供了基础功能的使用文档。
- MpVue：仅提供了入门级的文档。
- uni-app：文档详细，并且提供了官方社区进行开发者之间的讨论，搜索机制比较好。
- Trao：文档详细，仅次于uni-app

文档详细程度排名：**uni-app > Taro > WePY > MpVue**

## 6. 性能测试

在性能测试中，将四款框架以及原生小程序，通过编写一个下拉刷新的列表的Demo，来模拟各框架在消耗大量性能进行预算以及渲染时的情况，测试分为两个阶段：第一个阶段是每刷新一次产生70条数据，然后统计每次从获取数据到，列表渲染完成的耗时情况；第二个阶段是每次获取的数据量成倍增长，是对应用的高负荷测试，同样统计开始到每次刷新结束的耗时。同时也记录了应用的启动时间、编译后的文件大小参与到对比中。

测试的结果如下：

### 单次添加70条数据（时间单位ms）

****

| 数据量 | 原生小程序 | WePY  | MpVue | uni-app | Taro  |
| ------ | ---------- | ----- | ----- | ------- | ----- |
| 70     | 583        | 690   | 36    | 698     | 192   |
| 210    | 800        | 972   | 102   | 1023    | 7150  |
| 350    | 1100       | 1100  | 144   | 1068    | 16581 |
| 490    | 1208       | 1491  | 183   | 1242    | --    |
| 630    | 1088       | 369   | 227   | 1404    | --    |
| 770    | 1271       | 472   | 181   | 1481    | --    |
| 910    | 1407       | 36901 | 302   | 1656    | --    |
| 1050   | 1640       | --    | 1050  | 1835    | --    |

### 测试成倍数据添加（时间单位ms）

| 单次添加数据量 | 原生小程序 | WePY | MpVue | uni-app | Taro |
| -------------- | ---------- | ---- | ----- | ------- | ---- |
| 7              | 435        | 381  | 16    | 804     | 500  |
| 28             | 409        | 573  | 28    | 438     | 786  |
| 112            | 855        | 1466 | 101   | 1089    | 1618 |
| 448            | 3259       | --   | 319   | 4207    | --   |
| 896            | 9362       | --   | 1169  | 35667   | --   |
| 1792           | 32259      | --   | --    | --      | --   |

### 启动耗时

- 原生小程序：17ms
- WePY：20ms
- MpVue：300ms
- uni-app：350ms
- Taro：27ms

### 编译后文件大小

- 原生小程序：13.4KB
- WePY：89.8KB
- MpVue：258KB
- uni-app：337KB
- Taro：263KB

### 测试结果分析

微信原生小程序最新支持了 component 组件化，组件性能大幅提升，但是如果javascript线程繁忙，页面就会出现卡顿现象，在javascript线程没有被占用时，数据再多都可以保证正常的交互操作。

在第一环节中，WePY 的表现不稳定（测试中还出现了BUG），在数据量到达 500+ 时渲染速度突然变快（多次测试结果均为如此）但是之后数据超过 1000+ 时，便开始出现了长时间的延迟，数据已经无法刷新；MpVue 的表现数据看似很好，但是测试结果却并不准确，实验中按照 Vue 的视图刷新机制来获取视图刷新完成的时间这一点在 MpVue 上失效，MpVue总是在判定完成时视图却仍未刷新完成，这一点很影响用户体验，虽然比其他框架的刷新速度快，但是在大量数据的情况下存在交互卡顿的现象；uni-app 是最接近于原生小程序的表现，但是还有一定的时间差距，在总数据量接近 2000 条时，与微信原生小程序仅落后 500ms 左右，是四款框架中性能最为稳定且接近原生表现的；Taro 的表现最差，在数据达到 280 条时就已经产生了长时间无法渲染的情况，之后便无法进行测试。

在第二环节中，都无法到达原生小程序的极限标准，WePY 到达性能极限时却意外的不会产生卡顿，表现最差的为 WePY 和 Taro，在单次数据添加量达到 1400+ 时便无法继续运行，但是应用不会因此崩溃，分析原因应该是数据量过大导致无法执行 `setData`；MpVue 在数据量超过 1700+ 时，已经无法正常操作，是四款框架中唯一一个产生了应用卡顿以及白屏情况的框架，因而测试无法继续；uni-app 则是比原生微信小程序提前达到运算极限，因为等待时间过长而无法进行接下来的测试。

在测试中，使用的代码并没有进行单独平台的优化，同时因为数据源问题无法提供合适的唯一标示符以供框架自身进行优化，据官方文档的说明，uni-app 与 Taro 会对 setData 的数据进行 diff 算法优化，只刷新更改过数据的视图，如果数据源能够提供唯一标识符，uni-app 与 Taro 或许能够拥有更好的表现。

在启动耗时上，从应用启动的生命函数（onLaunch）开始计时，到第一个页面展示时结束计时（onShow）MpVue 与 uni-app 似乎没有进行优化，而 Taro 和 WePY 的启动速度与原生小程序相似。

在编译后文件的大小上，由于 WePY 经过了优化，并且属于官方明示的特性，所以文件大小是四款框架中最小的，着在具有容量限制的微信小程序中是极其重要的。

总之，经过以上的对比以及考虑到框架在使用过程中的稳定性，得出四款框架的性能排名为：**uni-app > MpVue > WePY > Taro**

## 总结

在开发过程中，当前的时间节点下不推荐使用 WePY ，原因是因为现在处于测试版的 2.0.0 相当不稳定，在开发过程中会遇到很多bug，编译过程也较为缓慢，然而如果使用老旧的版本，不确定能否很好的支持当下的微信小程序新特性。

其次，不推荐使用 MpVue，因为 MpVue 的官方文档数量是最少的，配置基本靠猜，对于开发并不友好，并且更新速度较为缓慢。

当准备使用 Vue 作为开发风格的话，推荐使用 uni-app，拥有强大的社区文档保证，并且在开发过程中体验较好；当准备使用 React 作为开发风格的话，推荐使用 Taro，官方文档质量同样很高，并且当前的使用者较多，生态相对完善；如果准备进行多端开发的话，使用 uni-app 与 Taro 均可，都有更好的跨端表现；如果是原小程序需要迁移使用框架的话，Taro 可以支持原生微信小程序自动转为 Taro 项目，这样就可以进而将原有的微信小程序便捷的移植到其他平台上。

