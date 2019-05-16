
$(document).ready(function(){
    //product_detail_img_1
    var swiper = new Swiper('.product_detail_img_1', {
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
    //product_detail_img_1

    //product_detail_img_2
    var swiper = new Swiper('.product_detail_img_2', {
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
    //product_detail_img_2

    //图片放大镜
    // $(function() {
    //     $('[data-spzoom]').spzoom();
    // });
    $('.detail_img .big_img').zoom({})

    if(window.screen.width >= 768) {
        $('.details_img').imagezoomsl({
            zoomrange: [3, 3]
        });
    }
    //图片放大镜

    // 产品详情tab
    $(".product_detail_main .right .nav li").mouseenter(function () {
        //两件事件
        $(this).addClass("active").siblings().removeClass("active");
        var id = $(this).index();
        $(".tab-pane").eq(id).addClass("fade show active").siblings().removeClass("fade show active");
    });

    // 产品详情tab

})

// 产品筛选菜单
$(document).ready(function() {
    $("#select1 .li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("all")) {
            $("#selectA").remove();
        } else {
            var copyThisA = $(this).clone();
            if ($("#selectA").length > 0) {
                $("#selectA a").html($(this).text());
            } else {
                $(".result .ul").append(copyThisA.attr("id", "selectA"));
            }
        }
    });
    $("#select2 .li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("all")) {
            $("#selectB").remove();
        } else {
            var copyThisB = $(this).clone();
            if ($("#selectB").length > 0) {
                $("#selectB a").html($(this).text());
            } else {
                $(".result .ul").append(copyThisB.attr("id", "selectB"));
            }
        }
    });
    $("#select3 .li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("all")) {
            $("#selectC").remove();
        } else {
            var copyThisC = $(this).clone();
            if ($("#selectC").length > 0) {
                $("#selectC a").html($(this).text());
            } else {
                $(".result .ul").append(copyThisC.attr("id", "selectC"));
            }
        }
    });

    $("#selectA").live("click",
    function() {
        $(this).remove();
        $("#select1 .all").addClass("selected").siblings().removeClass("selected");
    });
    $("#selectB").live("click",
    function() {
        $(this).remove();
        $("#select2 .all").addClass("selected").siblings().removeClass("selected");
    });
    $("#selectC").live("click",
    function() {
        $(this).remove();
        $("#select3 .all").addClass("selected").siblings().removeClass("selected");
    });
    $(".select .li").live("click",
    function() {
        if ($(".result .ul li").length > 1) {
            $(".no").hide();
        } else {
            $(".no").show();
        }
    });
});
// 产品筛选菜单

/*
 * fixedScroll.js 滚动固定插件
 * @DH   
 * https://denghao.me
 * 
 * 示例：
 * $('.box').fixedScroll()
 */
