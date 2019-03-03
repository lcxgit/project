
//大图
var swiper = new Swiper('.slider_img_list', {
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
//大图

//新闻
var swiper = new Swiper('.news_list', {
    effect: 'slide', //动画
    spaceBetween: 30, //间隔距离
    slidesPerView: 3, //显示3个
    //自动播放
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1199: {
          slidesPerView: 2,
          spaceBetween: 40,
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
//新闻


//fullPage 屏幕滑动
document.write("<scr"+"ipt src='js/jquery.fullPage.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

$(document).ready(function() {
    $(function(){
        $('#main_page').fullpage({
            'scrollBar': true, //隐藏滚动条
            'continuousVertical': true, //false 是否循环滚动
            //'verticalCentered': true, //内容是否垂直居中 false
            'css3': true, //是否使用 CSS3 transforms 滚动
            //'sectionsColor' : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'], //设置背景颜色
            //'sectionsColor': ['#F0F2F4', '#1bbc9b', '#fff', '#fff', '#fff', '#fff'], //设置背景颜色
            'navigation': true, //是否显示项目导航
            'navigationPosition': 'right', //项目导航的位置，可选 left 或 right
            'navigationTooltips': ['网站首页', '关于我们', '集团业务', '产品服务', '新闻中心', '联系方式'], //定义锚名称
            'anchors': ['home', 'about', 'business', 'product', 'news', 'contact'], //定义锚链接
        });

        $(window).resize(function(){
            autoScrolling();
        });

        function autoScrolling(){
            var $ww = $(window).width();
            if($ww < 1200){
                $.fn.fullpage.setAutoScrolling(false);
            } else {
                $.fn.fullpage.setAutoScrolling(true);
            }
        }

        autoScrolling();
    });
});
//fullPage 屏幕滑动
