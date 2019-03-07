/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return - h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return - h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return - h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return - h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return - h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return - h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a: h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h: h * ( - Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * ( - Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return - h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return - h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return - (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return - 0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
/*
* JSTween JavaScript Library v1.2
* http://www.jstween.org/
*
* Copyright 2011, Marco Wolfsheimer
* JSTween by Marco Wolfsheimer is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.
*
* Date: Sun Mar 13 12:46:40 2011 -0000
*/
var JSTween = function(m) {
    var V = /[\-]{0,1}[0-9\.]{1,}|#[0-9\.abcdef]{3,6}/gi,
    W = /[pxemtcin%]{1,2}|deg/gi,
    A = /[0-9\.\-]{1,}/gi,
    ga = /[0-9a-f]{3,6}/gi,
    ha = /^#/,
    ia = /^[0-9\.\-]{1,}([pxemtcin%]{1,2}|deg)$/,
    ja = /^rgb\(/,
    X = /^scroll/,
    Y = /-([a-z])/ig,
    Z = /^-ms/ig,
    k = {
        opacity: ["opacity", "-moz-opacity", "filter"],
        shadow: ["box-shadow", "-moz-box-shadow", "-o-box-shadow", "-ms-box-shadow", "-webkit-box-shadow"],
        transform: ["-moz-transform", "transform", "-o-transform", "-ms-transform", "-webkit-transform"],
        transformOrigin: ["-moz-transform-origin", "transform-origin", "-o-transform-origin", "-ms-transform-origin", "-webkit-transform-origin"],
        borderRadius: ["-moz-border-radius", "border-radius", "-webkit-border-radius"],
        borderRadiusTopLeft: ["-moz-border-radius-topleft", "border-top-left-radius", "-webkit-border-top-left-radius"],
        borderRadiusTopRight: ["-moz-border-radius-topright", "border-top-right-radius", "-webkit-border-top-right-radius"],
        borderRadiusBottomLeft: ["-moz-border-radius-bottomleft", "border-bottom-left-radius", "-webkit-border-bottom-left-radius"],
        borderRadiusBottomRight: ["-moz-border-radius-bottomright", "border-bottom-right-radius", "-webkit-border-bottom-right-radius"],
        backgroundSize: ["background-size", "-moz-background-size", "-o-background-size", "-webkit-background-size"]
    },
    h = {},
    l = [],
    q = 0,
    L = 0,
    B = !1,
    C = !1,
    $ = 0,
    n = {},
    ka = /iPad/i.test(navigator.userAgent) || /iPhone OS/i.test(navigator.userAgent),
    la = function() {
        var a = jQuery.fn;
        jQuery.JSTween = m;
        a.tween = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) aa(this[b], a);
            return this
        };
        jQuery.framerate = function(a) {
            D(a)
        };
        jQuery.play = function(a) {
            E(a)
        };
        jQuery.clear = function(a, b) {
            J(a, b)
        };
        a.play = function(a) {
            E(a);
            return this
        };
        a.clear = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) J(this[b], a);
            return this
        };
        a.property = function(a) {
            var b = [],
            d,
            f = this.length;
            for (d = 0; d < f; d++) b.push(M(this[d], a));
            return 1 === b.length ? b[0] : b
        };
        a.opacity = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) F(this[b], a);
            return this
        };
        a.alpha = a.opacity;
        a.transparency = a.opacity;
        a.rotate = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) N(this[b], a);
            return this
        };
        a.action = function(a, b, d, f) {
            var e, g, h = this.length,
            n = {};
            if ("object" === typeof a) {
                for (e in a) a.hasOwnProperty(e) && "string" === typeof a[e] && (ia.test(a[e]) ? n[e] = {
                    value: parseFloat(a[e].match(A)[0], 10),
                    units: a[e].match(W)[0]
                }: n[e] = {
                    value: a[e],
                    units: void 0
                });
                for (g = 0; g < h; g++) for (e in a = jQuery.JSTween.register(this[g]), n) n.hasOwnProperty(e) && jQuery.JSTween.action(a, e, n[e].value, n[e].units, void 0, !0)
            } else for (g = 0; g < h; g++) O(P(this[g]), a, b, d, f, !0);
            return this
        };
        a.state = function(a) {
            if (0 < this.length && void 0 !== this[0].__animate) {
                if (void 0 !== a && void 0 !== this[0].__animate.state[a]) return this[0].__animate.state[a];
                if (void 0 === a) return this[0].__animate.state
            }
        };
        a.transform = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) Q(this[b], a);
            return this
        };
        a.transformOrigin = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) R(this[b], a);
            return this
        };
        a.backgroundSize = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) S(this[b], a);
            return this
        };
        a.shadow = function(a) {
            var b, d = this.length;
            for (b = 0; b < d; b++) T(this[b], a);
            return this
        };
        a.borderRadius = function(a, b) {
            var d, f = this.length;
            for (d = 0; d < f; d++) U(this[d], a, b);
            return this
        };
        a.borderRadiusTopRight = function(a, b) {
            var d, f = this.length;
            for (d = 0; d < f; d++) r(this[d], "top", "right", a, b);
            return this
        };
        a.borderRadiusTopLeft = function(a, b) {
            var d, f = this.length;
            for (d = 0; d < f; d++) r(this[d], "top", "left", a, b);
            return this
        };
        a.borderRadiusBottomRight = function(a, b) {
            var d, f = this.length;
            for (d = 0; d < f; d++) r(this[d], "bottom", "right", a, b);
            return this
        };
        a.borderRadiusBottomLeft = function(a, b) {
            var d, f = this.length;
            for (d = 0; d < f; d++) r(this[d], "bottom", "left", a, b);
            return this
        };
        a.borderRadiusCorner = function(a, b, d, f) {
            var e, g = this.length;
            for (e = 0; e < g; e++) r(this[e], a, b, d, f);
            return this
        }
    },
    ba = function(a, c) {
        return c.toUpperCase()
    },
    D = function(a) {
        if (!a) return n.frameRate;
        n.frameRate = a || 45;
        n.frameDelay = Math.round(1E3 / n.frameRate);
        n.frameLength = 1 / n.frameRate;
        return n.frameRate
    },
    M = function(a, c) {
        return void 0 !== a.__animate ? void 0 === c ? a.__animate.state: a.__animate.state[c] ? a.__animate.state[c] : !1 : !1
    },
    ca = function(a) {
        return void 0 !== a.tagName || void 0 === a.scroll && void 0 === a.scrollTo ? a.scrollLeft + "px " + a.scrollTop + "px": jQuery(a).scrollLeft() + "px " + jQuery(a).scrollTop() + "px"
    },
    y = function(a, c) {
        return "function" === typeof a ? a() : void 0 !== a ? a: c
    },
    da = function(a) {
        var c = a.match(V);
        a = a.split(V);
        var b, d = c.length;
        for (b = 0; b < d; b++) if (ha.test(c[b])) {
            var f = b,
            e;
            e = c[b].match(ga)[0];
            e = 3 === e.length ? [16 * parseInt(e.substr(0, 1), 16), 16 * parseInt(e.substr(1, 1), 16), 16 * parseInt(e.substr(2, 1), 16)] : [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
            c[f] = e
        } else c[b] = parseFloat(c[b].match(A)[0], 10);
        return {
            value: c,
            delimiter: a
        }
    },
    aa = function(a, c) {
        var b = P(a),
        d = 0,
        f = 0,
        e = {},
        g,
        h;
        for (g in c) if (c.hasOwnProperty(g) && "onStart" !== g && "onStop" !== g && "onFrame" !== g) {
            e[g] = {};
            if (void 0 === c[g].start) {
                var d = a,
                f = g,
                k = c[g].stop,
                m = M(d, f),
                l = void 0,
                v = void 0;
                h = void 0;
                if (!1 === m || X.test(f)) {
                    switch (f) {
                    case "transform":
                    case "transformOrigin":
                    case "shadow":
                    case "boxShadow":
                    case "backgroundSize":
                        v = k;
                        break;
                    case "opacity":
                    case "transparency":
                    case "alpha":
                        v = 100;
                        break;
                    case "scrollLeft":
                    case "scrollTop":
                    case "scroll":
                    case "scrollTo":
                        v = ca(d, f, k);
                        break;
                    default:
                        void 0 !== window.getComputedStyle ? l = window.getComputedStyle(d, null)[f] : void 0 !== d.currentStyle && (l = d.currentStyle[f]),
                        "auto" === l || void 0 === l || "" === l ? (v = 0, h = "px") : ja.test(l) ? (d = l.match(A), m = k = f = void 0, f = parseInt(d[0], 10).toString(16), 1 === f.length && (f = "0" + f), k = parseInt(d[1], 10).toString(16), 1 === k.length && (k = "0" + k), m = parseInt(d[2], 10).toString(16), 1 === m.length && (m = "0" + m), v = "#" + f + k + m) : (v = parseFloat(l.match(A), 10), h = l.match(W))
                    }
                    h = {
                        value: v,
                        units: h
                    }
                } else h = {
                    value: m.value,
                    units: d.__animate.state[f].units
                };
                e[g].start = h.value
            } else e[g].start = y(c[g].start);
            e[g].stop = y(c[g].stop, 1);
            e[g].duration = y(c[g].duration || e[g].dur, 1);
            e[g].time = y(c[g].time, 0);
            e[g].merge = y(c[g].merge, !1);
            e[g].effect = y(c[g].effect, "linear");
            e[g].framerate = y(c[g].framerate, n.frameRate);
            e[g].units = y(c[g].units, h ? h.units: "px");
            e[g].end = y(c[g].end, e[g].time + e[g].duration);
            X.test(g) && ("number" === typeof e[g].start && (e[g].start = e[g].start + "px " + e[g].start + "px"), "number" === typeof e[g].stop && (e[g].stop = e[g].stop + "px " + e[g].stop + "px"));
            e[g].callback = {
                onStart: c[g].onStart,
                onFrame: c[g].onFrame,
                onStop: c[g].onStop
            }
        }
        var p;
        g = h = 0;
        for (var t in e) e.hasOwnProperty(t) && e[t].end > g && (g = e[t].end);
        h = g;
        for (t in e) e.hasOwnProperty(t) && e[t].time < h && (h = e[t].time);
        for (p in e) if (e.hasOwnProperty(p)) {
            if ("string" === typeof e[p].start) {
                t = b;
                for (var d = p,
                f = e[p], s = void 0, k = da(f.start), m = da(f.stop), u = s = v = l = void 0, r = n.frameLength, C = f.end, s = u = Math.round(n.frameRate / f.framerate - 1), l = f.time; l < C; l += r) if (v = q + Math.round(l * n.frameRate), 0 === s) {
                    for (var s = k,
                    B = m,
                    G = f,
                    D = l,
                    E = f.end,
                    z = "",
                    K = "",
                    w = void 0,
                    H = void 0,
                    J = s.value.length,
                    F = 0,
                    w = 0; w < J; w++) if ("object" === typeof s.value[w] && void 0 !== s.value[w].length) for (z += s.delimiter[w] + "#", F = s.value[w].length, H = 0; H < F; H++) K = Math.round(I[G.effect](D - G.time, s.value[w][H], B.value[w][H] - s.value[w][H], E - G.time), 10).toString(16),
                    1 === K.length && (K = "0" + K),
                    z += K;
                    else z += s.delimiter[w] + I[G.effect](D - G.time, s.value[w], B.value[w] - s.value[w], E - G.time);
                    s = z + s.delimiter[s.delimiter.length - 1];
                    x(v, t, d, s, f.units, !1, !1);
                    s = u
                } else x(v, t, d),
                s--;
                v = q + Math.round(f.end * n.frameRate);
                x(v, t, d, f.stop, f.units, !1, !0)
            } else {
                t = b;
                d = p;
                f = e[p];
                l = r = m = k = r = void 0;
                v = n.frameLength;
                u = f.end;
                r = l = Math.round(n.frameRate / f.framerate - 1);
                for (k = f.time; k < u; k += v) m = q + Math.round(k * n.frameRate),
                0 === r ? (r = I[f.effect](k - f.time, f.start, f.stop - f.start, f.end - f.time), x(m, t, d, r, f.units, !1, !1), r = l) : (x(m, t, d), r--);
                m = q + Math.round(f.end * n.frameRate);
                x(m, t, d, f.stop, f.units, !1, !0)
            }
            "function" === typeof e[p].callback.onStart && (t = q + Math.round(e[p].time * n.frameRate), x(t, b, p, !1, !1, e[p].callback.onStart, !0));
            if ("function" === typeof e[p].callback.onFrame) for (f = e[p].time; f < e[p].end; f += n.frameLength) d = q + Math.round(f * n.frameRate),
            x(d, b, p, !1, !1, e[p].callback.onFrame, !0);
            "function" === typeof e[p].callback.onStop && (t = q + Math.round(e[p].end * n.frameRate), x(t, b, p, !1, !1, e[p].callback.onStop, !0));
            d = q + Math.round(e[p].end * n.frameRate);
            d > L && (L = d)
        }
        "function" === typeof c.onStart && (e = q + Math.round(h * n.frameRate), x(e, b, "callback", !1, !1, c.onStart, !0));
        if ("function" === typeof c.onFrame) for (e = q + Math.round(h * n.frameRate); e <= q + Math.round(g * n.frameRate); e++) x(e, b, "callback", !1, !1, c.onFrame, !0);
        "function" === typeof c.onStop && (e = q + Math.round(g * n.frameRate), x(e, b, "callback", !1, !1, c.onStop, !0))
    },
    x = function(a, c, b, d, f, e, g) {
        void 0 !== c ? (void 0 === h[a] ? (h[a] = {},
        h[a][c] = {},
        h[a][c][b] = {
            value: d,
            units: f,
            callback: [],
            skip: g
        }) : void 0 === h[a][c] ? (h[a][c] = {},
        h[a][c][b] = {
            value: d,
            units: f,
            callback: [],
            skip: g
        }) : void 0 === h[a][c][b] ? h[a][c][b] = {
            value: d,
            units: f,
            callback: [],
            skip: g
        }: (!1 !== d && (h[a][c][b].value = d), !1 !== f && (h[a][c][b].units = f), h[a][c][b].skip = g), "function" === typeof e && h[a][c][b].callback.push(e)) : void 0 === h[a] && (h[a] = {})
    },
    E = function(a) { ! 1 === B && (B = !0, $ = (new Date).getTime(), C = a, ea())
    },
    J = function(a, c) {
        var b;
        if (void 0 !== a && void 0 !== c && void 0 !== a.__animate) for (b in h) h.hasOwnProperty(b) && void 0 !== h[b][a.__animate.id] && void 0 !== h[b][a.__animate.id][c] && delete h[b][a.__animate.id][c];
        else if (void 0 !== a && void 0 !== a.__animate) for (b in h) h.hasOwnProperty(b) && void 0 !== h[b][a.__animate.id] && delete h[b][a.__animate.id];
        else for (b in h) h.hasOwnProperty(b) && delete h[b]
    },
    ea = function() {
        var a, c, b, d;
        if (q <= L) {
            d = n.frameDelay - ((new Date).getTime() - $ - q * n.frameDelay);
            0 > d ? d = 0 : d > n.frameDelay && (d = n.frameDelay);
            setTimeout(function() {
                ea(d ? !0 : !1)
            },
            d);
            for (c in h[q]) if (h[q].hasOwnProperty(c)) for (b in a = h[q][c], a) a.hasOwnProperty(b) && O(c, b, a[b].value, a[b].units, a[b].callback, !0 === a[b].skip ? !0 : d ? !0 : !1);
            delete h[q];
            q++; (new Date).getTime()
        } else B = !1,
        q = 0,
        "function" === typeof C && (C(), C = !1)
    },
    O = function(a, c, b, d, f, e) {
        var g = l[a].__animate.state[c];
        if (!0 === e && !1 !== b && (void 0 === g || g.value != b || g.units != d)) switch (c) {
        case "zIndex":
            l[a].style.zIndex = b;
            break;
        case "alpha":
        case "transparency":
        case "opacity":
            F(l[a], b);
            break;
        case "scroll":
        case "scrollTop":
        case "scrollLeft":
        case "scrollTo":
            fa(l[a], c, b);
            break;
        case "shadow":
        case "boxShadow":
            T(l[a], b);
            break;
        case "rotate":
            N(l[a], b);
            break;
        case "transformOrigin":
            R(l[a], b);
            break;
        case "transform":
            Q(l[a], b);
            break;
        case "backgroundSize":
            S(l[a], b);
            break;
        case "borderRadius":
            U(l[a], b, d);
            break;
        case "borderRadiusTopRight":
            r(l[a], "top", "right", b, d);
            break;
        case "borderRadiusTopLeft":
            r(l[a], "top", "left", b, d);
            break;
        case "borderRadiusBottomRight":
            r(l[a], "bottom", "right", b, d);
            break;
        case "borderRadiusBottomLeft":
            r(l[a], "bottom", "left", b, d);
            break;
        default:
            l[a].style[c] = "string" === typeof b ? b: b + d
        }
        l[a].__animate.state[c] = {
            value: b,
            units: d
        };
        if (void 0 !== f && 0 < f.length) for (e = 0; e < f.length; e++) if ("function" === typeof f[e]) f[e](l[a], {
            type: c,
            value: b,
            units: d,
            id: a
        })
    },
    fa = function(a, c, b) {
        void 0 !== a.tagName || "function" !== typeof a.scroll && "function" !== typeof a.scrollTo || "string" !== typeof b ? (b = "string" === typeof b ? b.match(A) : [b, b], "scrollTop" === c ? a.scrollTop = parseInt(b[1], 10) : "scrollLeft" === c ? a.scrollLeft = parseInt(b[0], 10) : (a.scrollLeft = parseInt(b[0], 10), a.scrollTop = parseInt(b[1], 10))) : (b = b.match(A)) && (self.pageYOffset ? window.scroll(parseInt(b[0], 10), parseInt(b[1], 10)) : document.documentElement && document.documentElement.scrollTop ? window.scrollTo(parseInt(b[0], 10), parseInt(b[1], 10)) : document.body && window.scrollTo(parseInt(b[0], 10), parseInt(b[1], 10)))
    },
    u = function(a, c, b, d) {
        a.style[c] = b + (d ? d: "")
    },
    F = function(a, c) {
        "filter" === k.opacity ? u(a, "filter", "alpha(opacity=" + c + ")") : u(a, k.opacity, c / 100)
    },
    T = function(a, c) {
        u(a, k.shadow, c)
    },
    N = function(a, c) {
        u(a, k.transform, "rotate(" + c + "deg)")
    },
    Q = function(a, c) {
        u(a, k.transform, c)
    },
    S = function(a, c) {
        u(a, k.backgroundSize, c)
    },
    R = function(a, c) {
        u(a, k.transformOrigin, c)
    },
    U = function(a, c, b) {
        u(a, k.borderRadius, c, b)
    },
    r = function(a, c, b, d, f) {
        "top" === c ? "left" === b ? u(a, k.borderRadiusTopLeft, d, f) : u(a, k.borderRadiusTopRight, d, f) : "left" === b ? u(a, k.borderRadiusBottomLeft, d, f) : u(a, k.borderRadiusBottomRight, d, f)
    },
    P = function(a) {
        if (void 0 === a.__animate) {
            var c = l.length;
            a.__animate = {
                id: c,
                state: {},
                callback: {},
                dragging: !1
            };
            l.push(a);
            return c
        }
        return a.__animate.id
    },
    I = {
        linear: function(a, c, b, d) {
            return b * a / d + c
        },
        quadIn: function(a, c, b, d) {
            return b * (a /= d) * a + c
        },
        quadOut: function(a, c, b, d) {
            return - b * (a /= d) * (a - 2) + c
        },
        quadInOut: function(a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a + c: -b / 2 * (--a * (a - 2) - 1) + c
        },
        cubicIn: function(a, c, b, d) {
            return b * (a /= d) * a * a + c
        },
        cubicOut: function(a, c, b, d) {
            return b * ((a = a / d - 1) * a * a + 1) + c
        },
        cubicInOut: function(a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a * a + c: b / 2 * ((a -= 2) * a * a + 2) + c
        },
        easeIn: function(a, c, b, d) {
            return b * (a /= d) * a * a + c
        },
        easeOut: function(a, c, b, d) {
            return b * ((a = a / d - 1) * a * a + 1) + c
        },
        easeInOut: function(a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a * a + c: b / 2 * ((a -= 2) * a * a + 2) + c
        },
        quartIn: function(a, c, b, d) {
            return b * (a /= d) * a * a * a + c
        },
        quartOut: function(a, c, b, d) {
            return - b * ((a = a / d - 1) * a * a * a - 1) + c
        },
        quartInOut: function(a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a * a * a + c: -b / 2 * ((a -= 2) * a * a * a - 2) + c
        },
        quintIn: function(a, c, b, d) {
            return b * (a /= d) * a * a * a * a + c
        },
        quintOut: function(a, c, b, d) {
            return b * ((a = a / d - 1) * a * a * a * a + 1) + c
        },
        quintInOut: function(a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a * a * a * a + c: b / 2 * ((a -= 2) * a * a * a * a + 2) + c
        },
        sineIn: function(a, c, b, d) {
            return - b * Math.cos(a / d * (Math.PI / 2)) + b + c
        },
        sineOut: function(a, c, b, d) {
            return b * Math.sin(a / d * (Math.PI / 2)) + c
        },
        sineInOut: function(a, c, b, d) {
            return - b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
        },
        expoIn: function(a, c, b, d) {
            return 0 === a ? c: b * Math.pow(2, 10 * (a / d - 1)) + c
        },
        expoOut: function(a, c, b, d) {
            return a === d ? c + b: b * ( - Math.pow(2, -10 * a / d) + 1) + c
        },
        expoInOut: function(a, c, b, d) {
            return 0 === a ? c: a === d ? c + b: 1 > (a /= d / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + c: b / 2 * ( - Math.pow(2, -10 * --a) + 2) + c
        },
        circIn: function(a, c, b, d) {
            return - b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
        },
        circOut: function(a, c, b, d) {
            return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
        },
        circInOut: function(a, c, b, d) {
            return 1 > (a /= d / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c: b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
        },
        bounceIn: function(a, c, b, d) {
            return b - I.bounceOut(d - a, 0, b, d) + c
        },
        bounceOut: function(a, c, b, d) {
            return (a /= d) < 1 / 2.75 ? 7.5625 * b * a * a + c: a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c: a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + c: b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
        },
        bounceInOut: function(a, c, b, d) {
            return a < d / 2 ? .5 * I.bounceIn(2 * a, 0, b, d) + c: .5 * I.bounceOut(2 * a - d, 0, b, d) + .5 * b + c
        },
        elasticIn: function(a, c, b, d, f, e) {
            if (0 === a) return c;
            if (1 === (a /= d)) return c + b;
            e || (e = .3 * d);
            f || (f = 1);
            var g = 0;
            f < Math.abs(b) ? (f = b, g = e / 4) : g = e / (2 * Math.PI) * Math.asin(b / f);
            return - (f * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - g) * Math.PI / e)) + c
        },
        elasticOut: function(a, c, b, d, f, e) {
            if (0 === a) return c;
            if (1 === (a /= d)) return c + b;
            e || (e = .3 * d);
            f || (f = 1);
            var g = 0;
            f < Math.abs(b) ? (f = b, g = e / 4) : g = e / (2 * Math.PI) * Math.asin(b / f);
            return f * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - g) * Math.PI / e) + b + c
        },
        elasticInOut: function(a, c, b, d, f, e) {
            if (0 === a) return c;
            if (2 === (a /= d / 2)) return c + b;
            e || (e = .3 * d * 1.5);
            f || (f = 1);
            var g = 0;
            f < Math.abs(b) ? (f = b, g = e / 4) : g = e / (2 * Math.PI) * Math.asin(b / f);
            return 1 > a ? -.5 * f * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - g) * Math.PI / e) + c: f * Math.pow(2, -10 * --a) * Math.sin(2 * (a * d - g) * Math.PI / e) * .5 + b + c
        }
    };
    m.tween = aa;
    m.action = O;
    m.register = P;
    m.shadow = T;
    m.opacity = F;
    m.borderRadius = U;
    m.borderRadiusCorner = r;
    m.backgroundSize = S;
    m.transformOrigin = R;
    m.rotate = N;
    m.transform = Q;
    m.clear = J;
    m.play = E;
    m.property = M;
    m.getScroll = ca;
    m.scroll = fa;
    m.framerate = D;
    D(ka ? 30 : 45); (function() {
        var a = document.getElementsByTagName("html"),
        c;
        if (void 0 !== a[0]) for (c in a = a[0].style, k) if (k.hasOwnProperty(c)) for (var b = 0; b < k[c].length; b++) if (void 0 !== a[k[c][b]]) {
            k[c] = k[c][b];
            break
        } else if (void 0 !== a[k[c][b].replace(Z, "ms").replace(Y, ba)]) {
            k[c] = k[c][b].replace(Z, "ms").replace(Y, ba);
            break
        }
    })();
    try {
        la()
    } catch(ma) {}
    return m
} (JSTween || {});
/*slick*/

