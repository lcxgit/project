
//首页头部大图
$(document).ready(function() {
    var swiper = new Swiper('.slider_img_list', {
        effect: 'slide', //动画
        spaceBetween: 0, //间隔距离
        slidesPerView: 1, //显示3个
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
});
//首页头部大图

//slider_img_cases
$(document).ready(function() {
    var swiper = new Swiper('.slider_img_cases', {
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
//slider_img_cases


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
            'navigationTooltips': ['网站首页', '产品', '新制造', '关于我们', '资讯/案例', '底部导航'], //定义锚名称
            'anchors': ['home', 'product', 'manufacture', 'about', 'news_cases', 'footer'], //定义锚链接
        });

        $(window).resize(function(){
            autoScrolling();
        });

        function autoScrolling(){
            var $ww = $(window).width();
            if($ww < 991){
                $.fn.fullpage.setAutoScrolling(false);
            } else {
                $.fn.fullpage.setAutoScrolling(true);
            }
        }

        autoScrolling();
    });
});
//fullPage 屏幕滑动

//预加载
//document.write("<scr"+"ipt src='js/fakeLoader.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

$(document).ready(function() {
    $('.loading .door').addClass('opened');
    setTimeout(function(){
        $('.loading').addClass('hidden');
    }, 4000);
});
document.writeln("<div class=\'loading\'>");
document.writeln("<img class=\'loader_img\' src=\'images/logo_gif.gif\' alt=\'预加载\' />");
document.writeln("<div class=\'door top\'></div>");
document.writeln("<div class=\'door down\'></div>");
document.writeln("</div>");
