// Teacher/TeacherManage/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    Firopt: [
      { text: '全部', value: 0 },
      { text: '信软与软件工程学院', value: 1 },
      { text: '外国语学院', value: 2 },
      { text: '经管学院', value: 3 },
    ],
    Secopt: [
      { text: '全部', value: 'a' },
      { text: '本科', value: 'b' },
      { text: '研究生', value: 'c' },
    ],
    FirVal: 0,
    SecVal: 'a',
    Info:[
      {id:1, Name:"小明" , Title:"数学科学学院" , Discribe :"全国大学生数学竞赛国家二等奖，精通spss，excel等统计软件数学基础扎实，能针对实际问题进行数学建模。"},
      {id:2, Name:"小刚" , Title:"航空航天学院" , Discribe :"全国大学生电子设计大赛省一等奖，参与实验室雷达相关研究在雷达顶会发表相关论文，同时有通信抗干扰项目经验。"},
      {id:3, Name:"小红" , Title:"电子科学与工程学院" , Discribe :"参与无线电测向比赛入选国家队，加入高频复杂系统重点学课实验室完成频射技术，电子电路等多项专业课程。"},
      {id:4, Name:"小李" , Title:"外国语学院" , Discribe :"全国大学生口译大赛国家一等奖，外研社英语写作比赛省3等奖参加四川省商会口译志愿者。"},
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addNewTeacher:()=>{
      wx.navigateTo({
        url: '/Teacher/addTeacher/index',
      })
    }
  }
})
