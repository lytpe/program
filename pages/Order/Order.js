// pages/Order/Order.js
Page({
  data: {
    showPop: false,
    animationData: {},  
      name:"",
      pic:"",
      price:"",
      showbottom:false,
      visible:false
  },
  toggletoshop(){
     this.setData({
       //showshop:!this.data.showshop,
      showPop:true
     })
  },
  toggletoclose(){
     this.setData({
      showPop:false,
      showbottom:false
     });
  },
  togglebuy(){
     this.setData({
       showbottom:true
     })
  },
  next(){
     wx.navigateTo({
       url: '../Balance/Balance',
     })
  },
  handleText() {
    this.setData({
      showPop: false
    });
     wx.showToast({
       title: '已加入购物车',
     })
  },
  backToMain: function(event){
    console.log(event)
     wx.switchTab({
       url: event.currentTarget.dataset.indexs,
     })
  },
  toShopCart: function(event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.links,
    })
  },
  showModel:function(){
      var that=this;
      var animation=wx.createAnimation({
        duration:1000,
        timingFunction:'linear',
        delay:100,
        success:function(res){
          console.log(res);
        }
      })
      that.animation=animation;
      animation.step();
      that.setData({
        animationData:animation.export(),
        showPop:true
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.setData({
          name:options.name,
          pic:options.pic,
          price:options.price
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

  }
})