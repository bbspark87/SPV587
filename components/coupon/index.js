Component({
    /**
     * 组件的属性列表
     */
    properties: {
        name: String,
        validDate: String,
        discount: String,
        describe: String,
        selected: {
            type: Number,
            value: 0,
        },
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        dataInit(infos) {
            console.log(infos)
            // this.setData()
        },
    }
})
