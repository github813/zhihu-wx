const wxrequest = require('../../utils/wxrequest.js')
Page({
  data: {
    inputShowed: false,
    inputVal: ""
    
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  searchSubmit: function (e) {
    console.info('form发生了submit事件，携带数据为：', e.detail.value)
  },
  onLoad: function () {
    wxrequest.wxget("https://douban.uieee.com/v2/movie/in_theaters", { count: 8 }).then(res=>{
      if (res.statusCode == 200) {
        let list = res.data.subjects
        this.setData({
          movie: list
        })
      }else{

      } 
    })

    wxrequest.wxget("https://douban.uieee.com/v2/movie/coming_soon", { count: 8 }).then(res => {
      if (res.statusCode == 200) {
        let list = res.data.subjects
        this.setData({
          newmovie: list
        })
      } else {

      }
    })

    wxrequest.wxget("https://douban.uieee.com/v2/movie/top250", { count: 8 }).then(res => {
      if (res.statusCode == 200) {
        let list = res.data.subjects
        this.setData({
          topmovie: list
        })
      } else {

      }
    })
  }
});