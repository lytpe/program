// pages/Users/Users.js
var app=getApp();
Page({
  data: {
    userInfo:{},
    piclist: ["../Images/20190517092752.png"],
    // piclist: ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJcPfvl3FMjVY23op42K8BhR5oSx4q1kfuRoe1ULo1X366iazZg6R94nXXUibaGNutLTb75Qds5LiaGA/132"],
    isEmployee:"1",
    cid:0,
    hasQR:false,
    blanace:"",
    referee:"无",
    
    "link":"../Images/top_bg.png",
    userListInfo: [{
      icon: '../Images/iconfont-dingdan.png',
      text: '我的订单',
      link:'../Users/order/order'
    }, 
     {
      icon: '../Images/iconfont-shouhuodizhi.png',
      text: '收货地址管理',
      link:'../Users/address/address'
    }, {
      icon: '../Images/iconfont-kefu.png',
      text: '联系客服',
      link:'../Users/custom/custom'
    },
    {
      icon:'../Images/iconfont-help.png',
      text:'公司成员',
      link:'../Users/staff/staff'
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
    var that = this;
    if(app.globalData.pid!=null){
      that.setData({
        userInfo: app.globalData.userInfo,
        referee:app.globalData.pid
      })
    }
    else{
      that.setData({
        userInfo: app.globalData.userInfo,
        referee: "无"
      })
    }
    wx.request({
      url: 'https://localhost:5001/CustomerManage/AddStaff',
      data:{
       name:that.data.userInfo.nickName,
        gender: that.data.userInfo.gender,
        city: that.data.userInfo.city,
        province: that.data.userInfo.province,
        country: that.data.userInfo.country,
        referee: that.data.referee,
        picurl:that.data.userInfo.avatarUrl
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          isEmployee:res.data.ctype,
          cid:res.data.cid,
          hasQR:res.data.hasQR,
          balance:res.data.balance
        });
        if (that.data.hasQR == false) {
          wx.request({
            url: 'https://localhost:5001/CustomerManage/GetCode',
            data: {
              s: that.data.cid,
              page: 'pages/Main/Main',
              access_token: app.globalData.accesstoken
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
              that.setData({
                piclist: res.data.imgurl
              });
            },
            fail: function () {
              wx.showToast({
                title: '网络延迟！',
              });
            }
          });
        }
        else{
        }

      },
      fail: function () {
        wx.showToast({
          title: '网络延迟！',
        });
      }
    });
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  previewImage:function(e){
    var pic=e.currentTarget.dataset.list;
     wx.previewImage({
       current:pic,
       urls:[pic],
     })
  },
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