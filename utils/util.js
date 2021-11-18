const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}
let globalData = getApp().globalData;
const baseURL = "http://1.117.150.21"
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function SwitchTabBar(event , that){
  let preIndex = that.data.active;
  let nowIndex = event.detail;
  let newCurrentShow = [];
  if(nowIndex == preIndex) return 
  for(let i=0 ; i<that.data.CurrentShow.length ; i++) {
    if(i == nowIndex) {newCurrentShow[i] = !that.data.CurrentShow[i];continue;}
    if(i == preIndex) {newCurrentShow[i] = !that.data.CurrentShow[i];continue;}
    newCurrentShow[i]= false;
  }
  that.setData({ active: nowIndex , 
                  CurrentShow: newCurrentShow,
              });
}

function Login(userFrom ){
  return async ()=>{
      try{
        //TODO need exact URL;
        const response = await fetch(baseURL+'/login',{
          method: 'POST',
          referrer: 'no-referrer',
          mode: 'cors',
        });
        if(response.ok){
          const resData = await response.json();
          globalData.identify = resData.identify;
          wx.setStorageSync('identify',resData.identify);
        }
      }catch(err){
        console.log(err);
      }
  }
}
function AuthGuard(){
  if(!wx.getStorageSync('identify')){
    wx.reLaunch({
      url: '/pages/LoginPage/LoginPage',
      })
  }
}
module.exports = {
  formatTime,
  SwitchTabBar,
  Login
}
