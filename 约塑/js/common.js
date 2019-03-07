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



(function(){
	windowWidth = $(window).width();
	
})();
$(document).ready(function(){
	npos = $(window).scrollTop();
	SW	=  $(window).width();
	SH	=  $(window).height();	
	
	//Search
	$(".btn_search_open").on("click", function(){		
		if(!$(".h_search_cont").hasClass("on")){
			$(".h_search_cont").addClass("on");
			$(".h_search_cont").find("input[type='text']").focus();
			if($('.main_visual_cover').length > 0 && $('#wrap').offset().top > npos){
				//console.log($('#wrap').offset().top);
				$('html,body').stop().animate({scrollTop:$('#wrap').offset().top},300,'easeOutExpo')
			}
		}
		return false;
	});
	$(".btn_search_close").on("click", function(){
		$(".h_search_cont").removeClass("on");
		return false;
	});	
	
	//Moble nav
	$(".btn_m_list").on("click", function(){
		$(this).addClass("on");
		$('.m_gnb').addClass("on");
		$('.m_gnb ul li').addClass("effect");
	});	
	$(".btn_close a").on("click", function(){
		$(".btn_m_list").removeClass("on");
		$('.m_gnb').removeClass("on");
		$('.m_gnb ul li').removeClass("effect");
	});	
	$('.subbtn').click(function(){
	   if(!$(this).parent().hasClass('on')){
		  $(this).parent().addClass('on').find('.submenu').stop(true,true).slideDown(500);
		  $(this).children().attr('src','images/snb_close.png')
	   }else{
		  $(this).parent().removeClass('on').find('.submenu').stop(true,true).slideUp(500);
		  $(this).children().attr('src','images/snb_view.png')
	   }
	});
	$('.subbtn1').click(function(){
	   if(!$(this).parent().hasClass('on')){
		  $(this).parent().addClass('on').find('.submenu').stop(true,true).slideDown(500);
		  $(this).attr('src','images/snb_close.png')
	   }else{
		  $(this).parent().removeClass('on').find('.submenu').stop(true,true).slideUp(500);
		  $(this).attr('src','images/snb_view.png')
	   }
	});
	//Login
	/*$('.a1').click(function(){
	   if(!$(this).hasClass('on')){
		  $('.a1').addClass('on');
		  $('.head_login').stop(true,true).slideDown(500);
		  $('html,body').animate({scrollTop:0},300);return false;
	   }else{
		  $('.a1').removeClass('on');
		  $('.head_login').stop(true,true).slideUp(500);
		  //$('html,body').animate({scrollTop:0},300);return false;
	   }
	});
	$('.dlsub .loginsub').click(function(){
		  $(".dlhzi").show();
		  $(".zchzi").hide();
		  $(".zcbtn").show();
		  $(".dlbtn").hide();
	});
	$('.zcsub .loginsub').click(function(){
		  $(".dlhzi").hide();
		  $(".zchzi").show();
		  $(".zcbtn").hide();
		  $(".dlbtn").show();
	});
	*/
	//Banner scrollTop
	$('.clickbtn img').click(function(){
		var sctouH = $(".main_visual_cover").height();
		$('html,body').animate({scrollTop:sctouH}, 1000);return false;
	});  
	
	//PC nav
	$('#menu').children('li.erji').hover(function() {
		$('#menu').children('li.erji').removeClass('hover');
		$(this).addClass('hover');
		$(this).children('.nav-body').stop(true,true).slideDown();
		$('#float1').show();
	},function() {
		$(this).removeClass('hover');
		$(this).children('.nav-body').slideUp();
		$('#float1').hide();
	});
	
	hover_tab($('.ap_list .irbox'),$('.a_title a'),'on');
	function hover_tab(obj,btn,add_class){
		obj.eq(0).addClass('on');
		btn.eq(0).addClass(add_class);
		btn.eq(0).siblings().removeClass(add_class);
		btn.hover(function(){
				if(!$(this).hasClass(add_class)){
					$(this).addClass(add_class);
					$(this).siblings().removeClass(add_class);
					obj.removeClass('on');
					obj.eq(	$(this).index()).addClass('on');
					}
					
			})
	 }
	
/*	click_tab($('.product_slide_wrap .tab_cont'),$('.product_tab ul li'),'on');
	function click_tab(obj,btn,add_class){
		obj.eq(0).show();
		btn.eq(0).addClass(add_class);
		btn.eq(0).siblings().removeClass(add_class);
		btn.click(function(){
				if(!$(this).hasClass(add_class)){
					$(this).addClass(add_class);
					$(this).siblings().removeClass(add_class);
					obj.hide();
					obj.eq(	$(this).index()).show();
					}
					
			})
	 }*/
	
		  
});//end ready


