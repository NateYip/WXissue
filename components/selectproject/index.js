// components/selectproject/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    title:"选择他的课题",
    actions: [
      {
        name: '第一个项目的名字',
      },
      {
        name: '第二个项目的名字',
      },
      {
        name: '第三个项目的名字',
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({ show: !this.data.show });
    },
  
    onSelect(event) {
      let select = event.detail.name;
      this.setData({ title: select , show: !this.data.show })
    },
    showSheet(){
      this.setData({ show:!this.data.show })
    }
  }
})
