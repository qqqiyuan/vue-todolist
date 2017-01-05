! function(a, b) {
    function u() {
        var c, b = d.getBoundingClientRect().width;
        b / h > 540 && (b = 540 * h), c = b / 10, d.style.fontSize = c + "px", k.rem = a.rem = c
    }
    var j, l, m, n, o, q, r, s, t, c = a.document,
        d = c.documentElement,
        e = c.querySelector('meta[name="viewport"]'),
        f = c.querySelector('meta[name="viewport"]'),
        g = c.querySelector('meta[name="flexible"]'),
        h = 0,
        i = 0,
        k = b.flexible || (b.flexible = {});
    e ? (l = e.getAttribute("content").match(/initial\-scale=([\d\.]+)/), l && (i = parseFloat(l[1]), h = parseInt(1 / i))) : g && (m = g.getAttribute("content"), m && (n = m.match(/initial\-dpr=([\d\.]+)/), o = m.match(/maximum\-dpr=([\d\.]+)/), n && (h = parseFloat(n[1]), i = parseFloat((1 / h).toFixed(2))), o && (h = parseFloat(o[1]), i = parseFloat((1 / h).toFixed(2))))), h || i || (a.navigator.appVersion.match(/android/gi), q = a.navigator.appVersion.match(/iphone/gi), r = a.navigator.userAgent.match(/OS 9_3/), s = a.devicePixelRatio, q ? (h = s >= 3 && (!h || h >= 3) ? 3 : s >= 2 && (!h || h >= 2) ? 2 : 1, r && (h = 1)) : h = 1, i = 1 / h), e ? d.setAttribute("data-dpr", 1) : d.setAttribute("data-dpr", h), e || (e = c.createElement("meta"), e.setAttribute("name", "viewport"), e.setAttribute("content", "initial-scale=" + i + ", maximum-scale=" + i + ", minimum-scale=" + i + ", user-scalable=no"), d.firstElementChild ? d.firstElementChild.appendChild(e) : (t = c.createElement("div"), t.appendChild(e), c.write(t.innerHTML))), a.addEventListener("resize", function() {
        clearTimeout(j), j = setTimeout(u, 300)
    }, !1), a.addEventListener("pageshow", function(a) {
        a.persisted && (clearTimeout(j), j = setTimeout(u, 300))
    }, !1), "complete" === c.readyState ? c.body.style.fontSize = ( !! f == !1 ? 12 * h : 16) + "px" : c.addEventListener("DOMContentLoaded", function() {
        c.body.style.fontSize = ( !! f == !1 ? 12 * h : 16) + "px"
    }, !1), u(), k.dpr = a.dpr = h, k.refreshRem = u, k.rem2px = function(a) {
        var b = parseFloat(a) * this.rem;
        return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
    }, k.px2rem = function(a) {
        var b = parseFloat(a) / this.rem;
        return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
    }
}(window, window["lib"] || (window["lib"] = {})); 