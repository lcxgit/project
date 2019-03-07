
//强行使IE8 input[type=password] 兼容 placeholder
$('#indexpassword').blur(function(){
    if(!this.value){
        var a = document.getElementById('indexpassword'),
            b = document.getElementById('indexpasstext');
        a.style.display = "none";
        b.style.display = "block";
    }
});
function changeType(it){
    var a = document.getElementById('indexpassword'),
        b = document.getElementById('indexpasstext');
    if(it.type == 'text'){
        b.style.display = "none";
        a.style.display = "block";
        a.focus();
    }
}


//------浮动右侧伸缩和全屏变黑变亮-----

function minrightshow() {
	//点击右侧伸
	//alert(999);
	$('#zx_view').animate({width: 'show', opacity: 'show'}, 'normal',function(){
		$('#zx_view').show();
	});
	//点击全屏幕变黑
	var isMenuOpen = false;
	if (isMenuOpen == false) {
		$("#grey_back").fadeIn('fast');
		isMenuOpen = true;
	}
}

function min_right_close() {
//$("#min_right_close").click(function(){
	//点击右侧缩
	$('#zx_view').animate({width: 'hide', opacity: 'hide'}, 'normal',function(){
		$('#zx_view').hide();
	});
	//点击全屏幕变亮
	var isMenuOpen = true;		
	if (isMenuOpen == true) {
		$("#grey_back").fadeOut('fast');
		isMenuOpen = false;
	}
	//点击对应栏目全部变暗
	$(".online_service").removeClass("dqon2");
	$(".online_message").removeClass("dqon");  
	$(".online_help").removeClass("dqon"); 
	
	
}//);


//------浮动右侧伸缩和全屏变黑变亮-----



//------免费预约部分-----
function freeyycolse(){
	//关闭底部预约显示右侧预约	
	$(".freeyy_show").show(200);
	$(".freeyy_view").hide(200);	
}
$(".freeyy_show").click(function() {
	//关闭右侧预约显示底部预约
	$(".freeyy_show").hide(200);
	$(".freeyy_view").show(200);
});

//------免费预约部分-----


//------客服系统、留言、帮助部分-----
//点击客服系统时
/*
$(".online_service").click(function(){	
   
	$(this).addClass("dqon2");
	$(".online_message").removeClass("dqon");  
	$(".online_help").removeClass("dqon"); 		
		   
	$("#r_service").show();
	$("#r_message").hide(); 
	$("#r_help").hide(); 
  
});
*/
//点击留言时  
$(".online_message").click(function(){
   
	$(this).addClass("dqon");
	$(".online_service").removeClass("dqon2");  
	$(".online_help").removeClass("dqon"); 
	
	$("#r_service").hide();
	$("#r_message").show(); 
	$("#r_help").hide(); 
  
});
//点击帮助时  
$(".online_help").click(function(){	
   
	$(this).addClass("dqon");
	$(".online_service").removeClass("dqon2");  
	$(".online_message").removeClass("dqon"); 		
		   
	$("#r_service").hide();
	$("#r_message").hide(); 
	$("#r_help").show(); 
	
	//帮助中的自适应屏幕
	var s = document.documentElement.clientHeight;
	s = s -280 ;
    $('.r_help_havek').css('height',s+'px');//调整列表的宽高
  
});

//------客服系统、留言、帮助部分-----



//右侧手机二维码
function rightdisplay(){ 
	document.getElementById("righteweima").style.display="block"; 
	//$(".floatL").css("width","177px");
	//$(".floatL").css("margin-left","-177px");
	//$(".btnOpen").css("padding-left","141px");
} 
function rightdisappear(){ 
	document.getElementById("righteweima").style.display="none"; 
	//$(".floatL").css("width","36px");
	//$(".floatL").css("margin-left","-36px");
	//$(".btnOpen").css("padding-left","0px");
}  
//右侧手机二维码



