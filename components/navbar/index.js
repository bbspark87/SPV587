const App = getApp();

Component({
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {
        showNav: {
            type: Boolean,
            value: true
        },
        showHome: {
            type: Boolean,
            value: true
        },
        title: String,
        backColor: String,
        titleColor: String,
        src: {
            type: String,
            value: "/images/system_icon/ic_back.svg",
        },
    },

    /**
     * 组件的初始数据
     */
    data: {},
    lifetimes: {
        attached: function () {
            this.setData({
                navH: App.globalData.navHeight,
                statusH: App.globalData.statusHeight,
                topHeight: App.globalData.topHeight
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //回退
        navBack: function () {
            wx.navigateBack({
                delta: 1
            })
        },
        //回主页
        toIndex: function () {
            wx.navigateTo({
                url: '/pages/admin/home/index/index'
            })
        },
    }
})