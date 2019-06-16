
/*动画*/
//new WOW().init();
$(document).ready(function(){
    var wow = new WOW({
        boxClass:     'wow',      // 动画元素css类（默认是 wow）
        animateClass: 'animated', // 动画css类（默认为动画）
        offset:       0,          // 触发动画时到元素的距离（默认为0）
        mobile:       true,       // 在移动设备上触发动画（默认为true）
        live:         true,       // 对异步加载的内容执行操作（默认为true）
        callback:     function(box) {
            //每次动画启动时都会触发回调
            //传入的参数是动画的DOM节点
        },
        scrollContainer: null //可选的滚动容器选择器，否则使用window
    });
    wow.init();

})
/*动画*/ 

$(document).ready(function(){

    //导航栏滑动侦测
    /**/$(window).on('scroll',function() {
        if ($(window).scrollTop() > 20) {
            $('.header').addClass('top_nav');
        } else {
            $('.header').removeClass('top_nav');
        }
    });
    //导航栏滑动侦测

    // pc导航
    $('.btn-nav').on('click tap',
    function() {
        $('.nav-content').toggleClass('showNav hideNav').removeClass('hidden');
        $(this).toggleClass('animated');
    });
    // pc导航

    //mobile nav
    $(".codehim-dropdown").CodehimDropdown(); 
    

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
            el: '.slider_pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //首页头部大图

    // 语言切换
    $('#cd-dropdown').dropdown( {
        gutter : 5,
        stack : false,
        slidingIn : 100
    });
    // 语言切换

    // 搜索
    ;(function(window) {

        'use strict';

        var mainContainer = document.querySelector('.main-wrap'),
            openCtrl = document.getElementById('btn-search'),
            closeCtrl = document.getElementById('btn-search-close'),
            searchContainer = document.querySelector('.search'),
            inputSearch = searchContainer.querySelector('.search__input');

        function init() {
            initEvents();   
        }

        function initEvents() {
            openCtrl.addEventListener('click', openSearch);
            closeCtrl.addEventListener('click', closeSearch);
            document.addEventListener('keyup', function(ev) {
                // escape key.
                if( ev.keyCode == 27 ) {
                    closeSearch();
                }
            });
        }

        function openSearch() {
            searchContainer.classList.add('search--open');
            setTimeout(function() {
                inputSearch.focus();
            }, 600);
        }

        function closeSearch() {
            searchContainer.classList.remove('search--open');
            inputSearch.blur();
            inputSearch.value = '';
        }

        init();

    })(window);
    document.documentElement.className = 'js';
    // 搜索

    //产品
    var swiper = new Swiper('.index_product_list', {
        effect: 'slide', //动画
        spaceBetween: 20, //间隔距离
        slidesPerView: 2, //显示
        loop: true, //循环
        //自动播放
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.product_pagination',
            clickable: true,
        },
        breakpoints: {
            1199: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 0
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //产品

    //产品详情
    var swiper = new Swiper('.product_detail_list', {
        effect: 'slide', //动画
        spaceBetween: 30, //间隔距离
        slidesPerView: 3, //显示
        loop: true, //循环
        //自动播放
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.product_detail_pagination',
            clickable: true,
        },
        breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 0
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //产品详情

    //left_img_list
    var swiper = new Swiper('.left_img_list .img_list', {
        effect: 'slide', //动画
        spaceBetween: 20, //间隔距离
        slidesPerView: 1, //显示
        loop: true, //循环
        //自动播放
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.img_pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //left_img_list

    //新闻
    var swiper = new Swiper('.index_news_list', {
        effect: 'slide', //动画
        spaceBetween: 20, //间隔距离
        slidesPerView: 3, //显示
        loop: true, //循环
        //自动播放
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.news_pagination',
            clickable: true,
        },
        breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            500: {
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

    //honor_list
    /*$('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });*/
    //honor_list

    //footer_more
    /*$(".footer_more").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },
        500);
        return false; //隐藏的地址    
    });*/
    //footer_more

    //$("#kefu").load("kefu.html");
    
})


/*网站标题滚动效果*/
//方法1 网站打开后延迟开启执行滚动效果
setTimeout(function(){
    newtitle();
},300);
function newtitle() {
    //获取网站的标题
    var text=document.title
    var timerID
    //标题超过长度后启用滚动
    if(text.length>10){
        //设置标题，从第二个字获取到末尾+标题的第一个字
        document.title=text.substring(1,text.length)+text.substring(0,1);
        //获取标题长度
        text=document.title.substring(0,text.length);
        //600毫秒后继续调用这个函数进行递归，实现滚动的效果
        timerID = setTimeout("newtitle()", 200)
    }
}
 
/* 
//方法2
var title = document.title;//获取网页标题
var step = 0; 
function rollTitle() { 
    //根据时间每次将切割后前面的字加到后面，直到step比标题个数还大，重新开始
    document.title = title.substring(step, title.length) + title.substring(0, step); 
    step++; 
    if (step >  title.length) step = 0 
    setTimeout("rollTitle()",300); 
} 
rollTitle();//调用函数 
*/
/*网站标题滚动效果*/


/*网页禁止右键代码*/
/*
    最常见查看网站源码的无非有这四种：
    鼠标右键单击
    F12
    Ctrl+U
    Ctrl+Shift+I
*/
/*
window.onload = function() {
    //屏蔽键盘事件
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        //F12
        if (e.keyCode == 123) {
            return false;
            //Ctrl+Shift+I
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
            //Shift+F10
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
            //Ctrl+U
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {
            return false;
        }
    };
    //屏蔽鼠标右键
    document.oncontextmenu = function() {
        return false;
    }
}*/
/*
HTML页面内容禁止选择、复制、右键
<body leftmargin=0 topmargin=0 oncontextmenu='return false' 
ondragstart='return false' onselectstart ='return false' 
onselect='document.selection.empty()' oncopy='document.selection.empty()' 
onbeforecopy='return false' onmouseup='document.selection.empty()'>
</body>
*/
/*网页禁止右键代码*/

// 网格瀑布流
(function ( $ ) {

    $.fn.mpmansory = function ( options ) {

        var settings = $.extend({
            childrenClass: '',
            breakpoints: {
                xl: 3,
                lg: 4,
                md: 4,
                sm: 6
            },
            /*breakpoints: {
                lg: 4,
                md: 4,
                sm: 6,
                xs: 6
            },*/
            distributeBy: {
                attr: 'data-order',
                attrOrder: 'asc',
                order: false,
                height: false
            },
            onload: function ( items ) {
                return true;
            }
            
        }, options);

        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };

        $.emptyArray = function ( array ) {
            for (var i = 0; i<array.length; i++) {
                array[i].remove();
            }

            return new Array();
        }

        $.fn.initialize = function ( columns, classStr ) {
            /*
             * @params [string] {classStr} - the bootstrap column string
             * @return [Array] - list of columns to create
             * @description - creates the grid columns in wich the items will be distributed
             */
            
            var cols = [];

            for (var i = 0; i<columns; i++) {
                
                var wrap = $('<div></div>');
                wrap.addClass(classStr);
                $(this).append(wrap);
                cols.push(wrap);
            
            }

            return cols;

        }

        $.fn.distributeItemsByHeight = function ( wrappers, items ) {
            /*
             * @params [Array] {wrappers} - the array containing the columns elements
             * @params [Array] {items} - the array containing items
             * @description - distribute the items through the columns - to the columns with lowest height
             */
            var counter = 0;

            for (var k = 0; k<items.length; k++) {

                var $heights = new Array();

                for (var i = 0; i<wrappers.length; i++ ) {

                    //get the wrappers height
                    
                    $heights.push(wrappers[i].height());

                }

                //get the wrapper with the lowest height
                var min = Array.min($heights) == Number.POSITIVE_INFINITY || Array.min($heights) == Number.NEGATIVE_INFINITY ? 0 : Array.min($heights);
                wrappers[$heights.indexOf(min)].append(items[k]);
    
            }

        }

        $.fn.getCurrentColumnSize = function () {

            if ($(window).width() > 1200) {
                return 'xl';
            } else if ($(window).width() > 991) {
                return 'lg';
            } else if ($(window).width() > 767) {
                return 'md';
            } else if ($(window).width() > 575) {
                return 'sm';
            } else {
                return 'sm';
            }

            /*if ($(window).width() > 1200) {
                return 'lg';
            } else if ($(window).width() > 992) {
                return 'md';
            } else if ($(window).width() > 720) {
                return 'sm';
            } else if ($(window).width() > 480) {
                return 'xs';
            } else if ($(window).width() > 320) {
                return 'xs';
            } else {
                return 'xs';
            }*/

        }

        $.fn.distributeItemsByOrder = function ( wrappers, items ) {
            /*
             * @params [Array] {wrappers} - the array containing the columns elements
             * @params [Array] {items} - the array containing items
             * @description - distribute the items through the columns - to the columns with lowest height
             */
            var counter = 0;

            for (var k = 0; k<items.length; k++) {
                if (counter == wrappers.length) counter = 0; 
                wrappers[counter].append(items[k]);
                counter++;
            }

        }

        $.fn.orderItemsByAttr = function (items, order) {

            var attrs = new Array();
            for ( var k = 0; k<items.length; k++ ) {
                attrs.push($(items[k]).attr(order.attr));
            }

            if  (order.attrOrder == 'asc') {
                attrs.sort(function (a, b) { return a-b });
            } else {
                attrs.sort(function (a, b) { return b-a });
            }

            var ordered_items = new Array();

            for ( var i = 0; i<attrs.length; i++) {
                var item = $.grep(items, function (e) {return $(e).attr(order.attr) == attrs[i]});
                ordered_items.push(item);
            }
            return ordered_items;
        }

        $.fn.distributeItemsByAttr = function ( wrappers, items, order) {

            var counter = 0;
            var counter2 = 0;

            for (var i = 0; i<items.length; i++) {
                
                if (counter == wrappers.length) counter = 0;
                if ( items[i].length > 1) {
                    if (counter2 == items[i].length) counter2 = 0; 
                    wrappers[counter].append($(items[i][counter2]));
                    counter2++;
                } else {
                    wrappers[counter].append($(items[i]));  
                }
                counter++;
            }   
        }

        $.fn.apply = function ( settings, nrOfColumns, wrappers, items ) {

            var _this = $(this);
            
            var currentSize = _this.getCurrentColumnSize();

            var columns = nrOfColumns; //find number of columns

            //build the bootstrap class string
            // var classStr = "col-lg-" + settings.breakpoints.lg + " col-md-"+settings.breakpoints.md + " col-sm-" + settings.breakpoints.sm + " col-xs-" + settings.breakpoints.xs + " " + settings.columnClasses;
            var classStr = "col-xl-" + settings.breakpoints.xl + " col-lg-"+settings.breakpoints.lg + " col-md-" + settings.breakpoints.md + " col-sm-" + settings.breakpoints.sm + " " + settings.columnClasses;

            wrappers = $(this).initialize( columns, classStr ); //create columns'white

            if ( settings.distributeBy.order ) {
                _this.distributeItemsByOrder( wrappers, items); //apply mansory     
            } else if ( settings.distributeBy.height ) {
                _this.distributeItemsByHeight( wrappers, items); //apply mansory
            } else if ( settings.distributeBy.attr ) {
                _this.distributeItemsByAttr( wrappers, _this.orderItemsByAttr(items, settings.distributeBy), settings.distributeBy);
            }
            return { wrappers: wrappers, items: items };
        }



        return this.each(function () {

            var _this = $(this);

            var currentSize = _this.getCurrentColumnSize();

            var numberOfColumns = 12 / settings.breakpoints[currentSize];

            var items = _this.children( (settings.childrenClass != '' ? '.'+settings.childrenClass : 'div') );

            var wrappers = new Array();

            var returns = _this.apply( settings, numberOfColumns, wrappers, items );
            
            wrappers = returns.wrappers;

            $(window).on('resize', function ( e ) {

                if (_this.getCurrentColumnSize() != currentSize ) {
                    numberOfColumns = 12 / settings.breakpoints[_this.getCurrentColumnSize()];
                    wrappers = $.emptyArray(wrappers);
                    returns = _this.apply( settings , numberOfColumns, wrappers, items);
                    wrappers = returns.wrappers;
                    currentSize = _this.getCurrentColumnSize();

                }

            });

            if (settings.hasOwnProperty('onload')) {

                //execute on load
                settings.onload( items );

            }

        });
    }

})(jQuery);

$(document).ready(function(){
    $(".space_gallery").mpmansory(
        {
            childrenClass: 'figure_img', // default is a div
            columnClasses: 'space_img', //add classes to items
            breakpoints:{
                xl: 3,
                lg: 3,
                md: 3,
                sm: 6
            },
            /*breakpoints: {
                lg: 4,
                md: 4,
                sm: 6,
                xs: 6
            },*/
            distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, 
            //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
            onload: function (items) {
                //make somthing with items
            } 
        }
    );
    $(".inspiration_list").mpmansory(
        {
            childrenClass: 'figure_img', // default is a div
            columnClasses: 'inspiration_img', //add classes to items
            breakpoints:{
                xl: 3,
                lg: 3,
                md: 3,
                sm: 6
            },
            distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, 
            //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
            onload: function (items) {
                //make somthing with items
            }
        }
    );
})
// 网格瀑布流

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


