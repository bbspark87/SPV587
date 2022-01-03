const app = getApp().globalData
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            navH: app.navHeight,
            statusH: app.statusHeight,
            topHeight: app.topHeight,
            windowHeight: app.windowHeight,
            safeHeight: app.safeHeight,
            TC_Blue: app.TC_Blue
        })
        console.log(this.data.windowHeight)
        console.log(this.data.safeHeight)
        console.log(this.data.statusH)

        wx.loadFontFace({
            family: 'Bebas Neue',
            source: 'url("/style/BebasNeue.otf")',
            success() {
                console.log('字体加载完毕')
            },
            error() {
                console.log('字体加载失败');
            },
            complete() {
                console.log('字体加载');
            }
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