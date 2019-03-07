/* showguide广告异步加载类 by qzy */

if (!ad) { // 防止script被多次加载

	var ad = {

		adList: {},
		domain: '',

		// 加入异步队列，页面加载完后再统一获取广告
		add: function(config) {

			if (!config.alias) {
				return;
			}
			this.adList[config.alias] = config;
		},
		// 异步加载广告
		load: function(config) {


			var conf = config; // 留个备用
			var el = $(config.el);
			var thisObj = this;

			// 通过script标签跨域（域名写死，因为大平台也会用）
			var src = this.domain + '';

			if (config.alias) {
				src += '&alias=' + config.alias;
			}
			if (config.el) {
				src += '&el=' + config.el;
			}
			if (config.industry_id) {
				src += '&industry_id=' + config.industry_id;
			}
			if (config.type) {
				src += '&type=' + config.type;
			}
			src = src.replace(/#/g, '%23');

			var script = $('<script></script>');

			$('body').append(script);

			if (typeof conf.afterLoad === 'function') {
				script.on('load', function() {
					conf.afterLoad();
				});
			}
			script.attr('src', src);
		},
		// 同步加载广告（像轮播这类特殊的情况，需要在控件初始化前就生成html，只能使用同步方式）
		loadSync: function(config) {

			var conf = config; // 留个备用
			var el = $(config.el);
			var thisObj = this;

			// 通过script标签跨域（域名写死，因为大平台也会用）
			var src = this.domain + '';
			if (config.alias) {
				src += '&alias=' + config.alias;
			}
			if (config.el) {
				src += '&el=' + config.el;
			}
			if (config.industry_id) {
				src += '&industry_id=' + config.industry_id;
			}
			src = src.replace(/#/g, '%23');

			var script = '<script src="'+ src +'"></script>';
			document.writeln(script);

			// TODO afterLoad回调
		},
		// 异步加载队列中所有广告
		loadAll: function() {

			for (var i in this.adList) {

				this.load(this.adList[i]);
			}
		}
	};

	$(function() {

		ad.loadAll();
	});
}

