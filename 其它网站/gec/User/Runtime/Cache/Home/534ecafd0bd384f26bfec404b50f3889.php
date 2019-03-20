<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
	<meta content="telephone=no" name="format-detection">
	<title>所属公会</title>
	<script src="/Public/web/js/jquery-1.8.3.min.js"></script>
	<link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
	<link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
	<link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
	<link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
	<script src="/Public/web/js/layer.js"></script>
</head>
<style>
.mytuandui li {font-size:13px;}
</style>
<body>
	<!--顶部开始-->
	<header class="header">
		<span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
		<span class="header_c">矿工公会</span>
		<span class="header_r"><a href="/Index.php/Home/Index/index/"><i class="fa fa-user"></i></a></span>
	</header>
	<div>
   <ul class="mytuandui" style="width:90%;padding-top:15%;margin-left:5%">
        <li style="width:25%;float:left;text-align:center;color:#000;background-color:#fe9625;height: 30px;line-height: 30px;border-bottom-left-radius: 5px;border-top-left-radius:5px;"><a style="color:#fff" href="/Index.php/Home/Myuser/index/">我的公会</a></li>
		<li style="width:25%;float:left;text-align:center;color:#000;background-color:#fe9625;height: 30px;line-height: 30px;"><a style="color:#fff" href="/Index.php/Home/Myuser/kjwl/" >矿机网络</a></li>
        
        <li style="width:25%;float:left;text-align:center;color:#000;background-color:#fff;height: 30px;line-height: 30px;"><a style="color:#000" href="/Index.php/Home/Myuser/ssgh/" >所属公会</a></li>
        <li style="width:25%;float:left;text-align:center;color:#000;background-color:#fe9625;height: 30px;line-height: 30px;border-bottom-right-radius: 5px;border-top-right-radius:5px;">
        <a style="color:#fff" href=" <?php if($rshy["ktghgl"] == 2): ?>/Index.php/Home/Myuser/ghgl/ <?php else: ?>   javascript:$.alert('请继续努力，会长以上级别可申请此功能',function(){return false;})<?php endif; ?>" >公会管理</a>
        </li>
    </ul>
    <p style="text-align:center;width:100%;height:40px;line-height:40px;padding-top:36px; font-size:13px; margin:10px 0;">新注册会员请联系公会会长免费领取矿机</p>
</div>
	
	<!--顶部结束-->
	
  <style>
table tr>td:nth-child(2){
	border:2px solid #333;
	border-bottom:none;
}
table tr>td:nth-child(1){
	font-weight:600;
	line-height:30px;
	font-size:14px;
	vertical-align: top;
}
table tr>td input{
	display:block;
	position:relative;
	left:0;
	right:0;
	width:100%;
	height:100%;
	border:none;
	outline:none;
	height:30px;
	line-height:30px;
	background:none;
}
table tr>td textarea{
	display:block;
	position:relative;
	left:0;
	right:0;
	width:100%;
	border:none;
	outline:none;
	height:100px;
	background:none;
}
table tr:last-child td:nth-child(2){
	border-bottom:2px solid #333;
}
#form1 span {
	text-align:center;
	width:25%;
	font-size:14px;
	display:inline-block;
	margin-top:10px;
	vertical-align:top;
}
#form1 input,#form1 textarea {
	width:65%;
	padding:0 10px;
	border:none;
	height:30px;
	line-height:30px;
	border-radius:5px;
	margin-top:10px;
}
</style>

<form id="form1" name="form1" method="post" action="/Index.php/Home/Myuser/ghglto"style="width:90%;margin-left:5%">
         <span>公会名称:</span>       
             <input  type="text" value="<?php echo ($return["ghname"]); ?>" name="ghname" placeholder="请输入公会名称" disabled="disabled" />
         <span>公会宣言:</span>
             <textarea rows="5" cols="8" style="height:70px;" name="ghxy"  placeholder="请输入公会宣言"  disabled="disabled" ><?php echo ($return["ghxy"]); ?></textarea>
         <span >公会QQ群&nbsp;&nbsp;</span>
             <input  type="text" value="<?php echo ($return["ghqq"]); ?>" name="ghqq" placeholder="请输入公会QQ群"  disabled="disabled" />
         <span >会长微信&nbsp;&nbsp;</span>
             <input  type="text" value="<?php echo ($return["hzvx"]); ?>" name="hzvx" placeholder="请输入会长微信" disabled="disabled" />
         <span >会长QQ&nbsp;&nbsp;</span>
             <input type="text" value="<?php echo ($return["hzqq"]); ?>" name="hzqq" placeholder="请输入会长QQ" disabled="disabled" />
         <span >会长手机&nbsp;&nbsp;</span>
             <input  type="text" value="<?php echo ($return["hzphone"]); ?>" name="hzphone" placeholder="请输入会长手机"  disabled="disabled"  />
     
</form>	
	<div class="height55"></div>
	
	
<!--底部开始-->
<style>
	.footer ul li{
		width: 25%;
	}
</style>
<div class="footer">
    <ul>
        <li><a href="/Index.php/Shop/Index/" class="block"><i class="iconfont">&#xe604;</i>矿机商城</a></li>
		<li><a href="/Index.php/Home/Info/mykuangche/" class="block"><i class="iconfont">&#xe601;</i>我的矿机</a></li>
        <li><a href="/Index.php/Home/Info/Index/" class="block"><i class="iconfont">&#xe645;</i>交易中心</a></li>
        <li><a href="/Index.php/Home/Index/Index/" class="block"><i class="iconfont">&#xe684;</i>个人中心</a></li>
    </ul>
</div>
	<!--底部结束-->
	<script src="/Public/web/js/jquery-weui.min.js"></script>
	
</body>
</html>