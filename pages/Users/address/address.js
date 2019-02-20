// pages/Users/address/address.js
Page({
  data: {
    visible:false,
    name:"",
    phone:""
  },
  handleOpen1:function(event) {
    console.log(event);
    var that=this;
    that.setData({
      visible: true,
      name:event.currentTarget.dataset.name,
      phone:event.currentTarget.dataset.phone
    });
  },
  deleteAddress:function(){
   wx.request({
     url: 'https://localhost:5001/AddressManager/DeleteAddress',
     data: {
       userName:this.data.name,
       addressPhone:this.data.phone
     },
     header: {
       'content-type': 'application/x-www-form-urlencoded' // 默认值
     },
     method: 'POST',
     success: function (res) {
       wx.showToast({
         title: '删除成功',
       })
     },
     fail: function () {
       wx.showToast({
         title: '网络延迟，请稍后重试',
       })
     }
   })
  },
  handleClose1() {
    this.setData({
      visible: false
    });
  },
  toggle:function(event){
     wx.navigateTo({
       url: 'addaddress/addaddress?name='+event.currentTarget.dataset.name+'&phone='+event.currentTarget.dataset.phone+'&type=update',
     })
  },
  setdefault:function(event){
    var that=this;
     wx.request({
       url: 'https://localhost:5001/AddressManager/SetDefault',
       data: {
         userName: getApp().globalData.userInfo.nickName,
         addressPhone: event.currentTarget.dataset.phone,
       },
       header: {
         'content-type': 'application/x-www-form-urlencoded' // 默认值
       },
       method: 'POST',
       success: function (res) {
         wx.showToast({
           title: '设置成功',
         });
         that.getList();
       },
       fail: function () {
         wx.showToast({
           title: '网络延迟，请稍后重试',
         })
       }

     })
  },
  getList:function(){
    var that = this;
    wx.request({
      url: 'https://localhost:5001/AddressManager/GetAddress?userName=' + getApp().globalData.userInfo.nickName,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          dataList:res.data
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '网络延迟，请稍后重试',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.getList();
        if(options.name!=null &&options.phone!=null){
        this.setData({
          name:options.name,
          phone:options.phone
        });
        }
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
    this.getList();
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