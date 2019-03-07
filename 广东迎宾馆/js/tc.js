
document.write("<scr"+"ipt src='https://cdn.bootcss.com/layer/2.3/layer.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");


$(document).ready(function() {
    layer.open({
        content: '<img src="images/gg.png" class="img-responsive center-block" />',
            yes: function(index, layero){
            //do something
            layer.close(index); //如果设定了yes回调，需进行手工关闭
        }
    });   
});