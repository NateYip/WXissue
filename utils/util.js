const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

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
module.exports = {
  formatTime,
  SwitchTabBar
}
