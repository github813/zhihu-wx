const wxget = (url,params) => {
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title:"加载中"
    })
    let paramstr = "";
    if (params) {      
      for (let [key, value] of Object.entries(params)) {
        paramstr =paramstr+key + "=" + value + "&"
      }
      paramstr = paramstr.substring(0, paramstr.length - 1)
      paramstr = "?" + paramstr       
    }

    wx.request({
      url: url + paramstr,
      // data: { strCallUserCode: 'test', strCallPassword: '123' },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'json'
      },// 设置请求的 header
      success: function (res) { 
        wx.hideLoading()       
        resolve(res)
      },
      fail: function (res) {
        wx.hideLoading()
        reject(res)        
      }
    })
  })
  






  
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  wxget
}
