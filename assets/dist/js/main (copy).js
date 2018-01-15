/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
// # sourceMappingURL=jquery-3.2.1.min.map
*/
(function (e, t) {
    var n, r, i = typeof t,
        o = e.document,
        a = e.location,
        s = e.jQuery,
        u = e.$,
        l = {},
        c = [],
        p = "1.9.1",
        f = c.concat,
        d = c.push,
        h = c.slice,
        g = c.indexOf,
        m = l.toString,
        y = l.hasOwnProperty,
        v = p.trim,
        b = function (e, t) {
            return new b.fn.init(e, t, r)
        },
        x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        j = /^-ms-/,
        D = /-([\da-z])/gi,
        L = function (e, t) {
            return t.toUpperCase()
        },
        H = function (e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
        },
        q = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
        };
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function (e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
                        for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = o, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return h.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return b.each(this, e, t)
        },
        ready: function (e) {
            return b.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, b.extend({
        noConflict: function (t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === b.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || y.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        },
        noop: function () { },
        globalEval: function (t) {
            t && b.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(j, "ms-").replace(D, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: v && !v.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : v.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (g) return g.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return f.apply([], s)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(h.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++ , i) : t
        },
        access: function (e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) b.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(b(e), n)
            })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function () {
            return (new Date).getTime()
        }
    }), b.ready.promise = function (t) {
        if (!n)
            if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
            else {
                o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
                var r = !1;
                try {
                    r = null == e.frameElement && o.documentElement
                } catch (i) { }
                r && r.doScroll && function a() {
                    if (!b.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(a, 50)
                        }
                        q(), b.ready()
                    }
                }()
            }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};

    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    b.Callbacks = function (e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [],
            l = !e.once && [],
            c = function (t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
            },
            p = {
                add: function () {
                    if (u) {
                        var t = u.length;
                        (function i(t) {
                            b.each(t, function (t, n) {
                                var r = b.type(n);
                                "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = u.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function () {
                    return u && b.each(arguments, function (e, t) {
                        var r;
                        while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o-- , a >= r && a--)
                    }), this
                },
                has: function (e) {
                    return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], this
                },
                disable: function () {
                    return u = l = r = t, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return l = t, r || p.disable(), this
                },
                locked: function () {
                    return !l
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    }, b.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                ["notify", "progress", b.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return b.Deferred(function (n) {
                            b.each(t, function (t, o) {
                                var a = o[0],
                                    s = b.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? b.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, b.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = h.call(arguments),
                r = n.length,
                i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : b.Deferred(),
                a = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, u, l;
            if (r > 1)
                for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n), o.promise()
        }
    }), b.support = function () {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: l.selected,
            enctype: !!o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
        }), n = s = u = l = r = a = null, t
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;

    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                p = l ? b.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                s = a ? b.cache : e,
                u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o)) return
                } (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
        },
        data: function (e, t, n) {
            return P(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0],
                a = 0,
                s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                b.data(this, e)
            }) : b.access(this, function (n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    });

    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) { }
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function $(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    b.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t),
                a = function () {
                    b.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = b.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++ , r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g,
        U = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        G = /^(?:checked|selected)$/i,
        Q = b.support.getSetAttribute,
        K = b.support.input;
    b.fn.extend({
        attr: function (e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = b.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) { }
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = b.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var o, a = 0,
                        s = b(this),
                        u = t,
                        l = e.match(w) || [];
                    while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
                } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
            }
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function () {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(w);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), z = {
        get: function (e, n) {
            var r = b.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, K && Q || (b.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
        }
    }), Q || (I = b.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: I.get,
        set: function (e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function (e, t) {
        b.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }
    b.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && b.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [""], l = t.length;
                while (l--)
                    if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount-- , p.remove && p.remove.call(e, a));
                        u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, a) {
            var s, u, l, c, p, f, d, h = [i || o],
                g = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u], f && (i[u] = null), b.event.triggered = g;
                    try {
                        i[g]()
                    } catch (v) { }
                    b.event.triggered = t, f && (i[u] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [],
                u = h.call(arguments),
                l = (b._data(this, "events") || {})[e.type] || [],
                c = b.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function (e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type,
                a = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
            while (t--) n = r[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, a, s = n.button,
                    u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function () {
                    if (this !== o.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, b.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, b.Event = function (e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.defaultPrevented && e.defaultPrevented() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
    }, b.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
            })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                b.event.simulate(t, e.target, b.event.fix(e), !0)
            };
        b.event.special[t] = {
            setup: function () {
                0 === n++ && o.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return b().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () {
                b.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                b.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }),
        function (e, t) {
            var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
                w = e.document,
                T = {},
                N = 0,
                C = 0,
                k = it(),
                E = it(),
                S = it(),
                A = typeof t,
                j = 1 << 31,
                D = [],
                L = D.pop,
                H = D.push,
                q = D.slice,
                M = D.indexOf || function (e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                _ = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                O = F.replace("w", "w#"),
                B = "([*^$|!~]?=)",
                P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
                R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
                W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                $ = RegExp("^" + _ + "*," + _ + "*"),
                I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
                z = RegExp(R),
                X = RegExp("^" + O + "$"),
                U = {
                    ID: RegExp("^#(" + F + ")"),
                    CLASS: RegExp("^\\.(" + F + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + P),
                    PSEUDO: RegExp("^" + R),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                    needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /[\x20\t\r\n\f]*[+~]/,
                Y = /^[^{]+\{\s*\[native code/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                G = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                K = /'|\\/g,
                Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                tt = function (e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                q.call(w.documentElement.childNodes, 0)[0].nodeType
            } catch (nt) {
                q = function (e) {
                    var t, n = [];
                    while (t = this[e++]) n.push(t);
                    return n
                }
            }

            function rt(e) {
                return Y.test(e + "")
            }

            function it() {
                var e, t = [];
                return e = function (n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function ot(e) {
                return e[x] = !0, e
            }

            function at(e) {
                var t = p.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function st(e, t, n, r) {
                var i, o, a, s, u, l, f, g, m, v;
                if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!d && !r) {
                    if (i = J.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                            if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                        }
                    if (T.qsa && !h.test(e)) {
                        if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                            while (u--) l[u] = g + dt(l[u]);
                            m = V.test(e) && t.parentNode || t, v = l.join(",")
                        }
                        if (v) try {
                            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                        } catch (b) { } finally {
                                f || t.removeAttribute("id")
                            }
                    }
                }
                return wt(e.replace(W, "$1"), t, n, r)
            }
            a = st.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, c = st.setDocument = function (e) {
                var n = e ? e.ownerDocument || e : w;
                return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), T.attributes = at(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), T.getByClassName = at(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), T.getByName = at(function (e) {
                    e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                    return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
                }), i.attrHandle = at(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                        href: function (e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function (e) {
                            return e.getAttribute("type")
                        }
                    }, T.getIdNotName ? (i.find.ID = function (e, t) {
                        if (typeof t.getElementById !== A && !d) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, i.filter.ID = function (e) {
                        var t = e.replace(et, tt);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (i.find.ID = function (e, n) {
                        if (typeof n.getElementById !== A && !d) {
                            var r = n.getElementById(e);
                            return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                        }
                    }, i.filter.ID = function (e) {
                        var t = e.replace(et, tt);
                        return function (e) {
                            var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), i.find.TAG = T.tagNameNoComments ? function (e, n) {
                        return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                    } : function (e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            while (n = o[i++]) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, i.find.NAME = T.getByName && function (e, n) {
                        return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
                    }, i.find.CLASS = T.getByClassName && function (e, n) {
                        return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
                    }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
                    }), at(function (e) {
                        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                    })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
                        T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
                    }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, v = f.compareDocumentPosition ? function (e, t) {
                        var r;
                        return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function (e, t) {
                        var r, i = 0,
                            o = e.parentNode,
                            a = t.parentNode,
                            s = [e],
                            l = [t];
                        if (e === t) return u = !0, 0;
                        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                        if (o === a) return ut(e, t);
                        r = e;
                        while (r = r.parentNode) s.unshift(r);
                        r = t;
                        while (r = r.parentNode) l.unshift(r);
                        while (s[i] === l[i]) i++;
                        return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                    }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
            }, st.matches = function (e, t) {
                return st(e, null, null, t)
            }, st.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                    var n = m.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) { }
                return st(t, p, null, [e]).length > 0
            }, st.contains = function (e, t) {
                return (e.ownerDocument || e) !== p && c(e), y(e, t)
            }, st.attr = function (e, t) {
                var n;
                return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, st.error = function (e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, st.uniqueSort = function (e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                if (u = !T.detectDuplicates, e.sort(v), u) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            };

            function ut(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function lt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function ct(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function pt(e) {
                return ot(function (t) {
                    return t = +t, ot(function (n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            o = st.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += o(t);
                return n
            }, i = st.selectors = {
                cacheLength: 50,
                createPseudo: ot,
                match: U,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[5] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        return "*" === e ? function () {
                            return !0
                        } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function (e) {
                        var t = k[e + " "];
                        return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = st.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !u && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [N, d, f];
                                            break
                                        }
                                } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                        return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ot(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(W, "$1"));
                        return r[x] ? ot(function (e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: ot(function (e) {
                        return function (t) {
                            return st(e, t).length > 0
                        }
                    }),
                    contains: ot(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: ot(function (e) {
                        return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === f
                    },
                    focus: function (e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function (e) {
                        return Q.test(e.nodeName)
                    },
                    input: function (e) {
                        return G.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: pt(function () {
                        return [0]
                    }),
                    last: pt(function (e, t) {
                        return [t - 1]
                    }),
                    eq: pt(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: pt(function (e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: pt(function (e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: pt(function (e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: pt(function (e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (n in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[n] = lt(n);
            for (n in {
                submit: !0,
                reset: !0
            }) i.pseudos[n] = ct(n);

            function ft(e, t) {
                var n, r, o, a, s, u, l, c = E[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, u = [], l = i.preFilter;
                while (s) {
                    (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), s = s.slice(n.length));
                    for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
            }

            function dt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function ht(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    a = C++;
                return t.first ? function (t, n, r) {
                    while (t = t[i])
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function (t, n, s) {
                    var u, l, c, p = N + " " + a;
                    if (s) {
                        while (t = t[i])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[i])
                            if (1 === t.nodeType || o)
                                if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                    if ((u = l[1]) === !0 || u === r) return u === !0
                                } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
                }
            }

            function gt(e) {
                return e.length > 1 ? function (t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function mt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    u = e.length,
                    l = null != t;
                for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function yt(e, t, n, r, i, o) {
                return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) {
                    var l, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : mt(g, f, e, s, u),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, u), r) {
                        l = mt(y, d), r(l, [], s, u), c = l.length;
                        while (c--) (p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                l = [], c = y.length;
                                while (c--) (p = y[c]) && l.push(m[c] = p);
                                i(null, y = [], l, u)
                            }
                            c = y.length;
                            while (c--) (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                        }
                    } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                })
            }

            function vt(e) {
                var t, n, r, o = e.length,
                    a = i.relative[e[0].type],
                    s = a || i.relative[" "],
                    u = a ? 1 : 0,
                    c = ht(function (e) {
                        return e === t
                    }, s, !0),
                    p = ht(function (e) {
                        return M.call(t, e) > -1
                    }, s, !0),
                    f = [function (e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; o > u; u++)
                    if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
                    else {
                        if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                            for (r = ++u; o > r; r++)
                                if (i.relative[e[r].type]) break;
                            return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                        }
                        f.push(n)
                    }
                return gt(f)
            }

            function bt(e, t) {
                var n = 0,
                    o = t.length > 0,
                    a = e.length > 0,
                    s = function (s, u, c, f, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            T = l,
                            C = s || a && i.find.TAG("*", d && u.parentNode || u),
                            k = N += null == T ? 1 : Math.random() || .1;
                        for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, u, c)) {
                                        f.push(h);
                                        break
                                    }
                                w && (N = k, r = ++n)
                            }
                            o && ((h = !m && h) && v-- , s && x.push(h))
                        }
                        if (v += b, o && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, u, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = L.call(f));
                                y = mt(y)
                            }
                            H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                        }
                        return w && (N = k, l = T), x
                    };
                return o ? ot(s) : s
            }
            s = st.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = ft(e)), n = t.length;
                    while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                    o = S(e, bt(i, r))
                }
                return o
            };

            function xt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) st(e, t[r], n);
                return n
            }

            function wt(e, t, n, r) {
                var o, a, u, l, c, p = ft(e);
                if (!r && 1 === p.length) {
                    if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                        if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                        e = e.slice(a.shift().value.length)
                    }
                    o = U.needsContext.test(e) ? 0 : a.length;
                    while (o--) {
                        if (u = a[o], i.relative[l = u.type]) break;
                        if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                            if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                            break
                        }
                    }
                }
                return s(e, p)(r, t, d, n, V.test(e)), n
            }
            i.pseudos.nth = i.pseudos.eq;

            function Tt() { }
            i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
        }(e);
    var at = /Until$/,
        st = /^(?:parents|prev(?:Until|All))/,
        ut = /^.[^:#\[\.,]*$/,
        lt = b.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack;

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function (e) {
            return pt(e, "nextSibling")
        },
        prev: function (e) {
            return pt(e, "previousSibling")
        },
        nextAll: function (e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return b.sibling(e.firstChild)
        },
        contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function (e, t) {
        b.fn[e] = function (n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function (e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Nt = /^(?:checkbox|radio)$/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(o),
        Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
        text: function (e) {
            return b.access(this, function (e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return b.isFunction(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = b.isFunction(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) { }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0,
                p = this.length,
                d = this,
                h = p - 1,
                g = e[0],
                m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
                var o = d.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                l = i = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e),
                a = b._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }

    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                o = b(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ot(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }

    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
                else _t(e, o);
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                        while (i--) s = s.lastChild;
                        if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                            o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                            while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                        }
                        b.merge(d, s.childNodes), s.textContent = "";
                        while (s.firstChild) s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else d.push(t.createTextNode(o));
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function (e, t) {
            var n, r, o, a, s = 0,
                u = b.expando,
                l = b.cache,
                p = b.support.deleteExpando,
                f = b.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                    l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
                }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + x + ")(.*)$", "i"),
        Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + x + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    b.fn.extend({
        css: function (e, n) {
            return b.access(this, function (e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n),
                    l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) { }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : o.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = o,
            n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
    }

    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }
    b.each(["height", "width"], function (e, n) {
        b.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
            b.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function (e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (b.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: n.replace(fn, "\r\n")
                    }
            }).get()
        }
    }), b.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, yn, vn = b.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Cn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = b.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }
    b.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function (e, n) {
        b[n] = function (e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                h = b.Deferred(),
                g = b.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                x = 0,
                T = "canceled",
                N = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else N.always(e[N.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return l && l.abort(t), k(0, t), this
                    }
                };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
            T = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) N[i](p[i]);
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    N.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, l.send(y, k)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function (e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        }
    });

    function _n(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function Fn(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + l + " to " + r
                            }
                        }
                }
                l = r
            }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var On = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || b.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function () {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) { }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) { }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function (e, t) {
                var n, r, i = this.createTween(e, t),
                    o = Yn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = b.css(i.elem, e, !0) || n || 1;
                        do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function (t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]),
                i = 0,
                o = r.length;
            for (; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = b.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    a = 0,
                    u = l.tweens.length;
                for (; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(l, e, c, l.opts)) return r;
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = o)
            } else t[r] = o
    }
    b.Animation = b.extend(er, {
        tweener: function (e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () {
            c.unqueued || p()
        }), c.unqueued++ , f.always(function () {
            f.always(function () {
                c.unqueued-- , b.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (a = t[i], Vn.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () {
                b(e).hide()
            }), f.done(function () {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) b.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = b.isEmptyObject(e),
                o = b.speed(t, n, r),
                a = function () {
                    var t = er(this, b.extend({}, e), o);
                    a.finish = function () {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = b.timers,
                    a = b._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = b.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
            height: e
        },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        b.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
        var e, n = b.timers,
            r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function (e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function () {
        clearInterval(Un), Un = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, o = {
            top: 0,
            left: 0
        },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
                o = i.offset(),
                a = b.css(e, "top"),
                s = b.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
                l = {},
                c = {},
                p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
        }
    }, b.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                    r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || o.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function (i) {
            return b.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            b.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function (n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return b
    })
})(window);
/*
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($) {
    var a = {},
        c = "doTimeout",
        d = Array.prototype.slice;
    $[c] = function () {
        return b.apply(window, [0].concat(d.call(arguments)))
    };
    $.fn[c] = function () {
        var f = d.call(arguments),
            e = b.apply(this, [c + f[0]].concat(f));
        return typeof f[0] === "number" || typeof f[1] === "number" ? this : e
    };

    function b(l) {
        var m = this,
            h, k = {},
            g = l ? $.fn : $,
            n = arguments,
            i = 4,
            f = n[1],
            j = n[2],
            p = n[3];
        if (typeof f !== "string") {
            i--;
            f = l = 0;
            j = n[1];
            p = n[2]
        }
        if (l) {
            h = m.eq(0);
            h.data(l, k = h.data(l) || {})
        } else {
            if (f) {
                k = a[f] || (a[f] = {})
            }
        }
        k.id && clearTimeout(k.id);
        delete k.id;

        function e() {
            if (l) {
                h.removeData(l)
            } else {
                if (f) {
                    delete a[f]
                }
            }
        }

        function o() {
            k.id = setTimeout(function () {
                k.fn()
            }, j)
        }
        if (p) {
            k.fn = function (q) {
                if (typeof p === "string") {
                    p = g[p]
                }
                p.apply(m, d.call(n, i)) === true && !q ? o() : e()
            };
            o()
        } else {
            if (k.fn) {
                j === undefined ? e() : k.fn(j === false);
                return true
            } else {
                e()
            }
        }
    }
})(jQuery);
/**
 * jQuery Masonry v2.1.07
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function (a, b, c) {
    "use strict";
    var d = b.event,
        e = b.event.handle ? "handle" : "dispatch",
        f;
    d.special.smartresize = {
        setup: function () {
            b(this).bind("resize", d.special.smartresize.handler)
        },
        teardown: function () {
            b(this).unbind("resize", d.special.smartresize.handler)
        },
        handler: function (a, b) {
            var c = this,
                g = arguments;
            a.type = "smartresize", f && clearTimeout(f), f = setTimeout(function () {
                d[e].apply(c, g)
            }, b === "execAsap" ? 0 : 100)
        }
    }, b.fn.smartresize = function (a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Mason = function (a, c) {
        this.element = b(c), this._create(a), this._init()
    }, b.Mason.settings = {
        isResizable: !0,
        isAnimated: !1,
        animationOptions: {
            queue: !1,
            duration: 500
        },
        gutterWidth: 0,
        isRTL: !1,
        isFitWidth: !1,
        containerStyle: {
            position: "relative"
        }
    }, b.Mason.prototype = {
        _filterFindBricks: function (a) {
            var b = this.options.itemSelector;
            return b ? a.filter(b).add(a.find(b)) : a
        },
        _getBricks: function (a) {
            var b = this._filterFindBricks(a).css({
                position: "absolute"
            }).addClass("masonry-brick");
            return b
        },
        _create: function (c) {
            this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [];
            var d = this.element[0].style;
            this.originalStyle = {
                height: d.height || ""
            };
            var e = this.options.containerStyle;
            for (var f in e) this.originalStyle[f] = d[f] || "";
            this.element.css(e), this.horizontalDirection = this.options.isRTL ? "right" : "left";
            var g = this.element.css("padding-" + this.horizontalDirection),
                h = this.element.css("padding-top");
            this.offset = {
                x: g ? parseInt(g, 10) : 0,
                y: h ? parseInt(h, 10) : 0
            }, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
            var i = this;
            setTimeout(function () {
                i.element.addClass("masonry")
            }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function () {
                i.resize()
            }), this.reloadItems()
        },
        _init: function (a) {
            this._getColumns(), this._reLayout(a)
        },
        option: function (a, c) {
            b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
        },
        layout: function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) this._placeBrick(a[c]);
            var e = {};
            e.height = Math.max.apply(Math, this.colYs);
            if (this.options.isFitWidth) {
                var f = 0;
                c = this.cols;
                while (--c) {
                    if (this.colYs[c] !== 0) break;
                    f++
                }
                e.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth
            }
            this.styleQueue.push({
                $el: this.element,
                style: e
            });
            var g = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                h = this.options.animationOptions,
                i;
            for (c = 0, d = this.styleQueue.length; c < d; c++) i = this.styleQueue[c], i.$el[g](i.style, h);
            this.styleQueue = [], b && b.call(a), this.isLaidOut = !0
        },
        _getColumns: function () {
            var a = this.options.isFitWidth ? this.element.parent() : this.element,
                b = a.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(b) : this.options.columnWidth || this.$bricks.outerWidth(!0) || b, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        },
        _placeBrick: function (a) {
            var c = b(a),
                d, e, f, g, h;
            d = Math.ceil(c.outerWidth(!0) / this.columnWidth), d = Math.min(d, this.cols);
            if (d === 1) f = this.colYs;
            else {
                e = this.cols + 1 - d, f = [];
                for (h = 0; h < e; h++) g = this.colYs.slice(h, h + d), f[h] = Math.max.apply(Math, g)
            }
            var i = Math.min.apply(Math, f),
                j = 0;
            for (var k = 0, l = f.length; k < l; k++)
                if (f[k] === i) {
                    j = k;
                    break
                }
            var m = {
                top: i + this.offset.y
            };
            m[this.horizontalDirection] = this.columnWidth * j + this.offset.x, this.styleQueue.push({
                $el: c,
                style: m
            });
            var n = i + c.outerHeight(!0),
                o = this.cols + 1 - l;
            for (k = 0; k < o; k++) this.colYs[j + k] = n
        },
        resize: function () {
            var a = this.cols;
            this._getColumns(), (this.isFluid || this.cols !== a) && this._reLayout()
        },
        _reLayout: function (a) {
            var b = this.cols;
            this.colYs = [];
            while (b--) this.colYs.push(0);
            this.layout(this.$bricks, a)
        },
        reloadItems: function () {
            this.$bricks = this._getBricks(this.element.children())
        },
        reload: function (a) {
            this.reloadItems(), this._init(a)
        },
        appended: function (a, b, c) {
            if (b) {
                this._filterFindBricks(a).css({
                    top: this.element.height()
                });
                var d = this;
                setTimeout(function () {
                    d._appended(a, c)
                }, 1)
            } else this._appended(a, c)
        },
        _appended: function (a, b) {
            var c = this._getBricks(a);
            this.$bricks = this.$bricks.add(c), this.layout(c, b)
        },
        remove: function (a) {
            this.$bricks = this.$bricks.not(a), a.remove()
        },
        destroy: function () {
            this.$bricks.removeClass("masonry-brick").each(function () {
                this.style.position = "", this.style.top = "", this.style.left = ""
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry")
        }
    }, b.fn.imagesLoaded = function (a) {
        function h() {
            a.call(c, d)
        }

        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }
        var c = this,
            d = c.find("img").add(c.filter("img")),
            e = d.length,
            f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            g = [];
        return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
            var a = this.src;
            this.src = f, this.src = a
        }), c
    };
    var g = function (b) {
        a.console && a.console.error(b)
    };
    b.fn.masonry = function (a) {
        if (typeof a == "string") {
            var c = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var d = b.data(this, "masonry");
                if (!d) {
                    g("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'");
                    return
                }
                if (!b.isFunction(d[a]) || a.charAt(0) === "_") {
                    g("no such method '" + a + "' for masonry instance");
                    return
                }
                d[a].apply(d, c)
            })
        } else this.each(function () {
            var c = b.data(this, "masonry");
            c ? (c.option(a || {}), c._init()) : b.data(this, "masonry", new b.Mason(a, this))
        });
        return this
    }
})(window, jQuery);
/**
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 * 
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne brian(at)cherne(dot)net
 */
(function ($) {
    $.fn.hoverIntent = function (f, g) {
        var cfg = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        cfg = $.extend(cfg, g ? {
            over: f,
            out: g
        } : f);
        var cX, cY, pX, pY;
        var track = function (ev) {
            cX = ev.pageX;
            cY = ev.pageY
        };
        var compare = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev])
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function () {
                    compare(ev, ob)
                }, cfg.interval)
            }
        };
        var delay = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev])
        };
        var handleHover = function (e) {
            var ev = jQuery.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
            }
            if (e.type == "mouseenter") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).bind("mousemove", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        compare(ev, ob)
                    }, cfg.interval)
                }
            } else {
                $(ob).unbind("mousemove", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        delay(ev, ob)
                    }, cfg.timeout)
                }
            }
        };
        return this.bind('mouseenter', handleHover).bind('mouseleave', handleHover)
    }
})(jQuery);
/*
 * Tabber [Formstone Library]
 * @author Ben Plum
 * @version 0.1.0
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function ($) {

    // Public Methods
    var pub = {

        // Destroy
        destroy: function (index) {
            return $(this).each(function (i) {
                $(this).removeClass("active")
                    .off(".tabber")
                    .data("tabber", null);
            });
        },

        // Select tab
        select: function (index) {
            return $(this).each(function (i) {
                var data = $(this).data("tabber");
                _set(data, index);
            });
        }
    };

    // Initalize
    function _init() {
        return $(this).each(_build);
    }

    // Build
    function _build() {
        var $tabber = $(this),
            data = {
                $tabber: $tabber,
                $menu: $tabber.find(".tabber-tabs"),
                $menuItems: $tabber.find(".tabber-tab"),
                $content: $tabber.find(".tabber-contents"),
                $contentItems: $tabber.find(".tabber-content")
            };

        $tabber.addClass("active")
            .on("click.tabber", ".tabber-tab", data, _onClick)
            .data("tabber", data);
    }

    // Handle click
    function _onClick(e) {
        e.preventDefault();
        e.stopPropagation();

        var $target = $(this),
            data = e.data,
            index = data.$menuItems.index($target);

        _set(data, index);
    }

    // Set Active Tab
    function _set(data, index) {
        if (!data.$menuItems.eq(index).hasClass("active")) {
            data.$menuItems.filter(".active").removeClass("active");
            data.$menuItems.eq(index).addClass("active");

            data.$contentItems.filter(".active").removeClass("active");
            data.$contentItems.eq(index).addClass("active");
        }
    }

    $.fn.tabber = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);
/*
 * Boxer [Formstone Library]
 * @author Ben Plum
 * @version 1.6.8
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function (c) {
    function C(a) {
        p.formatter = D;
        return c(this).on("click.boxer", c.extend({}, p, a || {}), t)
    }

    function t(b) {
        b.preventDefault();
        b.stopPropagation();
        var d = c(this),
            h = b.data.$object,
            g = d[0].attributes ? d.attr("href") || "" : "",
            l = g.toLowerCase().split("."),
            l = l[l.length - 1],
            f = d.data("type") || "",
            e = "image" == f || "jpeg" == l || "jpg" == l || "gif" == l || "png" == l || "data:image" == g.substr(0, 10),
            n = -1 < g.indexOf("youtube.com/embed") || -1 < g.indexOf("player.vimeo.com/video"),
            k = "url" == f || !e && !n && "http" == g.substr(0, 4),
            m = "element" == f || !e && !n && !k && "#" == g.substr(0, 1),
            q = "undefined" !== typeof h;
        if (1 > c("#boxer").length && (e || n || k || m || q)) {
            a = {
                $target: d,
                $object: h,
                gallery: {
                    active: !1
                },
                options: b.data
            };
            a.type = e ? "image" : n ? "video" : "element";
            if (e || n) b = a.$target.attr("rel"), "undefined" !== typeof b && !1 !== b && (a.gallery.active = !0, a.gallery.rel = b, a.gallery.$items = c("a[rel= " + a.gallery.rel + "]"), a.gallery.index = a.gallery.$items.index(a.$target), a.gallery.total = a.gallery.$items.length - 1);
            b = '<div id="boxer-overlay" class="' + a.options.customClass + '" style="opacity: 0"></div>';
            b += '<div id="boxer" class="' + a.options.customClass;
            k && (b += " iframe");
            if (m || q) b += " inline";
            b += '" style="opacity: 0;';
            !0 === a.options.fixed && (b += " position: fixed;");
            b += '"><span class="boxer-close">Close</span>';
            b += '<div class="boxer-container" style="opacity: 0; height: ' + a.options.height + "px; width: " + a.options.width + 'px">';
            b += '<div class="boxer-content">';
            if (e || n) b += '<div class="boxer-meta">', a.gallery.active ? (b += '<p class="boxer-position"', 1 > a.gallery.total && (b += ' style="display: none;"'), b += ">", b += '<span class="current">' + (a.gallery.index + 1) + '</span> of <span class="total">' + (a.gallery.total + 1) + "</span>", b += "</p>", b += '<div class="boxer-arrow previous">Previous</div>', b += '<div class="boxer-arrow next">Next</div>', b += '<div class="boxer-caption gallery">') : b += '<div class="boxer-caption">', b += a.options.formatter.apply(c("body"), [a.$target]), b += "</div></div>";
            b += "</div></div></div>";
            c("body").append(b);
            a.$overlay = c("#boxer-overlay");
            a.$boxer = c("#boxer");
            a.$container = a.$boxer.find(".boxer-container");
            a.$content = a.$boxer.find(".boxer-content");
            a.$meta = a.$boxer.find(".boxer-meta");
            a.$position = a.$boxer.find(".boxer-position");
            a.$caption = a.$boxer.find(".boxer-caption");
            a.$arrows = a.$boxer.find(".boxer-arrow");
            a.$animatables = c("#boxer-overlay, #boxer, .boxer-container");
            a.padding = 2 * parseInt(a.$boxer.css("paddingTop"), 10);
            u();
            a.gallery.active && v();
            c(window).on("resize.boxer", E).on("keydown.boxer", F);
            c("body").on("click.boxer", "#boxer-overlay, #boxer .boxer-close", w);
            if (a.gallery.active) a.$boxer.on("click.boxer", ".boxer-arrow", G);
            a.$overlay.stop().animate({
                opacity: a.options.opacity
            }, a.options.duration);
            a.$boxer.stop().animate({
                opacity: 1
            }, a.options.duration, function () {
                if (e) x(g);
                else if (n) y(g);
                else if (k) {
                    var b = g,
                        b = b + (-1 < b.indexOf("?") ? "&" + p.requestKey + "=true" : "?" + p.requestKey + "=true"),
                        b = c('<iframe class="boxer-iframe" src="' + b + '" />');
                    r(b)
                } else m ? (b = c(g).find(">:first-child").clone(), r(b)) : q ? r(a.$object) : c.error("BOXER: '" + g + "' is not valid.")
            })
        }
        if (q) return a.$boxer
    }

    function m() {
        var b = (c(window).width() - a.contentWidth - a.padding) / 2,
            d = 0 >= a.options.top ? (c(window).height() - a.contentHeight - a.padding) / 2 : a.options.top;
        !0 !== a.options.fixed && (d += c(window).scrollTop());
        var h = a.$arrows.outerHeight();
        a.$arrows.css({
            marginTop: (a.contentHeight - a.metaHeight - h) / 2
        });
        a.$boxer.stop().animate({
            left: b,
            top: d
        }, a.options.duration);
        a.$container.show().stop().animate({
            height: a.contentHeight,
            width: a.contentWidth
        }, a.options.duration, function (b) {
            a.$container.stop().animate({
                opacity: 1
            }, a.options.duration);
            a.$boxer.find(".boxer-close").stop().animate({
                opacity: 1
            }, a.options.duration);
            a.options.callback.apply(a.$boxer)
        })
    }

    function w(b) {
        b.preventDefault();
        b.stopPropagation();
        "undefined" !== typeof a.$animatables && (a.$animatables.stop().animate({
            opacity: 0
        }, a.options.duration, function () {
            c(this).remove()
        }), clearTimeout(k), k = null, c(window).off(".boxer"), c("body").off(".boxer"), a.gallery.active && a.$boxer.off(".boxer"), a = {})
    }

    function E() {
        null !== k && (clearTimeout(k), k = null);
        k = setTimeout(function () {
            u()
        }, 10)
    }

    function u() {
        var b = (c(window).width() - a.$boxer.width() - a.padding) / 2,
            d = 0 >= a.options.top ? (c(window).height() - a.$boxer.height() - a.padding) / 2 : a.options.top;
        !0 !== a.options.fixed && (d += c(window).scrollTop());
        a.$boxer.css({
            left: b,
            top: d
        })
    }

    function x(b) {
        a.$image = c("<img />");
        a.$image.one("load.boxer", function () {
            a.originalHeight = a.$image[0].height;
            a.originalWidth = a.$image[0].width;
            a.options.retina && (a.originalHeight /= 2, a.originalWidth /= 2);
            a.$content.prepend(a.$image);
            "" == a.$caption.html() ? a.$caption.hide() : a.$caption.show();
            s(0) && m()
        }).attr("src", b).addClass("boxer-image");
        a.$image[0].complete && a.$image.trigger("load")
    }

    function y(b) {
        a.$videoWrapper = c('<div class="boxer-video-wrapper" />');
        a.$video = c('<iframe class="boxer-video" />');
        a.$video.attr("src", b).addClass("boxer-video").prependTo(a.$videoWrapper);
        a.$content.prepend(a.$videoWrapper);
        z();
        m()
    }

    function D(a) {
        a = a.attr("title");
        return "" != a && void 0 !== a ? '<p class="caption">' + a + "</p>" : ""
    }

    function s(b) {
        var d = 0 == b ? a.originalHeight : a.$image.outerHeight(),
            h = 0 == b ? a.originalWidth : a.$image.outerWidth(),
            g = 0 == b ? 0 : a.metaHeight,
            l = c(window).width() - a.options.margin - a.padding,
            g = c(window).height() - a.options.margin - a.padding - g;
        d < a.options.minHeight && (a.options.minHeight = d);
        h < a.options.minWidth && (a.options.minWidth = h);
        var f = h,
            e = d;
        h > d ? (f = l, e = f * (d / h), e > g && (e = g, f = e * (h / d))) : (e = g, f = e * (h / d), f > l && (f = l, e = f * (d / h)));
        if (f > h || e > d) f = h, e = d;
        if (f < a.options.minWidth || e < a.options.minHeight) h < d ? (f = a.options.minWidth, e = f * (d / h)) : (e = a.options.minHeight, f = e * (h / d));
        a.$content.css({
            width: f
        });
        a.$meta.css({
            width: f
        });
        a.$image.css({
            height: e,
            width: f
        });
        a.metaHeight = a.$meta.outerHeight(!0);
        a.contentWidth = f;
        a.contentHeight = e + a.metaHeight;
        return a.contentHeight > g && 2 > b ? s(b + 1) : !0
    }

    function z() {
        var b = c(window).width() - a.options.margin - a.padding,
            b = a.options.videoWidth > b ? b : a.options.videoWidth,
            d = 0.5625 * b;
        a.$videoWrapper.css({
            height: d,
            width: b
        });
        a.$content.css({
            width: b
        });
        a.$meta.css({
            width: b
        });
        a.metaHeight = a.$meta.outerHeight(!0);
        a.contentWidth = b;
        a.contentHeight = d + a.metaHeight
    }

    function G(b) {
        b.preventDefault();
        b.stopPropagation();
        b = c(this);
        b.hasClass("disabled") || (a.gallery.index += b.hasClass("next") ? 1 : -1, a.gallery.index > a.gallery.total && (a.gallery.index = a.gallery.total), 0 > a.gallery.index && (a.gallery.index = 0), a.$container.stop().animate({
            opacity: 0
        }, a.options.duration, function () {
            "undefined" !== typeof a.$image && a.$image.remove();
            "undefined" !== typeof a.$videoWrapper && a.$videoWrapper.remove();
            a.$target = a.gallery.$items.eq(a.gallery.index);
            a.$caption.html(a.options.formatter.apply(c("body"), [a.$target]));
            a.$position.find(".current").html(a.gallery.index + 1);
            var b = a.$target.attr("href"); - 1 < b.indexOf("youtube.com/embed") || -1 < b.indexOf("player.vimeo.com/video") ? y(b) : x(b);
            v()
        }))
    }

    function v() {
        a.$arrows.removeClass("disabled");
        0 == a.gallery.index && a.$arrows.filter(".previous").addClass("disabled");
        a.gallery.index == a.gallery.total && a.$arrows.filter(".next").addClass("disabled")
    }

    function F(b) {
        !a.gallery.active || 37 != b.keyCode && 39 != b.keyCode ? 27 == b.keyCode && a.$boxer.find(".boxer-close").trigger("click") : (b.preventDefault(), b.stopPropagation(), a.$arrows.filter(37 == b.keyCode ? ".previous" : ".next").trigger("click"))
    }

    function r(b) {
        a.$content.append(b);
        A(b);
        m()
    }

    function A(b) {
        var d = b.outerHeight(!0),
            h = b.outerWidth(!0),
            g = c(window).height() - a.options.margin - a.padding,
            l = c(window).width() - a.options.margin - a.padding,
            f = a.$target.data("height"),
            e = a.$target.data("width"),
            k = 0 > g ? p.minHeight : g;
        b = b.is("iframe");
        a.contentHeight = void 0 != f ? f : b ? g : d;
        a.contentWidth = void 0 != e ? e : b ? l : h;
        a.contentHeight > k ? (a.contentHeight = k, b || a.$content.css({
            overflowY: "scroll"
        })) : a.$content.css({
            overflowY: "auto"
        });
        a.$content.css({
            height: a.contentHeight,
            width: a.contentWidth
        })
    }
    var p = {
        callback: c.noop,
        customClass: "",
        duration: 250,
        fixed: !1,
        formatter: c.noop,
        height: 100,
        margin: 100,
        minHeight: 200,
        minWidth: 200,
        opacity: 0.75,
        retina: !1,
        requestKey: "boxer",
        top: 0,
        videoWidth: 600,
        width: 100
    },
        a = {},
        k = null,
        B = {
            destroy: function () {
                w(c.Event("click"));
                return c(this).off(".boxer")
            },
            resize: function (b, c, h) {
                "undefined" != typeof a.$boxer && ("element" == a.type ? A(a.$content.find(">:first-child")) : "image" == a.type ? s(1) : "video" == a.type && z(), m())
            }
        };
    c.fn.boxer = function (a) {
        return B[a] ? B[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== typeof a && a ? this : C.apply(this, arguments)
    };
    c.boxer = function (a, d) {
        return t(c.Event("click", {
            data: c.extend({
                $object: a
            }, p, d || {})
        }))
    }
})(jQuery);
/*
 * Macaroon Plugin - Simple cookie access
 * @author Ben Plum
 * @version 1.2.2
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function (f) {
    function g(a, d, c) {
        var b = new Date;
        b.setTime(b.getTime() + 864E5 * c.expires);
        b = "; expires=" + b.toGMTString();
        document.cookie = a + "=" + d + b + (null != c.domain ? "; domain=" + c.domain : "") + ("; path=" + c.path)
    }
    var e = {
        domain: null,
        expires: 7,
        path: "/"
    };
    f.macaroon = function (a, d, c) {
        if ("object" == typeof a) return e = jQuery.extend(e, a), null;
        c = jQuery.extend(e, c);
        if ("undefined" != typeof a)
            if ("undefined" != typeof d) null == d ? g(a, "", f.extend({}, e, {
                expires: -1
            })) : g(a, d, c);
            else {
                a: {
                    a += "="; d = document.cookie.split(";");
                    for (c = 0; c < d.length; c++) {
                        for (var b = d[c];
                            " " == b.charAt(0);) b = b.substring(1, b.length);
                        if (0 == b.indexOf(a)) {
                            a = b.substring(a.length, b.length);
                            break a
                        }
                    }
                    a = null
                }
                return a
            }
    }
})(jQuery);
/*
 * Rubberband - Responsive breakpoint events
 * @author Ben Plum
 * @version 2.0.5
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function (e) {
    function m(b) {
        b = b || {};
        for (var a in f) options[a] = b[a] ? e.merge(b[a], options[a]) : options[a];
        options = e.extend(options, b);
        options.minWidth.sort(h);
        options.maxWidth.sort(j);
        options.minHeight.sort(h);
        options.maxHeight.sort(j);
        for (a in f) {
            g[a] = {};
            for (var d in options[a]) b = window.matchMedia("(" + f[a] + ": " + (Infinity == options[a][d] ? 1E5 : options[a][d]) + options.unit + ")"), b.addListener(k), g[a][options[a][d]] = b
        }
        k()
    }

    function k() {
        null != c && (clearTimeout(c), c = null);
        c = setTimeout(function () {
            var b = {},
                a;
            for (a in f)
                for (var d in g[a])
                    if (g[a][d].matches) {
                        var c = "Infinity" == d ? Infinity : parseInt(d, 10);
                        if (-1 < a.indexOf("max")) {
                            if (!b[a] || c < b[a]) b[a] = c
                        } else if (!b[a] || c > b[a]) b[a] = c
                    }
            e(window).trigger("snap", [b])
        }, options.debouce)
    }

    function j(b, a) {
        return a - b
    }

    function h(b, a) {
        return b - a
    }
    var n = void 0 !== window.matchMedia;
    options = {
        debounce: 5,
        minWidth: [0],
        maxWidth: [Infinity],
        minHeight: [0],
        maxHeight: [Infinity],
        unit: "px"
    };
    var g = {},
        f = {
            minWidth: "min-width",
            maxWidth: "max-width",
            minHeight: "min-height",
            maxHeight: "max-height"
        },
        c = null,
        l = {};
    e.rubberband = function (b) {
        if (n) {
            if (l[b]) return l[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" === typeof b || !b) return m.apply(this, arguments)
        }
        return this
    }
})(jQuery);
/*
 * Scout Plugin - Simple Google Analytics Events
 * @author Ben Plum
 * @version 0.0.6
 *
 * Copyright (c) 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 */

if (jQuery) (function (b) {
    function h(a) {
        b.extend(d, a);
        if (!b("body").data("scouting")) {
            b("body").data("scouting", !0).on("click.scout", "[data-scout-event]", j);
            for (var c in b.scout.extensions) b.scout.extensions[c](d.extensions[c] || null)
        }
    }

    function j(a) {
        a.preventDefault();
        var c = b(this),
            e = c.attr("href");
        a = c.data("scout-event").split(",");
        for (var f in a) a[f] = b.trim(a[f]);
        g(a[0], a[1], e || a[2], a[3], a[4]);
        e && !c.data("scout-stop") && setTimeout(function () {
            c.attr("target") ? window.open(e, c.attr("target")) : document.MAIN_URL = e
        }, d.delay)
    }

    function g(a, c, b, f, d) {
        "undefined" == typeof _gaq && (_gaq = []);
        _gaq.push(["_trackEvent", a, c, b, f, d])
    }
    var d = {
        delay: 100,
        extensions: {}
    };
    b.scout = function () {
        arguments.length && "object" !== typeof arguments[0] ? g.apply(this, arguments) : h.apply(this, arguments)
    };
    b.scout.extensions = {}
})(jQuery);
/*
 * Scout - Scroll Plugin - Track user scroll positions
 * @author Ben Plum
 * @version 0.0.3
 *
 * Copyright (c) 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 */

if (jQuery) (function (c) {
    function e() {
        var a = f.scrollTop();
        g = g > a ? g : a;
        null !== b && (clearTimeout(b), b = null);
        b = setTimeout(j, 1E3 * d.time)
    }

    function j() {
        null !== b && (clearTimeout(b), b = null);
        var a = f.width(),
            d = f.height(),
            e = k.outerHeight(!1),
            h = "Mobile";
        460 < a && (h = "Tablet");
        740 < a && (h = "Desktop");
        a = Math.floor(100 * (g / (e - d)));
        0 > a && (a = 0);
        100 < a && (a = 100);
        c.scout("ScrollPosition", "Device:" + h, window.location.pathname, a)
    }
    var d = {
        time: 60
    },
        f = c(window),
        k = c(document),
        b = null,
        g = 0;
    c.scout && (c.scout.extensions.maxScroll = function (a) {
        d = c.extend(d, a);
        f.on("scroll.scout-maxscroll", e).on("unload.scout-maxscroll, pronto.request", j);
        e()
    })
})(jQuery);
/*! formstone v0.8.41 [core.js] 2016-03-13 | MIT License | formstone.it */

var Formstone = window.Formstone = function (a, b, c, d) {
    "use strict";

    function e(a) {
        n.Plugins[a].initialized || (n.Plugins[a].methods._setup.call(c), n.Plugins[a].initialized = !0)
    }

    function f(a, b, c, d) {
        var e, f = {
            raw: {}
        };
        d = d || {};
        for (e in d) d.hasOwnProperty(e) && ("classes" === a ? (f.raw[d[e]] = b + "-" + d[e], f[d[e]] = "." + b + "-" + d[e]) : (f.raw[e] = d[e], f[e] = d[e] + "." + b));
        for (e in c) c.hasOwnProperty(e) && ("classes" === a ? (f.raw[e] = c[e].replace(/{ns}/g, b), f[e] = c[e].replace(/{ns}/g, "." + b)) : (f.raw[e] = c[e].replace(/.{ns}/g, ""), f[e] = c[e].replace(/{ns}/g, b)));
        return f
    }

    function g() {
        var a, b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        },
            d = ["transition", "-webkit-transition"],
            e = {
                transform: "transform",
                MozTransform: "-moz-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                webkitTransform: "-webkit-transform"
            },
            f = "transitionend",
            g = "",
            h = "",
            i = c.createElement("div");
        for (a in b)
            if (b.hasOwnProperty(a) && a in i.style) {
                f = b[a], n.support.transition = !0;
                break
            }
        q.transitionEnd = f + ".{ns}";
        for (a in d)
            if (d.hasOwnProperty(a) && d[a] in i.style) {
                g = d[a];
                break
            }
        n.transition = g;
        for (a in e)
            if (e.hasOwnProperty(a) && e[a] in i.style) {
                n.support.transform = !0, h = e[a];
                break
            }
        n.transform = h
    }

    function h() {
        n.windowWidth = n.$window.width(), n.windowHeight = n.$window.height(), r = m.startTimer(r, s, i)
    }

    function i() {
        for (var a in n.ResizeHandlers) n.ResizeHandlers.hasOwnProperty(a) && n.ResizeHandlers[a].callback.call(b, n.windowWidth, n.windowHeight)
    }

    function j() {
        if (n.support.raf) {
            n.window.requestAnimationFrame(j);
            for (var a in n.RAFHandlers) n.RAFHandlers.hasOwnProperty(a) && n.RAFHandlers[a].callback.call(b)
        }
    }

    function k(a, b) {
        return parseInt(a.priority) - parseInt(b.priority)
    }
    var l = function () {
        this.Version = "0.8.41", this.Plugins = {}, this.DontConflict = !1, this.Conflicts = {
            fn: {}
        }, this.ResizeHandlers = [], this.RAFHandlers = [], this.window = b, this.$window = a(b), this.document = c, this.$document = a(c), this.$body = null, this.windowWidth = 0, this.windowHeight = 0, this.fallbackWidth = 1024, this.fallbackHeight = 768, this.userAgent = b.navigator.userAgent || b.navigator.vendor || b.opera, this.isFirefox = /Firefox/i.test(this.userAgent), this.isChrome = /Chrome/i.test(this.userAgent), this.isSafari = /Safari/i.test(this.userAgent) && !this.isChrome, this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent), this.isIEMobile = /IEMobile/i.test(this.userAgent), this.isFirefoxMobile = this.isFirefox && this.isMobile, this.transform = null, this.transition = null, this.support = {
            file: !!(b.File && b.FileList && b.FileReader),
            history: !!(b.history && b.history.pushState && b.history.replaceState),
            matchMedia: !(!b.matchMedia && !b.msMatchMedia),
            pointer: !!b.PointerEvent,
            raf: !(!b.requestAnimationFrame || !b.cancelAnimationFrame),
            touch: !!("ontouchstart" in b || b.DocumentTouch && c instanceof b.DocumentTouch),
            transition: !1,
            transform: !1
        }
    },
        m = {
            killEvent: function (a, b) {
                try {
                    a.preventDefault(), a.stopPropagation(), b && a.stopImmediatePropagation()
                } catch (c) { }
            },
            startTimer: function (a, b, c, d) {
                return m.clearTimer(a), d ? setInterval(c, b) : setTimeout(c, b)
            },
            clearTimer: function (a, b) {
                a && (b ? clearInterval(a) : clearTimeout(a), a = null)
            },
            sortAsc: function (a, b) {
                return parseInt(a, 10) - parseInt(b, 10)
            },
            sortDesc: function (a, b) {
                return parseInt(b, 10) - parseInt(a, 10)
            },
            decodeEntities: function (a) {
                var b = n.document.createElement("textarea");
                return b.innerHTML = a, b.value
            },
            parseQueryString: function (a) {
                for (var b = {}, c = a.slice(a.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].split("=");
                    b[e[0]] = e[1]
                }
                return b
            }
        },
        n = new l,
        o = a.Deferred(),
        p = {
            base: "{ns}",
            element: "{ns}-element"
        },
        q = {
            namespace: ".{ns}",
            beforeUnload: "beforeunload.{ns}",
            blur: "blur.{ns}",
            change: "change.{ns}",
            click: "click.{ns}",
            dblClick: "dblclick.{ns}",
            drag: "drag.{ns}",
            dragEnd: "dragend.{ns}",
            dragEnter: "dragenter.{ns}",
            dragLeave: "dragleave.{ns}",
            dragOver: "dragover.{ns}",
            dragStart: "dragstart.{ns}",
            drop: "drop.{ns}",
            error: "error.{ns}",
            focus: "focus.{ns}",
            focusIn: "focusin.{ns}",
            focusOut: "focusout.{ns}",
            input: "input.{ns}",
            keyDown: "keydown.{ns}",
            keyPress: "keypress.{ns}",
            keyUp: "keyup.{ns}",
            load: "load.{ns}",
            mouseDown: "mousedown.{ns}",
            mouseEnter: "mouseenter.{ns}",
            mouseLeave: "mouseleave.{ns}",
            mouseMove: "mousemove.{ns}",
            mouseOut: "mouseout.{ns}",
            mouseOver: "mouseover.{ns}",
            mouseUp: "mouseup.{ns}",
            panStart: "panstart.{ns}",
            pan: "pan.{ns}",
            panEnd: "panend.{ns}",
            resize: "resize.{ns}",
            scaleStart: "scalestart.{ns}",
            scaleEnd: "scaleend.{ns}",
            scale: "scale.{ns}",
            scroll: "scroll.{ns}",
            select: "select.{ns}",
            swipe: "swipe.{ns}",
            touchCancel: "touchcancel.{ns}",
            touchEnd: "touchend.{ns}",
            touchLeave: "touchleave.{ns}",
            touchMove: "touchmove.{ns}",
            touchStart: "touchstart.{ns}"
        };
    l.prototype.NoConflict = function () {
        n.DontConflict = !0;
        for (var b in n.Plugins) n.Plugins.hasOwnProperty(b) && (a[b] = n.Conflicts[b], a.fn[b] = n.Conflicts.fn[b])
    }, l.prototype.Plugin = function (c, d) {
        return n.Plugins[c] = function (c, d) {
            function e(b) {
                var e, f, g, i = "object" === a.type(b),
                    j = this,
                    k = a();
                for (b = a.extend(!0, {}, d.defaults || {}, i ? b : {}), f = 0, g = j.length; g > f; f++)
                    if (e = j.eq(f), !h(e)) {
                        var l = "__" + d.guid++,
                            m = d.classes.raw.base + l,
                            n = e.data(c + "-options"),
                            o = a.extend(!0, {
                                $el: e,
                                guid: l,
                                rawGuid: m,
                                dotGuid: "." + m
                            }, b, "object" === a.type(n) ? n : {});
                        e.addClass(d.classes.raw.element).data(s, o), d.methods._construct.apply(e, [o].concat(Array.prototype.slice.call(arguments, i ? 1 : 0))), k = k.add(e)
                    }
                for (f = 0, g = k.length; g > f; f++) e = k.eq(f), d.methods._postConstruct.apply(e, [h(e)]);
                return j
            }

            function g(a) {
                d.functions.iterate.apply(this, [d.methods._destruct].concat(Array.prototype.slice.call(arguments, 1))), this.removeClass(d.classes.raw.element).removeData(s)
            }

            function h(a) {
                return a.data(s)
            }

            function i(b) {
                if (this instanceof a) {
                    var c = d.methods[b];
                    return "object" !== a.type(b) && b ? c && 0 !== b.indexOf("_") ? d.functions.iterate.apply(this, [c].concat(Array.prototype.slice.call(arguments, 1))) : this : e.apply(this, arguments)
                }
            }

            function j(c) {
                var e = d.utilities[c] || d.utilities._initialize || !1;
                return e ? e.apply(b, Array.prototype.slice.call(arguments, "object" === a.type(c) ? 0 : 1)) : void 0
            }

            function l(b) {
                d.defaults = a.extend(!0, d.defaults, b || {})
            }

            function o(b) {
                for (var c = this, d = 0, e = c.length; e > d; d++) {
                    var f = c.eq(d),
                        g = h(f) || {};
                    "undefined" !== a.type(g.$el) && b.apply(f, [g].concat(Array.prototype.slice.call(arguments, 1)))
                }
                return c
            }
            var r = "fs-" + c,
                s = "fs" + c.replace(/(^|\s)([a-z])/g, function (a, b, c) {
                    return b + c.toUpperCase()
                });
            return d.initialized = !1, d.priority = d.priority || 10, d.classes = f("classes", r, p, d.classes), d.events = f("events", c, q, d.events), d.functions = a.extend({
                getData: h,
                iterate: o
            }, m, d.functions), d.methods = a.extend(!0, {
                _setup: a.noop,
                _construct: a.noop,
                _postConstruct: a.noop,
                _destruct: a.noop,
                _resize: !1,
                destroy: g
            }, d.methods), d.utilities = a.extend(!0, {
                _initialize: !1,
                _delegate: !1,
                defaults: l
            }, d.utilities), d.widget && (n.Conflicts.fn[c] = a.fn[c], a.fn[s] = i, n.DontConflict || (a.fn[c] = a.fn[s])), n.Conflicts[c] = a[c], a[s] = d.utilities._delegate || j, n.DontConflict || (a[c] = a[s]), d.namespace = c, d.namespaceClean = s, d.guid = 0, d.methods._resize && (n.ResizeHandlers.push({
                namespace: c,
                priority: d.priority,
                callback: d.methods._resize
            }), n.ResizeHandlers.sort(k)), d.methods._raf && (n.RAFHandlers.push({
                namespace: c,
                priority: d.priority,
                callback: d.methods._raf
            }), n.RAFHandlers.sort(k)), d
        }(c, d), o.then(function () {
            e(c)
        }), n.Plugins[c]
    };
    var r = null,
        s = 20;
    return n.$window.on("resize.fs", h), h(), j(), a(function () {
        n.$body = a("body"), o.resolve(), n.support.nativeMatchMedia = n.support.matchMedia && !a("html").hasClass("no-matchmedia")
    }), q.clickTouchStart = q.click + " " + q.touchStart, g(), n
}(jQuery, window, document);
/*! formstone v0.8.41 [background.js] 2016-03-13 | MIT License | formstone.it */

! function (a, b, c) {
    "use strict";

    function d(a) {
        z.iterate.call(B, s)
    }

    function e() {
        B = a(w.base)
    }

    function f(b) {
        b.youTubeGuid = 0, b.$container = a('<div class="' + x.container + '"></div>').appendTo(this), this.addClass([x.base, b.customClass].join(" "));
        var c = b.source;
        b.source = null, h(b, c, !0), e()
    }

    function g(a) {
        a.$container.remove(), this.removeClass([x.base, a.customClass].join(" ")).off(y.namespace), e()
    }

    function h(b, c, d) {
        if (c !== b.source) {
            if (b.source = c, b.responsive = !1, b.isYouTube = !1, "object" === a.type(c) && "string" === a.type(c.video)) {
                var e = c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
                e && e.length >= 1 && (b.isYouTube = !0, b.videoId = e[1])
            }
            var f = !b.isYouTube && "object" === a.type(c) && (c.hasOwnProperty("mp4") || c.hasOwnProperty("ogg") || c.hasOwnProperty("webm"));
            if (b.video = b.isYouTube || f, b.playing = !1, b.isYouTube) b.playerReady = !1, b.posterLoaded = !1, l(b, c, d);
            else if ("object" === a.type(c) && c.hasOwnProperty("poster")) k(b, c, d);
            else {
                var g = c;
                if ("object" === a.type(c)) {
                    var h, m = [],
                        n = [];
                    for (h in c) c.hasOwnProperty(h) && n.push(h);
                    n.sort(z.sortAsc);
                    for (h in n) n.hasOwnProperty(h) && m.push({
                        width: parseInt(n[h]),
                        url: c[n[h]],
                        mq: window.matchMedia("(min-width: " + parseInt(n[h]) + "px)")
                    });
                    b.responsive = !0, b.sources = m, g = i(b)
                }
                j(b, g, !1, d)
            }
        } else b.$el.trigger(y.loaded)
    }

    function i(a) {
        var c = a.source;
        if (a.responsive) {
            c = a.sources[0].url;
            for (var d in a.sources) a.sources.hasOwnProperty(d) && (b.support.nativeMatchMedia ? a.sources[d].mq.matches && (c = a.sources[d].url) : a.sources[d].width < b.fallbackWidth && (c = a.sources[d].url))
        }
        return c
    }

    function j(b, c, d, e) {
        var f = [x.media, x.image, e !== !0 ? x.animated : ""].join(" "),
            g = a('<div class="' + f + '" aria-hidden="true"><img alt=""></div>'),
            h = g.find("img"),
            i = c;
        h.one(y.load, function () {
            C && g.addClass(x["native"]).css({
                backgroundImage: "url('" + i + "')"
            }), g.fsTransition({
                property: "opacity"
            }, function () {
                d || m(b)
            }).css({
                opacity: 1
            }), t(b), (!d || e) && b.$el.trigger(y.loaded)
        }).attr("src", i), b.responsive && g.addClass(x.responsive), b.$container.append(g), (h[0].complete || 4 === h[0].readyState) && h.trigger(y.load), b.currentSource = i
    }

    function k(c, d, e) {
        if (c.source && c.source.poster && (j(c, c.source.poster, !0, !0), e = !1), !b.isMobile) {
            var f = [x.media, x.video, e !== !0 ? x.animated : ""].join(" "),
                g = '<div class="' + f + '" aria-hidden="true">';
            g += "<video", c.loop && (g += " loop"), c.mute && (g += " muted"), g += ">", c.source.webm && (g += '<source src="' + c.source.webm + '" type="video/webm" />'), c.source.mp4 && (g += '<source src="' + c.source.mp4 + '" type="video/mp4" />'), c.source.ogg && (g += '<source src="' + c.source.ogg + '" type="video/ogg" />'), g += "</video>", g += "</div>";
            var h = a(g),
                i = h.find("video");
            i.one(y.loadedMetaData, function (a) {
                h.fsTransition({
                    property: "opacity"
                }, function () {
                    m(c)
                }).css({
                    opacity: 1
                }), t(c), c.$el.trigger(y.loaded), c.autoPlay && p(c)
            }), c.$container.append(h)
        }
    }

    function l(c, d, e) {
        if (!c.videoId) {
            var f = d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
            c.videoId = f[1]
        }
        if (c.posterLoaded || (c.source.poster || (c.source.poster = "http://img.youtube.com/vi/" + c.videoId + "/0.jpg"), c.posterLoaded = !0, j(c, c.source.poster, !0, e), e = !1), !b.isMobile)
            if (a("script[src*='youtube.com/iframe_api']").length || a("head").append('<script src="//www.youtube.com/iframe_api"></script>'), D) {
                var g = c.guid + "_" + c.youTubeGuid++,
                    h = [x.media, x.embed, e !== !0 ? x.animated : ""].join(" "),
                    i = '<div class="' + h + '" aria-hidden="true">';
                i += '<div id="' + g + '"></div>', i += "</div>";
                var k = a(i),
                    l = a.extend(!0, {}, {
                        controls: 0,
                        rel: 0,
                        showinfo: 0,
                        wmode: "transparent",
                        enablejsapi: 1,
                        version: 3,
                        playerapiid: g,
                        loop: c.loop ? 1 : 0,
                        autoplay: 1,
                        origin: A.location.protocol + "//" + A.location.host
                    }, c.youtubeOptions);
                l.autoplay = 1, c.$container.append(k), c.player && (c.oldPlayer = c.player, c.player = null), c.player = new A.YT.Player(g, {
                    videoId: c.videoId,
                    playerVars: l,
                    events: {
                        onReady: function (a) {
                            c.playerReady = !0, c.mute && c.player.mute(), c.autoPlay && c.player.playVideo()
                        },
                        onStateChange: function (a) {
                            c.playing || a.data !== A.YT.PlayerState.PLAYING ? c.loop && c.playing && a.data === A.YT.PlayerState.ENDED && c.player.playVideo() : (c.playing = !0, c.autoPlay || c.player.pauseVideo(), k.fsTransition({
                                property: "opacity"
                            }, function () {
                                m(c)
                            }).css({
                                opacity: 1
                            }), t(c), c.$el.trigger(y.loaded)), c.$el.find(w.embed).addClass(x.ready)
                        },
                        onPlaybackQualityChange: function (a) { },
                        onPlaybackRateChange: function (a) { },
                        onError: function (a) { },
                        onApiChange: function (a) { }
                    }
                }), t(c)
            } else E.push({
                data: c,
                source: d
            })
    }

    function m(a) {
        var b = a.$container.find(w.media);
        b.length >= 1 && (b.not(":last").remove(), a.oldPlayer = null)
    }

    function n(a) {
        var b = a.$container.find(w.media);
        b.length >= 1 && b.fsTransition({
            property: "opacity"
        }, function () {
            b.remove(), delete a.source
        }).css({
            opacity: 0
        })
    }

    function o(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.pauseVideo();
            else {
                var b = a.$container.find("video");
                b.length && b[0].pause()
            }
            a.playing = !1
        }
    }

    function p(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.playVideo();
            else {
                var b = a.$container.find("video");
                b.length && b[0].play()
            }
            a.playing = !0
        }
    }

    function q(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.mute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !0)
            }
            a.playing = !0
        }
        a.mute = !0
    }

    function r(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.unMute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !1)
            }
            a.playing = !0
        }
        a.mute = !1
    }

    function s(a) {
        if (a.responsive) {
            var b = i(a);
            b !== a.currentSource ? j(a, b, !1, !0) : t(a)
        } else t(a)
    }

    function t(a) {
        for (var b = a.$container.find(w.media), c = 0, d = b.length; d > c; c++) {
            var e = b.eq(c),
                f = a.isYouTube ? "iframe" : e.find("video").length ? "video" : "img",
                g = e.find(f);
            if (g.length && ("img" !== f || !C)) {
                var h = a.$el.outerWidth(),
                    i = a.$el.outerHeight(),
                    j = u(a, g);
                a.width = j.width, a.height = j.height, a.left = 0, a.top = 0;
                var k = a.isYouTube ? a.embedRatio : a.width / a.height;
                a.height = i, a.width = a.height * k, a.width < h && (a.width = h, a.height = a.width / k), a.left = -(a.width - h) / 2, a.top = -(a.height - i) / 2, e.css({
                    height: a.height,
                    width: a.width,
                    left: a.left,
                    top: a.top
                })
            }
        }
    }

    function u(b, c) {
        if (b.isYouTube) return {
            height: 500,
            width: 500 / b.embedRatio
        };
        if (c.is("img")) {
            var d = c[0];
            if ("undefined" !== a.type(d.naturalHeight)) return {
                height: d.naturalHeight,
                width: d.naturalWidth
            };
            var e = new Image;
            return e.src = d.src, {
                height: e.height,
                width: e.width
            }
        }
        return {
            height: c[0].videoHeight,
            width: c[0].videoWidth
        }
    }
    var v = b.Plugin("background", {
        widget: !0,
        defaults: {
            autoPlay: !0,
            customClass: "",
            embedRatio: 1.777777,
            loop: !0,
            mute: !0,
            source: null,
            youtubeOptions: {}
        },
        classes: ["container", "media", "animated", "responsive", "native", "fixed", "ready"],
        events: {
            loaded: "loaded",
            ready: "ready",
            loadedMetaData: "loadedmetadata"
        },
        methods: {
            _construct: f,
            _destruct: g,
            _resize: d,
            play: p,
            pause: o,
            mute: q,
            unmute: r,
            resize: t,
            load: h,
            unload: n
        }
    }),
        w = v.classes,
        x = w.raw,
        y = v.events,
        z = v.functions,
        A = b.window,
        B = [],
        C = "backgroundSize" in b.document.documentElement.style,
        D = !1,
        E = [];
    A.onYouTubeIframeAPIReady = function () {
        D = !0;
        for (var a in E) E.hasOwnProperty(a) && l(E[a].data, E[a].source);
        E = []
    }
}(jQuery, Formstone);
/*! formstone v0.8.41 [transition.js] 2016-03-13 | MIT License | formstone.it */

