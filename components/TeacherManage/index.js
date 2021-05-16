// Teacher/TeacherManage/index.js
import {
  teacherList
} from "../../mocks/teacherinfo.js"
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
    list:teacherList.List,
    Firopt: [
      { text: '全部', value: 0 },
      { text: '信软与软件工程学院', value: 1 },
      { text: '外国语学院', value: 2 },
      { text: '经管学院', value: 3 },
    ],
    Secopt: [
      { text: '全部', value: 'a' },
      { text: '教授', value: 'b' },
      { text: '副教授', value: 'c' },
    ],
    FirVal: 0,
    SecVal: 'a',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addNewTeacher:()=>{
      wx.navigateTo({
        url: '/Teacher/addTeacher/index',
      })
    }
  }
})
