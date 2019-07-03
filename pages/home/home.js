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
    inputShowed: false,
    inputVal: "",
    noticeList: ['爆品上新通知','物流派送信息通知'],
    indicatorDots:false,
    autoplay:true,
    interval:3000,
    duration:1000,
    circular:true,
    bannerList:[
      { picUrl: "https://cdn.it120.cc/apifactory/2019/03/18/7de640d0a0c0c3f525df0e6b65abb1f0.png"},
      {picUrl: "https://cdn.it120.cc/apifactory/2019/03/18/4714a6caa0be3c4153b747562a4337b6.png"},
      {picUrl: "https://cdn.it120.cc/apifactory/2019/03/18/c7c8e67ca1b6ff23efa13b5d7516a9d6.png"}
    ]

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
  }
})
