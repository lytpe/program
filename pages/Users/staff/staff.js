// pages/Users/staff/staff.js
let page = 1;
let reachBottom = false;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staffs: [{
      userName:"史蒂夫·乔布斯",
      userPic:"werewr",
      address:"SuZhou-Jiangsu-China",
      userMessage:"史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福",
      balance:"123",
    },{
        userName: "斯蒂夫·盖瑞·沃兹尼亚克",
        userPic: "asdf",
        address: "SuZhou-Jiangsu-China",
        userMessage: " 斯蒂夫·盖瑞·沃兹尼亚克，美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校",
        balance: "123",
    },{
        userName: "乔纳森·伊夫",
        userPic: "werer",
        address: "SuZhou-Jiangsu-China",
        userMessage: "  乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。",
        balance: "189",
    }]
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
      url: "https://localhost:5001/Customer/GetAllInfos",
      data: {
        page: temppage
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log("the res is :");
        console.log(res);
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
        console.log("网络延迟！");
      }
    });
  }
})