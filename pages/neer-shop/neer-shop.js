Page({

    /**
     * 页面的初始数据
     */
    data: {
        sortType: [
            {text: '综合排序', value: 0},
            {text: '评价最高', value: 1},
            {text: '离我最近', value: 2},
        ],
        distance: [
            {text: '1km', value: '1'},
            {text: '3km', value: '3'},
            {text: '5km', value: '5'},
            {text: '附近', value: '0'},
        ],
        valueSort: 0,
        valueDistance: '0',
    },

    GoToShopDetail() {
        console.log("print")
        wx.navigateTo({
            url: "/pages/shop-detail/shop-detail",
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