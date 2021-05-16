// pages/RegisterPage/RegisterPage.js
import Toast from '@vant/weapp/toast/toast';

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
    checked:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    GotoHome(){
      Toast.fail({
        context:this,
        message:"无权限注册！"
      })
      setTimeout(
        ()=>{
          wx.reLaunch({
            url: '/pages/LoginPage/LoginPage',
          })
        }, 1000
      )
      
    }
  }
})
