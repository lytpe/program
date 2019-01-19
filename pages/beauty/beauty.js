// pages/beauty/beauty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hairs: [
      {
        name: "产品",
        price: "￥12",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      },
      {
        name: "产品",
        price: "￥13",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      },
      {
        name: "产品",
        price: "￥14",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      }, {
        name: "产品",
        price: "￥15",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      }
    ]
  },
  directto: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.links + "?name=" + event.currentTarget.dataset.name + "&pic=" + event.currentTarget.dataset.pic + "&price=" + event.currentTarget.dataset.price,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
       wx.startPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading(), 2000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})