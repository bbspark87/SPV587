import Dialog from "../../miniprogram_npm/@vant/weapp/dialog/dialog";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        radio: 'checked',
        time: 5 * 60 * 1000,
    },

    CheckExit() {
        Dialog.confirm({
            title: '确认离开',
            message: '您的订单还未完成支付，请尽快支付',
        })
            .then(() => {
                // on confirm
                wx.navigateBack({
                    delta: 1
                })
            })
            .catch(() => {
                // on cancel
                console.log("cancel")
            });

    },

    onChange(event) {
        this.setData({
            checked: event.detail,
        });
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