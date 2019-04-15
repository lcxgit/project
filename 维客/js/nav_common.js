
function showNavigation(){
    var _showMenu = $('#showMenu'), _hideMenu = $('#hideMenu'), _navigation = $('#navigation'), _navList = _navigation.find('ul.list'),  _navItem = _navList.find('li'), _navMarkwater = $('#navMarkwater'), flagIndex = 0, _size = 0, isLoadOver = false;

    _showMenu.on('click', function(){
        _navigation.fadeToggle();
    });

    _hideMenu.on('click', function(){
        _navigation.fadeToggle();
    });
	
	//加载背景
	_navItem.each(function(){
		var _image = new Image();
		_image.src = $(this).data('url');
		
		$(_image).load(function(){
			_size++;
			if(_size == _navItem.size()){
				isLoadOver = true;
			}
		});
	});

    _navItem.on('mouseover', function(){
	var _this = this;
        _navItem.addClass('gray');
        $(this).removeClass('gray');

		if(isLoadOver){
			_navMarkwater.removeClass('hover');
			flagIndex++;
			setTimeout(function(){
				var _index = flagIndex, _that = _this;
				if(_index == flagIndex){
					console.log(_index,flagIndex);
					_navMarkwater.css({
						'background-image' : 'url(' + $(_that).data('url') + ')'
					}).addClass('hover');
				}
			}, 500);
		}
    });

    _navList.on('mouseout', function(){
        _navItem.removeClass('gray');
		
		if(isLoadOver){
			_navMarkwater.removeClass('hover').css({
				'background-image' : 'none'
			});
		}
    });

    var _showService = $('#showService'), _touchService = $('#touchService'), _serviceClose = $('#serviceClose');

    _showService.on('click', function(){
       _touchService.fadeToggle();
    });

    _serviceClose.on('click', function(){
        _touchService.fadeToggle();
    });
}

function up2Top(){
    var _back2top = $('#back2Top'), _btn = _back2top.find('a.btn-up') , _class = 'showTop', _isInner = false, _tmpTop = 0, _scrollTop = $(window).scrollTop(), _moveTime = 100;

    function isTop(){
        _scrollTop = $(window).scrollTop();
        if(_scrollTop <= 0){
            //if(_back2top) _back2top.hide();
            if(_back2top) _back2top.removeClass(_class);
        }
    }

    _btn.on('click', function(){
        _scrollTop = $(window).scrollTop();
        _moveTime = _scrollTop / 100 > 1000 ? 1000 : _scrollTop / 100 < 100 ? 100 : _scrollTop / 100;
        $("html, body").stop(!0, !0).animate({
            'scrollTop' : 0
        }, _moveTime, function(){
            isTop();
        });
    });

    $(window).scroll(function(){
        if(!_isInner){
            _isInner = true;
            _tmpTop = $(window).scrollTop();
            if(_isInner && _back2top){
                if(_tmpTop <= 0){
                    _back2top.removeClass(_class);
                    //_back2top.hide();
                }else{
                    _back2top.addClass(_class);
                    //_back2top.show();
                }
            }
            _isInner = false;
        }
    });

    isTop();
}



$(function(){
    showNavigation();
    up2Top();
});




