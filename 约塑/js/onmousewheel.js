
// 禁止Ctrl+鼠标滚轴浏览器页面缩放
/*document.onmousewheel = function(evt) {
    var e = evt || window.event;
    if (e.preventDefault && e.ctrlKey) e.preventDefault();
    if (e.ctrlKey) e.returnValue = false;
};
if (window.addEventListener) window.addEventListener('DOMMouseScroll', document.onmousewheel, false);
*/


// 判断pc浏览器是否缩放，若返回100则为默认无缩放，如果大于100则是放大，否则缩小
function detectZoom() {
    var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    } else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio) {
        ratio = Math.round(ratio * 100);
    }

    return ratio;
};
//window.onresize 事件可用于检测页面是否触发了放大或缩小。
$(function(){
  //alert(detectZoom())
})
$(window).on('resize',function(){
    isScale();
});
//判断PC端浏览器缩放比例不是100%时的情况
function isScale(){
	var rate = detectZoom();
		if(rate != 100){
		//如何让页面的缩放比例自动为100,'transform':'scale(1,1)'没有用，又无法自动条用键盘事件，目前只能提示让用户如果想使用100%的比例手动去触发按ctrl+0
		console.log(1)
		alert('当前页面不是100%显示，请按键盘ctrl+0恢复100%显示标准，以防页面显示错乱！')
	}
}
 
//阻止pc端浏览器缩放js代码
//由于浏览器菜单栏属于系统软件权限，没发控制，我们着手解决ctrl/cammond + +/- 或 Windows下ctrl + 滚轮 缩放页面的情况，只能通过js来控制了
 // jqeury version
$(document).ready(function () {
	// chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
	$('body').css('zoom', 'reset');
		$(document).keydown(function (event) {
		//event.metaKey mac的command键
		if ((event.ctrlKey === true || event.metaKey === true)&& (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187  || event.which === 189)){
			event.preventDefault();
		}
	});
	$(window).bind('mousewheel DOMMouseScroll', function (event) {
		if (event.ctrlKey === true || event.metaKey) {
		   event.preventDefault();
		}
	});
});






