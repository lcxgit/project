var EventUtil = new Object;
EventUtil.addEventHandler = function(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
}

var B = BigNews = {
    current: 0,
    next: 0,
    scrollInterval: 0,
    autoScroller: 0,
    s: {},
    OnScrolling: !1,
    currentBegin: 0
}; 

(function() {
    function e(e) {
        return document.getElementById(e)
    }
    BigNews.turn = function(e, t) {
        clearInterval(BigNews.autoScroller),
        BigNews.scroll(e, t)
    },
    BigNews.scroll = function(t, n) {
        var r = n.step,
        s = BigNews;
        s.next = t;
        try {
            clearInterval(BigNews.s.interval)
        } catch(o) {}
        n.pictxt != null && n.pictxt != "" && (e(n.pictxt + "_" + t).style.display = "block");
        var u = -t + s.current;
        e(n.bigpic),
        BigNews.s.duration = 16,
        BigNews.s.callback = function() {
            BigNews.current = t;
            for (i = 0; i < n.totalcount; i++) i == t ? e("big_pic_nav_" + i).className = "on": e("big_pic_nav_" + i).className = ""
        };
        var a = parseInt(BigNews.currentBegin),
        f = -(t * r + a),
        l = parseInt(e(n.bigpic).style.marginTop) || 0;
        BigNews.s.interval = setInterval(function() {
            BigNews.s.doit(e(n.bigpic), a, f, 16)
        },
        10)
    },
    BigNews.auto = function(e) {
        clearInterval(BigNews.autoScroller),
        BigNews.autoScroller = setInterval(function() {
            BigNews.scroll(BigNews.current == e.totalcount - 1 ? 0: BigNews.current + 1, e)
        },
        e.autotimeintval)
    },
    BigNews.pauseSwitch = function() {
        clearTimeout(BigNews.autoScroller)
    },
    BigNews.showNext = function(e, t) {
        if (e >= MovieRecom.totalcount - 1) return document.body.focus(),
        !1;
        BigNews.pauseSwitch(),
        BigNews.turn(e + 1, t),
        BigNews.auto(t),
        document.body.focus()
    },
    BigNews.showPre = function(e, t) {
        if (e <= 0) return document.body.focus(),
        !1;
        BigNews.pauseSwitch(),
        BigNews.turn(e - 1, t),
        BigNews.auto(t),
        document.body.focus()
    },
    BigNews.init = function(t) {
        BigNews.s = ScrollCrossTOP,
        EventUtil.addEventHandler(e(t.bigpic), "mouseover", new Function("BigNews.pauseSwitch();")),
        EventUtil.addEventHandler(e(t.bigpic), "mouseout", new Function("BigNews.auto(" + t.objname + ");"));
        for (i = 0; i < t.totalcount; i++) t.smallpic != null && t.smallpic != "" && EventUtil.addEventHandler(e(t.smallpic + "_" + i), "mouseover", new Function("BigNews.turn(" + i + "," + t.objname + ");BigNews.pauseSwitch();return false;")),
        t.smallpic != null && t.smallpic != "" && EventUtil.addEventHandler(e(t.smallpic + "_" + i), "mouseout", new Function("BigNews.auto(" + t.objname + ");return false;"));
        BigNews.auto(t)
    },
    ScrollCrossLeft = {
        interval: 0,
        count: 0,
        duration: 0,
        step: 0,
        srcObj: null,
        callback: null
    },
    ScrollCrossLeft.doit = function(e, t, n, r) {
        function o(e, t, n, r) {
            return n * ((e = e / r - 1) * e * e + 1) + t
        }
        var i = ScrollCrossLeft,
        s = o(i.count, t, n, r);
        e.style.marginLeft = s + "px",
        BigNews.currentBegin = s,
        i.count++,
        i.count == r && (clearInterval(i.interval), i.count = 0, e.style.marginLeft = t + n + "px", BigNews.currentBegin = t + n, i.callback())
    };
    var t = BigNews = {
        current: 0,
        next: 0,
        scrollInterval: 0,
        autoScroller: 0,
        s: {},
        f: {},
        t: {},
        OnScrolling: !1,
        preCss: "",
        currentBegin: 0
    };
    BigNews.turn = function(t, n) {
        if (t == BigNews.current) return ! 1;
        e("showDiv_" + BigNews.current).style.display = "none",
        e("showDiv_" + t).style.zIndex++;
        if (e("bigpic_" + t).src == "http://images.movie.xunlei.com/img_default.gif") try {
            setTimeout('$g("bigpic_' + t + '").src = ScrollBigPic[' + t + "] ;", 50)
        } catch(r) {}
        e("bigHover").style.marginLeft = (n.step + 2) * t + "px",
        BigNews.fadeIn("showDiv_" + t, t, 50, n);
        for (var i = 0; i < n.totalcount; ++i) i == t ? e(n.smallpic + "_" + i).className = "on": e(n.smallpic + "_" + i).className = ""
    },
    BigNews.fadeIn = function(t, n, r, i) {
        try {
            clearInterval(BigNews.f.interval)
        } catch(s) {}
        var o = e(t),
        u = 0;
        BigNews.f.interval = setInterval(function() {
            u += 20,
            o.style.filter = "alpha(opacity=" + u + ")",
            o.style.cssText = o.style.cssText.replace(/;-moz-opacity:.*?;/gi, "") + ";-moz-opacity:" + u * .01,
            o.style.cssText = o.style.cssText.replace(/;opacity:.*?;/gi, "") + ";opacity:" + u * .01,
            o.style.display = "block";
            if (u == 100) {
                for (var t = 0; t < i.totalcount; t++) e("showDiv_" + t).style.cssText = BigNews.preCss,
                t == n ? (e("showDiv_" + t).style.display = "block", BigNews.showTitles(n, i)) : e("showDiv_" + t).style.display = "none",
                e("showDiv_" + n).style.zIndex = 0;
                BigNews.current = n,
                clearInterval(BigNews.f.interval)
            }
        },
        r)
    },
    BigNews.showTitles = function(t, n) {
        for (var r = 0; r < n.totalcount; r++) r == t ? (e("title_bg_" + r).style.display = "block", e("title_" + r).style.display = "block") : (e("title_bg_" + r).style.display = "none", e("title_" + r).style.display = "none")
    },
    BigNews.scroll = function(t, n) {
        function h() {}
        var r = 0,
        i = n.step,
        s = 16,
        o = BigNews;
        o.next = t;
        if (t != o.current && r > s / 8) return;
        try {
            clearInterval(BigNews.s.interval)
        } catch(u) {}
        var a = e(n.hover).scrollLeft,
        f = c * i + (o.current * i - a);
        BigNews.s.duration = s,
        BigNews.s.callback = h;
        var l = parseInt(BigNews.currentBegin),
        c = t * i - l;
        BigNews.s.interval = setInterval(function() {
            BigNews.s.doit(e(n.hover), l, c, s)
        },
        8)
    },
    BigNews.auto = function(e) {
        clearInterval(BigNews.autoScroller),
        BigNews.autoScroller = setInterval(function() {
            BigNews.turn(BigNews.current == e.totalcount - 1 ? 0: BigNews.current + 1, e)
        },
        e.autotimeintval)
    },
    BigNews.pauseSwitch = function() {
        clearTimeout(BigNews.autoScroller)
    },
    BigNews.init = function(t) {
        BigNews.s = ScrollCrossLeft,
        BigNews.preCss = t.css,
        EventUtil.addEventHandler(e(t.bigpic), "mouseover", new Function("BigNews.pauseSwitch();")),
        EventUtil.addEventHandler(e(t.bigpic), "mouseout", new Function("BigNews.auto(" + t.objname + ");"));
        for (i = 0; i < t.totalcount; i++) t.smallpic != null && t.smallpic != "" && (EventUtil.addEventHandler(e(t.smallpic + "_" + i), "mouseover", new Function("BigNews.pauseSwitch();BigNews.turn(" + i + "," + t.objname + ");return false;")), EventUtil.addEventHandler(e(t.smallpic + "_" + i), "mouseout", new Function("BigNews.auto(" + t.objname + ");")));
        BigNews.showTitles(0, t),
        BigNews.auto(t)
    }
})();