! function (a, b, c) {
    "use strict";

    function d(a, c) {
        if (c) {
            a.$target = this.find(a.target), a.$check = a.target ? a.$target : this, a.callback = c, a.styles = i(a.$check), a.timer = null;
            var d = a.$check.css(b.transition + "-duration"),
                e = parseFloat(d);
            b.support.transition && d && e ? this.on(l.transitionEnd, a, f) : a.timer = m.startTimer(a.timer, 50, function () {
                h(a)
            }, !0)
        }
    }

    function e(a) {
        m.clearTimer(a.timer, !0), this.off(l.namespace)
    }

    function f(b) {
        b.stopPropagation(), b.preventDefault();
        var c = b.data,
            d = b.originalEvent,
            e = c.target ? c.$target : c.$el;
        c.property && d.propertyName !== c.property || !a(d.target).is(e) || g(c)
    }

    function g(a) {
        a.always || a.$el[k.namespaceClean]("destroy"), a.callback.apply(a.$el)
    }

    function h(a) {
        var b = i(a.$check);
        j(a.styles, b) || g(a), a.styles = b
    }

    function i(b) {
        var c, d, e, f = {};
        if (b instanceof a && (b = b[0]), n.getComputedStyle) {
            c = n.getComputedStyle(b, null);
            for (var g = 0, h = c.length; h > g; g++) d = c[g], e = c.getPropertyValue(d), f[d] = e
        } else if (b.currentStyle) {
            c = b.currentStyle;
            for (d in c) c[d] && (f[d] = c[d])
        }
        return f
    }

    function j(b, c) {
        if (a.type(b) !== a.type(c)) return !1;
        for (var d in b)
            if (!b.hasOwnProperty(d) || !c.hasOwnProperty(d) || b[d] !== c[d]) return !1;
        return !0
    }
    var k = b.Plugin("transition", {
        widget: !0,
        defaults: {
            always: !1,
            property: null,
            target: null
        },
        methods: {
            _construct: d,
            _destruct: e,
            resolve: g
        }
    }),
        l = k.events,
        m = k.functions,
        n = b.window
}(jQuery, Formstone);
// IE HTML5 DOM Fix | http://jdbartlett.github.com/innershiv | WTFPL License
window.innerShiv = (function () {
    var d, r;
    return function (h, u) {
        if (!d) {
            d = document.createElement('div');
            r = document.createDocumentFragment(); /*@cc_on d.style.display = 'none'@*/
        }
        var e = d.cloneNode(true); /*@cc_on document.body.appendChild(e);@*/
        e.innerHTML = h.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); /*@cc_on document.body.removeChild(e);@*/
        if (u === false) {
            return e.childNodes;
        }
        var f = r.cloneNode(true),
            i = e.childNodes.length;
        while (i--) {
            f.appendChild(e.firstChild);
        }
        return f;
    }
}());
// Create Missing Console
if (window.console === undefined) {
    window.console = {
        log: function () { },
        error: function () { },
        warn: function () { }
    };
}

