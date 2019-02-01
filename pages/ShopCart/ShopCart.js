//pages/ShopCart/ShopCart.js
var app = getApp()
let arrays=app.globalData.shopsItemArray;
Page({
  data: {
    totalprice:0,
    checkedall:false
  },
  onLoad: function (options) {
    if(app.globalData.shopsItemArray.length!=0){
      this.setData({
        arrays:app.globalData.shopsItemArray
      });
    }else{
      wx.showToast({
        title: '购物车为空',
      });
    }
  },
  onReady: function () {

  },
  onShow: function () {
     arrays = app.globalData.shopsItemArray;
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
  //跳转到付款页面
  toBalance: function () {
    app.globalData.goodsItemArary = arrays;
    wx.navigateTo({
      url: "../Balance/Balance",
    });
  },
  switchSelect: function (e) {
    var temp = 0;
    var n = 0;
    var id = e.currentTarget.dataset.id;
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
     var that=this;
     var temp=0;
     if(arrays[detail.ids].isSelect==true){
       var str="arrays["+detail.ids+"].num";
       that.setData({
          [str]:detail.value
       });
       //arrays[detail.ids].num=detail.value;
       for(var i=0;i<arrays.length;i++){
         if(arrays[i].isSelect==true){
           temp+=arrays[i].price*arrays[i].num;
         }
       }
       that.setData({
           totalprice:temp
       });
       if (detail.value < 1) {
         wx.showModal({
           title: '取消选择',
           content: '确定要取消该产品？',
           showCancel: true,//是否显示取消按钮
           cancelColor: 'skyblue',//取消文字的颜色
           confirmText: "是",//默认是确定
           confirmColor: "red",//确定的颜色
           success: function (res) {
             if (res.cancel) {
               //点击取消，默认隐藏弹框
             } else {
               arrays.pop(arrays[detail.ids]);
               wx.navigateTo({
                 url: '../Order/Order',
               })
             }
           },
           fail: function (res) {
             wx.showToast({
               title: '网络延迟',
             });
           }
         })
       }
     }
     else{
       var str = "arrays[" + detail.ids + "].num";
       that.setData({
         [str]: detail.value
       });
      //arrays[detail.ids].num=detail.value;
     }
   },
  switchCheckAll:function(){
    this.setData({
      checkedall:!this.data.checkedall
    })
    var temp=0;
     if(this.data.checkedall==true){
       for (var i = 0; i < arrays.length; i++) {
         arrays[i].isSelect = true;
         if (arrays[i].isSelect) {
           temp += arrays[i].price * arrays[i].num;
           var str="arrays["+i+"].isSelect";
           this.setData({
             totalprice: temp,
             [str]:true
           });
         }
       }
    }else{
      for (var i = 0; i < arrays.length; i++) {
        var str = "arrays[" + i + "].isSelect";
        this.setData({
          [str]: false
        });
       }
      this.setData({
        totalprice:0
      });
    }
  }
})