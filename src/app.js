import { Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './app.scss'

class App extends Taro.Component {
  state = {
    appStartTime: new Date()
  }

  componentWillMount() {
    this.$app.globalData = this.globalData

    console.log('小程序开始启动：', new Date())
  }

  config = {
    pages: ['pages/index/main', 'pages/list/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    sitemapLocation: 'sitemap.json'
  }

  render() {
    return null
  }
}

export default App
Taro.render(<App />, document.getElementById('app'))
