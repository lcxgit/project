<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
	<meta content="telephone=no" name="format-detection">
	<title>我的矿机</title>
	<script src="/Public/web/js/jquery-1.8.3.min.js"></script>
	<link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
	<link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
	<link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
	<link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
	<script src="/Public/web/js/layer.js"></script>
</head>
</head>
<body>
<!--顶部开始-->
<header class="header">
	<span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
	<span class="header_c">我的矿机</span>
	<span style="position: absolute;right: 40px;top: 0px;text-align:center;width:70px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
	<span class="header_r"><a href="/Index.php/Home/Index/index/"><i class="fa fa-user"></i></a></span>
</header>
<div class="height40"></div>
<!--顶部结束-->
<style>
	.hh_btn{
		float: right !important;
		padding: 0 !important;
		display: block;
		height: 20px;
		margin: 5px;
		width: 60px;
		background-color: #FF6B00;
		border: 0;
		border-radius: 5px;
		color: #FFF;
	}
	.zz_btn{
		height: 20px;
		width: 150px;
		margin:5px;
		background-color: #FF6B00;
		border: 0;
		border-radius: 5px;
		color: #fff;
	}
	.level_btn{
		height: 20px;
		width: 40px;
		margin-left:5px;
		background-color: #23D66B;
		border: 0;
		border-radius: 5px;
		color: #fff;
	}
	#content{
		height: 100px;
		width: 200px;
		border:2px solid #FF6B4B;
	}
</style>
<!--会员中心开始-->
<ul class="dd_list"style="margin-bottom:80px;">
	<?php if(is_array($list)): foreach($list as $key=>$v): ?><li style="position:relative;">
		
			<img src="<?php echo ($v["imagepath"]); ?>" alt="tx"style="width:20%" />
			<div style="width:62%;display:inline-block;">
				<p style="font-weight: 700;font-size:14px;"><?php echo ($v["project"]); ?></p>
				<P style="font-size:12px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width:100%;height:20px;line-height:26px; color:#777;">运行周期：<?php echo ($v["yxzq"]); ?>小时&nbsp;&nbsp;&nbsp;&nbsp;<span>产量/小时：<?php echo ($v["lixi"]); ?></span></P>	
				<p style="font-size:12px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width:100%;height:20px;line-height:26px;color:#868686;">矿机编号：<?php echo ($v["kjbh"]); ?></p>
				<p style="font-size:12px;height:20px;line-height:26px;color:#999;">矿机状态：<?php if($v["zt"] == 0): ?>未使用<?php endif; ?>
							<?php if($v["zt"] == 1): ?>正在运行<?php endif; ?>
								<?php if($v["zt"] == 2): ?>已经结束<?php endif; ?>
								
				</p>		
			</div>
	<?php if($v["zt"] == 0): ?><p style="height:70px;line-height:70px;text-align:right;display:inline-block;"><a href="/Index.php/Home/Info/wakuang/?id=<?php echo ($v["id"]); ?>"style=" height:30px;line-height:30px;color: #fff;margin-top: 0px;display:block;position:absolute;right:10px;top:50%;margin-top: -15px;font-size: 16px;padding: 3px 5px;background-color: #fe9625;border: 0px solid #fff;border-radius: 4px;">运行</a></p><?php endif; ?>
	<?php if($v["zt"] == 1): ?><p style="height:70px;line-height:70px;text-align:right; display:inline-block;"><a href="/Index.php/Home/Info/wakuang/?id=<?php echo ($v["id"]); ?>"style=" height:30px;line-height:30px;color: #fff;margin-top: -30px;display:block;position:absolute;right:10px;top:30%;margin-top: 0px;font-size:16px;padding: 5px;background-color: #fe9625;border: 0px solid #fff;border-radius: 4px;">查看</a></p><?php endif; ?>			
			<div style="width:60%;display:inline-block;">
					
				</div> 
	</li><?php endforeach; endif; ?>
	
</ul>
<!--会员中心结束-->

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
		<li><a href="/Index.php/Home/Info/mykuangche/" class="block" style="color:#fe9625"><i class="iconfont">&#xe601;</i>我的矿机</a></li>
		<li><a href="/Index.php/Home/Info/Index/" class="block"><i class="iconfont">&#xe645;</i>交易中心</a></li>
        <li><a href="/Index.php/Home/Index/Index/" class="block"><i class="iconfont">&#xe684;</i>个人中心</a></li>
    </ul>
</div>
</div>
<!--底部结束-->
<script src="/Public/web/js/jquery-weui.min.js"></script>
<p style="display:none;">
<script src="http://s95.cnzz.com/z_stat.php?id=1261438452&web_id=1261438452" language="JavaScript"></script>
</p>
</body>
</html>