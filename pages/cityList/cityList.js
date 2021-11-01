import {
    cityList
} from "../../data/Cities"

import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentCity: "",
        indexList: []
    },

    ItemClick(params) {
        const selectCity = params.currentTarget.dataset.select
        try {
            wx.setStorageSync('currentCity', selectCity)
        } catch (e) {
        }
        wx.navigateBack()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.setData({
            currentCity: wx.getStorageSync('currentCity') ? wx.getStorageSync('currentCity') : "定位失败",
            cityList: cityList
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