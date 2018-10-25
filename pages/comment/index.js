// pages/comment/index.js
const wxrequest = require('../../utils/wxrequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    scrollTop:0,
    comments:null,
    id:0 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({
      id:options.id
    })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          windowHeight: res.windowHeight
        })
      }
    })

    this.getshortcom()
    
  },
 

  swiperTab: function (e) {
    var that = this;
    let current = e.detail.current;
    that.setData({
      currentTab: current
    });
    if (current==1){
      that.getreviews();
    }
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindDownLoad: function () {
    
    if (this.data.currentTab == 1) {
      let list = [...this.data.reviews, ...this.data.reviews]
      this.setData({
        reviews: list
      })
    } else {
      let list = [...this.data.comments, ...this.data.comments]
      this.setData({
        comments: list
      })
    }  

  },
  scroll: function (event) {
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  refresh: function (event) {
    if(this.data.currentTab==1){
      this.getreviews()  
    } else{
      this.getshortcom();   
    }  
    
  },
  getshortcom(){ 
    wxrequest.wxget("https://douban.uieee.com/v2/movie/subject/" + this.data.id+"/comments?count=6", null).then(
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
  getreviews(){
    // https://douban.uieee.com//v2/movie/subject/26752088/reviews
    wxrequest.wxget("https://douban.uieee.com/v2/movie/subject/" + this.data.id+"/reviews?count=10", null).then(
      data => {       
        if (data.statusCode == 200) {
          this.setData({
            reviews: data.data.reviews
          }) 
          console.log(data.data.reviews)         
        } else {

        }
      })
  },
  checkdetal(e){
    let index = e.currentTarget.dataset.index;
    let that=this;
    wx.setStorage({
      key: 'review',
      data: JSON.stringify(that.data.reviews[index]),
    })
    wx.navigateTo({
      url: '../review/index',
    })
  } 



})