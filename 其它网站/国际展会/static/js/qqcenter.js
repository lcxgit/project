//页面中间qq咨询

document.writeln("<div id=\"qqcenter\">");
document.writeln("  <div class=\"qqcenter_close\"><a href=\"javascript:void(0)\" onclick=\"qqcentercolse()\"><img src=\"static/images/alpha_0.png\" /></a></div>");
document.writeln("  <div class=\"clear\"></div>");
document.writeln("  <div class=\"zixun_center\"><a id=\"zjqq\" onclick=\"_lyz_qq_hit('PC中间弹框');qqcentercolse();tencentqq();ga(\'send\', \'event\', \'营销QQ\', \'弹窗咨询\');\" href=\"javascript:void(0);\"><img src=\"static/images/alpha_0.png\" /></a></div>");
document.writeln("  <div class=\"qqwait\"><a href=\"javascript:void(0)\" onclick=\"qqcentercolse()\"><img src=\"static/images/alpha_0.png\" /></a></div>");
document.writeln("  <div class=\"clear\"></div>");
document.writeln("</div>");


$(document).ready(function () { 
	setTimeout(function() {
       $("#qqcenter").show();
	}, 10000);//延迟显示中间qq咨询框
});  

function qqcentercolse(){
	//关闭中间qq咨询框	
	$("#qqcenter").hide();	
}





