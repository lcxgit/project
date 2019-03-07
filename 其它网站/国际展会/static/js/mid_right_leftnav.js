
//右侧悬浮百元购广告
function rightbobingdisplay(){ 
	document.getElementById("rightbobing").style.display="block"; 
	$(".floatL").css("width","177px");
	//$(".floatL").css("margin-left","-177px");
	//$(".btnOpen").css("padding-left","141px");
} 
function rightbobingdisappear(){ 
	document.getElementById("rightbobing").style.display="none"; 
	$(".floatL").css("width","36px");
	//$(".floatL").css("margin-left","-36px");
	$(".btnOpen").css("padding-left","0px");
}  
//右侧悬浮百元购广告



document.writeln("<div class=\"btnOpen\">");


document.writeln("		  <!--右侧百元购广告 star-->	");
document.writeln("		  <div style=\" width:36px; height:64px; margin-bottom:1px; display:none;\">");
document.writeln("				<a href=\"javascript:void(0);\" onmouseover=\"rightbobingdisplay()\" onmouseout=\"rightbobingdisappear()\"><img src=\"static/images/qianghongbao_gg_01.jpg\" /></a>");
document.writeln("				<div id=\"rightbobing\" onmouseover=\"rightbobingdisplay()\" onmouseout=\"rightbobingdisappear()\">");
document.writeln("				  <img src=\"static/images/qianghongbao_gg_02.jpg\" width=\"141\" height=\"220\" />          ");
document.writeln("				</div>");
document.writeln("		  </div>");
document.writeln("		  <!--右侧百元购广告 end-->");


document.writeln("		  <div class=\"freeyy_show\"><a href=\"javascript:void(0);\" onclick=\"_lyz_reg_hit('PC底部给您回电');\" style=\"background:none;\"><img src=\"static/images/showg_187.png\" /></a></div>");
document.writeln("		  <div class=\"online_zx\"><a href=\"javascript:void(0);\" id=\"cbqq\" onclick=\"_lyz_qq_hit('PC右边条');tencentqq();ga(\'send\', \'event\', \'营销QQ\', \'在线咨询\',\'侧边栏\');\"><img src=\"static/images/showg_40.png\" /></a></div>");

document.writeln("		  <div class=\"online_weixin\">");
document.writeln("		    <a href=\"javascript:void(0);\" onmouseover=\"rightdisplay()\" onmouseout=\"rightdisappear()\"><i class=\"fa fa-qrcode\"></i><br />微信</a>");
document.writeln("			<div id=\"righteweima\" onmouseover=\"rightdisplay()\" onmouseout=\"rightdisappear()\">");
document.writeln("		      <img src=\"static/images/showg_51.png\" width=\"221\" height=\"168\" alt=\"盈拓展览微信公众号\"/>            </div>");
document.writeln("		  </div>");

document.writeln("		  <div class=\"online_message\"><a href=\"javascript:void(0);\" onclick=\"_lyz_reg_hit('PC右侧留言');minrightshow()\"><i class=\"fa fa-pencil\"></i><br />留言</a></div>");
//document.writeln("		  <div class=\"online_help\"><a href=\"javascript:void(0);\" onclick=\"minrightshow()\"><i class=\"fa fa-question-circle\"></i><br />帮助</a></div>");

document.writeln("		  <div class=\"go_top\" id=\"go_top\"><a href=\"javascript:void(0);\"><i class=\"fa fa-chevron-up\"></i><br />TOP</a></div>");
document.writeln("		</div>");