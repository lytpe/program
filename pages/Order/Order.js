// pages/Order/Order.js
Page({
  data: {
      showPop: false,
      animationData:{},
      name:"",
      pic:"",
      price:"",
      showbottom:false,
      visible:false,
      storageNum:100
  },
  onLoad: function (options) {
    console.log(options);
        this.setData({
          name:options.name,
          pic:options.pic,
          price:options.price
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
  toggletoshop() {
    this.setData({
      showPop: true
    });
  },
  toggletoclose() {
    var that = this;
    that.setData({
      showPop: false,
      showbottom: false
    });
  },
  toggletobuy(e) {
    this.setData({
      showbottom: true
    })
  },
  nexttobuy(event) {
    console.log("toBuy");
    console.log(event)
    wx.navigateTo({
      url: "../Balance/Balance?name="+event.currentTarget.dataset.goodname+"&num=" + event.currentTarget.dataset.num+"&price="+this.data.price,
    })
  },
  jointoshop(e){
    getApp().globalData.shopsItemArray.push({ name: e.currentTarget.dataset.goodname, num: e.currentTarget.dataset.num, price: this.data.price,isSelect:false});
    this.setData({
      showPop: false
    });
    wx.showToast({
      title: '已加入购物车',
    });
  },
  backToMain: function (event) {
    console.log(event)
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
        console.log(res);
      }
    });
    animation.step();
    that.setData({
      animationData: animation.export(),
      showPop: true
    });
  },
})