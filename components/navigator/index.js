const App = getApp().globalData;

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
        src: {
            type: String,
            value: "/images/icon/ic_back.svg",
        },
    },

    ready() {
        this.setData({
            navH: App.navHeight,
            statusBar: App.statusBarHeight,
        })
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {}
})
