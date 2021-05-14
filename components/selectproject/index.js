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
    selected:'点击选择课题',
    show: false,
    ProjectName:['他的第一个项目','他的第二个项目','他的第三个项目']
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showPopup(){
      this.setData({show:true})
    },
    onClose() {
      this.setData({ show: false });
    },
    onCancel(){
      this.setData({ show: false });
    },
    onSelect(event) {
      this.setData({ selected: event.detail.value })
    },
    onConfirm(event){
      this.setData({ selected: event.detail.value , show: false })
    }
  }
})
