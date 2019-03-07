/*时间*/ 
jeDate("#date5",{
    isinitVal:true,
    festival: true,
    format: 'YYYY年MM月DD日'
    // format: 'YYYY年MM月DD日 hh:mm:ss'
});
jeDate("#date6",{
    isinitVal:true,
    festival: true,
    initDate:[{DD:"1",hh:"+1"},true],   //初始化日期减2天加1小时
    format: 'YYYY年MM月DD日'
    // format: 'YYYY年MM月DD日 hh:mm:ss'
});
/*时间*/ 

//产品详情图片轮播
$(document).ready(function() {
    $(function() {
        var viewSwiper = new Swiper('.view .swiper_detail_img_1', {
            onSlideChangeStart: function() {
                updateNavPosition();
            }
        })

        $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
            e.preventDefault();
            if(viewSwiper.activeIndex == 0) {
                viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
                return;
            }
            viewSwiper.swipePrev();
        })
        $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
            e.preventDefault();
            if(viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
                viewSwiper.swipeTo(0, 1000);
                return
            }
            viewSwiper.swipeNext();
        })

        var previewSwiper = new Swiper('.preview .swiper_detail_img_2', {
            visibilityFullFit: true,
            slidesPerView: 'auto',
            onlyExternal: true,
            onSlideClick: function() {
                viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
            }
        })

        function updateNavPosition() {
            $('.preview .active-nav').removeClass('active-nav');
            var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
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
});
//产品详情图片轮播

    

