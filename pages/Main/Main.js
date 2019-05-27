// pages/Main/Main.js
let page=1;
let reachBottom=false;
var app=getApp();
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
      },
      {
        url: "../Section/Section",
        name: "美睫",
        show: "../Images/meijie.png"
      },
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
  showhotproject:function(e){
    app.globalData.singleItem=
      {"name":e.currentTarget.dataset.name,
      "pic": e.currentTarget.dataset.pic,
      "price": e.currentTarget.dataset.price,
      "storageNum": e.currentTarget.dataset.snum,
      "productInfo": e.currentTarget.dataset.pinfos,
      "type": e.currentTarget.dataset.type
      };
    wx.navigateTo({
      url: "../Order/Order",
    })
  },

  onLoad:function(options){
    app.globalData.pid = decodeURIComponent(options.scene);
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: "https://www.ruilanya.top/ProductsManage/GetUserInfo",
            data: {
              code: res.code
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function (res) {
              app.globalData.openId=res.data.open_id
              app.globalData.accesstoken=res.data.access_token;
            },
             fail: function () {
               wx.showToast({
                 title: '登录失败！',
               });
             }
          })
         }
       }
     });
  },
  onShow:function(){
    page = 1;
    reachBottom = false;
    this.setData({
      detail: []
    })
    this.getProductList(page);
  },
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中',
    });
    this.getProductList(page);
    setTimeout(function () {
      wx.hideLoading(), 2000
    })
  },
  getProductList: function (temppage) {
    if (reachBottom != false) {
      wx.showToast({
        title: '到达底部',
      });
      return;
    }
    var that = this;
    wx.request({
      url: 'https://www.ruilanya.top/ProductsManage/GetHotProduct',
      data: {
        page: temppage
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var listdata = that.data.detail;
        for (var i = 0; i < res.data.pros.length; i++)        {
          listdata.push(res.data.pros[i]);
        }
        if (res.data.pros <4) {
          reachBottom = true;
        } else {
          page++;
        }
        that.setData({
          detail: listdata
        })
      },
      fail: function () {
        wx.showToast({
          title: '网络延迟！',
        });
      }
    });
  },
  onShareAppMessage(res) {
    if (res.from === 'menu') {
    }
    return {
      title: '冰晨',
      path: '/pages/Main'
    }
  }
})