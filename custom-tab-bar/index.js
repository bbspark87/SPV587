Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        active: 0,
        list: [
            {pagePath: "/pages/main/main",},
            {pagePath: "/pages/social/social",},
            {pagePath: "/pages/message/message",},
            {pagePath: "/pages/mine/mine",}
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(e) {
            wx.switchTab({
                url: this.data.list[e.detail].pagePath
            })
        }
    }
})
