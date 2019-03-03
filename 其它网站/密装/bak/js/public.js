
$(document).ready(function () {
    var swiper = new Swiper('.banner', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
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
    var swiper = new Swiper('.honor', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
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
    $(".index_adv_main ul li").hover(function () {
        $(this).addClass("active").siblings().addClass("unactive");
    }, function () {
        $(this).removeClass("active").siblings().removeClass("unactive");
    });

    $(".vision_items li").hover(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })

})

$(document).ready(function () {
    $(".contactus_info_links ul li").on("click", function () {
        var index = $(this).index();
        $(".contactus_info_content ul li").eq(index).addClass("active").siblings().removeClass("active")
        $(this).addClass("active").siblings().removeClass("active")
    })
})

$(document).ready(function () {
	$(".more").click(function() {    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        },500);    
    });
})



$(document).ready(function () {
    var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper3 = new Swiper('.swiper3', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper4 = new Swiper('.swiper4', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination4',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})

$(document).ready(function () {

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
        // scrollText: '<i class="fa fa-angle-up"></i>',
        scrollText: '<span>&uarr;</span>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*top*/
})
