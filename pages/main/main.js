const App = getApp().globalData;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentCity: '长春市', //当前定位城市
    },

    GoMySpread() {
        wx.navigateTo({
            url: "/package-user-center/pages/my-spread/my-spread",
        })
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
        wx.navigateTo({
            url: "/pages/login/login",
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            navH: App.navHeight,
            navTop: App.navTop,
            capsHeight: App.capsHeight,
            windowWidth: App.windowWidth,
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