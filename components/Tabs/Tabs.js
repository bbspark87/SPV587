// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [{
      id: 10,
      name: "1",
      isActive: true
    }, {
      id: 11,
      name: "2",
      isActive: false
    }, {
      id: 12,
      name: "3",
      isActive: false
    }, {
      id: 13,
      name: "4",
      isActive: false
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

    tabChange(e) {
      const {
        index
      } = e.currentTarget.dataset;
      let tabs = this.data.tabs;
      tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      this.setData({
        tabs
      })
    }
  }
})