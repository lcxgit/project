/*jquery*/
//document.write("<scr"+"ipt src='js/jquery.3.4.1.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
/*jquery*/


var jq=$.noConflict();jq.fn.banqh=function(can){can=jq.extend({box:null,pic:null,pnum:null,prev_btn:null,next_btn:null,prev:null,next:null,pop_prev:null,pop_next:null,autoplay:false,interTime:5000,delayTime:800,pop_delayTime:800,order:0,picdire:true,mindire:true,min_picnum:null,pop_up:false,pop_div:null,pop_pic:null,pop_xx:null,mhc:null},can||{});var picnum=jq(can.pic).find('ul li').length;var picw=jq(can.pic).find('ul li').outerWidth(true);var pich=jq(can.pic).find('ul li').outerHeight(true);var poppicw=jq(can.pop_pic).find('ul li').outerWidth(true);var picminnum=jq(can.pnum).find('ul li').length;var picpopnum=jq(can.pop_pic).find('ul li').length;var picminw=jq(can.pnum).find('ul li').outerWidth(true);var picminh=jq(can.pnum).find('ul li').outerHeight(true);var pictime;var tpqhnum=0;var xtqhnum=0;var popnum=0;jq(can.pic).find('ul').width(picnum*picw).height(picnum*pich);jq(can.pnum).find('ul').width(picminnum*picminw).height(picminnum*picminh);jq(can.pop_pic).find('ul').width(picpopnum*poppicw);jq(can.pnum).find('li').click(function(){tpqhnum=xtqhnum=jq(can.pnum).find('li').index(this);show(tpqhnum);minshow(xtqhnum);}).eq(can.order).trigger("click");if(can.pop_up==true){jq(can.pic).find('ul li').click(function(){jq(can.mhc).height(jq(document).height()).show();jq(can.pop_div).show();popnum=jq(this).index();var gdjl_w=-popnum*poppicw;jq(can.pop_pic).find('ul').css('left',gdjl_w);popshow(popnum);})
jq(can.pop_xx).click(function(){jq(can.mhc).hide();jq(can.pop_div).hide();})}
if(can.autoplay==true){pictime=setInterval(function(){show(tpqhnum);minshow(tpqhnum)
tpqhnum++;xtqhnum++;if(tpqhnum==picnum){tpqhnum=0};if(xtqhnum==picminnum){xtqhnum=0};},can.interTime);jq(can.box).hover(function(){clearInterval(pictime);},function(){pictime=setInterval(function(){show(tpqhnum);minshow(tpqhnum)
tpqhnum++;xtqhnum++;if(tpqhnum==picnum){tpqhnum=0};if(xtqhnum==picminnum){xtqhnum=0};},can.interTime);});}
jq(can.prev_btn).click(function(){if(tpqhnum==0){tpqhnum=picnum};if(xtqhnum==0){xtqhnum=picnum};xtqhnum--;tpqhnum--;show(tpqhnum);minshow(xtqhnum);})
jq(can.next_btn).click(function(){if(tpqhnum==picnum-1){tpqhnum=-1};if(xtqhnum==picminnum-1){xtqhnum=-1};xtqhnum++;minshow(xtqhnum)
tpqhnum++;show(tpqhnum);})
jq(can.prev).click(function(){if(tpqhnum==0){tpqhnum=picnum};if(xtqhnum==0){xtqhnum=picnum};xtqhnum--;tpqhnum--;show(tpqhnum);minshow(xtqhnum);})
jq(can.next).click(function(){if(tpqhnum==picnum-1){tpqhnum=-1};if(xtqhnum==picminnum-1){xtqhnum=-1};xtqhnum++;minshow(xtqhnum)
tpqhnum++;show(tpqhnum);})
jq(can.pop_prev).click(function(){if(popnum==0){popnum=picnum};popnum--;popshow(popnum);})
jq(can.pop_next).click(function(){if(popnum==picnum-1){popnum=-1};popnum++;popshow(popnum);})
function minshow(xtqhnum){var mingdjl_num=xtqhnum-can.min_picnum+2
var mingdjl_w=-mingdjl_num*picminw;var mingdjl_h=-mingdjl_num*picminh;if(can.mindire==true){jq(can.pnum).find('ul li').css('float','left');if(picminnum>can.min_picnum){if(xtqhnum<3){mingdjl_w=0;}
if(xtqhnum==picminnum-1){mingdjl_w=-(mingdjl_num-1)*picminw;}
jq(can.pnum).find('ul').stop().animate({'left':mingdjl_w},can.delayTime);}}else{jq(can.pnum).find('ul li').css('float','none');if(picminnum>can.min_picnum){if(xtqhnum<3){mingdjl_h=0;}
if(xtqhnum==picminnum-1){mingdjl_h=-(mingdjl_num-1)*picminh;}
jq(can.pnum).find('ul').stop().animate({'top':mingdjl_h},can.delayTime);}}}
function show(tpqhnum){var gdjl_w=-tpqhnum*picw;var gdjl_h=-tpqhnum*pich;if(can.picdire==true){jq(can.pic).find('ul li').css('float','left');jq(can.pic).find('ul').stop().animate({'left':gdjl_w},can.delayTime);}else{jq(can.pic).find('ul').stop().animate({'top':gdjl_h},can.delayTime);}
jq(can.pnum).find('li').eq(tpqhnum).addClass("border").siblings(this).removeClass("border");};function popshow(popnum){var gdjl_w=-popnum*poppicw;jq(can.pop_pic).find('ul').stop().animate({'left':gdjl_w},can.pop_delayTime);};}


jq('#demo1').banqh({
    box: "#demo1",
    //总框架
    pic: "#ban_pic1",
    //大图框架
    pnum: "#ban_num1",
    //小图框架
    prev_btn: "#prev_btn1",
    //小图左箭头
    next_btn: "#next_btn1",
    //小图右箭头
    pop_prev: "#prev2",
    //弹出框左箭头
    pop_next: "#next2",
    //弹出框右箭头
    prev: "#prev1",
    //大图左箭头
    next: "#next1",
    //大图右箭头
    autoplay: true,
    //是否自动播放
    interTime: 5000,
    //图片自动切换间隔
    delayTime: 400,
    //切换一张图片时间
    order: 0,
    //当前显示的图片（从0开始）
    picdire: true,
    //大图滚动方向（true为水平方向滚动）
    mindire: true,
    //小图滚动方向（true为水平方向滚动）
    min_picnum: 5,
    //小图显示数量
})

