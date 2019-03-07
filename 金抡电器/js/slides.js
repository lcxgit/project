(function() {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	// for megamenu purpose
	jQuery(document).on('click', '.probootstrap-megamenu .dropdown-menu', function(e) {
	  e.stopPropagation()
	});

	/*----------------------------------------
		Menu Hover
	----------------------------------------*/
	var menuHover = function() {
		if (!isMobile.any()) {
			jQuery('.probootstrap-navbar .navbar-nav li.dropdown').hover(function() {
			  jQuery(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeIn(500).addClass('animated-fast fadeInUp');
			}, function() {
				jQuery(this).find('> .dropdown-menu').stop(true, true).fadeOut(200).removeClass('animated-fast fadeInUp')
			});
		}
	}
	/*----------------------------------------
		Carousel
	----------------------------------------*/
	var owlCarousel = function(){

		var owl = jQuery('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});

		var owl = jQuery('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			autoplay: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	]
		});

		var owl = jQuery('.owl-work');
		owl.owlCarousel({
			stagePadding: 150,
			loop: true,
			margin: 20,
			nav: true,
			mouseDrag: false,
			autoWidth: true,
	    autoplay: true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
			navText: [	
				"<i class='icon-chevron-thin-left'></i>",
				"<i class='icon-chevron-thin-right'></i>"
			],
			responsive:{
			  0:{
		      items:1,
		      stagePadding: 10
			  },
			  500:{
			  	items:2,
		      stagePadding: 20
			  },
			  600:{
		      items:2,
		      stagePadding: 40
			  },
			  800: {
			  	items:2,
			  	stagePadding: 100
			  },
			  1100:{
		      items:3
			  },
			  1400:{
		      items:4
			  },
			}
		});
	};

	/*----------------------------------------
		Slider
	----------------------------------------*/
	var flexSlider = function() {
	  jQuery('.flexslider').flexslider({
	    animation: "fade",
	    prevText: "",
	    nextText: "",
	    slideshow: true
	  });
	}

	/*----------------------------------------
		Feature Showcase
	----------------------------------------*/
	var showcase = function() {

		jQuery('.probootstrap-showcase-nav ul li a').on('click', function(e){

			var $this = jQuery(this),
					index = $this.closest('li').index();
							
			$this.closest('.probootstrap-feature-showcase').find('.probootstrap-showcase-nav ul li').removeClass('active');
			$this.closest('li').addClass('active');

			$this.closest('.probootstrap-feature-showcase').find('.probootstrap-images-list li').removeClass('active');
			$this.closest('.probootstrap-feature-showcase').find('.probootstrap-images-list li').eq(index).addClass('active');

			e.preventDefault();

		});

	};

	var contentWayPoint = function() {
		var i = 0;
		jQuery('.probootstrap-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .probootstrap-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn probootstrap-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft probootstrap-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight probootstrap-animated');
							} else {
								el.addClass('fadeInUp probootstrap-animated');
							}
							el.removeClass('item-animate');
						},  k * 30, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	var navbarState = function() {

		jQuery(window).scroll(function(){

			var $this = jQuery(this),
				 	st = $this.scrollTop();

			if ( st > 5 ) {
				jQuery('.probootstrap-navbar').addClass('scrolled');
			} else {
				jQuery('.probootstrap-navbar').removeClass('scrolled');
			}

		});
		

	};

	jQuery(function(){
		menuHover();
		showcase();
		contentWayPoint();
		navbarState();
	});

	jQuery(window).load(function(){
		owlCarousel();
		flexSlider();
	});

})();