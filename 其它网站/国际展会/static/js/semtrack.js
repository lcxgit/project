function _lyz_URLParams() {
  var url = window.document.location.href.toString();
  var u = url.split("?");
  var arr = [];
  if (typeof(u[1]) == "string") {
    var path = u[1];
    if (path.indexOf('utm_source%3D') !== -1) {
      path = decodeURIComponent(path);
    }
    u = path.split("&");
    for(var i in u){
      var a = (u[i].split("="));
      arr[a[0]] = decodeURI(a[1]);
    }
  }
  return arr;
}

function _lyz_guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

function _lyz_ajax_post(action, data) {
    var host = 'www.showguide.cn';
    if (document.location.href.split('/')[2].indexOf('t.chinashowguide.cn') !== -1) { // 测试环境
        host = 't.chinashowguide.cn';
    }

    $.ajax({
        url: 'http://'+host+'/semtrack/api.php?action=' + action,
        type: 'POST',
        data: data,
        xhrFields: {
          withCredentials: true
        }
    });
}

// 竞价词点击进入
// uuid servertime referer ip ua action(百度推广) source medium word unit wordid time
function _lyz_sem_hit(uuid, source, medium, word, unit, wordid, time) {
  _lyz_ajax_post('sem_hit', {
          uuid: uuid,
          source: source,
          medium: medium,
          word: word,
          wordid: wordid,
          unit: unit,
          time: time,
          origin: document.referrer
        });
}

// 用户触发QQ咨询动作
//
// position
// 1、PC中间弹框
// 2、PC右边条
// 3、PC展会页在线咨询
// 4、PC运输页联系客服 [暂不考虑]
// 5、PC商务页行程顾问 [暂不考虑]
// 6、PC搜索结果获取资料
// 7、手机联系客服 [暂不考虑]
// 8、手机底部在线咨询 [暂不考虑]
// 
// uuid servertime referer ip ua action(触发QQ) position
function _lyz_qq_hit(position) {
  _lyz_ajax_post('qq_hit', {
          position: position,
          origin: document.referrer
        });
}

// 用户触发报名动作
//
// position
// 1、PC底部给您回电.  index_ajax.php.  header.js type1
// 2、PC右侧留言.  index_ajax.php.  header.js type2
// 3、PC展会页获取资料. /expoApi/Home/RobFloor/enroll   templets/2015showg/2017/js/product/exposition-getMsg.js
// 4、PC展会页参观展报名 /expoApi/Home/RobFloor/enroll
// 5、PC展会页运输报名 /expoApi/Home/ProductTransport/baomingPopup
// 6、PC一带一路百度商桥 [暂不考虑] 咨询量有多大，有没有录入到数据库？
// 7、PC展会中心获取资料. /expoApi/Home/RobFloor/enroll   templets/2015showg/2017/js/product/exposition-getMsg.js
// 8、PC展会中心参观展报名. /expoApi/Home/RobFloor/enroll   templets/2015showg/2017/js/product/exposition-getMsg.js
// 9、PC搜索结果参观展报名. /expoApi/Home/RobFloor/enroll
// 10、PC提交搭建需求 [暂不考虑]
// 11、PC搭建页提交手机 [暂不考虑]
// 12、PC运输页在线报名 [暂不考虑]
// 13、PC商务考察尊享定制 [暂不考虑]
// 14、PC商务页在线报名 [暂不考虑]
// 15、手机右下角参观展报名 [vue暂不考虑].  index_ajax.php
// 16、手机底部获取资料 [vue暂不考虑].  index_ajax.php
// 17、手机底部参观展报名 [vue暂不考虑].  index_ajax.php
// 
// uuid servertime referer ip ua action(触发报名) position
// 后端  uuid servertime referer ip ua action(提交报名) 报名id 手机号 QQ号码
function _lyz_reg_hit(position) {
  _lyz_ajax_post('reg_hit', {
          position: position,
          origin: document.referrer
        });
}

// 获得用户qq号码
// uuid servertime referer ip ua action(关联QQ) qq source word unit wordid time
function _lyz_got_qq(qq) {
  _lyz_ajax_post('got_qq', {
          qq: qq,
          origin: document.referrer
        });
}

// 外部访问
// uuid servertime referer ip ua action(外部访问) origin 
function _lyz_outside_hit() {
  _lyz_ajax_post('outside_hit', {
      origin: document.referrer
    });
}

// pc跳转手机
// uuid servertime referer ip ua action(外部访问) origin 
function _lyz_outside_hit_mobile() {
  var mobile_referer = $.cookie('_sg_mobile_referer');
  if (mobile_referer !== undefined) {
      _lyz_ajax_post('outside_hit', {
      origin: mobile_referer
    });
  }
  else {
    _lyz_outside_hit();
  }
}

