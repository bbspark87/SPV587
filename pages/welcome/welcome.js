// pages/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "hello shadiao!",
    num: 10000,
    checked: true,
    gender: "male",
    list: [{
        id: 1,
        name: "哈拉少"
      },
      {
        id: 12,
        name: "无情哈拉少"
      }
    ]
  },

  selectSex(e) {
    let gender = e.detail.value
    this.setData({
      gender
    })
  },

  selectCheck(e) {
    let valve = e.detail.value
    this.setData({
      // gender: valve
    })
  },

  getUserInfo(e) {
    console.log(e);
  },

  onTap: function (param) {
    console.log("hello")
    wx.navigateTo({
      url: '/pages/posts/posts',
    })
  },

  inputChange(param) {
    console.log(param.detail.value)
    this.setData({
      num: +param.detail.value
    })
  },

  inputTap(param) {
    const operation = +param.currentTarget.dataset.operation;
    console.log(operation)
    this.setData({
      num: this.data.num + operation
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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