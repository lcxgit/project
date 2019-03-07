/**
 * Created by Administrator on 2018/2/26.
 */
wx.ready(function (res) {
    wx.showAllNonBaseMenuItem()
    //分享到朋友圈
    wx.onMenuShareTimeline({
        title: $(document).attr("title"), // 分享标题
        link: window.location.href, // 分享链接
        imgUrl: 'http://img.showguide.cn/sglogo.png', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    })

    //分享给朋友
    wx.onMenuShareAppMessage({
        title: $(document).attr("title"), // 分享标题
        desc: des, // 分享描述
        link: window.location.href, // 分享链接
        imgUrl: 'http://img.showguide.cn/sglogo.png', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    })
})