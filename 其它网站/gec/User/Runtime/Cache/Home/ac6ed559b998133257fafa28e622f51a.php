<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>密码找回</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
    <link rel="stylesheet" href="/Public/Home/css/weui.min.css">
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
	<script charset="UTF-8" src="/Public/Home/js/jquery-1.11.3.min.js"></script>
	<script src="/Public/web/js/jquery-weui.min.js"></script>
	   <!--[if lte IE 8]>
    <script src="__JS__/html5shiv.min.js"></script>
    <script src="__JS__/respond.min.js"></script>
    <![endif]-->
</head>
<body style="background-color: #eee">
	<div id="logo"style="margin: 0 auto; width: 90%; height: auto;text-align: center;margin-top: 20px">
		<img src="/Public/web/img/logo.jpg" id="logo" style="width:50%;margin-top:10px;border-radius:10px;margin-bottom:10px" alt=""/>
	</div>
	<form action="<?php echo U('/Index.php/Home/Login/uppwd');?>" id="myform" method="post"style="margin-top:20px">
		<input type="hidden" name="uid" value="<?php echo ($id); ?>">
    	<!--<input type="text" placeholder="用户名,只能使用数字,字母,汉字且长度为1-6" name="username" required="required" id="name" pattern="[A-Za-z0-9\u4e00-\u9fa5]{1,6}" title="只能使用数字,字母,汉字且长度为1-6">-->
		<div style=" margin: 0 auto;width: 94%;background: #fff;border: 1px solid #e3e3e3;border-radius: 5px;">
			<div style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
				手机号：<input id="phone" type="text" placeholder="请输入手机号" name="phone" required="required" style="width: 70%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;" >
			</div>
			<div class="code" style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
				验证码：<input type="text" placeholder="短信验证码" name="code" required="required" id="code" class="fl"style="width:40%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;">
				<span class="fr" style="background-color: #fe9625;display: inline-block;width: 35%;text-align: center;font-size: 1em;padding: 2px 0px;border-radius: 5px; color:#fff; font-size:13px;">发送验证码</span>
			</div>
			<!-- <div  style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
				&nbsp;&nbsp;&nbsp;&nbsp;验证码：<input type="text" placeholder="请输入邮箱收到的验证码
				" name="code" required="required" style="width: 70%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;" >
			</div> -->
			<div style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
				新登陆密码：<input type="password" placeholder="请输入新新登录密码" required="required" name="pwd"  id="paw"style="width: 70%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;">
			</div>
			<div style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
			  	新确定密码：<input type="password" placeholder="确定新登录密码" required="required" name="pwd2" id="paw2" style="width: 70%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;">
			</div>
			
			<div style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
				新安全密码：<input type="password" placeholder="请输入新安全密码" required="required" name="aqpwd"  id="aqpaw"style="width: 70%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;">
			</div>
			<div style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
			  	新确定密码：<input type="password" placeholder="确定新安全密码" required="required" name="aqpwd2"  id="aqpaw2"style="width: 70%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;">
			</div>
			<div class="code" style="margin-left: 5%;width: 95%; height: auto;border-bottom: 1px solid #e3e3e3;padding: 10px 0 10px;">
				验证码：
				<input type="text" placeholder="请输入验证码" required="required" name="vercode"  id="paw"style="width: 70%;color: #999999;font-size: 1em;-webkit-appearance: none;border: none;outline: medium;width: calc(100% - 209px);">
				<img style="height: 25px;vertical-align: bottom;" src="/admin.php/Home/login/verify" name="myHeader" height="35" id="myHeader" onClick="this.src='/admin.php/Home/login/verify?'+Math.random();" />
			 </div>
		</div>
		  <div id="yinsi" style="padding: 10px 0 10px;margin-left: 5%"><input name="agree" type="checkbox" value="1" class="text"  id="check" checked/>&nbsp;<span>我已阅读和同意<span id='btnBook'>《服务协议及隐私条款》</span></span></div>
		<button type="submit" id="submit"style="margin-left: 5%;width: 90%;height: 2.5em;line-height: 2.5em;font-size: 1em;letter-spacing: 1px;text-align: center;color: #fff;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;background-color: #fe9625;border: 0; margin-bottom:20px;">密码找回</button>
	</form>
</body>
<script>
     function code(){
	   	      var pd=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
	   	      if(pd.test($("#phone").val())){
	   	    	$.ajax({
					url:"<?php echo U('Index.php/Home/Ajax/getmobilecode3');?>",
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
                      	$(".code span").css({"background":"#fe9625","color":"#fff"}).html("发送成功");
						$(".code span").bind("click",mycode);
                      }
                      
				},1000);
			}else{
             $.alert("手机不正确","提示");
			}
	        }
			  function mycode(){
		        $.confirm('<input type="text" id="phcode" style="display: inline-block;width: 35%;outline:none;height: 24px;border:1px solid #ddd;"><img src="/admin.php/Home/login/verify" onClick="this.src='+"'/admin.php/Home/login/verify?'"+'+Math.random();"  style="display: inline-block;width: 40%;height: 24px;border:1px solid #ddd;margin-left:10px;vertical-align:bottom;">',"请输入验证码",function(){
				  $.showLoading("正在验证");
				  $.ajax({
				      url:"<?php echo U('Index.php/Home/Login/phcode');?>",
					  type:"post",
					  data:{vercode:$("#phcode").val()},
					  dataType:"json",
					  success:function(data){
						  if(data.status==1){
						    code();
						  }else{
						    $.alert("验证码错误");
						  }
					  },error:function(){
					    $.alert("网络错误");
					  },complete:function(){
					  $.hideLoading();
					  }
				  })
				})
		   }
	$(function(){
		$(".code span").bind("click",mycode);
		if($(window).width()>768){
		$("#logo").css({"width":"240px","height":"240px"});
		}
		
	      $("#submit").bind("click",function(){
		      var reg=/[0-9A-z]{6,}/;
		     if(reg.test($("#paw").val())){
			   if(reg.test($("#paw2").val())){
				   if(reg.test($("#aqpaw").val())){
						  if(reg.test($("#aqpaw2").val())){
				   return true;
				 }else{
				  $.alert("密码必须为数字或字母，长度大于6位");
				   return false;
			 };
				 }else{
				  $.alert("密码必须为数字或字母，长度大于6位");
				   return false;
				 };
			 }else{
			  $.alert("密码必须为数字或字母，长度大于6位");
			   return false;
			 };
			 }else{
			  $.alert("密码必须为数字或字母，长度大于6位");
			   return false;
			 };
			 
			 
			
			 
		  })
		});

</script>
</html>