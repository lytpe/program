
Page({

  data: {
    current: 'tab1',
    temp:'',
    visible1:false,
    hairs: [
      {
        id: 1,
        name: "产品",
        price: "￥12",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      },
      {
        id: 2,
        name: "产品",
        price: "￥13",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      },
      {
        id: 3,
        name: "产品",
        price: "￥14",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      }, {
        id: 4,
        name: "产品",
        price: "￥15",
        num: "12",
        pic: "../../Images/meirong.png",
        url: "../../Order/Order"
      }
    ]
  },
  handleOpen1() {
    this.setData({
      visible1: true
    });
  },
  handleClose1() {
    this.setData({
      visible1: false
    });
  },
  handleChange:function({detail}){
    console.log(detail)
    this.setData({
      current: detail.key,
      //temp:hairs
    });
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