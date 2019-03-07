<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="zh">
<head>
   <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <title>Sign In</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <meta name="wap-font-scale" content="no">
	<link rel="stylesheet" href="/gec/Public/Home/css/weui.min.css">
    <link rel="stylesheet" href="/gec/Public/web/css/jquery-weui.min.css">
	
	<link rel="stylesheet" href="/gec/Public/reg/css/style.css">
	<link rel="stylesheet" href="/gec/Public/reg/css/common.css">
	<style>
	.wrapper{
	min-height:auto;
	}
	</style>
</head>
<body class="page-mobile ">
    <div class="wrapper login-wrapper">
    <!-- logo S -->
    <div >
	<img src="/Public/web/img/logo.jpg" style="width:36%;margin-left:32%;margin-top:10px;border-radius:10px;margin-bottom:10px"/>
    </div>
    <!-- logo E -->
    <!-- 登录输入表单 S -->
	<form name="logFrm" id="logFrm" method="post" onsubmit="return false;" >
    <div class="login-form def-m mb10">
	 <li class="comc-item">
                <div class="com-formbox" style="overflow:hidden;display:block;">
							<a href="/Index.php/Home/Login/login/" style="float:left;width:50%;text-align:center;line-height:30px;color:#333;">中文</a>
							<a href="/Index.php/Home/Login/enlogin/" style="float:right;width:50%;text-align:center;line-height:30px;color:#fe9625;">English</a>
                </div>
            </li>
        <ul class="com-columns span2">
            <li class="comc-item">
                <div class="com-formbox">
                    <label class="formbox-hd" for="username"><i class="iconfont icon-user"></i>&nbsp;</label>
                    <span class="formbox-bd"><input  type="text" id="username" name="account"  onkeyup="this.value=this.value.replace(/ /g,'')" maxlength="60" class="input-txt" placeholder="Should be your email " /></span>
                </div>
            </li>
            <li class="comc-item">
                <div class="com-formbox">
                    <label class="formbox-hd" for="password"><i class="iconfont icon-lock"></i>&nbsp;</label>
                    <span class="formbox-bd"><input  type="password" id="password" name="password" onkeyup="this.value=this.value.replace(/ /g,'')" maxlength="16" class="input-txt" placeholder="Login password" /></span>
                </div>
            </li>
        </ul>

    </div>
    <!-- 登录输入表单 E -->
    <!-- 通用按钮 S -->
    <div class="def-p com-btnbox mb10">
	<button id="mysubmit" style="background-color:#fe9625;width:100%;height:47px;line-height:47px;color:#fff;border:0px;border-radius:5px;font-size:16px;">Sign in</button>
       <!--  <a href="#" class="btn btn-1 btn-dis" id="login_btn">登录</a> -->
    </div>
</form>	
    <!-- 通用按钮 E -->
	 <ul>
		<li style="float:left">
			<div class="def-p txtr">
				<a href="/Index.php/Home/User/enreg/" class="fz13 link" id="findPwd_btn">registered</a>
			</div>
		</li>
		<!-- 忘记密码 S -->
		<li>
			 <div class="def-p txtr">
				<a href="/Index.php/Home/Login/enretrieve_password/" class="fz13 link" id="findPwd_btn">Forget password</a>
			</div>
		</li>
	</ul>
	
    <!-- 忘记密码 S -->
   
    <!-- 忘记密码 E -->

   
</div>
<!-- 登录主要内容 E -->
</div>
<script type='text/javascript'>var ROOT = "";</script>
<script src="/gec/Public/reg/js/jquery-1.11.3.min.js"></script>
<script src="/gec/Public/web/js/jquery-weui.min.en.js"></script>
<script type="text/javascript" src="/gec/Public/reg/js/common.js"></script>
<script type="text/javascript" src="j/gec/Public/reg/s/login.js"></script>
<div class="loading-wrapper" style="display: none;">
<div class="loading-area">
<div id="floatingBarsG1" class="floatingBarsG"></div>

</div>
<div class="mask" style="opacity: 0.3;"></div>
</div>
<script>
    $(function(){
      $("#mysubmit").bind("click",function(){
        $.ajax({
            url:"<?php echo U('/Index.php/Home/Login/enlogincl');?>",
            type:"post",
            data:$("form").serialize(),
            dataType:"json",
            success:function(data){
			console.log(data);
                if(data.status==1){
	
                    location.href="/index.php/Home/Info/enmykuangche/";
                }else{
					$.alert(data.msg);
                }
            },error:function(){

            },comptele:function(){

            }
        })
     })
    })
</script>
	</body>
</html>