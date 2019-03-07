$(document).ready(function() {
    $('.slider-nav2').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        vertical: true,
        // focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        // asNavFor: '.slider-for2',
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false
            }
        }]
    });
    $('.slider-nav2 .item').mouseenter(function(event) {
        var idx = $(this).index();
        $(this).addClass('on').siblings('.item').removeClass('on');
        $('.slider-for2').slick('slickGoTo', idx);
    });
    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        // asNavFor: '.slider-nav2',
        customPaging: function() {
            return '';
        }
    });
    $(window).load(function() {
        $('.m-adv .slider1 .current').html('<b class="num">01</b><i class="line"></i>0' + $('.m-adv .slider-nav2 .item').length);
    });
    $('.slider-for2').on('afterChange', function(slick, currentSlide) {
        $('.m-adv .slider1 .current').html('<b class="num">0' + (currentSlide.currentSlide + 1) + '</b><i class="line"></i>0' + currentSlide.slideCount);
    });
});