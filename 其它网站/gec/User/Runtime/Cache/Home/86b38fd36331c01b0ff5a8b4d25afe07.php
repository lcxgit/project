<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
   <meta content="telephone=no" name="format-detection">
    <title>密码管理</title>
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
        <span class="header_c">密码管理</span>
		<span style="position: absolute;right: 40px;top: 0px;text-align:center;width:70px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
        <span class="header_r"><a href="/Index.php/Home/Index/index"><i class="fa fa-user"></i></a></span>
    </header>
    <div class="height40;"></div>
    <!--顶部结束-->
    <!--列表开始-->
	<form action="/Index.php/Home/Info/mmgl/" method="POST" style="font-size:14px">
		<ul style="width: 80%;margin-left: 10%;color: #000;padding-top:100px" >
			<li style="height: 30px;line-height: 30px;margin-top: 5px;width:100%"><span style="display:inline-block;width:33%;">原登录密码：</span><input type="password" name="password"  placeholder="请输入原登录密码"style="height: 30px;line-height: 30px;width: 62%;border-radius: 5px;border: 1px solid #eeeeee;padding-left: 5px"/></li>
			
			<li style="height: 30px;line-height: 30px;margin-top: 5px;width:100%"><span style="display:inline-block;width:33%;">新登录密码：</span><input type="password" placeholder="请输入新登录密码" name="password1" required="required" id="phone" style="height: 30px;line-height: 30px;width: 62%;border-radius: 5px;border: 1px solid #eeeeee;padding-left: 5px">
			</li>
			<li style="height: 30px;line-height: 30px;margin-top: 5px;width:100%"><span style="display:inline-block;width:33%;">确认密码：</span><input type="password" placeholder="请重新输入新登录密码" name="password2" required="required" id="phone" style="height: 30px;line-height: 30px;width: 62%;border-radius: 5px;border: 1px solid #eeeeee;padding-left: 5px">
			</li>
			<li><input type="submit" value="完成" style="width: 100%;height: 30px;line-height: 30px;border-radius: 5px;border: 0px; background-color:#05B6A3;margin-top: 5px;color: #FFFFFF;-webkit-appearance: none;"/></li>
		</ul>
	</form>
	<form action="/Index.php/Home/Info/mmgl1/" method="POST" style="font-size:14px;margin-bottom:70px;">
		<ul style="width: 80%;margin-left: 10%;color: #000;padding-top:20px" >
			<li style="height: 30px;line-height: 30px;margin-top: 5px;width:100%"><span style="display:inline-block;width:33%;">原安全密码：</span><input type="password" name="password" placeholder="请输入原安全密码"style="height: 30px;line-height: 30px;width: 62%;border-radius: 5px;border: 1px solid #eeeeee;padding-left: 5px"/></li>
			
			<li style="height: 30px;line-height: 30px;margin-top: 5px;width:100%"><span style="display:inline-block;width:33%;">新安全密码：</span><input type="password" placeholder="请输入新安全密码" name="password1" required="required" id="phone" style="height: 30px;line-height: 30px;width: 62%;border-radius: 5px;border: 1px solid #eeeeee;padding-left: 5px">
			</li>
			<li style="height: 30px;line-height: 30px;margin-top: 5px;width:100%"><span style="display:inline-block;width:33%;">确定密码：</span><input type="password" placeholder="请重新输入新安全密码" name="password2" required="required" id="phone" style="height: 30px;line-height: 30px;width: 62%;border-radius: 5px;border: 1px solid #eeeeee;padding-left: 5px">
			</li>
			<li><input type="submit" value="完成" style="width: 100%;height: 30px;line-height: 30px;border-radius: 5px;border: 0px; background-color:#05B6A3;margin-top: 5px;color: #FFFFFF;-webkit-appearance: none;"/></li>
		</ul>
	</form>
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
        <li style="width:24%" ><a href="/Index.php/Home/Index/Index/" class="block"><i class="iconfont">&#xe684;</i>个人中心</a></li>
    </ul>
</div>
<!--底部结束-->
<script src="/Public/web/js/jquery-weui.min.js"></script>
<script>
	function code(){
	   	      var pd=/^1[3|4|5|7|8][0-9]{9}$/;
	   	      if(pd.test($("#phone").val())){
	   	    	$.ajax({
					url:"<?php echo U('Index.php/Home/Ajax/getmobilecode');?>",
					type:"POST",
					data:{mobile:$("#phone").val()},
					dataType:"json",
					success:function(data){
							$.alert(data,"提示");
					}
				})
				$(".code span").css({"background":"#ddd","color":"#444"}).html("60秒重新发送").unbind("click");
				var num=59;
				var time=setInterval(function(){
                      $(".code span").html(num-- + "后重新发送");
                      if(num<0){
                      	clearTimeout(time);
                      	$(".code span").css({"background":"#e4393c","color":"#fff"}).html("重新发送");
                      	$(".code span").bind("click",code);
                      }
				},1000);
			}else{
             $.alert("手机号码不正确","提示");
			}
	        }
	$(function(){
		$(".code span").bind("click",code);
		});
</script>
<p style="display:none;">
<script src="http://s95.cnzz.com/z_stat.php?id=1261438452&web_id=1261438452" language="JavaScript"></script>
</p>
</body>
</html>