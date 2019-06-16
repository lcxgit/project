
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

    //首页头部大图
    var swiper = new Swiper('.slider', {
        effect: 'slide', //动画
        spaceBetween: 0, //间隔距离
        slidesPerView: 1, //显示个数
        //loop: true, //循环
        //自动播放
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.slider_pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //首页头部大图

    //首页头部菜单
    jQuery(".nav_product_tab").slide({
        titCell: "li",
        mainCell: ".tab_main",
        pnLoop: true,
        delayTime: 500,
        easing: "swing",
        autoPlay: false, //true
        effect: "fade",
        trigger: "click" //mouseover
    });
    //首页头部菜单

    //index_well_product_main
    var swiper = new Swiper('.index_well_product_main', {
        effect: 'fade', //动画 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        spaceBetween: 0, //间隔距离
        slidesPerView: 1, //显示个数
        loop: true, //循环
        //自动播放
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.well_pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //index_well_product_main

    // index_product_tab
    //var ary = location.href.split("&");
    jQuery(".index_product_tab").slide({
        pnLoop: true,
        delayTime: 500,
        easing: "swing",
        autoPlay: false, //true
        effect: "fade",
        trigger: "click" //mouseover
    });
    // index_product_tab

    // index_certificate_list
    $(".index_certificate_list").owlCarousel({
        items : 4, //显示
        margin: 20, //间距
        loop: true, //循环
        autoplay: true, //自动播放
        autoplayTimeout: 5000, //秒
        autoplayHoverPause: false, //自动播放悬停暂停
        autoplaySpeed: false, //自动播放速度
        nav: false, //导航
        navigation : false, //显示下一个和上一个按钮
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });
    // index_certificate_list
    
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


