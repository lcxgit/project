
document.write("<scr"+"ipt src='js/jquery.exzoom.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");

//放大镜
$(document).ready(function() {
    $("#exzoom").exzoom({
        autoPlay: false,
    }); //方法调用，务必在加载完后执行
});
//放大镜