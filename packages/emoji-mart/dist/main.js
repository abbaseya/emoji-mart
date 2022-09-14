function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Picker", function () { return $7be3f6ba01507d21$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Emoji", function () { return $9c6cf3620cfad306$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "SearchIndex", function () { return $8f9034744078e207$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "FrequentlyUsed", function () { return $26c4208b83093c27$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "init", function () { return $b79b4feb8fc394aa$export$2cd8252107eb640b; });
$parcel$export(module.exports, "Data", function () { return $b79b4feb8fc394aa$export$2d0294657ab35f1b; });
$parcel$export(module.exports, "I18n", function () { return $b79b4feb8fc394aa$export$dbe3113d60765c1a; });
function $1459522e281add88$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}



var $d5fc6ac583bc94a1$var$n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, $d5fc6ac583bc94a1$var$u, $d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$var$t, $d5fc6ac583bc94a1$var$r, $d5fc6ac583bc94a1$var$o, $d5fc6ac583bc94a1$var$f, $d5fc6ac583bc94a1$var$e = {
}, $d5fc6ac583bc94a1$var$c = [], $d5fc6ac583bc94a1$var$s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $d5fc6ac583bc94a1$var$a(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    for(var u in $d5fc6ac583bc94a1$export$41c562ebe57d11e2)n[u] = $d5fc6ac583bc94a1$export$41c562ebe57d11e2[u];
    return n;
}
function $d5fc6ac583bc94a1$var$h(n) {
    var $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = n.parentNode;
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.removeChild(n);
}
function $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    var t, r, o, f = {
    };
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? $d5fc6ac583bc94a1$var$n.call(arguments, 2) : $d5fc6ac583bc94a1$export$a8257692ac88316c), "function" == typeof $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && null != $d5fc6ac583bc94a1$export$41c562ebe57d11e2.defaultProps) for(o in $d5fc6ac583bc94a1$export$41c562ebe57d11e2.defaultProps)void 0 === f[o] && (f[o] = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.defaultProps[o]);
    return $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$41c562ebe57d11e2, f, t, r, null);
}
function $d5fc6ac583bc94a1$var$y(n, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o) {
    var f = {
        type: n,
        props: $d5fc6ac583bc94a1$export$a8257692ac88316c,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++$d5fc6ac583bc94a1$var$u : o
    };
    return null == o && null != $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode(f), f;
}
function $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $d5fc6ac583bc94a1$export$ffb0004e005737fa(n) {
    return n.children;
}
function $d5fc6ac583bc94a1$export$16fa2f45be04daa8(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    this.props = n, this.context = $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$var$k(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    if (null == $d5fc6ac583bc94a1$export$41c562ebe57d11e2) return n.__ ? $d5fc6ac583bc94a1$var$k(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; $d5fc6ac583bc94a1$export$41c562ebe57d11e2 < n.__k.length; $d5fc6ac583bc94a1$export$41c562ebe57d11e2++)if (null != (u = n.__k[$d5fc6ac583bc94a1$export$41c562ebe57d11e2]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? $d5fc6ac583bc94a1$var$k(n) : null;
}
function $d5fc6ac583bc94a1$var$b(n) {
    var $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = 0; $d5fc6ac583bc94a1$export$41c562ebe57d11e2 < n.__k.length; $d5fc6ac583bc94a1$export$41c562ebe57d11e2++)if (null != (u = n.__k[$d5fc6ac583bc94a1$export$41c562ebe57d11e2]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return $d5fc6ac583bc94a1$var$b(n);
    }
}
function $d5fc6ac583bc94a1$var$m(n) {
    (!n.__d && (n.__d = !0) && $d5fc6ac583bc94a1$var$t.push(n) && !$d5fc6ac583bc94a1$var$g.__r++ || $d5fc6ac583bc94a1$var$o !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.debounceRendering) && (($d5fc6ac583bc94a1$var$o = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.debounceRendering) || $d5fc6ac583bc94a1$var$r)($d5fc6ac583bc94a1$var$g);
}
function $d5fc6ac583bc94a1$var$g() {
    for(var n1; $d5fc6ac583bc94a1$var$g.__r = $d5fc6ac583bc94a1$var$t.length;)n1 = $d5fc6ac583bc94a1$var$t.sort(function(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        return n.__v.__b - $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__v.__b;
    }), $d5fc6ac583bc94a1$var$t = [], n1.some(function(n) {
        var $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o;
        n.__d && (r = (t = ($d5fc6ac583bc94a1$export$41c562ebe57d11e2 = n).__v).__e, (o = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__P) && (u = [], ($d5fc6ac583bc94a1$export$a8257692ac88316c = $d5fc6ac583bc94a1$var$a({
        }, t)).__v = t.__v + 1, $d5fc6ac583bc94a1$var$j(o, t, $d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [
            r
        ] : null, u, null == r ? $d5fc6ac583bc94a1$var$k(t) : r, t.__h), $d5fc6ac583bc94a1$var$z(u, t), t.__e != r && $d5fc6ac583bc94a1$var$b(t)));
    });
}
function $d5fc6ac583bc94a1$var$w(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, s, a) {
    var h, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, b, m, g, w = $d5fc6ac583bc94a1$export$a8257692ac88316c && $d5fc6ac583bc94a1$export$a8257692ac88316c.__k || $d5fc6ac583bc94a1$var$c, $d5fc6ac583bc94a1$export$47e4c5b300681277 = w.length;
    for(u.__k = [], h = 0; h < $d5fc6ac583bc94a1$export$41c562ebe57d11e2.length; h++)if (null != ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = u.__k[h] = null == ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2[h]) || "boolean" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 ? null : "string" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 || "number" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 || "bigint" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 ? $d5fc6ac583bc94a1$var$y(null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, null, null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8) : Array.isArray($d5fc6ac583bc94a1$export$16fa2f45be04daa8) ? $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$ffb0004e005737fa, {
        children: $d5fc6ac583bc94a1$export$16fa2f45be04daa8
    }, null, null, null) : $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__b > 0 ? $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$16fa2f45be04daa8.type, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.props, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.key, null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__v) : $d5fc6ac583bc94a1$export$16fa2f45be04daa8)) {
        if ($d5fc6ac583bc94a1$export$16fa2f45be04daa8.__ = u, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__b = u.__b + 1, null === ($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = w[h]) || $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.key == $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.key && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.type === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.type) w[h] = void 0;
        else for($d5fc6ac583bc94a1$export$c8a8987d4410bf2d = 0; $d5fc6ac583bc94a1$export$c8a8987d4410bf2d < $d5fc6ac583bc94a1$export$47e4c5b300681277; $d5fc6ac583bc94a1$export$c8a8987d4410bf2d++){
            if (($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = w[$d5fc6ac583bc94a1$export$c8a8987d4410bf2d]) && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.key == $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.key && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.type === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.type) {
                w[$d5fc6ac583bc94a1$export$c8a8987d4410bf2d] = void 0;
                break;
            }
            $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = null;
        }
        $d5fc6ac583bc94a1$var$j(n, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 || $d5fc6ac583bc94a1$var$e, t, r, o, f, s, a), b = $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__e, ($d5fc6ac583bc94a1$export$c8a8987d4410bf2d = $d5fc6ac583bc94a1$export$16fa2f45be04daa8.ref) && $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.ref != $d5fc6ac583bc94a1$export$c8a8987d4410bf2d && (g || (g = []), $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.ref && g.push($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.ref, null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8), g.push($d5fc6ac583bc94a1$export$c8a8987d4410bf2d, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__c || b, $d5fc6ac583bc94a1$export$16fa2f45be04daa8)), null != b ? (null == m && (m = b), "function" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8.type && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__k === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.__k ? $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__d = s = $d5fc6ac583bc94a1$var$x($d5fc6ac583bc94a1$export$16fa2f45be04daa8, s, n) : s = $d5fc6ac583bc94a1$var$P(n, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.__e == s && s.parentNode != n && (s = $d5fc6ac583bc94a1$var$k($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43));
    }
    for(u.__e = m, h = $d5fc6ac583bc94a1$export$47e4c5b300681277; h--;)null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = $d5fc6ac583bc94a1$var$k($d5fc6ac583bc94a1$export$a8257692ac88316c, h + 1)), $d5fc6ac583bc94a1$var$N(w[h], w[h]));
    if (g) for(h = 0; h < g.length; h++)$d5fc6ac583bc94a1$var$M(g[h], g[++h], g[++h]);
}
function $d5fc6ac583bc94a1$var$x(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) {
    for(var $d5fc6ac583bc94a1$export$a8257692ac88316c, t = n.__k, r = 0; t && r < t.length; r++)($d5fc6ac583bc94a1$export$a8257692ac88316c = t[r]) && ($d5fc6ac583bc94a1$export$a8257692ac88316c.__ = n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = "function" == typeof $d5fc6ac583bc94a1$export$a8257692ac88316c.type ? $d5fc6ac583bc94a1$var$x($d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) : $d5fc6ac583bc94a1$var$P(u, $d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, $d5fc6ac583bc94a1$export$a8257692ac88316c.__e, $d5fc6ac583bc94a1$export$41c562ebe57d11e2));
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$export$47e4c5b300681277(n2, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n) {
        $d5fc6ac583bc94a1$export$47e4c5b300681277(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2);
    }) : $d5fc6ac583bc94a1$export$41c562ebe57d11e2.push(n2)), $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$var$P(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r) {
    var o, f, e;
    if (void 0 !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__d) o = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__d, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__d = void 0;
    else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;
    else {
        for(f = r, e = 0; (f = f.nextSibling) && e < $d5fc6ac583bc94a1$export$a8257692ac88316c.length; e += 2)if (f == t) break n;
        n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
}
function $d5fc6ac583bc94a1$var$C(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t) {
    var r;
    for(r in u)"children" === r || "key" === r || r in $d5fc6ac583bc94a1$export$41c562ebe57d11e2 || $d5fc6ac583bc94a1$var$H(n, r, null, u[r], $d5fc6ac583bc94a1$export$a8257692ac88316c);
    for(r in $d5fc6ac583bc94a1$export$41c562ebe57d11e2)t && "function" != typeof $d5fc6ac583bc94a1$export$41c562ebe57d11e2[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[r] || $d5fc6ac583bc94a1$var$H(n, r, $d5fc6ac583bc94a1$export$41c562ebe57d11e2[r], u[r], $d5fc6ac583bc94a1$export$a8257692ac88316c);
}
function $d5fc6ac583bc94a1$var$$(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) {
    "-" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[0] ? n.setProperty($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) : n[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] = null == u ? "" : "number" != typeof u || $d5fc6ac583bc94a1$var$s.test($d5fc6ac583bc94a1$export$41c562ebe57d11e2) ? u : u + "px";
}
function $d5fc6ac583bc94a1$var$H(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t) {
    var r;
    n: if ("style" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof $d5fc6ac583bc94a1$export$a8257692ac88316c && (n.style.cssText = $d5fc6ac583bc94a1$export$a8257692ac88316c = ""), $d5fc6ac583bc94a1$export$a8257692ac88316c) for($d5fc6ac583bc94a1$export$41c562ebe57d11e2 in $d5fc6ac583bc94a1$export$a8257692ac88316c)u && $d5fc6ac583bc94a1$export$41c562ebe57d11e2 in u || $d5fc6ac583bc94a1$var$$(n.style, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, "");
            if (u) for($d5fc6ac583bc94a1$export$41c562ebe57d11e2 in u)$d5fc6ac583bc94a1$export$a8257692ac88316c && u[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] === $d5fc6ac583bc94a1$export$a8257692ac88316c[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] || $d5fc6ac583bc94a1$var$$(n.style, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u[$d5fc6ac583bc94a1$export$41c562ebe57d11e2]);
        }
    } else if ("o" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[0] && "n" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[1]) r = $d5fc6ac583bc94a1$export$41c562ebe57d11e2 !== ($d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.replace(/Capture$/, "")), $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.toLowerCase() in n ? $d5fc6ac583bc94a1$export$41c562ebe57d11e2.toLowerCase().slice(2) : $d5fc6ac583bc94a1$export$41c562ebe57d11e2.slice(2), n.l || (n.l = {
    }), n.l[$d5fc6ac583bc94a1$export$41c562ebe57d11e2 + r] = u, u ? $d5fc6ac583bc94a1$export$a8257692ac88316c || n.addEventListener($d5fc6ac583bc94a1$export$41c562ebe57d11e2, r ? $d5fc6ac583bc94a1$var$T : $d5fc6ac583bc94a1$var$I, r) : n.removeEventListener($d5fc6ac583bc94a1$export$41c562ebe57d11e2, r ? $d5fc6ac583bc94a1$var$T : $d5fc6ac583bc94a1$var$I, r);
    else if ("dangerouslySetInnerHTML" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        if (t) $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "list" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "form" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "tabIndex" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "download" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && $d5fc6ac583bc94a1$export$41c562ebe57d11e2 in n) try {
            n[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] = null == u ? "" : u;
            break n;
        } catch (n3) {
        }
        "function" == typeof u || (null != u && (!1 !== u || "a" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[0] && "r" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[1]) ? n.setAttribute($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) : n.removeAttribute($d5fc6ac583bc94a1$export$41c562ebe57d11e2));
    }
}
function $d5fc6ac583bc94a1$var$I(n) {
    this.l[n.type + !1]($d5fc6ac583bc94a1$export$41c562ebe57d11e2.event ? $d5fc6ac583bc94a1$export$41c562ebe57d11e2.event(n) : n);
}
function $d5fc6ac583bc94a1$var$T(n) {
    this.l[n.type + !0]($d5fc6ac583bc94a1$export$41c562ebe57d11e2.event ? $d5fc6ac583bc94a1$export$41c562ebe57d11e2.event(n) : n);
}
function $d5fc6ac583bc94a1$var$j(n4, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, e, c) {
    var s, h, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d, y, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, k, b, m, g, x, $d5fc6ac583bc94a1$export$47e4c5b300681277, P = u.type;
    if (void 0 !== u.constructor) return null;
    null != $d5fc6ac583bc94a1$export$a8257692ac88316c.__h && (c = $d5fc6ac583bc94a1$export$a8257692ac88316c.__h, e = u.__e = $d5fc6ac583bc94a1$export$a8257692ac88316c.__e, u.__h = null, o = [
        e
    ]), (s = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b) && s(u);
    try {
        n: if ("function" == typeof P) {
            if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, $d5fc6ac583bc94a1$export$a8257692ac88316c.__c ? b = (h = u.__c = $d5fc6ac583bc94a1$export$a8257692ac88316c.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8(m, x), h.constructor = P, h.render = $d5fc6ac583bc94a1$var$O), g && g.sub(h), h.props = m, h.state || (h.state = {
            }), h.context = x, h.__n = t, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $d5fc6ac583bc94a1$var$a({
            }, h.__s)), $d5fc6ac583bc94a1$var$a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = h.state, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === $d5fc6ac583bc94a1$export$a8257692ac88316c.__v) {
                    h.props = m, h.state = h.__s, u.__v !== $d5fc6ac583bc94a1$export$a8257692ac88316c.__v && (h.__d = !1), h.__v = u, u.__e = $d5fc6ac583bc94a1$export$a8257692ac88316c.__e, u.__k = $d5fc6ac583bc94a1$export$a8257692ac88316c.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), h.__h.length && f.push(h);
                    break n;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function() {
                    h.componentDidUpdate(y, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, k);
                });
            }
            h.context = x, h.props = m, h.state = h.__s, (s = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n4, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = $d5fc6ac583bc94a1$var$a($d5fc6ac583bc94a1$var$a({
            }, t), h.getChildContext())), $d5fc6ac583bc94a1$export$c8a8987d4410bf2d || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43)), $d5fc6ac583bc94a1$export$47e4c5b300681277 = null != s && s.type === $d5fc6ac583bc94a1$export$ffb0004e005737fa && null == s.key ? s.props.children : s, $d5fc6ac583bc94a1$var$w(n4, Array.isArray($d5fc6ac583bc94a1$export$47e4c5b300681277) ? $d5fc6ac583bc94a1$export$47e4c5b300681277 : [
                $d5fc6ac583bc94a1$export$47e4c5b300681277
            ], u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == o && u.__v === $d5fc6ac583bc94a1$export$a8257692ac88316c.__v ? (u.__k = $d5fc6ac583bc94a1$export$a8257692ac88316c.__k, u.__e = $d5fc6ac583bc94a1$export$a8257692ac88316c.__e) : u.__e = $d5fc6ac583bc94a1$var$L($d5fc6ac583bc94a1$export$a8257692ac88316c.__e, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, c);
        (s = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.diffed) && s(u);
    } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n, u, $d5fc6ac583bc94a1$export$a8257692ac88316c);
    }
}
function $d5fc6ac583bc94a1$var$z(n5, u1) {
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c(u1, n5), n5.some(function(u) {
        try {
            n5 = u.__h, u.__h = [], n5.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}
function $d5fc6ac583bc94a1$var$L($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, c) {
    var s, a, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d, y = $d5fc6ac583bc94a1$export$a8257692ac88316c.props, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = u.props, $d5fc6ac583bc94a1$export$ffb0004e005737fa = u.type, $d5fc6ac583bc94a1$export$16fa2f45be04daa8 = 0;
    if ("svg" === $d5fc6ac583bc94a1$export$ffb0004e005737fa && (r = !0), null != o) {
        for(; $d5fc6ac583bc94a1$export$16fa2f45be04daa8 < o.length; $d5fc6ac583bc94a1$export$16fa2f45be04daa8++)if ((s = o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8]) && "setAttribute" in s == !!$d5fc6ac583bc94a1$export$ffb0004e005737fa && ($d5fc6ac583bc94a1$export$ffb0004e005737fa ? s.localName === $d5fc6ac583bc94a1$export$ffb0004e005737fa : 3 === s.nodeType)) {
            $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = s, o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8] = null;
            break;
        }
    }
    if (null == $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        if (null === $d5fc6ac583bc94a1$export$ffb0004e005737fa) return document.createTextNode($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43);
        $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = r ? document.createElementNS("http://www.w3.org/2000/svg", $d5fc6ac583bc94a1$export$ffb0004e005737fa) : document.createElement($d5fc6ac583bc94a1$export$ffb0004e005737fa, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.is && $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43), o = null, c = !1;
    }
    if (null === $d5fc6ac583bc94a1$export$ffb0004e005737fa) y === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 || c && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.data === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 || ($d5fc6ac583bc94a1$export$41c562ebe57d11e2.data = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43);
    else {
        if (o = o && $d5fc6ac583bc94a1$var$n.call($d5fc6ac583bc94a1$export$41c562ebe57d11e2.childNodes), a = (y = $d5fc6ac583bc94a1$export$a8257692ac88316c.props || $d5fc6ac583bc94a1$var$e).dangerouslySetInnerHTML, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.dangerouslySetInnerHTML, !c) {
            if (null != o) for(y = {
            }, $d5fc6ac583bc94a1$export$16fa2f45be04daa8 = 0; $d5fc6ac583bc94a1$export$16fa2f45be04daa8 < $d5fc6ac583bc94a1$export$41c562ebe57d11e2.attributes.length; $d5fc6ac583bc94a1$export$16fa2f45be04daa8++)y[$d5fc6ac583bc94a1$export$41c562ebe57d11e2.attributes[$d5fc6ac583bc94a1$export$16fa2f45be04daa8].name] = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.attributes[$d5fc6ac583bc94a1$export$16fa2f45be04daa8].value;
            ($d5fc6ac583bc94a1$export$c8a8987d4410bf2d || a) && ($d5fc6ac583bc94a1$export$c8a8987d4410bf2d && (a && $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.__html == a.__html || $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.__html === $d5fc6ac583bc94a1$export$41c562ebe57d11e2.innerHTML) || ($d5fc6ac583bc94a1$export$41c562ebe57d11e2.innerHTML = $d5fc6ac583bc94a1$export$c8a8987d4410bf2d && $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.__html || ""));
        }
        if ($d5fc6ac583bc94a1$var$C($d5fc6ac583bc94a1$export$41c562ebe57d11e2, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, y, r, c), $d5fc6ac583bc94a1$export$c8a8987d4410bf2d) u.__k = [];
        else if ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = u.props.children, $d5fc6ac583bc94a1$var$w($d5fc6ac583bc94a1$export$41c562ebe57d11e2, Array.isArray($d5fc6ac583bc94a1$export$16fa2f45be04daa8) ? $d5fc6ac583bc94a1$export$16fa2f45be04daa8 : [
            $d5fc6ac583bc94a1$export$16fa2f45be04daa8
        ], u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r && "foreignObject" !== $d5fc6ac583bc94a1$export$ffb0004e005737fa, o, f, o ? o[0] : $d5fc6ac583bc94a1$export$a8257692ac88316c.__k && $d5fc6ac583bc94a1$var$k($d5fc6ac583bc94a1$export$a8257692ac88316c, 0), c), null != o) for($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = o.length; $d5fc6ac583bc94a1$export$16fa2f45be04daa8--;)null != o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8] && $d5fc6ac583bc94a1$var$h(o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8]);
        c || ("value" in $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 && void 0 !== ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.value) && ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 !== y.value || $d5fc6ac583bc94a1$export$16fa2f45be04daa8 !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.value || "progress" === $d5fc6ac583bc94a1$export$ffb0004e005737fa && !$d5fc6ac583bc94a1$export$16fa2f45be04daa8) && $d5fc6ac583bc94a1$var$H($d5fc6ac583bc94a1$export$41c562ebe57d11e2, "value", $d5fc6ac583bc94a1$export$16fa2f45be04daa8, y.value, !1), "checked" in $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 && void 0 !== ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.checked) && $d5fc6ac583bc94a1$export$16fa2f45be04daa8 !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.checked && $d5fc6ac583bc94a1$var$H($d5fc6ac583bc94a1$export$41c562ebe57d11e2, "checked", $d5fc6ac583bc94a1$export$16fa2f45be04daa8, y.checked, !1));
    }
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$var$M(n, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n6) {
        $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n6, $d5fc6ac583bc94a1$export$a8257692ac88316c);
    }
}
function $d5fc6ac583bc94a1$var$N(n, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    var t, r;
    if ($d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || $d5fc6ac583bc94a1$var$M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n, u);
        }
        t.base = t.__P = null;
    }
    if (t = n.__k) for(r = 0; r < t.length; r++)t[r] && $d5fc6ac583bc94a1$var$N(t[r], u, "function" != typeof n.type);
    $d5fc6ac583bc94a1$export$a8257692ac88316c || null == n.__e || $d5fc6ac583bc94a1$var$h(n.__e), n.__e = n.__d = void 0;
}
function $d5fc6ac583bc94a1$var$O(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) {
    return this.constructor(n, u);
}
function $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t) {
    var r, o, f;
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__ && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__(u, $d5fc6ac583bc94a1$export$a8257692ac88316c), o = (r = "function" == typeof t) ? null : t && t.__k || $d5fc6ac583bc94a1$export$a8257692ac88316c.__k, f = [], $d5fc6ac583bc94a1$var$j($d5fc6ac583bc94a1$export$a8257692ac88316c, u = (!r && t || $d5fc6ac583bc94a1$export$a8257692ac88316c).__k = $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$ffb0004e005737fa, null, [
        u
    ]), o || $d5fc6ac583bc94a1$var$e, $d5fc6ac583bc94a1$var$e, void 0 !== $d5fc6ac583bc94a1$export$a8257692ac88316c.ownerSVGElement, !r && t ? [
        t
    ] : o ? null : $d5fc6ac583bc94a1$export$a8257692ac88316c.firstChild ? $d5fc6ac583bc94a1$var$n.call($d5fc6ac583bc94a1$export$a8257692ac88316c.childNodes) : null, f, !r && t ? t : o ? o.__e : $d5fc6ac583bc94a1$export$a8257692ac88316c.firstChild, r), $d5fc6ac583bc94a1$var$z(f, u);
}
function $d5fc6ac583bc94a1$export$fa8d919ba61d84db(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, $d5fc6ac583bc94a1$export$fa8d919ba61d84db);
}
function $d5fc6ac583bc94a1$export$e530037191fcd5d7($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    var t, r, o, f = $d5fc6ac583bc94a1$var$a({
    }, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.props);
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? $d5fc6ac583bc94a1$var$n.call(arguments, 2) : $d5fc6ac583bc94a1$export$a8257692ac88316c), $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$41c562ebe57d11e2.type, f, t || $d5fc6ac583bc94a1$export$41c562ebe57d11e2.key, r || $d5fc6ac583bc94a1$export$41c562ebe57d11e2.ref, null);
}
function $d5fc6ac583bc94a1$export$fd42f52fd3ae1109(n7, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    var u2 = {
        __c: $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = "__cC" + $d5fc6ac583bc94a1$var$f++,
        __: n7,
        Consumer: function(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
            return n.children($d5fc6ac583bc94a1$export$41c562ebe57d11e2);
        },
        Provider: function(n8) {
            var u, $d5fc6ac583bc94a1$export$a8257692ac88316c;
            return this.getChildContext || (u = [], ($d5fc6ac583bc94a1$export$a8257692ac88316c = {
            })[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] = this, this.getChildContext = function() {
                return $d5fc6ac583bc94a1$export$a8257692ac88316c;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some($d5fc6ac583bc94a1$var$m);
            }, this.sub = function(n) {
                u.push(n);
                var $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.call(n);
                };
            }), n8.children;
        }
    };
    return u2.Provider.__ = u2.Consumer.contextType = u2;
}
$d5fc6ac583bc94a1$var$n = $d5fc6ac583bc94a1$var$c.slice, $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = {
    __e: function(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        for(var u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t; $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__;)if ((u = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c) && !u.__) try {
            if (($d5fc6ac583bc94a1$export$a8257692ac88316c = u.constructor) && null != $d5fc6ac583bc94a1$export$a8257692ac88316c.getDerivedStateFromError && (u.setState($d5fc6ac583bc94a1$export$a8257692ac88316c.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
        } catch ($d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
            n = $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
        }
        throw n;
    }
}, $d5fc6ac583bc94a1$var$u = 0, $d5fc6ac583bc94a1$export$a8257692ac88316c = function(n) {
    return null != n && void 0 === n.constructor;
}, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.setState = function(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = $d5fc6ac583bc94a1$var$a({
    }, this.state), "function" == typeof n && (n = n($d5fc6ac583bc94a1$var$a({
    }, u), this.props)), n && $d5fc6ac583bc94a1$var$a(u, n), null != n && this.__v && ($d5fc6ac583bc94a1$export$41c562ebe57d11e2 && this.__h.push($d5fc6ac583bc94a1$export$41c562ebe57d11e2), $d5fc6ac583bc94a1$var$m(this));
}, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $d5fc6ac583bc94a1$var$m(this));
}, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.render = $d5fc6ac583bc94a1$export$ffb0004e005737fa, $d5fc6ac583bc94a1$var$t = [], $d5fc6ac583bc94a1$var$r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $d5fc6ac583bc94a1$var$g.__r = 0, $d5fc6ac583bc94a1$var$f = 0;



var $55ec52987511209e$var$o = 0;
function $55ec52987511209e$export$34b9dba7ce09269b(_, $55ec52987511209e$export$34b9dba7ce09269b, n, t, f) {
    var l, s, u = {
    };
    for(s in $55ec52987511209e$export$34b9dba7ce09269b)"ref" == s ? l = $55ec52987511209e$export$34b9dba7ce09269b[s] : u[s] = $55ec52987511209e$export$34b9dba7ce09269b[s];
    var a = {
        type: _,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --$55ec52987511209e$var$o,
        __source: t,
        __self: f
    };
    if ("function" == typeof _ && (l = _.defaultProps)) for(s in l)void 0 === u[s] && (u[s] = l[s]);
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode(a), a;
}



function $98790827c4982bdf$export$9cb4719e2e525b7a(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index)=>val == b[index]
    );
}
async function $98790827c4982bdf$export$e772c8ff12451969(frames = 1) {
    for(let _ in [
        ...Array(frames).keys()
    ])await new Promise(requestAnimationFrame);
}


