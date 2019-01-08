// pages/Main/Main.js
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    lists:[
      {
        url:"../hairdressing/hairdressing",
        name:"美容",
        show:"../Images/meirong.png"
      },
      {
        url: "../hairdressing/hairdressing",
        name: "美甲",
        show: "../Images/meijia.png"
      }
      ,
      {
        url: "../hairdressing/hairdressing",
        name: "美睫",
        show: "../Images/meijie.png"
      }
      ,
      {
        url: "../hairdressing/hairdressing",
        name: "美妆",
        show: "../Images/meizhuang.png"
      }
    ],
    details:[
        {
        pic: "../Images/file_demo1.png",
         name:"头部/颈肩",
         price:"￥130",
         url: "../hairdressing/hairdressing"
        },
        {
        pic: "../Images/file_demo2.png",
        name: "高端私人红妆",
        price: "￥120",
        url: "../hairdressing/hairdressing"
        },
        {
        pic: "../Images/file_demo3.png",
        name: "特价自然",
        price: "￥166",
        url: "../hairdressing/hairdressing"
        },
    ]
  },
  directto:function(event){
     wx.navigateTo({
       url: event.currentTarget.dataset.links,
     })
  },
  showhotproject:function(event){
    wx.navigateTo({
      url: event.currentTarget.dataset.links,
    })
  }
})