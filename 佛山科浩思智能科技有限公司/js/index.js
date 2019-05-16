


$(document).ready(function() {
    //首页头部大图
    var swiper = new Swiper('.slider_img_list', {
        effect: 'slide', //动画
        spaceBetween: 0, //间隔距离
        slidesPerView: 1, //显示个数
        loop: true, //循环
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
    //首页头部大图

    // index_solution_list
    $(".index_solution_list").owlCarousel({
        autoplay: true, //自动播放
        autoplayTimeout: 3000, //3秒
        autoplayHoverPause: false, //自动播放悬停暂停
        autoplaySpeed: false, //自动播放速度
        margin: 15, //距离
        items : 4, //显示4个
        loop: true, //循环
        dots: true, //点
        nav: true, //导航
        navigation : true, //显示下一个和上一个按钮
        navText: [
            '<img src="images/owl_prev.png" alt="" />',
            '<img src="images/owl_next.png" alt="" />'
            // '<i class="fa fa-angle-left"></i>',
            // '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            401:{
                items:2,
                nav:false
            },
            768:{
                items:3,
                nav:false
            },
            992:{
                items:3,
                nav:false,
                dots: true
            },
            1200:{
                items:4,
                nav:true,
                dots: false
            }
        }
    });
    // index_solution_list

});


//fullPage 屏幕滑动
document.writeln("<link rel=\'stylesheet\' href=\'css/jquery.fullPage.css\' />");
document.write("<scr"+"ipt src='js/jquery.fullPage.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
$(document).ready(function() {
    var main_page = new fullpage ('#main_pages', {
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
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'], //设置背景颜色
        anchors: ['home', 'produc', 'tabout', 'service', 'solution', 'news', 'contact'], //定义锚链接
        navigationTooltips: ['首页', '产品中心', '关于我们', '服务支持', '解决方案', '行业资讯', '联系我们'], //定义锚名称
        showActiveTooltip: true, //显示活动负载
        //slideSelector: '.slide', //自定义选择器
        sectionSelector: '.pages' //自定义选择器
    });
});
//fullPage 屏幕滑动
