import { Block, View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './main.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  componentWillMount() {
    let time = parseInt(new Date() - Taro.getApp().state.appStartTime)
    console.log(`小程序启动完毕，耗时：${time}ms`)
  }

  goToList = () => {
    Taro.navigateTo({
      url: '/pages/list/main'
    })
  }
  config = {}

  render() {
    return (
      <View className="btn-box">
        <Button onClick={this.goToList}>测试列表渲染</Button>
      </View>
    )
  }
} // pages/index/main.js

export default _C
