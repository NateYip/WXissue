// addTeacher/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Firopt: [
      { text: '全部', value: 0 },
      { text: '信软与软件工程学院', value: 1 },
      { text: '经管学院', value: 2 },
      { text: '外国语学院', value: 3 },
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '查找导师'
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