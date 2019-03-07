/**
 * Created by Administrator on 2018/1/23.
 */
$(function() {
		$(".ke_put").focus(function() {
			$(this).css("border", "1px #FFBF5E solid");
			$(this).css("background", "#FEF5E6");

		});
		$(".ke_put").blur(function() {
			$(this).css("border", "1px #e1e1e1 solid");
			$(this).css("background", "#fff");
		});
	})
//点击开启获取资料
function hqzl_open(aid){
    var data = {
        'aid': aid,
        'type': 12
    };
    //3次/小时限制
    $.ajax({
        type: 'post',
        url: '/expoApi/Home/RobFloor/isGetMsgLegal',
        data: data,
        dataType: 'json',
        success: function(data) {
           if(data.legal === true){
               //合法
               $('#expoTitleToApply').html(data.expo.title);
               $('.time').html(data.expo.time);
               $("#hqzl_tc").show();
               $("#grey_back2").show();
           }else {
               //非法
               $('.unlegal_'+aid).show();
           }
        },
        error: function(err) {
            console.table(err);
        }
    });

}
function hqzl_colse(){//点击关闭获取资料
    $("#hqzl_tc").hide();
    $("#grey_back2").hide();
}

function hqzlok_colse(){//点击关闭获取资料成功
    $(".hqzl_ok").hide();
    $("#grey_back2").hide();
}

function hqzltj() {

	setTimeout(hqzltj2);
}

function hqzltj4() {

    setTimeout(hqzltj3);
}
//提交预估数据
function hqzltj2(){
    // 获取已填写的联系人、电话
	var hqzlnameid = $('#hqzlname').val();
    var hqzlpeopleid = $('#hqzlpeople').val();
    var hqzltelid = $('#hqzltel').val();

    // 恢复所有输入框的样式和提示文字
    $("input[id^='hqzlname']").each(function(){
        $(this).attr('class', 'ke_put');
        //$(this).removeClass('ke_put_cw');
        //$(this).css("border","1px solid #e1e1e1");
        //$(this).css("background","#ffffff");
        $("#hqzlnamewrong").hide();
    });
    $("input[id^='hqzlpeople']").each(function(){
        $(this).attr('class', 'ke_put');
        //$(this).removeClass('ke_put_cw');
        //$(this).css("border","1px solid #e1e1e1");
        //$(this).css("background","#ffffff");
        $("#hqzlpeoplewrong").hide();
    });
    $("input[id^='hqzltel']").each(function(){
        $(this).attr('class', 'ke_put');
        //$(this).removeClass('ke_put_cw');
        //$(this).css("border","1px solid #e1e1e1");
        //$(this).css("background","#ffffff");
        $("#hqzltelwrong").hide();
    });

    // 检查数据完整
    if(hqzlnameid==''||hqzlnameid=='公司名称(必填)' || hqzlnameid.length < 2) {
        $("#hqzlname").attr('class', 'ke_put_cw');
        $("#hqzlnamewrong").show();
        //$("#hqzlname").css("border","1px #ff6600 solid");
        //$("#hqzlname").css("background","#FFF1F0");
        //$("#password").focus();
		reset_placeholder();
        return false;
    }
    if(hqzlpeopleid==''||hqzlpeopleid=='联系人(必填)' || hqzlpeopleid.length < 2) {
        $("#hqzlpeople").attr('class', 'ke_put_cw');
        $("#hqzlpeoplewrong").show();
        //$("#hqzlpeople").css("border","1px #ff6600 solid");
        //$("#hqzlpeople").css("background","#FFF1F0");
        //$("#password").focus();
		reset_placeholder();
        return false;
    }
    if(hqzltelid==''||hqzltelid=='电话/手机号(必填)' || hqzltelid.length <7 || hqzltelid.length > 11) {
        $("#hqzltel").attr('class', 'ke_put_cw');
        $("#hqzltelwrong").show();
        //$("#hqzltel").css("border","1px #ff6600 solid");
        //$("#hqzltel").css("background","#FFF1F0");
        //$("#tel").focus();
		reset_placeholder();
        return false;
    }
    // 提交数据
    if(hqzlnameid!=''&&hqzlpeopleid!=''&&hqzltelid!='') {
        var data = {
            'expo':$('#expoTitleToApply').html(),
            'company': hqzlnameid,
            'contact': hqzlpeopleid,
            'tel': hqzltelid,
            'type': 12,
            'url':window.parent.document.URL
        };
        $.ajax({
            type: 'post',
            url: '',
            data: data,
            dataType: 'json',
            success: function(data) {
                if(data === 1){
                    //提交成功后弹出提交成功提示框
                    $(".refer_prompt").show();
                    $("#hqzl_tc").hide();
                    setTimeout(function() {
                        $(".refer_prompt").hide();
                        $("#grey_back2").hide();
                    }, 1000);
                }
            },
            error: function(err) {
                apply.error();
            }
        });

    }


}

