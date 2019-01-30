// pages/Main/Main.js
Page({
  data: {
    imgUrls: [
      "../../utils/Index.jpg",
      "../../utils/Index.jpg",
      "../../utils/Index.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    lists:[
      {
        url:"../hairdressing/hairdressing",
        name:"美容",
        show:"../Images/meirong.png"
      },
      {
        url: "../nail/nail",
        name: "美甲",
        show: "../Images/meijia.png"
      }
      ,
      {
        url: "../eyelash/eyelash",
        name: "美睫",
        show: "../Images/meijie.png"
      }
      ,
      {
        url: "../beauty/beauty",
        name: "美妆",
        show: "../Images/meizhuang.png"
      }
    ],
    details:[
        {
        pic: "../Images/file_demo1.png",
        name:"头部/颈肩",
        price:"￥130",
        url: "../hairdressing/hairdressing"
        },
        {
        pic: "../Images/file_demo2.png",
        name: "高端私人红妆",
        price: "￥120",
        url: "../hairdressing/hairdressing"
        },
        {
        pic: "../Images/file_demo3.png",
        name: "特价自然",
        price: "￥166",
        url: "../hairdressing/hairdressing"
        },
    ]
  },
  directto:function(event){
     wx.navigateTo({
       url: event.currentTarget.dataset.links,
     })
  },
  showhotproject:function(event){
    wx.navigateTo({
      url: event.currentTarget.dataset.links,
    })
  },
  onShareAppMessage(res){
    if(res.from==='menu'){
    }
    return {
      title:'冰尘',
      path:'/pages/Main'
    }
  },
  onLoad:function(options){
    var that=this;
    wx.request({
      url: 'https://www.瑞兰雅.top//Products/GetHotProduct',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          detail:res.data.pros
        });
      },
      fail: function () {
        wx.showToast({
          title: '网络延迟，请稍后重试',
        });
      }
    })
  },
  onReachBottom:function(){
    wx.showLoading({
      title: '加载中',
    });
    wx.hideLoading();
  }
})