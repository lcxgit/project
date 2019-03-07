// console兼容判断
if (!window.console || !console) {
	console = {};
	
	console.log = function() {
	};
}

// 导航栏特殊处理
(function() {
	
	// 一带一路
	$('.header_nav > li:eq(1)').after('<li class="nav_yidaiyilu"><a href="/zhuanti/yidaiyilu/" onClick="ga(\'send\', \'event\', \'顶部导航条\', \'导航频道\', this.href)">一带一路</a></li>');
	if (location.href.indexOf('yidaiyilu') !== -1 || location.href.indexOf('yiluyidai') !== -1) {
		$('.header_nav .on').removeClass('on');
		$('.nav_yidaiyilu').addClass('on');
	}
	// 一带一路（海上）
	if (location.href.indexOf('maritimesilkroad') !== -1 || location.href.indexOf('maritimesilkroad') !== -1) {
		$('.header_nav .on').removeClass('on');
		$('.nav_yidaiyilu').addClass('on');
	}
})();


window.onload = function(){
    setTimeout(function(){
        allTagA = document.querySelectorAll('a');
         var l = allTagA.length;
         for(var i = 0; i < l; i++){
             if(allTagA[i].getAttribute('href') == 'http:' || allTagA[i].getAttribute('href') == ''){
                allTagA[i].href = 'javascript:void(0)';
             }else if(allTagA[i].getAttribute('href') == 'javascript:void(0)'){
                allTagA[i].href = 'javascript:void(0);';
             }
         }
    },500);
    $('#seach_text').keydown(function(){
        var e = e || event;
        var keyNum = e.which || e.keyCode;
        keyNum == 13 && checkForm();
    })
    //检测用户是否第一次浏览,否则关闭底部免费预约框
    //getCookie('buttonDock') ? freeyycolse() : setCookie('buttonDock','1');
}


function setCookie(name, value)
{
    //设置缓存天数
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+"; path=/";
}

function getCookie(name)
{
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+"; path=/";
}
// 输入搜索内容底下弹出框部分变化
function getHeadSearchSuggest() {
    // 输入搜索内容底下部分变化	
    var searchtextid = $("#seach_text").val(),
        you = document.querySelector('#y_nr'),
        wu = document.querySelector('#n_nr');
    // 检查数据完整
    if (searchtextid != 0) {
        if (typeof (getSuggest) != 'undefined') {
            clearTimeout(getSuggest);
        }
        getSuggest = setTimeout(function() {
            $.ajax({
                type: 'get',
                url: '',
                data: {'term': searchtextid},
                dataType: 'json',
                success: function(suggest) {
                    //控制台查看数组结构
                    //console.log(suggest);
                    var l = suggest.length,
                            saveSuggest = document.getElementById('suggestShow'),//填写装在搜索建议的dom元素的id或class，与jq一样以#或.开头
                            sgNum = document.getElementById('suggestNum');
                    if (suggest != '') {
                        var sg = '';
                        for (var i = 0; i < l; i++) {
                            //将搜索结果输出
                            sg += '<li onclick="toDoSearch(this)"><a href="javascript:void(0)">' + suggest[i] + '</a></li>';
                        }
                        sgNum.innerHTML = l;
                        saveSuggest.innerHTML = sg;
                        you.style.display="block";
                        wu.style.display="none";
                    } else {
                        //输出无记录的内容
                        you.style.display="none";
                        wu.style.display="block";
                    }
                }
            });
        }, 500);
    } else {
        you.style.display="none";
        wu.style.display="block";
    }
}


// 输入搜索内容底下部分变化

//手机二维码
function display() {
    document.getElementById("eweima").style.display = "block";
}
function disappear() {
    document.getElementById("eweima").style.display = "none";
}
//手机二维码

//手机二维码
function ddisplay(){ 
	document.getElementById("dweixin").style.display="block"; 
	document.getElementById("deweima").style.display="block"; 
} 
function ddisappear(){ 
	document.getElementById("dweixin").style.display="none"; 
	document.getElementById("deweima").style.display="none"; 
}  
//手机二维码

