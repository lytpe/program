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
    detail:[],
    lists:[
      {
        url:"../Section/Section",
        name:"美容",
        show:"../Images/meirong.png"
      },
      {
        url: "../Section/Section",
        name: "美甲",
        show: "../Images/meijia.png"
      }
      ,
      {
        url: "../Section/Section",
        name: "美睫",
        show: "../Images/meijie.png"
      }
      ,
      {
        url: "../Section/Section",
        name: "美妆",
        show: "../Images/meizhuang.png"
      }
    ]
  },
  toSection:function(event){
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
      url: 'https://localhost:5001/Products/GetHotProduct',
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
          title: '网络延迟！',
        });
      }
    })
  },
  onReachBottom:function(){
    wx.showLoading({
      title: '加载中',
    });
    wx.hideLoading();
  },
  onShow:function(){
    
  }
})