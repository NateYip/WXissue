// Info/TeacherInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Info:[
      {
        id:1 , Title:"所修课程" , Content: "微积分Ⅰ与Ⅱ，线性代数，概率论与数理统计，大学物理，数据结构。"
      },{
        id:2 , Title:"项目经历" , Content: "独立完成基于深度学习的路径规划项目参与美国大学生数学建模竞赛以第三作者发表机器学习论文一篇"
      },{
        id:3 , Title:"其他能力" , Content: "熟练运用spss，matlab等软件，能进行一定的数据分析。精通c语言和java语言。"
      }
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '我的信息'
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