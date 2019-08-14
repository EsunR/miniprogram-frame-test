App({
  data: {
    appStartTime: new Date()
  },

  onLaunch: function() {
    console.log("小程序开始启动：", new Date());
  }
})