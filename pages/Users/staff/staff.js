// pages/Users/staff/staff.js
let page = 1;
let reachBottom = false;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staffs: []
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
    page = 1;
    reachBottom = false;
    this.getProductList(page);
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
    wx.showLoading({
      title: '加载中',
    });
    this.getProductList(page);
    setTimeout(function () {
      wx.hideLoading(), 2000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getProductList: function (temppage) {
    if (reachBottom != false) {
      wx.showToast({
        title: '到达底部',
      });
      return;
    }
    var that = this;
    wx.request({
      url: "https://www.ruilanya.top/CustomerManage/GetAllInfos",
      data: {
        page: temppage
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var listdata = that.data.staffs;
        for (var i = 0; i < res.data.allstaff.length; i++) {
          listdata.push(res.data.allstaff[i]);
        }
        if (res.data.allstaff < 5) {
          reachBottom = true;
        } else {
          page++;
        }
        that.setData({
          staffs: listdata
        })
      },
      fail: function () {
        wx.showToast({
          title: '网络延迟！',
        });
      }
    });
  }
})