const CONFIG = require('../config.js');
/* const baseUrl = 'http://yapi.demo.qunar.com/mock/73886'; */
const baseUrl = 'https://api.it120.cc';  

const request = (url, needSubDomain, method, data) => {
  let _url = baseUrl + (needSubDomain ? '/' + CONFIG.subDomain : '') + url
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        /* 'Content-Type': 'application/x-www-form-urlencoded' */
        'Content-Type': 'application/json'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request,
  queryCateList: () => {
    return request('/cms/category/list', true, 'get', {})
  }
  ,queryGoodsList:()=>{
    return request('/shop/goods/list',true,'post',{})
  }

}