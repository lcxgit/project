
$(document).ready(function() {
	var galleryTop = new Swiper('.slider_img', {
		spaceBetween: 10,
		slidesPerView: 1,
		loop: true,
		keyboard: {
	        enabled: true,
	    },
		autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	    },
	    pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	    },
	    navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	    },
	});
});
