const App = getApp();
const systemInfo = wx.getSystemInfoSync()

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
    },

    ready() {

        this.setData({
            navH: App.globalData.navHeight,
            navTop: App.globalData.navTop,
            capsHeight: App.globalData.capsHeight,
            windowWidth: App.globalData.windowWidth,
            halfWindow: App.globalData.windowWidth / 4 - 16,
            navHeight: App.globalData.navHeight,
            statusBar: App.globalData.statusBarHeight,
        })
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        getSystemInfo() {
            wx.getSystemInfoSync({
                success: res => {
                    console.log(res)
                    //导航高度
                    // this.globalData.navHeight = res.statusBarHeight + 46;
                }, fail(err) {
                    console.log(err);
                }
            })
        }
    }
})