//----------点击搜索输入框弹出提示关键词框、点击屏幕其它任何部分国家提示框消失------------

$seach_nr = $("#seach_nr");
$("#seach_text").on({
    "click": function() {
        $seach_nr.toggle();
        //获取历史记录
        var historyDom = document.querySelector('#y_history_info'),
                historyInfo = '',
                historyList = getCookie('searchHistory');
        if (historyList != null) {
            var historyArray = historyList.split(';');
            //控制台查看数组结构
            //console.log(historyArray);
            var l = historyArray.length;
            for (var i = 0; i < l; i++) {
                if (historyArray[i] != 'null') {
                    historyInfo += '<li onclick="toDoSearch(this)"><a href="javascript:void(0)">' + historyArray[i] + '</a></li>';
                }
            }
            if (historyInfo != null) {
                var a = document.querySelector('#y_history');
                a.style.display = "block";
                document.querySelector('#n_history').style.display = "none";
                historyDom.innerHTML = '';
                historyDom.innerHTML = historyInfo;
            }
        }
        return false;
    }
});
$(document).on({
    "click": function(e) {
        var src = e.target;
        if (src.id && src.id === "seach_nr") {
            return false;
        } else {
            $seach_nr.hide();
        }
    }
});

function toDoSearch(a) {
    
    a.tagName != 'A' ? document.getElementById('seach_text').value = a.querySelector('a').innerHTML : document.getElementById('#seach_text').value = a.innerHTML;
    setTimeout(function() {
        checkForm();
    }, 100);
}

function window_onload() {
    alert("页面加载完毕后才执行的代码! ");
}

function freeError() {
    $("#r_fyy_prompt").show();
    $("#tj_wrong_fyy").show();
    $("#grey_back").show();
    setTimeout(function() {
        $("#r_fyy_prompt").hide();
        $("#tj_wrong_fyy").hide();
        $("#grey_back").hide();
    }, 2000);
    //alert('网络错误');
}
function messageSuccess() {
    //留言咨询回调函数
    //alert('提交成功');              
    $("#r_msg_prompt").show();
    $("#tj_success_msg").show();
    setTimeout(function() {
        $("#r_msg_prompt").hide();
        $("#tj_success_msg").hide();
        min_right_close();
        var company = document.querySelector('.r_m_company'),
            content = document.querySelector('.r_m_content'),
            contact = document.querySelector('.r_m_contact'),
            tel = document.querySelector('.r_m_tel');
            company.value = '';
            if(!+[1,]) company.focus();
            content.value = '';
            if(!+[1,]) content.focus();
            contact.value = '';
            if(!+[1,]) contact.focus();
            tel.value = '';
            if(!+[1,]) tel.focus();
    }, 1500);

}
function messageError(data) {
    //留言咨询失败回调函数              
    $("#r_msg_prompt").show();
    $("#tj_wrong_msg").show();
    setTimeout(function() {
        $("#r_msg_prompt").hide();
        $("#tj_wrong_msg").hide();
    }, 2000);
    //alert('网络错误');
    //console.log(data);
}
function loginSuccess() {
    //登录成功回调函数 
    $("#r_log_prompt").show();
    $("#tj_success_log").show();
    setTimeout(function() {
        $("#r_log_prompt").hide();
        $("#tj_success_log").hide();
        min_right_close();
    }, 2000);

}
function loginError() {
    //登录失败回调函数  输出 账号或密码错误   
    //alert(1);
    $("#r_log_prompt").show();
    $("#tj_check_log").show();
    setTimeout(function() {
        $("#r_log_prompt").hide();
        $("#tj_check_log").hide();
    }, 2000);


}
function searchSuccess(data) {
    //搜索有数据回调函数 				
    $("#help_default").hide();
    $("#help_nothing").hide();
    $("#help_have").show();
    var l = data.length,
        a = document.getElementById('help_have_l'),
        b = '';
    if(searchMoreButton && l == 30){
        searchMoreButton.style.display = "block";
    }else{
        searchMoreButton.style.display = "none";
    }
    //标题 data[i].title   
    //url '/n/2010'+data[i].id+'.html'
    for (var i = 0; i < l; i++) {
        b += '<li><a href="/n/';
        if(data[i].filename){
            b += data[i].filename;
        }else{
            b += '2010' + data[i].id;
        }
        b += '.html">' + data[i].title + '</a></li>';
    }
    a.innerHTML = b;
    //document.getElementById('helpSearchNum').innerHTML = l;
}
function searchError() {
    //搜索无数据回调函数 				
    $("#help_default").hide();
    $("#help_nothing").show();
    $("#help_have").hide();

}

