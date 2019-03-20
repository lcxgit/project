<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/Public/web/css/lib.css?2">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta content="telephone=no" name="format-detection">
    <title>联系我们</title>
    <meta name="Keywords" content="PAAM" />
    <meta name="Description" content="PAAM" />
    <script src="/Public/web/js/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="/Public/web/css/weui.min.css"/>
    <link rel="stylesheet" href="/Public/web/css/jquery-weui.min.css">
    <script src="/Public/web/js/layer.js"></script>
    <link href="/Public/web/css/font-awesome.min.css" rel="stylesheet">
    <link href="/Public/web/fonts/iconfont.css" rel="stylesheet">
    <link rel="stylesheet" href="/Public/web/css/style.css"/>
	<style>
        .avatorUpload>input{
           display: none;
        }
		#avatorUpload{
			margin:0 auto;
			width:20%;
			border:1px solid #ddd;
		}
    </style>
	
	<script src="/Public/web/js/ajaxUplod.js"></script>
</head>
<body>
<!--顶部开始-->
<div class="header">
    <span class="header_l"><a href="javascript:history.go(-1);"><i class="fa fa-chevron-left"></i></a></span>
    <span class="header_c">联系我们</span>
	<span style="position: absolute;right: 10%;top: 0px;text-align:center;width:20%;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 12px; "><?php echo ($userData['ue_truename']); ?></span>
    <span class="header_r"><a href="/index.php/Home/Index/index"><i class="fa fa-user"></i></a></span>
</div>
<div class="height40"></div>
<!--顶部结束-->
<div style='width:90%;margin-left:5%'>
	<form "<?php echo U('Home/Info/lianxius');?>" name="xgmm" id="xgmm" method="post">
		<h3>内容</h3>
		<textarea placeholder="内容" name="lynr" style='width:100%;height:100px;border-radius:5px;'></textarea>
		<!-- <div id="avatorUpload" class="avatorUpload" name="store_banner" style="background-image:url('images/w_stu.jpg');width:10rem;height:10rem;background-size:cover;">
			<input type="file" id="file1" name="pic1" multiple  enctype="multipart/form-data"/>
		</div> -->
	
		<input type="submit" value="提交" style="width:100%;border-radius:5px;height:30px;background-color:#05B6A3;border:0px"/>
	</form>
	<!-- 上传图片 -->
	<script>
    var file1=document.getElementById("file1");
    $("#avatorUpload").on("click",function(){
        file1.click();
    })
    file1.onchange = function() {
        console.log( $("#file1"));
        //如果选择为空   返回操作
        if (!this.files.length) return;
        //创建上传图片的的数组
        var files = Array.prototype.slice.call(this.files);
        //如果file的长度大于1的话    就alert   最多同时只可上传1张图片
        if (files.length > 1) {
            alert("一次只可上传1张图片");
            return;
        }
        //遍历上传图片的文件数组   可不用遍历  直接去即可
        files.forEach(function(file, i) {
            //判断图片的格式
            if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
//            实例化一个FileReader
            var reader = new FileReader();
            console.log(reader);
            console.log(i);//第几个图片
            reader.onload = function() {
                //获取U图片的URL地址
                var result = this.result;
                console.log(result);
                var img = new Image();
                img.src = result;
                console.log(img.src);
                $("#avatorUpload").css("background-image", "url(" + result + ")");
                    upload(result, file.type, $("#avatorUpload"));

            };
            reader.readAsDataURL(file);
        })
    };
    function upload(basestr,type,$img) {
        var blob=basestr;
        console.log(blob);
        var xhr = new XMLHttpRequest();
        var formdata = getFormData();
        formdata.append('imagefile', blob);
		//action: '/Index.php/Home/info/sctp/',
        var url=Url+  '/Index.php/Home/info/tpsc/'
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var txt=JSON.parse(xhr.responseText)
                console.log(txt);
                if(txt.ret=="err"){
                    alert("上传失败"+txt.msg)
                    console.log('上传失败：' + xhr.responseText);
                }else{
                    console.log('上传成功：' + xhr.responseText);
                }
            }
        };
        xhr.open('post',url,true );
        //发送请求的信息
        xhr.send(formdata);
    }
    function getFormData() {
        var isNeedShim = ~navigator.userAgent.indexOf('Android')
                && ~navigator.vendor.indexOf('Google')
                && !~navigator.userAgent.indexOf('Chrome')
                && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534;

        return isNeedShim ? new FormDataShim() : new FormData();
    }
</script>




	<h3>留言记录</h3>
	<table style="BORDER-COLLAPSE: collapse;border-color:#ccc; height:40px;width:100%;word-break:break-all; word-wrap:break-all;margin-bottom:70px"border="1">
    <thead style="font-size:12px">
    <tr>
        <th style="width:20%">留言时间</th>
        <th style="width:20%">昵称</th>
        <th style="width:60%">留言内容</th>
    </tr>
	
    </thead>
    <tbody style="font-size:10px">
	<?php if(is_array($list)): foreach($list as $key=>$v): ?><tr style="text-align:center">
        <td style="width:20%;border:1px solid #ccc;border-bottom:1px dashed #ccc"><?php echo ($v["ma_time"]); ?></td>
        <td style="width:20%;border:1px solid #ccc;border-bottom:1px dashed #ccc"><?php echo ($userData['ue_truename']); ?></td>
        <td style="width:60%;border:1px solid #ccc;border-bottom:1px dashed #ccc"><?php echo ($v["ma_note"]); ?></td>
    </tr>
	<tr>
		<td colspan="3"style="border:1px solid #ccc;border-top:1px dashed #ccc">回复：<?php echo ($v["ma_reply"]); ?></td>
	</tr><?php endforeach; endif; ?>
	
	
    </tbody>
	

</table>
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
</body>
</html>