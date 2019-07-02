//index.js
//获取应用实例
const app = getApp();
const WXAPI = require('../../utils/api');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goodsRecommend: [], // 推荐商品
  },
  onLoad: function () {
    /* 请求接口 */
    WXAPI.queryGoodsList().then(res => {
      if (res.code === 0) {
        this.setData({
          goodsRecommend: res.data 
        });
      }
    });
  }
})
