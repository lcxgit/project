//在线客服 1
// $(function() {
//     $("#service a").hover(function() {
//         if ($(this).prop("className") == "weixin_area") {
//             $(this).children("img.hides").show();
//         } else {
//             $(this).children("div.hides").show();
//             $(this).children("img.shows").hide();
//             $(this).children("div.hides").animate({marginRight: '0px'}, '0');
//         }
//     }, function() {
//         if ($(this).prop("className") == "weixin_area") {
//             $(this).children("img.hides").hide();
//         } else {
//             $(this).children("div.hides").animate({marginRight: '-163px'}, 0, function() {
//                 $(this).hide();
//                 $(this).next("img.shows").show();
//             });
//         }
//     });

//     $("#top_btn").click(function() {
//         $("html,body").animate({scrollTop: 0}, 600);
//     });

//     //右侧导航 - 二维码
//     $(".weixin_area").hover(function() {
//         $(this).children(".weixin").show();
//     },function(){
//         $(this).children(".weixin").hide();
//     })
// });
//在线客服 1


//在线客服 2
$(document).ready(function(){
    var Hide=true;//默认是true开启隐藏;false关闭隐藏
    //var Hide=false;
    if(Hide==true){
        //移动触发
        $(".customer").hover(function(){
            $(".customer_hide").hide();
            $(".customer_show").show();
        },function(){
            $(".customer_hide").show();
            $(".customer_show").hide();
        });
    }
        
    if(Hide==false){
        //不自动隐藏
        $(".customer_hide").hide();
        $(".customer_show").show();
        //点击打开
        $(".customer_hide").click( function () { 
            $(this).hide();
            $(".customer_show").show();
        });
    }
    //关闭按钮
    $(".customer_close").click( function () { 
        $(".customer_hide").show();
        $(".customer_show").hide();
    });
});
//在线客服 2