var $128a97276525cf7f$exports = {};
$128a97276525cf7f$exports = JSON.parse("{\"search\":\"Search\",\"search_no_results_1\":\"Oh no!\",\"search_no_results_2\":\"That emoji couldn’t be found\",\"pick\":\"Pick an emoji…\",\"add_custom\":\"Add custom emoji\",\"categories\":{\"activity\":\"Activity\",\"custom\":\"Custom\",\"flags\":\"Flags\",\"foods\":\"Food & Drink\",\"frequent\":\"Frequently used\",\"nature\":\"Animals & Nature\",\"objects\":\"Objects\",\"people\":\"Smileys & People\",\"places\":\"Travel & Places\",\"search\":\"Search Results\",\"symbols\":\"Symbols\"},\"skins\":{\"1\":\"Default\",\"2\":\"Light\",\"3\":\"Medium-Light\",\"4\":\"Medium\",\"5\":\"Medium-Dark\",\"6\":\"Dark\",\"choose\":\"Choose default skin tone\"}}");


var $6191713a0c89d01b$export$2e2bcd8739ae039 = {
    autoFocus: {
        value: false
    },
    emojiButtonColors: {
        value: null
    },
    emojiButtonRadius: {
        value: '100%'
    },
    emojiButtonSize: {
        value: 36
    },
    emojiSize: {
        value: 24
    },
    emojiVersion: {
        value: 14,
        choices: [
            1,
            2,
            3,
            4,
            5,
            11,
            12,
            12.1,
            13,
            13.1,
            14
        ]
    },
    icons: {
        value: 'auto',
        choices: [
            'auto',
            'outline',
            'solid'
        ]
    },
    locale: {
        value: 'en',
        choices: [
            'en',
            'ar',
            'cs',
            'de',
            'es',
            'fa',
            'fr',
            'it',
            'ja',
            'nl',
            'pl',
            'pt',
            'ru',
            'uk',
            'zh', 
        ]
    },
    maxFrequentRows: {
        value: 4
    },
    navPosition: {
        value: 'top',
        choices: [
            'top',
            'bottom',
            'none'
        ]
    },
    noCountryFlags: {
        value: false
    },
    noResultsEmoji: {
        value: null
    },
    perLine: {
        value: 9
    },
    previewEmoji: {
        value: null
    },
    previewPosition: {
        value: 'bottom',
        choices: [
            'top',
            'bottom',
            'none'
        ]
    },
    searchPosition: {
        value: 'sticky',
        choices: [
            'sticky',
            'static',
            'none'
        ]
    },
    set: {
        value: 'native',
        choices: [
            'native',
            'apple',
            'facebook',
            'google',
            'twitter',
            'fluentui'
        ]
    },
    skin: {
        value: 1,
        choices: [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    skinTonePosition: {
        value: 'preview',
        choices: [
            'preview',
            'search',
            'none'
        ]
    },
    theme: {
        value: 'auto',
        choices: [
            'auto',
            'light',
            'dark'
        ]
    },
    // Data
    categories: null,
    categoryIcons: null,
    custom: null,
    data: null,
    i18n: null,
    // Callbacks
    getImageURL: null,
    getSpritesheetURL: null,
    onAddCustomEmoji: null,
    onClickOutside: null,
    onEmojiSelect: null,
    // Deprecated
    stickySearch: {
        deprecated: true,
        value: true
    }
};


function $642db0546df88ad7$var$set(key, value) {
    try {
        window.localStorage[`emoji-mart.${key}`] = JSON.stringify(value);
    } catch (error) {
    }
}
function $642db0546df88ad7$var$get(key) {
    try {
        const value = window.localStorage[`emoji-mart.${key}`];
        if (value) return JSON.parse(value);
    } catch (error) {
    }
}
var $642db0546df88ad7$export$2e2bcd8739ae039 = {
    set: $642db0546df88ad7$var$set,
    get: $642db0546df88ad7$var$get
};


/**
 * @var {Object} cache
 */ var $407e044af47e0110$var$cache = new Map();
/**
 * Check if emoji is supported with cache
 *
 * @params {string} unicode
 * @returns {boolean}
 */ function $407e044af47e0110$export$dae07ca4832dbdc4(unicode) {
    if ($407e044af47e0110$var$cache.has(unicode)) return $407e044af47e0110$var$cache.get(unicode);
    var supported = $407e044af47e0110$var$isSupported(unicode);
    $407e044af47e0110$var$cache.set(unicode, supported);
    return supported;
}
/**
 * Request to handle cache directly
 *
 * @params {Map} store
 */ function $407e044af47e0110$export$1c6773f6f9a99e01(store) {
    $407e044af47e0110$var$cache = store;
}
/**
 * Check if the two pixels parts are perfectly the sames
 *
 * @params {string} unicode
 * @returns {boolean}
 */ var $407e044af47e0110$var$isSupported = function() {
    var ctx = null;
    try {
        ctx = document.createElement('canvas').getContext('2d');
    } catch (_a) {
    }
    // Not in browser env
    if (!ctx) return function() {
        return false;
    };
    var CANVAS_HEIGHT = 25;
    var CANVAS_WIDTH = 20;
    var textSize = Math.floor(CANVAS_HEIGHT / 2);
    // Initialize convas context
    ctx.font = textSize + 'px Arial, Sans-Serif';
    ctx.textBaseline = 'top';
    ctx.canvas.width = CANVAS_WIDTH * 2;
    ctx.canvas.height = CANVAS_HEIGHT;
    return function(unicode) {
        ctx.clearRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT);
        // Draw in red on the left
        ctx.fillStyle = '#FF0000';
        ctx.fillText(unicode, 0, 22);
        // Draw in blue on right
        ctx.fillStyle = '#0000FF';
        ctx.fillText(unicode, CANVAS_WIDTH, 22);
        var a = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
        var count = a.length;
        var i = 0;
        // Search the first visible pixel
        for(; i < count && !a[i + 3]; i += 4);
        // No visible pixel
        if (i >= count) return false;
        // Emoji has immutable color, so we check the color of the emoji in two different colors
        // the result show be the same.
        var x = CANVAS_WIDTH + i / 4 % CANVAS_WIDTH;
        var y = Math.floor(i / 4 / CANVAS_WIDTH);
        var b = ctx.getImageData(x, y, 1, 1).data;
        if (a[i] !== b[0] || a[i + 2] !== b[2]) return false;
        // Some emojis are a contraction of different ones, so if it's not
        // supported, it will show multiple characters
        if (ctx.measureText(unicode).width >= CANVAS_WIDTH) return false;
        // Supported
        return true;
    };
}();


const $d76d73d8437b44c4$var$VERSIONS = [
    {
        v: 14,
        emoji: '🫠'
    },
    {
        v: 13.1,
        emoji: '😶‍🌫️'
    },
    {
        v: 13,
        emoji: '🥸'
    },
    {
        v: 12.1,
        emoji: '🧑‍🦰'
    },
    {
        v: 12,
        emoji: '🥱'
    },
    {
        v: 11,
        emoji: '🥰'
    },
    {
        v: 5,
        emoji: '🤩'
    },
    {
        v: 4,
        emoji: '👱‍♀️'
    },
    {
        v: 3,
        emoji: '🤣'
    },
    {
        v: 2,
        emoji: '👋🏻'
    },
    {
        v: 1,
        emoji: '🙃'
    }, 
];
function $d76d73d8437b44c4$var$latestVersion() {
    for (const { v: v , emoji: emoji  } of $d76d73d8437b44c4$var$VERSIONS){
        if ($407e044af47e0110$export$dae07ca4832dbdc4(emoji)) return v;
    }
}
function $d76d73d8437b44c4$var$noCountryFlags() {
    if ($407e044af47e0110$export$dae07ca4832dbdc4('🇨🇦')) return false;
    return true;
}
var $d76d73d8437b44c4$export$2e2bcd8739ae039 = {
    latestVersion: $d76d73d8437b44c4$var$latestVersion,
    noCountryFlags: $d76d73d8437b44c4$var$noCountryFlags
};



const $26c4208b83093c27$var$DEFAULTS = [
    '+1',
    'grinning',
    'kissing_heart',
    'heart_eyes',
    'laughing',
    'stuck_out_tongue_winking_eye',
    'sweat_smile',
    'joy',
    'scream',
    'disappointed',
    'unamused',
    'weary',
    'sob',
    'sunglasses',
    'heart', 
];
let $26c4208b83093c27$var$Index = null;
function $26c4208b83093c27$var$add(emoji) {
    $26c4208b83093c27$var$Index || ($26c4208b83093c27$var$Index = $642db0546df88ad7$export$2e2bcd8739ae039.get('frequently') || {
    });
    const emojiId = emoji.id || emoji;
    if (!emojiId) return;
    $26c4208b83093c27$var$Index[emojiId] || ($26c4208b83093c27$var$Index[emojiId] = 0);
    $26c4208b83093c27$var$Index[emojiId] += 1;
    $642db0546df88ad7$export$2e2bcd8739ae039.set('last', emojiId);
    $642db0546df88ad7$export$2e2bcd8739ae039.set('frequently', $26c4208b83093c27$var$Index);
}
function $26c4208b83093c27$var$get({ maxFrequentRows: maxFrequentRows , perLine: perLine  }) {
    if (!maxFrequentRows) return [];
    $26c4208b83093c27$var$Index || ($26c4208b83093c27$var$Index = $642db0546df88ad7$export$2e2bcd8739ae039.get('frequently'));
    let emojiIds = [];
    if (!$26c4208b83093c27$var$Index) {
        $26c4208b83093c27$var$Index = {
        };
        for(let i in $26c4208b83093c27$var$DEFAULTS.slice(0, perLine)){
            const emojiId = $26c4208b83093c27$var$DEFAULTS[i];
            $26c4208b83093c27$var$Index[emojiId] = perLine - i;
            emojiIds.push(emojiId);
        }
        return emojiIds;
    }
    const max = maxFrequentRows * perLine;
    const last = $642db0546df88ad7$export$2e2bcd8739ae039.get('last');
    for(let emojiId in $26c4208b83093c27$var$Index)emojiIds.push(emojiId);
    emojiIds.sort((a, b)=>{
        const aScore = $26c4208b83093c27$var$Index[b];
        const bScore = $26c4208b83093c27$var$Index[a];
        if (aScore == bScore) return a.localeCompare(b);
        return aScore - bScore;
    });
    if (emojiIds.length > max) {
        const removedIds = emojiIds.slice(max);
        emojiIds = emojiIds.slice(0, max);
        for (let removedId of removedIds){
            if (removedId == last) continue;
            delete $26c4208b83093c27$var$Index[removedId];
        }
        if (last && emojiIds.indexOf(last) == -1) {
            delete $26c4208b83093c27$var$Index[emojiIds[emojiIds.length - 1]];
            emojiIds.splice(-1, 1, last);
        }
        $642db0546df88ad7$export$2e2bcd8739ae039.set('frequently', $26c4208b83093c27$var$Index);
    }
    return emojiIds;
}
var $26c4208b83093c27$export$2e2bcd8739ae039 = {
    add: $26c4208b83093c27$var$add,
    get: $26c4208b83093c27$var$get
};



const $8f9034744078e207$var$SHORTCODES_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
let $8f9034744078e207$var$Pool = null;
function $8f9034744078e207$var$get(emojiId) {
    if (emojiId.id) return emojiId;
    return $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[emojiId] || $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[$b79b4feb8fc394aa$export$2d0294657ab35f1b.aliases[emojiId]] || $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[$b79b4feb8fc394aa$export$2d0294657ab35f1b.natives[emojiId]];
}
function $8f9034744078e207$var$reset() {
    $8f9034744078e207$var$Pool = null;
}
async function $8f9034744078e207$var$search(value, { maxResults: maxResults  } = {
}) {
    if (!value || !value.trim().length) return null;
    maxResults || (maxResults = 90);
    await $b79b4feb8fc394aa$export$2cd8252107eb640b();
    const values = value.toLowerCase().replace(/(\w)-/, '$1 ').split(/[\s|,]+/).filter((word, i, words)=>{
        return word.trim() && words.indexOf(word) == i;
    });
    if (!values.length) return;
    let pool = $8f9034744078e207$var$Pool || ($8f9034744078e207$var$Pool = Object.values($b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis));
    let results, scores;
    for (const value1 of values){
        if (!pool.length) break;
        results = [];
        scores = {
        };
        for (const emoji of pool){
            if (!emoji.search) continue;
            const score = emoji.search.indexOf(`,${value1}`);
            if (score == -1) continue;
            results.push(emoji);
            scores[emoji.id] || (scores[emoji.id] = 0);
            scores[emoji.id] += emoji.id == value1 ? 0 : score + 1;
        }
        pool = results;
    }
    if (results.length < 2) return results;
    results.sort((a, b)=>{
        const aScore = scores[a.id];
        const bScore = scores[b.id];
        if (aScore == bScore) return a.id.localeCompare(b.id);
        return aScore - bScore;
    });
    if (results.length > maxResults) results = results.slice(0, maxResults);
    return results;
}
var $8f9034744078e207$export$2e2bcd8739ae039 = {
    search: $8f9034744078e207$var$search,
    get: $8f9034744078e207$var$get,
    reset: $8f9034744078e207$var$reset,
    SHORTCODES_REGEX: $8f9034744078e207$var$SHORTCODES_REGEX
};


const $66f5f6dfb6c0e3cd$export$bcb25aa587e9cb13 = [
    'checkered_flag',
    'crossed_flags',
    'pirate_flag',
    'rainbow-flag',
    'transgender_flag',
    'triangular_flag_on_post',
    'waving_black_flag',
    'waving_white_flag', 
];


let $b79b4feb8fc394aa$export$dbe3113d60765c1a = null;
let $b79b4feb8fc394aa$export$2d0294657ab35f1b = null;
async function $b79b4feb8fc394aa$var$fetchJSON(src) {
    const response = await fetch(src);
    return await response.json();
}
let $b79b4feb8fc394aa$var$promise = null;
let $b79b4feb8fc394aa$var$initCallback = null;
function $b79b4feb8fc394aa$export$2cd8252107eb640b(options) {
    $b79b4feb8fc394aa$var$promise || ($b79b4feb8fc394aa$var$promise = new Promise((resolve)=>{
        $b79b4feb8fc394aa$var$initCallback = resolve;
    }));
    if (options) $b79b4feb8fc394aa$var$_init(options);
    return $b79b4feb8fc394aa$var$promise;
}
function $b79b4feb8fc394aa$export$5c8df9d6d1ce7015() {
    $b79b4feb8fc394aa$export$2d0294657ab35f1b = null;
}
async function $b79b4feb8fc394aa$var$_init(props) {
    let { emojiVersion: emojiVersion , set: set , locale: locale  } = props;
    emojiVersion || (emojiVersion = $6191713a0c89d01b$export$2e2bcd8739ae039.emojiVersion.value);
    set || (set = $6191713a0c89d01b$export$2e2bcd8739ae039.set.value);
    locale || (locale = $6191713a0c89d01b$export$2e2bcd8739ae039.locale.value);
    if (!$b79b4feb8fc394aa$export$2d0294657ab35f1b) {
        $b79b4feb8fc394aa$export$2d0294657ab35f1b = (typeof props.data === 'function' ? await props.data() : props.data) || await $b79b4feb8fc394aa$var$fetchJSON(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${emojiVersion}/${set}.json`);
        $b79b4feb8fc394aa$export$2d0294657ab35f1b.emoticons = {
        };
        $b79b4feb8fc394aa$export$2d0294657ab35f1b.natives = {
        };
        $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.unshift({
            id: 'frequent',
            emojis: []
        });
        for(const alias in $b79b4feb8fc394aa$export$2d0294657ab35f1b.aliases){
            const emojiId = $b79b4feb8fc394aa$export$2d0294657ab35f1b.aliases[alias];
            const emoji = $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[emojiId];
            if (!emoji) continue;
            emoji.aliases || (emoji.aliases = []);
            emoji.aliases.push(alias);
        }
    } else $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.filter((c)=>{
        const isCustom = !!c.name;
        if (!isCustom) return true;
        return false;
    });
    if (!$b79b4feb8fc394aa$export$dbe3113d60765c1a) $b79b4feb8fc394aa$export$dbe3113d60765c1a = (typeof props.i18n === 'function' ? await props.i18n() : props.i18n) || (locale == 'en' ? (/*@__PURE__*/$parcel$interopDefault($128a97276525cf7f$exports)) : await $b79b4feb8fc394aa$var$fetchJSON(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${locale}.json`));
    if (props.custom) for(let i in props.custom){
        i = parseInt(i);
        const category = props.custom[i];
        const prevCategory = props.custom[i - 1];
        if (!category.emojis || !category.emojis.length) continue;
        category.id || (category.id = `custom_${i + 1}`);
        category.name || (category.name = $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories.custom);
        if (prevCategory && !category.icon) category.target = prevCategory.target || prevCategory;
        $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.push(category);
        const ids = [];
        for (const emoji of category.emojis){
            if (ids.indexOf(emoji.id) > -1) continue;
            $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[emoji.id] = emoji;
            ids.push(emoji.id);
        }
        category.emojis = ids;
    }
    if (props.categories) $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.filter((c)=>{
        return props.categories.indexOf(c.id) != -1;
    }).sort((c1, c2)=>{
        const i1 = props.categories.indexOf(c1.id);
        const i2 = props.categories.indexOf(c2.id);
        return i1 - i2;
    });
    let latestVersionSupport = null;
    let noCountryFlags = null;
    if (set == 'native') {
        latestVersionSupport = $d76d73d8437b44c4$export$2e2bcd8739ae039.latestVersion();
        noCountryFlags = props.noCountryFlags || $d76d73d8437b44c4$export$2e2bcd8739ae039.noCountryFlags();
    }
    let categoryIndex = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.length;
    let resetSearchIndex = false;
    while(categoryIndex--){
        const category = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories[categoryIndex];
        if (category.id == 'frequent') {
            let { maxFrequentRows: maxFrequentRows , perLine: perLine  } = props;
            maxFrequentRows || (maxFrequentRows = $6191713a0c89d01b$export$2e2bcd8739ae039.maxFrequentRows.value);
            perLine || (perLine = $6191713a0c89d01b$export$2e2bcd8739ae039.perLine.value);
            category.emojis = $26c4208b83093c27$export$2e2bcd8739ae039.get({
                maxFrequentRows: maxFrequentRows,
                perLine: perLine
            });
        }
        if (!category.emojis || !category.emojis.length) {
            $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.splice(categoryIndex, 1);
            continue;
        }
        const { categoryIcons: categoryIcons  } = props;
        if (categoryIcons) {
            const icon = categoryIcons[category.id];
            if (icon && !category.icon) category.icon = icon;
        }
        let emojiIndex = category.emojis.length;
        while(emojiIndex--){
            const emoji = $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[category.emojis[emojiIndex]];
            const ignore = ()=>{
                category.emojis.splice(emojiIndex, 1);
            };
            if (!emoji) {
                ignore();
                continue;
            }
            if (latestVersionSupport && emoji.version > latestVersionSupport) {
                ignore();
                continue;
            }
            if (noCountryFlags && category.id == 'flags') {
                if (!$66f5f6dfb6c0e3cd$export$bcb25aa587e9cb13.includes(emoji.id)) {
                    ignore();
                    continue;
                }
            }
            if (!emoji.search) {
                resetSearchIndex = true;
                emoji.search = ',' + [
                    [
                        emoji.id,
                        false
                    ],
                    [
                        emoji.name,
                        true
                    ],
                    [
                        emoji.keywords,
                        false
                    ],
                    [
                        emoji.emoticons,
                        false
                    ], 
                ].map(([strings, split])=>{
                    if (!strings) return;
                    return (Array.isArray(strings) ? strings : [
                        strings
                    ]).map((string)=>{
                        return (split ? string.split(/[-|_|\s]+/) : [
                            string
                        ]).map((s)=>s.toLowerCase()
                        );
                    }).flat();
                }).flat().filter((a)=>a && a.trim()
                ).join(',');
                if (emoji.emoticons) for (const emoticon of emoji.emoticons){
                    if ($b79b4feb8fc394aa$export$2d0294657ab35f1b.emoticons[emoticon]) continue;
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.emoticons[emoticon] = emoji.id;
                }
                let skinIndex = 0;
                for (const skin of emoji.skins){
                    if (!skin) continue;
                    skinIndex++;
                    const { native: native  } = skin;
                    if (native) {
                        $b79b4feb8fc394aa$export$2d0294657ab35f1b.natives[native] = emoji.id;
                        emoji.search += `,${native}`;
                    }
                    const skinShortcodes = skinIndex == 1 ? '' : `:skin-tone-${skinIndex}:`;
                    skin.shortcodes = `:${emoji.id}:${skinShortcodes}`;
                }
            }
        }
    }
    if (resetSearchIndex) $8f9034744078e207$export$2e2bcd8739ae039.reset();
    $b79b4feb8fc394aa$var$initCallback();
}
function $b79b4feb8fc394aa$export$75fe5f91d452f94b(props, defaultProps, element) {
    props || (props = {
    });
    const _props = {
    };
    for(let k in defaultProps)_props[k] = $b79b4feb8fc394aa$export$88c9ddb45cea7241(k, props, defaultProps, element);
    return _props;
}
function $b79b4feb8fc394aa$export$88c9ddb45cea7241(propName, props, defaultProps, element) {
    const defaults = defaultProps[propName];
    let value = element && element.getAttribute(propName) || (props[propName] != null && props[propName] != undefined ? props[propName] : null);
    if (!defaults) return value;
    if (value != null && defaults.value && typeof defaults.value != typeof value) {
        if (typeof defaults.value == 'boolean') value = value == 'false' ? false : true;
        else value = defaults.value.constructor(value);
    }
    if (defaults.transform && value) value = defaults.transform(value);
    if (value == null || defaults.choices && defaults.choices.indexOf(value) == -1) value = defaults.value;
    return value;
}




const $e0de45cc3cbe7f1d$var$categories = {
    activity: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
            })
        })
    },
    custom: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
            d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
        })
    }),
    flags: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
            })
        })
    },
    foods: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
            })
        })
    },
    frequent: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
            })
        })
    },
    nature: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
            })
        })
    },
    objects: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
            })
        })
    },
    people: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
            })
        })
    },
    places: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
            })
        })
    },
    symbols: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
            })
        })
    }
};
const $e0de45cc3cbe7f1d$var$search = {
    loupe: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        })
    }),
    delete: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        })
    })
};
var $e0de45cc3cbe7f1d$export$2e2bcd8739ae039 = {
    categories: $e0de45cc3cbe7f1d$var$categories,
    search: $e0de45cc3cbe7f1d$var$search
};





