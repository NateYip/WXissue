// components/singleTeacher/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Name:{
      type:String,
      value:"姓名"
    },
    Discribe:{
      type:String,
      value:"学生简要描述"
    },
    Title:{
      type:String,
      value:"学院"
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
    GotoStudentInfo(){
      wx.navigateTo({
        url: '/Student/studentBaseInfo/index',
      })
    },
  },
  
})
