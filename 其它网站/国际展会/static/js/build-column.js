var baseUrl = '';
$('.search-industry_id').click(function() {

	var val = $(this).data('value');
	$('input[name="industry_id"]').val(val);
	$('.submit').click();
});

$('.search-area').click(function() {

	var val = $(this).data('value');
	$('input[name="area"]').val(val);
	$('.submit').click();
});

$('.search-open').click(function() {

	var val = $(this).data('value');
	$('input[name="open"]').val(val);
	$('.submit').click();
});

$('.search-price').click(function() {

	var val = $(this).data('value');
	$('input[name="price"]').val(val);
	$('.submit').click();
});

$('.search-material').click(function() {

	var val = $(this).data('value');
	$('input[name="material"]').val(val);
	$('.submit').click();
});



function baoming_submit() {
	// 判断是否登录
	var isLegal = false;
	$.ajax({
		type: 'post',
		url: baseUrl + 'ProductBuild/isLegal',
		async: false,
		success: function(data) {
			if (data == 'true') {
				isLegal = true;
			}
		}
	});

	if (!isLegal) { // 未登录
		$('.popup_login').show();
		return;
	}

	var data = {
		product_type: 'build',
		type: 35 // 搭建需求
	};

	var field = {
		'contact': null,
		'tel': null,
		'company': null,
		'qq': null,
		'referee': null,
		'content': null,
		'exhibits': null
	};

	for (var i in field) {
		var e = $('.baoming_form [name="' + i + '"]');
		var val = e.val();
		if (val) {
			data[i] = val;
		}
	}

	// 必填验证
	if (!data.contact) {
		alert('请输入您的姓名');
		reset_placeholder();
		return;
	}

	if (!data.tel || data.tel.length > 12 || data.tel.length < 6) {
		alert('请填写正确电话');
		reset_placeholder();
		return;
	}

	var url = baseUrl + 'ProductOrder/addBaoming';

	$.ajax({
		url: url,
		data: data,
		type: 'POST',
		success: function(r) {

			if (!r) {
				alert('操作失败');
				return;
			}
			// 成功
			saveSubInfo(r, data);
		}
	});
}

// 搭建需求提交
$('.baoming_submit').click(function() {

	setTimeout(baoming_submit);
});

function saveSubInfo(main_table_id, main_table_data) {

	var data = {
		type: 'baoming',
		title: main_table_data.exhibits,
		main_table_id: main_table_id,
		budget: $('.baoming_form [name="budget"]').val(),
		area: $('.baoming_form [name="area"]').val()
	}

	var img_src_input = $('.baoming_form [name="img_src"]');
	var img_src = img_src_input.val();
	if (img_src && img_src != img_src_input.data('placeholder')) {
		data.img_src = img_src;
	}

	var completion_time = $('.baoming_form [name="completion_time"]').val();
	if (completion_time) {
		completion_time = completion_time.replace('-', '/'); // IE8日期只支持斜杠
		data.completion_time = Date.parse(completion_time) / 1000;
	}

	var url = baseUrl + 'ProductOrder/addBuildInfo';

	$.ajax({
		url: url,
		data: data,
		type: 'POST',
		success: function(r) {

			if (!r) {
				alert('操作失败');
				return;
			}
			// 成功
			alert('提交成功');
			window.location.reload();
		}
	});
}

// 图片上传
$('#uploadimage').on('change', fileOnChange);

function fileOnChange() { // 此处用了change事件，当选择好图片打开，关闭窗口时触发此事件

	// 检测图片类型
	if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(this.value)) { // 不通过
		this.value = '';
		alert('请上传gif、jpg、png格式的图片');
		return;
	}

	$.ajaxFileUpload({
		url: baseUrl + 'Uploader', // 处理图片脚本
		secureuri: false,
		fileElementId: 'uploadimage', // file控件id
		dataType: 'json',
		success: function(data, status) { // 提交成功后自动执行的处理函数

			// 检测图片大小
			if (data.files[0].size > (10 * 1024 * 1024)) {
				alert('请上传10M以内的图片');
				return;
			}

			var url =  data.files[0].path;

			$('[name="img_src"]').val(url);
			$('.input_file_img').attr('src', url);
		},
		error: function(data, status, e) { // 提交失败自动执行的处理函数
			alert(e);
		}
	});
	$('#uploadimage').on('change', fileOnChange);
}