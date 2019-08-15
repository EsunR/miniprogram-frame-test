import { Block, View, Text, Switch } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
// pages/list/main.js
import { list_data } from '../../data/list-data.js'
import { shuffle } from '../../utils/tools.js'
import Card from '../../components/card/card'
import './main.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    data: [],
    refreshCount: 1,
    multiply: false
  }

  componentWillMount() {
    this.renderStartTime = null
    this.dataLength = this.state.data.length
  }

  handleSwitchChange = e => {
    this.setData({
      multiply: e.detail.value
    })
  }
  onPullDownRefresh = () => {
    setTimeout(() => {
      console.log('开始刷新')
      this.renderStartTime = new Date()
      let push_data = []
      if (this.state.multiply === true) {
        for (let i = 0; i < this.data.refreshCount; i++) {
          let sort_list_data = shuffle(list_data)
          push_data = [...push_data, ...sort_list_data]
        }
        this.setData({
          refreshCount: this.data.refreshCount * 2
        })
      } else {
        for (let i = 0; i < 10; i++) {
          let sort_list_data = shuffle(list_data)
          push_data = [...push_data, ...sort_list_data]
        }
      }
      this.setState(
        {
          data: [...push_data, this.state.data]
        },
        () => {
          let time = parseInt(new Date() - this.renderStartTime)
          console.log(
            `列表渲染耗时：${time} ms，添加列表数量：${this.state.data.length -
            this.dataLength}，当前数据量: ${this.state.data.length}`
          )
          this.dataLength = this.state.data.length
          Taro.stopPullDownRefresh()
        }
      )
    }, 500)
  }
  config = {
    enablePullDownRefresh: true
  }

  render() {
    const { data } = this.state
    return (
      <View>
        <View className="title-container">
          <Text>成倍增长数据量</Text>
          <Switch onChange={this.handleSwitchChange}></Switch>
        </View>
        {data.map((item, index) => {
          return (
            <View key={index} className="list-container">
              <Card data={item}></Card>
            </View>
          )
        })}
      </View>
    )
  }
}

export default _C
