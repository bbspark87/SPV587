import {
    information
} from '../../data/data.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {},

    onTap: function (param) {
    },

    onGoToDetail() {
        wx.navigateTo({
            url: '/pages/post-detail/post-detail',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var content = [{
            date: "2021-10-02",
            title: "S2赛季",
            name: "hello",
            age: 123,
            collect: 323,
            review: 32134,
            image: "/images/pic/banner1.png"
        }, {

            date: "2024-10-02",
            title: "S232赛季",
            name: "web",
            age: 122325,
            collect: 22,
            review: 321,
            image: "/images/pic/banner2.png"
        },
            {
                date: "2026-10-02",
                title: "S12赛季",
                name: "world",
                age: 553,
                collect: 78,
                review: 4588,
                image: "/images/pic/panghu2.jpg"
            }
        ]
        this.setData({
            information: information
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