function hqzltj3(){
    // // 获取已填写的联系人、电话
    var hqzltelid = $('#tel').val();
    var verify = document.getElementById('yanzhengma').value;
    var a = document.getElementById('yanzhengmawrong');
    if(document.getElementById('company')){
        var company = document.getElementById('company').value;
    }else{
        var company = '';
    }

    if(hqzltelid == ''||hqzltelid == '请输入手机号码'){
        $("#tel").attr('class', 'ke_put_cw');
        $("#telwrong").html('请输入手机号码');
        $("#telwrong").show();
        $("#tel").css("border","1px #ff6600 solid");
        $("#tel").css("background","#FFF1F0");
        //$("#tel").focus();
        return false;
    }
    if(hqzltelid.length != 11){
        $("#tel").attr('class', 'ke_put_cw');
        $("#telwrong").html('手机号格式错误，请重新输入');
        $("#telwrong").show();
        $("#tel").css("border","1px #ff6600 solid");
        $("#tel").css("background","#FFF1F0");
        //$("#tel").focus();
        return false;
    }
    if(verify == ''){
        a.innerHTML = '验证码为空'
        $("#yanzhengma").attr('class', 'ke_put_cw')
        $("#yanzhengmawrong").show()
        $("#yanzhengma").css("border","1px #ff6600 solid")
        $("#yanzhengma").css("background","#FFF1F0")
        $("#verifyRight").hide()
        reset_placeholder();
        return false;
    }
    $.ajax({
        type:'post',
        data:{verify:verify},
        url:'',
        success:function(data){
            if(data != 1){
                a.innerHTML = '验证码错误'
                $("#yanzhengma").attr('class', 'ke_put_cw')
                $("#yanzhengmawrong").show()
                $("#yanzhengma").css("border","1px #ff6600 solid")
                $("#yanzhengma").css("background","#FFF1F0")
                $("#verifyRight").hide()
                reset_placeholder();
                return false;
            }else{
                $.ajax({
                    type: 'post',
                    url: '',
                    data: {
                        'tel': hqzltelid,
                        'type': 12,
                        'expo':$('#expoTitleToApply').html(),
                        'company':company
                    },
                    dataType: 'json',
                    success: function(data) {
                        if(data === 1){
                            //提交成功后弹出提交成功提示框
                            $("#tel").val("");
                            $("#yanzhengma").val("");
                            clearInterval(countDown)
                            var button = document.getElementById('verifyButton')
                            button.value = '发送验证码'
                            button.setAttribute('class','r_anniu')
                            button.setAttribute('onclick','sendVerify()')

                            $(".refer_prompt").show();
                            $("#hqzl_tc").hide();
                            setTimeout(function() {
                                $(".refer_prompt").hide();
                                $("#grey_back2").hide();
                            }, 1000);
                        }
                    },
                    error: function(err) {
                        apply.error();
                    }
                });
            }
        }
    })






}

function getMsg() {
    var data1 = {
        'aid': aid,
        'type': 13
    };

    var isLegal = true;
    var tel = '';
    var contact = '';
    //3次/小时限制
    $.ajax({
        type: 'post',
        url: '',
        data: data1,
        dataType: 'json',
        async: false,
        success: function(data) {
            if(data.legal === false){
                //非法
                $('.unlegalRefer').show();
                isLegal = false;
            }
        },
        error: function(err) {
            console.table(err);
        }
    });

    if(!isLegal){
        return;
    }else{
        $.ajax({
            type: 'post',
            url: '/expoApi/Home/ProductExposition/isLegal',
            async: false,
            success: function(data) {
                if (data !== '') {
                    //登录后显示价格
                   contact = data.nickname;
                    tel = data.tel;
                }else {
                    return;
                }
            }
        });
    }
    var data = {
        'expo':$('#expoTitleToApply').html(),
        'contact': contact,
        'tel': tel,
        'type': 13,
        'url':window.parent.document.URL
    };
    $.ajax({
        type: 'post',
        url: '/expoApi/Home/RobFloor/enroll',
        data: data,
        dataType: 'json',
        success: function(data) {
            if(data === 1){
                //提交成功后弹出提交成功提示框
                $("#hqzl_tc").hide();
                $(".hqzl_ok").show();
                $("#grey_back2").show();
            }
        },
        error: function(err) {
            apply.error();
        }
    });
}