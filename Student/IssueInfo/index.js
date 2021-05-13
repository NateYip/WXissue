// Student/IssueInfo/IssueInfo.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    steps: [
      {
        text: '选题',
        desc: '已完成',
        inactiveIcon: 'arrow',
        activeIcon: 'success',
      },
      {
        text: '开题答辩',
        desc: '提交申请',
        inactiveIcon: 'arrow',
        activeIcon: 'success',
      },
      {
        text: '中期答辩',
        desc: '未完成',
        inactiveIcon: 'arrow',
        activeIcon: 'success',
      },
      {
        text: '终稿答辩',
        desc: '未完成',
        inactiveIcon: 'arrow',
        activeIcon: 'success',
      },
    ],
  },
  SendApplication(){
    if(app.globalData.identify == 'Student'){
      wx.navigateTo({
        url: '/Student/SendApplication/index',
      })
    }
    if(app.globalData.identify == 'Teacher'){
      wx.navigateTo({
        url: '/Teacher/ApplyRequest/index',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '论文信息'
    })
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