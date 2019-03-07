
 $(function(){
  $.ajax({
    type: "POST",
    url: "",	
    data: {
		url: location.href
	},
    success: function(data){
	  //alert(33);
     var result = data;    
     if (result != null) { 
      wx.config({ 	  
       debug: false, 
       //appId: result.config.appId, 
       // timestamp: result.config.timestamp, 
       // nonceStr: result.config.nonceStr, 
       // signature: result.config.signature, 
       // jsApiList: result.config.jsApiList, 
     }); 
     } 
    },
    error: function(){
 
    }
   });
 });
 
 window.sharedata = {
  title: '一带一路展会_发展新机遇',
  desc: '一带一路展会_发展新机遇',
  link: window.location.href,
  imgUrl: 'http://www.showguide.cn/zhuanti/yiluyidai/images/ylyd_modi/222.jpg',
  success: function () {
   alert('success');
  },
  cancel: function () {
   alert('cancel');
  }
 };
 
 
 
 wx.ready(function () {
	
  wx.onMenuShareAppMessage(sharedata);//分享给朋友
  wx.onMenuShareTimeline(sharedata);//分享到朋友圈  
  wx.onMenuShareQQ(sharedata);//分享到QQ
  wx.onMenuShareWeibo(sharedata);//分享到腾讯微博
  wx.onMenuShareQZone(sharedata);//分享到QQ空间
  
 });
 

 
 
 
 
 