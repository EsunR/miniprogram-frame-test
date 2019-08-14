<template>
  <div>
    <div class="title-container">
      <text>成倍增长数据量</text>
      <switch @change="handleSwitchChange"></switch>
    </div>
    <div class="list-container" v-for="(item, index) in data" :key="index">
      <card :data="item"></card>
    </div>
  </div>
</template>

<script>
import { list_data } from "../../data/list-data";
import { shuffle } from "../../utils/tools";
import card from "../../components/card.vue";
export default {
  components: {
    card
  },

  data() {
    return {
      data: [],
      refreshCount: 1,
      renderStartTime: new Date(),
      multiply: false
    };
  },

  methods: {
    handleSwitchChange(e) {
      this.multiply = e.target.value;
    }
  },

  onPullDownRefresh() {
    setTimeout(() => {
      console.log("开始刷新!");
      this.renderStartTime = new Date();
      let push_data = [];
      if (this.multiply) {
        for (let i = 0; i < this.refreshCount; i++) {
          let sort_list_data = shuffle(list_data);
          push_data = [...push_data, ...sort_list_data];
        }
        this.refreshCount = this.refreshCount * 2;
      } else {
        for (let i = 0; i < 10; i++) {
          let sort_list_data = shuffle(list_data);
          push_data = [...push_data, ...sort_list_data];
        }
      }
      this.data = [...push_data, ...this.data];
      this.$nextTick(() => {
        let time = parseInt(new Date() - this.renderStartTime);
        console.log(
          `列表渲染耗时：${time} ms，添加列表数量：${this.data.length -
            this.dataLength}，当前数据量: ${this.data.length}`
        );
        wx.stopPullDownRefresh();
      });
    }, 500);
  },

  onUnload() {
    this.data = [];
    this.refreshCount = 1;
    this.renderStartTime = new Date();
    this.multiply = false;
  },

  mounted() {
    this.dataLength = this.data.length;
  }
};
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20rpx;
  padding: 0 20rpx;
}
.list-container {
  padding: 20rpx;
}
</style>

