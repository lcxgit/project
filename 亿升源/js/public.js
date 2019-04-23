
/*动画*/
//new WOW().init();
$(document).ready(function(){
    var wow = new WOW({
        boxClass:     'wow',      // 动画元素css类（默认是 wow）
        animateClass: 'animated', // 动画css类（默认为动画）
        offset:       0,          // 触发动画时到元素的距离（默认为0）
        mobile:       true,       // 在移动设备上触发动画（默认为true）
        live:         true,       // 对异步加载的内容执行操作（默认为true）
        callback:     function(box) {
            //每次动画启动时都会触发回调
            //传入的参数是动画的DOM节点
        },
        scrollContainer: null //可选的滚动容器选择器，否则使用window
    });
    wow.init();

})
/*动画*/ 

$(document).ready(function() {
    if(window.screen.width>=1200) {
        //滚动条
        var nice = $("html").niceScroll({
            cursoropacitymin: 0, //改变不透明度时光标处于非活动状态（scrollabar “隐藏”状态）时，范围从1到0 
            cursoropacitymax: 1, //改变不透明度当光标处于活动状态时（滚动条“可见”状态），范围从1到0 
            zindex: "999", // 改变滚动条的z-index值
            cursorcolor: "#333", // 改变滚动条颜色，使用16进制颜色值
            cursorwidth: "8px", // 滚动条的宽度，单位：便素
            cursorborder: "transparent", // CSS方式定义滚动条边框
            background: "#f5f5f5", // 轨道的背景颜色
            autohidemode: true, //如何隐藏滚动条有效，可能值：
            // true | // 无滚动时隐藏
            // "cursor" | // 隐藏
            // false | // 不隐藏,
            // "leave" | // 仅在指针离开内容时隐藏
            // "hidden" | // 一直隐藏
            // "scroll", // 仅在滚动时显示        
            scrollspeed: 60, //滚动速度 
            mousescrollstep: 40, //使用鼠标滚轮滚动速度（像素）
            spacebarenabled: true, //使网页上下滚动时，空格键按下     
            iframeautoresize: true, // 在加载事件时自动重置iframe大小
            cursordragspeed: 0.3, // 设置拖拽的速度
            cursordragontouch: false, // 使用触屏模式来实现拖拽  
            horizrailenabled: false // nicescroll可以管理水平滚动
        });
        //滚动条
    }
});

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
    
    //图片放大
    $('.certificate_list .list_img').simpleSlide();
    $('.index_printer .printer_list .list_img').simpleSlide();
    $('.printer_main .printer_list .list_img').simpleSlide();

    //首页轮播图1
    $(".slider").owlCarousel({
        slideSpeed : 300, //滑动速度
        paginationSpeed : 400, //分页速度
        singleItem: true, //单项
        items : 1, //显示一个
        autoplay: true, //自动播放
        autoplayTimeout: 3000, //3秒
        autoplayHoverPause: false, //自动播放悬停暂停
        autoplaySpeed: false, //自动播放速度
        // animateIn: 'fadeIn', //动画
        // animateOut: 'fadeOutLeft',
        loop: true, //循环
        dots: true, //点
        autoHeight: true, //自动高度
        nav: true, //导航
        navigation : true, //显示下一个和上一个按钮
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });

    //首页轮播图2
    /*$(window).load(function(){
        $('.flexslider').flexslider({
            animation: "fade", // 淡出
            slideshowSpeed: 3000, // 3秒
        });
    });*/

    jQuery(".picMarquee-left").slide({
        mainCell: ".bd ul",
        autoPlay: true,
        effect: "leftMarquee",
        vis: 6,
        interTime: 30,
        trigger: "click"
    });

    //index_printer_list
    /*$(".index_printer_list").owlCarousel({
        items : 6, //显示6个
        autoplay: true, //自动播放
        autoplayTimeout: 2000, //2秒
        autoplayHoverPause: false, //自动播放悬停暂停
        autoplaySpeed: false, //自动播放速度
        loop: true, //循环
        dots: true, //点
        autoHeight: true, //自动高度
        nav: false, //导航
        navigation : false, //显示下一个和上一个按钮
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });*/

    //certificate_list
    $(".certificate_list").owlCarousel({
        items : 4, //显示6个
        autoplay: true, //自动播放
        autoplayTimeout: 3000, //3秒
        autoplayHoverPause: false, //自动播放悬停暂停
        autoplaySpeed: false, //自动播放速度
        loop: true, //循环
        dots: true, //点
        autoHeight: true, //自动高度
        nav: false, //导航
        navigation : false, //显示下一个和上一个按钮
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });
    
    // 鼠标经过下拉
    //$.fn.bootstrapDropdownHover();
    
    //数字输入框
    /*var options = {
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
    $(".input-counter").inputCounter(options);*/
})


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
