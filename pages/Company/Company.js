// pages/Company/Company.js
var app = getApp()
Page({

  data: {
    time: "请选择预约时间",
    dateValue: '请选择预约日期',
    link:"../../utils/logo.jpg",
    text:"苏州瑞兰雅化妆品有限公司是一家与上海研发机构、三盾制药厂强强联合的新型公司。公司将实体店与网络销售综合为一体，形成多元化美容产品科研创新公司。以独特的经营模式，成为潜力非凡，风采独具的新锐力量。公司秉承品质第一，服务第一，团队第一的企业宗旨，坚持天然，奢华，纯甄的品牌理念。凭借勇于探索，敢于拼搏的企业精神，以市场为导向，以消费者为核心，在行业中拥有极好的声誉。旗下玥诗兰有美白祛斑，祛痘祛印类系列产品，功效突出，深受很多消费者的信赖和喜爱。"
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
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
    }
    return {
      title: '冰尘',
      path: '/pages/Company'
    }
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
      console.log("show nickName");
      console.log(app.globalData.userInfo.nickName);
      wx.request({
        url: 'https://www.ruilanya.top/AppointmentManage/Add',
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