var OLDIE = OLDIE || false;

/* !Web Font Config */
var WebFontConfig = {
    typekit: {
        id: "dqd6cvb"
    },
    active: function () {
        $.doTimeout("web-font-timer", 5, function () {
            $(".sizer").trigger("resize.sizer");
            $(".roller").trigger("resize.roller");
            $(window).trigger("resize");
            HomeFeature._resize();
            HomeMP._resize();
            ExplorePictures._resize();
            Site._mason();

            Site._checkHash();
        });
    }
};


var Site = {
    maxWidth: Infinity,
    maxHeight: Infinity,

    masonryOptions: {
        itemSelector: "article, .sitemap_item",
        isResizable: false
    },

    _init: function () {
        $.scout();
        $.rubberband({
            maxWidth: [1440, 1220, 980, 740, 500, 320],
            maxHeight: [750]
        });

        Header._init();
        Subnavigation._init();
        HomeFeature._init();
        AdmissionsFeature._init();
        AcademicsFeature._init();
        Timeline._init();
        MiddlePath._init();
        Alerts._init();
        MobileSearch.init();

        $.scout();

        // Plugins
        $(".sizer").sizer();
        $(".background_sizer").backgroundSizer();
        $(".roller").roller();
        $(".tabber").tabber();

        $(".lightbox").boxer({
            fixed: true
        });

        $(".scrollto, a[href^='#']").not(".no_scroll, .recent_graduates nav a").click(Site._scrollTo);
        $(".video, .youtube").on("click", ".video_replace", Site._displayVideo);
        $(".grouped_list").on("click", ".title", Site._expandList);

        $(window).one("snap", function () {
            HomeMP._init();
            ExplorePictures._init();
            Site._checkHash();
        })
            .on("snap", Site._respond)
            .on("hashchange", Site._checkHash)
            .on("openbigtreebar closebigtreebar", function () {
                $(window).trigger("resize");
            });

        $(".nav_slider_handle").on("click", Site._toggleNav);

        // ------------------------------
        Site.CustomControls();

        // Recent Graduates
        $(".recent_graduates nav").on("click", "a", function (e) {
            e.preventDefault();
            e.stopPropagation();
            id = $(this).attr("href").substr(1);
            $(".recent_graduates").find("article").hide();
            $("#" + id).show();
            $(".recent_graduates nav > a").removeClass("active");
            $(this).addClass("active");
        });

        // Middle Path Dropdowns
        $(".mp_dropdown .currently").click(function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            p = $(this).parent();
            $(".mp_dropdown").not(p).removeClass("mp_dropdown_active");
            p.toggleClass("mp_dropdown_active");
        });
        $(".mp_dropdown .options a").click(function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            variable_name = $(this).attr("data-var");
            variable_value = $(this).attr("data-value");
            vars = {
                type: $("#mp_dropdown_type").attr("data-value"),
                category: $("#mp_dropdown_category").attr("data-value"),
                source: $("#mp_dropdown_source").attr("data-value"),
                semester: $("#mp_dropdown_semester").attr("data-value")
            };
            vars[variable_name] = variable_value;
            url = $("#mp_filters").attr("data-url") + "?";
            if (vars.type) {
                url += "type=" + vars.type + "&";
            }
            if (vars.category) {
                url += "category=" + vars.category + "&";
            }
            if (vars.source) {
                url += "source=" + vars.source + "&";
            }
            if (vars.semester) {
                url += "semester=" + vars.semester;
            }
            document.MAIN_URL = url;
        });
    },

    _checkHash: function () {
        if (window.location.hash != "") {
            var href = window.location.hash,
                $el = $(href);
            if (!$el.length) {
                $el = $("[name=" + href.substring(1) + "]");
            }
            if ($el.length) {
                var pos = $el.offset(),
                    offset = 20;
                if (href == "#top") {
                    pos.top = 0;
                } else {
                    if (Site.maxHeight > 750 && Site.maxWidth > 980) {
                        offset += $("#header").outerHeight(true);
                    }
                }
                $(window).scrollTop(pos.top - offset);
            }
        } else {
            $(window).scrollTop(0);
        }
    },

    _respond: function (e, point) {
        Site.maxWidth = point.maxWidth;
        Site.maxHeight = point.maxHeight;

        $(".sizer").trigger("resize.sizer");
        $(".roller").trigger("resize.roller");

        HomeMP._respond();
        Subnavigation._respond();
        ExplorePictures._respond();
        Timeline._respond();
        AcademicsFeature._reset();
        HomeFeature._resize();

        MiddlePath._closeRelated();

        Site.$masons.masonry(Site.masonryOptions);

        $("#boxer").boxer("resize");

        $.scout("Window", "Resize:MaxWidth", window.MAIN_URL, Site.maxWidth);
        $.scout("Window", "Resize:MaxHeight", window.MAIN_URL, Site.maxHeight);

        /* Site._closeNav(e); */
    },

    _displayVideo: function (e) {
        e.preventDefault();
        var $target = $(this);

        if (!$target.hasClass("video_active")) {
            $target.parents(".roller").find(".video, .youtube").each(function () {
                Site._removeVideo($(this));
            });
            $iframe = $('<iframe src="' + $target.data("video") + '" frameborder="0" allowfullscreen />');
            $target.addClass("video_active").append($iframe);
            $target.parents(".roller_item, .video_item").addClass("video_is_active");
        }
    },

    _removeVideo: function ($target) {
        $target.removeClass("video_active").find("iframe").remove();
        $target.parents(".roller_item, .video_item").removeClass("video_is_active");
    },

    _mason: function () {
        Site.$masons = $(".masonry");
        Site.$masons.imagesLoaded(function () {
            Site.$masons.masonry(Site.masonryOptions);
        });
    },

    _scrollTo: function (e) {
        var $target = $(this),
            href = $target.attr("href");

        if (href != "#") {
            e.stopPropagation();
            e.preventDefault();
            Site._scrollToElement(href);
        }
    },

    _scrollToElement: function (href) {
        var $el = $(href);

        if (!$el.length) {
            $el = $("[name=" + href.substring(1) + "]");
        }

        if ($el.length) {
            var pos = $el.offset(),
                offset = 20;

            if (href == "#top") {
                pos.top = 0;
            } else {
                if (Site.maxHeight > 750 && Site.maxWidth > 740) {
                    offset += Header.$header.outerHeight(true);
                }
            }

            Site._scrollToPos(pos.top - offset);
        }
    },

    _scrollToPos: function (pos) {
        $("html, body").animate({
            scrollTop: pos
        });
        $(window).on("mousedown DOMMouseScroll mousewheel keyup", Site._clearScroll);
    },

    _clearScroll: function (e) {
        if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
            $("html, body").stop();
            $(window).off("mousedown DOMMouseScroll mousewheel keyup", Site._clearScroll);
        }
    },

    _expandList: function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("expanded");
    },

    // -----------------------------------

    CustomControls: function () {
        // Setup custom checkboxes
        $("form.styled input[type=checkbox]").each(function () {
            if (!$(this).hasClass("custom_control")) {
                this.customControl = new BigTreeCheckbox(this);
                $(this).addClass("custom_control");
            }
        });

        // Setup custom select boxes
        $("form.styled select").each(function () {
            if (!$(this).hasClass("custom_control")) {
                this.customControl = new BigTreeSelect(this);
                $(this).addClass("custom_control");
            }
        });

        // Setup custom file boxes.
        /*
        $("form.styled input[type=file]").each(function() {
        	if (!$(this).hasClass("custom_control")) {
        		this.customControl = new BigTreeFileInput(this);
        		$(this).addClass("custom_control");
        	}
        });
        */

        // Setup custom radio buttons.
        $("form.styled input[type=radio]").each(function () {
            if (!$(this).hasClass("custom_control")) {
                this.customControl = new BigTreeRadioButton(this);
                $(this).addClass("custom_control");
            }
        });
    },

    _toggleNav: function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($("body").hasClass("nav_slider_open")) {
            Site._closeNav(e);
        } else {
            $("body").addClass("nav_slider_open");
            $(".nav_slider_page").one("click", Site._closeNav);
            $(".nav_slider_navigation").off("touchstart click", Site._mobileNavClick);
        }
    },

    _closeNav: function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("body").removeClass("nav_slider_open");
        $(".nav_slider_navigation").on("touchstart click", Site._mobileNavClick);
    },

    _mobileNavClick: function (e) {
        e.preventDefault();
        e.stopPropagation();
    }
};



