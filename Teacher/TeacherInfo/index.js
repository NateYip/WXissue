// Info/TeacherInfo/index.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    
  },
  GoBack(){
    Toast.fail('没有权限！');
    setTimeout(
      ()=>{
        wx.navigateBack()
      },1000
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '导师信息'
      })
      try{
        let GotInfo= JSON.parse(options.all);//解析得到对象 
        this.setData({Info:GotInfo.discribe ,all :GotInfo})
      }catch(err){
         let all={
          AvatorURL:"https://bkimg.cdn.bcebos.com/pic/9358d109b3de9c82deac541b6c81800a18d8435c?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg",
          name:"傅翀",
          title:"副教授"
        }
        let Info=[
          {
            id:1 , title:"个人简介" , content: "傅翀，博士，副教授，1998年毕业于电子科技大学管理学院投资经济专业，获管理学学士学位；2001年毕业于电子科技大学管理学院数量经济专业，获经济学硕士学位；2011年6月毕业于电子科技大学计算机科学与工程学院信息安全专业，获博士学位。2007年及2015年以访问学者身份在美国西北大学访问进修。"
          },{
            id:2 , title:"科研情况" , content: "研究领域为机器学习及大数据技术在金融、网络安全、隐私保护等方面的应用。曾先后作为核心主研参与国家242项目“宏观网络安全预警与应急响应系统”、华为高校基金项目“宏观网络安全预警与应急响应”、中国工程物理研究院“离心式动态飞行模拟器全局时钟同步数据保存系统”、中兴通讯基金“通用移动安全服务研究”、省级课题"
          },{
            id:3 , title:"获奖情况" , content: "2019.12：获学院教学工作优秀个人一等奖;2015.04：被评为电子科技大学教学质量优秀主讲教师，校级;2012.12：被评为计算机学院/软件学院年度优秀党员，院级 2011.06：被评为电子科技大学2009-2011年度暨“创先争优”活动优秀共产党员，校级; 2010.06：被电子科技大学学工部、研工部、校团委评为优秀班导师，校级;2010.01：被评为计算机学院/软件学院年度优秀党员，院级"
          }
        ]
        this.setData({all : all ,Info:Info })
      }
     
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