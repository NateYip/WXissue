// pages/LoginPage/LoginPage.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password:""
  },
  GotoHome(){
    if (this.data.username == 'Student' || this.data.username == 'student' ){
      setTimeout(
        ()=>{
          app.globalData.identify = 'Student'
          wx.reLaunch({
          url: '/pages/Home/index',
          })
        } , 2000)
    }
    if(this.data.username == 'Teacher' || this.data.username == 'teacher' ){
      setTimeout(
        ()=>{
          app.globalData.identify = 'Teacher'
          wx.reLaunch({
            url: '/pages/HomeofTeacher/index',
          })
        }
      )
    }

    
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