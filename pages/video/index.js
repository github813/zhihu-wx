// pages/video/index.js

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {  
    this.videoContext = wx.createVideoContext('myVideo')
    // this.videoContext.play()
  },
  onLoad:function(){
    console.log(getApp().globalData.videourl)
    this.setData({
      src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
    })
  },
  inputValue: '',
  currentTime: '',
  data:{
    src:'',    
    danmulist:[
      {
        text: 'this.inputValue',
        color: '#ccc',
        time:1
      },
      {
        text: 'this.inputValue',
        color: '#666',
        time: 5
      },
      {
        text: 'inputValue',
        color: '#666',
        time: 4
      }
    ]
  },
  // 从相册、相机拍摄视频
  choosevideo:function(){
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        console.log(res)
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  videoerr:function(e){
    console.log(e)
  },
  funpause:function(e){
    
  },
  //  bindtimeupdate
  timeupdate:function(e){
    // this.currentTime = parseInt(e.detail.currentTime) ; 
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    // console.log(this.currentTime)
    // this.videoContext.
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor() 
    })
  }
})