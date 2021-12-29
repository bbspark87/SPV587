App({
    globalData: {},
    onLaunch() {
        this.globalData.TC_Theme = "#6469DB"
        this.globalData.TC_Blue = "#424477"
        this.globalData.TXT_Gray_50 = "#808080"

        let menuButtonObject = wx.getMenuButtonBoundingClientRect()
        wx.getSystemInfo({
            success: res => {
                let statusBarHeight = res.statusBarHeight,
                    navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
                    topBarHeight = menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2,//导航高度
                navHeight = statusBarHeight + topBarHeight;//导航高度
                this.globalData.statusHeight = statusBarHeight;//状态栏高度
                this.globalData.topHeight = topBarHeight;//顶部栏高度
                this.globalData.navHeight = navHeight;
                this.globalData.navTop = navTop;
                this.globalData.windowHeight = res.windowHeight;
            },
            fail(err) {
                console.log(err);
            }
        })
    },
})