// !Header
var Header = {
    delay: 100,
    isOver: false,

    _init: function () {
        Header.$header = $("#header");
        Header.$nav = $("nav");

        Header.$nav.on("mouseenter", ".handle", Header._showDropdown)
            .on("mouseleave", Header._hideDropdown)
            .on("mouseleave", ".hoverout", Header._hideDropdown);
    },
    _showDropdown: function () {
        if (Site.maxWidth >= 980) { // DESKTOP ONLY
            var $target = $(this),
                $nav = $target.parents("nav");

            if (!$nav.hasClass("over")) {
                $.doTimeout("header-navigation", 100, $.proxy(Header._doShowDropdown, $target));
            } else {
                Header._doShowDropdown.apply($target);
            }
        }
    },
    _doShowDropdown: function () {
        var $target = $(this),
            $nav = $target.parents("nav");

        $nav.addClass("over").find(".handle").removeClass("active");
        $target.addClass("active");
    },
    _hideDropdown: function () {
        $nav = $(this);

        $nav.find(".handle").removeClass("active");
        $nav.removeClass("over");

        $.doTimeout("header-navigation");
    }
};


// !Subnavigation
var Subnavigation = {
    initialized: false,

    _init: function () {
        Subnavigation.$nav = $(".subnavigation");
        if (Subnavigation.$nav.length) {
            Subnavigation.$handle = Subnavigation.$nav.find(".naver-handle");
            Subnavigation.$wrapper = Subnavigation.$nav.find(".naver-wrapper");
            Subnavigation.$container = Subnavigation.$nav.find(".naver-container");

            Subnavigation.$nav.on("click.sunbavigation", Subnavigation._toggleMobile);

            Subnavigation.initialized = true;
        }
    },
    _respond: function () {
        Subnavigation._closeMobile();
    },
    _toggleMobile: function () {
        if (Subnavigation.initialized) {
            if (Subnavigation.$nav.hasClass("naver-open")) {
                Subnavigation._closeMobile();
            } else {
                Subnavigation.$wrapper.css({
                    height: Subnavigation.$container.outerHeight(true)
                });
                Subnavigation.$nav.addClass("naver-open");
            }
        }
    },
    _closeMobile: function () {
        if (Subnavigation.initialized) {
            Subnavigation.$wrapper.css("height", "");
            Subnavigation.$nav.removeClass("naver-open");
        }
    }
};


