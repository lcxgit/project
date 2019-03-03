
/*导航栏滑动侦测*/
$(window).on('scroll',function() {
    if ($(window).scrollTop() > 20) {
        $('.header_nav').addClass('top_nav');
    } else {
        $('.header_nav').removeClass('top_nav');
    }
});
/*导航栏滑动侦测*/

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
