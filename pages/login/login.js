// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: false,
    },

    GoWebview(url) {

    },

    CommitOrder() {
        wx.navigateTo({
            url: "/pages/commit-order/commit-order",
        })
    },

    getUserProfile(e) {
        if (this.data.checked) {
            wx.getUserProfile({
                desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    console.log(res.userInfo)
                    this.setData({
                        userInfo: res.userInfo,
                    })
                }
            })
        } else {
            Toast('请先阅读用户协议');
        }
    },

    onChange(event) {
        this.setData({
            checked: event.detail,
        });
        console.log(this.data.checked)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        wx.login({
            success(res) {
                console.log(res.code)
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: 'https://example.com/onLogin',
                        data: {
                            code: res.code
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
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