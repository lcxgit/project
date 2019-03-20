

$(document).ready(function(){
    //slider_more_a
    $(".slider_more_a").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);
        return false; //隐藏的地址    
    });
    //slider_more_a
    
    //text_list
    $(".text_list").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);
        return false; //隐藏的地址    
    });
    //text_list
    
    //center
    $(".center").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);
        return false; //隐藏的地址    
    });
    //center
    
    //bottom
    $(".bottom").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);
        return false; //隐藏的地址    
    });
    //bottom
    
    //footer_logo_a
    // $(".footer_logo_a").click(function() {    
    //     $("html, body").animate({
    //         scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
    //     },
    //     500);
    //     return false; //不要这句会有点卡顿    
    // });
    //footer_logo_a

    //导航栏滑动侦测
    /*$(window).on('scroll',function() {
        if ($(window).scrollTop() > 20) {
            $('.header').addClass('top_nav');
        } else {
            $('.header').removeClass('top_nav');
        }
    });*/
    //导航栏滑动侦测
})

//首页头部轮播图
$(document).ready(function() {
    var swiper = new Swiper('.slider_img_list', {
        centeredSlides: true,
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
});
/*
$(document).ready(function() {
    var owl = $("#owl-case_detail");
    owl.owlCarousel({
        // 设置响应屏幕显示多少个
        itemsCustom : [
            [0, 1],
            [400, 2],
            [767, 3],
            [991, 4],
            [1200, 4],
            [1920, 4]
        ],

        // 布尔值false显示“上一个”、“下一个”
        navigation : false,

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
});*/
//首页头部轮播图

document.write("<scr"+"ipt src='js/jquery-tab.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

$(document).ready(function(){
    //index_product_tab
    $(function(){
        $('.index_product_tab').tabify();
    })
    //index_product_tab
    
    //index_product
    var swiper = new Swiper('.index_product_1', {
        effect: 'slide', //动画
        spaceBetween: 30, //间隔距离
        slidesPerView: 4, //显示3个
        //自动播放
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //index_product
})

