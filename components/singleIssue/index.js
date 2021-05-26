// components/SingleProjectIssueManage、/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Title:{
      type:String,
      value:"项目名称"
    },
    InfoKeyWord:{
      type:String,
      value:"项目关键词"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    GotoIssueInfo(){
      wx.navigateTo({
        url: '/Student/IssueInfo/index',
      })
    },
  }
})
