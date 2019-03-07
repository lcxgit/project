/*移动网站跳转
---------------------------------------------------------------------------------*/
/*	//平台、设备和操作系统
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
		window.location.href = "/Mobile/";
	}
*/

/*全局表单
---------------------------------------------------------------------------------*/
	$(document).ready(function(){
		
		//输入框
		$(".input").hover(function(){
			$(this).addClass("focus");
		},function(){
			$(this).removeClass("focus");
		});
		
		//多行输入框
		$(".textarea").hover(function(){
			$(this).addClass("focus");
		},function(){
			$(this).removeClass("focus");
		});
		
		//输入框当前焦点
		$(".input").focusin(function() {
			$(this).addClass("focusin");
		});
		$(".input").focusout(function() {
			$(this).removeClass("focusin");
		});
		$(".textarea").focusin(function() {
			$(this).addClass("focusin");
		});
		$(".textarea").focusout(function() {
			$(this).removeClass("focusin");
		});
		
		//输入框第一个焦点
		//$(".input:first").focus();
		
		// Invoke the plugin
		 $('input, textarea').placeholder();
	});


/*全局表格
---------------------------------------------------------------------------------*/
	$(document).ready(function(){
		//表格隔行
		$("tr:even").addClass("even");
		//表格经过
		$("tr").hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		});
	});
	
	
	
/*圆角按钮
---------------------------------------------------------------------------------*/
	$(document).ready(function(){
		//var button_wrap=true;//默认是true开启圆角;false关闭圆角
		var button_wrap=false;
		if(button_wrap==true){
				$(".button_1_b").wrap("<span class='button_wrap b_wrap_1_b'></span>");
				$(".button_1_s").wrap("<span class='button_wrap b_wrap_1_s'></span>");
				$(".button_2_b").wrap("<span class='button_wrap b_wrap_2_b'></span>");
				$(".button_2_s").wrap("<span class='button_wrap b_wrap_2_s'></span>");
				
				$(".button_wrap").prepend("<i class='button_L'></i>");
				$(".button_wrap").append("<i class='button_R'></i>");
			}
	});
	
//在线客服配置
	$(document).ready(function(){
		var Hide=true;//true开启;false关闭
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
	
	
		
/*网页禁止右键代码
---------------------------------------------------------------------------------*/
	//var Prohibit_Right=true;//true开启;false关闭
	var Prohibit_Right=false;
	if(Prohibit_Right==true){
			$(document).ready(function(){
				document.oncontextmenu=new Function("event.returnValue=false;");
				document.onselectstart=new Function("event.returnValue=false;");
			});
		}


/*获得键盘上对应的ascII码
---------------------------------------------------------------------------------*/
/*	$(document).ready(function(){
		$('input').keydown(function(event){ 
		   alert(event.keyCode); 
		 });
	});*/
	

/*全局提示
---------------------------------------------------------------------------------*/
	/*$(document).ready(function(){
		$(".mode_tips_btn_1").click(function(){//大图单击切换
				var mode_tips_text=("提交成功！");
				$(".mode_tips_text").text(mode_tips_text);
				$(".gtl_ico_succ").addClass("mode_tips_1");
				$(".msgbox_layer_wrap").show();
			});
	});*/



/*相关机构
---------------------------------------------------------------------------------*/
	/*$(document).ready(function(){
		$(".Language").hover(function(){
			$(this).children(".Language_c").show();
		},function(){
			$(this).children(".Language_c").hide();
		});
	});*/
