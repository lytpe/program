// pages/hairdressing/hairdressing.js
let spage=1;
let sreachBottom=false;
var app=getApp();
Page({
  data:{
     products:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    spage = 1;
    sreachBottom = false;
    this.setData({
      products: []
    })
    this.getList(spage);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    spage=1;
    sreachBottom=false;
    this.setData({
      products:[]
    })
    this.getList(spage);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中',
    });
    this.getList(spage);
    setTimeout(function () {
      wx.hideLoading(), 2000
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  directto: function (e) {
    app.globalData.singleItem = {
      name: e.currentTarget.dataset.name,
      pic: e.currentTarget.dataset.pic,
      price: e.currentTarget.dataset.price,
      storageNum: e.currentTarget.dataset.storage,
      productInfo: e.currentTarget.dataset.productinfos,
      type: e.currentTarget.dataset.type
    };
    wx.navigateTo({
      url: e.currentTarget.dataset.links
    });
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getList:function(temppage){
    if(sreachBottom!=false){
      wx.showToast({
        title: '到达底部',
      });
      return;
    }
    var that=this;
    wx.request({
      url: "https://www.ruilanya.top/ProductsManage/GetProductsList",
      data:{
        page: temppage
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(res){
        var listdata=that.data.products;
        for(var i=0;i<res.data.products.length;i++){
          listdata.push(res.data.products[i]);
        }
        if(res.data.products<6){
          sreachBottom=true;
        }else{
          spage++;
        }
        that.setData({
          products:listdata
        })
      },
      fail:function(){
        wx.showToast({
          title: '网络延迟！',
        });
      }
    });
  }
})