// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [{
        id: 1,
        name: "扫一扫",
        type: "scanCode",
        page: "/pages/setting/setting"
      },
      {
        id: 2,
        name: "排行榜",
        type: "page",
        page: "/pages/setting/setting"
      },
      {
        id: 3,
        name: "活动",
        type: "page",
        page: "/pages/setting/setting"
      },
      {
        id: 4,
        name: "攻略",
        type: "page",
        page: "/pages/setting/setting"
      }
    ]
  },

  menuClick(event) {
    const type = event.currentTarget.dataset.item.type
    if (type === "scanCode") {
      wx.scanCode({
        onlyFromCamera: true,
      })
    } else if(type === "page"){
      wx.navigateTo({
        url: event.currentTarget.dataset.item.page,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '首页',
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

  }
})