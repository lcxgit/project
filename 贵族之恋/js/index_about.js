
document.write("<scr"+"ipt src='js/jquery.easing.min.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
document.write("<scr"+"ipt src='js/jquery.cycle2.min.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

$(function(){

  $(window).resize(function(){
    if ($(window).width() <= 767) {
      var photoH = $('.feature .bg_photo_box').height();
      var txtH = $('.feature .info_box').height();

      var wrapperH = $('.feature .com_box01').outerHeight();

      //$('.feature .com_box01 .com_info_box').height(photoH + txtH + wrapperH + 'px');
      $('.feature .com_box01 .info_box').height('auto');
    }else{
      $('.feature .bg_photo_box').width(Math.floor($('.feature .com_box01').width()/2)-50);
    }
  }).trigger('resize');


  if($('.com_box01:not(.journal)').length){

    var $comslideshow01 = $('.com_box01 .bg_photo_box');
    var flag1 = 0;

    if($comslideshow01.find('.bg_photo').length > 1){

      if($comslideshow01.find('.bg_photo').length == 2){
        $comslideshow01.append($comslideshow01.find('.bg_photo').clone());
        //$('.com_info_box .controler').css('opacity',0);
        flag1 = 1;
      }

      $comslideshow01.cycle({
        slides:'.bg_photo',
        fx:'slideHorz',
        easing:'easeInOutQuart',
        hideNonActive:false,
        autoHeight:false,
        slideCss:{},
        allowWrap:true,
        manualTrump:false,
        swipe:true,
        speed:1400,
        timeout:5000,
        autoHeight:'container'
      });

      if(flag1 == 1){
        /*$comslideshow01.on( 'cycle-update-view', function( event, opts ) {
        $('.com_info_box .controler li:gt(1)').hide();
        $('.com_info_box .controler').css('opacity',1);
      });*/

        var delay1, delay2;
        $comslideshow01.on('cycle-after', function(e, o){
          if(o.nextSlide == 1){
            $comslideshow01.cycle('pause');
            clearTimeout(delay1);
            clearTimeout(delay2);
            delay1 = setTimeout(function(){
              $comslideshow01.cycle('goto', 0);
            }, 5000);
          }else{
            $comslideshow01.cycle('pause');
            clearTimeout(delay1);
            clearTimeout(delay2);
            delay2 = setTimeout(function(){
              $comslideshow01.cycle('goto', 1);
            }, 5000);
          }
        });

      }

    }else{

      $('.com_info_box .controler,.com_box01 .next,.com_box01 .prev').hide();

    }

    var $comslideshow02 = $('.com_box01 .sub_info_box');
    $comslideshow02.cycle({
      slides:'.info_box',
      easing:'easeInOutQuart',
      next:'.com_box01 .next',
      prev:'.com_box01 .prev',
      hideNonActive:false,
      autoHeight:false,
      slideCss:{},
      allowWrap:true,
      manualTrump:false,
      swipe:true,
      speed:1400,
      timeout:5000,
      autoHeight:'container',
      pager:'.com_box01 .controler',
      pagerTemplate:'<li><a href="#">0{{slideNum}}</a></li>'
    });

    $comslideshow02.on('cycle-next', function(e, opts){
      if(flag1 == 1 && opts.currSlide == 0){
        $comslideshow01.cycle('goto', 0);
      }else{
        $comslideshow01.cycle('next');
      }
    });

    $comslideshow02.on('cycle-prev', function(e, opts){
      if(flag1 == 1 && opts.currSlide == 1){
        $comslideshow01.cycle('goto', 1);
      }else{
        $comslideshow01.cycle('prev');
      }
    });

    $comslideshow01.on('cycle-next', function(e, opts){
      $comslideshow02.cycle('next');
    });

    $comslideshow01.on('cycle-prev', function(e, opts){
      $comslideshow02.cycle('prev');
    });

    $('.com_box01 .controler li a').click(function(){
      var index = $(this).parent().index();
      var cur = $(this).parents('.controler').find('.cycle-pager-active').index();
      var length = $('.com_box01 .controler li').length;
      if(flag1 == 1){
        if(cur == 0 && index == 1){
          $comslideshow01.cycle('goto', 1);
        }else if(cur == 1 && index == 0){
          $comslideshow01.cycle('goto', 0);
        }
      }else{
        if(cur == 0 && index == length - 1){
          $comslideshow01.cycle('prev');
        }else if(cur == length - 1 && index == 0){
          $comslideshow01.cycle('next');
        }else{
          $comslideshow01.cycle('goto', index);
        }
      }
    });

    $comslideshow01.on('cycle-after', function(e, o){
      $('.cycle-slide-active').css('z-index', '105');
    });

    /*$comslideshow01.on('cycle-before', function(e, o, next, curr, fwd){
      $('.com_box01 .info_box').animate({opacity:0},{duration:700,done:function(){
      $('.cycle-slide-active').animate({opacity:1},{duration:700});
      }});
    });*/

    if($(window).width() <= 767){
      $('.com_box01 .bg_photo_box').insertAfter('.com_box01 .controler').wrap('<div class="wrap_box"></div>');
    }

  }

});
