// Student/IssueManage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    FirVal:0,
    SecVal:0,
    Firopt:[
      { text: '全部', value: 0 },
      { text: '本科生', value: 1 },
      { text: '研究生', value: 2 },
    ],
    Secopt: [
      { text: '全部', value: 0 },
      { text: '科研论文', value: 1 },
      { text: '学位论文', value: 2 },
    ],
  },
  addNewIssue(){

    let nowCurrentShow=[false,true,false]
    this.triggerEvent('SwitchNew',nowCurrentShow)
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