const app = getApp().globalData
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: "#f2f2f2",
        isBackBtn: true, // 设置是否显示回到顶部按钮
        isEmpty: false, // 设置是否为空数据
        list: [], // 列表数据
    },
    loadmore() {
        // 上拉到底部，加载更多时执行，请实现分页+1，新数据加载的操作
    },
    refresh() {
        // 下拉到顶部，下拉刷新时执行，请实现清除列表数据，还原分页为初始值的操作
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.getTabBar().setData({
            active: 1
        })
        this.setData({
            TC_Blue: app.TC_Blue
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