// !Home Feature
var HomeFeature = {
    transitionSpeed: 1000,
    bottomEdge: 0,
    minHeight: 300,
    animate: false,
    initialized: false,

    _init: function () {
        HomeFeature.$feature = $("#home_features");
        if (HomeFeature.$feature.length > 0) {

            HomeFeature.$wrapper = $("#feature_wrapper");
            HomeFeature.$viewport = HomeFeature.$feature.find(".viewport");
            HomeFeature.$overlay = HomeFeature.$feature.find(".overlay");
            HomeFeature.$positioner = HomeFeature.$feature.find(".positioner");
            HomeFeature.$articles = HomeFeature.$feature.find(".info");
            HomeFeature.$arrows = HomeFeature.$feature.find(".next, .previous");
            HomeFeature.$first_image = HomeFeature.$feature.find(".active .background_image");


            HomeFeature.controlHeight = 150;

            HomeFeature.index = 0;
            HomeFeature.total = HomeFeature.$articles.length - 1;

            HomeFeature._updateControls();


            $(window).on("scroll.home_feature", HomeFeature._scroll)
                .on("resize.home_feature", HomeFeature._resize);

            HomeFeature.$feature.on("click", ".next, .previous", HomeFeature._advance);


            HomeFeature.initialized = true;
            HomeFeature._resize();


            var background = HomeFeature.$feature.find("article.active").data("background");

            if (Formstone.isMobile) {
                background = HomeFeature.$feature.find("article.active").data("mobile-background");
            }

            HomeFeature.$viewport.background({
                source: background
            });
        }
    },
    _scroll: function () {
        var scrollTop = $(window).scrollTop();

        if (Site.maxWidth >= 1220) { // DESKTOP ONLY
            var diff = scrollTop - HomeFeature.viewportSplit;
            if (Site.maxHeight <= 750) {
                diff -= HomeMP.headerHeight;
            }
            if (diff < 0) {
                HomeFeature.$overlay.css({
                    opacity: (-diff / HomeFeature.viewportSplit)
                });
            } else {
                HomeFeature.$overlay.css({
                    opacity: 0
                });
            }
        } else {
            HomeFeature.$overlay.css({
                opacity: 1
            });
        }

        if (HomeMP.initialized) {
            var edge = HomeMP.$container.outerHeight(true) - Lib.WindowHeight() + HomeMP.headerHeight /*  + 80 */;

            if (Site.maxWidth > 980 && Site.maxHeight <= 750) {
                var top = HomeMP.headerHeight - scrollTop;
                if (scrollTop > HomeMP.headerHeight) {
                    top = 0;
                }
                if (top > HomeMP.headerHeight) {
                    top = HomeMP.headerHeight;
                }
                HomeFeature.$feature.css({
                    top: top
                });
            } else {
                HomeFeature.$feature.css({
                    top: ''
                });
            }


            if (scrollTop >= edge) {
                HomeFeature.$wrapper.addClass("stuck");
            } else {
                HomeFeature.$wrapper.removeClass("stuck");
            }
        }
    },
    _resize: function (e) {
        if (HomeFeature.initialized) {
            var minHeight = 0;
            HomeFeature.$articles.each(function () {
                var h = $(this).outerHeight();
                if (h > minHeight) {
                    minHeight = h;
                }
                var t = (h - HomeFeature.controlHeight) / 2;
                $(this).css({
                    marginTop: -t
                });
            });

            if (Site.maxWidth < 740) {
                HomeFeature.minHeight = minHeight + 100;
                HomeMP.minMargin = minHeight + 100;
            } else {
                if (minHeight + 175 < 400) {
                    HomeFeature.minHeight = 400;
                    HomeMP.minMargin = 400;
                } else {
                    HomeFeature.minHeight = minHeight + 175;
                    HomeMP.minMargin = minHeight + 185;
                }
            }

            if (Site.maxWidth > 980) {
                var featureHeight = Lib.WindowHeight();
                if (Site.maxHeight > 750 && Site.maxWidth > 740) {
                    featureHeight -= (typeof HomeMP.headerHeight != "undefined") ? HomeMP.headerHeight : parseInt(Header.$header.outerHeight(true));
                }
            } else {
                var featureHeight = HomeFeature.minHeight;
            }

            HomeFeature.$feature.css({
                height: featureHeight,
                width: $(window).outerWidth()
            });

            var viewportHeight = HomeFeature.$viewport.outerHeight();
            if (viewportHeight < HomeFeature.minHeight) {
                viewportHeight = HomeFeature.minHeight;
            }

            if (Site.maxWidth <= 980) {
                newMargin = ((HomeFeature.minHeight - HomeFeature.controlHeight) / 2);
            } else if (Site.maxHeight <= 750) {
                newMargin = (HomeMP.minMargin / 2) - 75;
            } else {
                newMargin = ((viewportHeight - HomeFeature.controlHeight) / 2);
                if (Site.maxWidth >= 740) {
                    newMargin -= 35;
                }
            }

            HomeFeature.$positioner.css({
                marginTop: newMargin
            });

            HomeFeature.viewportSplit = viewportHeight / 2;
            HomeFeature.bottomEdge = $(".home_bottom").offset().top;

            HomeFeature._scroll();

            //fade up if it's invisible
            if (!HomeFeature.$feature.hasClass("ready")) {
                $.doTimeout(200, function () {
                    HomeFeature.$feature.addClass("ready");
                });
            }

        }
    },
    _advance: function (e) {
        if (HomeFeature.animate == true) return false;

        var $taget = $(e.target),
            index = HomeFeature.index + ($taget.hasClass("previous") ? -1 : 1);

        if (index < 0) index = 0;
        if (index > HomeFeature.total) index = HomeFeature.total;

        if (index != HomeFeature.index) {
            HomeFeature.animate = true;
            HomeFeature.$feature.addClass("animated");

            HomeFeature.$articles.filter(".active").addClass("was_active").removeClass("active");
            HomeFeature.$articles.each(function (i) {
                var $t = $(this);
                $t.removeClass("before after");
                if (i < index) {
                    $t.addClass("before");
                } else if (i == index) {
                    $t.addClass("active");
                } else {
                    $t.addClass("after");
                }
            });

            var background = HomeFeature.$feature.find("article.active").data("background");

            if (Formstone.isMobile) {
                background = HomeFeature.$feature.find("article.active").data("mobile-background");
            }

            HomeFeature.$viewport.background("load", background);

            var darker = HomeFeature.$feature.find("article.active").data("darker") == "on";
            if (darker) {
                HomeFeature.$viewport.addClass("darker");
            } else {
                HomeFeature.$viewport.removeClass("darker");
            }

            HomeFeature.$viewport.hasClass("darker");

            $.doTimeout("home-feature-reset", (OLDIE) ? 0 : HomeFeature.transitionSpeed, function () {
                HomeFeature.$articles.filter(".was_active").removeClass("was_active");
                HomeFeature.animate = false;
                HomeFeature.$feature.removeClass("animated");
            });

            HomeFeature.index = index;

            HomeFeature._updateControls();
        }
    },
    _updateControls: function () {
        HomeFeature.$next = HomeFeature.$feature.find(".next");
        HomeFeature.$nextTitle = HomeFeature.$feature.find("article.active").next("article").data("title");
        HomeFeature.$nextImage = HomeFeature.$feature.find("article.active").next("article").data("image");

        HomeFeature.$arrows.removeClass("disabled");
        if (HomeFeature.index <= 0) {
            HomeFeature.$arrows.filter(".previous").addClass("disabled");
        } else if (HomeFeature.index >= HomeFeature.total) {
            HomeFeature.$arrows.filter(".next").addClass("disabled");
        }

        HomeFeature.$feature.find(".next_preview_title").text(HomeFeature.$nextTitle);
        HomeFeature.$feature.find(".next_preview_image img").attr("src", HomeFeature.$nextImage);
    }
};


// !HomeMP
var HomeMP = {
    initialized: false,
    minMargin: 300,
    page: 0,
    perPage: 5,
    maxPages: 3,
    loadingStarted: false,
    firstRun: true,

    _init: function () {
        HomeMP.$container = $("#home_middlepath");
        if (HomeMP.$container.length) {
            HomeMP.$button = $("#home_middlepath_load_more");
            HomeMP.$elements = $("#home_middlepath_elements");
            HomeMP.$topicsHandle = HomeMP.$container.find(".topics_handle");
            HomeMP.$topics = HomeMP.$container.find(".topics");

            HomeMP.initialized = true;

            Site._mason();
            HomeMP._resize();

            $(window).on("scroll.home_mp", HomeMP._scroll)
                .on("resize.home_mp", HomeMP._resize);

            HomeMP.$topicsHandle.on("click", HomeMP._toggleTopics);
            HomeMP.$button.on("click", HomeMP._loadMore);
        }
    },
    _scroll: function () {
        var edge = HomeMP.margin;
        if (Site.maxWidth >= 1220 && Site.maxHeight > 750) {
            edge += 10;
        }
        if (Site.maxHeight <= 750) {
            edge += HomeMP.headerHeight + 10;
        }

        if (window.scrollY >= edge && Site.maxWidth >= 1220) {
            edge += HomeMP.height - Lib.WindowHeight();
            if (window.scrollY < edge) {
                HomeMP.$container.addClass("stuck").removeClass("hidden");
            } else {
                HomeMP.$container.addClass("hidden");
                HomeMP._closeTopics();
            }
        } else {
            HomeMP.$container.removeClass("stuck").removeClass("hidden");
        }
    },
    _respond: function () {
        if (HomeMP.initialized) {
            if (Site.maxWidth > 740) {
                HomeMP.perPage = 9;
            } else if (Site.maxWidth < 740) {
                HomeMP.perPage = 5;
            }

            HomeMP._resize();
            HomeMP._closeTopics();

            if (HomeMP.firstRun) {
                HomeMP.$button.trigger("click");
                HomeMP.firstRun = false;
            }
        }
    },
    _resize: function (e) {
        if (HomeMP.initialized) {
            HomeMP.headerHeight = parseInt(Header.$header.outerHeight(true));

            if (Site.maxWidth <= 980) {
                HomeMP.margin = HomeFeature.minHeight + 60;
            } else if (Site.maxHeight <= 750) {
                HomeMP.margin = HomeMP.minMargin;
            } else {
                HomeMP.margin = Lib.WindowHeight() - HomeMP.headerHeight - 70;
            }

            HomeMP.height = HomeMP.$elements.height();
            HomeMP.$container.css({
                paddingTop: HomeMP.margin + 10
            });

            HomeMP._scroll();
        }
    },
    _loadMore: function (e) {
        if (!$(this).hasClass("disabled")) {
            HomeMP.page++;
            e.preventDefault();
            e.stopPropagation();

            $.ajax({
                url: MAIN_URL + "/request/home-middle-path",
                data: {
                    page: HomeMP.page,
                    perPage: HomeMP.perPage
                },
                complete: function (r) {
                    //console.log(r);
                    var json = $.parseJSON(r.responseText),
                        $content = $(json.content);

                    HomeMP.$elements.append($content).masonry("appended", $content).imagesLoaded(function () {
                        $content.addClass("ready");
                        HomeMP.$elements.masonry(Site.masonryOptions);
                        $(window).trigger("resize").trigger("scroll");

                        if (!HomeMP.loadingStarted) {
                            HomeMP.loadingStarted = true;
                            HomeMP.$elements.addClass("animated");
                        }
                    });
                    HomeFeature._scroll();

                    if (!json.more || HomeMP.page >= HomeMP.maxPages) {
                        HomeMP.$button.addClass("disabled").text("Explore Middle Path");
                    }
                }
            });
        }
    },
    _toggleTopics: function () {
        if (HomeMP.$topics.hasClass("open")) {
            HomeMP._closeTopics();
        } else {
            HomeMP.$topicsHandle.addClass("open");
            HomeMP.$topics.addClass("open");
            Site._scrollToElement("#home_middlepath_elements");
        }
    },
    _closeTopics: function () {
        if (HomeMP.initialized) {
            HomeMP.$topicsHandle.removeClass("open");
            HomeMP.$topics.removeClass("open");
        }
    }
};


/* !Middle Path */
var MiddlePath = {
    relatedActive: false,
    resetTime: 350,

    _init: function () {
        Site._mason();

        MiddlePath.$related = $("#middlepath_related");
        MiddlePath.$relatedContent = $();
        MiddlePath.$relatedLoading = $("#middlepath_related_loading");

        $(".middlepath_sidebar .expand").click(MiddlePath._expandTags);

        $("body").on("click", ".middlepath_related", MiddlePath._loadRelated);
        MiddlePath.$related.on("click", "header .close", MiddlePath._closeRelated);

        $(window).on("resize.middlepath", MiddlePath._resize);
    },
    _expandTags: function () {
        $(this).parents(".links").find(".hidden").show();
        $(this).parent().remove();
    },

    _loadRelated: function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!MiddlePath.relatedActive) {
            MiddlePath.relatedActive = true;

            MiddlePath.$relatedLoading.show();

            var $target = $(this),
                url = $target.attr("href");

            $.ajax({
                url: url,
                data: {
                    ajax: "true",
                    count: 3
                },
                complete: function (response) {
                    MiddlePath.$relatedContent = $(response.responseText.trim());

                    MiddlePath.$related.addClass("visible active")
                        .find(".scroll")
                        .html(MiddlePath.$relatedContent);

                    Site._mason();

                    $(window).on("scroll.mp", MiddlePath._closeRelated);
                }
            });
        }
    },
    _closeRelated: function () {
        MiddlePath.$relatedLoading.hide();
        MiddlePath.$related.removeClass("active");

        $(window).off("scroll.mp");

        $.doTimeout((OLDIE) ? 0 : MiddlePath.resetTime, function () {
            MiddlePath.relatedActive = false;
            MiddlePath.$related.removeClass("visible");
            MiddlePath.$relatedContent.remove();
        });
    },
    _resize: function () {
        MiddlePath.$related.css({
            height: (Lib.WindowHeight() * 0.6)
        });
    }
};


/* !Explore picture */
var ExplorePictures = {
    initialized: false,
    loading: false,
    loadingStarted: false,
    perPage: 5,
    page: 0,
    buffer: 5,
    category: "all",
    reached: false,

    _init: function () {
        ExplorePictures.$container = $("#explore");
        if (ExplorePictures.$container.length) {
            ExplorePictures.initialized = true;

            ExplorePictures.$grid = ExplorePictures.$container.find(".grid");
            ExplorePictures.$topicsHandle = ExplorePictures.$container.find(".topics_handle");
            ExplorePictures.$topics = ExplorePictures.$container.find(".topics");
            ExplorePictures.$loadButton = ExplorePictures.$container.find(".load_more");

            $(window).on("resize.explore", ExplorePictures._resize);

            ExplorePictures.$topicsHandle.on("click", ExplorePictures._toggleTopics);
            ExplorePictures.$topics.on("click", "span", ExplorePictures._loadTopic);
            ExplorePictures.$loadButton.on("click", ExplorePictures._load);

            ExplorePictures._respond();
            ExplorePictures._loadImages();
        }
    },
    _respond: function () {
        if (ExplorePictures.initialized) {
            ExplorePictures.$images = ExplorePictures.$container.find("figure");

            if (Site.maxWidth >= 1220 || Site.maxWidth <= 740) {
                ExplorePictures.perPage = 8;
            } else {
                ExplorePictures.perPage = 6;
            }

            var count = 5;
            if (Site.maxWidth <= 1440) count = 4;
            if (Site.maxWidth <= 1220) count = 3;
            if (Site.maxWidth <= 980) count = 3;
            if (Site.maxWidth <= 740) count = 2;

            var end = ExplorePictures.$images.length - (ExplorePictures.$images.length % count);
            if (ExplorePictures.$images.length == count) {
                end = count;
            }

            ExplorePictures.$images.hide()
                .slice(0, end)
                .show();

            ExplorePictures._resize();
        }
    },
    _resize: function () {
        $.doTimeout("explore-pictures", 10, ExplorePictures._doResize);
    },
    _doResize: function () {
        if (ExplorePictures.initialized) {
            var offset = ExplorePictures.$container.offset();
            ExplorePictures.margin = offset.top;

            if (Site.maxHeight > 750 && Site.maxWidth >= 980) {
                ExplorePictures.margin -= Header.$header.outerHeight(true);
            }

            ExplorePictures.maxScroll = $(document).outerHeight() - $(window).height() - 50;

            ExplorePictures._scroll();
        }
    },
    _toggleTopics: function () {
        if (ExplorePictures.$topics.hasClass("open")) {
            ExplorePictures._closeTopics();
        } else {
            ExplorePictures.$topicsHandle.addClass("open");
            ExplorePictures.$topics.addClass("open");
        }
    },
    _closeTopics: function () {
        if (ExplorePictures.initialized) {
            ExplorePictures.$topicsHandle.removeClass("open");
            ExplorePictures.$topics.removeClass("open");
        }
    },
    _scroll: function () {
        if (ExplorePictures.initialized) {
            if (ExplorePictures.loadingStarted && !ExplorePictures.loading && (Lib.WindowHeight() + $(window).scrollTop()) >= $("body").height()) {
                ExplorePictures._load();
            }
            // Sticky
            if (window.scrollY >= ExplorePictures.margin && Site.maxWidth >= 1220) {
                ExplorePictures.$container.addClass("stuck");
            } else {
                ExplorePictures.$container.removeClass("stuck");
            }

            if (window.scrollY >= ExplorePictures.maxScroll && !ExplorePictures.reached) {
                ExplorePictures.reached = true;
                //var _gaq = window._gaq || [];
                _gaq.push(['_trackEvent', "Footer:Explore", "Viewed"]);
            }
        }
    },
    _loadTopic: function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        ExplorePictures.category = $(this).data("id");
        ExplorePictures.page = 0;
        ExplorePictures.buffer = 0;
        ExplorePictures._load(false);
    },
    _load: function (doAppend) {
        ExplorePictures._closeTopics();

        ExplorePictures.page++;
        ExplorePictures.loading = true;

        ExplorePictures.$loadButton.addClass("loading");
        ExplorePictures.windowPos = $(window).scrollTop();

        $.ajax({
            url: MAIN_URL + "/request/footer-pictures",
            data: {
                page: ExplorePictures.page,
                perPage: ExplorePictures.perPage,
                category: ExplorePictures.category,
                buffer: ExplorePictures.buffer
            },
            complete: function (response) {
                var json = $.parseJSON(response.responseText);
                if (doAppend === false) {
                    ExplorePictures.$grid.html(json.content);
                } else {
                    ExplorePictures.$grid.append(json.content);
                }
                ExplorePictures.loading = !json.more;
                if (!json.more) {
                    ExplorePictures.$loadButton.remove();
                }
                ExplorePictures._respond();
                ExplorePictures._loadImages();

                $(window).scrollTop(ExplorePictures.windowPos);

                if (!ExplorePictures.loadingStarted) {
                    ExplorePictures.loadingStarted = true;

                    var pos = $("#explore").offset().top;
                    if (Site.maxHeight > 750 && Site.maxWidth > 980) {
                        pos -= Header.$header.outerHeight(true);
                    }

                    Site._scrollToPos(pos);
                }
            }
        });
    },
    _loadImages: function () {
        ExplorePictures.$grid.find("img:not(.loaded)").each(function () {
            var $img = $(this);
            $img.one("load", function () {
                $img.addClass("loaded");
            });

            if ($img[0].complete || $img[0].height > 0) {
                $img.trigger("load");
            }
        });
    }
};
/* !Alerts */
var Alerts = {
    _init: function () {
        Alerts.$alerts = $("#alerts .alert");
        Alerts.$alerts.on("click", ".close", Alerts._close);
    },
    _close: function (e) {
        var $this = $(this),
            id = $this.data("id");
        $this.parent().addClass("disabled");
        $.doTimeout((OLDIE) ? 0 : 450, function () {
            $this.parent().remove();
            $.macaroon("kenyon-alert-" + id, "closed");
        });
    }
};
/* !Timeline */
var Timeline = {
    initialized: false,

    _init: function () {
        Timeline.$container = $(".timeline");
        if (Timeline.$container.length) {
            Timeline.$items = Timeline.$container.find(".roller_item");

            Timeline.initialized = true;

            Timeline.$container.on("click.timeline", ".roller_item.visible", Timeline._expand)
                .on("click.timeline", ".roller_arrow, .roller_item.active", Timeline._collapse);
        }
    },
    _respond: function () {
        Timeline._collapse();
    },
    _expand: function (e) {
        if (Timeline.initialized) {
            var $target = $(this);

            Timeline.$items.removeClass("active").addClass("faded");
            $target.addClass("active").removeClass("faded");
        }
    },
    _collapse: function () {
        if (Timeline.initialized) {
            Timeline.$items.removeClass("active").removeClass("faded");
        }
    }
};


