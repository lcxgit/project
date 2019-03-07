
function lyz_writeReferer()
{
    try {
        var domain = 'showguide.cn';
        if (document.location.href.split('/')[2].indexOf('chinashowguide.cn') !== -1) { // 测试环境
            domain = 'chinashowguide.cn';
        }

        var expiresDate = new Date();
        expiresDate.setTime(expiresDate.getTime() + 5*365*24*3600*1000);
        var option = {expires:expiresDate, path: '/', domain: domain};

        $.cookie('_sg_mobile_referer',document.referrer,option);
    } catch(e) {}
}

function gotoMobile()
{
    var url = window.location.href;
    var mobileAgent = new Array("iphone", "android");
    var browser = navigator.userAgent.toLowerCase();
    for (var i=0; i<mobileAgent.length; i++){
        if (browser.indexOf(mobileAgent[i])!=-1) {
            if(url.indexOf("www")>-1){
                lyz_writeReferer();

                var mobileurl = url.replace("/www.", "/m.");
                window.location.href = mobileurl;
                break;
            }
        }
    }
}
gotoMobile();

