<template>
  <div class="btn-box">
    <button @click="goToList">测试列表渲染</button>
  </div>
</template>

<script>
export default {
  mounted() {
    let time = parseInt(new Date() - this.$store.state.appStartTime);
    console.log(`小程序启动完毕，耗时：${time}ms`);
  },
  methods: {
    goToList() {
      wx.navigateTo({
        url: "/pages/list/main"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

