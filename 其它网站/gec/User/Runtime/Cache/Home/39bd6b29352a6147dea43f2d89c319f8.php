<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
   <meta content="telephone=no" name="format-detection">
    <title>公会招募</title>
    <script src="/Public/web/js/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
    <link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
    <link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
    <script src="/Public/web/js/layer.js"></script>
</head>
<body>
    <!--顶部开始-->
    <header class="header">
        <span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
        <span class="header_c">公会招募</span>
		<span style="position: absolute;right: 40px;top: 0px;text-align:center;width:70px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
        <span class="header_r"><a href="/Index.php/Home/Index/index"><i class="fa fa-user"></i></a></span>
    </header>
   
    <!--顶部结束-->
    <!--列表开始-->
<div style="text-align:center;padding-bottom:80px">	

	<input type="text" readonly="readonly" value="<?php echo ($url); ?>" style="width:95%;line-height:30px;margin-top:50px;padding:0px 5px;"/>
	
	<img src="/images/<?php echo ($_SESSION['uname']); ?>.png" style="width:95%;height:100%;margin-top:3%;">
 
	
<br>
<P></p>
</div>
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
<script>
	
</script>
</body>
</html>