var mqtt = require("/utils/mqtt.js");

// 连接选项
const options = {
  connectTimeout: 4000, // 超时时间
  clientId: 'client_01',
  username: 'client_01',
  password: 'client_passwd',
}

App({
  globalData: {
   
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })

    // let that = this
    // var client = mqtt.connect('wx://192.144.225.205:3881', options) //你自己的域名
    // client.on('connect', (e) => {
    //   console.log('成功连接服务器!')
    // })
    // client.subscribe('esp8266', {
    //   qos: 0
    // }, function (err) {
    //   if (!err) {
    //     console.log("订阅成功:esp8266")
    //   }
    // })
    // client.on('message', function (topic, message, packet) {
    //   that.globalData.mqttData = packet.payload.toString()
    // })
  },
  globalData: {
    userInfo: null
  }
})