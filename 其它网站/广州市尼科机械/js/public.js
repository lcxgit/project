
$(document).ready(function(){

    //导航栏滑动侦测
    /*$(window).on('scroll',function() {
        if ($(window).scrollTop() > 20) {
            $('.header').addClass('top_nav');
        } else {
            $('.header').removeClass('top_nav');
        }
    });*/
    //导航栏滑动侦测

    //首页轮播图1
    $(".slider").owlCarousel({
        slideSpeed : 300, //滑动速度
        paginationSpeed : 400, //分页速度
        singleItem: true, //单项
        items : 1, //显示一个
        autoplay: true, //自动播放
        autoplayTimeout: 5000, //3秒
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

    // aside_nav
    var ary = location.href.split("&");
    jQuery(".aside_nav").slide({
        titCell: ".h3",
        targetCell: ".ul",
        effect: ary[1],
        delayTime: ary[3],
        trigger: ary[3],
        triggerTime: ary[3],
        defaultPlay: ary[5],
        returnDefault: ary[6],
        easing: ary[7]
    });
    // aside_nav

    // index_product_tab
    jQuery(".index_product_tab").slide({
        titCell: ".left_nav .aside_nav .h3",
        mainCell: ".tab_main",
        effect: ary[1],
        autoPlay: ary[2],
        trigger: ary[3],
        easing: ary[4],
        delayTime: ary[5],
        pnLoop: ary[6]
    });
    // index_product_tab

    // index_case_tab
    jQuery(".index_case_tab").slide({
        effect: ary[1],
        autoPlay: ary[2],
        trigger: ary[3],
        easing: ary[4],
        delayTime: ary[5],
        pnLoop: ary[6]
    });
    // index_case_tab

    // tab1
    jQuery(".tab1").slide({
        effect: ary[1],
        autoPlay: ary[2],
        trigger: ary[3],
        easing: ary[4],
        delayTime: ary[5],
        pnLoop: ary[6]
    });
    // tab1

    // tab2
    jQuery(".tab2").slide({
        effect: ary[1],
        autoPlay: ary[2],
        trigger: ary[3],
        easing: ary[4],
        delayTime: ary[5],
        pnLoop: ary[6]
    });
    // tab2

    jQuery(".index_about_list").slide({
        titCell: ".next_prev a",
        mainCell: ".ul",
        autoPlay: true,
        effect: "leftMarquee",
        vis: 4,
        interTime: 30,
        trigger: "click"
    });

    //产品详情定位
    /*$.fn.fixedDiv = function (actCls) {
        var pos = 0,
        that = $(this),
        topVal;

        if (that.length > 0) {
            topVal = that.offset().top;
        }

        function fix() {
            pos = $(document).scrollTop();

            if (pos > topVal) {
                that.addClass(actCls);
                if (!window.XMLHttpRequest) {
                    that.css({
                        position: 'absolute',
                        top: pos
                    });
                }
            } else {
                that.removeClass(actCls);
                if (!window.XMLHttpRequest) {
                    that.css({
                        position: 'static',
                        top: 'auto'
                    });
                }

            }
        }
        fix();

        $(window).scroll(fix);
    }
    $('.top').fixedDiv('fix_div');*/
    //产品详情定位

    //$("#kefu").load("kefu.html");
})

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


