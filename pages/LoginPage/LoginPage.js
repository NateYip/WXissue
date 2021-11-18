// pages/LoginPage/LoginPage.js
import Toast from '@vant/weapp/toast/toast';
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "Teacher",
    password:"123456"
  },
  GotoHome(){
    
    if (this.data.username == 'Student' || this.data.username == 'student' ){
      if(this.data.password == 123456)
      {
        Toast.success('登陆成功');
        setTimeout(
        ()=>{
          app.globalData.identify = 'Student'
          wx.reLaunch({
          url: '/pages/Home/index',
          })
        } , 1000)
        return
      }
      
    }
    if(this.data.username == 'Teacher' || this.data.username == 'teacher' ){
      if(this.data.password == 123456){
        Toast.success('登陆成功');
        setTimeout(
        ()=>{
          app.globalData.identify = 'Teacher'
          wx.reLaunch({
            url: '/pages/HomeofTeacher/index',
          })
        },1000
        )
        return
      }
      
    }
    Toast.fail({
      context:this,
      message:"登录信息错误"
    })
  },
  GotoFogot(){
    wx.navigateTo({
      url: '/RegisterAndForget/PasswdForget/PasswdForget',
    })
  },
  GotoRegister(){
    wx.navigateTo({
      url: '/RegisterAndForget/RegisterPage/RegisterPage',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})