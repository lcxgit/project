<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html>

<html>

<head>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">


    <!-- Page title -->

    <title>&nbsp;</title>


    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <!--<link rel="shortcut icon" type="image/ico" href="favicon.ico" />-->


    <!-- Vendor styles -->

    <link rel="stylesheet" href="/assets/vendor/fontawesome/css/font-awesome.css"/>

    <link rel="stylesheet" href="/assets/vendor/metisMenu/dist/metisMenu.css"/>

    <link rel="stylesheet" href="/assets/vendor/animate.css/animate.css"/>

    <link rel="stylesheet" href="/assets/vendor/bootstrap/dist/css/bootstrap.css"/>


    <!-- App styles -->

    <link rel="stylesheet" href="/assets/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css"/>

    <link rel="stylesheet" href="/assets/fonts/pe-icon-7-stroke/css/helper.css"/>

    <link rel="stylesheet" href="/assets/styles/style.css">

    <link rel="stylesheet" href="/assets/vendor/toastr/build/toastr.min.css"/>


</head>

<body class="blank"
      style=" background-image:url(/assets/img/bgbgg.jpg);background-origin:content;background-position:50% 50%; background-size:cover;background-repeat:no-repeat;">
<!--<body style="background:#f5eee3">-->


<!-- Simple splash screen-->

<!--[if lt IE 7]>

<p class="alert alert-danger">You are using an <strong>outdated</strong> browser. Please <a
        href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>

<![endif]-->


<!--<div class="color-line"></div>-->


<div class="pull-left m">

    <!--

    <a href="" class="btn btn-primary">规则</a>

    -->

</div>


<div class="login-container" style="">

    <div class="row">

        <div class="col-md-12">

            <div class="text-center m-b-md">
				
                <!-- <img src="/img/logo.png" style="width:30%; max-width:30%"></img> -->
                <!--
                    <font color="#CCCCCC">
                    <h3>登录会员社区</h3>

                    <small>我们需要你给予这个世界更多的爱心</small>
                    </font>-->

            </div>

            <div class="hpanel"
                 style="opacity: 0.8; border-radius:16px;">

                <div class="panel-body">

                    <form name="logFrm" id="logFrm" action="<?php echo U('/Index.php/Home/Login/logincl');?>" method="post">

                        <!--<strong style="color:red">抱歉，现在系统暂停维护中，稍后开放，谢谢您的等待</strong>-->

                        <!--<div class="form-group">
                            <label id="langLbl" class="control-label" for="username">Multi language selection</label>
                            <select class="form-control" id="lang" name="lang">
								<option value="en-US">English</option>
                                <option value="zh-CN">简体中文</option>
                                <option value="zh-TW">繁体中文</option>
                            </select>
                        </div>-->
                        <div class="form-group">

                            <label class="usrname control-label" for="username">用户名</label>

                            <input type="text" placeholder="" title="请输入你的手机或者邮箱" required name="account" id="account"
                                   class="form-control"  value="">

                            <span class="usr_warn help-block small">输入你的会员编号</span>

                        </div>

                        <div class="form-group">

                            <label class="pwd control-label" for="password">密码</label>

                            <input type="password" title="请输入您的密码" placeholder="" required name="password" id="password"
                                   class="form-control" value="">

                            <!--<span class="pwd_warn help-block small" style='display:inline;'>Login password</span>-->
                        </div>
						<div class="form-group">

                            <label class="verify control-label" for="verify">验证码</label>
                                
                            <img src="/Index.php/Home/Login/verify" onClick="this.src=this.src+'?'+Math.random()"/>    
                            <input type="text" title="请输入验证码" placeholder="" required name="verify" id="verify" class="form-control">

                            <span class="verify_warn help-block small" style='display:inline;'>验证码</span>
                        </div>
                        <div class="checkbox">

                            <p class="anns help-block small">(请勿在公共场合登录)</p>

                        </div>

                        <button type="submit" class="btn btn-success btn-block">登录</button>

                       <!-- <a class="btn btn-default btn-block" href="/home/Login/retrieve_password.html">忘记密码？</a>-->

                    </form>

                </div>

            </div>

        </div>

    </div>


</div>
		<!--<div style="text-align:center;">
		<span style="color:#FFF;">中文名：贝尔斯登公司</br>
		英文名：Bear Stearns Cos.</br>全球领先的金融服务公司，原美国华尔街第五大投资银行。成立于1923年，总部位于纽约市，主营金融服务、投资银行、投资管理。</span>
		</div>-->


<!-- Vendor scripts -->

<!--script src="/assets/vendor/jquery/dist/jquery.min.js"></script-->
<script type="text/javascript" src="/js/jquery.min.js"></script>

<script src="/assets/vendor/jquery-ui/jquery-ui.min.js"></script>

<script src="/assets/vendor/slimScroll/jquery.slimscroll.min.js"></script>

<script src="/assets/vendor/bootstrap/dist/js/bootstrap.min.js"></script>

<script src="/assets/vendor/metisMenu/dist/metisMenu.min.js"></script>

<script src="/assets/vendor/iCheck/icheck.min.js"></script>

<script src="/assets/vendor/sparkline/index.js"></script>

<script src="/assets/vendor/toastr/build/toastr.min.js"></script>

<script src="/lanchange.js"></script>

<script src="/assets/scripts/alert.js?v=1439998281"></script>
<!-- App scripts -->

<script src="/assets/scripts/homer.js"></script>
<script>

    //多语言支持
    (function () {
        var langPak = {
			"en-US": {
                langLbl: "Multi language selection",
                usrname: "Member number",
                pwd: "Password",
                usrWarn: "Should be your cellphone or email",
                pwdWarn: "Login password",
                anns: "(Please avoid using the computer for public use.)",
                btn: "Sign in",
            },
            "zh-CN": {
                langLbl : "多语言选择",
                usrname: "用户名",
                pwd: "密码",
                usrWarn: "手机或邮箱为您的用户名",
                pwdWarn: "登录密码",
                anns: "（请避免在公共电脑上操作）",
                btn: "登录",
            },
            "zh-TW": {
                langLbl : "多語言選擇",
                usrname: "用戶名",
                pwd: "密碼",
                usrWarn: "手機或郵箱為您的用戶名",
                pwdWarn: "登錄密碼",
                anns: "（請避免在公共電腦上操作）",
                btn: "登錄",
            }
        };
        var $slt = $("#lang");
        var $fom = $("#logFrm");
        var $langLbl = $("#langLbl");
        $slt.change(function () {
            var lang = langPak[$slt.val()];
            $langLbl.text(lang.langLbl);
            $fom.find(".usrname").text(lang.usrname);
            $fom.find(".pwd").text(lang.pwd);
            $fom.find(".usr_warn").text(lang.usrWarn);
            $fom.find(".pwd_warn").text(lang.pwdWarn);
            $fom.find(".anns").text(lang.anns);
            $fom.find(".btn-success").text(lang.btn);
            $fom.find(".forg a").text(lang.forg);
        });
    })(jQuery);

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "5000",
        "hideDuration": "5000",
        "timeOut": "5000",
        "extendedTimeOut": "5000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    $(document).ready(function () {
        //toastr.warning('注意， 系统在北京时间下午5:30进行系统维护，维护期间无法登录，6:30系统恢复正常，谢谢');
    });
</script>


</body>

</html>