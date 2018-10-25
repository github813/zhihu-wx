Page({
  data: {
    inputShowed: false,
    inputVal: "",
    componentstext:3,
    total:8,
    aftertxt:'这里是插入到组件slot name="after"中的内容'
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
    searchSubmit: function(e) {       
        console.info('form发生了submit事件，携带数据为：', e.detail.value)
    },
    changetxt: function (e){
      console.log(e) 
      this.setData({
        aftertxt: e.currentTarget.dataset.no
      })
    },
    incrementTotal:function(e){
      console.log(e)    // 通过e.detail获取点击的那个对象
      var num = e.detail.innerText
      let old = e.detail.oldinnerText
      this.setData({
        total: this.data.total+ num-old
      })
     
    }
});