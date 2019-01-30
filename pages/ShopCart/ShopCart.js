//pages/ShopCart/ShopCart.js
var app = getApp()
Page({
  data: {
    checkedall:false,
    totalprice:0
  },
  //跳转到付款页面
  toggletobuy:function(){
    app.globalData.goodsItemArary=app.globalData.shopsItemArray;
    wx.navigateTo({
      url: "../Balance/Balance",
    });
  },
  onLoad: function (options) {
    if(app.globalData.shopsItemArray.length!=0){
      this.setData({
        hairs:app.globalData.shopsItemArray,
        checkedall:false
      });
    }
  },
  onReady: function () {

  },
  onShow: function () {
    app.globalData.goodsItemArary = app.globalData.shopsItemArray;
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
    var temp = 0;
    var n = 0;
    var id = e.currentTarget.dataset.id;
    var arrays = app.globalData.shopsItemArray;
    arrays[id].isSelect =!arrays[id].isSelect;
    for (var i = 0; i < arrays.length; i++) {
      if (arrays[i].isSelect) {
        n++;
        temp += arrays[i].price * arrays[i].num;
        this.setData({
          totalprice: temp
        });
      }
    }
    if (n == 0) {
      this.setData({
        totalprice: 0
      });
    }
  },
  
   handlechanges:function({detail}){
     console.log("show detail:");
     app.globalData.shopsItemArray[detail.ids].num=detail.value;
     console.log(app.globalData.shopsItemArray[detail.ids].num);
     var str="app.globalData.shopsItemArray["+detail.ids+"].num";
     this.setData({
      [str]:detail.value
     });
   },
  switchCheckAll:function(){
    var a=this;
    a.setData({
      checkedall:!a.data.checkedall
    })
    var temp=0;
    var arrays = app.globalData.shopsItemArray;
     if(checkedall==true){
       for (var i = 0; i < arrays.length; i++) {
         arrays[id].isSelect = true;
         if (arrays[i].isSelect) {
           temp += arrays[i].price * arrays[i].num;
           a.setData({
             totalprice: temp
           });
         }
       }
    }
  }
})