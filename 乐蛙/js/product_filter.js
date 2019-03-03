/*filterizr 产品筛选*/
document.write("<scr"+"ipt src='js/jquery.filterizr.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
/*filterizr 产品筛选*/

// 产品筛选
$(function() {
    $('.product_list_img').filterizr();
    
    $('.nav li').on('click', function() {
        $(this).toggleClass('active');
    });
    $('.nav .all_h2').on('click', function() {
        $(this).toggleClass('').siblings().removeClass('active');
    });
});
// 产品筛选

