
//首页头部大图
$(document).ready(function() {
    var swiper = new Swiper('.slider_img_list', {
        loop: true, //循环
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
    var main_page = new fullpage ('#main_page', {
        //licenseKey:'OPEN-SOURCE-GPLV3-LICENSE'
        menu: false, //菜单
        responsive: 992, //到992像素响应，变回正常的滚动
        scrollingSpeed: 500, //滚动速度
        touchSensitivity: 5, //触摸灵敏度
        keyboardScrolling: true, //键盘滚动
        scrollBar: true, //隐藏滚动条 false
        loopTop: true, //向上循环滚动
        loopBottom: true, //向下循环滚动
        continuousVertical: false,//是否循环滚动,不兼容loopTop和loopBottom选项
        verticalCentered: true, //内容是否垂直居中 false
        navigation: true, //是否显示项目导航
        navigationPosition: 'right', //项目导航的位置，可选 left 或 right
        css3: true, //是否使用 CSS3 transforms 滚动
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'], //设置背景颜色
        anchors: ['home', 'product', 'manufacture', 'about', 'news_cases', 'footer'], //定义锚链接
        navigationTooltips: ['网站首页', '产品', '新制造', '关于我们', '资讯/案例', '底部导航'], //定义锚名称
        showActiveTooltip: true, //显示活动负载
        //slideSelector: '.slide', //自定义选择器
        sectionSelector: '.pages' //自定义选择器
    });
});
//fullPage 屏幕滑动

//预加载
document.write("<scr"+"ipt src='js/fakeLoader.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
/*
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
*/