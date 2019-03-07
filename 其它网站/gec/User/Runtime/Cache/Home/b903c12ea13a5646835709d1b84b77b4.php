<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
   <meta content="telephone=no" name="format-detection">
    <title>公会收益</title>
    <script src="/Public/web/js/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
    <link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
    <link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
    <script src="/Public/web/js/layer.js"></script>
</head>
<body>
<!--顶部开始-->
<div class="header">
    <span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
    <span class="header_c">公会收益</span>
	<span style="position: absolute;right: 10%;top: 0px;text-align:center;width:20%;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
    <span class="header_r"><a href="/Index.php/Home/Index/Index/"><i class="fa fa-user"></i></a></span>
</div>
<div class="height40"></div>
<!--顶部结束-->
<!--列表开始-->
<div class="zhul" style="padding-bottom:5px;margin-bottom:80px;">
    <table style="width: 90%;margin-left: 5%;color: #333333;margin-top: 20px;border-collapse:collapse;">
        <thead style="font-size: 12px; ">
            <tr style="height: 35px;line-height: 35px;">
                <th style="border-bottom:2px solid #ddd ">昵称</th>
                <th style="border-bottom:2px solid #ddd ">日期</th>
                <th style="border-bottom:2px solid #ddd ">说明</th>
                <th style="border-bottom:2px solid #ddd ">收入($)</th>
               <!--  <th style="border-bottom:2px solid #ddd ">余额($)</th> -->
            </tr>

        </thead>
        <tbody style="font-size: 10px;text-align:center">
		<?php if(is_array($list)): foreach($list as $key=>$v): ?><tr style="line-height: 30px; height: 30px;">
                <td style="min-width: 9%;border-bottom:1px solid #ddd "><?php echo ($v["nickname"]); ?></td>
                <td style="border-bottom:1px solid #ddd "><?php echo ($v["ug_gettime"]); ?></td>
                <td style="border-bottom:1px solid #ddd "><?php echo ($v["ug_note"]); ?></td>
                <td style="min-width: 20%;border-bottom:1px solid #ddd "><?php echo ($v["ug_money"]); ?></td>
                <!-- <td style="min-width: 20%;border-bottom:1px solid #ddd "><?php echo ($v["ug_balance"]); ?></td> -->
            </tr><?php endforeach; endif; ?>	
        </tbody>
    </table>
</div>
<style>.weui_media_box:before {left:0}</style>
<!--列表结束-->

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
        <li style="width:24%" ><a href="/Index.php/Home/Index/Index/" class="block"><i class="iconfont">&#xe684;</i>个人中心</a></li>
    </ul>
</div>
<!--底部结束-->
<script src="/Public/web/js/jquery-weui.min.js"></script>
</body>
</html>