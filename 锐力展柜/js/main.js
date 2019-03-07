//top
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
//top

//成功案例
$(function() {
    window.onload = function() {
        var swiper = new Swiper('.swiper_img_slide',{
            autoplay:3000,
            speed:1000,
            autoplayDisableOnInteraction : false,
            loop:true,
            centeredSlides : true,
            slidesPerView:2,
            pagination : '.swiper-pagination',
            paginationClickable:true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            onInit:function(swiper){
                swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
            },
            breakpoints: { 
                668: {
                    slidesPerView: 1,
                }
            }
        });
    }
});
//Mobile
/*
$(document).ready(function($) {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });
});*/
//Mobile
//成功案例

//图片滑动
$(function(){
    $('#owl-example_1').owlCarousel({
        autoPlay: true,
        items : 3,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1]
    });
});
$(function(){
    $('#owl-example_2').owlCarousel({
        autoPlay: true,
        items : 6,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1]
        // navigation: true,
        // navigationText: ["上一个","下一个"]
    });
});
$(function(){
    $('#owl-example_3').owlCarousel({
        autoPlay: true,
        items : 2,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1]
    });
});

//$("body").data("page", "frontpage");
//图片滑动

// 动画
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
// 动画


//首页关于图片滑动
$(function() {
    var swiper = new Swiper('.swiper_img', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
});
//首页关于图片滑动

//首页广告图片
$(document).ready(function() {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
//首页广告图片

//产品详情图片轮播
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
//产品详情图片轮播

//导航栏滑动侦测
$(window).scroll(function() {
    if ($(".header").offset().top > 50) {
        $(".header_navbar").addClass("top_nav");
    } else {
        $(".header_navbar").removeClass("top_nav");
    }
})
//导航栏滑动侦测
