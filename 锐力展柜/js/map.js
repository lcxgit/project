//map
$(function() {
    var points = [{
        id: 1,
        lng: 113.263348,
        lat: 23.269891,
        title: "锐力展柜",
        content: [
            //"工厂地址：广州市白云区均禾街石马桃源北东街67号",
            "公司地址：广州市白云区嘉禾街望岗杨村园68号长旺大厦A606",
            "电话：020-86298595",
            //"手机/微信：13610012211",
            //"企业邮箱：ruilizg@163.com"
        ]
    }];

    new BaiduMap({
        id: "map",
        level: 16,
        type: ["地图", "卫星"],
        width: 320,
        height: 70,
        titleClass: "title",
        contentClass: "content",
        showMarkPanorama: true,
        mapStyle: "light",
        icon: {
            url: "img/marker.png",
            width: 25,
            height: 96
        },
        centerPoint: { // 地图中心点经纬度
            lng: 113.263348,
            lat: 23.269891
        },
        index: 0,
        points: points
    });


    var $li = $(".list").find("li");

    $li.each(function(i) {
        $(this).data("id", i + 1);
    }).on("click", function() {
        map.openInfoWindow($(this).data("id"));
        $(this).addClass("active").siblings().removeClass("active");
    })
});
//map