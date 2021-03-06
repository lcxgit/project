
/**/
$(document).ready(function() {
    var product_detail_thumbs = new Swiper('.product_detail_thumbs', {
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
    var product_detail_gallery = new Swiper('.product_detail_gallery', {
        spaceBetween: 10,
        slidesPerView: 1,//显示
        //loop:true,
        loopedSlides: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: product_detail_thumbs,
        },
    });
    
});

