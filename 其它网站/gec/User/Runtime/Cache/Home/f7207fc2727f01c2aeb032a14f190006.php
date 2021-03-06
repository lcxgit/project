<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta content="telephone=no" name="format-detection">
    <title>联系我们</title>
    <meta name="Keywords" content="PAAM" />
    <meta name="Description" content="PAAM" />
    <script src="/Public/web/js/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
    <script src="/Public/web/js/layer.js"></script>
    <link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
    <link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
    <link rel="stylesheet" href="/Public/web/css/style.css"/>
	
	<script src="/Public/web/js/ajaxUplod.js"></script>
</head>
<style>
.liveing-sec {
	width:100%;
	height:auto;
}
#slides {
	position:relative;
}
.liveing-speech-left {
	width:100%;
	padding:12px 0;
}
.liveing-speech-left-a {
	width:50px;
	float:left;
	display:inline-block;
	text-align:center;
}
.liveing-speech-img {
	width:35px;
	height:35px;
	border-radius:50%;
	margin-bottom:3px;
}
.liveing-speech-b {
	width:79%;
	padding-left:21%;
}
.liveing-speech-right-c {
	margin-bottom:5px;
	vertical-align:middle;
	font-size:14px;
	color:#161616;
}
.liveing-speech-span {
	font-size:12px;
	color:#999;
	margin-left:7px;
}
.liveing-speech-text {	
	background-color: rgba(254,150,37,0.2);
	padding:8px;
    margin: 0 20px 0 0;
    display: inline-block;
	position: relative;
	text-align:left;
	font-size:12px;
	color:#5a3104;
}
.liveing-speech-text-b {
	right:0;
	left:100%;
	border-right:0;
	border-left:6px solid  rgba(254,150,37,0.2);	
	content:"";
	position: absolute;
	top: 0px;
	width: 0;
	height: 0;
	border-top: 0px solid transparent;
	border-bottom: 6px solid transparent;
	
}
.liveing-speech-text-a {
	content:"";
	position: absolute;
	right: 100%;
	top: 0px;
	width: 0;
	height: 0;
	border-top: 0px solid transparent;
	border-right: 6px solid rgba(254,150,37,0.2);
	border-bottom: 6px solid transparent;
}
.liveing-speech-text-s {
	content:"";
	position: absolute;
	left: 100%;
	top: 0px;
	width: 0;
	height: 0;
	border-top: 0px solid transparent;
	border-left: 6px solid #b0e75a;
	border-bottom: 6px solid transparent;
	
}
.liveing-speech-left-b {
	float:right;
}
.liveing-speech-r {
	padding-right:21%;
	padding-left:0;
	text-align:right;
}
.liveing-speech-right {
	overflow:hidden;
}
.liveing-difs {
	
}
.liveing-speech-right-text {
	background:#909090;
	padding:8px;
	border-radius:5px;
	text-align:right;
	margin-bottom:8px;
	
}
.liveing-speech-right-span {
	color:#fff;
	font-size:10px;
}
.liveing-speech-right-img {
	width:15px;
	height:15x;
	border-radius:50px;
	margin-left:5px;
}
.liveing-yu {
	width:20px;
	height:20px;
	float:left;
}
.processcontainer {
	width:60%;
	border:1px solid #99cd48;
	height:6px;
	float:left;
	margin:7px;
	border-radius:20px;
}
#processbar{  
   background:#fff;  
   float:left; 
   height:100%;  
   text-align:center;  
   line-height:150%; 
   border-radius:20px;
}
.liveing-yu-time {
	color:#fff;
	margin:0 3px;
	float:right;
}  
.liveing-yu-hz {
	position:absolute;
	top:-3px;
	right:-2px;
	background:red;
	border-radius:50%;
	line-height:1;
	padding:4px 4px;
}




.liveing-foot {
	position:fixed;
	bottom:0;
	left:0;
	width:100%;
	border-top:1px solid #eee;
	height:40px;
	padding:5px 0;
	background:#fff;
}
.liveing-foots {
	padding:0 15px;
}
.liveing-foot-left  {
	width:75%;
	background:#e0e0e0;
	color:#161616;
	border-radius:35px;
	height:35px;
	line-height:35px;
	float:left;
}
.liveing-foot-left-text {
	border:none;
	background:none;
	width:90%;
	margin-left:5%;
	line-height:35px;
	height:35px;
}
.liveing-foot-right {
	width:20%;
	float:right;
	height:40px;
	line-height:40px;
}
.liveing-foot-right-span {
	padding:6px 15px; 
	border:2px solid #38b736;
	color:#fff;
	font-size:12px;
	float:left;
	border-radius:5px;
	background:#38b736;
	line-height:1;
	margin:3px;
}
.liveing-foot-right-img {
	width:24px;
	height:24px;
	float:left;
	margin-left:10px;
	margin-top:7px;
}

</style>
<body>
<!--顶部开始-->
<header class="header">
    <span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
    <span class="header_c">联系我们</span>
	<span style="position: absolute;right: 40px;top: 0px;text-align:center;width:70px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
    <span class="header_r"><a href="/index.php/Home/Index/index"><i class="fa fa-user"></i></a></span>
</header>
<div class="height40"></div>
<!--顶部结束-->
<div style='width:96%;margin-left:2%;'>
	<div class="liveing-sec">
		<div class="liveing-speech">
			<!-- 左边 -->
			<div class="liveing-speech-left">
				<div class="liveing-speech-left-a">
					<img class="liveing-speech-img" src="/Public/Home/img/contact-profile.png"/>
				</div>
				<div class="liveing-speech-b">
					<div class="liveing-speech-right-c">客户美眉<span class="liveing-speech-span">小美</span></div>
					<div class="liveing-speech-text">
						欢迎光临，您好，请问您需要什么帮助呢？
						<span class="liveing-speech-text-a"></span></div>
				</div>
			</div>
			<!-- 右边 -->
			
			<div class="liveing-speech-left">
				<div class="liveing-speech-left-a" style="float:right;">
					<img class="liveing-speech-img" src="/Public/Images/style2.jpg"/>
				</div>
				<div class="liveing-speech-b" style="padding-right:21%; padding-left:0; text-align:right;">
					<div class="liveing-speech-right-c">您<span class="liveing-speech-span">昵称</span></div>
					<div class="liveing-speech-text" style="margin:0 0 0 20px">
						支持英文版的吗？
						<span class="liveing-speech-text-b" style=""></span></div>
				</div>
			</div>
			<!-- 左边 -->
			<div class="liveing-speech-left">
				<div class="liveing-speech-left-a">
					<img class="liveing-speech-img" src="/Public/Home/img/contact-profile.png"/>
				</div>
				<div class="liveing-speech-b">
					<div class="liveing-speech-right-c">客户美眉<span class="liveing-speech-span">小美</span></div>
					<div class="liveing-speech-text">
						您好，支持的
						<span class="liveing-speech-text-a"></span></div>
				</div>
			</div>
			
		</div>
		<div class="liveing-foot">
			<div class="liveing-foots">
				<div class="liveing-foot-left">
					<textarea class="liveing-foot-left-text" type="text" placeholder="说点什么吧..."></textarea>
				</div>
				<div class="liveing-foot-right">
					<span class="liveing-foot-right-span">发送</span>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="/Public/web/js/jquery-weui.min.js"></script>
</body>
</html>