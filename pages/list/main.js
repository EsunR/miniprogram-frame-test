// pages/list/main.js
import {
  list_data
} from "../../data/list-data";
import {
  shuffle
} from "../../utils/tools";
Page({
  data: {
    data: [],
    refreshCount: 1,
    multiply: false
  },

  onLoad() {
    this.renderStartTime = null;
    this.dataLength = this.data.data.length;
  },

  handleSwitchChange(e) {
    this.setData({
      multiply: e.detail.value
    })
  },

  onPullDownRefresh() {
    setTimeout(() => {
      console.log("开始刷新");
      this.renderStartTime = new Date();
      let push_data = [];
      if (this.data.multiply === true) {
        for (let i = 0; i < this.data.refreshCount; i++) {
          let sort_list_data = shuffle(list_data);
          push_data = [...push_data, ...sort_list_data];
        }
        this.setData({
          refreshCount: this.data.refreshCount * 2
        })
      } else {
        for (let i = 0; i < 10; i++) {
          let sort_list_data = shuffle(list_data);
          push_data = [...push_data, ...sort_list_data];
        }
      }
      this.setData({
        data: push_data.concat(this.data.data)
      }, () => {
        let time = parseInt(new Date() - this.renderStartTime);
        console.log(
          `列表渲染耗时：${time} ms，添加列表数量：${this.data.data.length -
          this.dataLength}，当前数据量: ${this.data.data.length}`
        );
        this.dataLength = this.data.data.length;
        wx.stopPullDownRefresh();
      });
    }, 500);
  },

})