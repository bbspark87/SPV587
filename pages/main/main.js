import mqtt from '../../utils/mqtt.js';

const App = getApp().globalData;
//连接的服务器域名，注意格式！！！
// const host = 'wxs://www.xuhong.com/mqtt';
const host = 'wx://mqtt-cn-2r42eyy6d0i.mqtt.aliyuncs.com';

Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentCity: '长春市', //当前定位城市

        client: null,
        //记录重连的次数
        reconnectCounts: 0,
        //MQTT连接的配置
        options: {
            protocolVersion: 4, //MQTT连接协议版本
            clientId: 'client_01',
            clean: false,
            password: 'xuhong12346',
            username: 'admin',
            reconnectPeriod: 1000, //1000毫秒，两次重新连接之间的间隔
            connectTimeout: 30 * 1000, //1000毫秒，两次重新连接之间的间隔
            resubscribe: true //如果连接断开并重新连接，则会再次自动订阅已订阅的主题（默认true）
        }
    },
    onClick_connect: function () {
        var that = this;
        //开始连接
        this.data.client = mqtt.connect(host, this.data.options);
        this.data.client.on('connect', function (connack) {
            wx.showToast({
                title: '连接成功'
            })
        })


        //服务器下发消息的回调
        that.data.client.on("message", function (topic, payload) {
            console.log(" 收到 topic:" + topic + " , payload :" + payload)
            wx.showModal({
                content: " 收到topic:[" + topic + "], payload :[" + payload + "]",
                showCancel: false,
            });
        })


        //服务器连接异常的回调
        that.data.client.on("error", function (error) {
            console.log(" 服务器 error 的回调" + error)

        })

        //服务器重连连接异常的回调
        that.data.client.on("reconnect", function () {
            console.log(" 服务器 reconnect的回调")

        })


        //服务器连接异常的回调
        that.data.client.on("offline", function (errr) {
            console.log(" 服务器offline的回调")

        })


    },
    onClick_SubOne: function () {
        if (this.data.client && this.data.client.connected) {
            //仅订阅单个主题
            this.data.client.subscribe('Topic0', function (err, granted) {
                if (!err) {
                    wx.showToast({
                        title: '订阅主题成功'
                    })
                } else {
                    wx.showToast({
                        title: '订阅主题失败',
                        icon: 'fail',
                        duration: 2000
                    })
                }
            })
        } else {
            wx.showToast({
                title: '请先连接服务器',
                icon: 'none',
                duration: 2000
            })
        }
    },
    onClick_SubMany: function () {

        if (this.data.client && this.data.client.connected) {
            //仅订阅多个主题
            this.data.client.subscribe({
                'Topic1': {
                    qos: 0
                },
                'Topic2': {
                    qos: 1
                }
            }, function (err, granted) {
                if (!err) {
                    wx.showToast({
                        title: '订阅多主题成功'
                    })
                } else {
                    wx.showToast({
                        title: '订阅多主题失败',
                        icon: 'fail',
                        duration: 2000
                    })
                }
            })
        } else {
            wx.showToast({
                title: '请先连接服务器',
                icon: 'none',
                duration: 2000
            })
        }
    },
    onClick_PubMsg: function () {
        if (this.data.client && this.data.client.connected) {
            this.data.client.publish('hello', 'i am  from wechat msg');
            wx.showToast({
                title: '发布成功'
            })
        } else {
            wx.showToast({
                title: '请先连接服务器',
                icon: 'none',
                duration: 2000
            })
        }
    },
    onClick_unSubOne: function () {
        if (this.data.client && this.data.client.connected) {
            this.data.client.unsubscribe('Topic1');
        } else {
            wx.showToast({
                title: '请先连接服务器',
                icon: 'none',
                duration: 2000
            })
        }
    },
    onClick_unSubMany: function () {
        if (this.data.client && this.data.client.connected) {
            this.data.client.unsubscribe(['Topic1', 'Topic2']);
        } else {
            wx.showToast({
                title: '请先连接服务器',
                icon: 'none',
                duration: 2000
            })
        }
    },
    GoMySpread() {
        wx.navigateTo({
            url: "/package-user-center/pages/my-spread/my-spread",
        })
    },

    menuClick(event) {
        const targetPage = event.currentTarget.dataset.page
        if (targetPage === "scanCode") {
            wx.scanCode({
                onlyFromCamera: true,
                scanType: ['qrCode'],
                success(res) {
                    console.log(res.result)
                    wx.navigateTo({
                        url: "/pages/shop-scan/shop-scan",
                    })
                }
            })
        } else {
            wx.navigateTo({
                url: targetPage,
            })
        }
    },

    goToLogin(e) {
        wx.navigateTo({
            url: "/pages/login/login",
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            navH: App.navHeight,
            navTop: App.navTop,
            capsHeight: App.capsHeight,
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
        this.setData({
            currentCity: wx.getStorageSync('currentCity') ? wx.getStorageSync('currentCity') : "定位失败"
        });
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

    },
})