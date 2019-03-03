$(document).ready(function() {
    // product_detail
    var product_detail_gallery = new Swiper('.product_detail_gallery', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var product_detail_thumbs = new Swiper('.product_detail_thumbs', {
        spaceBetween: 15,
        slidesPerView: 5,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    product_detail_gallery.controller.control = product_detail_thumbs;
    product_detail_thumbs.controller.control = product_detail_gallery;
});