function $77ce92f400311234$export$2e2bcd8739ae039(props) {
    let { id: id , skin: skin , emoji: emoji  } = props;
    if (props.shortcodes) {
        const matches = props.shortcodes.match($8f9034744078e207$export$2e2bcd8739ae039.SHORTCODES_REGEX);
        if (matches) {
            id = matches[1];
            if (matches[2]) skin = matches[2];
        }
    }
    emoji || (emoji = $8f9034744078e207$export$2e2bcd8739ae039.get(id || props.native));
    if (!emoji) return props.fallback;
    const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
    const imageSrc = emojiSkin.src || (props.set != 'native' && !props.spritesheet ? typeof props.getImageURL === 'function' ? props.getImageURL(props.set, emojiSkin.unified) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${props.set}@14.0.0/img/${props.set}/64/${emojiSkin.unified}.png` : undefined);
    const spritesheetSrc = typeof props.getSpritesheetURL === 'function' ? props.getSpritesheetURL(props.set) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${props.set}@14.0.0/img/${props.set}/sheets-256/64.png`;
    return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
        class: "emoji-mart-emoji",
        "data-emoji-set": props.set,
        children: imageSrc ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("img", {
            style: {
                height: props.size || '1em',
                width: 'auto',
                display: 'inline-block',
                position: 'relative',
                top: '.1em'
            },
            alt: emojiSkin.native || emojiSkin.shortcodes,
            src: imageSrc,
            loading: "lazy"
        }) : props.set == 'native' ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
            style: {
                fontSize: props.size,
                fontFamily: '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'
            },
            children: emojiSkin.native
        }) : /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
            style: {
                display: 'block',
                width: props.size,
                height: props.size,
                backgroundImage: `url(${spritesheetSrc})`,
                backgroundSize: `${100 * $b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.cols}% ${100 * $b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.rows}%`,
                backgroundPosition: `${100 / ($b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.cols - 1) * emojiSkin.x}% ${100 / ($b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.rows - 1) * emojiSkin.y}%`
            }
        })
    }));
}







