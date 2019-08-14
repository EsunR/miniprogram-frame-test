// pages/index/main.js
Page({

  onLoad() {
    let time = parseInt(new Date() - getApp().data.appStartTime);
    console.log(`小程序启动完毕，耗时：${time}ms`);
  },

  goToList() {
    wx.navigateTo({
      url: "/pages/list/main"
    });
  }
})