//导航栏滑动侦测
// $(window).scroll(function() {
//     if ($(".header").offset().top > 850) {
//         $(".header").addClass("fixed");
//     } else {
//         $(".header").removeClass("fixed");
//     }
// })
$(window).scroll(function(){
  var h=$(document).scrollTop();
  var j=window.screen.height;
  var o=$(".boxmain").offset().top;
  if(h>o-15){
    $('#header').addClass('fixed');
    $('.h_share').addClass('on');
    $('.logo1').addClass('on');
  }else{
    $('#header').removeClass('fixed');
    $('.h_share').removeClass('on');
    $('.logo1').removeClass('on');
  }
});
//导航栏滑动侦测

/*header*/
// $(document).ready(function(){
//     $("#main_header_nav").load("main_header_nav.html");
// })
/*header*/

// 图片滑动
$(document).ready(function() {
	$('#owl-example_1').owlCarousel({
        autoPlay: true,
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1]
    });
    /*$("#owl-demo1").owlCarousel({
        items: 5,
        lazyLoad: true,
        navigation: true,
        autoPlay: true
    });
    $("#owl-demo2").owlCarousel({
        items: 5,
        lazyLoad: true,
        navigation: true,
        autoPlay: true
    });
    $("#owl-demo3").owlCarousel({
        items: 5,
        lazyLoad: true,
        navigation: true,
        autoPlay: true
    });
    $("#owl-demo4").owlCarousel({
        items: 5,
        lazyLoad: true,
        navigation: true,
        autoPlay: true
    });
    $("#owl-demo5").owlCarousel({
        items: 5,
        lazyLoad: true,
        navigation: true,
        autoPlay: true
    });
    $("#owl-demo6").owlCarousel({
        items: 5,
        lazyLoad: true,
        navigation: true,
        autoPlay: true
    });*/
});
// 图片滑动


/*Mobile导航栏*/
// $(document).ready(function(){
//     $("#mobile_menu").load("mobile_menu.html");
// })
/*Mobile导航栏*/

/* 新闻 */