/**/
!
function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
} (function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, g, e = this;
            if (e.defaults = {
                accessibility: !0,
                arrows: !0,
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button">' + (b + 1) + "</button>"
                },
                dots: !1,
                draggable: !0,
                easing: "linear",
                fade: !1,
                infinite: !0,
                lazyLoad: "ondemand",
                onBeforeChange: null,
                onAfterChange: null,
                onInit: null,
                onReInit: null,
                pauseOnHover: !0,
                responsive: null,
                slide: "div",
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                swipe: !0,
                touchMove: !0,
                touchThreshold: 5,
                vertical: !1
            },
            e.initials = {
                animating: !1,
                autoPlayTimer: null,
                currentSlide: 0,
                currentLeft: null,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1
            },
            a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.paused = !1, e.positionProp = null, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.windowWidth = 0, e.windowTimer = null, e.options = a.extend({},
            e.defaults, d), e.originalSettings = e.options, f = e.options.responsive || null, f && f.length > -1) {
                for (g in f) f.hasOwnProperty(g) && (e.breakpoints.push(f[g].breakpoint), e.breakpointSettings[f[g].breakpoint] = f[g].settings);
                e.breakpoints.sort(function(a, b) {
                    return b - a
                })
            }
            e.autoPlay = a.proxy(e.autoPlay, e),
            e.autoPlayClear = a.proxy(e.autoPlayClear, e),
            e.changeSlide = a.proxy(e.changeSlide, e),
            e.setPosition = a.proxy(e.setPosition, e),
            e.swipeHandler = a.proxy(e.swipeHandler, e),
            e.dragHandler = a.proxy(e.dragHandler, e),
            e.keyHandler = a.proxy(e.keyHandler, e),
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e),
            e.instanceUid = b++,
            e.init()
        }
        var b = 0;
        return c
    } (),
    b.prototype.addSlide = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c,
        c = null;
        else if (0 > c || c >= e.slideCount) return ! 1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).remove(),
        e.$slideTrack.append(e.$slides),
        e.$slidesCache = e.$slides,
        e.reinit()
    },
    b.prototype.animateSlide = function(b, c) {
        var d = {},
        e = this;
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        },
        e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        },
        e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        },
        {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px,0px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        }) : (e.applyTransition(), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)": "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        },
        e.options.speed))
    },
    b.prototype.applyTransition = function(a) {
        var b = this,
        c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase: "opacity " + b.options.speed + "ms " + b.options.cssEase,
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    },
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer),
        a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    },
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    },
    b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    },
    b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a('<button type="button" class="slick-prev">Previous</button>').appendTo(b.$slider), b.$nextArrow = a('<button type="button" class="slick-next">Next</button>').appendTo(b.$slider), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    },
    b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="slick-dots">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>",
            b.$dots = a(d).appendTo(b.$slider),
            b.$dots.find("li").first().addClass("slick-active")
        }
    },
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slidesCache = b.$slides,
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        b.options.centerMode === !0 && (b.options.infinite = !0, b.options.slidesToScroll = 1, 0 === b.options.slidesToShow % 2 && (b.options.slidesToShow = 3)),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.options.accessibility === !0 && b.$list.prop("tabIndex", 0),
        b.setSlideClasses(0),
        b.options.draggable === !0 && b.$list.addClass("draggable")
    },
    b.prototype.checkResponsive = function() {
        var c, d, b = this;
        if (b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && null !== b.originalSettings.responsive) {
            d = null;
            for (c in b.breakpoints) b.breakpoints.hasOwnProperty(c) && a(window).width() < b.breakpoints[c] && (d = b.breakpoints[c]);
            null !== d ? null !== b.activeBreakpoint ? d !== b.activeBreakpoint && (b.activeBreakpoint = d, b.options = a.extend({},
            b.defaults, b.breakpointSettings[d]), b.refresh()) : (b.activeBreakpoint = d, b.options = a.extend({},
            b.defaults, b.breakpointSettings[d]), b.refresh()) : null !== b.activeBreakpoint && (b.activeBreakpoint = null, b.options = a.extend({},
            b.defaults, b.originalSettings), b.refresh())
        }
    },
    b.prototype.changeSlide = function(b) {
        var c = this;
        switch (b.data.message) {
        case "previous":
            c.slideHandler(c.currentSlide - c.options.slidesToScroll);
            break;
        case "next":
            c.slideHandler(c.currentSlide + c.options.slidesToScroll);
            break;
        case "index":
            c.slideHandler(a(b.target).parent().index() * c.options.slidesToScroll);
            break;
        default:
            return ! 1
        }
    },
    b.prototype.destroy = function() {
        var b = this;
        b.autoPlayClear(),
        b.touchObject = {},
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()),
        b.$slides.unwrap().unwrap(),
        b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),
        b.$slider.removeClass("slick-slider"),
        b.$slider.removeClass("slick-initialized"),
        b.$list.off(".slick"),
        a(window).off(".slick-" + b.instanceUid)
    },
    b.prototype.disableTransition = function(a) {
        var b = this,
        c = {};
        c[b.transitionType] = "",
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    },
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: 1e3
        }), c.$slides.eq(a).animate({
            opacity: 1
        },
        c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: 1e3
        }), b && setTimeout(function() {
            c.disableTransition(a),
            b.call()
        },
        c.options.speed))
    },
    b.prototype.filterSlides = function(a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).remove(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    },
    b.prototype.getDotCount = function() {
        var e, a = this,
        b = 0,
        c = 0,
        d = 0;
        for (e = a.options.infinite === !0 ? a.slideCount + a.options.slidesToShow - a.options.slidesToScroll: a.slideCount; e > b;) d++,
        c += a.options.slidesToScroll,
        b = c + a.options.slidesToShow;
        return d
    },
    b.prototype.getLeft = function(a) {
        var c, b = this;
        return b.slideOffset = 0,
        b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideCount % b.options.slidesToShow * b.slideWidth)) : 0 !== b.slideCount % b.options.slidesToShow && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideCount % b.options.slidesToShow * b.slideWidth),
        b.options.centerMode === !0 && (b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth),
        b.options.vertical === !1 ? c = -1 * a * b.slideWidth + b.slideOffset: (b.listHeight = b.$list.height(), c = b.options.infinite === !0 ? -1 * a * b.listHeight - b.listHeight: -1 * a * b.listHeight),
        c
    },
    b.prototype.init = function() {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.checkResponsive()),
        null !== b.options.onInit && b.options.onInit.call(this, b)
    },
    b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        },
        a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        },
        a.changeSlide))
    },
    b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        },
        b.changeSlide)
    },
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        },
        b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        },
        b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        },
        b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        },
        b.swipeHandler),
        b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", b.autoPlayClear), b.$list.on("mouseleave.slick", b.autoPlay)),
        b.$list.on("keydown.slick", b.keyHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid,
        function() {
            b.checkResponsive(),
            b.setPosition()
        }),
        a(window).on("resize.slick.slick-" + b.instanceUid,
        function() {
            a(window).width !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(),
                b.checkResponsive(),
                b.setPosition()
            },
            50))
        }),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition)
    },
    b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(),
        a.options.autoplay === !0 && a.autoPlay()
    },
    b.prototype.keyHandler = function(a) {
        var b = this;
        37 === a.keyCode ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.changeSlide({
            data: {
                message: "next"
            }
        })
    },
    b.prototype.lazyLoad = function() {
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? (e = b.options.slidesToShow + b.currentSlide - 1, f = e + b.options.slidesToShow + 2) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide: b.currentSlide, f = e + b.options.slidesToShow),
        c = b.$slider.find(".slick-slide").slice(e, f),
        a("img[data-lazy]", c).not("[src]").each(function() {
            a(this).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading")
        }),
        b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), a("img[data-lazy]", d).not("[src]").each(function() {
            a(this).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading")
        })) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice( - 1 * b.options.slidesToShow), a("img[data-lazy]", d).not("[src]").each(function() {
            a(this).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading")
        }))
    },
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    },
    b.prototype.postSlide = function(a) {
        var b = this;
        null !== b.options.onAfterChange && a !== b.currentSlide && b.options.onAfterChange.call(this, b, a),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null,
        b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(),
        b.setSlideClasses(b.currentSlide)
    },
    b.prototype.progressiveLazyLoad = function() {
        var c, d, b = this;
        c = a("img[data-lazy]").not("[src]").length,
        c > 0 && (d = a(a("img[data-lazy]", b.$slider).not("[src]").get(0)), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
            b.progressiveLazyLoad()
        }))
    },
    b.prototype.refresh = function() {
        var b = this;
        b.destroy(),
        a.extend(b, b.initials),
        b.init()
    },
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = a(b.options.slide + ":not(.slick-cloned)", b.$slideTrack).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.setSlideClasses(0),
        b.setPosition(),
        null !== b.options.onReInit && b.options.onReInit.call(this, b)
    },
    b.prototype.removeSlide = function(a, b) {
        var c = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : c.slideCount - 1) : a = b === !0 ? --a: a,
        c.slideCount < 1 || 0 > a || a > c.slideCount - 1 ? !1 : (c.unload(), c.$slideTrack.children(this.options.slide).eq(a).remove(), c.$slides = c.$slideTrack.children(this.options.slide), c.$slideTrack.children(this.options.slide).remove(), c.$slideTrack.append(c.$slides), c.$slidesCache = c.$slides, c.reinit(), void 0)
    },
    b.prototype.setCSS = function(a) {
        var d, e, b = this,
        c = {};
        d = "left" == b.positionProp ? a + "px": "0px",
        e = "top" == b.positionProp ? a + "px": "0px",
        c[b.positionProp] = a,
        b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {},
        b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    },
    b.prototype.setDimensions = function() {
        var a = this;
        a.options.centerMode === !0 ? a.$list.find(".slick-slide").width(a.slideWidth) : a.$list.find(".slick-slide").width(a.slideWidth),
        a.options.vertical === !1 ? (a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slider.find(".slick-slide").length)), a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        })) : (a.$list.height(a.$slides.first().outerHeight()), a.$slideTrack.height(Math.ceil(a.listHeight * a.$slider.find(".slick-slide").length)), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        }))
    },
    b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = -1 * b.slideWidth * d,
            a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }),
        b.$slides.eq(b.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    },
    b.prototype.setPosition = function() {
        var a = this;
        a.setValues(),
        a.setDimensions(),
        a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade()
    },
    b.prototype.setProps = function() {
        var a = this;
        a.positionProp = a.options.vertical === !0 ? "top": "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        (void 0 !== document.body.style.WebkitTransition || void 0 !== document.body.style.MozTransition || void 0 !== document.body.style.msTransition) && (a.cssTransitions = !0),
        void 0 !== document.body.style.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition"),
        void 0 !== document.body.style.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition"),
        void 0 !== document.body.style.msTransform && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"),
        a.transformsEnabled = null !== a.animType
    },
    b.prototype.setValues = function() {
        var a = this;
        a.listWidth = a.$list.width(),
        a.listHeight = a.$list.height(),
        a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)
    },
    b.prototype.setSlideClasses = function(a) {
        var c, d, e, b = this;
        b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),
        d = b.$slider.find(".slick-slide"),
        b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center"), b.$slides.eq(a).addClass("slick-center")) : a > 0 && a < b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e, e + b.options.slidesToShow).addClass("slick-active")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad()
    },
    b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if ((b.options.fade === !0 || b.options.vertical === !0) && (b.options.slidesToShow = 1, b.options.slidesToScroll = 1, b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1,
            a(b.$slides[d]).clone().attr("id", "").prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c,
            a(b.$slides[d]).clone().attr("id", "").appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    },
    b.prototype.slideHandler = function(a) {
        var b, c, d, e, f = null,
        g = this;
        return g.animating === !0 ? !1 : (b = a, f = g.getLeft(b), d = g.getLeft(g.currentSlide), e = 0 !== g.slideCount % g.options.slidesToScroll ? g.options.slidesToScroll: 0, g.options.infinite === !1 && (0 > a || a > g.slideCount - g.options.slidesToShow + e) ? (b = g.currentSlide, g.animateSlide(d,
        function() {
            g.postSlide(b)
        }), !1) : (g.options.autoplay === !0 && clearInterval(g.autoPlayTimer), g.currentLeft = null === g.swipeLeft ? d: g.swipeLeft, c = 0 > b ? 0 !== g.slideCount % g.options.slidesToScroll ? g.slideCount - g.slideCount % g.options.slidesToScroll: g.slideCount - g.options.slidesToScroll: b > g.slideCount - 1 ? 0 : b, g.animating = !0, null !== g.options.onBeforeChange && a !== g.currentSlide && g.options.onBeforeChange.call(this, g, g.currentSlide), g.currentSlide = c, g.updateDots(), g.updateArrows(), g.options.fade === !0 ? (g.fadeSlide(c,
        function() {
            g.postSlide(c)
        }), !1) : (g.animateSlide(f,
        function() {
            g.postSlide(c)
        }), void 0)))
    },
    b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    },
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0 ? "left": 360 >= d && d >= 315 ? "left": d >= 135 && 225 >= d ? "right": "vertical"
    },
    b.prototype.swipeEnd = function(b) {
        var c = this;
        if (c.$list.removeClass("dragging"), void 0 === c.touchObject.curX) return ! 1;
        if (c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (a(b.target).on("click.slick",
        function(b) {
            b.stopImmediatePropagation(),
            b.stopPropagation(),
            b.preventDefault(),
            a(b.target).off("click.slick")
        }), c.swipeDirection()) {
        case "left":
            c.slideHandler(c.currentSlide + c.options.slidesToScroll),
            c.touchObject = {};
            break;
        case "right":
            c.slideHandler(c.currentSlide - c.options.slidesToScroll),
            c.touchObject = {}
        } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
    },
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if ("ontouchend" in document && b.options.swipe === !1) return ! 1;
        if (b.options.draggable === !1 && !a.originalEvent.touches) return ! 1;
        switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length: 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
        case "start":
            b.swipeStart(a);
            break;
        case "move":
            b.swipeMove(a);
            break;
        case "end":
            b.swipeEnd(a)
        }
    },
    b.prototype.swipeMove = function(a) {
        var c, d, e, f, b = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches: null,
        c = b.getLeft(b.currentSlide),
        !b.$list.hasClass("dragging") || f && 1 !== f.length ? !1 : (b.touchObject.curX = void 0 !== f ? f[0].pageX: a.clientX, b.touchObject.curY = void 0 !== f ? f[0].pageY: a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), d = b.swipeDirection(), "vertical" === d ? !1 : (void 0 !== a.originalEvent && a.preventDefault(), e = b.touchObject.curX > b.touchObject.startX ? 1 : -1, b.swipeLeft = b.options.vertical === !1 ? c + b.touchObject.swipeLength * e: c + b.touchObject.swipeLength * (b.listHeight / b.listWidth) * e, b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)))
    },
    b.prototype.swipeStart = function(a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {},
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX: a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY: a.clientY, b.$list.addClass("dragging"), void 0)
    },
    b.prototype.unfilterSlides = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).remove(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    },
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()),
        b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")
    },
    b.prototype.updateArrows = function() {
        var a = this;
        a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
    },
    b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(a.currentSlide / a.options.slidesToScroll).addClass("slick-active"))
    },
    a.fn.slick = function(a) {
        var c = this;
        return c.each(function(c, d) {
            d.slick = new b(d, a)
        })
    },
    a.fn.slickAdd = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.addSlide(a, b, c)
        })
    },
    a.fn.slickFilter = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.filterSlides(a)
        })
    },
    a.fn.slickGoTo = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.slideHandler(a)
        })
    },
    a.fn.slickNext = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "next"
                }
            })
        })
    },
    a.fn.slickPause = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.autoPlayClear(),
            b.slick.paused = !0
        })
    },
    a.fn.slickPlay = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.paused = !1,
            b.slick.autoPlay()
        })
    },
    a.fn.slickPrev = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "previous"
                }
            })
        })
    },
    a.fn.slickRemove = function(a, b) {
        var c = this;
        return c.each(function(c, d) {
            d.slick.removeSlide(a, b)
        })
    },
    a.fn.slickSetOption = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.options[a] = b,
            c === !0 && (e.slick.unload(), e.slick.reinit())
        })
    },
    a.fn.slickUnfilter = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.unfilterSlides()
        })
    },
    a.fn.unslick = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.destroy()
        })
    }
});





/*点击图片放大*/
document.write("<scr"+"ipt src='js/simple.slide.js' type='text\/javascript' charset='utf-8'></scr"+"ipt>");
document.write("<scr"+"ipt type='text\/javascript' charset='utf-8'>$('.One').simpleSlide();</scr"+"ipt>");
/*点击图片放大*/














