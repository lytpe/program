//app.js
App({
  onLaunch: function () {
   // 展示本地存储能力
   var logs = wx.getStorageSync('logs') || []
   logs.unshift(Date.now())
   wx.setStorageSync('logs', logs);
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          wx.reLaunch({
            url: '/pages/Index/Index',
          })
        }
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } 
    else {
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onShow:function(){

  },
  onHide:function(){

  },
  globalData: {
    userInfo: null,
    goodsItemArary:[],
    shopsItemArray:[],
    ordersItemArray:[],
    singleItem:{}
  }
})