// 内部访问
// uuid servertime referer ip ua action(内部访问) origin 
function _lyz_inside_hit() {
  _lyz_ajax_post('inside_hit', {
      origin: document.referrer
    });
}

// 检查是否属于（行业、国家、城市、产品、年月检索）
function _lyz_check_path(pathname) {
  return true;
  
  // var _lyz_regex_list = new Array(
  //   "^/signon/",
  //   "^/sigon/",
  //   "^/sinon/",
  //   "^/([0-9]+)/",
  //   "^/bigon/",
  //   "^/bignon/",
  //   "^/binon/",
  //   "^/gnon/",
  //   "^/zhcity/(.+)/",
  //   "^/zh((?!city).+)/",
  //   "^/zh(.+)/list_(.+).html",
  //   "^/topics/(.+).html"
  // );
  // for (i in _lyz_regex_list) {
  //   if (new RegExp(_lyz_regex_list[i]).test(pathname)) {
  //     return true;
  //   }
  // }
  // return false;
}

$(function() {
try {
    var isMobile = false;
    if (navigator.userAgent.toLowerCase().indexOf("iphone") != -1
        || navigator.userAgent.toLowerCase().indexOf("android") != -1) {
        isMobile = true;
    }
    if (isMobile && document.location.href.split('/')[2].indexOf('www.showguide.cn') === 0) {
        // 即将跳转，不记录
        return;
    }
    if (navigator.userAgent.toLowerCase().indexOf("bot") != -1
        || navigator.userAgent.toLowerCase().indexOf("spider") != -1) {
        // 爬虫，不记录
        return;
    }
    
    var domain = 'showguide.cn';
    if (document.location.href.split('/')[2].indexOf('chinashowguide.cn') !== -1) { // 测试环境
        domain = 'chinashowguide.cn';
    }

    var expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() + 5*365*24*3600*1000);
    var option = {expires:expiresDate, path: '/', domain: domain};

    // 访客标识uuid
    var uuid = $.cookie('_sg_uuid');
    if (uuid === undefined) {
        uuid = _lyz_guid();
        $.cookie('_sg_uuid', uuid, option);
    }

    // 屏幕分辨率
    var width = 0;
    var height = 0;
    try {
        width = window.screen.width;
        height = window.screen.height;
    } catch(e){}
    $.cookie('_sg_width', width, option);
    $.cookie('_sg_height', height, option);
 
    // 行为判断
    var params = _lyz_URLParams();
    if (params['e_cid'] !== undefined) {
        try {
          // 客户编号
          var uid = params['e_cid'];
          $.cookie('_sg_cid',uid,option);
        } catch(e){}
    }
    if (params['utm_source'] !== undefined 
      && params['utm_campaign'] !== undefined) {
        /*
          utm_source:来源
          utm_campaign：推广单元
          utm_medium：推广媒介
          utm_term：关键词
          e_keywordid：关键词唯一标识ID
         */
        try {
        // SEM推广
        var source = params['utm_source'];
        var keyword = params['utm_term'];
        var unit = params['utm_campaign'];
        var medium = params['utm_medium'];
        var e_keywordid = params['e_keywordid'];
        var timestamp = Math.round(new Date().getTime()/1000);

        // cookie只记录最近一次
        $.cookie('_sg_source',source,option);
        $.cookie('_sg_medium',medium,option);
        $.cookie('_sg_word',keyword,option);
        $.cookie('_sg_unit',unit,option);
        $.cookie('_sg_wordid',e_keywordid,option);
        $.cookie('_sg_time',timestamp,option);

        // 报告竞价点击
        _lyz_sem_hit(uuid, source, medium, keyword, unit, e_keywordid, timestamp);
        } catch(e){}
    }
    else {
      if (document.referrer !== undefined) {
        try {
          if (document.location.href.split('/')[2].indexOf(domain) !== -1) { // showguide
            if (document.referrer === '' || document.referrer.split('/')[2].indexOf(domain) === -1) { // 外部访问 或 直接访问
              _lyz_outside_hit();
            }
            else if (document.referrer.split('/')[2].indexOf('www.showguide.cn') === 0
              && document.location.href.split('/')[2].indexOf('m.showguide.cn') === 0) { // pc地址跳转手机地址
              _lyz_outside_hit_mobile();
            }
            else if (document.referrer.split('/')[2].indexOf(domain) !== -1
              && _lyz_check_path(document.location.pathname)) { // 内部访问（行业、国家、城市、产品、年月检索）
              _lyz_inside_hit();
            }
          }
        } catch(e){}
      }
    }

    // 关联QQ
    if (params['__z'] !== undefined) {
      try {
        var qqencode = window.document.location.href.split('__z=')[1];
        _lyz_got_qq(Base64.decode(qqencode));
      } catch(e){}
    }
} catch(e){}
});