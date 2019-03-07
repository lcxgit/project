<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
    <title>立即购买</title>
    <script src="/Public/web/js/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
    <script src="/Public/web/js/layer.js"></script>
    <link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>
<!--顶部开始-->
<header class="header">
    <span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
    <span class="header_c">购买</span>
	<span style="position: absolute;right: 40px;top: 0px;text-align:center;width:70px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
    <span class="header_r"><a href="/Index.php/Home/Index/index"><i class="fa fa-user"></i></a></span>
</header>
<div class="height40"></div>
<!--顶部结束-->
<div style="width:100%;">
	<h1 class="goods_title" style="text-align:center;font-size:1.2em;font-weight: bold;width:100%;padding:10px 0px"><?php echo ($name); ?></h1>
	<div class="tao hu_title"style="min-height:250px;width:100%;margin-top:10px;overflow:hidden">
	<span>商品详情：</span>
	<p style="width:90%;margin-left:5%">&nbsp;&nbsp;&nbsp;&nbsp;<?php echo ($content); ?></p>

	</div>

	<div style="padding:10px 0;margin:20px 0;background:#fff;text-align: center；width:100%">
		<input id="money" class="weui_input" type="text" disabled="true" value=<?php echo ($price); ?> style="width:95%;padding-left:5%;color: #000"/>
	</div>
	<div class="goods_gm"style="width: 90%;margin-left: 5%;border-radius: 5px">
		<a id="buy" href="/Index.php//Shop/index/confirmproject?id=<?php echo ($id); ?>" class="weui_btn weui_btn_warn weui_btn_disabled"style="background-color:#fe9625">立即购买</a>
	</div>
</div>
<script src="/Public/web/js/jquery-weui.min.js"></script>
<script>
    function pay(){
        $.ajax({
        type:'post',
        url:'/tixian.html',
        data:"money="+$("#buy").val(),
        dataType:'json',
        success:function(msg){
        alert(msg.msg);
            console.log('money');
        location.reload();
        }
     });
    }
</script>
</body>
</html>