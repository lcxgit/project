// go_exh

function scrollUl(id,obj){
	if(obj.getAttribute('data-status') == "up"){
		obj.setAttribute('data-status', 'down')
		obj.innerHTML = "展开 <i class='fa  fa-angle-down'></i>";
		expan(id);
	}else{
		obj.setAttribute('data-status', 'up')
		obj.innerHTML = "收起 <i class='fa  fa-angle-up'></i>";
		impan(id);
	}
}

function expan(id){
	document.getElementById(id).style.height = "32px";
}

function impan(id){
	document.getElementById(id).style.height = "auto";
}


//有结果头部按行业、国家、年份点击切换
$(function(){
    //点击样式切换
	$(".f_d_nav li").click(function(){
        $(".f_d_nav li").removeClass("on");
        $(this).addClass("on");
    });
});

$(function(){
    //点击显示对应内容
	$("#by_industry").click(function(){
        $("#by_industry_show").show();
        $("#by_country_show").hide();
        $("#by_year_show").hide();
    });
	$("#by_country").click(function(){
        $("#by_industry_show").hide();
        $("#by_country_show").show();
        $("#by_year_show").hide();
    });
	$("#by_year").click(function(){
        $("#by_industry_show").hide();
        $("#by_country_show").hide();
        $("#by_year_show").show();
    });
});