const $5275416a750983b0$var$WindowHTMLElement = typeof window !== 'undefined' ? window.HTMLElement : Object;
class $5275416a750983b0$export$2e2bcd8739ae039 extends $5275416a750983b0$var$WindowHTMLElement {
    static get observedAttributes() {
        return Object.keys(this.Props);
    }
    update(props = {
    }) {
        for(let k in props)this.attributeChangedCallback(k, null, props[k]);
    }
    attributeChangedCallback(attr, _, newValue) {
        if (!this.component) return;
        const value = $b79b4feb8fc394aa$export$88c9ddb45cea7241(attr, {
            [attr]: newValue
        }, this.constructor.Props, this);
        if (this.component.componentWillReceiveProps) this.component.componentWillReceiveProps({
            [attr]: value
        });
        else {
            this.component.props[attr] = value;
            this.component.forceUpdate();
        }
    }
    constructor(props = {
    }){
        super();
        this.props = props;
        if (props.parent || props.ref) {
            let ref = null;
            const parent = props.parent || (ref = props.ref && props.ref.current);
            if (ref) ref.innerHTML = '';
            if (parent) parent.appendChild(this);
        }
    }
}



class $327e158bf6bab5e8$export$2e2bcd8739ae039 extends $5275416a750983b0$export$2e2bcd8739ae039 {
    setShadow() {
        this.attachShadow({
            mode: 'open'
        });
    }
    injectStyles(styles) {
        if (!styles) return;
        const style = document.createElement('style');
        style.textContent = styles;
        this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
    }
    constructor(props, { styles: styles  } = {
    }){
        super(props);
        this.setShadow();
        this.injectStyles(styles);
    }
}






var $86ad3a680fe4d737$export$2e2bcd8739ae039 = {
    fallback: '',
    id: '',
    native: '',
    shortcodes: '',
    size: {
        value: '',
        transform: (value)=>{
            // If the value is a number, then we assume it’s a pixel value.
            if (!/\D/.test(value)) return `${value}px`;
            return value;
        }
    },
    // Shared
    set: $6191713a0c89d01b$export$2e2bcd8739ae039.set,
    skin: $6191713a0c89d01b$export$2e2bcd8739ae039.skin
};


class $9c6cf3620cfad306$export$2e2bcd8739ae039 extends $5275416a750983b0$export$2e2bcd8739ae039 {
    async connectedCallback() {
        const props = $b79b4feb8fc394aa$export$75fe5f91d452f94b(this.props, $86ad3a680fe4d737$export$2e2bcd8739ae039, this);
        props.element = this;
        props.ref = (component)=>{
            this.component = component;
        };
        await $b79b4feb8fc394aa$export$2cd8252107eb640b();
        $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($77ce92f400311234$export$2e2bcd8739ae039, {
            ...props
        }), this);
    }
    constructor(props){
        super(props);
    }
}
$1459522e281add88$export$2e2bcd8739ae039($9c6cf3620cfad306$export$2e2bcd8739ae039, "Props", $86ad3a680fe4d737$export$2e2bcd8739ae039);
if (typeof customElements !== 'undefined' && !customElements.get('em-emoji')) customElements.define('em-emoji', $9c6cf3620cfad306$export$2e2bcd8739ae039);






