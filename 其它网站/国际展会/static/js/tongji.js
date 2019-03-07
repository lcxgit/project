

/*
document.writeln("<script type=\"text/javascript\">");
document.writeln(" var _hmt = _hmt || [];");
document.writeln(" (function() {");
document.writeln(" var hm = document.createElement(\'script\');");
document.writeln(" hm.src = \'\/\/hm.baidu.com\/hm.js?43d41fa175db9597eecae7d73df72d3f\';");
document.writeln(" var s = document.getElementsByTagName(\'script\')[0];");
document.writeln(" s.parentNode.insertBefore(hm, s);");
document.writeln(" })();");
document.writeln("<\/script>");



document.writeln(" <script>");
document.writeln("  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){");
document.writeln("  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),");
document.writeln("  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)");
document.writeln("  })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');");
document.writeln("  ga(\'create\', \'UA-19880812-1\', \'auto\');");
document.writeln("  ga(\'send\', \'pageview\');");
document.writeln("</script>");



document.writeln("<!-- WPA Button Begin -->");
document.writeln("<script charset=\"utf-8\" type=\"text/javascript\" src=\"http://wpa.b.qq.com/cgi/wpa.php?key=XzkzODA3NzAyOV8xMzM0M180MDA4ODU1MDg4Xw\"></script>");
document.writeln("<!-- WPA Button END -->");


(function(){
var canonicalURL, curProtocol;
//Get the <link> tag
var x=document.getElementsByTagName("link");
//Find the last canonical URL
if(x.length > 0){
for (i=0;i<x.length;i++){
if(x[i].rel.toLowerCase() == 'canonical' && x[i].href){
canonicalURL=x[i].href;
}
}
}
//Get protocol
    if (!canonicalURL){
    curProtocol = window.location.protocol.split(':')[0];
    }
    else{
    curProtocol = canonicalURL.split(':')[0];
    }
    //Get current URL if the canonical URL does not exist
    if (!canonicalURL) canonicalURL = window.location.href;
    //Assign script content. Replace current URL with the canonical URL
    !function(){var e=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,r=canonicalURL,t=document.referrer;if(!e.test(r)){var n=(String(curProtocol).toLowerCase() === 'https')?"https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif":"//api.share.baidu.com/s.gif";t?(n+="?r="+encodeURIComponent(document.referrer),r&&(n+="&l="+r)):r&&(n+="?l="+r);var i=new Image;i.src=n}}(window);})();
*/
/*
// 360
// (function(){
//    var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?f247cb325607c815a8b781a3bf307c0b":"https://jspassport.ssl.qhimg.com/11.0.1.js?f247cb325607c815a8b781a3bf307c0b";
//    document.write('<script src="' + src + '" id="sozz"></script>');
// })();
*/

if(typeof jQuery != 'undefined'){
    // $.ajax({
    //     type:'post',
    //     url:'/expoApi/Home/RobFloor/check',
    //     dataType: "json",
    //     success:function(data){
    //         if(data['end'] == 1){
    //             //转盘活动结束
    //             $('.zp_gg').hide();
    //             $('.rob').hide();
    //         }
    //     }
    // });
//点击关闭提示
    function zp_gg_colse(){
        $('.zp_gg').hide();
    }
}
