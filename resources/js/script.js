var scrollPosition;
var layer05_dark, layer07_dark, title_dark, subtitle, teaser_date;
var isios = false;
var isipad = false;
var isMobile = false;

/// Called when document has been loaded
$(document).ready(function() {

    $(document.location.hash).click();

    isios = ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1));
    isipad = ((navigator.platform.indexOf("iPad") != -1));

    // Set up viewport meta for iOS
    if (isipad)
        $("head").prepend('<meta name="viewport" content="width=device-width">');
    else if (isios)
        $("head").prepend('<meta name="viewport" content="width=device-width">');

    // if no css content
    if (!Modernizr.generatedcontent) {
        $("#title h1").append("<div class='after'></div>");
    }

    // add dark overlays
    $("#layer05").append("<div class='dark_overlay'></div>");
    $("#layer07").append("<div class='dark_overlay'></div>");
    $("#title h1").append("<div class='dark_overlay'></div>");
    $("#flag1 .fallback").append("<div class='dark_overlay'></div>");
    $("#flag2 .fallback").append("<div class='dark_overlay'></div>");
    $("#background").append("<div class='twinkle_mask'></div>");

    // cache elements
    layer05_dark = $("#layer05 .dark_overlay");
    layer07_dark = $("#layer07 .dark_overlay");
    title_dark = $("#title h1 .dark_overlay");
    subtitle = $("#title h2");
    teaser_date = $("#teaser_date");

    // hide dark overlay elements
    layer05_dark.css("opacity", 0);
    layer07_dark.css("opacity", 0);
    title_dark.css("opacity", 0);

    // set up parallax
    var platform = navigator.platform.toLowerCase();
    var userAgent = navigator.userAgent.toLowerCase();

    isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
        isMobile = true;

    if (isMobile || !Modernizr.csstransforms3d) {
        // do nothing
    } else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1) {
        $(window).scroll(onScroll);
        // if ($.browser.webkit)
        // 	$.srSmoothscroll({
        // 		step: 80,
        // 		speed: 300,
        // 		ease: 'linear'
        // 	});
        onScroll();
        $("#artwork").addClass("parallax_enabled");
        $(".parallax").show();
        $("#layer09").css("position", "absolute").attr("data-scale", 0);
    } else {
        $(window).scroll(onScroll);
        onScroll()
        $("#artwork").addClass("parallax_enabled");
        $(".parallax").show();
    }

    if (!isMobile) {
        $('#video_thumb').click(function() {
            $('#video_thumb').replaceWith('<iframe id="video" width="960" height="540" src="https://www.youtube.com/embed/PaZsrAi6iJg?autoplay=1&vq=hd1080p60" frameborder="0" allowfullscreen></iframe>');
            return false;
        });
    } else {
        $('#video_thumb').addClass("mobile");
    }

    // FLAGS
    var flag = document.getElementById('flag1');
    drawFlag(flag, 50, 20, 20);
    var timer = waveFlag(flag, 12, 7, 400, 0, 0);

    var flag2 = document.getElementById('flag2');
    drawFlag2(flag2, 50, 20, 20);
    var timer = waveFlag(flag2, 12, 7, 400, 0, 0);

    var flag3 = document.getElementById('flag3');
    drawFlag3(flag3, 30, 20, 20);
    var timer = waveFlag(flag3, 12, 7, 400, 0, 0);

});

function drawFlag(canvas, width, padX, padY) {

    if (!padX) padX = 0;
    if (!padY) padY = 0;

    var a = width / 1.9;
    var b = width;
    canvas.width = b + 2 * padX;
    canvas.height = a + 2 * padY;
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "#a44d72";
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(90, 20);
    ctx.lineTo(0, 26);
    ctx.lineTo(0, 34);
    ctx.lineTo(60, 42);
    ctx.lineTo(0, 50);
    ctx.fill();
}

///
function drawFlag2(canvas, width, padX, padY) {

    if (!padX) padX = 0;
    if (!padY) padY = 0;

    var a = width / 1.9;
    var b = width;
    canvas.width = b + 2 * padX;
    canvas.height = a + 2 * padY;
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "#a44d72";
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(60, 30);
    ctx.lineTo(0, 36);
    ctx.fill();

}

