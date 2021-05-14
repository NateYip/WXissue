// Teacher/NewProject/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ProjectTitle:"",
    Typeshow:false,
    discribe:"",
    show: false,
    Numbershow:false,
    JoinNumber:0,
    TotalNumber:['1','2','3','4'],
    DiffType:['学位论文','科研报告']
  },
  showType(){
    this.setData({ Typeshow: true })
  },
  TypeonClose(){
    this.setData({ Typeshow: false })
  },
  SelectType(event){
    const { picker, value, index } = event.detail;
    this.setData({ProjectType : value})
  },
  TypeonCancel(){
    this.setData({ Typeshow: false })
  },
  TypeonConfirm(event){
    const { picker, value, index } = event.detail;
    this.setData({Typeshow:false ,ProjectType : value})
  },
  SelectTotalNumber(event){
    const { picker, value, index } = event.detail;
    this.setData({JoinNumber : value})
  },
  showPopup() {
    this.setData({ Numbershow: true });
  },
  NumberonClose() {
    this.setData({ Numbershow: false });
  },
  NumberonConfirm(event){
    const { picker, value, index } = event.detail;
    this.setData({Numbershow:false ,JoinNumber : value})
  },
  NumberonCancel(){
    this.setData({ Numbershow: false,JoinNumber : 0 });
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
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