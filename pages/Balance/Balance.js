// pages/Balance/Balance.js
var utilMd5 = require('../../utils/md5.js');
var app=getApp();
Page({
  data: {
     current:"微信支付",
     saletype:[
       {
         id:1,
         name:"微信支付",
       }
      //  ,
      //  {
      //    id:2,
      //    name:"支付宝支付",
      //  }
     ],
     totalPrice:0,
     goods:[],
     deadOrders:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this;
     var tempprice=0;
     if (app.globalData.goodsItemArary.length!=0){
       for(var i=0;i<app.globalData.goodsItemArary.length;i++){
         if(app.globalData.goodsItemArary[i].isSelect==false){
           app.globalData.goodsItemArary.pop(app.globalData.goodsItemArary[i]);
         }else{
           tempprice+= app.globalData.goodsItemArary[i].price*app.globalData.goodsItemArary[i].num;
         }
       }
       that.setData({
         goods: app.globalData.goodsItemArary,
         totalPrice:tempprice
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
  onShow: function(){
    this.setData({
      goods: app.globalData.goodsItemArary
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

  changeNum:function ({ detail }) {
    var that=this;
    var tempprice=0;
    if (this.data.goods[detail.ids].isSelect == true) {
      var str="goods["+detail.ids+"].num";
      that.setData({
        [str]: detail.value
      })
      for(var i=0;i<this.data.goods.length;i++){
        if(this.data.goods[i].isSelect==true){
          tempprice+=this.data.goods[i].num*this.data.goods[i].price;
        }
        that.setData({
          totalPrice:tempprice
        })
      }
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
              app.globalData.goodsItemArary.pop(app.globalData.goodsItemArary[detail.ids]);
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
      var str = "goods["+detail.ids+"].num";
      that.setData({
        [str]: detail.value
      });
    }
  },
  handlechange: function ({ detail }) {
    this.setData({
      current: detail.value
    })
  },
  //是否选中该商品
  switchSelect: function (e) {
    var tempprice=0;
    var str="goods["+e.currentTarget.dataset.index+"].isSelect";
    this.setData({
      [str]:!this.data.goods[e.currentTarget.dataset.index].isSelect
    })
    for(var i=0;i<this.data.goods.length;i++){
      if (this.data.goods[i].isSelect == true) {
        tempprice += this.data.goods[i].num * this.data.goods[i].price;
      }
    }
    this.setData({
      totalPrice: tempprice
     })
  },
  //到地址一栏
  toggletoaddress: function () {
    wx.navigateTo({
      url: '../Users/address/address',
    });
  },
  //回到前一页
  backtogoods: function () {
    wx.navigateTo({
      url: '../Order/Order',
    });
  },
  payForGoods: function () {
    app.globalData.ordersItemArray=this.data.goods;
    for(var i=0;i<this.data.goods.length;i++){
      var temp={};
      temp["name"]=this.data.goods[i].name;
      temp["num"]=this.data.goods[i].num;
      temp["price"]=this.data.goods[i].price;
      temp["username"] = app.globalData.userInfo.nickName;
      this.data.deadOrders.push(temp);
    }
    var time=Date.now();
    wx.request({
      url: 'https://localhost:5001/WeChatPay/GetPrePay',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        console.log(res);
        var links="appId="+res.data.result.appId+"&nonceStr="+res.data.result.nonceStr+"& package=prepay_id="+res.data.result.prepay_id+"&signType=MD5&timeStamp="+time+"& key=qazwsxedcrfvtgbyhnujmikolp111111";
        var stemp=utilMd5.hexMD5(links);
        wx.requestPayment({
          timeStamp:time,
          nonceStr:res.data.result.nonceStr,
          package: 'prepay_id='+res.data.result.prepay_id,
          signType: 'MD5',
          paySign:stemp,
          success(res) {
            wx.showToast({
              title: '支付成功',
            });
            wx.request({
              url: 'https://localhost:5001/Orders/weChatOrder',
              data: {
                arrays: JSON.stringify(this.data.deadOrders)
              },
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              method: 'POST',
              success: function (res) {
                console.log(res);
              },
              fail: function () {
                console.log("失败!");
              }
            })
          },
          fail(res) {
            console.log("网络延迟！");
          }
        });
      },
      fail: function () {
        console.log("失败!");
      }
    })
    
    
  },
})