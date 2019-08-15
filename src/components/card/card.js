import { Block, View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './card.scss'

@withWeapp('Component')
class _C extends Taro.Component {
  static defaultProps = {
    data: {}
  }
  _observeProps = []
  state = {}
  config = {
    component: true
  }

  render() {
    const { data } = this.props
    const {} = this.state
    return (
      <View className="card">
        <View className="title">{data.title}</View>
        <Image src={data.detail_img}></Image>
        <View className="content">{data.detail_content}</View>
        <View className="opearte-box"></View>
      </View>
    )
  }
} // components/card/card.js

export default _C
