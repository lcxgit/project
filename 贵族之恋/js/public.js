
/*动画*/
$(function() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    });
    wow.init();
});
//new WOW().init();
/*动画*/ 

$(document).ready(function(){
    //导航栏滑动侦测
    $(window).on('scroll',function() {
        if ($(window).scrollTop() > 20) {
            $('.header').addClass('top_nav');
        } else {
            $('.header').removeClass('top_nav');
        }
    });
    //导航栏滑动侦测

    //首页轮播图
    $(window).load(function(){
        $('.flexslider').flexslider({
            animation: "fade", // 淡出
            slideshowSpeed: 3000, // 3秒
        });
    });
    //首页轮播图
    
    // 鼠标经过下拉
    //$.fn.bootstrapDropdownHover();
})

//advantage_list
var _content_advantage = []; //临时存储li循环内容
var advantage_lanren = {
    _default: 9, //默认显示图片个数
    _loading: 6,  //每次点击按钮后加载的个数
    init: function () {
        var lis = $(".advantage_content .hidden .figure_img");
        $(".advantage_content .advantage_list").html("");
        for (var n = 0; n < advantage_lanren._default; n++) {
            lis.eq(n).appendTo(".advantage_content .advantage_list");
        }
        $(".advantage_content .advantage_list img").each(function () {
            $(this).attr('src', $(this).attr('realSrc'));
        })
        for (var i = advantage_lanren._default; i < lis.length; i++) {
            _content_advantage.push(lis.eq(i));
        }
        $(".advantage_content .advantage_content").html("");
    },
    loadMore: function () {
        var mLis = $(".advantage_content .advantage_list .figure_img").length;
        for (var i = 0; i < advantage_lanren._loading; i++) {
            var target = _content_advantage.shift();
            if (!target) {
                $('.advantage_content .list_more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".advantage_content .advantage_list").append(target);
            $(".advantage_content .advantage_list img").eq(mLis + i).each(function () {
                $(this).attr('src', $(this).attr('realSrc'));
            });
        }
    }
}
advantage_lanren.init();
//advantage_list

//team_list
var _content_team = []; //临时存储li循环内容
var team_lanren = {
    _default: 8, //默认显示图片个数
    _loading: 4,  //每次点击按钮后加载的个数
    init: function () {
        var lis = $(".team_content .hidden .figure_img");
        $(".team_content .team_list").html("");
        for (var n = 0; n < team_lanren._default; n++) {
            lis.eq(n).appendTo(".team_content .team_list");
        }
        $(".team_content .team_list img").each(function () {
            $(this).attr('src', $(this).attr('realSrc'));
        })
        for (var i = team_lanren._default; i < lis.length; i++) {
            _content_team.push(lis.eq(i));
        }
        $(".team_content .team_content").html("");
    },
    loadMore: function () {
        var mLis = $(".team_content .team_list .figure_img").length;
        for (var i = 0; i < team_lanren._loading; i++) {
            var target = _content_team.shift();
            if (!target) {
                $('.team_content .list_more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".team_content .team_list").append(target);
            $(".team_content .team_list img").eq(mLis + i).each(function () {
                $(this).attr('src', $(this).attr('realSrc'));
            });
        }
    }
}
team_lanren.init();
//team_list

//news_list
var _content_news = []; //临时存储li循环内容
var news_lanren = {
    _default: 8, //默认显示图片个数
    _loading: 4,  //每次点击按钮后加载的个数
    init: function () {
        var lis = $(".news_content .hidden .figure_img");
        $(".news_content .news_list").html("");
        for (var n = 0; n < news_lanren._default; n++) {
            lis.eq(n).appendTo(".news_content .news_list");
        }
        $(".news_content .news_list img").each(function () {
            $(this).attr('src', $(this).attr('realSrc'));
        })
        for (var i = news_lanren._default; i < lis.length; i++) {
            _content_news.push(lis.eq(i));
        }
        $(".news_content .news_content").html("");
    },
    loadMore: function () {
        var mLis = $(".news_content .news_list .figure_img").length;
        for (var i = 0; i < news_lanren._loading; i++) {
            var target = _content_news.shift();
            if (!target) {
                $('.news_content .list_more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".news_content .news_list").append(target);
            $(".news_content .news_list img").eq(mLis + i).each(function () {
                $(this).attr('src', $(this).attr('realSrc'));
            });
        }
    }
}
news_lanren.init();
//news_list

//product_list
var _content_product = []; //临时存储li循环内容
var product_lanren = {
    _default: 8, //默认显示图片个数
    _loading: 4,  //每次点击按钮后加载的个数
    init: function () {
        var lis = $(".product_content .hidden .figure_img");
        $(".product_content .product_list").html("");
        for (var n = 0; n < product_lanren._default; n++) {
            lis.eq(n).appendTo(".product_content .product_list");
        }
        $(".product_content .product_list img").each(function () {
            $(this).attr('src', $(this).attr('realSrc'));
        })
        for (var i = product_lanren._default; i < lis.length; i++) {
            _content_product.push(lis.eq(i));
        }
        $(".product_content .product_content").html("");
    },
    loadMore: function () {
        var mLis = $(".product_content .product_list .figure_img").length;
        for (var i = 0; i < product_lanren._loading; i++) {
            var target = _content_product.shift();
            if (!target) {
                $('.product_content .list_more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".product_content .product_list").append(target);
            $(".product_content .product_list img").eq(mLis + i).each(function () {
                $(this).attr('src', $(this).attr('realSrc'));
            });
        }
    }
}
product_lanren.init();
//product_list

//数字输入框
/*$(document).ready(function() {
    var options = {
        selectors: {
            addButtonSelector: '.btn-add',
            subtractButtonSelector: '.btn-subtract',
            inputSelector: '.counter',
        },
        settings: {
            checkValue: true,
            isReadOnly: true,
        },
    };

    $(".input-counter").inputCounter(options);
});*/
//数字输入框


/*网站标题滚动效果*/
//方法1 网站打开后延迟开启执行滚动效果
setTimeout(function(){
    newtitle();
},300);
function newtitle() {
    //获取网站的标题
    var text=document.title
    var timerID
    //标题超过长度后启用滚动
    if(text.length>10){
        //设置标题，从第二个字获取到末尾+标题的第一个字
        document.title=text.substring(1,text.length)+text.substring(0,1);
        //获取标题长度
        text=document.title.substring(0,text.length);
        //600毫秒后继续调用这个函数进行递归，实现滚动的效果
        timerID = setTimeout("newtitle()", 200)
    }
}
 
/* 
//方法2
var title = document.title;//获取网页标题
var step = 0; 
function rollTitle() { 
    //根据时间每次将切割后前面的字加到后面，直到step比标题个数还大，重新开始
    document.title = title.substring(step, title.length) + title.substring(0, step); 
    step++; 
    if (step >  title.length) step = 0 
    setTimeout("rollTitle()",300); 
} 
rollTitle();//调用函数 
*/
/*网站标题滚动效果*/


/*移动网站重定向跳转*/
/*
//平台、设备和操作系统
var system = {
    win: false,
    mac: false,
    xll: false,
    ipad: false
};
//检测平台
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//        system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
//跳转语句，如果是手机访问就自动跳转到Mobile页面
if (system.win || system.mac || system.xll) {

} else {
    window.location.href = "/m/";
}
*/

/*网页禁止右键代码*/
/*
    最常见查看网站源码的无非有这四种：
    鼠标右键单击
    F12
    Ctrl+U
    Ctrl+Shift+I
 
window.onload = function() {
    //屏蔽键盘事件
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        //F12
        if (e.keyCode == 123) {
            return false;
            //Ctrl+Shift+I
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
            //Shift+F10
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
            //Ctrl+U
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {
            return false;
        }
    };
    //屏蔽鼠标右键
    document.oncontextmenu = function() {
        return false;
    }
}*/
/*
HTML页面内容禁止选择、复制、右键
<body leftmargin=0 topmargin=0 oncontextmenu='return false' 
ondragstart='return false' onselectstart ='return false' 
onselect='document.selection.empty()' oncopy='document.selection.empty()' 
onbeforecopy='return false' onmouseup='document.selection.empty()'>
</body>
*/
/*网页禁止右键代码*/

/*获得键盘上对应的ascII码*/
/*  
$(document).ready(function(){
    $('input').keydown(function(event){ 
       alert(event.keyCode); 
     });
});
*/


/*top*/
!
function(l, o, e) {
    "use strict";
    l.fn.scrollUp = function(o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    },
    l.fn.scrollUp.init = function(r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({},
        l.fn.scrollUp.defaults, r),
        f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {
            id: p.scrollName + "-active"
        }).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
        case "fade":
            s = "fadeIn",
            t = "fadeOut",
            c = p.animationSpeed;
            break;
        case "slide":
            s = "slideDown",
            t = "slideUp",
            c = p.animationSpeed;
            break;
        default:
            s = "show",
            t = "hide",
            c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance: l(e).height() - l(o).height() - p.scrollDistance,
        n = l(o).scroll(function() {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }),
        p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget: "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0,
        d.click(function(o) {
            o.preventDefault(),
            l("html, body").animate({
                scrollTop: a
            },
            p.scrollSpeed, p.easingType)
        })
    },
    l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    },
    l.fn.scrollUp.destroy = function(r) {
        l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    },
    l.scrollUp = l.fn.scrollUp
} (jQuery, window, document);

$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
/*top*/
