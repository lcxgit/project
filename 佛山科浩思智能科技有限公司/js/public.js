
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

$(document).ready(function(){

    //导航栏滑动侦测
    $(window).on('scroll',function() {
        if ($(window).scrollTop() > 20) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });
    //导航栏滑动侦测

    // mobile nav
    $('.wpb-mobile-menu').slicknav({
        prependTo: '.navbar_header',
        parentTag: 'a',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="fa fa-angle-right"></i>',
        openedSymbol: '<i class="fa fa-angle-down"></i>',
    });
    // mobile nav

    //honor_list
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    //honor_list

    /*
    //product_detail_img_1
    var swiper = new Swiper('.product_detail_img_1', {
        effect: 'slide', //动画
        spaceBetween: 0, //间隔距离
        slidesPerView: 1, //显示个数
        loop: true, //循环
        //自动播放
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //product_detail_img_1

    //product_detail_img_2
    var swiper = new Swiper('.product_detail_img_2', {
        effect: 'slide', //动画
        spaceBetween: 0, //间隔距离
        slidesPerView: 1, //显示个数
        loop: true, //循环
        //自动播放
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //product_detail_img_2

    //图片放大镜
    // $(function() {
    //     $('[data-spzoom]').spzoom();
    // });
    $('.detail_img .big_img').zoom({})

    if(window.screen.width >= 768) {
        $('.details_img').imagezoomsl({
            zoomrange: [3, 3]
        });
    }
    //图片放大镜

    // 产品详情tab
    $(".product_detail_main .right .nav li").mouseenter(function () {
        //两件事件
        $(this).addClass("active").siblings().removeClass("active");
        var id = $(this).index();
        $(".tab-pane").eq(id).addClass("fade show active").siblings().removeClass("fade show active");
    });

    // 产品详情tab
    */

    //$("#kefu").load("kefu.html");
    
    //footer_more
    // $(".footer_more").click(function() {    
    //     $("html, body").animate({
    //         scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
    //     },
    //     500);
    //     return false; //隐藏的地址    
    // });
    //footer_more

})

/*
// 产品筛选菜单
$(document).ready(function() {
    $("#select1 .li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("all")) {
            $("#selectA").remove();
        } else {
            var copyThisA = $(this).clone();
            if ($("#selectA").length > 0) {
                $("#selectA a").html($(this).text());
            } else {
                $(".result .ul").append(copyThisA.attr("id", "selectA"));
            }
        }
    });
    $("#select2 .li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("all")) {
            $("#selectB").remove();
        } else {
            var copyThisB = $(this).clone();
            if ($("#selectB").length > 0) {
                $("#selectB a").html($(this).text());
            } else {
                $(".result .ul").append(copyThisB.attr("id", "selectB"));
            }
        }
    });
    $("#select3 .li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("all")) {
            $("#selectC").remove();
        } else {
            var copyThisC = $(this).clone();
            if ($("#selectC").length > 0) {
                $("#selectC a").html($(this).text());
            } else {
                $(".result .ul").append(copyThisC.attr("id", "selectC"));
            }
        }
    });

    $("#selectA").live("click",
    function() {
        $(this).remove();
        $("#select1 .all").addClass("selected").siblings().removeClass("selected");
    });
    $("#selectB").live("click",
    function() {
        $(this).remove();
        $("#select2 .all").addClass("selected").siblings().removeClass("selected");
    });
    $("#selectC").live("click",
    function() {
        $(this).remove();
        $("#select3 .all").addClass("selected").siblings().removeClass("selected");
    });
    $(".select .li").live("click",
    function() {
        if ($(".result .ul li").length > 1) {
            $(".no").hide();
        } else {
            $(".no").show();
        }
    });
});
// 产品筛选菜单
*/

/*
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
});*/


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


/*网页禁止右键代码*/
/*
    最常见查看网站源码的无非有这四种：
    鼠标右键单击
    F12
    Ctrl+U
    Ctrl+Shift+I
*/
/*
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


