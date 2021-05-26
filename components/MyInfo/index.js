// pages/MyInfo/index.js
import Toast from '@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showHelp(){
    wx.navigateTo({
      url: '/components/AboutUs/index',
    })
  },
  GotoHelp(){
   wx.navigateTo({
     url: '/components/Help/index',
   })
  },
  Draft(){
    Toast.fail({
      context: this,
      message:'草稿箱无文件'
    });
  },
  Trush(){
    Toast.fail({
      context: this,
      message:'垃圾箱无文件'
    });
  },
  switchtoALL(){
    let event = {
      detail:0
    }
    this.triggerEvent('FromInfotoAll', event );
  },
  switchtoNew(){
    let event = {
      detail:1
    }
    this.triggerEvent('FromInfotoNew', event );
  },
  switchtoMessage(){
    wx.navigateTo({
      url: '/Message/MessagePage/index',
    })
  },
  switchtoMyInfo(){
    wx.navigateTo({
      url: '/Student/studentBaseInfo/index',
    })
  },
  GotoSetting(){
    wx.navigateTo({
      url: '/SettingPage/index',
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