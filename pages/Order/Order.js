// pages/Order/Order.js
var app=getApp();
Page({
  data: {
      showPop: false,
      animationData:{},
      showbottom: false,
      visible: false,
      name:"",
      pic:"",
      price:"",

      storageNum:100,
      productInfo:"",
      type:""
  },
  onLoad: function (options) {
  this.setData({
    name: app.globalData.singleItem.name,
    pic: app.globalData.singleItem.pic,
    price: app.globalData.singleItem.price,
    storageNum: app.globalData.singleItem.storageNum,
    productInfo: app.globalData.singleItem.productInfo,
    type: app.globalData.singleItem.type
  });
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
    //处理数量变化
  handlechanges: function ({ detail }) {
    this.setData({
      num: detail.value
    });
  },
  toggletoshop:function() {
    this.setData({
      showPop: true
    });
  },
  toggletoclose:function(){
     this.setData({
      showPop: false,
      showbottom: false
    });
  },
  toggletobuy:function(e) {
    this.setData({
      showbottom: true
    })
  },
  //到付款页面
  toBalance:function(e) {
    getApp().globalData.goodsItemArary.push({
      name:e.currentTarget.dataset.goodname,
      num:e.currentTarget.dataset.num,
      price:this.data.price,
      pic:this.data.pic,
      isSelect:true
    });
    wx.navigateTo({
    url: "../Balance/Balance",
    });
  },
  //加入购物车
  jointoshop:function(e){
    app.globalData.shopsItemArray.push({
      name: e.currentTarget.dataset.goodname,
      num: e.currentTarget.dataset.num,
      price: this.data.price,
      pic:this.data.pic,
      isSelect:false});
    this.setData({
      showPop: false
    });
    wx.showToast({
      title: '已加入购物车',
    });
  },

  backToMain: function (event) {

    wx.switchTab({
      url: event.currentTarget.dataset.indexs,
    });
  },
  toShopCart: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.links,
    });
  },
  showModel: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100,
      success: function (res) {
        //console.log(res);
      }
    });
    animation.step();
    that.setData({
      animationData: animation.export(),
      showPop: true
    });
  },
})