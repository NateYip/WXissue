// pages/Home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    CurrentShow:[
      false,
      false,
      true,
    ]
    
  },
  SwitchTabBar(event){
    let preIndex = this.data.active;
    let nowIndex = event.detail;
    let newCurrentShow = [];
    if(nowIndex == preIndex) return 
    for(let i=0 ; i<this.data.CurrentShow.length ; i++) {
      if(i == nowIndex) {newCurrentShow[i] = !this.data.CurrentShow[i];continue;}
      if(i == preIndex) {newCurrentShow[i] = !this.data.CurrentShow[i];continue;}
      newCurrentShow[i]= false;
    }
    this.setData({ active: nowIndex , 
                    CurrentShow: newCurrentShow,
                });
  },
  SwitchNew(event){
    this.setData({
      active:1,
      CurrentShow:event.detail})
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
    wx.hideHomeButton({
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
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