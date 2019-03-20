<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1.0"/>
	<meta content="telephone=no" name="format-detection">
	<title>个人中心</title>	
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
		<span class="header_c">个人中心</span>
		<span style="position: absolute;right: 10%;top: 0px;text-align:center;width:20%;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($nickname); ?></span>
		<span class="header_r"><a href="javascript:void(0)"><i class="fa fa-user"></i></a></span>
	</div>
	<div class="height40"></div>
	<!--顶部结束-->
<style>
	.user_sy li{
		width: 33.3%;
	}
	.weui_grid_label {margin-top:6px;}
</style>
	<div style="background-color: #fe9625 ;padding: 20px 0px;  width: 95%;overflow: hidden;color: #FFFFFF;font-size:1.5em;padding-right:5%">
		<a href="<?php echo U('/index.php/Home/Login/logout');?>" style="position:absolute;top:45px;left:19px;width:100px;height:50px;line-height:50px;text-align:center;color:#fff;font-size:12px">安全退出</a>
		<div style="width: 95%;float: right;text-align: center;overflow: hidden;text-align:right;"><p style="font-size:12px">可用GEC:</p><p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size:30px"><?php echo ($kymoney); ?></p></div>
		<div style="width:95%;float: right;text-align: center;overflow: hidden;text-align:right;"><p style="float:right"><span style="font-size:12px;display:inline-block;">冻结GEC:</span><span style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;float:right;font-size:1em"><?php echo ($djmoney); ?></span></p></div>
	</div>
<div class="weui_grids" style="background-color: #f9f9f9">
	<a href="/Index.php/Home/Info/mykuangche/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #FE9400;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe601;</i> -->
			<img src="/Public/web/img/user-1.png"/>
		</div>
		<p class="weui_grid_label">我的矿机</p>
	</a>
	<a href="/Index.php/Home/Info/myjiaoyi/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #F4403C;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe63f;</i> -->
			<img src="/Public/web/img/user-2.png"/>
		</div>
		<p class="weui_grid_label" >我的交易</p>
	</a>
	<a href="/Index.php/Home/Info/kuangcheshouyi/" class="weui_grid js_grid" data-id="toast">
	<div class="weui_grid_icon">
		<!-- <i class="iconfont" style="color: #7E4BE5;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe628;</i> -->		
			<img src="/Public/web/img/user-3.png"/>
	</div>
	<p class="weui_grid_label">矿机收益</p>
</a>
	<a href="/Index.php/Home/Info/tgsy/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #FEB900;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe603;</i> -->
			<img src="/Public/web/img/user-4.png"/>
		</div>
		<p class="weui_grid_label">公会收益</p>
	</a>
	<a href="/Index.php/Home/Myuser/index/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #1C91E2;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe85d;</i> -->
			<img src="/Public/web/img/user-5.png"/>
		</div>
		<p class="weui_grid_label" >矿工公会</p>
	</a>
	<!-- <a href="/Index.php/Home/info/qiugoulkc/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<i class="iconfont" style="color: #e64340;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe615;</i>
		</div>
		<p class="weui_grid_label" style="margin-top: 12px">求购GEC</p>
	</a>



	<a href="/Index.php/Home/info/shouchu/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<i class="iconfont" style="color: #e64340;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe63a;</i>
		</div>
		<p class="weui_grid_label" style="margin-top: 12px">出售GEC</p>
	</a> -->



	<a href="/Index.php/Home/Info/tuiguangma/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #09B9F4;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe600;</i> -->
			<img src="/Public/web/img/user-6.png"/>
		</div>
		<p class="weui_grid_label">公会招募
</p>
	</a>
	<a href="/Index.php/Home/Info/myziliao/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #F63C86;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe684;</i> -->
			<img src="/Public/web/img/user-7.png"/>
		</div>
		<p class="weui_grid_label" >个人资料</p>
	</a>
	<a href="/Index.php/Home/Info/mimaguanli/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #A4ABFE;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe681;</i> -->
			<img src="/Public/web/img/user-8.png"/>
		</div>
		<p class="weui_grid_label" >密码管理</p>
	</a>
	<a href="/Index.php/Home/Info/lianxius/" class="weui_grid js_grid" data-id="toast">
		<div class="weui_grid_icon">
			<!-- <i class="iconfont" style="color: #A4ABFE;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe687;</i> -->
			<img src="/Public/web/img/user-9.png"/>
		</div>
		<p class="weui_grid_label" >联系我们</p>
	</a>
	<div  class="weui_grid js_grid smremzheng" data-id="toast">
			<div class="weui_grid_icon">
				<!-- <i class="iconfont" style="color: #15D897;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe62e;</i> -->
			<img src="/Public/web/img/user-10.png"/>
			</div>
			<p class="weui_grid_label ">实名认证</p>
	</div>
	<a href="/Index.php/Home/Index/help/" class="weui_grid js_grid" data-id="toast">
			<div class="weui_grid_icon">
				<!-- <i class="iconfont" style="color: #15D897;display: block;width: 16px;margin:0 auto;font-size: 2em;margin-left: -2px;">&#xe62e;</i> -->
			<img src="/Public/web/img/user-11.png"/>
			</div>
			<p class="weui_grid_label" >帮助中心</p>
	</a>
