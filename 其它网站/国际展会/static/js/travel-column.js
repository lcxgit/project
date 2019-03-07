//商旅首页切换渐变
$(function(){
	$(".scl_lan li").click(function(){
        $(".scl_lan li").removeClass("on1");
        $(this).addClass("on1");
    });
    //点击样式切换
	$("#sl1").click(function(){  
		$('.slnr').hide();      
		$('#slnr1').fadeIn(600);
    });
	$("#sl2").click(function(){
		$('.slnr').hide();
		$('#slnr2').fadeIn(600);
    });
	$("#sl3").click(function(){
		$('.slnr').hide();
		$('#slnr3').fadeIn(600);
    });
});

// $(function(){
// 	/*右侧超过高度时悬浮*/
//     menuFixed('slr_k');

//     /*主题路线 鼠标事件*/
//     $('.lx').hover(function(){
//         $(this).find('.lxa').hide();
//         $(this).find('.lxhover').show();
//     },function(){
//         $(this).find('.lxa').show();
//         $(this).find('.lxhover').hide();
//     });

// });

// function menuFixed(id){
// 	var _getHeight = $('#'+id).offsetTop;

// 	window.onscroll = function(){
// 		changePos(id,_getHeight);
// 	};
// }

// function changePos(id,height){
// 	var obj = document.getElementById(id);
// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;


// 	var bheight = document.getElementById('foot').offsetTop;

// 	if(scrollTop > height){
// 		obj.style.position = 'fixed';
// 		obj.style.top = '0px';
// 		obj.style.bottom = '';
// 	}
// 	if(scrollTop < height){
// 		obj.style.position = 'relative';
// 		obj.style.top = '0px';
// 		obj.style.bottom = '';
// 	}
// 	if(scrollTop > bheight-485){
// 		obj.style.position = 'fixed';
// 		/*
// 		var lheight = bheight-scrollTop;
// 		alert(lheight);
// 	    return false;
// 		var lheight = 485-(bheight-scrollTop)+205;
// 		obj.style.bottom = lheight+'px';
// 		*/
// 		obj.style.bottom = '275px';
// 		obj.style.top = '';
// 	}
// }

//搜索框 回车监控
$('.sjs_txt').bind('keypress',function(event){

    if(event.keyCode == "13") {
        search();
    }

});

//搜索提交
function search() {
    var keyword = $.trim($(".sjs_txt").val());

    if(keyword==''|| keyword=='请输入目的地、主题或关键字' ) {
        alert('请输入搜索关键词');
        return false;
    }else if(keyword.length < 2){
        alert('关键词不少于两个字符');
        return false;
	}else if(keyword.length > 40){
        alert('超过40个字，请重新输入');
        return false;
    }

    window.location.href = host+'?keyword='+keyword;
}

//热门搜索词
function bizsearch(ths) {
    window.location.href = host+'?keyword='+ths.innerHTML;
    // window.location.href = host+'/'+ths.getAttribute('data-url')+'/';
}