function sendMessage() {
	/*
	$("#floatR_back").show();
        setTimeout(function() {
            $("#floatR_back").hide();
	}, 2000);//右侧提示信息背景变灰
	*/	
	var company = $('.r_m_company').val(),
        content = $('.r_m_content').val(),
        contact = $('.r_m_contact').val(),
        tel = $('.r_m_tel').val();
    for(var i = 0,l = content.length,T = 0; i < l; i++){
        if(content.charCodeAt(i) > 256) T++;
    }    
    if (!content || T < 2) {
        //var echo = '请填写资讯内容';      
        $("#r_msg_prompt").show();
        $("#tj_error1_msg").show();
        setTimeout(function() {
            $("#r_msg_prompt").hide();
            $("#tj_error1_msg").hide();
        }, 2000);
        return false;
    }
    for(var i = 0,l = company.length,T = 0; i < l; i++){
        if(company.charCodeAt(i) > 256) T++;
    }
    if (!company || company == '公司名称(必填)' || T < 2) {
        //var echo = '请填写公司名称';
        $("#r_msg_prompt").show();
        $("#tj_error2_msg").show();
        setTimeout(function() {
            $("#r_msg_prompt").hide();
            $("#tj_error2_msg").hide();
        }, 2000);
        return false;
    }
    for(var i = 0,l = contact.length,T = 0; i < l; i++){
        if(contact.charCodeAt(i) > 256) T++;
    }
    if (!contact || contact == '联系人(必填)' || T < 2) {
        //var echo = '请填写联系人';
        $("#r_msg_prompt").show();
        $("#tj_error3_msg").show();
        setTimeout(function() {
            $("#r_msg_prompt").hide();
            $("#tj_error3_msg").hide();
        }, 2000);
        return false;
    }
    var telV = tel.replace('-','');
    var re = /^[0-9]+[0-9]*]*$/;
    if (!tel || tel == '联系方式(必填)' || !re.test(telV) || tel.length > 12 || tel.length < 6) {
        //var echo = '请填写正确的联系方式';
        $("#r_msg_prompt").show();
        $("#tj_error4_msg").show();
        setTimeout(function() {
            $("#r_msg_prompt").hide();
            $("#tj_error4_msg").hide();
        }, 2000);
        return false;
    }
    if (typeof (echo) != 'undefined') {
        messageError(echo);
        return false;
    }
    $.ajax({
        type: 'post',
        url: 'http://' + window.location.host + '/index_ajax.php',
        data: {'company': company, 'content': content, 'contact': contact, 'tel': tel, 'ajax': 'message','type':2},
        dataType: 'json',
        success: function(data) {
            if (data == 1){
                messageSuccess();
            }else if(data == 2){
                $("#r_msg_prompt").show();
                $("#tj_error5_msg").show();
                setTimeout(function() {
                    $("#r_msg_prompt").hide();
                    $("#tj_error5_msg").hide();
                }, 2000);
            }
        },
        error: function() {
            messageError();
        }
    });
}
function doLogin() {
	/*
	$("#floatR_back").show();
        setTimeout(function() {
            $("#floatR_back").hide();
	}, 2000);//右侧提示信息背景变灰
	*/	
    var account = $(".r_l_account").val(),
        password = $(".r_l_password").val();
    if (!account || account == '会员账号(必填)') {
        //alert('请输入账号');
        $("#r_log_prompt").show();
        $("#tj_error1_log").show();
        setTimeout(function() {
            $("#r_log_prompt").hide();
            $("#tj_error1_log").hide();
        }, 2000);
        return false;
    }
    if (!password) {
        //alert('请输入密码');
        $("#r_log_prompt").show();
        $("#tj_error2_log").show();
        setTimeout(function() {
            $("#r_log_prompt").hide();
            $("#tj_error2_log").hide();
        }, 2000);
        return false;
    }
    
    //提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
   
    password = $.md5(password);
    var url = "http://service.showguide.cn/Home/showguideIflogin?username="+account+"&pwd="+password+"&callback=userlogin";
    //创建script标签，设置其属性
    var script = document.createElement('script');
    script.setAttribute('src', url);
    //把script标签加入head，此时调用开始
    document.getElementsByTagName('head')[0].appendChild(script);
    
//    $.ajax({
//        type: "POST",
//        url: "http://192.168.1.7:9009/Home/showguideIflogin",
//        data: { "userName": "123123", "pwd": "22222" },
//        success: function (msg) {
//            alert(msg);
//        },
//        error: function (XMLHttpRequest, textStatus, errorThrown) {
//            alert(XMLHttpRequest.status);
//            alert(XMLHttpRequest.readyState);
//            alert(textStatus);
//        }
//
//    }); 
}