var $fcff12f1905ff4d3$var$t, $fcff12f1905ff4d3$var$u, $fcff12f1905ff4d3$var$r, $fcff12f1905ff4d3$var$o = 0, $fcff12f1905ff4d3$var$i = [], $fcff12f1905ff4d3$var$c = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b, $fcff12f1905ff4d3$var$f = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r, $fcff12f1905ff4d3$var$e = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.diffed, $fcff12f1905ff4d3$var$a = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c, $fcff12f1905ff4d3$var$v = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount;
function $fcff12f1905ff4d3$var$m(t, r) {
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__h && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__h($fcff12f1905ff4d3$var$u, t, $fcff12f1905ff4d3$var$o || r), $fcff12f1905ff4d3$var$o = 0;
    var i = $fcff12f1905ff4d3$var$u.__H || ($fcff12f1905ff4d3$var$u.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
    }), i.__[t];
}
function $fcff12f1905ff4d3$export$60241385465d0a34(n) {
    return $fcff12f1905ff4d3$var$o = 1, $fcff12f1905ff4d3$export$13e3392192263954($fcff12f1905ff4d3$var$w, n);
}
function $fcff12f1905ff4d3$export$13e3392192263954(n1, r, o) {
    var i = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 2);
    return i.t = n1, i.__c || (i.__ = [
        o ? o(r) : $fcff12f1905ff4d3$var$w(void 0, r),
        function(n) {
            var t = i.t(i.__[0], n);
            i.__[0] !== t && (i.__ = [
                t,
                i.__[1]
            ], i.__c.setState({
            }));
        }
    ], i.__c = $fcff12f1905ff4d3$var$u), i.__;
}
function $fcff12f1905ff4d3$export$6d9c69b0de29b591(r, o) {
    var i = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 3);
    !$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__s && $fcff12f1905ff4d3$var$k(i.__H, o) && (i.__ = r, i.__H = o, $fcff12f1905ff4d3$var$u.__H.__h.push(i));
}
function $fcff12f1905ff4d3$export$e5c5a5f917a5871c(r, o) {
    var i = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 4);
    !$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__s && $fcff12f1905ff4d3$var$k(i.__H, o) && (i.__ = r, i.__H = o, $fcff12f1905ff4d3$var$u.__h.push(i));
}
function $fcff12f1905ff4d3$export$b8f5890fc79d6aca(n) {
    return $fcff12f1905ff4d3$var$o = 5, $fcff12f1905ff4d3$export$1538c33de8887b59(function() {
        return {
            current: n
        };
    }, []);
}
function $fcff12f1905ff4d3$export$d5a552a76deda3c2(n, t, u) {
    $fcff12f1905ff4d3$var$o = 6, $fcff12f1905ff4d3$export$e5c5a5f917a5871c(function() {
        "function" == typeof n ? n(t()) : n && (n.current = t());
    }, null == u ? u : u.concat(n));
}
function $fcff12f1905ff4d3$export$1538c33de8887b59(n, u) {
    var r = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 7);
    return $fcff12f1905ff4d3$var$k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}
function $fcff12f1905ff4d3$export$35808ee640e87ca7(n, t) {
    return $fcff12f1905ff4d3$var$o = 8, $fcff12f1905ff4d3$export$1538c33de8887b59(function() {
        return n;
    }, t);
}
function $fcff12f1905ff4d3$export$fae74005e78b1a27(n) {
    var r = $fcff12f1905ff4d3$var$u.context[n.__c], o = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 9);
    return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub($fcff12f1905ff4d3$var$u)), r.props.value) : n.__;
}
function $fcff12f1905ff4d3$export$dc8fbce3eb94dc1e(t, u) {
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.useDebugValue && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.useDebugValue(u ? u(t) : t);
}
function $fcff12f1905ff4d3$export$c052f6604b7d51fe(n2) {
    var r = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 10), o = $fcff12f1905ff4d3$export$60241385465d0a34();
    return r.__ = n2, $fcff12f1905ff4d3$var$u.componentDidCatch || ($fcff12f1905ff4d3$var$u.componentDidCatch = function(n) {
        r.__ && r.__(n), o[1](n);
    }), [
        o[0],
        function() {
            o[1](void 0);
        }
    ];
}
function $fcff12f1905ff4d3$var$x() {
    var t1;
    for($fcff12f1905ff4d3$var$i.sort(function(n, t) {
        return n.__v.__b - t.__v.__b;
    }); t1 = $fcff12f1905ff4d3$var$i.pop();)if (t1.__P) try {
        t1.__H.__h.forEach($fcff12f1905ff4d3$var$g), t1.__H.__h.forEach($fcff12f1905ff4d3$var$j), t1.__H.__h = [];
    } catch (u) {
        t1.__H.__h = [], $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(u, t1.__v);
    }
}
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b = function(n) {
    $fcff12f1905ff4d3$var$u = null, $fcff12f1905ff4d3$var$c && $fcff12f1905ff4d3$var$c(n);
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r = function(n) {
    $fcff12f1905ff4d3$var$f && $fcff12f1905ff4d3$var$f(n), $fcff12f1905ff4d3$var$t = 0;
    var r = ($fcff12f1905ff4d3$var$u = n.__c).__H;
    r && (r.__h.forEach($fcff12f1905ff4d3$var$g), r.__h.forEach($fcff12f1905ff4d3$var$j), r.__h = []);
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.diffed = function(t2) {
    $fcff12f1905ff4d3$var$e && $fcff12f1905ff4d3$var$e(t2);
    var o = t2.__c;
    o && o.__H && o.__H.__h.length && (1 !== $fcff12f1905ff4d3$var$i.push(o) && $fcff12f1905ff4d3$var$r === $d5fc6ac583bc94a1$export$41c562ebe57d11e2.requestAnimationFrame || (($fcff12f1905ff4d3$var$r = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.requestAnimationFrame) || function(n) {
        var t, u = function() {
            clearTimeout(r), $fcff12f1905ff4d3$var$b && cancelAnimationFrame(t), setTimeout(n);
        }, r = setTimeout(u, 100);
        $fcff12f1905ff4d3$var$b && (t = requestAnimationFrame(u));
    })($fcff12f1905ff4d3$var$x)), $fcff12f1905ff4d3$var$u = null;
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c = function(t3, u) {
    u.some(function(t) {
        try {
            t.__h.forEach($fcff12f1905ff4d3$var$g), t.__h = t.__h.filter(function(n) {
                return !n.__ || $fcff12f1905ff4d3$var$j(n);
            });
        } catch (r) {
            u.some(function(n) {
                n.__h && (n.__h = []);
            }), u = [], $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(r, t.__v);
        }
    }), $fcff12f1905ff4d3$var$a && $fcff12f1905ff4d3$var$a(t3, u);
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount = function(t) {
    $fcff12f1905ff4d3$var$v && $fcff12f1905ff4d3$var$v(t);
    var u, r = t.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            $fcff12f1905ff4d3$var$g(n);
        } catch (n3) {
            u = n3;
        }
    }), u && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(u, r.__v));
};
var $fcff12f1905ff4d3$var$b = "function" == typeof requestAnimationFrame;
function $fcff12f1905ff4d3$var$g(n) {
    var t = $fcff12f1905ff4d3$var$u, r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), $fcff12f1905ff4d3$var$u = t;
}
function $fcff12f1905ff4d3$var$j(n) {
    var t = $fcff12f1905ff4d3$var$u;
    n.__c = n.__(), $fcff12f1905ff4d3$var$u = t;
}
function $fcff12f1905ff4d3$var$k(n, t4) {
    return !n || n.length !== t4.length || t4.some(function(t, u) {
        return t !== n[u];
    });
}
function $fcff12f1905ff4d3$var$w(n, t) {
    return "function" == typeof t ? t(n) : t;
}





