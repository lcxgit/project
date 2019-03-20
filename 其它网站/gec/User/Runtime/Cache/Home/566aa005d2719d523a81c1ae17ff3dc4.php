<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
	<meta content="telephone=no" name="format-detection">
	<title>矿机网络</title>
	<script src="/Public/web/js/jquery-1.8.3.min.js"></script>
	<link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
	<link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
	<link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
	<link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
	<script src="/Public/web/js/layer.js"></script>
</head>
<body style="background:#fff">
	<!--顶部开始-->
	<header class="header">
		<span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
		<span class="header_c">矿工公会</span>
		<span class="header_r"><a href="/Index.php/Home/Index/index/"><i class="fa fa-user"></i></a></span>
	
	</header>
		
		<div>
  <ul style="width:90%;padding-top:15%;margin-left:5%">
        <li style="width:25%;float:left;text-align:center;color:#000;background-color:#05B6A3;height: 30px;line-height: 30px;border-bottom-left-radius: 5px;border-top-left-radius:5px;"><a style="color:#fff" href="/Index.php/Home/Myuser/index/">我的公会</a></li>
		<li style="width:25%;float:left;text-align:center;color:#000;background-color:#fff;height: 30px;line-height: 30px;"><a style="color:#000" href="/Index.php/Home/Myuser/kjwl/" >矿机网络</a></li>
        
        <li style="width:25%;float:left;text-align:center;color:#000;background-color:#05B6A3;height: 30px;line-height: 30px;"><a style="color:#fff" href="/Index.php/Home/Myuser/ssgh/" >所属公会</a></li>
    <li style="width:25%;float:left;text-align:center;color:#000;background-color:#05B6A3;height: 30px;line-height: 30px;border-bottom-right-radius: 5px;border-top-right-radius:5px;">
        <a style="color:#fff" href=" <?php if($rshy["ktghgl"] == 2): ?>/Index.php/Home/Myuser/ghgl/ <?php else: ?>   javascript:$.alert('请继续努力，会长以上级别可申请此功能',function(){return false;})<?php endif; ?>" >公会管理</a>
        </li>    </ul>
</div>
	<div class="height40"></div>
	
	<!--顶部结束-->
	
	
	<table style="width:90%;margin-left:5%;border-collapse:collapse;table-layout: fixed;">
  <tr style="width:100%;border-bottom:2px solid #ccc">
    <th>昵称</th>
    <th>微信</th>
    <th>手机</th>
    
  </tr>
  <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr style="width:100%;border-bottom:1px solid #ccc">
     <td  style="padding:5px 0;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;"><?php echo ($vo["ue_truename"]); ?></td>
     <td  style="padding:5px 0;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;"><?php echo ($vo["weixin"]); ?></td>
     <td  style="padding:5px 0;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;"><?php echo ($vo["phone"]); ?></td>
     
  </tr><?php endforeach; endif; else: echo "" ;endif; ?>
  <!-- <tr>
     <td  colspan=7 align=center><?php echo ($page); ?></td>
  </tr> -->
</table>
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