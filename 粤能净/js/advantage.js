

$(window).load(function(){
	var prodSwiper = new Swiper ('.prod-slide', {
		speed: 1000,
		loop: true,
		loopAdditionalSlides: 0,
		loopedSlides: 1,
	    autoplay: {
			delay: 3000,
		},
		navigation: {
	      nextEl: '.prod-next',
	      prevEl: '.prod-prev',
	    },
	    pagination: {
	      el: '.prod-pagin',
	    },
	    on: {
        	slideChangeTransitionStart: function(){
        	//alert(this.activeIndex);
        	switch(this.activeIndex){
        	    case 0 :
        	    //loop index 4
        	    	$('.crestron').height(_prodTxt4+10);
        	        TweenMax.to("#crestron0", 0.6, {opacity:0,display:'none'});
        	        TweenMax.to("#crestron4", 0.6, {display:'block',opacity:1});
        	        TweenMax.to("#crestron1", 0.6, {opacity:0,display:'none'});
        	        
        	        break;
        	    case 1 :
        	    //loop index 0
        	    	$('.crestron').height(_prodTxt0+10);
        	        TweenMax.to("#crestron4", 0.6, {opacity:0,display:'none'});
        	        TweenMax.to("#crestron0", 0.6, {display:'block',opacity:1});
        	        TweenMax.to("#crestron1", 0.6, {opacity:0,display:'none'});
        	        
        	        break;
        	    case 2 :
        	    //loop index 1
        	    	$('.crestron').height(_prodTxt1+10);
        	        TweenMax.to("#crestron0", 0.6, {opacity:0,display:'none'});
        	        TweenMax.to("#crestron1", 0.6, {display:'block',opacity:1});
        	        TweenMax.to("#crestron2", 0.6, {opacity:0,display:'none'});
        	        break;
        	    case 3 :
        	    //loop index 2
        	    	$('.crestron').height(_prodTxt2+10);
        	        TweenMax.to("#crestron1", 0.6, {opacity:0,display:'none'});
        	        TweenMax.to("#crestron2", 0.6, {display:'block',opacity:1});
        	        TweenMax.to("#crestron3", 0.6, {opacity:0,display:'none'});
        	        break;
        	    case 4 :
        	    //loop index 3
        	    	$('.crestron').height(_prodTxt3+10);
        	        TweenMax.to("#crestron2", 0.6, {opacity:0,display:'none'});
        	        TweenMax.to("#crestron3", 0.6, {display:'block',opacity:1});
        	        TweenMax.to("#crestron4", 0.6, {opacity:0,display:'none'});
        	        break;
        	    case 5 :
        	    //loop index 4
        	    	$('.crestron').height(_prodTxt4+10);
        	        TweenMax.to("#crestron3", 0.6, {opacity:0,display:'none'});
        	        TweenMax.to("#crestron4", 0.6, {display:'block',opacity:1});
        	        TweenMax.to("#crestron0", 0.6, {opacity:0,display:'none'});
        	        break;
        	    case 6 :
        	    //loop index 0
        	    	$('.crestron').height(_prodTxt0+10);
        	        TweenMax.to("#crestron4", 0.6, {opacity:0,display:'none'});
        	        TweenMax.to("#crestron0", 0.6, {display:'block',opacity:1});
        	        TweenMax.to("#crestron1", 0.6, {opacity:0,display:'none'});
        	        break;
        		}
        	}
        }

	});
	var _winWidth = $(window).width();
	if( _winWidth <= 1000){
		var _prodTxt0 = $('#crestron0').height();
		var _prodTxt1 = $('#crestron1').height();
		var _prodTxt2 = $('#crestron2').height();
		var _prodTxt3 = $('#crestron3').height();
		var _prodTxt4 = $('#crestron4').height();

		$('.crestron').height(_prodTxt0+10);
		$('.crestron-bot').show();
	}
	$(window).resize(function(){
		var _winWidth = $(window).width();
		if( _winWidth <= 1000){
			var _prodTxt0 = $('#crestron0').height();
			var _prodTxt1 = $('#crestron1').height();
			var _prodTxt2 = $('#crestron2').height();
			var _prodTxt3 = $('#crestron3').height();
			var _prodTxt4 = $('#crestron4').height();

			$('.crestron').height(_prodTxt0+10);
			$('.crestron-bot').show();
		}
	})
});




$(window).load(function(){      
        var _winWidth = $(window).width();
        if( _winWidth <= 1000){
                TweenMax.to(".btn-menu", 1.5, {right:"15px",delay:0.8});
                TweenMax.to(".p-menu-logo", 1.5, {right:"58px",opacity:1,delay:0.8});
                TweenMax.to(".pord-img-slide", 0.8, {y:0,opacity:1,ease: Power1.easeOut,delay:0.5});
                TweenMax.to(".slide-bg", 1, {opacity:1,ease: Power1.easeOut,delay:0.5});
                TweenMax.to(".prod-prev", 1, {opacity:1,left:"6px",delay:1.5});
                TweenMax.to(".prod-next", 1, {opacity:1,right:"6px",delay:1.5});
                TweenMax.to(".prod-pagin", 1.5, {bottom:"10px",delay:2});
                TweenMax.to(".prod-info", 0.8, {opacity:1,delay:1.5});
        }else{
                TweenMax.to(".btn-menu", 1.5, {right:"35px",delay:0.8});
                TweenMax.to(".p-menu-logo", 1.5, {right:"90px",opacity:1,delay:0.8});
                TweenMax.to(".bot-group", 1.5, {right:"0",delay:0.8});
                TweenMax.to(".crestron-bot", 1.5, {right:"35px",delay:0.8});
                TweenMax.to(".pord-img-slide", 0.8, {x:0,ease: Power1.easeOut,delay:0.5});
                TweenMax.to(".slide-bg", 1, {opacity:1,ease: Power1.easeOut,delay:0.5});
                TweenMax.to(".prod-prev", 1, {opacity:1,left:"6px",delay:1.5});
                TweenMax.to(".prod-next", 1, {opacity:1,right:"6px",delay:1.5});
                TweenMax.to(".prod-pagin", 1.5, {bottom:"50px",delay:2});
                TweenMax.to(".prod-info", 0.8, {opacity:1,delay:1.5});
        }
});


