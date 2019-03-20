(function ($) {
    $.fn.zoom = function (options) {
        var opts = $.extend({}, $.fn.defaults, options);
        return this.each(function () {
            var $this = $(this);
            $this.css({ position: "relative" });
            var $zoomImg = $this.children("img");
            $this.append("<div class=\"zoomLens\" >&nbsp;</div>");
            $("body").append("<div class=\"zoomBox\"><div class=\"zoomBody\"><img class=\"\" src=\"\"/></div></div>");
            //设置放大镜片
            var zoomLens = $(".zoomLens", $this);
            var imgLeft = $this.offset().left;
            var imgTop = $this.offset().top;
            var imgWidth = $this.innerWidth();
            var imgHeight = $this.innerHeight();
            var paddTop = parseInt($this.css("paddingTop"));
            var paddLeft = parseInt($this.css("paddingLeft"));
            //var mrgLeft=parseInt($zoomImg.css("marginLeft"));
            
            zoomLens.width(opts.xzoom);
            zoomLens.height(opts.yzoom);
            //设置放大
            var zoomBox = $(".zoomBox");
            zoomBox.width(opts.xzoom * opts.scale);
            zoomBox.height(opts.yzoom * opts.scale);
            zoomBox.css({ left: imgLeft + imgWidth + opts.offset, top: imgTop });
            var zoomBody = $(".zoomBody", zoomBox);
            zoomBody.width($this.width() * opts.scale);
            zoomBody.height($this.height() * opts.scale);
            zoomBody.css({ "paddingTop": paddTop * opts.scale, paddingLeft: paddLeft * opts.scale });
           
            $this.hover(function () {
                zoomLens.show();
                zoomBox.fadeIn("show");
				var zoomImg = zoomBody.children("img");
				var mrgTop = parseInt($zoomImg.css("marginTop"));
				zoomImg.css({ marginTop: mrgTop * opts.scale });
				zoomImg.width($zoomImg.width() * opts.scale);
				zoomImg.height($zoomImg.height() * opts.scale);
				zoomImg.attr("src", $zoomImg.attr("src"));
            }, function () {
                zoomLens.hide();
                zoomBox.fadeOut(300);
            });
            $this.mousemove(function (e) {
                var xpos = e.pageX - imgLeft - opts.xzoom / 2 > 0 ? (e.pageX - imgLeft - opts.xzoom / 2) : 0;
                xpos = xpos > imgWidth - opts.xzoom ? imgWidth - opts.xzoom - 2 : xpos;
                var ypos = e.pageY - imgTop - opts.yzoom / 2 > 0 ? (e.pageY - imgTop - opts.yzoom / 2) : 0;
                ypos = ypos > imgHeight - opts.yzoom ? imgHeight - opts.yzoom - 2 : ypos;
                zoomLens.css({ left: xpos, top: ypos })
                zoomBody.css({ left: -xpos * opts.scale, top: -ypos * opts.scale })

            });
			$(window).resize(function(){
				imgLeft = $this.offset().left;
             	imgTop = $this.offset().top;
				zoomBox.css({ left: imgLeft + imgWidth + opts.offset, top: imgTop });
			});
        });
    }
    $.fn.defaults = {
        xzoom: 100,//放大镜宽度
        yzoom: 100,//放大镜高度
        offset: 10,//放大图片间距
        position: "right",
        lens: 1,
        preload: 1,
        scale: 3
    }
})(jQuery);

// 放大镜配置
$(document).ready(function(e) {
    $(".pic_zoom").zoom();//放大镜引用	
	/*$(".pic_list_content ul li").click(function(){//大图单击切换
		var src=$(this).children("img").attr("src");
		$("#invalid_pic").attr("src",src);
		$(".pic_list_content ul li img").removeClass("current");
		$(this).children("img").addClass("current");
	});*/
	
	$(".pic_list_content ul li a").first().addClass("current");//初始化停留第一个
	
	$(".pic_list_content ul li a").hover(//大图滑动切换
	  function () {
		  var src=$(this).children("img").attr("src");
		  $("#invalid_pic").attr("src",src);
		  $(".pic_list_content ul li a").removeClass("current");
	  },
	  function () {
		 	var src=$(this).children("img").attr("src");
			var src_b=$("#invalid_pic").attr("src");
			//alert(src_b);
			if(src=src_b){
				$(".pic_list_content ul li a").removeClass("current");
				$(this).addClass("current");
				};
	  }
	);	
	
});




$(document).ready(function(){
	jQuery(".pic_list").slide({mainCell:".pic_list_content ul",autoPage:true,effect:"leftLoop",scroll:1,vis:4});
	/*产品详细小图切换*/
	jQuery(".products_detail_right").add(".detail").add(".history").add(".honor").slide();
	
});


//产品详情切换    
$(document).ready(function() {
 
  var owl = $("#pro_detail");
 
  owl.owlCarousel({
      singleItem : true,
      pagination:false,
      autoHeight : true,
     
  });
 
});










