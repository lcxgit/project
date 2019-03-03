var sbefore = 0;
var sideNavTop = 0;
var sideNavs = new Array();
$(document).ready(function () {
    animate.init();
    $(window).on("scroll", function () {
        navs.onScroll();
    })
    if ($(".side_navs").length) {
        $(".side_navs li").on("click", function () {
            var index = $(this).index();
            var scTop = $(".side_item").eq(index).offset().top;
            $.scrollTo(scTop, 500);
        });
        sideNavTop = $(".side_navs_box").offset().top;
        $(window).on("scroll", function () {
          
            $(window).on("scroll", function () {
                var sTop = $(window).scrollTop() + 100;
                if (sTop - sideNavTop > 0) {
                    $(".side_navs").addClass("side_fixed");
                }
                else {
                    $(".side_navs").removeClass("side_fixed");
                }
                if (sideNavs.length <= 0) {
                    $(".side_item").each(function (i) {
                        var oTop = $(this).offset().top;
                        sideNavs.push(oTop)

                    });
                }
                $.each(sideNavs, function (i, v) {
                    if (sTop >= v) {
                        $(".side_navs li").eq(i).addClass("active").siblings().removeClass("active");
                    }
                })
            });
        })
    }
})


animate = {
    init: function () {
        var wow = new WOW({
            boxClass: 'animate',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {
            },
            scrollContainer: null
        });
        wow.init();
    }
}

navs = {
    onScroll: function () {
        var curId = '';
        var winW = $(window).width();
        var sTop = $(window).scrollTop();
        var adTop = $(".header_ad").height();
        if (winW >= 768) {
            if (sTop > adTop) {
                if (sTop - sbefore > 0) {
                    if ($("#navs").hasClass("sliding")) {
                        $("#navs").stop().animate({ top: -180 }, 100, function () {
                            $("#navs").removeClass("sliding");
                        })
                    }
                    else {
                        $("#navs").addClass("sliding");
                    }
                } else {
                    if (!$("#navs").hasClass("sliding")) {
                        $("#navs").addClass("sliding");
                        $("#navs").stop().animate({ top: 0 }, 100, function () {
                        })
                    }
                }
                sbefore = sTop;
            }
            else if (sTop > 0) {
                $("#navs").addClass("sliding");
            }
            else {
                $("#navs").stop().animate({ top: 0 }, 100, function () {
                    $("#navs").removeClass("sliding");
                })
            }
        }
    }
}