/**/;
(function () {
    let fixedScroll = function ($fixedEl, opts) {
        this.defaults = {
            navEls: '', //nav (注意: navEls和hookEls两个参数必须成对出现)
            hookEls: '', //nav要滚动到的对应元素
            hookOffset: 0, //hook区域顶部偏移量
            offset: 0, //固定元素顶部偏移量
            stickEndEl: '', //固定结束位置的元素
            callback: ''
        };
        $.extend(this, this.defaults, opts);
        this.flag = true;
        this.stickTop = 0; //固定元素的原始位置
        this.init_stickTop = 0; //用于重计算高度
        this.stickBottom = 9999999; //固定元素的结束位置
        this.fixedEl = $fixedEl; //固定元素
        this.fixedElH = $fixedEl.height();
        this.fixedElW = $fixedEl.width();
        this.fixedElL = $fixedEl.offset().left;
        this.winEl = $(window);
        this.offset = parseInt(this.offset || 0);
        this.hookArea = [];
        this.isClickSwitch = false;
    }
    fixedScroll.prototype = {
        init: function () {
            if (this.fixedEl.length > 0) {
                this.stickTop = this.fixedEl.offset().top;
                this.init_stickTop = this.stickTop;
            }

            if (this.stickEndEl.length > 0) {
                this.stickBottom = this.stickEndEl.offset().top;
            }
            // 限定起始位的距顶高度
            this.distance = this.stickBottom - this.stickTop - this.fixedElH - this.offset / 2;
            this.calcArea();
            this.flag && this.events();
            this.flag = false;
        },
        // 固定
        stickHandle: function () {
            if (this.winEl.scrollTop() > this.stickTop - this.offset) {
                if (this.winEl.scrollTop() < this.stickBottom - this.fixedElH - this.offset) {
                    this.fixedEl.css({
                        "position": "fixed",
                        "top": this.offset,
                        "left": this.fixedElL,
                        "width": this.fixedElW,
                        "height": this.fixedElH,
                        "transform": "translateY(0)"
                    });
                    typeof this.callback == 'function' && this.callback(1);
                } else {
                    this.fixedEl.css({
                        "top": "auto",
                        "left": "auto",
                        "position": "static",
                        "transform": "translateY(" + this.distance + "px)"
                    });
                    typeof this.callback == 'function' && this.callback(0);
                }
            } else {
                this.fixedEl.css({
                    "top": "auto",
                    "position": "static"
                });
                typeof this.callback == 'function' && this.callback(0);
            }
        },

        // 动态计算高度
        resizeHeight: function (hasNewTop) {
            if (this.fixedEl.length > 0) {
                this.stickTop = hasNewTop ? this.fixedEl.offset().top : this.init_stickTop;
            }
            if (this.stickEndEl.length > 0) {
                this.stickBottom = this.stickEndEl.offset().top;
            }
            this.distance = this.stickBottom - this.stickTop - this.fixedElH - this.offset / 2;
            this.calcArea();
        },

        // 计算滚动区
        calcArea: function () {
            if (this.hookEls.length <= 0) return;
            let areas = [];
            this.hookEls.each(function (i, ele) {
                var start = $(this).offset().top;
                var end = start + $(this).height();
                areas.push([start, end]);
            })
            this.hookArea = areas;
        },

        // 区域判断
        hookScroll: function () {
            var t = this.winEl.scrollTop();
            for (var i in this.hookArea) {
                if ((t > this.hookArea[i][0] - this.hookOffset) && t < this.hookArea[i][1]) {
                    this.navStatus(i)
                } else {
                    this.navStatus()
                }
            }
        },

        // nav状态
        navStatus: function (i) {
            if (i || +i === 0) {
                this.navEls.eq(i).addClass('active').siblings().removeClass('active');
            } else {
                this.navEls.eq(i).removeClass('active');
            }
        },

        // 滚动到指定位置
        refresh: function (i) {
            let top = this.hookArea[i][0] - this.hookOffset;
            this.calcArea();
            this.scrollTop(top, 120);
        },

        scrollTop: function (scrollTo, time) {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            var scrollFrom = parseInt(scrollTop),
                i = 0,
                step = 5;
            scrollTo = parseInt(scrollTo);
            time /= step;
            var interval = setInterval(function () {
                i++;
                let top = (scrollTo - scrollFrom) / time * i + scrollFrom;
                document.body.scrollTop = top;
                document.documentElement.scrollTop = top;
                if (i >= time) {
                    clearInterval(interval);
                }
            }, step)
        },

        events: function () {
            let _this = this;
            // 切换nav
            if (_this.navEls.length > 0) {
                this.navEls.on('click', function () {
                    let i = $(this).index();
                    _this.isClickSwitch = true;
                    _this.refresh(i);
                    _this.navStatus(i);
                    setTimeout(function () {
                        _this.isClickSwitch = false;
                    }, 300);
                })
            }
            // 滚动监听
            this.winEl.on("scroll", function () {
                (_this.fixedEl.length > 0) && _this.stickHandle();
                (_this.hookEls.length > 0 && !_this.isClickSwitch) && _this.hookScroll();
            });
        }
    }

    $.fn.fixedScroll = function (opts) {
        let drag = new fixedScroll(this, opts);
        drag.init();
        return drag;
    }

    //兼容模块
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = fixedScroll;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return fixedScroll;
        })
    } else {
        window.fixedScroll = fixedScroll;
    }
}).call(function () {
    return (typeof window !== 'undefined' ? window : global)
}, $)

//产品详情定位
if(window.screen.width >= 768) {
    $(".product_detail_main .text .div_img").fixedScroll()
}


