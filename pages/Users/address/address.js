// pages/Users/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible:false,
     adds:[
       {
         name:"小明",
         phone:"15198273849",
         address:"北京-北京市-东城区",
         details:"古语巷",
         status:"0"
       },
       {
         name: "小芳",
         phone: "15198273849",
         address: "北京-北京市-东城区",
         details: "东港巷",
         status:"0"
       }
       ,
       {
         name: "小网",
         phone: "15198273849",
         address: "北京-北京市-东城区",
         details: "东巷",
         status:"1"
       }

     ]
  },
  handleOpen1:function() {
    this.setData({
      visible: true
    });
  },

  handleClose1() {
    this.setData({
      visible: false
    });
  },
  toggle:function(event){
     wx.navigateTo({
       url: 'addaddress/addaddress?name='+event.currentTarget.dataset.name+'&phone='+event.currentTarget.dataset.phone,
     })
  },
  setdefault:function(event){
    for(var item in this.data.adds){
      if(this.data.adds[item].status==1){
        console.log("origianl is :")
        console.log(this.data.adds[item].name)
        var update='adds['+item+'].status'
        this.setData({
          [update]:0
        })
      }
      if (this.data.adds[item].name == event.currentTarget.dataset.currentname){
        console.log("now is :")
        console.log(this.data.adds[item].name)
        var updatetwo='adds['+item+'].status'
        this.setData({
          [updatetwo]:1
        })
      }
    }
    
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