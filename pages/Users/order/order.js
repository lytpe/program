var app=getApp();
Page({

  data: {
    current: 'tab1',
    temp:'',
    visible1:false,
    hairs: [
      {
        id: 1,
        name: "产品",
        price: "￥12",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      },
      {
        id: 2,
        name: "产品",
        price: "￥13",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      },
      {
        id: 3,
        name: "产品",
        price: "￥14",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      }, {
        id: 4,
        name: "产品",
        price: "￥15",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      }
    ],
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
    var that=this;
    wx.request({
      url: 'https://localhost:5001/Orders/GetOrders',
      data:{
        username: app.globalData.userInfo.nickName
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function(res) {
        console.log(res.data);
        that.setData({
          allinfos:res.data.orders
        })
      },
      fail: function(res) {
        console.log("fail")
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