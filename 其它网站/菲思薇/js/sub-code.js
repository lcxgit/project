$(function(){
	$(window).load(function(){
		var submask=$(".submask");
		submask.css("background-image","none").fadeOut('fast');
	
	})
	var sub=$("#iframe-warp",window.parent.document);
	if(sub.length <= 0){
		$(".sub-top").css("display","block").next().css("margin-top","38px");
	};
	$('.fade').slick({
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear',
        autoplay: true,
  		autoplaySpeed: 4000
    });
    $(".prev,.next,.back").hover(function(){
      $(this).tween({
	   backgroundColor:{
	      start: '#222222',
	      stop: '#0b9de4',
	      time: 0,
	      duration: 0.3,
	      effect:'easeInOut'
	   }, 
	   border:{
	      start: 'solid 1px #0b9de4',
	      stop: 'solid 1px #36e3fb',
	      time: 0,
	      duration: 0.5,
	      effect:'easeInOut'
   		}
	   }).play();
	   $(this).children().tween({
		   color: {
			      start: '#4e4e4e',
			      stop: '#ffffff',
			      time: 0,
			      duration: 0.3,
			      effect: 'bounceInOut'
			   }
	   }).play();
    },function(){
    	 $(this).tween({
	   backgroundColor:{
	      start: '#0b9de4',
	      stop: '#222222',
	      time: 0,
	      duration: 0.3,
	      effect:'easeInOut'
	   }, 
	   border:{
	      start: 'solid 1px #0b9de4',
	      stop: 'solid 1px #0b9de4',
	      time: 0,
	      duration: 0.5,
	      effect:'easeInOut'
   		}
	   }).play();
	    $(this).children().tween({
		   color: {
			      start: '#ffffff',
			      stop: '#4e4e4e',
			      time: 0,
			      duration: 0.3,
			      effect: 'bounceInOut'
			   }
	   }).play();
	   
    });
	
});

(function($) { 
	 jQuery("#movieScroll").mCustomScrollbar({
		theme:"light-3",
         mouseWheelPixels:300
	});
})(jQuery);