var userlogin = function(data){
    if(data.status){
        loginSuccess();
        location.href = '' + data.action;
    }else{
        loginError();
    }
}
function search() {
    var search = document.getElementById('h_seach_nr').value;
    $.ajax({
        type: 'post',
        url: 'http://' + window.location.host + '/index_ajax.php',
        data: {'search': search, 'ajax': 'search'},
        dataType: 'json',
        async: false,
        success: function(data) {
            //console.log(data);
            if (data) {
                searchSuccess(data);
            } else {
                searchError();
            }
        },
        error: function() {
            //alert('网络连接失败');  
            /*
			$("#floatR_back").show();
                    setTimeout(function() {
                            $("#floatR_back").hide();
            }, 2000);//右侧提示信息背景变灰
			*/		 
            $("#r_help_prompt").show();
            $("#tj_wrong_help").show();
            setTimeout(function() {
                $("#r_help_prompt").hide();
                $("#tj_wrong_help").hide();
            }, 2000);
        }
    });
}

function searchMore(data) {
    //搜索有数据回调函数 				
    $("#help_default").hide();
    $("#help_nothing").hide();
    $("#help_have").show();
    var l = data.length,
        a = document.getElementById('help_have_l'),
        b = '';
    if(l < 10){
        searchMoreButton.style.display = 'none';
    }
    //标题 data[i].title   
    //url '/n/2010'+data[i].id+'.html'
    for (var i = 0; i < l; i++) {
        b += '<li><a href="/n/2010' + data[i].id + '.html">' + data[i].title + '</a></li>';
    }
    a.innerHTML += b;
    //document.getElementById('helpSearchNum').innerHTML = l;
}

function searchLoadMore() {
    var search = document.getElementById('h_seach_nr').value,
        len = document.getElementById('help_have_l'),
        liLen = len.getElementsByTagName('li'),
        num = liLen.length;
    $.ajax({
        type: 'post',
        url: 'http://' + window.location.host + '/index_ajax.php',
        data: {'search': search, 'ajax': 'search', 'page':num},
        dataType: 'json',
        async: false,
        success: function(data) {
            //console.log(data);
            if (data) {
                var l = data.length;
                searchMore(data);
            } else {
                searchMoreButton.style.display = 'none';
            }
        }
    });
}

$(function(){
    searchMoreButton = document.getElementById('r_help_havenum');
    if(searchMoreButton){
        $("#r_help_havenum").click(function(){
            searchLoadMore();
        })
    }   
})


