// components/rater/rater.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
      // 这里定义了innerText属性，属性值可以在组件使用时指定
      innerText: {
          type: Number,
          value: 0,
          //属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
          observer: function (newVal, oldVal) {
            console.log(newVal,oldVal)
           } 
      }
  },
  data: {
      // 这里是一些组件内部数据
      num: {}
  },
  methods: {
      // 这里是一个自定义方法
    _incrementCounter: function(e){
      let num = this.data.innerText;  
      this.setData({
        innerText:num+1
      })
      //triggerEvent 子向父通过事件传值 （事件名：bindincrement）
      this.triggerEvent('increment', { innerText: this.data.innerText ,oldinnerText: num })
    }
  },
  created: function () { }, // 组件在内存中创建完毕执行
  attached: function () { }, // 组件挂载之前执行
  ready: function () { }, // 组件挂载后执行
  detached: function () { }, // 组件移除执行
  moved: function () { }, // 组件移动的时候执行

})