///
function drawFlag3(canvas, width, padX, padY) {

    if (!padX) padX = 0;
    if (!padY) padY = 0;

    var a = width / 1.9;
    var b = width;
    canvas.width = b + 2 * padX;
    canvas.height = a + 2 * padY;
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "#614678";
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(40, 30);
    ctx.lineTo(0, 32);
    ctx.fill();

}

///
function waveFlag(canvas, wavelength, amplitude, period, shading, squeeze) {

    if (!squeeze) squeeze = 0;
    if (!shading) shading = 0;
    if (!period) period = 200;
    if (!amplitude) amplitude = 10;
    if (!wavelength) wavelength = canvas.width / 10;

    var fps = 30;
    var ctx = canvas.getContext('2d');
    var w = canvas.width,
        h = canvas.height;
    var od = ctx.getImageData(0, 0, w, h).data;

    return setInterval(function() {
        var id = ctx.getImageData(0, 0, w, h);
        var d = id.data;
        var now = (new Date) / period;
        var colourR = canvas.getAttribute("data-r") * 1;
        var colourG = canvas.getAttribute("data-g") * 1;
        var colourB = canvas.getAttribute("data-b") * 1;
        for (var y = 0; y < h; ++y) {
            var lastO = 0,
                shade = 0;
            var sq = (y - h / 2) * squeeze;
            for (var x = 0; x < w; ++x) {
                var px = (y * w + x) * 4;
                var pct = x / w;
                var o = Math.sin(x / wavelength - now) * amplitude * pct;
                var y2 = y + (o + sq * pct) << 0;
                var opx = (y2 * w + x) * 4;
                shade = (o - lastO) * shading;
                d[px] = colourR;
                d[px + 1] = colourG;
                d[px + 2] = colourB;
                d[px + 3] = od[opx + 3];
                lastO = o;
            }
        }
        ctx.putImageData(id, 0, 0);
    }, 1000 / fps);

}

///
function onScroll() {

    if (!isios) {

        scrollPosition = window.pageYOffset;
        scrollPageCenter = window.pageYOffset + $(window).height() / 2

        // parallax layers
        var layers = $(".parallax");
        var speed, yOffset;
        for (var i = 0; i < layers.length; i++) {
            speed = layers[i].getAttribute('data-scale');
            var yOffset = -(scrollPosition * speed / 100);
            layers[i].style.transform = "translate3d(0, " + yOffset + "px, 0)";
        }

        // fade in / out
        var fadeStart = 100;
        var fadeEnd = 400;
        var fadeScale = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);

        layer05_dark.css("opacity", fadeScale);
        layer07_dark.css("opacity", fadeScale);
        title_dark.css("opacity", fadeScale + 0.3);
        $("#flag1 .fallback .dark_overlay").css("opacity", fadeScale);
        $("#flag2 .fallback .dark_overlay").css("opacity", fadeScale);

        var startColor = {
            r: 164,
            g: 77,
            b: 114
        };
        var endColor = {
            r: 39,
            g: 22,
            b: 56
        };
        var newColor = {
            r: 0,
            g: 0,
            b: 0
        };

        var scaleClamped = Math.max(0, Math.min(1, fadeScale));

        newColor.r = Math.round(lerp(startColor.r, endColor.r, scaleClamped));
        newColor.g = Math.round(lerp(startColor.g, endColor.g, scaleClamped));
        newColor.b = Math.round(lerp(startColor.b, endColor.b, scaleClamped));
        $("#flag1").attr("data-r", newColor.r).attr("data-g", newColor.g).attr("data-b", newColor.b);

        startColor = {
            r: 124,
            g: 66,
            b: 109
        };

        newColor.r = Math.round(lerp(startColor.r, endColor.r, scaleClamped));
        newColor.g = Math.round(lerp(startColor.g, endColor.g, scaleClamped));
        newColor.b = Math.round(lerp(startColor.b, endColor.b, scaleClamped));
        $("#flag2").attr("data-r", newColor.r).attr("data-g", newColor.g).attr("data-b", newColor.b);

        fadeStart = 200;
        fadeEnd = 400;
        fadeScale = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);

        subtitle.css("opacity", 1 - fadeScale);

        fadeStart = 700;
        fadeEnd = 1000;
        fadeScale = (scrollPageCenter - fadeStart) / (fadeEnd - fadeStart);

        teaser_date.css("opacity", fadeScale);

    }

}

function lerp(a, b, u) {
    return (1 - u) * a + u * b;
};

/// Called when page content / images finished loading
$(window).load(function() {

    // begin blinking
    BlinkClose();

});

