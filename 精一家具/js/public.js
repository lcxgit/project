
$(document).ready(function(){
    //a_messages_form
    $(".a_messages_form").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);
        return false; //隐藏的地址    
    });
    //a_messages_form
    
    //footer_more
    $(".footer_more").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);
        return false; //隐藏的地址    
    });
    //footer_more
    
    //search
    $(window).load(function () {
        $('.btn_search').on('click tap', function () {
            $('.nav-content').toggleClass('showNav hideNav').removeClass('hidden');
            $(this).toggleClass('animated');
        });
    });
    //search

    //首页头部大图
    var swiper = new Swiper('.slider_img_product_detail', {
        effect: 'slide', //动画
        spaceBetween: 0, //间隔距离
        slidesPerView: 1, //显示3个
        //自动播放
        autoplay: {
            delay: 3000,
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
    //首页头部大图

})

//login_regist
$(document).ready(function() {
    //打开会员登录 
    $("#login_start").click(function() {
        $("#regist_container").hide();
        $("#_close").show();
        $("#_start").animate({
            height: '70%',
            width: '50%'
            // height: '230px',
            // width: '400px'
        }, 300, function() {
            $("#login_container").show(300);
            $("#_close").animate({
                height: '30px',
                width: '30px'
            }, 300);
        });
    });
    //打开会员注册
    $("#Regist_start_").click(function() {
        $("#login_container").hide();
        $("#_close").show();
        $("#_start").animate({
            height: '500px',
            width: '400px'
        }, 300, function() {
            $("#regist_container").show(300);
            $("#_close").animate({
                height: '40px',
                width: '40px'
            }, 300);
        });
    });
    //关闭
    $("#_close").click(function() {
        
        $("#_close").animate({
            height: '0px',
            width: '0px'
        }, 300, function() {
            $("#_close").hide(300);
            $("#login_container").hide(300);
            $("#regist_container").hide(300);
            $("#_start").animate({
                left: '0px',
                height: '0px',
                width: '0px'
            }, 300);
        });
    });
    //去 注册
    $("#toRegist").click(function(){
        $("#login_container").hide(300);
        $("#regist_container").show(300);
    });
    //去 登录
    $("#toLogin").click(function(){
        $("#regist_container").hide(300);
        $("#login_container").show(300);
    });
});

var clock = '';
var nums = 30;
var btn;
function sendCode(thisBtn) {
    btn = thisBtn;
    btn.disabled = true; //将按钮置为不可点击
    btn.value = '重新获取（'+nums+'）';
    clock = setInterval(doLoop, 1000); //一秒执行一次
}

function doLoop() {
    nums--;
    if (nums > 0) {
        btn.value = '重新获取（'+nums+'）';
    } else {
        clearInterval(clock); //清除js定时器
        btn.disabled = false;
        btn.value = '点击发送验证码';
        nums = 10; //重置时间
    }
}

//login_regist

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

/*客服*/
$(document).ready(function(){
    // 鼠标经过下拉
    //$.fn.bootstrapDropdownHover();
    
    //$("#kefu").load("kefu.html");
});
/*客服*/

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
