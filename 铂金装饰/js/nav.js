
//document.write("<scr"+"ipt src='js/jquery.slicknav.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

/*mobile 导航栏*/
/*$(document).ready(function() {
    $('.mobile_menu').slicknav({
        prependTo: '.navbar_header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="fa fa-angle-right"></i>',
        openedSymbol: '<i class="fa fa-angle-down"></i>',
    });
});*/
/*mobile 导航栏*/

/*导航栏滑动侦测*/
/*$(window).on('scroll',function() {
    if ($(window).scrollTop() > 20) {
        $('.header_nav').addClass('top_nav');
    } else {
        $('.header_nav').removeClass('top_nav');
    }
});*/
/*导航栏滑动侦测*/

/*pc导航栏*/
$(document).ready(function() {
    $(function() {
        $('.nav-item>a').on('click', function() {
            if (!$('.nav').hasClass('nav-mini')) {
                if ($(this).next().css('display') == "none") {
                    $('.nav-item').children('ul').slideUp(300);
                    $(this).next('ul').slideDown(300);
                    $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
                } else {
                    $(this).next('ul').slideUp(300);
                    $('.nav-item.nav-show').removeClass('nav-show');
                }
            }
        });
        /*$('#mini').on('click', function() {
            if (!$('.nav').hasClass('nav-mini')) {
                $('.nav-item.nav-show').removeClass('nav-show');
                $('.nav-item').children('ul').removeAttr('style');
                $('.nav').addClass('nav-mini');
            } else {
                $('.nav').removeClass('nav-mini');
            }
        });*/
    });
});
/*pc导航栏*/

/*移动端左侧滑动菜单*/
$(document).ready(function() {
    (function($) {
        var $nav = $('#main-nav');
        var $toggle = $('.toggle');
        var defaultData = {
            maxWidth: false,
            customToggle: $toggle,
            navTitle: '',
            levelTitles: true
        };

        // we'll store our temp stuff here
        var $clone = null;
        var data = {};

        // calling like this only for demo purposes
        const initNav = function(conf) {
            if ($clone) {
                // clear previous instance
                $clone.remove();
            }

            // remove old toggle click event
            $toggle.off('click');

            // make new copy
            $clone = $nav.clone();

            // remember data
            $.extend(data, conf)

            // call the plugin
            $clone.hcMobileNav($.extend({},
            defaultData, data));
        }

        // run first demo
        initNav({});

        $('.actions').find('a').on('click',
        function(e) {
            e.preventDefault();

            var $this = $(this).addClass('active');
            var $siblings = $this.parent().siblings().children('a').removeClass('active');

            initNav(eval('(' + $this.data('demo') + ')'));
        });
    })(jQuery);
});
/*移动端左侧滑动菜单*/
