dl_close = function() {
    $("#grey_back2").hide();
    $(".tc_dlbb").hide();
};
function openIllegal() {
    $('#grey_back2').show();
    $('.prompt').show();
    var time = 3;//设定跳转的时间
    var countDown = setInterval(function(){
        time -= 1;
        if(time == 0){
            $('#grey_back2').hide();
            $('.prompt').hide();
            clearInterval(countDown);
        }
    },1000);
}

//打开报名登记
function regist_popup_open(id) {
    if (id) {
        $.ajax({
            type: 'post',
            data: {aid: id},
            url: '',
            success: function(data) {
                if (data == 'false') {
                    //未登录  登录弹窗
                    $('#grey_back2').show();
                    $('#popUpLogin').show();
                }else if(data == 'illegal') {
                    openIllegal();
                }else {
                    //已登录
                    $("#regist_popup_show").css("display", "block");
                    $("#grey_back2").css("display", "block");
					if(data.haveuser == '1'){
                    $('#bm_company').val(data.showguide_company);
                    $('#bm_contact').val(data.nickname);
                    $('#bm_tel').val(data.tel);
					}
                    if(data.is_robfloor == 1){
                        $('.p_u_tit').find('span').html('点击报名即享千元优惠');
                    }
                    $.ajax({
                        type: "post",
                        url: '',
                        data: {'ajax': 'doApply', 'aid': id},
                        dataType: 'json',
                        async: false,
                        success: function(data) {
                            var a = document.getElementById('expoSubmitTitle'),
                                b = document.getElementById('expoSubmitTime');
                                a.innerHTML = data.title;
                                b.innerHTML = '展会时间：' + data.stime + data.etime;
                        },
                        error: function(data) {

                        }
                    });
                }
            }
        });
    }

}
function regist_popup_colse() {
    $("#regist_popup_show").hide();
    $("#grey_back2").hide();
}

//先写报名表单的判断
var apply = {
    message: {
        company: '#bm_company',
        content: '#bm_content',
        contact: '#bm_contact',
        qq: '#bm_qq',
        tel: '#bm_tel'
    },
    success: function() {
        //提交成功回调函数
        $(".refer_prompt").show();
        $('#regist_popup_show').hide();
        setTimeout(function() {
            $(".refer_prompt").hide();
            hideWin();
        }, 1000);
    },
    error: function() {
        //提交失败回调函数
        $("#bm_prompt").show();
        $("#tj_wrong_bm").show();
        setTimeout(function() {
            $("#bm_prompt").hide();
            $("#tj_wrong_bm").hide();
            min_right_close();
        }, 1500);
    },
    sendMessage: function() {
       setTimeout(baomingtj);
    }
};

function baomingtj(){
         var company = document.getElementById('bm_company').value,
                content = document.getElementById('bm_content').value,
                contact = document.getElementById('bm_contact').value,
                tel = document.getElementById('bm_tel').value,
                qq = document.getElementById('bm_qq').value,
            referee = document.getElementById('bm_referee').value;//推荐人

        if (document.getElementById('expoSubmitTitle')) {
            var expoTitleToApply = document.getElementById('expoSubmitTitle').innerHTML;
        } else if (document.getElementById('expoTitleToApply')) {
            var expoTitleToApply = document.getElementById('expoTitleToApply').innerHTML;
        }
        for (var i = 0, l = company.length, T = 0; i < l; i++) {
            if (company.charCodeAt(i) > 256)
                T++;
        }
		
		// 恢复所有输入框的样式和提示文字
		  	$("input[id^='bm_company']").each(function(){
		  		$(this).attr('class', 'input_k');
				$("#bm_companywrong").hide();
		  	});
		  	$("input[id^='bm_contact']").each(function(){
		  		$(this).attr('class', 'input_k');
				$("#bm_contactwrong").hide();
		  	});
		  	$("input[id^='bm_tel']").each(function(){
		  		$(this).attr('class', 'input_k');
				$("#bm_telwrong").hide();
		  	});
		
        if (!company || company == '公司名称(必填)' || (T < 1 && T == 0 && company.length < 2)) {
            //var echo = '请填写公司名称';
			$("#bm_company").attr('class', 'input_k_cw');
			$("#bm_companywrong").show();
		    reset_placeholder();
			return false;
        }
        for (var i = 0, l = contact.length, T = 0; i < l; i++) {
            if (contact.charCodeAt(i) > 256)
                T++;
        }
        if (!contact || contact == '联系人(必填)' || (T < 1 && T == 0 && contact.length < 2)) {
            //var echo = '请填写联系人';
			$("#bm_contact").attr('class', 'input_k_cw');
			$("#bm_contactwrong").show();
		    reset_placeholder();
			return false;
        }
        if (!tel || tel == '联系电话(必填)') {
            //var echo = '请填写联系人';
            $("#bm_tel").attr('class', 'input_k_cw');
            $("#bm_telwrong").show();
		    reset_placeholder();
            return false;
        }

        if (typeof (echo) != 'undefined') {
            indexAjax.messageError(echo);
		    reset_placeholder();
            return false;
        }
        reset_placeholder();
        $.ajax({
            type: 'post',
            url: '',
            data: {'company': company, 'content': content, 'contact': contact, 'tel': tel, 'qq': qq, 'expo': expoTitleToApply, 'type': 3,'referee':referee},
            dataType: 'json',
            success: function(data) {
                if(data == 1){
                    apply.success();
                }else if(data == 'illegal') {
                    openIllegal();
                }else {
                    hideWin();
                    $('iframe').attr('allowTransparency',true);
                }
            },
            error: function(err) {
                apply.error();
            }
        });

}

function hideWin() {
    regist_popup_colse();
    document.getElementById('bm_company').value = '',
    document.getElementById('bm_content').value = '',
    document.getElementById('bm_contact').value = '',
    document.getElementById('bm_tel').value = '',
    document.getElementById('bm_qq').value = '';
}
