// components/singleTeacher/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Name:{
      type:String
    },
    Title:{
      type:String
    },
    SimpleDiscribe:{
      type:String
    },
    URL:{
      
      type:String
    },
    all:{
      type: Object
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
  GotoTeacherInfo(){
      wx.navigateTo({
        url: '/Teacher/TeacherInfo/index?all='+JSON.stringify(this.data.all)
      })
    },
  },
  
})
