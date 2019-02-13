// pages/Admin/Admin.js
Page({
  data: {
    //判断小程序的API,回调，参数，组件等是否在当前版本可用。
    canIUse:wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function (options) {
  },
  bindGetUserInfo:function(e){
    wx.getSetting({
      success(res){
        if(res.authSetting['scope.userInfo']){
          wx.reLaunch({
            url: '../Main/Main',
          })
        }
        else {
          //用户拒绝按钮
          wx.navigateTo({
            url: '../Error/Error',
          })
        }
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
})