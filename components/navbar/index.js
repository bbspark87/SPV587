const App = getApp();

Component({
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {

        title: String,
        backColor: String,
        titleColor: String,
        divideBar: {
            type: Boolean,
            value: false
        },
        customMethod: {
            type: Boolean,
            value: false
        },
        src: {
            type: String,
            value: "/images/system_icon/ic_back.svg",
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
        customEvent: function (e) {
            if(this.properties.customMethod){
                console.log("自定义事件")
                this.triggerEvent("commit")
            }else {
                console.log("默认返回")
                wx.navigateBack({
                    delta: 1
                })
            }
        },
    }
})