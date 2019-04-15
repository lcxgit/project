/*移动网站重定向跳转*/
/*
//平台、设备和操作系统
var system = {
    win: false,
    mac: false,
    xll: false,
    ipad: false
};
//检测平台
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//        system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
//跳转语句，如果是手机访问就自动跳转到Mobile页面
if (system.win || system.mac || system.xll) {

} else {
    window.location.href = "/m/";
}
*/

/*网页禁止右键代码*/
/*
//var Prohibit_Right=true;//true开启;false关闭
var Prohibit_Right=false;
if(Prohibit_Right==true){
    $(document).ready(function(){
        document.oncontextmenu=new Function("event.returnValue=false;");
        document.onselectstart=new Function("event.returnValue=false;");
    });
}
*/


/*获得键盘上对应的ascII码*/
/*  
$(document).ready(function(){
    $('input').keydown(function(event){ 
       alert(event.keyCode); 
     });
});
*/

/*滚动屏幕*/
/*
$(function(){
    $('.main').onepage_scroll({
        sectionContainer: '.page',
        direction: 'horizontal'
    });
});
*/

/*
//leftScroll = new IScroll(".food-left");
var myScroll;
function loaded () {
    myScroll = new IScroll('#wrapper', { 
        scrollX: true,  //是否显示横向滚动条
        scrollY: false, //是否显示垂直滚动条
        mouseWheel: true, //是否显示启用鼠标滚动
        fadeScrollbars:true //滚动条淡入淡出效果,当然前提是你滚动条显示了
    });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);*/
/*滚动屏幕*/
$(document).ready(function(){
    var wow = new WOW({
        boxClass:     'wow',      // 动画元素css类（默认是 wow）
        animateClass: 'animated', // 动画css类（默认为动画）
        offset:       0,          // 触发动画时到元素的距离（默认为0）
        mobile:       true,       // 在移动设备上触发动画（默认为true）
        live:         true,       // 对异步加载的内容执行操作（默认为true）
        callback:     function(box) {
            //每次动画启动时都会触发回调
            //传入的参数是动画的DOM节点
        },
        scrollContainer: null //可选的滚动容器选择器，否则使用window
    });
    wow.init();
})
/*品牌官网*/
$(document).ready(function() {
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse').on('show.bs.collapse',
    function(a) {
        $(a.target).prev('.panel-heading').addClass('active');
    }).on('hide.bs.collapse',
    function(a) {
        $(a.target).prev('.panel-heading').removeClass('active');
    });
});
/*品牌官网*/


/*常见问题*/
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


/*客服*/
$(document).ready(function(){
    //$("#kefu").load("kefu.html");
})
/*客服*/

















