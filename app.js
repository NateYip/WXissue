// app.js
App({
  globalData:{
    identify:"Teacher",
    checked:true,
    Phone:true,
  },
  onLaunch() {
    if(!wx.getStorageSync('identify')){
      wx.reLaunch({
        url: '/pages/LoginPage/LoginPage',
        })
    }
    

  },
})
