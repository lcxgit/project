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

//荣誉证书
$(document).ready(function() {
    $('.honor_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1185,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        , {
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
    $('.cooperation_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1185,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        , {
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
//荣誉证书


//$(document).ready(function(){})

//图片滑动
//合作伙伴
/*
$(function(){
    $('#owl-example_1').owlCarousel({
        autoPlay: true,
        items : 6,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1]
    });
});
//合作伙伴

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
*/
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

// TimelineMax
// $(function () {
//     var TimelineMax = new TimelineMax();
// });

//导航栏滑动侦测

$(window).scroll(function() {
    if ($(".header").offset().top > 50) {
        $(".header_navbar").addClass("top_nav");
    } else {
        $(".header_navbar").removeClass("top_nav");
    }
})
//导航栏滑动侦测


// 移动端  Mmenu
$(function() {
    $('nav#mmenu').mmenu({
        extensions  : [ 'effect-slide-menu', 'pageshadow' ],
        counters    : false,
        navbar      : {
            title       : '菜单',
        },
        navbars     : [
             {
                position    : 'top',
                content     : [
                    'prev',
                    'title',
                    'close'
                ]
            }, {
                position    : 'bottom',
                content     : [
                    ''
                ]
            } 
        ]
    });
});
// 移动端  Mmenu



/*客服*/
$(document).ready(function(){
    $("#kefu").load("kefu.html");
    $("#Mobile_menu").load("Mobile_menu.html");
})
/*客服*/


/*share 自定义分享到第三方SNS平台*/
$(document).ready(function(){
    $('#share-1').share();
    // $('#share-4').share();
})
/*share 自定义分享到第三方SNS平台*/



var _content_news = []; //临时存储li循环内容
var lanren = {
    _default: 4, //默认显示图片个数
    _loading: 4,  //每次点击按钮后加载的个数
    init: function () {
        var lis = $(".news_list_content .hidden .news_content");
        $(".news_list_content .list_news_content").html("");
        for (var n = 0; n < lanren._default; n++) {
            lis.eq(n).appendTo(".news_list_content .list_news_content");
        }
        $(".news_list_content .list_news_content img").each(function () {
            $(this).attr('src', $(this).attr('realSrc'));
        })
        for (var i = lanren._default; i < lis.length; i++) {
            _content_news.push(lis.eq(i));
        }
        $(".news_list_content .news_list_content").html("");
    },
    loadMore: function () {
        var mLis = $(".news_list_content .list_news_content .news_content").length;
        for (var i = 0; i < lanren._loading; i++) {
            var target = _content_news.shift();
            if (!target) {
                $('.news_list_content .news_list_more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".news_list_content .list_news_content").append(target);
            $(".news_list_content .list_news_content img").eq(mLis + i).each(function () {
                $(this).attr('src', $(this).attr('realSrc'));
            });
        }
    }
}
lanren.init();

/*技术优势*/
$(document).ready(function(){

    $('.ab_sec2_l>ul>li').width($('.ab_sec2_l').width());
    var ab2W1=$('.ab_sec2_l>ul>li').width();
    var ab2S1=$('.ab_sec2_l>ul>li').size();
    $('.ab_sec2_l>ul').width(ab2W1*ab2W1+1000);

    $('.ab_sec2_r>ul>li').width($('.ab_sec2_r').width());
    var ab2W2=$('.ab_sec2_r>ul>li').width();
    var ab2S2=$('.ab_sec2_r>ul>li').size();
    $('.ab_sec2_r>ul').width(ab2W2*ab2S2+1000);
  
    if($(window).width()<767){
    }else{ 
        $('.ab_sec2_r>ul>li').height($('.ab_sec2_l>ul>li').width()*798/750);
    }

  $(window).resize(function(){
      
    $('.ab_sec2_l>ul>li').width($('.ab_sec2_l').width());
    var ab2W1=$('.ab_sec2_l>ul>li').width();
    var ab2S1=$('.ab_sec2_l>ul>li').size();
    $('.ab_sec2_l>ul').width(ab2W1*ab2W1+1000);

    $('.ab_sec2_r>ul>li').width($('.ab_sec2_r').width());
    var ab2W2=$('.ab_sec2_r>ul>li').width();
    var ab2S2=$('.ab_sec2_r>ul>li').size();
    $('.ab_sec2_r>ul').width(ab2W2*ab2S2+1000);

    if($(window).width()<767){
    }else{ 
        $('.ab_sec2_r>ul>li').height($('.ab_sec2_l>ul>li').width()*798/750);
        }
    })
  
    $('.ab_sec2_next').click(function(){
        $('.ab_sec2_l>ul').stop(true,true).animate({marginLeft:-ab2W1},800,function(){
            $('.ab_sec2_l>ul').find('li:first-child').appendTo($('.ab_sec2_l>ul'));
            $('.ab_sec2_l>ul').css({marginLeft:0})
        })
        $('.ab_sec2_r>ul').stop(true,true).animate({marginLeft:-ab2W2},800,function(){
            $('.ab_sec2_r>ul').find('li:first-child').appendTo($('.ab_sec2_r>ul'));
            $('.ab_sec2_r>ul').css({marginLeft:0})
        })
    })
  
    $('.ab_sec2_prev').click(function(){
        $('.ab_sec2_l>ul').stop(true,true).animate({marginLeft:-ab2W1},0,function(){
            $('.ab_sec2_l>ul').find('li:last-child').prependTo($('.ab_sec2_l>ul'));
            $('.ab_sec2_l>ul').stop(true,true).animate({marginLeft:0},800)
        })
            $('.ab_sec2_r>ul').stop(true,true).animate({marginLeft:-ab2W2},0,function(){
            $('.ab_sec2_r>ul').find('li:last-child').prependTo($('.ab_sec2_r>ul'));
            $('.ab_sec2_r>ul').stop(true,true).animate({marginLeft:0},800)
        })
    })      
})
/*技术优势*/












