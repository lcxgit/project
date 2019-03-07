/* 
 * IE8 placeholder兼容 edit by qzy 2017-09-05 
 *
 * 注意点一：
 * 提交按钮的点击以后，会自动清除输入框的模拟placeholder；
 * 如果要重新显示模拟的placeholder，需要手动调用reset_placeholder()。
 *
 * 注意点二：
 * 各页面中自定义的按钮点击事件，逻辑代码外面要加setTimeout()；
 * 保证在本插件清除模拟placeholder以后再执行你们的自定义业务代码。
 */
$(function() {

	//判断浏览器是否支持placeholder属性
	supportPlaceholder = 'placeholder' in document.createElement('input'),

		placeholder = function(input) {

			var text = input.attr('data-placeholder'),
				defaultValue = input.attr('data-value');

			if (!defaultValue) {

				input.val(text).addClass("phcolor");
			}

			input.focus(function() {

				if (input.val() == text) {

					$(this).val("").addClass("phcolor");
				}
			});


			input.blur(function() {

				if (input.val() == "" || input.val() == text) {

					$(this).val(text).addClass("phcolor");
				} else {
					$(this).removeClass("phcolor");
				}
			});

			//输入的字符不为灰色
			input.keydown(function() {

				$(this).removeClass("phcolor");
			});
		};

	//当浏览器不支持placeholder属性时，调用placeholder函数
	if (!supportPlaceholder) {

		$('input[type="text"], input[type="password"]').each(function() {

			$(this).attr('data-value', $(this).val());
			$(this).attr('data-placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');

			placeholder($(this));
		});

		$('input[type="button"], input[type="submit"], button[type="submit"]').click(function() {

			$('input').each(function() {

				if ($(this).attr("type") == "text" && $(this).attr('data-placeholder') === $(this).val()) {

					$(this).val('').removeClass("phcolor");
				}
				if ($(this).attr("type") == "password" && $(this).attr('data-placeholder') === $(this).val()) {

					$(this).val('').removeClass("phcolor");
				}
			});

			$('textarea').each(function() {

        if ($(this).attr('data-placeholder') === $(this).html()) {

				  $(this).html('').removeClass("phcolor");
        }
			});
		});
	}



	//判断浏览器是否支持placeholder属性
	supportPlaceholder = 'placeholder' in document.createElement('textarea'),

		placeholder = function(textarea) {

			var text = textarea.attr('data-placeholder'),
				defaultValue = textarea.attr('data-value');

			if (!defaultValue) {

				textarea.html(text).addClass("phcolor");
			}

			textarea.focus(function() {

				if (textarea.html() == text) {

					$(this).html("");
				}
			});


			textarea.blur(function() {

				if (textarea.html() == "") {

					$(this).html(text).addClass("phcolor");
				}
			});

			//输入的字符不为灰色
			textarea.keydown(function() {

				$(this).removeClass("phcolor");
			});
		};

	//当浏览器不支持placeholder属性时，调用placeholder函数
	if (!supportPlaceholder) {

		$('textarea').each(function() {

			$(this).attr('data-value', $(this).html());
			$(this).attr('data-placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');

			placeholder($(this));
		});
	}

});


function reset_placeholder() {

	if (!supportPlaceholder) {

		$('input[type="text"], input[type="password"], textarea').each(function() {

			$(this).blur();
		});
	}
}