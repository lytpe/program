// pages/ShopCart/ShopCart.js
Page({
  data: {
    checkall:false,
    totalprice:0,
    hairs: [
      {
        id: 1,
        name: "产品",
        price: 12,
        num: 12,
        pic: "../Images/meirong.png",
        isSelect:false,
        url: "../Order/Order"
      },
      {
        id: 2,
        name: "产品",
        price: 13,
        num: 12,
        pic: "../Images/meirong.png",
        isSelect: false,
        url: "../Order/Order"
      },
      {
        id: 3,
        name: "产品",
        price: 14,
        num: 15,
        pic: "../Images/meirong.png",
        isSelect: false,
        url: "../Order/Order"
      }, {
        id: 4,
        name: "产品",
        price: 15,
        num: 18,
        pic: "../Images/meirong.png",
        isSelect: false,
        url: "../Order/Order"
      }
    ]
  },
  //跳转到付款页面
  toggletobuy:function(){
    wx.navigateTo({
      url: "../Balance/Balance?Name="+"按摩"+"&num="+1,
    });
  },
  onLoad: function (options) {
    console.log("显示购物车：");
    console.log(options)
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

  },
  switchSelect: function (e) {
    var temp=0;
    var n=0;
    var id = e.currentTarget.dataset.id;
    this.data.hairs[id].isSelect=!this.data.hairs[id].isSelect;
      for(var i=0;i<this.data.hairs.length;i++){
        if (this.data.hairs[i].isSelect){ 
          n++;
          temp += this.data.hairs[i].price * this.data.hairs[i].num;
          this.setData({
            totalprice: temp
          });
        }
      }
      if(n==0){
        this.setData({
          totalprice:0
        });
      }
  },

  //处理数量变化
  handlechanges: function ({ detail }) {
    console.log(detail);
    var str = "hairs[" + (parseInt(detail.ids) - 1) + "].num"
    this.setData({
      [str]: detail.value,
    });
  },
})