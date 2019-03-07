$(document).ready(function() {
    // product_detail
    var case_detail_gallery = new Swiper('.case_detail_gallery', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var case_detail_thumbs = new Swiper('.case_detail_thumbs', {
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
    case_detail_gallery.controller.control = case_detail_thumbs;
    case_detail_thumbs.controller.control = case_detail_gallery;
});