</div>
<style>
.renzhenmack {
	z-index:100;
	background:rgba(0,0,0,.6);
	width:100%;
	height:100%;
	top:0;
	position:fixed;
	left:0;
	display:none;	
    cursor: pointer;
}
.renzhentan {
	position:fixed;
	z-index:1001;
	width:90%;
	background:#fff;
	display:none;
	height:auto;
	left:5%;
	top:15%;
	border-radius:5px;
}
.state_box{ 
    height:43px; 
    position:relative; 
    background:#fff;
}
.state{
    float:left;
    width:50%; 
    line-height:43px;
    color:#65646b;
    font-size:14px;
    text-align:center
}
.movelist_box{ 
    width:100%; 
    overflow:hidden; 
    border-top: 1px solid #eee;
}
.move{ 
    width:500%;
    position:relative;
    clear:both; left:0;
}
.orderlist_box{ float:left; width:20%;}
.rz-deg {
	padding:5px;
}
.order-rz {
	margin:20px 10px;
}
.order-rz label{
	font-size:13px;
	color:#333;
	width:35%;
}
.order-rz input {
	background:none;
	border:1px solid #fe9625;
	border-radius:3px;
	height30px;
	line-height:30px;
	width:65%;
}
.order-sgs {
	width:100%;
	text-align:center;
	margin:20px 0;
}
.order-sgs button {
	padding:8px 25px;
	background:#fe9625;
	border:none;
	color:#fff;
	border-radius:5px;
}
.quxiaode {
	position:absolute;
	z-index:1002;
	right:-10px;
	top:-15px;
	padding:0 7px;
	border-radius:25px;
	background:red;
	color:#fff;
}
.colore {
	color:#fe9625;
}
</style>
<div class="renzhenmack"></div>
<div class="renzhentan">
	<div class="rz-deg">
		<div class="state_box">
			<div class="indi-her">
				<ul>
					<li class="state colore">银行卡认证</li>
					<li class="state">手机号认证</li>
				</ul>
				<div class="quxiaode">X</div>
			</div>
		</div>
		
		<!--订单信息-->
		<div class="movelist_box">
			<div class="move"> 
				<!-- 全部 -->
			<div class="orderlist_box">
				<div class="order-rz">
					<label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
					<input type="text" placeholder="请输入姓名"/>
				</div>
				<div class="order-rz">
					<label>身&nbsp;份&nbsp;&nbsp;证：</label>
					<input type="text" placeholder="请输入身份证"/>
				</div>
				<div class="order-rz">
					<label>银行卡号：</label>
					<input type="text" placeholder="请输入银行卡号"/>
				</div>
				
				<div class="order-sgs"><button>认证</button></div>
			</div>

		<!-- 已认证 -->
				<div class="orderlist_box">  
					<div class="order-rz">
						<label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
						<input type="text" placeholder="请输入姓名"/>
					</div>
					<div class="order-rz">
						<label>身&nbsp;份&nbsp;&nbsp;证：</label>
						<input type="text" placeholder="请输入身份证"/>
					</div> 
					<div class="order-rz">
						<label>手&nbsp;&nbsp;机&nbsp;号：</label>
						<input type="text" placeholder="请输入请输入手机号"/>
					</div>
					
					<div class="order-sgs"><button>认证</button></div>
				</div>
			</div>
		</div>    
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
        <li style="width:24%" ><a href="/Index.php/Home/Index/Index/" class="block" style="color:#fe9625"><i class="iconfont">&#xe684;</i>个人中心</a></li>
    </ul>
</div>
	<!--底部结束-->
	<script src="/Public/web/js/jquery-weui.min.js"></script>
	
<script>

	$(".smremzheng").click(function(){
		$(".renzhentan").show();
		$(".renzhenmack").show();
	})	
	
	$(".quxiaode").click(function(){
		$(".renzhentan").hide();
		$(".renzhenmack").hide();
	})

$(".state:eq(0)").click(
	function(){
		$(".blue_block").animate({left:'0%'})
		$(".state").removeClass('colore');
		$(this).addClass('colore');
		$(".move").css("left","0%")
		}
)
$(".state:eq(1)").click(
	function(){
		$(".blue_block").animate({left:'20%'})
		$(".state").removeClass('colore');
		$(this).addClass('colore');
		$(".move").css("left","-100%")
		}
)
</script>
		<p style="display:none;">
<script src="http://s95.cnzz.com/z_stat.php?id=1261438452&web_id=1261438452" language="JavaScript"></script>
</p>

</body>
</html>