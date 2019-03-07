<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta content="telephone=no" name="format-detection">
    <title>运行</title>
    <script src="/Public/web/js/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
    <link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
    <link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
    <script src="/Public/web/js/layer.js"></script>
    <style>
        @-webkit-keyframes gogogo {
            0% {
                -webkit-transform: rotate(0deg);
            }
            50% {
                -webkit-transform: rotate(180deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
            }
        }
        .loading{
            -webkit-animation:gogogo 2s infinite linear ;
        }
    </style>
</head>
</head>
<body>
<!--顶部开始-->
<div class="header">
    <span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
    <span class="header_c">运行</span>
	<span style="position: absolute;right: 10%;top: 0px;text-align:center;width:20%;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
    <span class="header_r"><a href="index.php/Home/Index/index"><i class="fa fa-user"></i></a></span>
</div>
<div style="position:absolute;z-index:-1;width: 100%;height: 100%">
	<canvas id="matrix"></canvas>
</div>


<!--顶部结束-->
<div style="width: 90%;margin-left: 5%;float: left;margin-top: 50px">
    <p style="height: 20px;line-height: 20px;font-size: 1em;color:#fff;">我的：<?php echo ($kcmc); ?></p>
    <div style="text-align: center;position: relative;width: 100%;height: 100%;height: 100%;">
        <!--<img src="/Public/web/img/bg2.png" alt=""style="width: 100%"/>-->
        <img class="quan loading" src="/Public/web/img/1.png" alt=""style="margin-top:200px "/>
        <!--<img class="wquan" src="/Public/web/img/2.png" alt=""style="width:56%;position: absolute;top: 22%;left: 22%;z-index: 50;"/>-->
        <!--<img class="quanb" src="/Public/web/img/2b.png" alt=""style="display:none;width:29%;position: absolute;top: 21%;left: 22%;z-index: 500;"/>-->
        <p class="wakuang" data-id="1" style="z-index:1000;width:100px;height:100px;line-height:100px;position: absolute;top:313px;left:50%;margin-left:-50px;margin-top:-60px;color: #FFFFFF;background-color: green;border-radius: 50%;background-color: rgba(0,128,0,0.5)">运行中</p>
    </div>
	<div style=" position:fixed; bottom:60px;">
		<p  style="margin-top:-20px;height: 30px;line-height: 30px;font-size:12px;"><span id="drGEC" style="font-size:3em;color:#fff"><?php echo ($jrsy); ?></span>&nbsp;&nbsp;&nbsp;GEC</p>
		<p  style="height: 30px;line-height: 30px;color:#fff;margin-top:10px;">我的算力：<span><?php echo ($kjsl); ?></span>&nbsp;GH/s</p>
		<p style="height: 30px;line-height: 30px;font-size:12px;color:#aaa;">累计获得：<span id="ljGEC"><?php echo ($yjzsy); ?></span>&nbsp;GEC</p>
		<p  style="height: 30px;line-height: 30px;font-size:10px;color:#aaa;">全网算力：<span><?php echo ($qwsl); ?></span>&nbsp;GH/s</p>
	</div>
</div>

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
<script>
    $.ajax({
        url:"",
        type:"get",
        data:"",
        dataType:"json",
        success:function(data){
            if(data.static==1){
                $(".quanb").show();
                $('.wquan').hide();
                $('.quan').addClass('loading').show();
                $(".wakuang").text("挖矿中");
                $(".wakuang").attr("data-id","1");
                var time=setTimeout(function(){
                    $(".quanb").hide();
                },1000);
            }else{
                $(".quanb").show();
                $('.quan').removeClass('loading').hide();
                $('.wquan').show();
                $(".wakuang").text("挖矿");
                $(".wakuang").attr("data-id","0");
            }
        }
    })
//    $('.wakuang').bind('click', function(){
//        if($(".wakuang").attr("data-id")==0){
//            $(".quanb").show();
//            $('.wquan').hide();
//            $('.quan').addClass('loading').show();
//            $(".wakuang").text("挖矿中");
//            $(".wakuang").attr("data-id","1");
//            var time=setTimeout(function(){
//                $(".quanb").hide();
//            },1000);
//        }else{
//            $(".quanb").show();
//            $('.quan').removeClass('loading').hide();
//            $('.wquan').show();
//            $(".wakuang").text("挖矿");
//            $(".wakuang").attr("data-id","0");
//        }
//    });
</script>
    <script type="text/javascript">
    var matrix=document.getElementById("matrix");
    var context=matrix.getContext("2d");
    matrix.height=window.innerHeight;
    matrix.width=window.innerWidth;
    var drop=[];
    var font_size=16;
    var columns=matrix.width/font_size;
    for(var i=0;i<columns;i++)
        drop[i]=1;

    function drawMatrix(){

        context.fillStyle="rgba(0, 0, 0, 0.1)";
        context.fillRect(0,0,matrix.width,matrix.height);

        context.fillStyle="green";
        context.font=font_size+"px";
        for(var i=0;i<columns;i++){
            context.fillText(Math.floor(Math.random()*2),i*font_size,drop[i]*font_size);/*get 0 and 1*/

            if(drop[i]*font_size>(matrix.height*2/3)&&Math.random()>0.85)/*reset*/
                drop[i]=0;
            drop[i]++;
        }
    }
    setInterval(drawMatrix,40);

</script>
<script type="text/javascript">
    var i=parseFloat(document.getElementById("drGEC").innerHTML);
    var max=parseFloat(i+(<?php echo ($mmsy); ?>));
    var time1=setInterval(function() {
        var time2=setInterval(function(){
            i=parseFloat((i+0.000222).toFixed(8));
			console.log(i);
            if(i>=max){
                clearInterval(time2);
				i=max;
            }
            $("#drGEC").html(i.toFixed(8));
        },10);
        max=i+(<?php echo ($mmsy); ?>);
        $("#drGEC").html(i);
    }, 5000);
    var s=parseFloat(document.getElementById("ljGEC").innerHTML);
//    console.log(s);
    var time2=setInterval(function() {
        console.log(s);
        s=parseFloat((s+(<?php echo ($mmsy); ?>)).toFixed(8));
		$("#ljGEC").html(s.toFixed(8));
    }, 5000);
</script>

</body>
</html>