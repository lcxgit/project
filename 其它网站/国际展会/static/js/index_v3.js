

//=======悬浮定点位置======//
$(function(){ 
    /*$("#a11").click(function(){ 
        $.scrollTo('#a1',1000); 
    }); 
    $("#a22").click(function(){ 
        $.scrollTo('#a2',1000); 
    }); 
    $("#a33").click(function(){ 
        $.scrollTo('#a3',1000); 
    });  
    $("#a44").click(function(){ 
        $.scrollTo('#a4',1000); 
    }); 
	 
    $("#a55").click(function(){ 
        $.scrollTo('#a5',1000); 
    }); */
    /* 先注释掉，如果多加了楼层，再放出来 by qzy */
    // $("#a66").click(function(){ 
    //     $.scrollTo('#a6',1000); 
    // }); 
    // $("#a77").click(function(){ 
    //     $.scrollTo('#a7',1000); 
    // });
	
    // $("#gotop").click(function(){ 
    //     $.scrollTo('.header',1000); 
    // }); 
});  
/*
function gotop(){
  $.scrollTo('.header',1000);
}
*/

//=======悬浮定点位置======
$(function() {
	$("#a11").click(function() {
		$("html, body").animate({
			scrollTop: $("#a1").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$("#a22").click(function() {
		$("html, body").animate({
			scrollTop: $("#a2").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$("#a33").click(function() {
		$("html, body").animate({
			scrollTop: $("#a3").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$("#a44").click(function() {
		$("html, body").animate({
			scrollTop: $("#a4").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$("#a55").click(function() {
		$("html, body").animate({
			scrollTop: $("#a5").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	/* 先注释掉，如果多加了楼层，再放出来 by qzy */
	/*
	$("#a66").click(function() {
		$("html, body").animate({
			scrollTop: $("#a6").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$("#a77").click(function() {
		$("html, body").animate({
			scrollTop: $("#a7").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$("#a88").click(function() {
		$("html, body").animate({
			scrollTop: $("#a8").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$("#a99").click(function() {
		$("html, body").animate({
			scrollTop: $("#a9").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});	
	*/
	$("#gotop").click(function() {
		$("html, body").animate({
			scrollTop: $(".header").offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	})
	
});

$(function(){
	
       $(window).scroll(function(){
 			//为页面添加页面滚动监听事件
                 var wst =  $(window).scrollTop() //滚动条距离顶端值
				 for (i=1; i<6; i++){             //加循环
				 if($("#a"+i).offset().top<=wst){ //判断滚动条位置
					 $('#i_nav a').removeClass("i_c"); //清除c类
					 $("#a"+i+i).addClass("i_c");	//给当前导航加c类
					 }
				 }
				 
	  })
	   $('#i_nav a').click(function(){
		$('#i_nav a').removeClass("i_c");
		$(this).addClass("i_c");
		});
})



<!--左侧nav超过1088px固定star-->

jQuery(document).ready(function()
{	 
	jQuery(window).bind("scroll",function()
	{
		if(jQuery(document).scrollTop()>=1088)
		{
			jQuery("#i_dw").css({position:"fixed",top:"0px"}); 
		}else
		{
			jQuery("#i_dw").css({position:"absolute",top:"1088px"});
		}
	}); 
});

/*首页底部百科鼠标放到图片上出现遮罩层*/
$(function(){
	$('.ir_list ul li').hover(function(){
		$('.mark',this).fadeIn();
		$('.mark2',this).fadeOut();
	},function(){
		$('.mark',this).fadeOut();
		$('.mark2',this).fadeIn();
	});
});

/* 
	楼层小行业切换 by qzy 

	wby:
		新增img lazyload

*/
$(function() {
	$('.industry_nav').click(function(e) {

		e.preventDefault();
		var scope = $(this).closest('.rl_right');
		var industry_content = scope.find('.industry_content');
		scope.find('.eemw1').removeClass('eemw1').addClass('eemw4');
		$(this).removeClass('eemw4').addClass('eemw1');
		industry_content.hide();
		industry_content.eq($(this).index()).show();
		// 新增 img lazyload 17/10/31
		industry_content.eq($(this).index()).find("img").each(function(i){ 
			!$(this).attr('src') && $(this).attr('src', $(this).attr('data-src')) 
		})
	});
	$('.baike_nav').click(function(e) {

		e.preventDefault();
		var scope = $(this).closest('.i_baike');
		var industry_content = scope.find('.baike_content');
		var _href = $(this).find('a').attr('href');
		scope.find('.ebnw_right').find('a').attr('href',_href);
		scope.find('.ebmw1').removeClass('ebmw1').addClass('ebmw4');
		$(this).removeClass('ebmw4').addClass('ebmw1');
		industry_content.hide();
		industry_content.eq($(this).index()).show();
		// 新增 img lazyload 17/10/31
		industry_content.eq($(this).index()).find("img").each(function(i){ 
			!$(this).attr('src') && $(this).attr('src', $(this).attr('data-src')) 
		})
	});

});

/* 首页的用户信息框 by qzy 
$(function() {
	$.ajax({
		url: '/expoApi/Home/Home/getUserData',
		dataType: 'json',
		success: function(data) {
			if (data) {
				$('.login_yes').show();
				$('.user_name').html(data.nickname);
				$('.user_integral').html(data.integral);
				$('.user_showguide_company').html(data.showguide_company);
				if (data.head) {
					$('.user_head').attr('src', data.head);
				} else {
					$('.user_head').attr('src', 'static/images/default_user_head.png');
				}
				
			} else {
				$('.login_no').show();
			}
		}
	});
});
*/