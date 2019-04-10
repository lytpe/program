// pages/Company/Company.js
var app = getApp()
Page({

  data: {
    time: "请选择预约时间",
    dateValue: '请选择预约日期',
    link:"../../utils/Index.jpg",
    text:"这暂时只是一个测试的网站用于页面的测试，并观察是否有问题，如果有问题，就需要修改"
  },
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
  timeBindChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  dateBindChange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  FormSubmit:function(e){
    if(e.detail.value.dates!=null&&e.detail.value.times!=null){
      wx.request({
        url: 'http://47.106.9.133/Appointments/Add',
        data: {
         dates:e.detail.value.dates,
         times:e.detail.value.times,
         message:e.detail.value.message,
         userName: app.globalData.userInfo.nickName
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: 'POST', 
        success: function (res) {
          var access_token=null;
          wx.request({
            url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + app.globalData.accesstoken,
            header: {
              'content-type': 'application/json' // 默认值
            },
            data:{
              "touser": app.globalData.openId,
              "template_id":'a0JPDbqkrWeKMBdSCwjQbwCPEjUu-IUY2kXHub1_4iM',
              "form_id": e.detail.formId,
              "data":{
                "keyword1":{
                  "value":e.detail.value.message,
                  "color":"#173177"
                },
                "keyword2": {
                  "value": e.detail.value.dates+e.detail.value.times,
                  "color": "#173177"
                },
                "keyword3": {
                  "value": app.globalData.userInfo.nickName,
                  "color": "#173177"
                }
              },
            },
            method: 'POST', 
            success:function(res){
              wx.showToast({
                title: '预约成功',
              });
            }
          });
        },
        fail: function(){
          wx.showToast({
            title: '网络延迟，请稍后重试',
          });
        }
      })
    }
  },
  FormReset:function(e){
    wx.showToast({
      title: '表单内容已重置！',
    });
  }
})