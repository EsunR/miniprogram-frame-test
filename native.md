# 小程序原生

## 性能测试

### 启动时间

```
小程序开始启动： Wed Aug 14 2019 15:14:57 GMT+0800 (GMT+08:00)
main.js:6 
小程序启动完毕，耗时：17ms
```

平均耗时在17ms左右

### 多列表组件渲染情况

**测试添加固定数量的数据，产生了如下情况：**

每次固定添加70条数据，渲染速度明显过慢，数据的处理方式是整理归类数据后使用setData更改数据。但是渲染完成后的流畅度却让人意外，新的数据被渲染成页面之后并没有出现卡顿与掉帧，并且在大量组件存在于页面上时，滑动过程中并没有出现卡顿白屏现象。

处理渲染时长结果如下：

```
开始刷新
main.js:49 列表渲染耗时：583 ms，添加列表数量：70，当前数据量: 70
main.js:28 开始刷新
main.js:49 列表渲染耗时：795 ms，添加列表数量：70，当前数据量: 140
main.js:28 开始刷新
main.js:49 列表渲染耗时：1032 ms，添加列表数量：70，当前数据量: 210
main.js:28 开始刷新
main.js:49 列表渲染耗时：803 ms，添加列表数量：70，当前数据量: 280
main.js:28 开始刷新
main.js:49 列表渲染耗时：1109 ms，添加列表数量：70，当前数据量: 350
main.js:28 开始刷新
main.js:49 列表渲染耗时：903 ms，添加列表数量：70，当前数据量: 420
main.js:28 开始刷新
main.js:49 列表渲染耗时：1208 ms，添加列表数量：70，当前数据量: 490
main.js:28 开始刷新
main.js:49 列表渲染耗时：2289 ms，添加列表数量：70，当前数据量: 560
main.js:28 开始刷新
main.js:49 列表渲染耗时：1088 ms，添加列表数量：70，当前数据量: 630
main.js:28 开始刷新
main.js:49 列表渲染耗时：1184 ms，添加列表数量：70，当前数据量: 700
main.js:28 开始刷新
main.js:49 列表渲染耗时：1271 ms，添加列表数量：70，当前数据量: 770
main.js:28 开始刷新
main.js:49 列表渲染耗时：1450 ms，添加列表数量：70，当前数据量: 840
main.js:28 开始刷新
main.js:49 列表渲染耗时：1407 ms，添加列表数量：70，当前数据量: 910
main.js:28 开始刷新
main.js:49 列表渲染耗时：1626 ms，添加列表数量：70，当前数据量: 980
main.js:28 开始刷新
main.js:49 列表渲染耗时：1604 ms，添加列表数量：70，当前数据量: 1050
main.js:28 开始刷新
main.js:49 列表渲染耗时：2002 ms，添加列表数量：70，当前数据量: 1120
main.js:28 开始刷新
main.js:49 列表渲染耗时：1846 ms，添加列表数量：70，当前数据量: 1190
main.js:28 开始刷新
main.js:49 列表渲染耗时：1953 ms，添加列表数量：70，当前数据量: 1260
main.js:28 开始刷新
main.js:49 列表渲染耗时：2322 ms，添加列表数量：70，当前数据量: 1330
main.js:28 开始刷新
main.js:49 列表渲染耗时：2421 ms，添加列表数量：70，当前数据量: 1400
main.js:28 开始刷新
main.js:49 列表渲染耗时：2320 ms，添加列表数量：70，当前数据量: 1470
main.js:28 开始刷新
main.js:49 列表渲染耗时：2350 ms，添加列表数量：70，当前数据量: 1540
main.js:28 开始刷新
main.js:49 列表渲染耗时：2235 ms，添加列表数量：70，当前数据量: 1610
main.js:28 开始刷新
main.js:49 列表渲染耗时：2952 ms，添加列表数量：70，当前数据量: 1680
main.js:28 开始刷新
main.js:49 列表渲染耗时：2476 ms，添加列表数量：70，当前数据量: 1750
main.js:28 开始刷新
main.js:49 列表渲染耗时：2567 ms，添加列表数量：70，当前数据量: 1820
main.js:28 开始刷新
main.js:49 列表渲染耗时：2564 ms，添加列表数量：70，当前数据量: 1890
```

**测试成倍数据添加，产生了如下情况：**

页面流畅度与上面的测试结果一样，测试多达3000+也没有出现卡顿。但是当单次添加的数据达到800+时，会出现长时间的延迟，在此过程中如果用户下拉就会出现白屏无响应的现象。

处理渲染时长结果如下：

```
开始刷新
main.js:49 列表渲染耗时：435 ms，添加列表数量：7，当前数据量: 7
main.js:28 开始刷新
main.js:49 列表渲染耗时：418 ms，添加列表数量：14，当前数据量: 21
main.js:28 开始刷新
main.js:49 列表渲染耗时：409 ms，添加列表数量：28，当前数据量: 49
main.js:28 开始刷新
main.js:49 列表渲染耗时：661 ms，添加列表数量：56，当前数据量: 105
main.js:28 开始刷新
main.js:49 列表渲染耗时：855 ms，添加列表数量：112，当前数据量: 217
main.js:28 开始刷新
main.js:49 列表渲染耗时：1448 ms，添加列表数量：224，当前数据量: 441
main.js:28 开始刷新
main.js:49 列表渲染耗时：3259 ms，添加列表数量：448，当前数据量: 889
main.js:28 开始刷新
main.js:49 列表渲染耗时：9362 ms，添加列表数量：896，当前数据量: 1785
main.js:28 开始刷新
main.js:49 列表渲染耗时：32259 ms，添加列表数量：1792，当前数据量: 3577
```

**总结：**

由于新的微信小程序采用了 component 组件化，组件性能大幅提升，但是如果javascript线程繁忙，页面就会出现卡顿现象，在javascript线程没有被占用时，正常的交互性能可以得到保障。

### 大小

13.4KB