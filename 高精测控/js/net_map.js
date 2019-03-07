﻿
/*map*/ 
document.write("<scr"+"ipt src='js/echarts.min.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
document.write("<scr"+"ipt src='js/map/map_china.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
/*map*/ 

$(document).ready(function() {
	var myChart = echarts.init(document.getElementById('china-map'));
    // var oBack = document.getElementById("back");

    var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];

    var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];

    var seriesData = [
	    {
	      name: '北京',
	      value: 100
	    }, {
	      name: '天津',
	      value: 0
	    }, {
	      name: '上海',
	      value: 60
	    }, {
	      name: '重庆',
	      value: 0
	    }, {
	      name: '河北',
	      value: 60
	    }, {
	      name: '河南',
	      value: 60
	    }, {
	      name: '云南',
	      value: 0
	    }, {
	      name: '辽宁',
	      value: 0
	    }, {
	      name: '黑龙江',
	      value: 0
	    }, {
	      name: '湖南',
	      value: 60
	    }, {
	      name: '安徽',
	      value: 0
	    }, {
	      name: '山东',
	      value: 60
	    }, {
	      name: '新疆',
	      value: 0
	    }, {
	      name: '江苏',
	      value: 0
	    }, {
	      name: '浙江',
	      value: 0
	    }, {
	      name: '江西',
	      value: 0
	    }, {
	      name: '湖北',
	      value: 60
	    }, {
	      name: '广西',
	      value: 60
	    }, {
	      name: '甘肃',
	      value: 0
	    }, {
	      name: '山西',
	      value: 60
	    }, {
	      name: '内蒙古',
	      value: 0
	    }, {
	      name: '陕西',
	      value: 0
	    }, {
	      name: '吉林',
	      value: 0
	    }, {
	      name: '福建',
	      value: 0
	    }, {
	      name: '贵州',
	      value: 0
	    }, {
	      name: '广东',
	      value: 597
	    }, {
	      name: '青海',
	      value: 0
	    }, {
	      name: '西藏',
	      value: 0
	    }, {
	      name: '四川',
	      value: 60
	    }, {
	      name: '宁夏',
	      value: 0
	    }, {
	      name: '海南',
	      value: 60
	    }, {
	      name: '台湾',
	      value: 0
	    }, {
	      name: '香港',
	      value: 0
	    }, {
	      name: '澳门',
	      value: 0
	    }
	];

	/*oBack.onclick = function () {
		initEcharts("china", "中国");
	};*/

    initEcharts("china", "中国");

    // 初始化echarts
	function initEcharts(pName, Chinese_) {
	    var tmpSeriesData = pName === "china" ? seriesData: [];

	    var option = {
	        title: {
	            text: Chinese_ || pName,
	            left: 'center'
	        },
	        tooltip: {
	            trigger: 'item',
	            formatter: '{b}<br/>{c} (p / km2)'
	        },
	        series: [{
	        	name: Chinese_ || pName,
	        	mapType: pName,
	            type: 'map',
	            roam: false,
	            //是否开启鼠标缩放和平移漫游
	            data: tmpSeriesData,
	            top: "3%",
	            //组件距离容器的距离
	            zoom: 1.1,
	            selectedMode: 'single',//single 表示单选;multiple表示多选 默认flase不选
			    label: {
	                normal: {
	                    show: true,
	                    //显示省份标签
	                    textStyle: {
	                        color: "#666"
	                    } //省份标签字体颜色
	                },
	                emphasis: { //对应的鼠标悬浮效果
	                    show: true,
	                    textStyle: {
	                        color: "#0448e2"
	                    }
	                }
	            },
	            itemStyle: {
	                normal: {
	                    borderWidth: .5,
	                    //区域边框宽度
	                    borderColor: '#fff',
	                    //区域边框颜色
	                    areaColor: "#c6d9f1",
	                    //区域颜色
	                },

	                emphasis: {
	                    borderWidth: .5,
	                    borderColor: '#fff',
	                    areaColor: "#a1baf2",
	                }
	            },
			    //此为加载的数据
			    data: [
				    {
				        name: '广东',
				        selected: true,
				        value: 10
				    }
			    ]
			}]
	    };

	    myChart.setOption(option);

	    myChart.off("click");

	    if (pName === "china") { // 全国时，添加click 进入省级
	        myChart.on('click',
	        function(param) {
	            console.log(param.name);
	            // 遍历取到provincesText 中的下标  去拿到对应的省js
	            for (var i = 0; i < provincesText.length; i++) {
	                if (param.name === provincesText[i]) {
	                    //显示对应省份的方法
	                    showProvince(provinces[i], provincesText[i]);
	                    break;
	                }
	            }
	            if (param.componentType === 'series') {
	                var provinceName = param.name;
	                $('#box').css('display', 'block');
	                $("#box-title").html(provinceName);

	            }
	        });
	    } else { 
	    	// 省份，添加双击 回退到全国
	        myChart.on("dblclick",
	        function() {
	            initEcharts("china", "中国");
	        });
	    }
	}

	// 展示对应的省
	function showProvince(pName, Chinese_) {
	    //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
	    loadBdScript('$' + pName + 'JS', './js/map/province/' + pName + '.js',
	    function() {
	        initEcharts(Chinese_);
	    });
	}

	// 加载对应的JS
	function loadBdScript(scriptId, url, callback) {
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    if (script.readyState) { //IE
	        script.onreadystatechange = function() {
	            if (script.readyState === "loaded" || script.readyState === "complete") {
	                script.onreadystatechange = null;
	                callback();
	            }
	        };
	    } else { // Others
	        script.onload = function() {
	            callback();
	        };
	    }
	    script.src = url;
	    script.id = scriptId;
	    document.getElementsByTagName("head")[0].appendChild(script);
	};
})
