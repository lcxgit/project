<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>APP下载</title>
	<link rel="stylesheet" href="/Public/Home/css/xiazai/iconfont.css">
	<script src="/Public/Home/js/jquery-1.11.3.min.js"></script>
	<style>
		body{
			background: #22273D;
			color: #fff;
			text-align: center;
		}
		.logo{
			width: 80px;
			height: 80px;
			border-radius: 40px;
			overflow: hidden;
			margin: 0 auto;
			margin-top: 20px;
		}
		.title1{
			width: 100px;
			margin: 0 auto;
			position: relative;
			top: 20px;
		}
		.title2{
			margin-top: 30px;
		}
		.content{
		width:100%;}
		.button{
		width:50%;
		float:right;
		}
		.adn{
		display:block;
	margin-top:10px;
			width: 76%;
			margin-left:12%;
			height: 30px;
			background: #fff;
			color: #333;
			border-radius: 10px;
			text-align: center;
			line-height: 30px;
			text-decoration: none;
			font-size: 12px;
		}
		.ios{
		display:block;
	margin-top:10px;
			width: 76%;
			margin-left:12%;
			height: 30px;
			background: #fff;
			color: #333;
			border-radius: 10px;
			text-align: center;
			line-height: 30px;
			text-decoration: none;
			font-size: 12px;
		}
		.left{
		width:50%;
		float:left;
		}
	</style>
</head>
<body>
	<div class="logo">
		<img src="/Public/web/img/logo.jpg" alt="" width="100%">
	</div>
	<div class="title1">
		
	</div>
	<p class="title2">莱肯社区APP马上入手</p>
	<div class="content">
	<div class="left">
	<img src="/Public/Home/images/top3.png" alt="" width="150px;" style="text-align: center;">
	</div>
	<div class="button">
	    <p style="padding:0 5px;text-align:left;font-size:14px;text-indent:2em;">Android版本强势来袭，点击下APP，加入我们，大家都说玩了莱肯社区，一天就可以炒老板鱿鱼了！！</p>
		<a href="javascript:void(0);" class="adn"><i class="iconfont icon-android" style="color:#333;"></i>&nbsp;&nbsp;安卓用户下载</a>
		<a href="javascript:void(0);" class="ios"><i class="iconfont icon-ios"></i>&nbsp;&nbsp;苹果用户访问</a>
		<p style="text-align:center;margin:0 auto;padding:10px 0;">联系我们</p>
		<div style="width:44%;margin-left:27%">
		<img src="/Public/Home/images/wxcode.jpg" width="100%"/>
		</div>
	</div>
	</div>
	<div style="position:fixed;top:0;left:0;display:none;background:rgba(0,0,0,.5);" id="fenxiang">
	<img src="/Public/Home/images/fx.png" style="width:100%;">
	</div>
</body>
<script>
$(function(){
var pd="<?php echo ($link); ?>";
if(pd==1){
  $(".adn").bind("click",function(){
//安桌下载连接
   location.href="http://www.xyldj.com/apk/laiken-001.apk";
  })
  $(".ios").bind("click",function(){
//ios下载连接
   location.href="http://www.xyldj.com/";   
  })
}else{
  $(".adn").bind("click",function(){
$("#fenxiang").fadeIn();
  })
  $(".ios").bind("click",function(){
$("#fenxiang").fadeIn();
  })
}
$("#fenxiang").bind("click",function(){
	$(this).fadeOut();
})
})
</script>
</html>