function sendFree() {
    var name = $('.freeyy_name').val(),
            tel = $('.freeyy_tel').val();
    if (name == '' || name == '姓名(必填)') {
        //alert('请填写姓名');       
        $("#r_fyy_prompt").show();
        $("#tj_error1_fyy").show();
        $("#grey_back").show();
        setTimeout(function() {
            $("#r_fyy_prompt").hide();
            $("#tj_error1_fyy").hide();
            $("#grey_back").hide();
        }, 2000);
        return false;
    }
    var telV = tel.replace('-','');
    var re = /^[0-9]+[0-9]*]*$/;
    if (!tel || tel == '您的联系电话(必填)' || !re.test(telV) || tel.length > 12 || tel.length < 6) {
        //alert('请填写正确的联系电话');      
        $("#r_fyy_prompt").show();
        $("#tj_error2_fyy").show();
        $("#grey_back").show();
        setTimeout(function() {
            $("#r_fyy_prompt").hide();
            $("#tj_error2_fyy").hide();
            $("#grey_back").hide();
        }, 2000);
        return false;
    }
    $.ajax({
        type: 'post',
        url: 'http://' + window.location.host + '/index_ajax.php',
        data: {'name': name, 'tel': tel, 'ajax': 'free', 'type': 1},
        dataType: 'json',
        success: function(data) {
            if (data == 1){
                //免费预约回调函数
                $(".freeyy_show").show(200);
                $(".freeyy_view").hide(200);
                $("#r_fyy_prompt").show();
                $("#tj_success_fyy").show();
                $("#grey_back").show();
                setTimeout(function() {
                    $("#r_fyy_prompt").hide();
                    $("#tj_success_fyy").hide();
                    $("#grey_back").hide();
                }, 2000);
            }else if(data == 2){
                //重复提交处理
                //alert('请勿重复提交');      
				$("#r_fyy_prompt").show();
				$("#tj_error3_fyy").show();
				$("#grey_back").show();
				setTimeout(function() {
					$("#r_fyy_prompt").hide();
					$("#tj_error3_fyy").hide();
					$("#grey_back").hide();
				}, 2000);
				return false;
            }
        },
        error: function(result) {

            $("#r_fyy_prompt").show();
            $("#tj_wrong_fyy").show();
            $("#grey_back").show();
            setTimeout(function() {
                $("#r_fyy_prompt").hide();
                $("#tj_wrong_fyy").hide();
                $("#grey_back").hide();
            }, 2000);
            //alert('网络错误');
        }
    });
}

//监听回车
$(document).keydown(function(e) {
    var skeyword = document.getElementById('seach_text');
    if(e.keyCode == 13){
        if(document.activeElement.id == 'seach_text'){
            e.preventDefault(); 
            checkForm();
            return false; 
        }
        if(document.activeElement.id == 'h_seach_ok'){
            e.preventDefault(); 
            search();
            return false;
        }
        if(document.activeElement.id == 's_a_nr'){
            e.preventDefault();
            sncheckForm();
            return false;
        }
    }
});


//搜索框处理  返回关联搜索
function sncheckForm(){
    var skeyword = document.getElementById('s_a_nr'),
        search = document.getElementById('seach_text');
    search.value = skeyword.value;
    checkForm();
}

function trim(str){ //删除左右两端的空格
　　return str.replace(/(^\s*)|(\s*$)/g, "");
}

