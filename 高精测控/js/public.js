
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

/*客服*/
$(document).ready(function(){
    //$("#kefu").load("kefu.html");
})
/*客服*/

/*top_left_nav*/ 
$(document).ready(function(){
    $(".click_nav").on("click",function(){
        $(this).next("ul").slideToggle(300).siblings("ul").slideUp(500)
    })
})
/*top_left_nav*/

/*首页产品轮播图*/
$(document).ready(function() {
    var owl = $("#owl-1");
    owl.owlCarousel({
        // 设置响应屏幕显示多少个
        itemsCustom : [
            [0, 2],
            [450, 4],
            [600, 4],
            [700, 4],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : true,

        //布尔值false鼠标悬停停止自动播放
        stopOnHover : true,

        //布尔值true显示分页
        pagination : false,

        //布尔值false分页按钮显示数字
        paginationNumbers : false,

        //布尔值/整数false自动播放，可选布尔值或整数，若使用整数，
        //如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        autoPlay : 3000
    });
    var owl = $("#owl-2");
    owl.owlCarousel({
        itemsCustom : [
            [0, 2],
            [450, 4],
            [600, 4],
            [700, 4],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : true,

        //布尔值false鼠标悬停停止自动播放
        stopOnHover : true,

        //布尔值true显示分页
        pagination : false,

        //布尔值false分页按钮显示数字
        paginationNumbers : false,

        //布尔值/整数false自动播放，可选布尔值或整数，若使用整数，
        //如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        autoPlay : 3000
    });
    var owl = $("#owl-3");
    owl.owlCarousel({
        itemsCustom : [
            [0, 2],
            [450, 4],
            [600, 4],
            [700, 4],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : true,

        //布尔值false鼠标悬停停止自动播放
        stopOnHover : true,

        //布尔值true显示分页
        pagination : false,

        //布尔值false分页按钮显示数字
        paginationNumbers : false,

        //布尔值/整数false自动播放，可选布尔值或整数，若使用整数，
        //如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        autoPlay : 3000
    });
    var owl = $("#owl-4");
    owl.owlCarousel({
        itemsCustom : [
            [0, 2],
            [450, 4],
            [600, 4],
            [700, 4],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : true,

        //布尔值false鼠标悬停停止自动播放
        stopOnHover : true,

        //布尔值true显示分页
        pagination : false,

        //布尔值false分页按钮显示数字
        paginationNumbers : false,

        //布尔值/整数false自动播放，可选布尔值或整数，若使用整数，
        //如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        autoPlay : 3000
    });
});
/*首页产品轮播图*/

/*关于我们轮播图*/
$(document).ready(function() {
    var owl = $("#owl-about");
    owl.owlCarousel({
        itemsCustom : [
            [0, 2],
            [450, 2],
            [600, 2],
            [700, 2],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : false,

        //布尔值false鼠标悬停停止自动播放
        stopOnHover : true,

        //布尔值true显示分页
        pagination : true,

        //数组[“prev”,”next”]设置“上一个”、“下一个”文字，默认是[“prev”,”next”]
        navigationText : ["", ""],

        //布尔值false分页按钮显示数字
        paginationNumbers : true,

        //布尔值/整数false自动播放，可选布尔值或整数，若使用整数，
        //如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        autoPlay : 3000
    });
});
/*关于我们轮播图*/

/*首页新闻轮播图*/
$(document).ready(function() {
    /*var owl = $("#owl-index_news");
    owl.owlCarousel({
        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 1],
            [1000, 1],
            [1200, 2],
            [1400, 2],
            [1600, 3]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : true,

        //布尔值false鼠标悬停停止自动播放
        stopOnHover : true,

        //布尔值true显示分页
        pagination : false,

        //数组[“prev”,”next”]设置“上一个”、“下一个”文字，默认是[“prev”,”next”]
        navigationText : ["", ""],

        //布尔值false分页按钮显示数字
        paginationNumbers : false,

        //布尔值/整数false自动播放，可选布尔值或整数，若使用整数，
        //如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        autoPlay : 3000
    });*/
});

/*
$(document).ready(function() {
    $('.autoplay1').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000
    });
});
*/
/*首页新闻轮播图*/

//产品详情图片轮播
$(document).ready(function() {
    $(function() {
        var viewSwiper = new Swiper('.view .swiper_detail_img_1', {
            onSlideChangeStart: function() {
                updateNavPosition();
            }
        })

        $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
            e.preventDefault();
            if(viewSwiper.activeIndex == 0) {
                viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
                return;
            }
            viewSwiper.swipePrev();
        })
        $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
            e.preventDefault();
            if(viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
                viewSwiper.swipeTo(0, 1000);
                return
            }
            viewSwiper.swipeNext();
        })

        var previewSwiper = new Swiper('.preview .swiper_detail_img_2', {
            visibilityFullFit: true,
            slidesPerView: 'auto',
            onlyExternal: true,
            onSlideClick: function() {
                viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
            }
        })

        function updateNavPosition() {
            $('.preview .active-nav').removeClass('active-nav');
            var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
            if(!activeNav.hasClass('swiper-slide-visible')) {
                if(activeNav.index() > previewSwiper.activeIndex) {
                    var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1;
                    previewSwiper.swipeTo(activeNav.index() - thumbsPerNav);
                } else {
                    previewSwiper.swipeTo(activeNav.index());
                }
            }
        }
    });
});
//产品详情图片轮播

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
//var Prohibit_Right=true;//true开启;false关闭
var Prohibit_Right=false;
if(Prohibit_Right==true){
    $(document).ready(function(){
        document.oncontextmenu=new Function("event.returnValue=false;");
        document.onselectstart=new Function("event.returnValue=false;");
    });
}
*/


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
