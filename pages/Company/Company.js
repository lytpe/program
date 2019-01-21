// pages/Company/Company.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    time: "12:01",
    dates: "2018-09-09",
    link:"../../utils/Index.jpg",
    text:"这暂时只是一个测试的网站用于页面的测试，并观察是否有问题，如果有问题，就需要修改"
  },
  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo
    });
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
  BindDateChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  BindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  FormSubmit:function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if(e.detail.value.dates!=null&&e.detail.value.times!=null){
      wx.request({
        url: 'https://localhost:5001/Appointments/Add',
        data: {
         dates:e.detail.value.dates,
         userName:e.detail.value.userName,
         times:e.detail.value.times,
         message:e.detail.value.message
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: 'POST', 
        success: function (res) {
         wx.showToast({
           title: '预约成功',
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
    console.log('form发生了reset事件')
  }
})