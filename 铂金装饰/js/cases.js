//案例详情图片轮播
$(document).ready(function(){
    $(function() {
        var viewSwiper = new Swiper('.view .swiper_cases_detail_img_1', {
            onSlideChangeStart: function() {
                updateNavPosition();
            }
        })

        $('.swiper_cases_detail_img_1 .arrow-left,.cases_preview .arrow-left').on('click', function(e) {
            e.preventDefault();
            if(viewSwiper.activeIndex == 0) {
                viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
                return;
            }
            viewSwiper.swipePrev();
        })
        $('.swiper_cases_detail_img_1 .arrow-right,.cases_preview .arrow-right').on('click', function(e) {
            e.preventDefault();
            if(viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
                viewSwiper.swipeTo(0, 1000);
                return
            }
            viewSwiper.swipeNext();
        })

        var previewSwiper = new Swiper('.cases_preview .swiper_cases_detail_img_2', {
            visibilityFullFit: true,
            slidesPerView: 'auto',
            onlyExternal: true,
            onSlideClick: function() {
                viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
            }
        })

        function updateNavPosition() {
            $('.cases_preview .active-nav').removeClass('active-nav');
            var activeNav = $('.cases_preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
            if(!activeNav.hasClass('swiper-slide-visible')) {
                if(activeNav.index() > previewSwiper.activeIndex) {
                    var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1;
                    previewSwiper.swipeTo(activeNav.index() - thumbsPerNav);
                } else {
                    previewSwiper.swipeTo(activeNav.index());
                }
            }
        }
    });
})
//案例详情图片轮播