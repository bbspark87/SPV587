//组件nav.js
const App = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageName: String,
    showNav: {
      type: Boolean,
      value: true
    },
    showHome: {
      type: Boolean,
      value: true
    },
    showBack: {
      type: Boolean,
      value: true
    },
    bgColor: {
      type: String,
      value: '#fff'
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      this.setData({
        navH: App.globalData.navHeight
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    navBack: function () {
      wx.navigateBack({
        delta: 1
      })
    },
    showShare() {
      this.triggerEvent('showShare');
    },
    //回主页
    toIndex: function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    },
  }
})

