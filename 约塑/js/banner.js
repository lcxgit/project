$('.visual_slide').bxSlider({
    mode: "horizontal",
    auto: true,
    nextText: '<img width="31" src="images/btn_slide_next.png" style="display:none;"/>',
    prevText: '<img width="31" src="images/btn_slide_prev.png" style="display:none;"/>',
    speed: 1000
});
$(function($) {
	$(window).on("resize", function(e) {
		var SW = $(window).width()
		if (SW < 768) {
			if (SW < 640) {
				if (SW < 375) {
					Floor000881(1, 480,0);
				} else {
					Floor000881(2, 320,10);
				}
			} else {
				Floor000881(3, 384,15);
			}
		} else {
			Floor000881(5,300,10);
		}
	}).trigger("resize");
});

function Floor000881(num,w,m) {
	$('#product_slide00').bxSlider({
		slideWidth: w,
		speed: 500,
		moveSlides: 1,
		minSlides: num,
		maxSlides: num,
		slideMargin:m,
        nextText: '<img width="31" src="images/btn_slide_next1.png" />',
        prevText: '<img width="31" src="images/btn_slide_prev1.png" />',
		infiniteLoop:true,
		auto: true
	});
}