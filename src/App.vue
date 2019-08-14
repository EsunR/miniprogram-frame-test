<script>
export default {
  created() {
    this.$store.commit("setAppStartTime", new Date());
    console.log("小程序开始启动：", this.$store.state.appStartTime);
  }
};
</script>

<style>
page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
