
document.write("<scr"+"ipt src='js/jquery.slicknav.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

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


$(window).on('scroll',function() {
    if ($(window).scrollTop() > 20) {
        $('.header_nav').addClass('top_nav');
    } else {
        $('.header_nav').removeClass('top_nav');
    }
});


