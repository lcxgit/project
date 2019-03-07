$(function(){
	var baiduMap = function(obj) {
	if ($(obj).length === 0) return false;
		var obj = $(obj);	
		jd = obj.find('.cfg_jd').val();
		wd = obj.find('.cfg_wd').val();
		initMap(); 
	/* 调用地图组件 */
	window.BMap_loadScriptTime = (new Date).getTime();
    //创建和初始化地图函数：
    function initMap() {
	    var map = new BMap.Map('map',{minZoom:2,maxZoom:20}); // 创建Map实例
	    // 初始化地图,设置中心点坐标和地图级别
	    var poi = new BMap.Point(jd,wd); 
	    map.centerAndZoom(poi, 20);
	    // 定义事件
	    map.enableScrollWheelZoom(); // 可使用滚轮缩放
	    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
	              '<img src="/static/picture/km.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
	              '地址：广州市白云区机场路1718号悦成商务中心511-545<br/>电话：4000-840-580<br/>简介：广州凯美投资管理有限公司总部。' +
	              '</div>';

	    //创建检索信息窗口对象BMapLib_SearchInfoWindow
	    var searchInfoWindow = null;
	    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
	        title  : "广州凯美投资管理有限公司",      //标题
	        width  : 320,             //宽度
	        height : 125,              //高度
	        panel  : "panel",         //检索结果面板
	        enableAutoPan : true,     //自动平移
			
	        searchTypes   : [
	          //BMAPLIB_TAB_SEARCH,   //周边检索
	          //BMAPLIB_TAB_TO_HERE,  //到这里去
	          //BMAPLIB_TAB_FROM_HERE //从这里出发
	        ]
	    });
	    var marker = new BMap.Marker(poi); //创建marker对象
	    //marker.enableDragging(); //marker可拖拽
	    marker.addEventListener("click", function(e){
	        searchInfoWindow.open(marker);
	    })
	    searchInfoWindow.open(marker); // 打开自动显示marker
	    map.addOverlay(marker); //在地图中添加marker
	}
	
};

baiduMap('#baidu-map');  
})