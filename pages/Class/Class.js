// pages/Class/Class.js
let page = 1;
let reachBottom = false;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
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
    this.setData({
      detail: []
    })
    this.getClassList(page);
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
    this.getClassList(page);
    setTimeout(function () {
      wx.hideLoading(), 2000
    })
  },
  directToCompany:function(e) {
    wx.switchTab({
      url: '../Company/Company',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
    }
    return {
      title: '冰尘',
      path: '/pages/Class'
    }
  },
  getClassList: function (temppage) {
    if (reachBottom != false) {
      wx.showToast({
        title: '到达底部',
      });
      return;
    }
    var that = this;
    wx.request({
      url: 'https://localhost:5001/CoursesManage/GetCourses',
      data: {
        page: temppage
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var listdata = that.data.detail;
        for (var i = 0; i < res.data.courses.length; i++) {
          listdata.push(res.data.courses[i]);
        }
        if (res.data.pros < 4) {
          reachBottom = true;
        } else {
          page++;
        }
        that.setData({
          detail: listdata
        })
      },
      fail: function () {
        wx.showToast({
          title: '网络延迟！',
        });
      }
    });
  },
})