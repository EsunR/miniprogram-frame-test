<template>
  <div>
    <div class="title-container">
      <text>顶部文字</text>
    </div>
  </div>
</template>

<script>
import { list_data } from "../../data/list-data";
export default {
  data() {
    return {
      data: [],
      refreshCount: 1
    };
  },

  onPullDownRefresh() {
    setTimeout(() => {
      for (let i = 0; i < this.refreshCount; i++) {
        this.data = this.data.concat(list_data);
      }
      this.refreshCount *= 2;
      wx.stopPullDownRefresh();
    }, 1000);
  }
};
</script>

<style>
.title-container {
  text-align: center;
}
</style>

