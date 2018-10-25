// components/rater/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      max:{
        type:Number,
        value:5
      },
      star:{
        type:String,
        value:"★"
      },
      score:{
        type:Number,
        value:0
      },
      disabled:{
        type:Boolean,
        value:false
      },
      fontsize:{
        type:Number,
        value:40
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateValue(){ 
      let relscore = this.data.score;     
      if (relscore>5){
        relscore = relscore/2;
      }
      let integer = parseInt(relscore);
      let smallnum = (relscore - integer).toFixed(3)
      let percent = parseInt(smallnum * 100);
      this.setData({
        relscore,integer, percent
      })
    },
    checkscore(e){
      if (!this.data.disabled){
        let checkindex = e.currentTarget.dataset.index;       
        let newvalue = checkindex + 1;
        this.setData({
          score: newvalue
        })
        this.updateValue()
      }
      
    }
  },
  // 组件挂载之前执行
  attached: function () {
    this.updateValue()
  }, 


})
