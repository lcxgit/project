

// 放大镜

jQuery.ljsGlasses = {
    pcGlasses:function(_obj){
        var _box = $("#"+_obj.boxid);
        var _sum = $("#"+_obj.sumid);
        var _last,_next;
        var _imgarr = _box.find("img");
        var _length = _imgarr.length;
        var _index = 0;
        var _arr = new Array();
        _sum.append("<p style='position:absolute;left:0;top:0;'></p>");
        var _sumbox = _sum.find("p");
        
        for(var i=0;i<_length;i++){
            _arr[i] = new Array();
            _arr[i][0] = _imgarr.eq(i).attr("src");
            _arr[i][1] = _imgarr.eq(i).attr("width");
            _arr[i][2] = _imgarr.eq(i).attr("height");
            var _scale = _arr[i][1]/_arr[i][2];
            if(_scale == 1){
                _arr[i][3] = _obj.boxw;//width
                _arr[i][4] = _obj.boxh;//height
                _arr[i][5] = 0;//top
                _arr[i][6] = 0;//left
                _arr[i][7] = _obj.boxw/2;
                _arr[i][8] = _obj.boxw*2;//width
                _arr[i][9] = _obj.boxh*2;//height
                _sumbox.append("<span><img src='"+_imgarr.eq(i).attr("src")+"' width='"+_obj.sumw+"' height='"+_obj.sumh+"' /></span>");
                }
            if(_scale > 1){
                _arr[i][3] = _obj.boxw;//width
                _arr[i][4] = _obj.boxw/_scale;
                _arr[i][5] = (_obj.boxh-_arr[i][4])/2;
                _arr[i][6] = 0;//left
                _arr[i][7] = _arr[i][4]/2;
                _arr[i][8] = _obj.boxh*2*_scale;//width
                _arr[i][9] = _obj.boxh*2;//height
                var _place = _obj.sumh - (_obj.sumw/_scale);
                _place = _place/2;
                _sumbox.append("<span><img src='"+_imgarr.eq(i).attr("src")+"' width='"+_obj.sumw+"' style='top:"+_place+"px;' /></span>");
                }
            if(_scale < 1){
                _arr[i][3] = _obj.boxh*_scale;//width
                _arr[i][4] = _obj.boxh;//height
                _arr[i][5] = 0;//top
                _arr[i][6] = (_obj.boxw-_arr[i][3])/2;
                _arr[i][7] = _arr[i][3]/2;
                _arr[i][8] = _obj.boxw*2;//width
                _arr[i][9] = _obj.boxw*2/_scale;
                var _place = _obj.sumw - (_obj.sumh*_scale);
                _place = _place/2;
                _sumbox.append("<span><img src='"+_imgarr.eq(i).attr("src")+"' height='"+_obj.sumh+"' style='left:"+_place+"px;' /></span>");
                }
        }
        _imgarr.remove();
        
        _sum.append("<div style='clear:both;width:100%;'></div>");
        var _sumarr = _sum.find("span");
        var _sumimg = _sum.find("img");
        _sumarr.eq(_index).addClass(_obj.sumsel);
        var _border = _obj.sumborder*2 + _obj.sumh;
        var _sumwidth = (_border+_obj.sumi)*_obj.sums;
        var _sumboxwidth = (_border+_obj.sumi)*_length;
        _sum.css({
            "overflow":"hidden",
            "height":_border+"px",
            "width":_sumwidth+"px",
            "position":"relative"
            });
        _sumbox.css({
            "width":_sumboxwidth+"px"
            });
        _sumarr.css({
            "float":"left",
            "margin-left":_obj.sumi+"px",
            "width":_obj.sumw+"px",
            "height":_obj.sumh+"px",
            "overflow":"hidden",
            "position":"relative"
            });
        _sumimg.css({
            "max-width":"100%",
            "max-height":"100%",
            "position":"relative"
            });
        
        _box.append("<div style='position:relative;'><b style='display:block;'><img style='display:block;' src='' /></b><span style='position:absolute;left:0;top:0;display:none;z-index:5;'></span></div><p style='position:absolute;overflow:hidden;top:0;display:none;'><img style='max-width:none;max-height:none;position:relative;left:0;top:0;' src='' /></p>");
        var _glass = _box.find("span");
        var _boximg = _box.find("b img");
        var _imgout = _box.find("div");
        var _showbox = _box.find("p");
        var _showimg = _box.find("p img");

        _box.css({
            "width":_obj.boxw+"px",
            "height":_obj.boxh+"px",
            "position":"relative"
            });
        var _showboxleft = _obj.boxw + 10;
        _showbox.css({
            "width":_obj.boxw+"px",
            "height":_obj.boxh+"px",
            "left":_showboxleft+"px"
            });
        
        var imgPlaces = function(){
            _showimg.attr("src",_arr[_index][0]);
            _boximg.attr("src",_arr[_index][0]);
            _boximg.css({
                "width":_arr[_index][3]+"px",
                "height":_arr[_index][4]+"px"
            });
            _imgout.css({
                "width":_arr[_index][3]+"px",
                "height":_arr[_index][4]+"px",
                "top":_arr[_index][5]+"px",
                "left":_arr[_index][6]+"px",
                "position":"relative"
            });
            _glass.css({
                "width":_arr[_index][7]+"px",
                "height":_arr[_index][7]+"px"
            });
            _showimg.css({
                "width":_arr[_index][8]+"px",
                "height":_arr[_index][9]+"px"
            });
            
        };
        imgPlaces();
        
        _imgout.mousemove(function(e){
            var _gl_w = _glass.width()/2;
            var _maxX = _imgout.width() - _gl_w;
            var _maxY = _imgout.height() - _gl_w;
            var _moveX = 0,_moveY = 0;
            var _nowX = e.pageX - _imgout.offset().left;
            var _nowY = e.pageY - _imgout.offset().top;
            var _moveX = _nowX-_gl_w,_moveY = _nowY-_gl_w;
            
            if(_nowX <= _gl_w){ _moveX = 0; }
            if(_nowX >= _maxX){ _moveX = _maxX-_gl_w; }
            if(_nowY <= _gl_w){ _moveY = 0;}
            if(_nowY >= _maxY){ _moveY = _maxY-_gl_w;}
            _glass.css({"left":_moveX+"px","top":_moveY+"px"});

            var _imgX = -_moveX*_showbox.width()/_glass.width();
            var _imgY = -_moveY*_showbox.width()/_glass.width();
            _showimg.css({"left":_imgX+"px","top":_imgY+"px"});
    
        });//mouse END
        
        _imgout.mouseenter(function(){
            _glass.css("display","block");
            _showbox.css("display","block");
            });
        _imgout.mouseleave(function(){
            _glass.css("display","none");
            _showbox.css("display","none");
            });
        
        //列表部分
        var _nextbtn = $("#"+_obj.nextid);
        var _lastbtn = $("#"+_obj.lastid);
        var _moveindex = 0;//索引移动
        
        var _sumListMove = function(){
            var _leftmove = -_moveindex*(_border+_obj.sumi);
            if(_sumbox.is(":animated")){_sumbox.stop(true,true);}
            _sumbox.animate({left:_leftmove+"px"},300);
            _sumarr.eq(_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
            imgPlaces();
        };//fun END
        
        if(_length <= _obj.sums){
            var _place = (_obj.sums-_length)*_border/2;
            _sumbox.css("left",_place+"px");
            _nextbtn.click(function(){
                _index++;
                if(_index >= _length){ _index=_length-1;}
                _sumarr.eq(_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
                imgPlaces();
            });
            _lastbtn.click(function(){
                _index--;
                if(_index <= 0){ _index=0;}
                _sumarr.eq(_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
                imgPlaces();
            });
        }else{
            var _maxNum = _length-_obj.sums;
            _nextbtn.click(function(){
               _moveindex++;
               if(_moveindex >= _maxNum){ _moveindex=_maxNum; }
               if(_index <= _moveindex){ _index=_moveindex;}
               _sumListMove();
            });
            _lastbtn.click(function(){
                _moveindex--;
                if(_moveindex <= 0){ _moveindex=0;}
                if(_index >= _moveindex+_obj.sums){ _index=_moveindex+_obj.sums-1;}
                _sumListMove();
            });
        }//if END

        _sumarr.hover(function(){
            _index = $(this).index();
            _sumarr.eq(_index).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
            imgPlaces();
        });
    
  }//pcGlasses END
}//ljsGlasses END

$(document).ready(function(){
    var showproduct = {
        "boxid":"showbox",
        "sumid":"showsum",
        "boxw":400,//宽度,该版本中请把宽高填写成一样
        "boxh":400,//高度,该版本中请把宽高填写成一样
        "sumw":60,//列表每个宽度,该版本中请把宽高填写成一样
        "sumh":60,//列表每个高度,该版本中请把宽高填写成一样
        "sumi":5,//列表间隔
        "sums":5,//列表显示个数
        "sumsel":"sel",
        "sumborder":1,//列表边框，没有边框填写0，边框在css中修改
        "lastid":"showlast",
        "nextid":"shownext"
    };//参数定义    
    $.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行
});
// 放大镜


/**/
//产品详情定位
;
(function () {
    let fixedScroll = function ($fixedEl, opts) {
        this.defaults = {
            navEls: '', //nav (注意: navEls和hookEls两个参数必须成对出现)
            hookEls: '', //nav要滚动到的对应元素
            hookOffset: 0, //hook区域顶部偏移量
            offset: 0, //固定元素顶部偏移量
            stickEndEl: '', //固定结束位置的元素
            callback: ''
        };
        $.extend(this, this.defaults, opts);
        this.flag = true;
        this.stickTop = 0; //固定元素的原始位置
        this.init_stickTop = 0; //用于重计算高度
        this.stickBottom = 9999999; //固定元素的结束位置
        this.fixedEl = $fixedEl; //固定元素
        this.fixedElH = $fixedEl.height();
        this.fixedElW = $fixedEl.width();
        this.fixedElL = $fixedEl.offset().left;
        this.winEl = $(window);
        this.offset = parseInt(this.offset || 0);
        this.hookArea = [];
        this.isClickSwitch = false;
    }
    fixedScroll.prototype = {
        init: function () {
            if (this.fixedEl.length > 0) {
                this.stickTop = this.fixedEl.offset().top;
                this.init_stickTop = this.stickTop;
            }

            if (this.stickEndEl.length > 0) {
                this.stickBottom = this.stickEndEl.offset().top;
            }
            // 限定起始位的距顶高度
            this.distance = this.stickBottom - this.stickTop - this.fixedElH - this.offset / 2;
            this.calcArea();
            this.flag && this.events();
            this.flag = false;
        },
        // 固定
        stickHandle: function () {
            if (this.winEl.scrollTop() > this.stickTop - this.offset) {
                if (this.winEl.scrollTop() < this.stickBottom - this.fixedElH - this.offset) {
                    this.fixedEl.css({
                        "position": "fixed",
                        "top": this.offset,
                        "left": this.fixedElL,
                        "width": this.fixedElW,
                        "height": this.fixedElH,
                        "transform": "translateY(0)"
                    });
                    typeof this.callback == 'function' && this.callback(1);
                } else {
                    this.fixedEl.css({
                        "top": "auto",
                        "left": "auto",
                        "position": "static",
                        "transform": "translateY(" + this.distance + "px)"
                    });
                    typeof this.callback == 'function' && this.callback(0);
                }
            } else {
                this.fixedEl.css({
                    "top": "auto",
                    "position": "static"
                });
                typeof this.callback == 'function' && this.callback(0);
            }
        },

        // 动态计算高度
        resizeHeight: function (hasNewTop) {
            if (this.fixedEl.length > 0) {
                this.stickTop = hasNewTop ? this.fixedEl.offset().top : this.init_stickTop;
            }
            if (this.stickEndEl.length > 0) {
                this.stickBottom = this.stickEndEl.offset().top;
            }
            this.distance = this.stickBottom - this.stickTop - this.fixedElH - this.offset / 2;
            this.calcArea();
        },

        // 计算滚动区
        calcArea: function () {
            if (this.hookEls.length <= 0) return;
            let areas = [];
            this.hookEls.each(function (i, ele) {
                var start = $(this).offset().top;
                var end = start + $(this).height();
                areas.push([start, end]);
            })
            this.hookArea = areas;
        },

        // 区域判断
        hookScroll: function () {
            var t = this.winEl.scrollTop();
            for (var i in this.hookArea) {
                if ((t > this.hookArea[i][0] - this.hookOffset) && t < this.hookArea[i][1]) {
                    this.navStatus(i)
                } else {
                    this.navStatus()
                }
            }
        },

        // nav状态
        navStatus: function (i) {
            if (i || +i === 0) {
                this.navEls.eq(i).addClass('active').siblings().removeClass('active');
            } else {
                this.navEls.eq(i).removeClass('active');
            }
        },

        // 滚动到指定位置
        refresh: function (i) {
            let top = this.hookArea[i][0] - this.hookOffset;
            this.calcArea();
            this.scrollTop(top, 120);
        },

        scrollTop: function (scrollTo, time) {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            var scrollFrom = parseInt(scrollTop),
                i = 0,
                step = 5;
            scrollTo = parseInt(scrollTo);
            time /= step;
            var interval = setInterval(function () {
                i++;
                let top = (scrollTo - scrollFrom) / time * i + scrollFrom;
                document.body.scrollTop = top;
                document.documentElement.scrollTop = top;
                if (i >= time) {
                    clearInterval(interval);
                }
            }, step)
        },

        events: function () {
            let _this = this;
            // 切换nav
            if (_this.navEls.length > 0) {
                this.navEls.on('click', function () {
                    let i = $(this).index();
                    _this.isClickSwitch = true;
                    _this.refresh(i);
                    _this.navStatus(i);
                    setTimeout(function () {
                        _this.isClickSwitch = false;
                    }, 300);
                })
            }
            // 滚动监听
            this.winEl.on("scroll", function () {
                (_this.fixedEl.length > 0) && _this.stickHandle();
                (_this.hookEls.length > 0 && !_this.isClickSwitch) && _this.hookScroll();
            });
        }
    }

    $.fn.fixedScroll = function (opts) {
        let drag = new fixedScroll(this, opts);
        drag.init();
        return drag;
    }

    //兼容模块
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = fixedScroll;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return fixedScroll;
        })
    } else {
        window.fixedScroll = fixedScroll;
    }
}).call(function () {
    return (typeof window !== 'undefined' ? window : global)
}, $)

// if(window.screen.width >= 768) {}
$(".product_detail_main .left_nav .top").fixedScroll()
//产品详情定位
