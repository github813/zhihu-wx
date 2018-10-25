// pages/detail/index.js
const wxrequest = require('../../utils/wxrequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieinfo:null,
    isExpand:false,
    smallsummary:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
    let self=this;
    // https://douban.uieee.com/v2/movie/subject/26752088\
   wxrequest.wxget("https://douban.uieee.com/v2/movie/subject/"+id,null).then(
     data=> {   
       console.log(data);  
       if (data.statusCode==200){
         this.summary = data.data.summary;
         if (this.summary.length>120){
           this.summary=this.summary.substring(0,120)+"…"
           this.isExpand=true
         }
         
         wx.setStorage({
           key: 'video',
           data: data.data.bloopers,
         })
         this.setData({
           movieinfo: data.data, smallsummary: this.summary, isExpand:this.isExpand
         })
       }else{
         
       } 
      
     }) 
    // https://douban.uieee.com/v2/movie/subject/26752088/comments   // 
    wxrequest.wxget("https://douban.uieee.com/v2/movie/subject/"+id+"/comments?count=6", null).then(
      data => {
        console.log(data);
        if (data.statusCode == 200) {
          this.setData({
            comments: data.data.comments 
          })
        } else {

        }        
      }) 
  },

  expand: function () {    
    let expandstaus = !this.isExpand;    
    this.setData({
      isExpand: expandstaus
    })    
  },
  checkvideo:function(event){
    getApp().globalData.videourl = event.currentTarget.dataset.url
    
    wx.navigateTo({ url:'../video/index'})
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
    return {
      title: '好电影分享',

    }
  }
})