var _content_news = []; //临时存储循环内容
var news_more_list = {
    _default:6, //默认显示图片个数
    _loading:6,  //每次点击按钮后加载的个数
    init:function(){
        var lis = $(".news_more_list .hidden .news_580");
        $(".news_more_list .list").html("");
        for(var n=0;n<news_more_list._default;n++){
            lis.eq(n).appendTo(".news_more_list .list");
        }
        $(".news_more_list .list img").each(function(){
            $(this).attr('src',$(this).attr('realSrc'));
        })
        for(var i=news_more_list._default;i<lis.length;i++){
            _content_news.push(lis.eq(i));
        }
        $(".news_more_list .news_more_list").html("");
    },
    loadMore:function(){
        var mLis = $(".news_more_list .list .news_580").length;
        for(var i =0;i<news_more_list._loading;i++){
            var target = _content_news.shift();
            if(!target){
                $('.news_more_list .more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".news_more_list .list").append(target);
            $(".news_more_list .list img").eq(mLis+i).each(function(){
                $(this).attr('src',$(this).attr('realSrc'));
            });
        }
    }
}
news_more_list.init();

/* 新闻 */

/* 产品 */
var _content_product = []; //临时存储循环内容
var product_more_list = {
    _default:6, //默认显示图片个数
    _loading:3,  //每次点击按钮后加载的个数
    init:function(){
        var lis = $(".product_more_list .hidden .product_280");
        $(".product_more_list .list").html("");
        for(var n=0;n<product_more_list._default;n++){
            lis.eq(n).appendTo(".product_more_list .list");
        }
        $(".product_more_list .list img").each(function(){
            $(this).attr('src',$(this).attr('realSrc'));
        })
        for(var i=product_more_list._default;i<lis.length;i++){
            _content_product.push(lis.eq(i));
        }
        $(".product_more_list .product_more_list").html("");
    },
    loadMore:function(){
        var mLis = $(".product_more_list .list .product_280").length;
        for(var i =0;i<product_more_list._loading;i++){
            var target = _content_product.shift();
            if(!target){
                $('.product_more_list .more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".product_more_list .list").append(target);
            $(".product_more_list .list img").eq(mLis+i).each(function(){
                $(this).attr('src',$(this).attr('realSrc'));
            });
        }
    }
}
product_more_list.init();
/* 产品 */

/* 精英集结 */
var _content_elites = []; //临时存储循环内容
var elites_more_list = {
    _default:3, //默认显示图片个数
    _loading:3,  //每次点击按钮后加载的个数
    init:function(){
        var lis = $(".elites_more_list .hidden .elites_img_text");
        $(".elites_more_list .list").html("");
        for(var n=0;n<elites_more_list._default;n++){
            lis.eq(n).appendTo(".elites_more_list .list");
        }
        $(".elites_more_list .list img").each(function(){
            $(this).attr('src',$(this).attr('realSrc'));
        })
        for(var i=elites_more_list._default;i<lis.length;i++){
            _content_elites.push(lis.eq(i));
        }
        $(".elites_more_list .elites_more_list").html("");
    },
    loadMore:function(){
        var mLis = $(".elites_more_list .list .elites_img_text").length;
        for(var i =0;i<elites_more_list._loading;i++){
            var target = _content_elites.shift();
            if(!target){
                $('.elites_more_list .more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".elites_more_list .list").append(target);
            $(".elites_more_list .list img").eq(mLis+i).each(function(){
                $(this).attr('src',$(this).attr('realSrc'));
            });
        }
    }
}
elites_more_list.init();
/* 精英集结 */

/* 代理风采 */
var _content_proxy = []; //临时存储循环内容
var proxy_more_list = {
    _default:8, //默认显示图片个数
    _loading:4,  //每次点击按钮后加载的个数
    init:function(){
        var lis = $(".proxy_more_list .hidden .proxy_img_text");
        $(".proxy_more_list .list").html("");
        for(var n=0;n<proxy_more_list._default;n++){
            lis.eq(n).appendTo(".proxy_more_list .list");
        }
        $(".proxy_more_list .list img").each(function(){
            $(this).attr('src',$(this).attr('realSrc'));
        })
        for(var i=proxy_more_list._default;i<lis.length;i++){
            _content_proxy.push(lis.eq(i));
        }
        $(".proxy_more_list .proxy_more_list").html("");
    },
    loadMore:function(){
        var mLis = $(".proxy_more_list .list .proxy_img_text").length;
        for(var i =0;i<proxy_more_list._loading;i++){
            var target = _content_proxy.shift();
            if(!target){
                $('.proxy_more_list .more').html("<p>全部加载完毕...</p>");
                break;
            }
            $(".proxy_more_list .list").append(target);
            $(".proxy_more_list .list img").eq(mLis+i).each(function(){
                $(this).attr('src',$(this).attr('realSrc'));
            });
        }
    }
}
proxy_more_list.init();
/* 代理风采 */


