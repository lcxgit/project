
document.write("<scr"+"ipt src='js/jquery.slicknav.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

/*mobile 导航栏*/
$(document).ready(function() {
    $('.mobile_menu').slicknav({
        prependTo: '.navbar_header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="fa fa-angle-right"></i>',
        openedSymbol: '<i class="fa fa-angle-down"></i>',
    });
});
/*mobile 导航栏*/

/*导航栏滑动侦测*/
$(window).on('scroll',function() {
    if ($(window).scrollTop() > 20) {
        $('.header').addClass('top_nav');
    } else {
        $('.header').removeClass('top_nav');
    }
});
/*导航栏滑动侦测*/