function $d7e5aa0d2b8fa1f1$var$S(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function $d7e5aa0d2b8fa1f1$var$C(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
function $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd(n) {
    this.props = n;
}
function $d7e5aa0d2b8fa1f1$export$7c73462e0d25e514(n1, t1) {
    function e1(n) {
        var e = this.props.ref, r = e == n.ref;
        return !r && e && (e.call ? e(null) : e.current = null), t1 ? !t1(this.props, n) || !r : $d7e5aa0d2b8fa1f1$var$C(this.props, n);
    }
    function r1(t) {
        return this.shouldComponentUpdate = e1, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d(n1, t);
    }
    return r1.displayName = "Memo(" + (n1.displayName || n1.name) + ")", r1.prototype.isReactComponent = !0, r1.__f = !0, r1;
}
($d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd.prototype = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8).isPureReactComponent = !0, $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd.prototype.shouldComponentUpdate = function(n, t) {
    return $d7e5aa0d2b8fa1f1$var$C(this.props, n) || $d7e5aa0d2b8fa1f1$var$C(this.state, t);
};
var $d7e5aa0d2b8fa1f1$var$w = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), $d7e5aa0d2b8fa1f1$var$w && $d7e5aa0d2b8fa1f1$var$w(n);
};
var $d7e5aa0d2b8fa1f1$var$R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function $d7e5aa0d2b8fa1f1$export$257a8862b851cb5b(n) {
    function t2(t, e) {
        var r = $d7e5aa0d2b8fa1f1$var$S({
        }, t);
        return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
    }
    return t2.$$typeof = $d7e5aa0d2b8fa1f1$var$R, t2.render = t2, t2.prototype.isReactComponent = t2.__f = !0, t2.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t2;
}
var $d7e5aa0d2b8fa1f1$var$N = function(n, t) {
    return null == n ? null : $d5fc6ac583bc94a1$export$47e4c5b300681277($d5fc6ac583bc94a1$export$47e4c5b300681277(n).map(t));
}, $d7e5aa0d2b8fa1f1$export$dca3b0875bd9a954 = {
    map: $d7e5aa0d2b8fa1f1$var$N,
    forEach: $d7e5aa0d2b8fa1f1$var$N,
    count: function(n) {
        return n ? $d5fc6ac583bc94a1$export$47e4c5b300681277(n).length : 0;
    },
    only: function(n) {
        var t = $d5fc6ac583bc94a1$export$47e4c5b300681277(n);
        if (1 !== t.length) throw "Children.only";
        return t[0];
    },
    toArray: $d5fc6ac583bc94a1$export$47e4c5b300681277
}, $d7e5aa0d2b8fa1f1$var$A = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e = function(n, t, e) {
    if (n.then) {
        for(var r, u = t; u = u.__;)if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
    }
    $d7e5aa0d2b8fa1f1$var$A(n, t, e);
};
var $d7e5aa0d2b8fa1f1$var$O = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount;
function $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5() {
    this.__u = 0, this.t = null, this.__b = null;
}
function $d7e5aa0d2b8fa1f1$var$U(n) {
    var t = n.__.__c;
    return t && t.__e && t.__e(n);
}
function $d7e5aa0d2b8fa1f1$export$488013bae63b21da(n2) {
    var t, e, r;
    function u1(u) {
        if (t || (t = n2()).then(function(n) {
            e = n.default || n;
        }, function(n) {
            r = n;
        }), r) throw r;
        if (!e) throw t;
        return $d5fc6ac583bc94a1$export$c8a8987d4410bf2d(e, u);
    }
    return u1.displayName = "Lazy", u1.__f = !0, u1;
}
function $d7e5aa0d2b8fa1f1$export$998bcd577473dd93() {
    this.u = null, this.o = null;
}
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount = function(n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), $d7e5aa0d2b8fa1f1$var$O && $d7e5aa0d2b8fa1f1$var$O(n);
}, ($d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5.prototype = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8).__c = function(n3, t3) {
    var e2 = t3.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u = $d7e5aa0d2b8fa1f1$var$U(r2.__v), o = !1, i = function() {
        o || (o = !0, e2.__R = null, u ? u(l) : l());
    };
    e2.__R = i;
    var l = function() {
        if (!--r2.__u) {
            if (r2.state.__e) {
                var n4 = r2.state.__e;
                r2.__v.__k[0] = (function n(t6, e, r) {
                    return t6 && (t6.__v = null, t6.__k = t6.__k && t6.__k.map(function(t) {
                        return n(t, e, r);
                    }), t6.__c && t6.__c.__P === e && (t6.__e && r.insertBefore(t6.__e, t6.__d), t6.__c.__e = !0, t6.__c.__P = r)), t6;
                })(n4, n4.__c.__P, n4.__c.__O);
            }
            var t4;
            for(r2.setState({
                __e: r2.__b = null
            }); t4 = r2.t.pop();)t4.forceUpdate();
        }
    }, c = !0 === t3.__h;
    (r2.__u++) || c || r2.setState({
        __e: r2.__b = r2.__v.__k[0]
    }), n3.then(i, i);
}, $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5.prototype.componentWillUnmount = function() {
    this.t = [];
}, $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5.prototype.render = function(n7, t7) {
    if (this.__b) {
        if (this.__v.__k) {
            var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
            this.__v.__k[0] = (function n8(t8, e, r) {
                return t8 && (t8.__c && t8.__c.__H && (t8.__c.__H.__.forEach(function(n) {
                    "function" == typeof n.__c && n.__c();
                }), t8.__c.__H = null), null != (t8 = $d7e5aa0d2b8fa1f1$var$S({
                }, t8)).__c && (t8.__c.__P === r && (t8.__c.__P = e), t8.__c = null), t8.__k = t8.__k && t8.__k.map(function(t) {
                    return n8(t, e, r);
                })), t8;
            })(this.__b, e3, r3.__O = r3.__P);
        }
        this.__b = null;
    }
    var u = t7.__e && $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$ffb0004e005737fa, null, n7.fallback);
    return u && (u.__h = null), [
        $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$ffb0004e005737fa, null, t7.__e ? null : n7.children),
        u
    ];
};
var $d7e5aa0d2b8fa1f1$var$T = function(n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for(e = n.u; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.u = e = e[2];
    }
};
function $d7e5aa0d2b8fa1f1$var$D(n) {
    return this.getChildContext = function() {
        return n.context;
    }, n.children;
}
function $d7e5aa0d2b8fa1f1$var$I(n9) {
    var t = this, e = n9.i;
    t.componentWillUnmount = function() {
        $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== e && t.componentWillUnmount(), n9.__v ? (t.l || (t.i = e, t.l = {
        nodeType: 1,
        parentNode: e,
        childNodes: [],
        appendChild: function(n) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        insertBefore: function(n, e) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
        }
    }), $d5fc6ac583bc94a1$export$b3890eb0ae9dca99($d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d7e5aa0d2b8fa1f1$var$D, {
        context: t.context
    }, n9.__v), t.l)) : t.l && t.componentWillUnmount();
}
function $d7e5aa0d2b8fa1f1$export$d39a5bbd09211389(n, t) {
    return $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d7e5aa0d2b8fa1f1$var$I, {
        __v: n,
        i: t
    });
}
($d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8).__e = function(n) {
    var t = this, e = $d7e5aa0d2b8fa1f1$var$U(t.__v), r = t.o.get(n);
    return r[0]++, function(u) {
        var o = function() {
            t.props.revealOrder ? (r.push(u), $d7e5aa0d2b8fa1f1$var$T(t, n, r)) : u();
        };
        e ? e(o) : o();
    };
}, $d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype.render = function(n) {
    this.u = null, this.o = new Map;
    var t = $d5fc6ac583bc94a1$export$47e4c5b300681277(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.o.set(t[e], this.u = [
        1,
        0,
        this.u
    ]);
    return n.children;
}, $d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype.componentDidUpdate = $d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype.componentDidMount = function() {
    var n = this;
    this.o.forEach(function(t, e) {
        $d7e5aa0d2b8fa1f1$var$T(n, e, t);
    });
};
var $d7e5aa0d2b8fa1f1$var$j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, $d7e5aa0d2b8fa1f1$var$P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $d7e5aa0d2b8fa1f1$var$V = "undefined" != typeof document, $d7e5aa0d2b8fa1f1$var$z = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};
function $d7e5aa0d2b8fa1f1$export$b3890eb0ae9dca99(n, t, e) {
    return null == t.__k && (t.textContent = ""), $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function $d7e5aa0d2b8fa1f1$export$fa8d919ba61d84db(n, t, e) {
    return $d5fc6ac583bc94a1$export$fa8d919ba61d84db(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
$d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.isReactComponent = {
}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(n) {
    Object.defineProperty($d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype, n, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + n];
        },
        set: function(t) {
            Object.defineProperty(this, n, {
                configurable: !0,
                writable: !0,
                value: t
            });
        }
    });
});
var $d7e5aa0d2b8fa1f1$var$H = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.event;
function $d7e5aa0d2b8fa1f1$var$Z() {
}
function $d7e5aa0d2b8fa1f1$var$Y() {
    return this.cancelBubble;
}
function $d7e5aa0d2b8fa1f1$var$q() {
    return this.defaultPrevented;
}
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.event = function(n) {
    return $d7e5aa0d2b8fa1f1$var$H && (n = $d7e5aa0d2b8fa1f1$var$H(n)), n.persist = $d7e5aa0d2b8fa1f1$var$Z, n.isPropagationStopped = $d7e5aa0d2b8fa1f1$var$Y, n.isDefaultPrevented = $d7e5aa0d2b8fa1f1$var$q, n.nativeEvent = n;
};
var $d7e5aa0d2b8fa1f1$var$G, $d7e5aa0d2b8fa1f1$var$J = {
    configurable: !0,
    get: function() {
        return this.class;
    }
}, $d7e5aa0d2b8fa1f1$var$K = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode = function(n10) {
    var t = n10.type, e = n10.props, r = e;
    if ("string" == typeof t) {
        var u = -1 === t.indexOf("-");
        for(var o in r = {
        }, e){
            var i = e[o];
            $d7e5aa0d2b8fa1f1$var$V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !$d7e5aa0d2b8fa1f1$var$z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && $d7e5aa0d2b8fa1f1$var$P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = $d5fc6ac583bc94a1$export$47e4c5b300681277(e.children).forEach(function(n) {
            n.props.selected = -1 != r.value.indexOf(n.props.value);
        })), "select" == t && null != r.defaultValue && (r.value = $d5fc6ac583bc94a1$export$47e4c5b300681277(e.children).forEach(function(n) {
            n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
        })), n10.props = r, e.class != e.className && ($d7e5aa0d2b8fa1f1$var$J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", $d7e5aa0d2b8fa1f1$var$J));
    }
    n10.$$typeof = $d7e5aa0d2b8fa1f1$var$j, $d7e5aa0d2b8fa1f1$var$K && $d7e5aa0d2b8fa1f1$var$K(n10);
};
var $d7e5aa0d2b8fa1f1$var$Q = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r = function(n) {
    $d7e5aa0d2b8fa1f1$var$Q && $d7e5aa0d2b8fa1f1$var$Q(n), $d7e5aa0d2b8fa1f1$var$G = n.__c;
};
var $d7e5aa0d2b8fa1f1$export$ae55be85d98224ed = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(n) {
                return $d7e5aa0d2b8fa1f1$var$G.__n[n.__c].props.value;
            }
        }
    }
}, $d7e5aa0d2b8fa1f1$export$83d89fbfd8236492 = "17.0.2";
function $d7e5aa0d2b8fa1f1$export$d38cd72104c1f0e9(n) {
    return $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.bind(null, n);
}
function $d7e5aa0d2b8fa1f1$export$a8257692ac88316c(n) {
    return !!n && n.$$typeof === $d7e5aa0d2b8fa1f1$var$j;
}
function $d7e5aa0d2b8fa1f1$export$e530037191fcd5d7(n) {
    return $d7e5aa0d2b8fa1f1$export$a8257692ac88316c(n) ? $d5fc6ac583bc94a1$export$e530037191fcd5d7.apply(null, arguments) : n;
}
function $d7e5aa0d2b8fa1f1$export$502457920280e6be(n) {
    return !!n.__k && ($d5fc6ac583bc94a1$export$b3890eb0ae9dca99(null, n), !0);
}
function $d7e5aa0d2b8fa1f1$export$466bfc07425424d5(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var $d7e5aa0d2b8fa1f1$export$c78a37762a8d58e1 = function(n, t) {
    return n(t);
}, $d7e5aa0d2b8fa1f1$export$cd75ccfd720a3cd4 = function(n, t) {
    return n(t);
}, $d7e5aa0d2b8fa1f1$export$5f8d39834fd61797 = $d5fc6ac583bc94a1$export$ffb0004e005737fa;
var $d7e5aa0d2b8fa1f1$export$2e2bcd8739ae039 = {
    useState: $fcff12f1905ff4d3$export$60241385465d0a34,
    useReducer: $fcff12f1905ff4d3$export$13e3392192263954,
    useEffect: $fcff12f1905ff4d3$export$6d9c69b0de29b591,
    useLayoutEffect: $fcff12f1905ff4d3$export$e5c5a5f917a5871c,
    useRef: $fcff12f1905ff4d3$export$b8f5890fc79d6aca,
    useImperativeHandle: $fcff12f1905ff4d3$export$d5a552a76deda3c2,
    useMemo: $fcff12f1905ff4d3$export$1538c33de8887b59,
    useCallback: $fcff12f1905ff4d3$export$35808ee640e87ca7,
    useContext: $fcff12f1905ff4d3$export$fae74005e78b1a27,
    useDebugValue: $fcff12f1905ff4d3$export$dc8fbce3eb94dc1e,
    version: "17.0.2",
    Children: $d7e5aa0d2b8fa1f1$export$dca3b0875bd9a954,
    render: $d7e5aa0d2b8fa1f1$export$b3890eb0ae9dca99,
    hydrate: $d7e5aa0d2b8fa1f1$export$fa8d919ba61d84db,
    unmountComponentAtNode: $d7e5aa0d2b8fa1f1$export$502457920280e6be,
    createPortal: $d7e5aa0d2b8fa1f1$export$d39a5bbd09211389,
    createElement: $d5fc6ac583bc94a1$export$c8a8987d4410bf2d,
    createContext: $d5fc6ac583bc94a1$export$fd42f52fd3ae1109,
    createFactory: $d7e5aa0d2b8fa1f1$export$d38cd72104c1f0e9,
    cloneElement: $d7e5aa0d2b8fa1f1$export$e530037191fcd5d7,
    createRef: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43,
    Fragment: $d5fc6ac583bc94a1$export$ffb0004e005737fa,
    isValidElement: $d7e5aa0d2b8fa1f1$export$a8257692ac88316c,
    findDOMNode: $d7e5aa0d2b8fa1f1$export$466bfc07425424d5,
    Component: $d5fc6ac583bc94a1$export$16fa2f45be04daa8,
    PureComponent: $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd,
    memo: $d7e5aa0d2b8fa1f1$export$7c73462e0d25e514,
    forwardRef: $d7e5aa0d2b8fa1f1$export$257a8862b851cb5b,
    flushSync: $d7e5aa0d2b8fa1f1$export$cd75ccfd720a3cd4,
    unstable_batchedUpdates: $d7e5aa0d2b8fa1f1$export$c78a37762a8d58e1,
    StrictMode: $d5fc6ac583bc94a1$export$ffb0004e005737fa,
    Suspense: $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5,
    SuspenseList: $d7e5aa0d2b8fa1f1$export$998bcd577473dd93,
    lazy: $d7e5aa0d2b8fa1f1$export$488013bae63b21da,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $d7e5aa0d2b8fa1f1$export$ae55be85d98224ed
};




const $14f6fe4cf86a9151$var$THEME_ICONS = {
    light: 'outline',
    dark: 'solid'
};
class $14f6fe4cf86a9151$export$2e2bcd8739ae039 extends $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd {
    renderIcon(category) {
        const { icon: icon  } = category;
        if (icon) {
            if (icon.svg) return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                class: "flex",
                dangerouslySetInnerHTML: {
                    __html: icon.svg
                }
            }));
            if (icon.src) return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("img", {
                src: icon.src
            }));
        }
        const categoryIcons = $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.categories[category.id] || $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.categories.custom;
        const style = this.props.icons == 'auto' ? $14f6fe4cf86a9151$var$THEME_ICONS[this.props.theme] : this.props.icons;
        return categoryIcons[style] || categoryIcons;
    }
    render() {
        let selectedCategoryIndex = null;
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("nav", {
            id: "nav",
            class: "padding",
            "data-position": this.props.position,
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                class: "flex relative",
                children: [
                    this.categories.map((category, i)=>{
                        const title = category.name || $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories[category.id];
                        const selected = !this.props.unfocused && category.id == this.state.categoryId;
                        if (selected) selectedCategoryIndex = i;
                        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                            "aria-label": title,
                            "aria-selected": selected || undefined,
                            title: title,
                            type: "button",
                            class: "flex flex-grow flex-center",
                            onMouseDown: (e)=>e.preventDefault()
                            ,
                            onClick: ()=>{
                                this.props.onClick({
                                    category: category,
                                    i: i
                                });
                            },
                            children: this.renderIcon(category)
                        }));
                    }),
                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                        class: "bar",
                        style: {
                            width: `${100 / this.categories.length}%`,
                            opacity: selectedCategoryIndex == null ? 0 : 1,
                            transform: `translateX(${selectedCategoryIndex * 100}%)`
                        }
                    })
                ]
            })
        }));
    }
    constructor(){
        super();
        this.categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.filter((category)=>{
            return !category.target;
        });
        this.state = {
            categoryId: this.categories[0].id
        };
    }
}





class $e12a0ebddac53324$export$2e2bcd8739ae039 extends $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd {
    shouldComponentUpdate(nextProps) {
        for(let k in nextProps){
            if (k == 'children') continue;
            if (nextProps[k] != this.props[k]) return true;
        }
        return false;
    }
    render() {
        return this.props.children;
    }
}




