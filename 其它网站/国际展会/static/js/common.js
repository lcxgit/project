// 调用wx jssdk
function wxConfig(){
  console.log(this)
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: this.appId, // 必填，公众号的唯一标识
    timestamp: this.timestamp, // 必填，生成签名的时间戳
    nonceStr: this.nonceStr, // 必填，生成签名的随机串
    signature: this.signature,// 必填，签名，见附录1
    jsApiList: [
      'checkJsApi',
      'onMenuShareAppMessage',//获取“分享给朋友”按钮点击状态及自定义分享内容接口
      'onMenuShareTimeline',//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
      'onMenuShareQQ',//获取“分享到QQ”按钮点击状态及自定义分享内容接口
      'onMenuShareWeibo'//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
  
  wx.ready(function (res) {
    // 由于微信分享出去后会自动给链接加上from和isappinstalled参数
    // 这里写个方法把这两个参数去掉
    var url = nativeUrl()
    wx.showAllNonBaseMenuItem()
    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: document.title, // 分享标题
      link: url, // 分享链接
      imgUrl: document.querySelector('#wxShareImg').src, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
        // 用户取消分享后执行的回调函数
      }
    })

    //分享给朋友
    wx.onMenuShareAppMessage({
      title: document.title, // 分享标题
      desc: '外贸从业者交流共享的专业平台', // 分享描述
      link: url, // 分享链接
      imgUrl: document.querySelector('#wxShareImg').src, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        console.log('调用分享接口');
      },
      cancel: function () { 
        // 用户取消分享后执行的回调函数
      }
    })

    //分享给qq好友
    wx.onMenuShareQQ({
      title: document.title, // 分享标题
      desc: '外贸从业者交流共享的专业平台', // 分享描述
      link: url, // 分享链接
      imgUrl: document.querySelector('#wxShareImg').src, // 分享图标
      success: function () { 
         // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
         // 用户取消分享后执行的回调函数
      }
    })

    // 分享到腾讯微博
    wx.onMenuShareWeibo({
      title: document.title, // 分享标题
      desc: '外贸从业者交流共享的专业平台', // 分享描述
      link: url, // 分享链接
      imgUrl: document.querySelector('#wxShareImg').src, // 分享图标
      success: function () { 
         // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      }
    })
  })
}

function nativeUrl(){
  var url = location.href.split('#')[0]
  var params = url.split('?')[1]
  if(params){
    var param = params.split('&')
    var nativeParams = []
    param.forEach(function(value, key, arr){
      var item = value.split('=')
      // item[0]为字段 item[1]为值
      if(item[0] != 'from' && item[0] != 'isappinstalled'){
        nativeParams.push({
          key: item[0],
          value: item[1]
        })
      }
    })
    if(nativeParams[0]){
      var p = ''
      nativeParams.forEach(function(v, k, a){
        p += v.key + '=' + v.value + '&'
      })
      return url.split('?')[0] + '?' + p.substring(0, p.length - 1) 
    }else{
      return url.split('?')[0]
    }
  }else{
    return url.split('?')[0]
  }
}

// 判断用户是否为微信访问
if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
  // 动态加载微信jssdk
  $.getScript("https://res.wx.qq.com/open/js/jweixin-1.2.0.js", function(){
    $.ajax({
      type: 'post',
      url: '/expoApi/Home/Api/wechatConf',
      data: {
        url: encodeURI(location.href.split('#')[0]),
        type: 'jianghu'
      },
      success: function(res){
        console.log(res)
        if(res.status == 'success'){
          wxConfig.call(res.config)
        }
      }
    })
  })
}

function loginAlert(){
    $('#grey_back2').show()
    $('#popUpLogin').show()
  //以下两行解决苹果手机iframe弹窗被隐藏问题
    if(navigator.userAgent.toLowerCase().indexOf('iphone') != -1){
        var iframe = $('#loginAlertIframe');
        iframe.attr('src', iframe.attr('src'));
    }
}

var showAnswerSwitch = false
function showAnswer(id){
  $('.expo__client-answer').hide()
  if(showAnswerSwitch){
    $('#answer_' + id).hide()
    showAnswerSwitch = false
  }else{
    $('#answer_' + id).show()
    showAnswerSwitch = true
  }
}

function praise(id, type){
  $.ajax({
    type: 'post',
    url: '/expoApi/Home/ExpoClient/praise',
    data: {
      id: id,
      type: type
    },
    success: function(res){
      if(type == 'comment'){
        var dom = document.getElementById('praise_' + id)
      }else if(type == 'live'){
        var dom = document.getElementById('live_praise_' + id)
      }
      
      if(res == 'success'){
        if(dom.innerHTML == '赞'){
          dom.innerHTML = 1
        }else{
          dom.innerHTML = Number(dom.innerHTML) + 1
        }
      }else if(res == 'praised'){
        var num = Number(dom.innerHTML) - 1
        if(num == 0){
          dom.innerHTML = '赞'
        }else{
          dom.innerHTML = num
        }
      }else if(res == 'notLogin'){
        loginAlert()
      }
    }
  })
}

function deleteImg(that){
  that.parentNode.removeChild(that)
  updateNum()
}

function updateNum(){
  uploadedfiles = $('.jfr_pic').length
  document.getElementById('uploadedfiles').innerHTML = uploadedfiles
}

function getUpdateNum(){
  return $('.jfr_pic').length
}

function uploadError(str){
  // document.getElementById('uploadError').innerHTML = '<i class="fa fa-minus-circle"></i>' + str
  alert(str)
}

function log() {
    var str = ""
    plupload.each(arguments, function(arg){
        var row = ""
        if(typeof(arg) != "string"){
            plupload.each(arg, function(value, key){
                // Convert items in File objects to human readable form
                if(arg instanceof plupload.File){
                    // Convert status to human readable
                    switch (value) {
                        case plupload.QUEUED:
                            value = 'QUEUED'
                        break
                        case plupload.UPLOADING:
                            value = 'UPLOADING'
                        break
                        case plupload.FAILED:
                            value = 'FAILED'
                        break
                        case plupload.DONE:
                            value = 'DONE'
                        break
                    }
                }
                if(typeof(value) != "function"){
                    row += (row ? ', ' : '') + key + '=' + value
                }
            })
            str += row + " "
        }else{
            str += arg + " "
        }
    })
    console.log(str)
}