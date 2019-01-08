// pages/ShopCart/ShopCart.js
Page({
  data: {
    checkall:false,
    hairs: [
      {
        id: 1,
        name: "产品",
        price: "￥12",
        num: "12",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      },
      {
        id: 2,
        name: "产品",
        price: "￥13",
        num: "15",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      },
      {
        id: 3,
        name: "产品",
        price: "￥14",
        num: "16",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      }, {
        id: 4,
        name: "产品",
        price: "￥15",
        num: "18",
        pic: "../Images/meirong.png",
        url: "../Order/Order"
      }
    ]
  },
  SwitchCheck:function(){
    this.setData({
      checkall:!this.data.checkall
    })
  },
  handlechanges: function({ detail }) {
    console.log(detail);
      var str = "hairs[" + (parseInt(detail.ids)-1)+ "].num"
      this.setData({
        [str]: detail.value
      })
  },
  onLoad: function (options) {
       this.setData({
         totalprice:10
       })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }

})