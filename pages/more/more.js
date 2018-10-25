// pages/more/more.js
const wxrequest = require('../../utils/wxrequest.js')
Page({

  /**
   * 页面的初始数据
   */
  page:1,
  type:"",
  data: {
    datajson:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log()
    this.type=options.type;
    this.getlist()
  },
  getlist:function(){
    wxrequest.wxget("https://douban.uieee.com/v2/movie/"+this.type, { count: 15 }).then(res => {
      if (res.statusCode == 200) {
        let list = res.data.subjects
        this.setData({
          datajson: list
        })
      } else {

      }
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
    this.page=1;
    this.getlist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.page++;
    let list = [...this.data.datajson, ...this.data.datajson]
    this.setData({
      datajson:list
    })
    console.log(this.page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '好电影分享',
      
    }
  }
})