/* ! Admissions Feature */
var AdmissionsFeature = {
    transitionSpeed: 1000,
    animate: false,

    _init: function () {
        AdmissionsFeature.$feature = $(".admissions_feature");
        if (AdmissionsFeature.$feature.length > 0) {
            AdmissionsFeature.$images = AdmissionsFeature.$feature.find(".background_item");
            AdmissionsFeature.$articles = AdmissionsFeature.$feature.find(".info");
            AdmissionsFeature.$arrows = AdmissionsFeature.$feature.find(".next, .previous");

            AdmissionsFeature.index = 0;
            AdmissionsFeature.total = AdmissionsFeature.$images.length - 1;

            AdmissionsFeature._updateControls();

            AdmissionsFeature.$feature.on("click", ".next, .previous", AdmissionsFeature._advance);
        }
    },
    _advance: function (e) {
        if (AdmissionsFeature.animate == true) return false;

        var $taget = $(e.target),
            index = AdmissionsFeature.index + ($taget.hasClass("previous") ? -1 : 1);

        if (index < 0) index = 0;
        if (index > AdmissionsFeature.total) index = AdmissionsFeature.total;

        if (index != AdmissionsFeature.index) {
            AdmissionsFeature.animate = true;
            AdmissionsFeature.$feature.addClass("animated");

            AdmissionsFeature.$images.filter(".active").addClass("was_active").removeClass("active");
            AdmissionsFeature.$images.eq(index).addClass("active");

            AdmissionsFeature.$articles.filter(".active").addClass("was_active").removeClass("active");
            AdmissionsFeature.$articles.each(function (i) {
                var $t = $(this);
                $t.removeClass("before after");
                if (i < index) {
                    $t.addClass("before");
                } else if (i == index) {
                    $t.addClass("active");
                } else {
                    $t.addClass("after");
                }
            });

            $.doTimeout("admissions-feature-reset", (OLDIE) ? 0 : AdmissionsFeature.transitionSpeed, function () {
                AdmissionsFeature.$articles.filter(".was_active").removeClass("was_active");
                AdmissionsFeature.$images.filter(".was_active").removeClass("was_active");
                AdmissionsFeature.animate = false;
                AdmissionsFeature.$feature.removeClass("animated");
            });

            AdmissionsFeature.index = index;

            AdmissionsFeature._updateControls();
        }
    },
    _updateControls: function () {
        AdmissionsFeature.$arrows.removeClass("disabled");
        if (AdmissionsFeature.index <= 0) {
            AdmissionsFeature.$arrows.filter(".previous").addClass("disabled");
        } else if (AdmissionsFeature.index >= AdmissionsFeature.total) {
            AdmissionsFeature.$arrows.filter(".next").addClass("disabled");
        }
    }
};


/* !Academics Feature */
var AcademicsFeature = {
    initialized: false,

    _init: function () {
        AcademicsFeature.$feature = $(".academics_feature");
        if (AcademicsFeature.$feature.length && !AcademicsFeature.initialized) {
            AcademicsFeature.$items = AcademicsFeature.$feature.find(".roller_item");

            AcademicsFeature.$feature.on("click", ".roller_item", AcademicsFeature._toggleActive)
                .on("click", ".roller_arrow", AcademicsFeature._reset);

            AcademicsFeature.initialized = true;
        }
    },
    _toggleActive: function () {
        if (AcademicsFeature.initialized) {
            var $target = $(this);

            if ($target.hasClass("active")) {
                $target.removeClass("active");
                AcademicsFeature.$items.removeClass("active faded");
            } else {
                AcademicsFeature.$items.removeClass("active faded");
                $target.addClass("active");
                AcademicsFeature.$items.not(".active").addClass("faded");
            }
        }
    },
    _reset: function () {
        if (AcademicsFeature.initialized) {
            $.doTimeout("academics-feature-reset", (OLDIE) ? 0 : 100, function () {
                AcademicsFeature.$items.removeClass("active faded");
                AcademicsFeature.$items.find(".content").removeClass("display_left");

                var start = 3;
                var end = 4;
                if (Site.maxWidth <= 1220) {
                    start = 2;
                    end = 3;
                }

                AcademicsFeature.$items.filter(".visible").slice(start, end).find(".content").addClass("display_left");
            });
        }
    }
};



