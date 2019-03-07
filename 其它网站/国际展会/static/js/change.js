/*并列栏目切换-star*/
function chageIndex(indexNum,num,menuName,contentName,myClassName){
	var i="";
	for (i=1;i<=num;i++){
		document.getElementById(menuName+i).className=myClassName+"2";
		document.getElementById(contentName+i).style.display="none";
	}
	document.getElementById(menuName+indexNum).className=myClassName+"1";
	document.getElementById(contentName+indexNum).style.display="block";
}
/*并列栏目切换-end*/

/*资讯文章字体大小-star*/
function doZoom(size){
document.getElementById('zcontent').style.fontSize=size+'px'//还可以是pt
}
function showreview()
{
 document.getElementById("reviewt").style.display='block';
}
/*资讯文章字体大小-end*/