function checkForm()
{
    var skeyword = trim($('#seach_text').val());
    if (skeyword == "请输入展会关键词" || skeyword == "" || skeyword.length < 2 || skeyword == '请输入搜索关键词...')
    {
        $("#t_seach_prompt").show();
        $("#tj_error1_seach").show();
        $("#grey_back").show();
        setTimeout(function() {
            $("#t_seach_prompt").hide();
            $("#tj_error1_seach").hide();
            $("#grey_back").hide();
        }, 2000);
        //alert("请输入搜索关键词,或者关键词不小于两个字符！");
        return false;
    }
    if(skeyword.length > 40){
        $("#t_seach_prompt3").show();
            $("#tj_error3_seach").html('<i class="fa fa-info-circle cs"></i>您的搜索词太长，因为showguide的查询限制在40个字以内');
            $("#tj_error3_seach").show();
            $("#grey_back").show();
            setTimeout(function() {
                $("#t_seach_prompt3").hide();
                $("#tj_error3_seach").hide();
                $("#grey_back").hide();
            }, 2000);
            //alert("包含特殊字符，请重新输入");
        return false;
    }
    var items = new Array("~", "`", "!", "@", "#", "$", "%", "^", "*", "{", "}", "[", "]", "(", ")", ".");
    items.push(":", ";", "'", "|", "\\", "<", ">", "?", "/", "<<", ">>", "||", "//","（","）","【","】","￥","·","！","…","—","、","�");
    items.push("admin", "administrators", "administrator", "管理员", "系统管理员");
    items.push("select", "delete", "update", "insert", "create", "drop", "alter", "trancate");
    str = skeyword.toLowerCase();
    for (var i = 0; i < items.length; i++) {
        if (str.indexOf(items[i]) >= 0) {

            $("#t_seach_prompt2").show();
            $("#tj_error2_seach").show();
            $("#grey_back").show();
            setTimeout(function() {
                $("#t_seach_prompt2").hide();
                $("#tj_error2_seach").hide();
                $("#grey_back").hide();
            }, 2000);
            //alert("包含特殊字符，请重新输入");
            return false;
        }
    }
    var searchHistory = getCookie('searchHistory');
    if (searchHistory != '' && searchHistory != null) {
        var len = searchHistory.split(';'),
            doSet = true;
        for(var i =0, l = len.length; i < l; i++){
            if (len[i] === skeyword) {
                doSet = false;
            }
        }
        if(doSet){
            var newHistory = skeyword + ';' + searchHistory;
            len = newHistory.split(';');
            if(len.length > 5){
                len.pop();
            }
            newHistory = len.join(';');
            setCookie('searchHistory', newHistory);
        }
    } else {
        if(searchHistory !== skeyword){
            setCookie('searchHistory', skeyword);
        }
    }
    document.getElementById("searchForm").submit();
}

//鼠标滑过弹出--开始

function ddd(obj, sType) {
    var oDiv = document.getElementById(obj);
    if (sType == 'show') {
        oDiv.style.display = 'block';
    }
    if (sType == 'hide') {
        oDiv.style.display = 'none';
    }
}




//页面里有点击咨询弹出QQ联系的
function tencentqq() {
	
	var url = 'http://' + window.location.host + '/showguide/getTencentMessageUrl.php?by=reflash&return=url&foo=' + Math.random();
	
	$.ajax({
		url : url,
		dataType : 'text',
		success : function(data) {
			
			if (data) {
				window.location.href = data;
			} else {
				tencentqq();
			}
			
		},
		error : function(e) {
//			console.log(e);
		}
	})
}

//导航百科部分
function baikedisplay(){ 
        var a = document.getElementById("second_list"),
            b = document.getElementById("nav_second");
        if(a) a.style.display="block"; 
        if(b){
            b.style.background="url(static/images/showg_72.png) no-repeat right center";
            b.style.color="#ff7300";
        }  
} 
function baikedisappear(){ 
	var a = document.getElementById("second_list"),
            b = document.getElementById("nav_second");
        if(a) a.style.display="none"; 
        if(b){
            b.style.background="url(static/images/showg_71.png) no-repeat right center";
            b.style.color="#333";
        }
}  

function navsecond(){
        var a = document.getElementById("sencond_list"),
            b = document.getElementById("nav_second");
	if(a && a.style.display == 'none'){
            if(b){
                b.style.background="url(static/images/showg_72.png) no-repeat right center";
		b.style.color="#ff7300";
            }
	}else{
            if(b){
                b.style.background="url(static/images/showg_71.png) no-repeat right center";
		b.style.color="#333";
            }
	}
}

$(document).ready(function(e) {
	
	navsecond();

});
//导航百科部分

function sugsearch(it){
    var s = it.getAttribute('data-search');
    var seach_text = document.getElementById("seach_text");
    seach_text.value = s;
    checkForm();
}