/* !Roller */
(function ($) {
    var options = {
        transitionSpeed: 510
    };
    var pub = {
        resize: function (e) {
            var data = $(e.delegateTarget).data("roller");
            $.doTimeout("sizer-roller-" + data.guid, 10, _doResize, data);
        },
        reset: function (e) {
            var data = $(e.delegateTarget).data("roller");

            data.$canister.css({
                left: 0
            });
        }
    };
    var guid = 0;

    function _init() {
        return $(this).each(_build);
    }

    function _build() {
        var $roller = $(this),
            data = {
                $roller: $roller,
                $canister: $roller.find(".roller_canister"),
                $items: $roller.find(".roller_item"),
                $menuArrows: $roller.find(".roller_arrow"),
                $menuPagination: $roller.find(".pagination"),
                $menuItems: $roller.find(".roller_menu_item"),
                $controls: $roller.find(".controls"),
                $images: $roller.find("img"),
                isAnimating: false,
                index: -1,
                paged: $(this).hasClass("roller_paged"),
                guid: guid++
            };

        data.count = data.$items.length;
        data.totalImages = data.$images.length;

        data.$roller.data("roller", data)
            .on("click.roller", ".roller_arrow", _advance)
            .on("click.roller", ".roller_menu_item", _select)
            .on("click.roller", '.roller_item:not(".active, .visible")', _jump)
            .on("resize.roller", data, pub.resize)
            .on("reset.roller", data, pub.reset)
            .trigger("resize.roller");

        if (data.totalImages > 0) {
            data.loadedImages = 0;
            for (var i = 0; i < data.totalImages; i++) {
                var $img = data.$images.eq(i);
                $img.one("load", data, _onImageLoad);
                if ($img[0].complete || $img[0].height > 0) {
                    $img.trigger("load");
                }
            }
        }
    }

    function _onImageLoad(e) {
        var data = e.data;
        data.loadedImages++;
        if (data.loadedImages == data.totalImages) {
            data.$roller.find(".sizer").trigger("resize.sizer");
            data.$roller.addClass("images_loaded")
                .trigger("resize.roller");
        }
        data.$roller.data("roller", data);
    }

    function _swipe(e) {
        e.preventDefault();

        var data = $(e.delegateTarget).data("roller");
        if (!data.isAnimating) {
            var index = data.index + ((e.direction == "left") ? 1 : -1);
            _position(data, index, true);
        }
    }

    function _advance(e) {
        e.preventDefault();

        var data = $(e.delegateTarget).data("roller");
        if (!data.isAnimating) {
            var index = data.index + (($(e.currentTarget).hasClass("next")) ? 1 : -1);
            _position(data, index, true);
        }
    }

    function _select(e) {
        e.preventDefault();

        var data = $(e.delegateTarget).data("roller");
        var $target = $(e.currentTarget);
        if ((!data.usePaged && !$target.hasClass("visible")) || (data.usePaged && !$target.hasClass("active"))) {
            var index = data.$menuItems.index($target);
            _position(data, index, true);
        }
    }

    function _jump(e) {
        e.preventDefault();
        var data = $(e.delegateTarget).data("roller");
        var $target = $(e.currentTarget);

        if ((!data.usePaged && !$target.hasClass("visible")) || (data.usePaged && !$target.hasClass("active"))) {
            var index = (data.usePaged) ? data.$items.index($target) : Math.floor(data.$items.index($target) / data.perPage);
            _position(data, index, true);
        }
    }

    function _position(data, index, animate) {
        if (animate) {
            data.isAnimating = true;
            data.$roller.addClass("animated");
        }

        if (index < 0) {
            index = 0;
        }

        if (index > data.pageCount) {
            index = data.pageCount;
        }

        var newLeft = -(index * data.pageMove);
        if (newLeft < data.maxMove && !(data.usePaged)) {
            newLeft = data.maxMove;
        }
        data.$canister.css({
            left: newLeft
        });

        data.$menuItems.filter(".active").removeClass("active");
        data.$menuItems.eq(index).addClass("active");

        if (data.usePaged) {
            data.$items.filter(".active").removeClass("active")
            data.$items.eq(index).addClass("active");
        } else if (data.perPage != "Infinity") {
            data.$items.removeClass("visible").removeClass("active");
            for (var i = 0; i < data.perPage; i++) {
                if (newLeft == data.maxMove) {
                    data.$items.eq(data.itemsTotal - i).addClass("visible");
                } else {
                    data.$items.eq((data.perPage * index) + i).addClass("visible");
                }
            }
        }

        data.index = index;
        data.$roller.data("roller", data);

        _updateControls(data);

        data.$items.not(".active").find(".video_active").each(function () {
            Site._removeVideo($(this));
        });

        if (animate) {
            $.doTimeout((OLDIE) ? 0 : options.transitionSpeed, function () {
                data.isAnimating = false;
                data.$roller.removeClass("animated");
            });
        }
    }

    function _updateControls(data) {
        if (data.pageCount <= 0) {
            data.$menuArrows.addClass("disabled");
        } else {
            data.$menuArrows.removeClass("disabled");
            if (data.index <= 0) {
                data.$menuArrows.filter(".previous").addClass("disabled");
            } else if (data.index >= data.pageCount) {
                data.$menuArrows.filter(".next").addClass("disabled");
            }
        }
    }

    function _doResize(data) {
        data.$roller.addClass("initialized")
            .css({
                height: data.$canister.outerHeight(true)
            });

        data.pageWidth = data.$roller.outerWidth(true);
        data.itemWidth = data.$items.eq(0).outerWidth(true);
        data.perPage = Math.round(data.pageWidth / data.itemWidth);
        data.pageCount = Math.ceil(data.count / data.perPage) - 1;
        data.itemsTotal = data.$items.length - 1;
        data.pageMove = data.itemWidth * data.perPage;
        data.maxWidth = data.itemWidth * (data.itemsTotal + 1);
        data.maxMove = -data.maxWidth + data.pageWidth + parseInt(data.$items.eq(0).css("margin-right"), 10);
        if (data.maxMove > 0) data.maxMove = 0;

        data.usePaged = data.paged && (Site.maxWidth > 980);

        if (data.usePaged) {
            data.itemWidth = data.$items.eq(0).find(".roller_page_sizer").outerWidth(true);
            data.pageCount = data.itemsTotal;
            data.pageMove = data.itemWidth;
            data.maxMove = -data.itemWidth * data.pageCount
        }

        // Reset Page Count
        if (data.pageCount != "Infinity") {
            var html = '';
            for (var i = 0; i <= data.pageCount; i++) {
                html += '<span class="roller_menu_item page">' + i + '</span>';
            }
            data.$menuPagination.html(html);
        }
        if (data.pageCount < 1) {
            data.$controls.addClass("hidden");
            data.$menuPagination.addClass("hidden");
        } else {
            data.$controls.removeClass("hidden");
            data.$menuPagination.removeClass("hidden");
        }
        data.$menuItems = data.$roller.find(".roller_menu_item");

        if (data.usePaged) {
            var index = data.index;
        } else {
            var index = -Math.ceil(parseInt(data.$canister.css("left"), 10) / data.pageWidth);
        }
        _position(data, index, false);
    }

    $.fn.roller = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);


/* !Sizer */
(function ($) {
    var pub = {}
    guid = 0;

    function _init() {
        return $(this).each(_build);
    }

    function _build() {
        var $sizer = $(this),
            data = {
                $sizer: $sizer,
                $items: $sizer.find(".sizer_item"),
                updateParent: ($sizer.hasClass("sizer_update")),
                guid: guid++
            };
        data.$items.wrapInner('<div class="sizer_size"></div>');
        data.$sizer.on("resize.sizer", data, _resize)
            .trigger("resize.sizer");

        data.$sizer.one("load", "img", function () {
            $(this).trigger("resize.sizer");
        });
    }

    function _resize(e) {
        var data = e.data;
        $.doTimeout("sizer-resize-" + data.guid, 10, _doResize, data);
    }

    function _doResize(data) {
        var height = 0;

        data.$items.css({
            height: ''
        });

        for (var i = 0; i < data.$items.length; i++) {
            var itemHeight = data.$items.eq(i).find(".sizer_size").outerHeight(true);
            if (itemHeight > height) {
                height = itemHeight;
            }
        }

        data.$items.css({
            height: height
        });
        if (data.updateParent) {
            data.$sizer.css({
                height: height
            });
        }
    }

    $.fn.sizer = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);


/* !Background Sizer */
(function ($) {
    var pub = {},
        guid = 0;

    function _init() {
        return $(this).each(_build);
    }

    function _build() {
        var $sizer = $(this),
            data = {
                $sizer: $sizer,
                $items: $sizer.find(".background_item"),
                $images: $sizer.find(".background_image"),
                guid: guid++
            };

        if ($sizer.parents("#home_features").length) {
            data.imageHeight = 700;
            data.imageWidth = 1440;
        } else {
            data.imageHeight = data.$images.eq(0)[0].height;
            data.imageWidth = data.$images.eq(0)[0].width;

            data.$images.eq(0).one("load", data, function (e) {
                data.imageHeight = $(this)[0].height;
                data.imageWidth = $(this)[0].width;
                _resize(e);
            });
        }

        $(window).on("resize.backgroundsizer", data, _resize)
            .trigger("resize.backgroundsizer");
    }

    function _resize(e) {
        var data = e.data;
        $.doTimeout("background-sizer-resize-" + data.guid, 10, _doResize, data);
    }

    function _doResize(data) {
        data.ratioVertical = (data.imageHeight / data.imageWidth);
        data.ratioHorizontal = (data.imageWidth / data.imageHeight);

        var viewportWidth = data.$sizer.outerWidth(true);
        var viewportHeight = data.$sizer.outerHeight(true);

        var newWidth = viewportWidth;
        var newHeight = newWidth / data.ratioHorizontal;

        if (newHeight < viewportHeight) {
            newHeight = viewportHeight;
            newWidth = newHeight / data.ratioVertical;
        }

        var newLeft = (newWidth - viewportWidth) / 2;
        var newTop = (newHeight - viewportHeight) / 2;

        data.$items.css({
            height: newHeight,
            width: newWidth,
            left: -newLeft,
            top: -newTop
        });
    }
    $.fn.backgroundSizer = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);

// Mobile search toggles
var MobileSearch = (function () {
    function init() {
        var $Form = $(".nav_slider_navigation form");
        var $Labels = $(".nav_slider_navigation form label");
        var $Slider = $(".mobile_search_type");

        $Labels.click(function (ev) {
            // Don't do anything if we're on this state
            if ($(this).hasClass("mobile_search_type_active")) {
                return;
            }

            // Get URL based on what we clicked
            var url = $(this).data("target");

            // Set new active label
            $Labels.removeClass("mobile_search_type_active");
            $(this).addClass("mobile_search_type_active");

            // Set new form target
            $Form.attr("action", url);

            // Move the slider around
            $Slider.toggleClass("directory");
        });

        $Slider.click(function (ev) {
            // Move slider around
            $(this).toggleClass("directory");

            // Get non-active URL
            var $non_active_label = $Labels.not(".mobile_search_type_active");
            var url = $non_active_label.data("target");

            // Toggle classes
            $Labels.removeClass("mobile_search_type_active");
            $non_active_label.addClass("mobile_search_type_active");

            // Set new form URL
            $Form.attr("action", url);
        });
    };

    return {
        init: init
    };
})();

// Site Ready
$(document).ready(function () {
    Site._init();
});

var Lib = {
    WindowHeight: function () {
        if (window.innerHeight) {
            windowHeight = window.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }
};

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function () {
    var a = false,
        b = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/;
    this.Class = function () { };
    Class.extend = function (g) {
        var f = this.prototype;
        a = true;
        var e = new this();
        a = false;
        for (var d in g) {
            e[d] = typeof g[d] == "function" && typeof f[d] == "function" && b.test(g[d]) ? (function (h, i) {
                return function () {
                    var k = this._super;
                    this._super = f[h];
                    var j = i.apply(this, arguments);
                    this._super = k;
                    return j
                }
            })(d, g[d]) : g[d]
        }

        function c() {
            if (!a && this.init) {
                this.init.apply(this, arguments)
            }
        }
        c.prototype = e;
        c.prototype.constructor = c;
        c.extend = arguments.callee;
        return c
    }
})();

// !BigTreeCheckbox Class
var BigTreeCheckbox = Class.extend({

    Element: false,
    Link: false,

    init: function (element, text) {
        this.Element = $(element);

        div = $("<div>").addClass("checkbox");
        a = $("<a>").attr("href", "#checkbox");
        a.click($.proxy(this.click, this));
        a.focus($.proxy(this.focus, this));
        a.blur($.proxy(this.blur, this));
        a.keydown($.proxy(this.keydown, this));
        this.Element.next("label").click($.proxy(this.click, this));

        if (element.checked) {
            a.addClass("checked");
        }

        if (element.disabled) {
            a.addClass("disabled");
        }

        if (element.tabIndex) {
            a.attr("tabindex", element.tabIndex);
        }

        this.Link = a;

        div.append(a);
        $(element).hide().after(div);
    },

    focus: function () {
        this.Link.addClass("focused");
    },

    blur: function () {
        this.Link.removeClass("focused");
    },

    keydown: function (event) {
        if (event.keyCode == 32) {
            $.proxy(this.click, this)();
            return false;
        }
    },

    click: function () {
        if (!this.Element.attr("disabled")) {
            if (this.Link.hasClass("checked")) {
                this.Link.removeClass("checked");
            } else {
                this.Link.addClass("checked");
            }
            this.Element.trigger("click");
        }
        return false;
    }
});

// !BigTreeSelect Class
var BigTreeSelect = Class.extend({

    Element: false,
    Container: false,
    Open: false,
    Options: [],
    BoundWindowClick: false,
    BoundOverflowScroll: false,
    WasRelative: false,
    KeyDownBind: false,

    init: function (element) {
        this.Element = $(element);

        $(element).css({
            position: "absolute",
            left: "-1000000px"
        });
        div = $("<div>").addClass("select");
        tester = $("<div>").css({
            position: "absolute",
            top: "-1000px",
            left: "-1000px",
            "font-size": "13px",
            "font-family": "ff-meta-web",
            "white-space": "nowrap"
        });
        $("body").append(tester);
        maxwidth = 0;

        html = "";
        selected = "";
        selected_option = "";

        // Need to find all children since we have to account for options in and out of optgroups
        first_level = $(element).children();
        y = 0;
        for (i = 0; i < first_level.length; i++) {
            el = first_level.get(i);
            if (el.nodeName.toLowerCase() == "optgroup") {
                l = $(el).attr("label");
                html += '<div class="group">' + l + '</div>';
                // Get the size of this text.
                tester.html(l);
                width = tester.width();
                if (width > maxwidth) {
                    maxwidth = width;
                }

                options = $(el).find("option");
                for (x = 0; x < options.length; x++) {
                    y++;
                    option = options.eq(x);
                    text = option.html();
                    val = option.attr("value");
                    if (!val) {
                        val = text;
                    }

                    // Get the size of this text.
                    tester.html(text);
                    width = tester.width();
                    if (width + 20 > maxwidth) {
                        maxwidth = width + 20;
                    }

                    if (y == 1) {
                        selected_option = text;
                    }

                    if (option.attr("selected")) {
                        html += '<a class="optgroup active" href="#" data-value="' + val + '">' + text + '</a>';
                        selected_option = text;
                    } else {
                        html += '<a class="optgroup" href="#" data-value="' + val + '">' + text + '</a>';
                    }
                }
            } else {
                y++;
                option = $(el);
                text = option.html();
                val = option.attr("value");
                if (!val) {
                    val = text;
                }

                // Get the size of this text.
                tester.html(text);
                width = tester.width();
                if (width > maxwidth) {
                    maxwidth = width;
                }

                if (y == 1) {
                    selected_option = text;
                }


                if (option.attr("selected")) {
                    html += '<a class="active" href="#" data-value="' + val + '">' + text + '</a>';
                    selected_option = text;
                } else {
                    html += '<a href="#" data-value="' + val + '">' + text + '</a>';
                }
            }
        }

        div.html('<span><figure class="handle"></figure>' + selected_option + '</span><div class="select_options" style="display: none;">' + html + '</div>');

        spanwidth = maxwidth;
        // If we're in a section cell we may need to be smaller.
        if ($(element).parent().get(0).tagName.toLowerCase() == "section") {
            sectionwidth = $(element).parent().width();
            if (sectionwidth < (maxwidth + 56)) {
                spanwidth = sectionwidth - 80;
                div.find("span").css({
                    overflow: "hidden",
                    padding: "0 0 0 10px"
                });
            }
        }

        div.find("span").css({
            width: spanwidth + "px",
            height: "30px"
        }).html('<figure class="handle"></figure>' + selected_option).click($.proxy(this.click, this));
        div.find(".select_options").css({
            width: (maxwidth + 54) + "px"
        });
        div.on("click", "a", $.proxy(this.select, this));
        div.find(".handle").click($.proxy(this.click, this));

        $(element).after(div);

        this.Container = div;

        // See if this select is disabled
        if (this.Element.attr("disabled")) {
            this.Container.addClass("disabled");
        }

        // Observe focus on the select that's been hidden.
        this.Element.focus($.proxy(this.focus, this));
        this.Element.blur($.proxy(this.blur, this));
        // Custom event to force open lists closed when another select opens.
        this.Element.on("closeNow", $.proxy(this.close, this));
    },

    add: function (value, text) {
        // Add to the actual select.
        op = new Option(text, value);
        this.Element[0].options[this.Element[0].options.length] = op;
        // Add to the styled select.
        a = $('<a href="#">' + text + '</a>');
        a.attr("data-value", value);
        this.Container.find(".select_options").append(a);
    },

    blur: function () {
        this.Container.removeClass("focused");
        this.Element.unbind("keydown");
    },

    click: function () {
        if (!this.Open) {
            $("select").not(this.Element).trigger("closeNow");
            this.Element.focus();

            // Check if we're in a sortable row and disable it's relative position if so.
            li = this.Element.parent("li");
            if (li.length) {
                if (li.css("position") == "relative") {
                    li.css("position", "");
                    this.WasRelative = true;
                }
            }

            dList = this.Container.find(".select_options");
            this.Open = true;
            dList.show();
            this.Container.addClass("open");
            this.BoundWindowClick = $.proxy(this.close, this);
            $("body").click(this.BoundWindowClick);

            // Find out if we're in a dialog and have an overflow
            overflow = this.Container.parents(".overflow");
            if (overflow.length) {
                // WebKit needs fixin.
                if ($.browser.webkit) {
                    dList.css("marginTop", -1 * overflow.scrollTop() + "px");
                }

                // When someone scrolls the overflow, close the select or the dropdown will detach.
                this.BoundOverflowScroll = $.proxy(this.close, this);
                setTimeout($.proxy(function () {
                    overflow.scroll(this.BoundOverflowScroll);
                }, this), 500);
            } else {
                // If the select drops below the visible area, scroll down a bit.
                dOffset = dList.offset().top + dList.height();
                toScroll = dOffset - window.scrollY - $(window).height();
                if (toScroll > 0) {
                    $('html, body').animate({
                        scrollTop: window.scrollY + toScroll + 5
                    }, 200);
                }
            }
        } else {
            this.close();
        }

        return false;
    },

    close: function () {
        this.Open = false;
        this.Container.removeClass("open");
        this.Container.find(".select_options").hide();
        $("body").unbind("click", this.BoundWindowClick);

        if (this.BoundOverflowScroll) {
            this.Container.parents(".overflow").unbind("scroll", this.BoundOverflowScroll);
            this.BoundOverflowScroll = false;
        }

        // Reset relative position if applicable
        if (this.WasRelative) {
            this.Element.parent("li").css("position", "relative");
            this.WasRelative = false;
        }

        return false;
    },

    disable: function () {
        this.Element.attr("disabled", "disabled");
        this.Container.addClass("disabled");
    },

    enable: function () {
        this.Element.attr("disabled", "");
        this.Container.removeClass("disabled");
    },

    focus: function () {
        this.Container.addClass("focused");
        this.KeyBindDown = $.proxy(this.keydown, this);
        this.Element.keydown(this.KeyBindDown);
    },

    keydown: function (ev) {
        // The original select element that's hidden off screen.
        el = this.Element.get(0);

        // If a modifier has been pressed, ignore this.
        if (ev.ctrlKey || ev.altKey || ev.metaKey) {
            return true;
        }

        // Get the original index and save it so we know when it changes.
        index = el.selectedIndex;
        oindex = index;

        // Up arrow pressed
        if (ev.keyCode == 38) {
            index--;
            if (index < 0) {
                index = 0;
            }
            // Down arrow pressed
        } else if (ev.keyCode == 40) {
            index++;
            if (index == el.options.length) {
                index--;
            }
            // A letter key was pressed
        } else if (ev.keyCode > 64 && ev.keyCode < 91) {
            spot = ev.keyCode - 65;
            letters = "abcdefghijklmnopqrstuvwxyz";
            letter = letters[spot];

            // Go through all the options in the select to see if any of them start with the letter that was pressed.
            for (i = index + 1; i < el.options.length; i++) {
                text = el.options[i].text;
                first_letter = text[0].toLowerCase();
                if (first_letter == letter) {
                    index = i;
                    break;
                }
            }

            // If we were already on that letter, find the next one with that same letter.
            if (index == oindex) {
                for (i = 0; i < oindex; i++) {
                    text = el.options[i].text;
                    first_letter = text[0].toLowerCase();
                    if (first_letter == letter) {
                        index = i;
                        break;
                    }
                }
            }
        }

        // We found a new element, fire an event saying the select changed and update the description in the styled dropdown.
        if (index != oindex) {
            // For some reason Firefox doesn't care that we stop the event and still changes the index of the hidden select area, so we're not going to update it if we're in Firefox.
            if (navigator.userAgent.indexOf("Firefox") == -1) {
                el.selectedIndex = index;
            }
            this.Container.find("span").html('<figure class="handle"></figure>' + el.options[index].text);
            this.Element.trigger("change", {
                value: el.options[index].value,
                text: el.options[index].text
            });
            return false;
        }

        // Stop the event if it's not a tab.
        if (ev.keyCode != 9) {
            return false;
        }
    },

    remove: function (value) {
        // Remove it from the actual select.
        ops = this.Element.find("option");
        for (i = 0; i < ops.length; i++) {
            if (ops.eq(i).val() == value) {
                ops.eq(i).remove();
            }
        }
        // Remove it from the styled one.
        as = this.Container.find(".select_options a");
        for (i = 0; i < as.length; i++) {
            if (as.eq(i).attr("data-value") == value) {
                text_was = as.eq(i).html();
                as.eq(i).remove();
            }
        }
        // If the current selected state is the value we're removing, switch to the first available.
        sel = this.Container.find("span").eq(0);
        if (sel.html() == text_was) {
            sel.html('<figure class="handle"></figure>' + this.Container.find(".select_options a").eq(0).html());
        }
    },

    select: function (event) {
        el = $(event.target);
        this.Element.val(el.attr("data-value"));
        this.Container.find("span").html('<figure class="handle"></figure>' + el.html());
        this.Container.find("a").removeClass("active");
        el.addClass("active");

        this.close();

        this.Element.trigger("change", {
            value: el.attr("data-value"),
            text: el.innerHTML
        });
        return false;
    }
});

// !BigTreeFileInput Class
var BigTreeFileInput = Class.extend({

    Container: false,
    Element: false,
    Timer: false,
    Top: 0,
    Left: 0,

    init: function (element) {
        this.Element = $(element);

        div = $("<div>").addClass("file_wrapper").html('<span class="handle">Upload</span><span class="data"></span>');
        this.Element.before(div);
        div.append(this.Element);
        div.mousemove($.proxy(this.watchMouse, this));

        this.Timer = setInterval($.proxy(this.checkInput, this), 250);

        this.Container = div;
    },

    // Special thanks to http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom
    watchMouse: function (e) {
        if (typeof e.pageY == 'undefined' && typeof e.clientX == 'number' && document.documentElement) {
            e.pageX = e.clientX + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.documentElement.scrollTop;
        };

        offset = this.Container.offset();
        this.Left = offset.left;
        this.Top = offset.top;

        if (e.pageX < this.Left || e.pageY < this.Top || e.pageX > (this.Left + 300) || e.pageY > (this.Top + 30)) {
            this.Element.hide();
            return;
        } else {
            this.Element.show();
        }

        var ox = oy = 0;
        var elem = this;
        if (elem.offsetParent) {
            ox = elem.offsetLeft;
            oy = elem.offsetTop;
            while (elem = elem.offsetParent) {
                ox += elem.offsetLeft;
                oy += elem.offsetTop;
            };
        };

        var x = e.pageX - ox;
        var y = e.pageY - oy;

        if (this.Element.parents(".bigtree_dialog_window").length) {
            x -= this.Element.parents(".bigtree_dialog_form").offset().left;
            y -= this.Element.parents(".bigtree_dialog_form").offset().top - 30;
        }

        var w = this.Element.get(0).offsetWidth;
        var h = this.Element.get(0).offsetHeight;

        this.Element.css({
            top: (y - (h / 2) + 'px'),
            left: (x - (w - 30) + 'px')
        });
    },

    showInput: function () {
        this.Element.show();
    },

    hideInput: function () {
        this.Element.hide();
    },

    checkInput: function () {
        pinfo = basename(this.Element.val());
        this.Container.find(".data").html(pinfo);
    },

    destroy: function () {
        clearInterval(this.Timer);
    },

    connect: function (el) {
        this.Element = $(el);
        this.Timer = setInterval($.proxy(this.checkInput, this), 250);
        return this;
    }
});

// !BigTreeRadioButton Class
var BigTreeRadioButton = Class.extend({

    Element: false,
    Link: false,

    init: function (element, text) {
        this.Element = $(element);

        div = $("<div>").addClass("radio_button");
        a = $("<a>").attr("href", "#radio");
        a.click($.proxy(this.click, this));
        a.focus($.proxy(this.focus, this));
        a.blur($.proxy(this.blur, this));
        a.keydown($.proxy(this.keydown, this));
        this.Element.next("label").click($.proxy(this.click, this));

        if (element.checked) {
            a.addClass("checked");
        }

        if (element.tabIndex) {
            a.attr("tabIndex", element.tabIndex);
        }

        this.Link = a;

        div.append(a);
        this.Element.hide();
        this.Element.after(div);
    },

    focus: function (ev) {
        this.Link.addClass("focused");
    },

    blur: function (ev) {
        this.Link.removeClass("focused");
    },

    keydown: function (ev) {
        if (ev.keyCode == 32) {
            this.click(ev);
            return false;
        }
        if (ev.keyCode == 39 || ev.keyCode == 40) {
            this.next(ev);
            return false;
        }
        if (ev.keyCode == 37 || ev.keyCode == 38) {
            this.previous(ev);
            return false;
        }
    },

    click: function (ev) {
        if (this.Link.hasClass("checked")) {
            // If it's already clicked, nothing happens for radio buttons.
        } else {
            this.Link.addClass("checked");
            this.Element.attr("checked", true);
            $('input[name="' + this.Element.attr("name") + '"]').not(this.Element).each(function () {
                this.customControl.Link.removeClass("checked");
            });
        }
        this.Element.trigger("click");
        return false;
    },

    next: function (ev) {
        all = $('input[name="' + this.Element.attr("name") + '"]');
        index = all.index(this.Element);
        if (index != all.length - 1) {
            all[index + 1].customControl.Link.focus();
            all[index + 1].customControl.click(ev);
        }
    },

    previous: function (ev) {
        all = $('input[name="' + this.Element.attr("name") + '"]');
        index = all.index(this.Element);
        if (index != 0) {
            all[index - 1].customControl.Link.focus();
            all[index - 1].customControl.click(ev);
        }
    }
});

function basename(path, suffix) {
    var b = path.replace(/^.*[\/\\]/g, "");
    if (typeof (suffix) == "string" && b.substr(b.length - suffix.length) == suffix) {
        b = b.substr(0, b.length - suffix.length);
    }
    return b;
}
/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;
(function (window, document, undefined) {
    var j = void 0,
        k = !0,
        l = null,
        m = !1;

    function n(a) {
        return function () {
            return this[a]
        }
    }
    var o;

    function t(a, b, c) {
        var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : [];
        return function () {
            d.push.apply(d, arguments);
            return b.apply(a, d)
        }
    };

    function aa(a, b) {
        this.P = a;
        this.K = b || a;
        this.R = this.K.document;
        this.ba = j
    }
    aa.prototype.createElement = function (a, b, c) {
        a = this.R.createElement(a);
        if (b)
            for (var d in b)
                if (b.hasOwnProperty(d))
                    if ("style" == d) {
                        var e = a,
                            f = b[d];
                        ba(this) ? e.setAttribute("style", f) : e.style.cssText = f
                    } else a.setAttribute(d, b[d]);
        c && a.appendChild(this.R.createTextNode(c));
        return a
    };

    function u(a, b, c) {
        a = a.R.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }

    function ca(a) {
        function b() {
            document.body ? a() : setTimeout(b, 0)
        }
        b()
    }

    function v(a, b) {
        return a.createElement("link", {
            rel: "stylesheet",
            href: b
        })
    }

    function da(a, b) {
        return a.createElement("script", {
            src: b
        })
    }

    function w(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return;
        c.push(b);
        a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function x(a, b) {
        for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function ea(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return k;
        return m
    }

    function ba(a) {
        if (a.ba === j) {
            var b = a.R.createElement("p");
            b.innerHTML = '<a style="top:1px;">w</a>';
            a.ba = /top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return a.ba
    }

    function y(a) {
        var b = a.K.location.protocol;
        "about:" == b && (b = a.P.location.protocol);
        return "https:" == b ? "https:" : "http:"
    };

    function z(a, b, c) {
        this.Ta = a;
        this.Ra = b;
        this.Sa = c
    }
    z.prototype.J = n("Ta");
    z.prototype.Y = n("Ra");

    function A(a, b, c, d, e, f, g, i) {
        this.Ja = a;
        this.Qa = b;
        this.wa = c;
        this.va = d;
        this.Na = e;
        this.Ma = f;
        this.ua = g;
        this.v = i
    }
    o = A.prototype;
    o.getName = n("Ja");
    o.Da = n("Qa");
    o.fa = n("wa");
    o.Aa = n("va");
    o.Ba = n("Na");
    o.Ca = n("Ma");
    o.za = n("ua");
    o.z = n("v");

    function B(a, b) {
        this.a = a;
        this.q = b
    }
    var fa = new A("Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", j, new z(m, m, m));
    B.prototype.parse = function () {
        var a;
        if (-1 != this.a.indexOf("MSIE")) {
            a = C(this);
            var b = D(this),
                c = E(this.a, /(MSIE [\d\w\.]+)/, 1);
            if ("" != c) {
                var d = c.split(" "),
                    c = d[0],
                    d = d[1],
                    e = F(d),
                    f = F(b);
                a = new A(c, d, c, d, a, b, G(this.q), new z("Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= f.e, m, m))
            } else a = new A("MSIE", "Unknown", "MSIE", "Unknown", a, b, G(this.q), new z(m, m, m))
        } else if (-1 != this.a.indexOf("Opera")) a = ga(this);
        else if (/AppleWeb(K|k)it/.test(this.a)) {
            a = C(this);
            var b = D(this),
                c = E(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/,
                    1),
                g = m;
            "" == c && (c = "Unknown");
            d = F(c);
            g = F(b);
            e = "Unknown"; - 1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? e = "Chrome" : "BlackBerry" == a || "Android" == a ? e = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? e = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (e = "AdobeAIR");
            f = "Unknown";
            "BuiltinBrowser" == e ? f = "Unknown" : -1 != this.a.indexOf("Version/") ? f = E(this.a, /Version\/([\d\.\w]+)/, 1) : "Chrome" == e ? f = E(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : "AdobeAIR" == e && (f = E(this.a, /AdobeAIR\/([\d\.]+)/,
                1));
            "AdobeAIR" == e ? (g = F(f), g = 2 < g.e || 2 == g.e && 5 <= g.A) : g = "BlackBerry" == a ? 10 <= g.e : "Android" == a ? 2 < g.e || 2 == g.e && 1 < g.A : 526 <= d.e || 525 <= d.e && 13 <= d.A;
            a = new A(e, f, "AppleWebKit", c, a, b, G(this.q), new z(g, 536 > d.e || 536 == d.e && 11 > d.A, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a))
        } else -1 != this.a.indexOf("Gecko") ? (b = a = "Unknown", c = m, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", d = E(this.a, /Firefox\/([\d\w\.]+)/, 1), "" != d && (c = F(d), b = d, c = 3 <= c.e && 5 <= c.A)) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), d = E(this.a, /rv:([^\)]+)/,
            1), "" == d ? d = "Unknown" : c || (c = F(d), c = 1 < c.e || 1 == c.e && 9 < c.A || 1 == c.e && 9 == c.A && 2 <= c.La || d.match(/1\.9\.1b[123]/) != l || d.match(/1\.9\.1\.[\d\.]+/) != l), a = new A(a, b, "Gecko", d, C(this), D(this), G(this.q), new z(c, m, m))) : a = fa;
        return a
    };

    function C(a) {
        var b = E(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b) return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = E(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }

    function D(a) {
        var b = E(a.a, /(OS X|Windows NT|Android|CrOS) ([^;)]+)/, 2);
        if (b || (b = E(a.a, /Windows Phone( OS)? ([^;)]+)/, 2))) return b;
        if (b = E(a.a, /(iPhone )?OS ([\d_]+)/, 2)) return b;
        if (b = E(a.a, /Linux ([i\d]+)/, 1)) return b;
        return (a = E(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function ga(a) {
        var b = "Unknown",
            c = "Unknown",
            d = E(a.a, /(Presto\/[\d\w\.]+)/, 1);
        "" != d ? (c = d.split("/"), b = c[0], c = c[1]) : (-1 != a.a.indexOf("Gecko") && (b = "Gecko"), d = E(a.a, /rv:([^\)]+)/, 1), "" != d && (c = d));
        if (-1 != a.a.indexOf("Opera Mini/")) return d = E(a.a, /Opera Mini\/([\d\.]+)/, 1), "" == d && (d = "Unknown"), new A("OperaMini", d, b, c, C(a), D(a), G(a.q), new z(m, m, m));
        if (-1 != a.a.indexOf("Version/")) {
            var e = E(a.a, /Version\/([\d\.]+)/, 1);
            if ("" != e) return d = F(e), new A("Opera", e, b, c, C(a), D(a), G(a.q), new z(10 <= d.e, m, m))
        }
        e = E(a.a, /Opera[\/ ]([\d\.]+)/,
            1);
        return "" != e ? (d = F(e), new A("Opera", e, b, c, C(a), D(a), G(a.q), new z(10 <= d.e, m, m))) : new A("Opera", "Unknown", b, c, C(a), D(a), G(a.q), new z(m, m, m))
    }

    function F(a) {
        var a = /([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+)?)?)?/.exec(a),
            b = {};
        a && (b.e = parseInt(a[1] || -1, 10), b.A = parseInt(a[2] || -1, 10), b.La = parseInt(a[3] || -1, 10));
        return b
    }

    function E(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }

    function G(a) {
        if (a.documentMode) return a.documentMode
    };

    function ha(a, b, c) {
        this.c = a;
        this.j = b;
        this.da = c;
        this.k = "wf";
        this.h = new ja("-")
    }

    function ka(a) {
        w(a.j, a.h.f(a.k, "loading"));
        H(a, "loading")
    }

    function I(a) {
        x(a.j, a.h.f(a.k, "loading"));
        ea(a.j, a.h.f(a.k, "active")) || w(a.j, a.h.f(a.k, "inactive"));
        H(a, "inactive")
    }

    function H(a, b, c, d) {
        if (a.da[b]) a.da[b](c, d)
    };

    function la() {
        this.ma = {}
    }

    function ma(a, b, c) {
        var d = [],
            e;
        for (e in b)
            if (b.hasOwnProperty(e)) {
                var f = a.ma[e];
                f && d.push(f(b[e], c))
            }
        return d
    };

    function na(a, b) {
        this.width = a;
        this.height = b
    };

    function J(a, b, c, d, e, f, g) {
        this.c = b;
        this.D = c;
        this.t = d;
        this.C = e;
        this.O = f;
        this.X = 0;
        this.qa = this.ka = m;
        this.ca = g;
        this.v = a.z()
    }
    J.prototype.watch = function (a, b, c, d, e) {
        var f = a.length;
        if (0 === f) I(this.D);
        else {
            for (var g = 0; g < f; g++) {
                var i = a[g];
                b[i] || (b[i] = ["n4"]);
                this.X += b[i].length
            }
            e && (this.ka = e);
            for (g = 0; g < f; g++)
                for (var i = a[g], e = b[i], p = c[i], h = 0, q = e.length; h < q; h++) {
                    var s = e[h],
                        r = this.D,
                        S = i,
                        ia = s;
                    w(r.j, r.h.f(r.k, S, ia, "loading"));
                    H(r, "fontloading", S, ia);
                    r = t(this, this.xa);
                    S = t(this, this.ya);
                    (new d(r, S, this.c, this.t, this.C, this.O, i, s, this.v, this.ca, l, p)).start()
                }
        }
    };
    J.prototype.xa = function (a, b) {
        var c = this.D;
        x(c.j, c.h.f(c.k, a, b, "loading"));
        x(c.j, c.h.f(c.k, a, b, "inactive"));
        w(c.j, c.h.f(c.k, a, b, "active"));
        H(c, "fontactive", a, b);
        this.qa = k;
        oa(this)
    };
    J.prototype.ya = function (a, b) {
        var c = this.D;
        x(c.j, c.h.f(c.k, a, b, "loading"));
        ea(c.j, c.h.f(c.k, a, b, "active")) || w(c.j, c.h.f(c.k, a, b, "inactive"));
        H(c, "fontinactive", a, b);
        oa(this)
    };

    function oa(a) {
        0 == --a.X && a.ka && (a.qa ? (a = a.D, x(a.j, a.h.f(a.k, "loading")), x(a.j, a.h.f(a.k, "inactive")), w(a.j, a.h.f(a.k, "active")), H(a, "active")) : I(a.D))
    };

    function K(a, b, c, d, e, f, g, i, p, h, q, s) {
        this.Q = a;
        this.ha = b;
        this.c = c;
        this.t = d;
        this.C = e;
        this.O = f;
        this.M = g;
        this.s = i;
        this.H = s || "BESbswy";
        this.v = p;
        this.o = {};
        this.ca = h || 5E3;
        this.la = q || l;
        this.G = this.F = l;
        a = new L(this.c, this.t, this.H);
        M(a);
        for (var r in N) N.hasOwnProperty(r) && (O(a, N[r], this.s), this.o[N[r]] = a.m());
        a.remove()
    }
    var N = {
        Xa: "serif",
        Wa: "sans-serif",
        Va: "monospace",
        Ua: "Apple Color Emoji"
    };
    K.prototype.start = function () {
        this.F = new L(this.c, this.t, this.H);
        M(this.F);
        this.G = new L(this.c, this.t, this.H);
        M(this.G);
        this.pa = this.O();
        O(this.F, this.M + ",serif", this.s);
        O(this.G, this.M + ",sans-serif", this.s);
        this.W()
    };

    function P(a, b, c) {
        return a.v.Sa ? !!a.o[c] && b.width == a.o[c].width : !!a.o[c] && b.width == a.o[c].width && !!a.o[c] && b.height == a.o[c].height
    }

    function pa(a, b, c) {
        for (var d in N)
            if (N.hasOwnProperty(d) && P(a, b, N[d]) && P(a, c, N[d])) return k;
        return m
    }
    K.prototype.W = function () {
        var a = this.F.m(),
            b = this.G.m();
        P(this, a, "serif") && P(this, b, "sans-serif") || this.v.Y() && pa(this, a, b) ? this.O() - this.pa >= this.ca ? this.v.Y() && pa(this, a, b) && (this.la === l || this.la.hasOwnProperty(this.M)) ? Q(this, this.Q) : Q(this, this.ha) : qa(this) : Q(this, this.Q)
    };

    function qa(a) {
        a.C(function (a, c) {
            return function () {
                c.call(a)
            }
        }(a, a.W), 25)
    }

    function Q(a, b) {
        a.F.remove();
        a.G.remove();
        b(a.M, a.s)
    };

    function L(a, b, c) {
        this.c = a;
        this.t = b;
        this.H = c;
        this.Ia = new ra;
        this.I = new R;
        this.S = this.c.createElement("span", {}, this.H)
    }

    function O(a, b, c) {
        var d = a.c,
            e = a.S,
            c = c ? a.I.expand(c) : "",
            a = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.Ia.quote(b) + ";" + c;
        ba(d) ? e.setAttribute("style", a) : e.style.cssText = a
    }

    function M(a) {
        u(a.c, "body", a.S)
    }
    L.prototype.m = function () {
        return this.t.m(this.S)
    };
    L.prototype.remove = function () {
        var a = this.S;
        a.parentNode && a.parentNode.removeChild(a)
    };

    function T(a, b, c, d) {
        this.P = a;
        this.ea = b;
        this.C = c;
        this.a = d;
        this.Z = this.$ = 0
    }
    T.prototype.u = function (a, b) {
        this.ea.ma[a] = b
    };
    T.prototype.load = function (a) {
        var b = a.context || this.P;
        this.c = new aa(this.P, b);
        b = new ha(this.c, b.document.documentElement, a);
        this.a.z().J() ? sa(this, b, a) : I(b)
    };
    T.prototype.Ea = function (a, b, c, d) {
        var e = a.ga ? a.ga() : K;
        d ? a.load(t(this, this.Ka, b, c, e)) : (a = 0 == --this.$, this.Z-- , a && (0 == this.Z ? I(b) : ka(b)), c.watch([], {}, {}, e, a))
    };
    T.prototype.Ka = function (a, b, c, d, e, f) {
        var g = 0 == --this.$;
        g && ka(a);
        this.C(t(this, function (a, b, c, d, e, f) {
            a.watch(b, c || {}, d || {}, e, f)
        }, b, d, e, f, c, g))
    };

    function sa(a, b, c) {
        var d = ma(a.ea, c, a.c),
            c = c.timeout;
        a.Z = a.$ = d.length;
        for (var c = new J(a.a, a.c, b, {
            m: function (a) {
                return new na(a.offsetWidth, a.offsetHeight)
            }
        }, a.C, function () {
            return (new Date).getTime()
        }, c), e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            g.L(a.a, t(a, a.Ea, g, b, c))
        }
    };

    function ja(a) {
        this.Fa = a || "-"
    }
    ja.prototype.f = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.Fa)
    };

    function ra() {
        this.oa = "'"
    }
    ra.prototype.quote = function (a) {
        for (var b = [], a = a.split(/,\s*/), c = 0; c < a.length; c++) {
            var d = a[c].replace(/['"]/g, ""); - 1 == d.indexOf(" ") ? b.push(d) : b.push(this.oa + d + this.oa)
        }
        return b.join(",")
    };

    function R() {
        this.U = ta;
        this.p = ua
    }
    var ta = ["font-style", "font-weight"],
        ua = {
            "font-style": [
                ["n", "normal"],
                ["i", "italic"],
                ["o", "oblique"]
            ],
            "font-weight": [
                ["1", "100"],
                ["2", "200"],
                ["3", "300"],
                ["4", "400"],
                ["5", "500"],
                ["6", "600"],
                ["7", "700"],
                ["8", "800"],
                ["9", "900"],
                ["4", "normal"],
                ["7", "bold"]
            ]
        };

    function U(a, b, c) {
        this.ia = a;
        this.Oa = b;
        this.p = c
    }
    U.prototype.compact = function (a, b) {
        for (var c = 0; c < this.p.length; c++)
            if (b == this.p[c][1]) {
                a[this.ia] = this.p[c][0];
                break
            }
    };
    U.prototype.expand = function (a, b) {
        for (var c = 0; c < this.p.length; c++)
            if (b == this.p[c][0]) {
                a[this.ia] = this.Oa + ":" + this.p[c][1];
                break
            }
    };
    R.prototype.compact = function (a) {
        for (var b = ["n", "4"], a = a.split(";"), c = 0, d = a.length; c < d; c++) {
            var e = a[c].replace(/\s+/g, "").split(":");
            if (2 == e.length) {
                var f = e[1];
                a: {
                    for (var e = e[0], g = 0; g < this.U.length; g++)
                        if (e == this.U[g]) {
                            e = new U(g, e, this.p[e]);
                            break a
                        }
                    e = l
                }
                e && e.compact(b, f)
            }
        }
        return b.join("")
    };
    R.prototype.expand = function (a) {
        if (2 != a.length) return l;
        for (var b = [l, l], c = 0, d = this.U.length; c < d; c++) {
            var e = this.U[c];
            (new U(c, e, this.p[e])).expand(b, a.substr(c, 1))
        }
        return b[0] && b[1] ? b.join(";") + ";" : l
    };
    var V = window.WebFont = function () {
        var a = (new B(navigator.userAgent, document)).parse();
        return new T(window, new la, function (a, c) {
            setTimeout(a, c)
        }, a)
    }();
    V.load = V.load;
    V.addModule = V.u;
    A.prototype.getName = A.prototype.getName;
    A.prototype.getVersion = A.prototype.Da;
    A.prototype.getEngine = A.prototype.fa;
    A.prototype.getEngineVersion = A.prototype.Aa;
    A.prototype.getPlatform = A.prototype.Ba;
    A.prototype.getPlatformVersion = A.prototype.Ca;
    A.prototype.getDocumentMode = A.prototype.za;
    A.prototype.getBrowserInfo = A.prototype.z;
    z.prototype.hasWebFontSupport = z.prototype.J;
    z.prototype.hasWebKitFallbackBug = z.prototype.Y;

    function W(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c;
        this.g = [];
        this.w = {}
    }
    W.prototype.L = function (a, b) {
        var c = this,
            d = c.d.projectId,
            e = c.d.version;
        if (d) {
            var f = c.c.createElement("script");
            f.id = "__MonotypeAPIScript__" + d;
            var g = this.c.K,
                i = m;
            f.onload = f.onreadystatechange = function () {
                if (!i && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) {
                    i = k;
                    if (g["__mti_fntLst" + d]) {
                        var e = g["__mti_fntLst" + d]();
                        if (e && e.length) {
                            var h;
                            for (h = 0; h < e.length; h++) c.g.push(e[h].fontfamily)
                        }
                    }
                    b(a.z().J());
                    f.onload = f.onreadystatechange = l
                }
            };
            f.src = c.N(d, e);
            u(this.c, "head", f)
        } else b(k)
    };
    W.prototype.N = function (a, b) {
        var c = y(this.c),
            d = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    };
    W.prototype.load = function (a) {
        a(this.g, this.w)
    };
    V.u("monotype", function (a, b) {
        var c = (new B(navigator.userAgent, document)).parse();
        return new W(c, b, a)
    });

    function X(a, b) {
        this.c = a;
        this.d = b;
        this.g = [];
        this.w = {}
    }
    X.prototype.N = function (a) {
        var b = y(this.c);
        return (this.d.api || b + "//use.typekit.net") + "/" + a + ".js"
    };
    X.prototype.L = function (a, b) {
        var c = this.d.id,
            d = this.d,
            e = this.c.K,
            f = this;
        c ? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}), e.__webfonttypekitmodule__[c] = function (c) {
            c(a, d, function (a, c, d) {
                f.g = c;
                f.w = d;
                b(a)
            })
        }, u(this.c, "head", da(this.c, this.N(c)))) : b(k)
    };
    X.prototype.load = function (a) {
        a(this.g, this.w)
    };
    V.u("typekit", function (a, b) {
        return new X(b, a)
    });

    function va(a, b) {
        this.c = a;
        this.d = b
    }
    va.prototype.load = function (a) {
        var b, c, d = this.d.urls || [],
            e = this.d.families || [];
        for (b = 0, c = d.length; b < c; b++) u(this.c, "head", v(this.c, d[b]));
        var d = [],
            f = {};
        for (b = 0, c = e.length; b < c; b++) {
            var g = e[b].split(":"),
                i = g[0],
                g = g[1];
            d.push(i);
            g && (f[i] = (f[i] || []).concat(g.split(",")))
        }
        a(d, f)
    };
    va.prototype.L = function (a, b) {
        return b(a.z().J())
    };
    V.u("custom", function (a, b) {
        return new va(b, a)
    });

    function Y(a, b, c, d, e, f, g, i, p, h) {
        Y.Pa.call(this, a, b, c, d, e, f, g, i, p, h);
        a = ["Times New Roman", "Arial", "Times", "Sans", "Serif"];
        b = a.length;
        c = {};
        d = new L(this.c, this.t, this.H);
        M(d);
        O(d, a[0], this.s);
        c[d.m().width] = k;
        for (e = 1; e < b; e++) f = a[e], O(d, f, this.s), c[d.m().width] = k, "4" != this.s[1] && (O(d, f, this.s[0] + "4"), c[d.m().width] = k);
        d.remove();
        this.B = c;
        this.ta = m;
        this.Ga = this.o.serif;
        this.Ha = this.o["sans-serif"]
    } (function (a, b) {
        function c() { }
        c.prototype = a.prototype;
        b.prototype = new c;
        b.Pa = a;
        b.Ya = a.prototype
    })(K, Y);
    var wa = {
        Arimo: k,
        Cousine: k,
        Tinos: k
    };
    Y.prototype.W = function () {
        var a = this.F.m(),
            b = this.G.m();
        !this.ta && a.width == b.width && this.B[a.width] && (this.B = {}, this.ta = this.B[a.width] = k);
        (this.Ga.width != a.width || this.Ha.width != b.width) && !this.B[a.width] && !this.B[b.width] ? Q(this, this.Q) : 5E3 <= this.O() - this.pa ? this.B[a.width] && this.B[b.width] && wa[this.M] ? Q(this, this.Q) : Q(this, this.ha) : qa(this)
    };

    function xa(a, b, c) {
        this.V = a ? a : b + ya;
        this.g = [];
        this.aa = [];
        this.ra = c || ""
    }
    var ya = "//fonts.googleapis.com/css";
    xa.prototype.f = function () {
        if (0 == this.g.length) throw Error("No fonts to load !");
        if (-1 != this.V.indexOf("kit=")) return this.V;
        for (var a = this.g.length, b = [], c = 0; c < a; c++) b.push(this.g[c].replace(/ /g, "+"));
        a = this.V + "?family=" + b.join("%7C");
        0 < this.aa.length && (a += "&subset=" + this.aa.join(","));
        0 < this.ra.length && (a += "&text=" + encodeURIComponent(this.ra));
        return a
    };

    function za(a) {
        this.g = a;
        this.na = [];
        this.sa = {};
        this.T = {};
        this.I = new R
    }
    var Aa = {
        latin: "BESbswy",
        cyrillic: "&#1081;&#1103;&#1046;",
        greek: "&#945;&#946;&#931;",
        khmer: "&#x1780;&#x1781;&#x1782;",
        Hanuman: "&#x1780;&#x1781;&#x1782;"
    },
        Ba = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        Ca = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        Da = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
    za.prototype.parse = function () {
        for (var a = this.g.length, b = 0; b < a; b++) {
            var c = this.g[b].split(":"),
                d = c[0].replace(/\+/g, " "),
                e = ["n4"];
            if (2 <= c.length) {
                var f;
                var g = c[1];
                f = [];
                if (g)
                    for (var g = g.split(","), i = g.length, p = 0; p < i; p++) {
                        var h;
                        h = g[p];
                        if (h.match(/^[\w]+$/))
                            if (h = Da.exec(h.toLowerCase()), h == l) h = "";
                            else {
                                var q = j;
                                q = h[1];
                                if (q == l) q = "4";
                                else var s = Ba[q],
                                    q = s ? s : isNaN(q) ? "4" : q.substr(0, 1);
                                h = (h = this.I.expand([h[2] == l ? "n" : Ca[h[2]], q].join(""))) ? this.I.compact(h) : l
                            }
                        else h = "";
                        h && f.push(h)
                    }
                0 < f.length && (e = f);
                3 == c.length &&
                    (c = c[2], f = [], c = !c ? f : c.split(","), 0 < c.length && (c = Aa[c[0]]) && (this.T[d] = c))
            }
            this.T[d] || (c = Aa[d]) && (this.T[d] = c);
            this.na.push(d);
            this.sa[d] = e
        }
    };

    function Z(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c
    }
    Z.prototype.L = function (a, b) {
        b(a.z().J())
    };
    Z.prototype.ga = function () {
        return "AppleWebKit" == this.a.fa() ? Y : K
    };
    Z.prototype.load = function (a) {
        "MSIE" == this.a.getName() && this.d.blocking != k ? ca(t(this, this.ja, a)) : this.ja(a)
    };
    Z.prototype.ja = function (a) {
        for (var b = this.c, c = new xa(this.d.api, y(b), this.d.text), d = this.d.families, e = d.length, f = 0; f < e; f++) {
            var g = d[f].split(":");
            3 == g.length && c.aa.push(g.pop());
            var i = "";
            2 == g.length && "" != g[1] && (i = ":");
            c.g.push(g.join(i))
        }
        d = new za(d);
        d.parse();
        u(b, "head", v(b, c.f()));
        a(d.na, d.sa, d.T)
    };
    V.u("google", function (a, b) {
        var c = (new B(navigator.userAgent, document)).parse();
        return new Z(c, b, a)
    });

    function Ea(a, b) {
        this.c = a;
        this.d = b
    }
    var Fa = {
        regular: "n4",
        bold: "n7",
        italic: "i4",
        bolditalic: "i7",
        r: "n4",
        b: "n7",
        i: "i4",
        bi: "i7"
    };
    Ea.prototype.L = function (a, b) {
        return b(a.z().J())
    };
    Ea.prototype.load = function (a) {
        var b, c;
        u(this.c, "head", v(this.c, y(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
        var d = this.d.families,
            e, f;
        e = [];
        f = {};
        for (var g = 0, i = d.length; g < i; g++) {
            c = c = b = j;
            c = d[g].split(":");
            b = c[0];
            if (c[1]) {
                c = c[1].split(",");
                for (var p = [], h = 0, q = c.length; h < q; h++) {
                    var s = c[h];
                    if (s) {
                        var r = Fa[s];
                        p.push(r ? r : s)
                    }
                }
                c = p
            } else c = ["n4"];
            e.push(b);
            f[b] = c
        }
        a(e, f)
    };
    V.u("ascender", function (a, b) {
        return new Ea(b, a)
    });

    function $(a, b) {
        this.c = a;
        this.d = b;
        this.g = [];
        this.w = {};
        this.I = new R
    }
    $.prototype.N = function (a) {
        return y(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.K.location.hostname || this.c.P.location.hostname) + "/" + a + ".js"
    };
    $.prototype.L = function (a, b) {
        var c = this.d.id,
            d = this.c.K,
            e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function (a, c) {
            for (var d = 0, p = c.fonts.length; d < p; ++d) {
                var h = c.fonts[d];
                e.g.push(h.name);
                e.w[h.name] = [e.I.compact("font-weight:" + h.weight + ";font-style:" + h.style)]
            }
            b(a)
        }, u(this.c, "head", da(this.c, this.N(c)))) : b(k)
    };
    $.prototype.load = function (a) {
        a(this.g, this.w)
    };
    V.u("fontdeck", function (a, b) {
        return new $(b, a)
    });
    window.WebFontConfig && V.load(window.WebFontConfig);
})(this, document);


var API_URL = 'http://localhost:3003';
var __CURRENT_URL = location.href;
var splitURL = __CURRENT_URL.split(MAIN_URL + '/');
var __url = splitURL[splitURL.length - 1];
var split__url = __url.split('/');
var __page = split__url[0];
var __menu = split__url[split__url.length-1];
var __modules = (localStorage.getItem('__modules') ? JSON.parse(localStorage.getItem('__modules')) : null);
//console.log(__modules);

function showNav(response) {
    if (!localStorage.getItem('__modules')) {
        __modules = {};
    }

    // get navs in this page
    for (var i in response) {
        if (response.hasOwnProperty(i)) {
            if (!localStorage.getItem('__modules')) {
                __modules[response[i].id] = response[i];
            }
            if (response[i].parent != null) {
                $('.navigation_desktop > nav.main > .header_nav_' + response[i].parent + ' > .more > ul').append('<li class="header_nav_' + response[i].link + '"><a href="' + MAIN_URL + '/' + response[i].parent + '/' + response[i].link + '">' + response[i].text + '</a></li>');
            } else {
                $('.navigation_desktop > nav.main').append('<div class="item handle header_nav_' + response[i].link + '"><div class="more dropdown"><h4><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></h4><ul></ul></div><h4><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></h4><span class="plus"></span></div>');
                $('.navigation_mobile_main > ul').append('<li><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></li>')
            }
        }
    }
    if (!localStorage.getItem('__modules')) {
        localStorage.setItem('__modules', JSON.stringify(__modules));
    }
}

$(document).ready(function () {
    // get header nav
    if (!__modules) {
        $.getJSON(API_URL+'/modules', function (response) {
            showNav(response);
        });
    } else {
        showNav(__modules);
    }
})