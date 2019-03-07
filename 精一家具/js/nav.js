
/*导航栏滑动侦测*/
$(window).on('scroll',function() {
    if ($(window).scrollTop() > 20) {
        $('.header').addClass('top_nav');
    } else {
        $('.header').removeClass('top_nav');
    }
});
/*导航栏滑动侦测*/
