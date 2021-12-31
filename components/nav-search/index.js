const App = getApp().globalData;

Component({
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {

        backColor: String,
        divideBar: {
            type: Boolean,
            value: false
        },
        customMethod: {
            type: Boolean,
            value: false
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    lifetimes: {
        attached: function () {
            this.setData({
                navH: App.navHeight,
                statusH: App.statusHeight,
                topHeight: App.topHeight,
                capsuleRight: App.capsuleRight,
                capsHeight: App.capsHeight
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        navBack: function (e) {
            wx.navigateBack({
                delta: 1
            })
        },
    }
})