/// Close llama eye, set timer to open
function BlinkClose() {

    $("#title h1").addClass("blink");
    setTimeout('blinkOpen()', 100);

}

/// open llama eye, set timer to close
function blinkOpen() {

    $("#title h1").removeClass("blink");
    setTimeout('BlinkClose()', randomXToY(1000, 4000));

}

/// returns random value between min and max
function randomXToY(minVal, maxVal, floatVal) {

    var randVal = minVal + (Math.random() * (maxVal - minVal));
    return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);

}

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-generatedcontent-setclasses !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function s() {
        var e, n, t, s, o, i, a;
        for (var f in C)
            if (C.hasOwnProperty(f)) {
                if (e = [], n = C[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-"))
            }
    }

    function o(e) {
        var n = S.className,
            t = Modernizr._config.classPrefix || "";
        if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? S.className.baseVal = n : S.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a() {
        var e = n.body;
        return e || (e = i(x ? "svg" : "body"), e.fake = !0), e
    }

    function f(e, t, r, s) {
        var o, f, l, u, d = "modernizr",
            p = i("div"),
            c = a();
        if (parseInt(r, 10))
            for (; r--;) l = i("div"), l.id = s ? s[r] : d + (r + 1), p.appendChild(l);
        return o = i("style"), o.type = "text/css", o.id = "s" + d, (c.fake ? c : p).appendChild(o), c.appendChild(p), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), p.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(c)), f = t(p, e), c.fake ? (c.parentNode.removeChild(c), S.style.overflow = u, S.offsetHeight) : p.parentNode.removeChild(p), !!f
    }

    function l(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function p(e, n, t) {
        var s;
        for (var o in e)
            if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? d(s, t || n) : s);
        return !1
    }

    function c(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(n, r) {
        var s = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; s--;)
                if (e.CSS.supports(c(n[s]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; s--;) o.push("(" + c(n[s]) + ":" + r + ")");
            return o = o.join(" or "), f("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function h(e, n, s, o) {
        function a() {
            d && (delete k.style, delete k.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
            var f = m(e, s);
            if (!r(f, "undefined")) return f
        }
        for (var d, p, c, h, v, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) d = !0, k.modElem = i(g.shift()), k.style = k.modElem.style;
        for (c = e.length, p = 0; c > p; p++)
            if (h = e[p], v = k.style[h], l(h, "-") && (h = u(h)), k.style[h] !== t) {
                if (o || r(s, "undefined")) return a(), "pfx" == n ? h : !0;
                try {
                    k.style[h] = s
                } catch (y) {}
                if (k.style[h] != v) return a(), "pfx" == n ? h : !0
            }
        return a(), !1
    }

    function v(e, n, t, s, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + E.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? h(a, n, s, o) : (a = (e + " " + T.join(i + " ") + i).split(" "), p(a, n, t))
    }

    function g(e, n, r) {
        return v(e, t, t, n, r)
    }
    var y = [],
        C = [],
        w = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                C.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = w, Modernizr = new Modernizr;
    var S = n.documentElement,
        x = "svg" === S.nodeName.toLowerCase(),
        _ = "CSS" in e && "supports" in e.CSS,
        b = "supportsCSS" in e;
    Modernizr.addTest("supports", _ || b);
    var z = w.testStyles = f,
        P = "Moz O ms Webkit",
        E = w._config.usePrefixes ? P.split(" ") : [];
    w._cssomPrefixes = E;
    var T = w._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    w._domPrefixes = T;
    var N = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete N.elem
    });
    var k = {
        style: N.elem.style
    };
    Modernizr._q.unshift(function() {
        delete k.style
    }), w.testAllProps = v, w.testAllProps = g, Modernizr.addTest("csstransforms3d", function() {
        var e = !!g("perspective", "1px", !0),
            n = Modernizr._config.usePrefixes;
        if (e && (!n || "webkitPerspective" in S.style)) {
            var t, r = "#modernizr{width:0;height:0}";
            Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", n && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", z(r + t, function(n) {
                e = 7 === n.offsetWidth && 18 === n.offsetHeight
            })
        }
        return e
    }), z('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    }), s(), o(y), delete w.addTest, delete w.addAsyncTest;
    for (var j = 0; j < Modernizr._q.length; j++) Modernizr._q[j]();
    e.Modernizr = Modernizr
}(window, document);