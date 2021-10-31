const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: true, //是否显示左上角图标   1表示显示    0表示不显示
      showCenter: true, //是否需要显示个人中心页
      title: '长春市', //导航栏 中间的标题
    },
    menuList: [{
        id: 1,
        name: "扫一扫",
        type: "scanCode",
        page: ""
      },
      {
        id: 2,
        name: "排行榜",
        type: "page",
        page: "/pages/ranking/ranking"
      },
      {
        id: 3,
        name: "活动",
        type: "page",
        page: "/pages/active/active"
      },
      {
        id: 4,
        name: "攻略",
        type: "page",
        page: "/pages/intro/intro"
      }
    ]
  },

  menuClick(event) {
    const type = event.currentTarget.dataset.item.type
    if (type === "scanCode") {
      wx.scanCode({
        onlyFromCamera: true,
      })
    } else if (type === "page") {
      wx.navigateTo({
        url: event.currentTarget.dataset.item.page,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp(); //引入全局变量
    // console.log(app.globalData)
    this.setData({
      navH: App.globalData.navHeight,
      navTop: App.globalData.navTop,
      capsHeight: App.globalData.capsHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})