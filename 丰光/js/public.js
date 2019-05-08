/*$(document).ready(function() {
    if(window.screen.width>=1200){
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
});*/

//导航栏滑动侦测

$(document).ready(function() {

    // 首页大图
    /*
    $('.box_skitter_large').skitter({
        theme: 'clean',
        numbers_align: 'center',
        progressbar: true, 
        dots: true, 
        preview: true
    });*/
    /*$('.box_skitter_large').skitter({
        interval: 3000, //时间
        hideTools: false, //隐藏数字和导航
        dots: false, //导航点
        fullscreen: true, //全屏模式
        navigation: true, //左右控制
        auto_play: true, //是否自动
        animateNumberOut: {backgroundColor:'#000',color:'#ccc'}, //动画/样式编号/点
        animateNumberOver: {backgroundColor:'#000',color:'#ccc'}, //动画/样式悬停数/点
        animateNumberActive: {backgroundColor:'#000',color:'#ccc'}, //动画/样式活动数/点
        with_animations:['cubeRandom','cube','paralell', 'glassCube','swapBars','cubeSize'] //添加指定动画效果
    });*/

    //图片无缝滚动
    jQuery(".about_development_list").slide({
        mainCell: ".picList",
        autoPlay: true,
        effect: "leftMarquee",
        vis: 6,
        interTime: 30,
        trigger: "click"
    });
    //图片无缝滚动

    $(".more_i").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);    
    });

    $(window).on('scroll',function() {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('top_nav');
        } else {
            $('.header').removeClass('top_nav');
        }
    });
    
    $(window).on('scroll',function() {
        if ($(window).scrollTop() > 100) {
            $('.menu_nav_none').addClass('menu_nav_block');
        } else {
            $('.menu_nav_none').removeClass('menu_nav_block');
        }
    });

    $(window).on('scroll',function() {
        if ($(window).scrollTop() > 100) {
            $('.top_menu_nav').addClass('fixed_menu_nav');
        } else {
            $('.top_menu_nav').removeClass('fixed_menu_nav');
        }
    });

    /*
    function getInfo(){ 
        // 获取屏幕
        var s = "";   
        s += " 网页可见区域宽："+ document.body.clientWidth+"\n";    
        s += " 网页可见区域高："+ document.body.clientHeight+"\n";    
        s += " 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)"+"\n";    
        s += " 网页可见区域高："+ document.body.offsetHeight + " (包括边线的宽)"+"\n";    
        s += " 网页正文全文宽："+ document.body.scrollWidth+"\n";    
        s += " 网页正文全文高："+ document.body.scrollHeight+"\n";    
        s += " 网页被卷去的高(ff)："+ document.body.scrollTop+"\n";    
        s += " 网页被卷去的高(ie)："+ document.documentElement.scrollTop+"\n";    
        s += " 网页被卷去的左："+ document.body.scrollLeft+"\n";    
        s += " 网页正文部分上："+ window.screenTop+"\n";    
        s += " 网页正文部分左："+ window.screenLeft+"\n";    
        s += " 屏幕分辨率的高："+ window.screen.height+"\n";    
        s += " 屏幕分辨率的宽："+ window.screen.width+"\n";    
        s += " 屏幕可用工作区高度："+ window.screen.availHeight+"\n";    
        s += " 屏幕可用工作区宽度："+ window.screen.availWidth+"\n";    
        s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色"+"\n";    
        s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸"+"\n";    
        alert (s);
    }
    getInfo();*/
});

// product_detail 轮播图
$(document).ready(function() {
    var owl = $("#owl-product_detail");
    owl.owlCarousel({
        // 设置响应屏幕显示多少个
        itemsCustom : [
            [0, 1],
            [400, 1],
            [767, 2],
            [991, 4],
            [1200, 4],
            [1920, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : true,

        //数组[“prev”,”next”]设置“上一个”、“下一个”文字，默认是[“prev”,”next”]
        navigationText : ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],

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

    /*$('.center').slick({
        autoplay: false, // 自动播放
        centerMode: true, //中心模式
        centerPadding: '50px', //中心模式左右内边距
        slidesToShow: 2, //幻灯片每屏显示个数
        slidesToScroll: 1, //幻灯片每次滑动个数
        slide: '.figure_img', //滑动元素或class名字、id名
        vertical: false, //垂直方向
        swipe: true, //移动设备滑动事件
        touchMove: true, //触摸滑动
        dots: true, //指示点
        fade: false, //淡入淡出
        arrows: true, //左右箭头
        //响应
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, 
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });*/

    //honor
    var owl = $("#owl-honor");
    owl.owlCarousel({
        // 设置响应屏幕显示多少个
        itemsCustom : [
            [0, 1],
            [500, 2], // >= 500,2个
            [768, 3], // >= 768,3个
            [992, 4], // >= 992,4个
            [1200, 4], // >= 1200,4个
            [1920, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : true,

        //数组[“prev”,”next”]设置“上一个”、“下一个”文字，默认是[“prev”,”next”]
        navigationText : ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],

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

    //development
    var owl = $("#owl-development");
    owl.owlCarousel({
        // 设置响应屏幕显示多少个
        itemsCustom : [
            [0, 1],
            [400, 2], 
            [768, 3], 
            [992, 4], 
            [1200, 1], 
            [1920, 1]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : false,

        //数组[“prev”,”next”]设置“上一个”、“下一个”文字，默认是[“prev”,”next”]
        navigationText : ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],

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

$(document).ready(function(){
    var swiper = new Swiper('.development_list', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

$(document).ready(function(){
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

    /*window.onload = function() {
        //配置
        var config = {
            vx: 4,  //小球x轴速度,正为右，负为左
            vy: 4,  //小球y轴速度
            height: 2,  //小球高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 200,     //点个数
            color: "121, 162, 185",     //点颜色
            stroke: "130,255,255",      //线条颜色
            dist: 6000,     //点吸附距离
            e_dist: 20000,  //鼠标吸附加速距离
            max_conn: 10    //点到点最大连接数
        }

        //调用
        CanvasParticle(config);
    }*/

    //客服
    //$("#kefu").load("kefu.html");
});

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
