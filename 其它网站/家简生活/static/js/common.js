/**通用的JS**/

// 侦测导航栏滚动固定
$(window).on('scroll',function() {
    if ($(window).scrollTop() > 20) {
        $('.header_nav').addClass('top_nav');
    } else {
        $('.header_nav').removeClass('top_nav');
    }
});
// 侦测导航栏滚动固定

var hover_state = 0;
$(function(){
    $('#header .navbar-nav li a').hover(function() {
        if(hover_state == 0){
         
            hover_state = 1;
            $('#slide-nav').stop().slideDown();
            
        }
    }, function() {
        hover_state = 0;
        setTimeout("check_hover()",100);
        
    });
    $('#slide-nav').hover(function() {
        if(hover_state == 0){
            hover_state = 1;
            $('#slide-nav').stop().slideDown();
          
        }
    }, function() {
        hover_state = 0;
        setTimeout("check_hover()",100);
       
    });
})

function check_hover(){
    if(hover_state == 0){
        $('#slide-nav').stop().slideUp();
    }
}



$(function(){
    $("#header .navbar .navbar-toggle").click(function(){
        $("#nav-slide").addClass("show");
        $(".mask").addClass("b-mask");
        $("body").css("overflow","hidden");
    });
    $("#nav-slide .close span img, #content").click(function(){
        $("#nav-slide").removeClass("show");
        $(".mask").removeClass("b-mask");
        $("body").css("overflow","auto");
    });
    $("#nav-slide .cont .top-ul p em").click(function(){
        if($(this).parents("p").next(".sub-ul").css("display") == "none"){
            $("#nav-slide .cont .top-ul p em").removeClass("change");
            $(this).addClass("change");
            $("#nav-slide .cont .sub-ul").slideUp();
            $(this).parents("p").next(".sub-ul").slideDown();
        }else{
            $(this).removeClass("change");
            $(this).parents("p").next(".sub-ul").slideUp();
        }
    })
    $("#header .search-btn").click(function(){
        $("#search").addClass("show");
        $("body").css("overflow","hidden");
    });
    $("#search .search-area, #search .close2").click(function(){
        $("#search").removeClass("show");
        $("body").css("overflow","auto");
    });
});


//通用返回顶部
$(function(){
    //首先将#back-to-top隐藏
    $("#slider-goTop").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $("#slider-goTop").fadeIn();
        }else{
            $("#slider-goTop").fadeOut();
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#slider-goTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
    //返回顶部等滑块hover事件
    $('#slider-chat,#slider-qq,#slider-phone,#slider-wechat').hover(
        function(){
            $(this).next().show();
        },
        function(){
            $(this).next().hide();
        }
    );
});




//收藏本站
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

//点击提交逻辑
  $(".submit-btn").on('click', function() {
    var obj = $('.footer-form');
    var name = obj.find('.name').val().replace(/\s+/g, "");
    var tel = obj.find('.tel').val().replace(/\s+/g, "");
    var content = obj.find('.content').val().replace(/\s+/g, "");
    if (name == '') {
      layer.msg('请填写您的姓名...');
      obj.find('.name').focus();
      return false;
    } else if (name != '' && !/^[\u4E00-\u9FA5]{1,6}$/.test(name)) {
      layer.msg('请填写正确的姓名格式，为2-4个汉字');
      obj.find('.name').focus();
      return false;
    }

    if (tel == '' || (tel != '' && !/^1[34578]\d{9}$/.test(tel))) {
        layer.msg('请输入有效的手机号码');
        obj.find('.tel').focus();
        return false;
    }
	
	$.ajax({
            type: "get",
            url: "",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function (data) {
               
                $("#message_from_m").submit()
            }
        })
    
  });


var swiper = new Swiper('.swiper-banner-container', {
  autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

var swiper2 = new Swiper('.swiper-ann-container', {

  
});
 var swiper3 = new Swiper('.swiper-shop-container', {
    uniqueNavElements :false,
     navigation: {
      nextEl: '.swiper-nav .swiper-button-next',
      prevEl: '.swiper-nav .swiper-button-prev',
    },
	autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: { 
        //当宽度小于等于320
        300: {
          slidesPerView: 1,
          spaceBetween: 10
        },
       //当宽度小于等于480
        767: { 
          slidesPerView: 2,
          spaceBetween: 10,
         
        },
        //当宽度小于等于640
        991: {
          slidesPerView: 3,
          spaceBetween: 10,
          
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 10,
          
        }
       }
    });

!function(win) {
    function resize() {
        var domWidth = domEle.getBoundingClientRect().width;
        if(domWidth / v > 540){
            domWidth = 540 * v;
        }
        win.rem = domWidth / 32;
        domEle.style.fontSize = win.rem + "px";
    }
    var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement, viewport = dom.querySelector('meta[name="viewport"]'), flexible = dom.querySelector('meta[name="flexible"]');
    if (!v && !initial_scale) {
        var n = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi));
        v = win.devicePixelRatio;
        v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
    }
    win.dpr = v;
    win.addEventListener("resize", function() {
        clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
    }, false);
    win.addEventListener("pageshow", function(b) {
        b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
    }, false);
   
    resize();
}(window);


/*动画*/
$(function() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    });
    wow.init();
});
//new WOW().init();
/*动画*/
/*网站标题滚动效果*/
//方法1 网站打开后延迟开启执行滚动效果
setTimeout(function(){
    newtitle();
},300);
function newtitle() {
    //获取网站的标题
    var text=document.title
    var timerID
    //标题超过长度后启用滚动
    if(text.length>10){
        //设置标题，从第二个字获取到末尾+标题的第一个字
        document.title=text.substring(1,text.length)+text.substring(0,1);
        //获取标题长度
        text=document.title.substring(0,text.length);
        //600毫秒后继续调用这个函数进行递归，实现滚动的效果
        timerID = setTimeout("newtitle()", 200)
    }
}
 
/* 
//方法2
var title = document.title;//获取网页标题
var step = 0; 
function rollTitle() { 
    //根据时间每次将切割后前面的字加到后面，直到step比标题个数还大，重新开始
    document.title = title.substring(step, title.length) + title.substring(0, step); 
    step++; 
    if (step >  title.length) step = 0 
    setTimeout("rollTitle()",300); 
} 
rollTitle();//调用函数 
*/
/*网站标题滚动效果*/