//右侧留言点取消
function cancelMessage() {
	//点击右侧缩
	$('#zx_view').animate({width: 'hide', opacity: 'hide'}, 'normal',function(){
		$('#zx_view').hide();
	});
	//点击全屏幕变亮
	var isMenuOpen = true;		
	if (isMenuOpen == true) {
		$("#grey_back").fadeOut('fast');
		isMenuOpen = false;
	}
	//点击对应栏目全部变暗
	$(".online_service").removeClass("dqon2");
	$(".online_message").removeClass("dqon");  
	$(".online_help").removeClass("dqon");
	//清空写入数据
	var nr=document.getElementsByName("r_m_content");
	var mc=document.getElementsByName("r_m_company"); 
	var lxr=document.getElementsByName("r_m_contact");
	var fs=document.getElementsByName("r_m_tel"); 
	for(var i=0;i<nr.length;i++) 
	{ 
		nr[i].value=''; 
                if(!+[1,]) nr[i].focus();
	}; 
	for(var i=0;i<mc.length;i++) 
	{ 
		mc[i].value=''; 
                if(!+[1,]) mc[i].focus();
	}; 
	for(var i=0;i<lxr.length;i++) 
	{ 
		lxr[i].value=''; 
                if(!+[1,]) lxr[i].focus();
	}; 
	for(var i=0;i<fs.length;i++) 
	{ 
		fs[i].value=''; 
                if(!+[1,]) fs[i].focus();
	};
};







//----返回顶部超过一屏显示----
$(function(){
    	$(window).scroll(function(){
			var st = $(document).scrollTop();
			if( st>0 ){
				if( $('#main-container').length != 0  ){
					var w = $(window).width(),mw = $('#main-container').width();
					if( (w-mw)/2 > 70 )
						$('#go_top').css({'left':(w-mw)/2+mw+20});
					else{
						$('#go_top').css({'left':'auto'});
					}
				}
				$('#go_top').fadeIn(function(){
					$(this).removeClass('dn');
				});
			}else{
				$('#go_top').fadeOut(function(){
					$(this).addClass('dn');
				});
			}	
		});
	
	$('#go_top').click(function(){
		$('html,body').animate({'scrollTop':0},500);//点击返回顶部
	});
        
    //获取右侧帮助信息
    if(document.getElementById('passportQuestion1')){
        $.ajax({
            type:'post',
            url:'',
            data:{'ajax':'visaAndPassport'},
            dataType:'json',
            //async: false,
            success:function(data){
                //console.log(data);
                if (data) {
                	var info = '';
                    var l = data.passport.length,info = '';
                    for(var i = 0; i < l; i++){
                        info += '<li><a target="_blank" href="/n/';
                        if(data.passport[i]['filename']){
                            info += data.passport[i]['filename'];
                        }else{
                            info += '2010'+data.passport[i]['id'];
                        }
                        info += '.html">'+data.passport[i]['title']+'</a></li>';
                    }
                    document.getElementById('passportQuestion1').innerHTML = info;
                    document.getElementById('passportQuestion2').innerHTML = info;
                }
                
            },
            error:function(){
                //console.log(data);
            }
        });
    }
});
//----返回顶部超过一屏显示----



//右侧帮助搜索后内容高度自动生成

$(function(){ 
    autoHeight();
});

window.onresize = function(){
    autoHeight();
};
function autoHeight(){
    var rah = document.getElementById('r_help_havek');
    var autoheight = document.documentElement.clientHeight;
    var aheight = autoheight - 270;
    //alert(aheight);
    //if (rah.style.height && aheight) {
    	//rah.style.height = aheight + 'px';
    //}
    
}

//右侧帮助热搜
function searchHelp(a){
	 var b = document.getElementById('h_seach_nr');
	 b.value = a.innerHTML;
	 search();
}



function ResizePic(ImgTag,w,h)
{
 var image = new Image();
 var FitWidth = w;
 var FitHeight = h;
 image.src = ImgTag.src;
 if(image.width>0 && image.height>0){
  if(image.width/image.height >= FitWidth/FitHeight){
   if(image.width > FitWidth){
    ImgTag.width = FitWidth;
    ImgTag.height = (image.height*FitWidth)/image.width;
   }
   else{
    ImgTag.width = image.width;
    ImgTag.height = image.height;
   }
  }
  else{
   if(image.height > FitHeight){
    ImgTag.height = FitHeight;
    ImgTag.width = (image.width*FitHeight)/image.height;
   }
   else{
    ImgTag.width = image.width;
    ImgTag.height = image.height;
   }
  }
 }
}






