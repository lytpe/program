var app=getApp();
Page({

  data: {
    current: 'tab1',
    temp:'',
    visible1:false,
    allinfos:[]
  },
  changeTab:function(e){
    this.setData({
      current: e.detail.key,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrder();
  },
  getOrder:function(){
    var that = this;
    wx.request({
      url: 'https://localhost:5001/Orders/GetOrders',
      data: {
        username: app.globalData.userInfo.nickName
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          allinfos: res.data.orders
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '网络延迟！',
        });
      },
    })
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
    this.getOrder();
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  toBalance: function () {
    app.globalData.goodsItemArary = arrays;
    wx.navigateTo({
      url: "../Balance/Balance",
    });
  },
  payIt:function(e){
    wx.request({
      url: 'https://localhost:5001/Orders/GetOrderInfo',
      data: {
        id: e.currentTarget.dataset.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function (res) {
        app.globalData.goodsItemArary.push({
          name: res.data.productName,
          num: res.data.productNums,
          price: res.data.productPrice,
          isSelect: true
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '网络延迟',
        });
      },
    });
    wx.navigateTo({
      url: "../../Balance/Balance",
    });
  },
  quit:function(e){
    var that=this;
    wx.request({
      url: 'https://localhost:5001/Orders/QuitOrder',
      data:{
        orderId: e.currentTarget.dataset.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        wx.showToast({
          title: '取消成功',
        });
        that.onShow();
      },
      fail: function (res) {
        wx.showToast({
          title: '网络延迟',
        });
      },
    })
  },
  checkgood:function(e){
    var that = this;
    wx.request({
      url: 'https://localhost:5001/Orders/CheckOrder',
      data: {
        orderId: e.currentTarget.dataset.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        that.onShow();
      },
      fail: function (res) {
        wx.showToast({
          title: '网络延迟',
        });
      },
    })
  }
})