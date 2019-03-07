var country = '' // 保存全局国家内容
$(document).ready(function(){
	var country = $(".silk-txt-show .silk-info-l-ul li.active span").html()
	
	getdata(country)
	$('#countryBox').click(function(){
		var country = $(".silk-txt-show .silk-info-l-ul li.active span").html()
		if (country == '阿联酋') {
	    	country = '阿联酋,迪拜';
	    }
		getdata(country)
	})

	$('.silk-info-l-ul').click(function(e){
		var country = $('.silk-txt-show .silk-info-l-ul li.active span').html()
	    if (country == '阿联酋') {
	    	country = '阿联酋,迪拜';
	    }
	    if (country == '孟加拉') {
	    	country = '孟加拉国';
	    }
	    if (country == '印度尼西亚') {
	    	country = '印尼';
	    }
		getdata(country)
	})

	// 获取政策文章 road-article
	$.ajax({
		type: 'post',
		url: '',
		success: function(res){
			console.log(res)
			$('#road-article').html(res);
		}
	})
})

function getdata(country){
	getExpoByCountry(country, '.silk-txt-show .silk-info-r-ul', '')
	getIndustryByCountry(country)
}

function industrySelect() {
    var industry = $(".yiluyidai_select select option:selected").attr("value");
    var country = $(".silk-txt-show .silk-info-l-ul li.active span").html();
    if (country == '阿联酋') {
    	country = '阿联酋,迪拜';
    }
    if (country == '孟加拉') {
    	country = '孟加拉国';
    }
    if (country == '印度尼西亚') {
    	country = '印尼';
    }
    getExpoByCountry(country, '.silk-txt-show .silk-info-r-ul', industry)
}

function getIndustryByCountry(country) {
    $.ajax({
        type: 'post',
        url: '',
        data: {
            country: country
        },
        dataType: 'json',
        success: function (data) {
            $(".yiluyidai_select select").empty();
            $(".yiluyidai_select select").append("<option value=''>请选择行业</option>");
            for (var i = 0; i < data.length; i++) {
                $(".yiluyidai_select select").append("<option value='" + data[i].industry + "'>" + data[i].in_Name_CN + "</option>");
            }
        }
    });
}

// 根据国家获取展会信息
function getExpoByCountry(country, classname, industry){
	// if(window.localStorage && (window.localStorage.setItem('a', 123) , window.localStorage.getItem('a') == 123)){
	// 	if(window.localStorage.getItem('yilu'+id)){
	// 		$('#'+id).html(window.localStorage.getItem('yilu'+id))
	// 		return false
	// 	}
	// }
	// console.log(country);
	/*$.ajax({
		type: 'post',
		url: '',
		data: {
			country: country,
            industry:industry
		},
		dataType:'json',
		success: function(res){
			var template = '';
			for(var i = 0; i < res.length; i++){
				template += '<li title="' + res[i].title + '">\
								<a target="_block" href="' + res[i].arcurl + '">\
									<div class="silk-info-img">\
										<img onload="javascript:SetImage(this, 181, 75)" src="' + res[i].litpic + '" alt="">\
									</div>\
									<h3>' + res[i].title + '</h3>\
									<p>' + res[i].time + '</p>\
								</a>\
							</li>'
			}
			$(classname).html(template)
			// if(window.localStorage && (window.localStorage.setItem('a', 123) , window.localStorage.getItem('a') == 123)){
			// 	window.localStorage.setItem('yilu'+id, template)
			// }
		},
		error: function(){
			alert('请求出错')
		}
	})*/
}

$(function(){
    $(".yiluyidai_select select").bind('change', industrySelect);
});



