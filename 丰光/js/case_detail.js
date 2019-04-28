

$(document).ready(function() {
    /**/
    var case_detail_thumbs = new Swiper('.case_detail_thumbs', {
        spaceBetween: 10,//间距
        slidesPerView: 4,//显示
        //loop: true, //循环
        freeMode: true,
        loopedSlides: 5,//循环相同的幻灯片
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var case_detail_gallery = new Swiper('.case_detail_gallery', {
        spaceBetween: 10,
        slidesPerView: 1,//显示
        //loop:true,
        loopedSlides: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: case_detail_thumbs,
        },
    });

    /*
    var Swiper1 = new Swiper('.case_detail_thumbs');
    var Swiper2 = new Swiper('.case_detail_gallery',{
        controller: {
            control: Swiper1, //控制Swiper1
        },
    })

    Swiper1.controller.control = Swiper2;//Swiper1控制Swiper2，需要在Swiper2初始化后
    Swiper2.controller.control = Swiper1;//Swiper2控制Swiper1，需要在Swiper1初始化后
    */
});

