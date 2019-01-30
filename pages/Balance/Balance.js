// pages/Balance/Balance.js
var app=getApp();
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this;
     if (app.globalData.goodsItemArary.length!=0){
       for(var i=0;i<app.globalData.goodsItemArary.length;i++){
         if(app.globalData.goodsItemArary[i].isSelect==false){
           app.globalData.goodsItemArary.pop(app.globalData.goodsItemArary[i]);
         }
       }
       that.setData({
         goods: app.globalData.goodsItemArary
       });
     }
     else{
       that.setData({
         goods: { options }
       });
     }

      // wx.request({
      //   url: 'https://localhost:5001/Products/GetItemDetail',
      //   data:{
      //     name:options.Name,
      //     num:options.num
      //   },
      //   method:'POST',
      //   header: {
      //     'content-type': 'application/x-www-form-urlencoded' // 默认值
      //   },
      //   success:function(res){
      //     that.setData({
      //     goods:res.data
      //     });
      //   },
      //   fail:function(){
      //     wx.showToast({
      //       title: '网络延迟，请稍后重试',
      //     });
      //   }
      // });
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
  handlechanges: function ({ detail }) {
    if (app.globalData.goodsItemArary[detail.ids].isSelect == true) {
      this.setData({
        num: detail.value,
        totalPrice: detail.value * 10
      });
      if (detail.value < 1) {
        wx.showModal({
          title: '取消选择',
          content: '确定要取消该产品？',
          showCancel: true,//是否显示取消按钮
          cancelColor: 'skyblue',//取消文字的颜色
          confirmText: "是",//默认是确定
          confirmColor: "red",//确定的颜色
          success: function (res) {
            if (res.cancel) {
              //点击取消，默认隐藏弹框
            } else {
              wx.navigateTo({
                url: '../Order/Order',
              })
            }
          },
          fail: function (res) {
            wx.showToast({
              title: '网络延迟',
            });
          }

        })
      }
    } else {
      this.setData({
        num: detail.value
      });
    }
  },
  handlechange: function ({ detail }) {
    this.setData({
      current: detail.value
    })
  },
  switchSelect: function (event) {
    if (isCheck == true) {
      this.setData({
        totalPrice: num * 10
      });
    }
  },
  toggletoaddress: function () {
    wx.navigateTo({
      url: '../Users/address/address',
    });
  },
  backtogoods: function () {
    wx.navigateTo({
      url: '../Order/Order',
    });
  },
  payForGoods: function () {
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
})