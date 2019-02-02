// pages/Users/Users.js
Page({
  data: {
    userInfo:{},
    "link":"../Images/top_bg.png",
    userListInfo: [{
      icon: '../Images/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      unreadNum: 2,
      link:'../Users/order/order'
    }, {
      icon: '../Images/iconfont-card.png',
      text: '我的优惠券',
      isunread: false,
      unreadNum: 2,
      link:'../Users/coupon/coupon'
    }, {
      icon: '../Images/iconfont-shouhuodizhi.png',
      text: '收货地址管理',
      link:'../Users/address/address'
    }, {
      icon: '../Images/iconfont-kefu.png',
      text: '联系客服',
      link:'../Users/custom/custom'
    }, {
      icon: '../Images/iconfont-help.png',
      text: '常见问题',
      link:'../Users/questions/questions'
    }]
  },
  directto:function(event){
       wx.navigateTo({
         url: event.currentTarget.dataset.links,
       })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    that.setData({
      userInfo:getApp().globalData.userInfo
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