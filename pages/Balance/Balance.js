// pages/Balance/Balance.js
Page({
  data: {
     current:"微信支付",
     saletype:[
       {
         id:1,
         name:"微信支付",
       },{
         id:2,
         name:"支付宝支付",
       }
     ],
     num:1,
     totalPrice:0,
    hairs: [
      {
        id:1,
        name: "产品",
        price: "￥12",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      },
      {
        id:2,
        name: "产品",
        price: "￥13",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      },
      {
        id:3,
        name: "产品",
        price: "￥14",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      }, {
        id:4,
        name: "产品",
        price: "￥15",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      }
    ]
  },
  handlechanges: function ({ detail }) {
    this.setData({
      num: detail.value,
      totalPrice:detail.value*10
    })
  },
  handlechange:function({detail}){
    this.setData({
      current:detail.value
    })
  },
  switchSelect:function(event){
   console.log(event);
  },
  toggletoaddress:function(){
      wx.navigateTo({
        url: '../Users/address/address',
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
      wx.request({
        url: 'https://localhost:5001/Products/GetItemDetail',
        data:{
          name:options.Name,
          num:options.num
        },
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success:function(res){
          console.log(res.data);
          that.setData({
           goods:res.data
          });
        },
        fail:function(){
          wx.showToast({
            title: '网络延迟，请稍后重试',
          });
        }
      });
      wx.request({
        url: 'https://localhost:5001/AddressManager/GetDefaultAddress',
        data: {
          userName: getApp().globalData.userInfo.nickName,
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function (res) {
          that.setData({
            address:res.data.address
          });
        },
        fail: function () {
          wx.showToast({
            title: '网络延迟，请稍后重试',
          });
        }
      })
  },
  payForGoods:function(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { 
        wx.showToast({
          title: '支付成功',
        })
      },
      fail(res) {
        console.log("网络延迟！");
       }
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