const $1221208eb78d1324$var$Performance = {
    rowsPerRender: 1
};
class $1221208eb78d1324$export$2e2bcd8739ae039 extends $d5fc6ac583bc94a1$export$16fa2f45be04daa8 {
    getInitialState(props = this.props) {
        return {
            skin: $642db0546df88ad7$export$2e2bcd8739ae039.get('skin') || props.skin,
            theme: this.initTheme(props.theme)
        };
    }
    componentWillMount() {
        this.observers = [];
        this.dir = $b79b4feb8fc394aa$export$dbe3113d60765c1a.rtl ? 'rtl' : 'ltr';
        this.refs = {
            menu: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
            navigation: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
            scroll: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
            search: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
            searchInput: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
            skinToneButton: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
            skinToneRadio: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43()
        };
        this.initGrid();
        if (this.props.stickySearch == false && this.props.searchPosition == 'sticky') {
            console.warn('[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`.');
            this.props.searchPosition = 'static';
        }
    }
    componentDidMount() {
        this.register();
        this.shadowRoot = this.base.parentNode;
        if (this.props.autoFocus) {
            const { searchInput: searchInput  } = this.refs;
            if (searchInput.current) searchInput.current.focus();
        }
    }
    componentWillReceiveProps(nextProps) {
        let initalState = null;
        for(const k in nextProps){
            this.props[k] = nextProps[k];
            if (k === 'custom' || k === 'categories' || k === 'data') this.reset();
            else if (k in this.state) {
                initalState || (initalState = this.getInitialState());
                this.setState({
                    [k]: initalState[k]
                });
            }
        }
    }
    componentWillUnmount() {
        this.unregister();
    }
    reset() {
        $b79b4feb8fc394aa$export$5c8df9d6d1ce7015();
        $b79b4feb8fc394aa$export$2cd8252107eb640b(this.props);
        this.initGrid();
        this.unobserve();
        this.forceUpdate(()=>{
            this.observeCategories();
            this.observeRows();
        });
    }
    register() {
        document.addEventListener('click', this.handleClickOutside);
        this.observe();
    }
    unregister() {
        document.removeEventListener('click', this.handleClickOutside);
        this.unobserve();
    }
    observe() {
        this.observeCategories();
        this.observeRows();
    }
    unobserve() {
        for (const observer of this.observers)observer.disconnect();
    }
    initGrid() {
        const { categories: categories  } = $b79b4feb8fc394aa$export$2d0294657ab35f1b;
        this.refs.categories = new Map();
        const navKey = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.map((category)=>category.id
        ).join(',');
        if (this.navKey && this.navKey != navKey) this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0);
        this.navKey = navKey;
        this.grid = [];
        this.grid.setsize = 0;
        const addRow = (rows, category)=>{
            const row = [];
            row.__categoryId = category.id;
            row.__index = rows.length;
            this.grid.push(row);
            const rowIndex = this.grid.length - 1;
            const rowRef = rowIndex % $1221208eb78d1324$var$Performance.rowsPerRender ? {
            } : $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43();
            rowRef.index = rowIndex;
            rowRef.posinset = this.grid.setsize + 1;
            rows.push(rowRef);
            return row;
        };
        for (let category1 of categories){
            const rows = [];
            let row = addRow(rows, category1);
            for (let emoji of category1.emojis){
                if (row.length == this.props.perLine) row = addRow(rows, category1);
                this.grid.setsize += 1;
                row.push(emoji);
            }
            this.refs.categories.set(category1.id, {
                root: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                rows: rows
            });
        }
    }
    initTheme(theme) {
        if (theme != 'auto') return theme;
        if (!this.darkMedia) {
            this.darkMedia = matchMedia('(prefers-color-scheme: dark)');
            if (this.darkMedia.media.match(/^not/)) return 'light';
            this.darkMedia.addListener(()=>{
                if (this.props.theme != 'auto') return;
                this.setState({
                    theme: this.darkMedia.matches ? 'dark' : 'light'
                });
            });
        }
        return this.darkMedia.matches ? 'dark' : 'light';
    }
    getEmojiByPos([p1, p2]) {
        const grid = this.state.searchResults || this.grid;
        const emoji = grid[p1] && grid[p1][p2];
        if (!emoji) return;
        return $8f9034744078e207$export$2e2bcd8739ae039.get(emoji);
    }
    observeCategories() {
        const navigation = this.refs.navigation.current;
        if (!navigation) return;
        const visibleCategories = new Map();
        const setFocusedCategory = (categoryId)=>{
            if (categoryId != navigation.state.categoryId) navigation.setState({
                categoryId: categoryId
            });
        };
        const observerOptions = {
            root: this.refs.scroll.current,
            threshold: [
                0,
                1
            ]
        };
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                const id = entry.target.dataset.id;
                visibleCategories.set(id, entry.intersectionRatio);
            }
            const ratios = [
                ...visibleCategories
            ];
            const lastCategory = ratios[ratios.length - 1];
            if (lastCategory[1] == 1) return setFocusedCategory(lastCategory[0]);
            for (const [id, ratio] of ratios)if (ratio) {
                setFocusedCategory(id);
                break;
            }
        }, observerOptions);
        for (const { root: root  } of this.refs.categories.values())observer.observe(root.current);
        this.observers.push(observer);
    }
    observeRows() {
        const visibleRows = {
            ...this.state.visibleRows
        };
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                const index = parseInt(entry.target.dataset.index);
                if (entry.isIntersecting) visibleRows[index] = true;
                else delete visibleRows[index];
            }
            this.setState({
                visibleRows: visibleRows
            });
        }, {
            root: this.refs.scroll.current,
            threshold: '0.1',
            // rootMargin: '0px',
            rootMargin: `${// this.props.emojiButtonSize * (Performance.rowsPerRender + 5)
            this.props.emojiButtonSize * $1221208eb78d1324$var$Performance.rowsPerRender}px 0px ${this.props.emojiButtonSize * $1221208eb78d1324$var$Performance.rowsPerRender}px`
        });
        for (const { rows: rows  } of this.refs.categories.values()){
            for (const row of rows)if (row.current) observer.observe(row.current);
        }
        this.observers.push(observer);
    }
    preventDefault(e) {
        e.preventDefault();
    }
    unfocusSearch() {
        const input = this.refs.searchInput.current;
        if (!input) return;
        input.blur();
    }
    navigate({ e: e , input: input , left: left , right: right , up: up , down: down  }) {
        const grid = this.state.searchResults || this.grid;
        if (!grid.length) return;
        let [p1, p2] = this.state.pos;
        const pos = (()=>{
            if (p1 == 0) {
                if (p2 == 0 && !e.repeat && (left || up)) return null;
            }
            if (p1 == -1) {
                if (!e.repeat && (right || down) && input.selectionStart == input.value.length) return [
                    0,
                    0
                ];
                return null;
            }
            if (left || right) {
                let row = grid[p1];
                const increment = left ? -1 : 1;
                p2 += increment;
                if (!row[p2]) {
                    p1 += increment;
                    row = grid[p1];
                    if (!row) {
                        p1 = left ? 0 : grid.length - 1;
                        p2 = left ? 0 : grid[p1].length - 1;
                        return [
                            p1,
                            p2
                        ];
                    }
                    p2 = left ? row.length - 1 : 0;
                }
                return [
                    p1,
                    p2
                ];
            }
            if (up || down) {
                p1 += up ? -1 : 1;
                const row = grid[p1];
                if (!row) {
                    p1 = up ? 0 : grid.length - 1;
                    p2 = up ? 0 : grid[p1].length - 1;
                    return [
                        p1,
                        p2
                    ];
                }
                if (!row[p2]) p2 = row.length - 1;
                return [
                    p1,
                    p2
                ];
            }
        })();
        if (pos) e.preventDefault();
        else {
            if (this.state.pos[0] > -1) this.setState({
                pos: [
                    -1,
                    -1
                ]
            });
            return;
        }
        this.setState({
            pos: pos,
            keyboard: true
        }, ()=>{
            this.scrollTo({
                row: pos[0]
            });
        });
    }
    scrollTo({ categoryId: categoryId , row: row  }) {
        const grid = this.state.searchResults || this.grid;
        if (!grid.length) return;
        const scroll = this.refs.scroll.current;
        const scrollRect = scroll.getBoundingClientRect();
        let scrollTop = 0;
        if (row >= 0) categoryId = grid[row].__categoryId;
        if (categoryId) {
            const ref = this.refs[categoryId] || this.refs.categories.get(categoryId).root;
            const categoryRect = ref.current.getBoundingClientRect();
            scrollTop = categoryRect.top - (scrollRect.top - scroll.scrollTop) + 1;
        }
        if (row >= 0) {
            if (!row) scrollTop = 0;
            else {
                const rowIndex = grid[row].__index;
                const rowTop = scrollTop + rowIndex * this.props.emojiButtonSize;
                const rowBot = rowTop + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
                if (rowTop < scroll.scrollTop) scrollTop = rowTop;
                else if (rowBot > scroll.scrollTop + scrollRect.height) scrollTop = rowBot - scrollRect.height;
                else return;
            }
        }
        this.ignoreMouse();
        scroll.scrollTop = scrollTop;
    }
    ignoreMouse() {
        this.mouseIsIgnored = true;
        clearTimeout(this.ignoreMouseTimer);
        this.ignoreMouseTimer = setTimeout(()=>{
            delete this.mouseIsIgnored;
        }, 100);
    }
    handleEmojiOver(pos) {
        if (this.mouseIsIgnored || this.state.showSkins) return;
        this.setState({
            pos: pos || [
                -1,
                -1
            ],
            keyboard: false
        });
    }
    handleEmojiClick({ emoji: emoji , pos: pos  }) {
        if (!this.props.onEmojiSelect) return;
        if (!emoji && pos) emoji = this.getEmojiByPos(pos);
        if (emoji) {
            const skin = emoji.skins[this.state.skin - 1] || emoji.skins[0];
            const emojiData = {
                id: emoji.id,
                name: emoji.name,
                native: skin.native,
                unified: skin.unified,
                keywords: emoji.keywords,
                shortcodes: skin.shortcodes || emoji.shortcodes
            };
            if (skin.src) emojiData.src = skin.src;
            if (emoji.aliases && emoji.aliases.length) emojiData.aliases = emoji.aliases;
            if (emoji.emoticons && emoji.emoticons.length) emojiData.emoticons = emoji.emoticons;
            if (this.props.maxFrequentRows) $26c4208b83093c27$export$2e2bcd8739ae039.add(emojiData, this.props);
            this.props.onEmojiSelect(emojiData);
        }
    }
    closeSkins() {
        if (!this.state.showSkins) return;
        this.setState({
            showSkins: null,
            tempSkin: null
        });
        this.base.removeEventListener('click', this.handleBaseClick);
        this.base.removeEventListener('keydown', this.handleBaseKeydown);
    }
    handleSkinMouseOver(tempSkin) {
        this.setState({
            tempSkin: tempSkin
        });
    }
    handleSkinClick(skin) {
        this.ignoreMouse();
        this.closeSkins();
        this.setState({
            skin: skin,
            tempSkin: null
        });
        $642db0546df88ad7$export$2e2bcd8739ae039.set('skin', skin);
    }
    handleSectionClick() {
        if (this.props.autoFocus) {
            const { searchInput: searchInput  } = this.refs;
            if (searchInput.current) searchInput.current.focus();
        }
    }
    renderNav() {
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($14f6fe4cf86a9151$export$2e2bcd8739ae039, {
            ref: this.refs.navigation,
            icons: this.props.icons,
            theme: this.state.theme,
            unfocused: !!this.state.searchResults,
            position: this.props.navPosition,
            onClick: this.handleCategoryClick
        }, this.navKey));
    }
    renderPreview() {
        const emoji = this.getEmojiByPos(this.state.pos);
        const noSearchResults = this.state.searchResults && !this.state.searchResults.length;
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
            id: "preview",
            class: "flex flex-middle",
            dir: this.dir,
            "data-position": this.props.previewPosition,
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    class: "flex flex-middle flex-grow",
                    children: [
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "flex flex-auto flex-middle flex-center",
                            style: {
                                height: this.props.emojiButtonSize,
                                fontSize: this.props.emojiButtonSize
                            },
                            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($77ce92f400311234$export$2e2bcd8739ae039, {
                                emoji: emoji,
                                id: noSearchResults ? this.props.noResultsEmoji || 'cry' : this.props.previewEmoji || (this.props.previewPosition == 'top' ? 'point_down' : 'point_up'),
                                set: this.props.set,
                                size: this.props.emojiButtonSize,
                                skin: this.state.tempSkin || this.state.skin,
                                spritesheet: true,
                                getSpritesheetURL: this.props.getSpritesheetURL
                            })
                        }),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: `margin-${this.dir[0]}`,
                            children: emoji ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                class: `padding-${this.dir[2]} align-${this.dir[0]}`,
                                children: [
                                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis",
                                        style: {
                                            fontSize: '1.1em'
                                        },
                                        children: emoji.name
                                    }),
                                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis color-c",
                                        style: {
                                            fontSize: '.9em'
                                        },
                                        children: emoji.skins[0].shortcodes
                                    })
                                ]
                            }) : noSearchResults ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                class: `padding-${this.dir[2]} align-${this.dir[0]}`,
                                children: [
                                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis",
                                        style: {
                                            fontSize: '1.1em'
                                        },
                                        children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.search_no_results_1
                                    }),
                                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis color-c",
                                        style: {
                                            fontSize: '.9em'
                                        },
                                        children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.search_no_results_2
                                    })
                                ]
                            }) : /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                class: "color-c",
                                style: {
                                    fontSize: 21
                                },
                                children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.pick
                            })
                        })
                    ]
                }),
                !emoji && this.props.skinTonePosition == 'preview' && this.renderSkinToneButton()
            ]
        }));
    }
    renderEmojiButton(emoji, { pos: pos , posinset: posinset , grid: grid  }) {
        const size = this.props.emojiButtonSize;
        const skin = this.state.tempSkin || this.state.skin;
        const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
        const native = emojiSkin.native;
        const selected = $98790827c4982bdf$export$9cb4719e2e525b7a(this.state.pos, pos);
        const key = pos.concat(emoji.id).join('');
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($e12a0ebddac53324$export$2e2bcd8739ae039, {
            selected: selected,
            skin: skin,
            size: size,
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                "aria-label": native,
                "aria-selected": selected || undefined,
                "aria-posinset": posinset,
                "aria-setsize": grid.setsize,
                "data-keyboard": this.state.keyboard,
                title: this.props.previewPosition == 'none' ? emoji.name : undefined,
                type: "button",
                class: "flex flex-center flex-middle",
                tabindex: "-1",
                onClick: ()=>this.handleEmojiClick({
                        emoji: emoji
                    })
                ,
                onMouseEnter: ()=>this.handleEmojiOver(pos)
                ,
                onMouseLeave: ()=>this.handleEmojiOver()
                ,
                style: {
                    width: this.props.emojiButtonSize,
                    height: this.props.emojiButtonSize,
                    fontSize: this.props.emojiSize,
                    lineHeight: 0
                },
                children: [
                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                        "aria-hidden": "true",
                        class: "background",
                        style: {
                            borderRadius: this.props.emojiButtonRadius,
                            backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(posinset - 1) % this.props.emojiButtonColors.length] : undefined
                        }
                    }),
                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($77ce92f400311234$export$2e2bcd8739ae039, {
                        emoji: emoji,
                        set: this.props.set,
                        size: this.props.emojiSize,
                        skin: skin,
                        spritesheet: true,
                        getSpritesheetURL: this.props.getSpritesheetURL
                    })
                ]
            })
        }, key));
    }
    renderSearch() {
        const renderSkinTone = this.props.previewPosition == 'none' || this.props.skinTonePosition == 'search';
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    class: "spacer"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    class: "flex flex-middle",
                    children: [
                        renderSkinTone && this.dir == 'rtl' && this.renderSkinToneButton(),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "search relative flex-grow",
                            children: [
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("input", {
                                    type: "search",
                                    ref: this.refs.searchInput,
                                    placeholder: $b79b4feb8fc394aa$export$dbe3113d60765c1a.search,
                                    onClick: this.handleSearchClick,
                                    onInput: this.handleSearchInput,
                                    onKeyDown: this.handleSearchKeyDown,
                                    autoComplete: "off"
                                }),
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                                    class: "icon loupe flex",
                                    children: $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.search.loupe
                                }),
                                this.state.searchResults && /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                                    title: "Clear",
                                    "aria-label": "Clear",
                                    type: "button",
                                    class: "icon delete flex",
                                    onClick: this.clearSearch,
                                    onMouseDown: this.preventDefault,
                                    children: $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.search.delete
                                })
                            ]
                        }),
                        renderSkinTone && this.dir == 'ltr' && this.renderSkinToneButton()
                    ]
                })
            ]
        }));
    }
    renderSearchResults() {
        const { searchResults: searchResults  } = this.state;
        if (!searchResults) return null;
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
            class: "category",
            ref: this.refs.search,
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    class: `sticky padding-small align-${this.dir[0]}`,
                    children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories.search
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    children: !searchResults.length ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                        class: `padding-small align-${this.dir[0]}`,
                        children: this.props.onAddCustomEmoji && /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("a", {
                            onClick: this.props.onAddCustomEmoji,
                            children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.add_custom
                        })
                    }) : searchResults.map((row, i)=>{
                        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "flex",
                            children: row.map((emoji, ii)=>{
                                return this.renderEmojiButton(emoji, {
                                    pos: [
                                        i,
                                        ii
                                    ],
                                    posinset: i * this.props.perLine + ii + 1,
                                    grid: searchResults
                                });
                            })
                        }));
                    })
                })
            ]
        }));
    }
    renderCategories() {
        const { categories: categories  } = $b79b4feb8fc394aa$export$2d0294657ab35f1b;
        const hidden = !!this.state.searchResults;
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
            style: {
                visibility: hidden ? 'hidden' : undefined,
                display: hidden ? 'none' : undefined
            },
            children: categories.map((category)=>{
                const { root: root , rows: rows  } = this.refs.categories.get(category.id);
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    "data-id": category.target ? category.target.id : category.id,
                    class: "category",
                    ref: root,
                    children: [
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: `sticky padding-small align-${this.dir[0]}`,
                            children: category.name || $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories[category.id]
                        }),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "relative",
                            style: {
                                height: rows.length * this.props.emojiButtonSize
                            },
                            children: rows.map((row, i)=>{
                                const targetRow = row.index - row.index % $1221208eb78d1324$var$Performance.rowsPerRender;
                                const visible = this.state.visibleRows[targetRow];
                                const ref = 'current' in row ? row : undefined;
                                if (!visible && !ref) return null;
                                const start = i * this.props.perLine;
                                const end = start + this.props.perLine;
                                const emojiIds = category.emojis.slice(start, end);
                                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                    "data-index": row.index,
                                    ref: ref,
                                    class: "flex row",
                                    style: {
                                        top: i * this.props.emojiButtonSize
                                    },
                                    children: visible && emojiIds.map((emojiId, ii)=>{
                                        const emoji = $8f9034744078e207$export$2e2bcd8739ae039.get(emojiId);
                                        return this.renderEmojiButton(emoji, {
                                            pos: [
                                                row.index,
                                                ii
                                            ],
                                            posinset: row.posinset + ii,
                                            grid: this.grid
                                        });
                                    })
                                }, row.index));
                            })
                        })
                    ]
                }));
            })
        }));
    }
    renderSkinToneButton() {
        if (this.props.skinTonePosition == 'none') return null;
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
            class: "flex flex-auto flex-center flex-middle",
            style: {
                position: 'relative',
                width: this.props.emojiButtonSize,
                height: this.props.emojiButtonSize
            },
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                type: "button",
                ref: this.refs.skinToneButton,
                class: "skin-tone-button flex flex-auto flex-center flex-middle",
                "aria-selected": this.state.showSkins ? '' : undefined,
                "aria-label": $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins.choose,
                title: $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins.choose,
                onClick: this.openSkins,
                style: {
                    width: this.props.emojiSize,
                    height: this.props.emojiSize
                },
                children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                    class: `skin-tone skin-tone-${this.state.skin}`
                })
            })
        }));
    }
    renderLiveRegion() {
        const emoji = this.getEmojiByPos(this.state.pos);
        const contents = emoji ? emoji.name : '';
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
            "aria-live": "polite",
            class: "sr-only",
            children: contents
        }));
    }
    renderSkins() {
        const skinToneButton = this.refs.skinToneButton.current;
        const skinToneButtonRect = skinToneButton.getBoundingClientRect();
        const baseRect = this.base.getBoundingClientRect();
        const position = {
        };
        if (this.dir == 'ltr') position.right = baseRect.right - skinToneButtonRect.right - 3;
        else position.left = skinToneButtonRect.left - baseRect.left - 3;
        if (this.props.previewPosition == 'bottom' && this.props.skinTonePosition == 'preview') position.bottom = baseRect.bottom - skinToneButtonRect.top + 6;
        else {
            position.top = skinToneButtonRect.bottom - baseRect.top + 3;
            position.bottom = 'auto';
        }
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
            ref: this.refs.menu,
            role: "radiogroup",
            dir: this.dir,
            "aria-label": $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins.choose,
            class: "menu hidden",
            "data-position": position.top ? 'top' : 'bottom',
            style: position,
            children: [
                ...Array(6).keys()
            ].map((i)=>{
                const skin = i + 1;
                const checked = this.state.skin == skin;
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    children: [
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("input", {
                            type: "radio",
                            name: "skin-tone",
                            value: skin,
                            "aria-label": $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins[skin],
                            ref: checked ? this.refs.skinToneRadio : null,
                            defaultChecked: checked,
                            onChange: ()=>this.handleSkinMouseOver(skin)
                            ,
                            onKeyDown: (e)=>{
                                if (e.code == 'Enter' || e.code == 'Space' || e.code == 'Tab') {
                                    e.preventDefault();
                                    this.handleSkinClick(skin);
                                }
                            }
                        }),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                            "aria-hidden": "true",
                            tabindex: "-1",
                            onClick: ()=>this.handleSkinClick(skin)
                            ,
                            onMouseEnter: ()=>this.handleSkinMouseOver(skin)
                            ,
                            onMouseLeave: ()=>this.handleSkinMouseOver()
                            ,
                            class: "option flex flex-grow flex-middle",
                            children: [
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                                    class: `skin-tone skin-tone-${skin}`
                                }),
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                                    class: "margin-small-lr",
                                    children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins[skin]
                                })
                            ]
                        })
                    ]
                }));
            })
        }));
    }
    render() {
        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("section", {
            id: "root",
            class: "flex flex-column",
            style: {
                width: this.props.perLine * this.props.emojiButtonSize + 28
            },
            "data-emoji-set": this.props.set,
            "data-theme": this.state.theme,
            "data-menu": this.state.showSkins ? '' : undefined,
            onClick: ()=>this.handleSectionClick()
            ,
            children: [
                this.props.previewPosition == 'top' && this.renderPreview(),
                this.props.navPosition == 'top' && this.renderNav(),
                this.props.searchPosition == 'sticky' && /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    class: "padding-lr",
                    children: this.renderSearch()
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    ref: this.refs.scroll,
                    class: "scroll flex-grow padding-lr",
                    children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                        style: {
                            width: this.props.perLine * this.props.emojiButtonSize
                        },
                        children: [
                            this.props.searchPosition == 'static' && this.renderSearch(),
                            this.renderSearchResults(),
                            this.renderCategories(),
                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                class: "spacer"
                            })
                        ]
                    })
                }),
                this.props.navPosition == 'bottom' && this.renderNav(),
                this.props.previewPosition == 'bottom' && this.renderPreview(),
                this.state.showSkins && this.renderSkins(),
                this.renderLiveRegion()
            ]
        }));
    }
    constructor(props){
        super();
        $1459522e281add88$export$2e2bcd8739ae039(this, "handleClickOutside", (e)=>{
            const { element: element  } = this.props;
            if (e.target != element) {
                if (this.state.showSkins) this.closeSkins();
                if (this.props.onClickOutside) this.props.onClickOutside();
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "handleBaseClick", (e)=>{
            if (!this.state.showSkins) return;
            if (!e.target.closest('.menu')) {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.closeSkins();
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "handleBaseKeydown", (e)=>{
            if (!this.state.showSkins) return;
            if (e.key == 'Escape') {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.closeSkins();
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "handleSearchClick", ()=>{
            const emoji = this.getEmojiByPos(this.state.pos);
            if (!emoji) return;
            this.setState({
                pos: [
                    -1,
                    -1
                ]
            });
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "handleSearchInput", async ()=>{
            const input = this.refs.searchInput.current;
            if (!input) return;
            const { value: value  } = input;
            const searchResults = await $8f9034744078e207$export$2e2bcd8739ae039.search(value);
            const afterRender = ()=>{
                if (!this.refs.scroll.current) return;
                this.refs.scroll.current.scrollTop = 0;
            };
            if (!searchResults) return this.setState({
                searchResults: searchResults,
                pos: [
                    -1,
                    -1
                ]
            }, afterRender);
            const pos = input.selectionStart == input.value.length ? [
                0,
                0
            ] : [
                -1,
                -1
            ];
            const grid = [];
            grid.setsize = searchResults.length;
            let row = null;
            for (let emoji of searchResults){
                if (!grid.length || row.length == this.props.perLine) {
                    row = [];
                    row.__categoryId = 'search';
                    row.__index = grid.length;
                    grid.push(row);
                }
                row.push(emoji);
            }
            this.ignoreMouse();
            this.setState({
                searchResults: grid,
                pos: pos
            }, afterRender);
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "handleSearchKeyDown", (e)=>{
            // const specialKey = e.altKey || e.ctrlKey || e.metaKey
            const input = e.currentTarget;
            e.stopImmediatePropagation();
            switch(e.key){
                case 'ArrowLeft':
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        left: true
                    });
                    break;
                case 'ArrowRight':
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        right: true
                    });
                    break;
                case 'ArrowUp':
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        up: true
                    });
                    break;
                case 'ArrowDown':
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        down: true
                    });
                    break;
                case 'Enter':
                    e.preventDefault();
                    this.handleEmojiClick({
                        pos: this.state.pos
                    });
                    break;
                case 'Escape':
                    e.preventDefault();
                    if (this.state.searchResults) this.clearSearch();
                    else this.unfocusSearch();
                    break;
                default:
                    break;
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "clearSearch", ()=>{
            const input = this.refs.searchInput.current;
            if (!input) return;
            input.value = '';
            input.focus();
            this.handleSearchInput();
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "handleCategoryClick", ({ category: category , i: i  })=>{
            this.scrollTo(i == 0 ? {
                row: -1
            } : {
                categoryId: category.id
            });
        });
        $1459522e281add88$export$2e2bcd8739ae039(this, "openSkins", (e)=>{
            const { currentTarget: currentTarget  } = e;
            const rect = currentTarget.getBoundingClientRect();
            this.setState({
                showSkins: rect
            }, async ()=>{
                // Firefox requires 2 frames for the transition to consistenly work
                await $98790827c4982bdf$export$e772c8ff12451969(2);
                const menu = this.refs.menu.current;
                if (!menu) return;
                menu.classList.remove('hidden');
                this.refs.skinToneRadio.current.focus();
                this.base.addEventListener('click', this.handleBaseClick, true);
                this.base.addEventListener('keydown', this.handleBaseKeydown, true);
            });
        });
        this.state = {
            pos: [
                -1,
                -1
            ],
            visibleRows: {
                0: true
            },
            ...this.getInitialState(props)
        };
    }
}









class $7be3f6ba01507d21$export$2e2bcd8739ae039 extends $327e158bf6bab5e8$export$2e2bcd8739ae039 {
    async connectedCallback() {
        const props = $b79b4feb8fc394aa$export$75fe5f91d452f94b(this.props, $6191713a0c89d01b$export$2e2bcd8739ae039, this);
        props.element = this;
        props.ref = (component)=>{
            this.component = component;
        };
        await $b79b4feb8fc394aa$export$2cd8252107eb640b(props);
        $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($1221208eb78d1324$export$2e2bcd8739ae039, {
            ...props
        }), this.shadowRoot);
    }
    disconnectedCallback() {
        if (this.component) this.component.unregister();
    }
    constructor(props){
        super(props, {
            styles: (/*@__PURE__*/$parcel$interopDefault($a054c16aa3011bcd$exports))
        });
    }
}
$1459522e281add88$export$2e2bcd8739ae039($7be3f6ba01507d21$export$2e2bcd8739ae039, "Props", $6191713a0c89d01b$export$2e2bcd8739ae039);
if (typeof customElements !== 'undefined' && !customElements.get('em-emoji-picker')) customElements.define('em-emoji-picker', $7be3f6ba01507d21$export$2e2bcd8739ae039);


var $a054c16aa3011bcd$exports = {};
$a054c16aa3011bcd$exports = ":host {\n  display: flex;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  --font-size: 15px;\n  --shadow-color: 0deg 0% 0%;\n  --shadow:\n    0.3px 0.5px 2.7px hsl(var(--shadow-color) / 0.14),\n    0.4px 0.8px 1px -3.2px hsl(var(--shadow-color) / 0.14),\n    1px 2px 2.5px -4.5px hsl(var(--shadow-color) / 0.14);\n}\n\n[data-theme=light] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme=dark] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, .0, .2, 1);\n  position: relative;\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*, *:before, *:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: 0 0 auto;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: 1 1 auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-r {\n  margin-right: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.align-l {\n  text-align: left;\n}\n\n.align-r {\n  text-align: right;\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sr-only {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n.scroll {\n  overflow: auto;\n  overflow-x: hidden;\n  padding-right: 0;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: -1px;\n  font-weight: 500;\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size) - 1px);\n}\n\n.search input[type=search] {\n  display: block;\n  border: 0;\n  outline: 0;\n  width: 100%;\n  padding: 10px 2em 10px 2.2em;\n  border-radius: 10px;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n}\n\n.search input[type=search]::-moz-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]::placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search], .search input[type=search]::-webkit-search-decoration, .search input[type=search]::-webkit-search-cancel-button, .search input[type=search]::-webkit-search-results-button, .search input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n          appearance: none;\n}\n\n.search input[type=search]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, 0.2);\n}\n\n.search .icon {\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  color: rgba(var(--em-rgb-color), 0.7);\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  left: 0.7em;\n  pointer-events: none;\n}\n\n.search .delete {\n  right: 0.7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  border: 0;\n  background-color: transparent;\n}\n\n#nav {\n  z-index: 2;\n  position: relative;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav .bar {\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  border-radius: 3px 3px 0 0;\n  transition: transform var(--duration) var(--easing);\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  position: relative;\n  padding: calc(var(--padding) + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n}\n\n#nav:before, #preview:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\n\n#nav[data-position=top]:before, #preview[data-position=top]:before {\n  top: 100%;\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n}\n\n#nav[data-position=bottom]:before, #preview[data-position=bottom]:before {\n  bottom: 100%;\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n}\n\n.category button {\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0ms;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.skin-tone-button {\n  border-radius: 100%;\n  border: 1px solid transparent;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(0.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  border-left-width: 0;\n  border-right-width: 0;\n  border-top-color: rgba(0, 0, 0, 0.05);\n  border-bottom-color: transparent;\n  background-color: var(--em-color-border);\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(0.9);\n}\n\n.menu {\n  z-index: 2;\n  position: absolute;\n  white-space: nowrap;\n  padding: 4px;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position=bottom] {\n  transform-origin: bottom right;\n}\n\n.menu[data-position=bottom].hidden {\n  transform: scale(0.9) rotate(-3deg) translateY(5%);\n}\n\n.menu[data-position=top] {\n  transform-origin: top right;\n}\n\n.menu[data-position=top].hidden {\n  transform: scale(0.9) rotate(3deg) translateY(-5%);\n}\n\n.menu input[type=radio] {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.menu input[type=radio]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  padding: 4px 6px;\n  border-radius: 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  mix-blend-mode: overlay;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-emoji-set=twitter] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.5);\n  box-shadow: none;\n}\n\n[data-emoji-set=twitter] .skin-tone-1 {\n  background-color: #FADE72;\n}\n\n[data-emoji-set=twitter] .skin-tone-2 {\n  background-color: #F3DFD0;\n}\n\n[data-emoji-set=twitter] .skin-tone-3 {\n  background-color: #EED3A8;\n}\n\n[data-emoji-set=twitter] .skin-tone-4 {\n  background-color: #CFAD8D;\n}\n\n[data-emoji-set=twitter] .skin-tone-5 {\n  background-color: #A8805D;\n}\n\n[data-emoji-set=twitter] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set=google] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.4);\n}\n\n[data-emoji-set=google] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=google] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=google] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=google] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=google] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=google] .skin-tone-6 {\n  background-color: #61493F;\n}\n\n[data-emoji-set=facebook] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set=facebook] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=facebook] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=facebook] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=facebook] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=facebook] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=facebook] .skin-tone-6 {\n  background-color: #61493F;\n}\n";









//# sourceMappingURL=main.js.map
