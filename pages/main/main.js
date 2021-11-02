const App = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentCity: '长春市', //当前定位城市
    },

    menuClick(event) {
        const targetPage = event.currentTarget.dataset.page
        if (targetPage === "scanCode") {
            wx.scanCode({
                onlyFromCamera: true,
            })
        } else {
            wx.navigateTo({
                url: targetPage,
            })
        }
    },

    goToLogin(e) {
        console.log(e)
        wx.navigateTo({
            url: "/pages/login/login",
        })
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
        this.setData({
            currentCity: wx.getStorageSync('currentCity') ? wx.getStorageSync('currentCity') : "定位失败"
        });
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