const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

    menuList: [{
        id: 1,
        name: "扫一扫",
        type: "scanCode",
        background: "/images/icon/menu_scan.svg",
        page: ""
      },
      {
        id: 2,
        name: "排行榜",
        type: "page",
        background: "/images/icon/menu_ranking.svg",
        page: "/pages/ranking/ranking"
      },
      {
        id: 3,
        name: "附近商家",
        type: "page",
        background: "/images/icon/menu_neer_shop.svg",
        page: "/pages/active/active"
      },
      {
        id: 4,
        name: "攻略",
        type: "page",
        background: "/images/icon/menu_gonglve.svg",
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
    this.setData({
      navH: App.globalData.navHeight,
      navTop: App.globalData.navTop,
      capsHeight: App.globalData.capsHeight,
      windowWidth: App.globalData.windowWidth,
      halfWindow: App.globalData.windowWidth / 4 - 16
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