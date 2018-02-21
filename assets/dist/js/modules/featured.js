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

var OLDIE = OLDIE || false;

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

        if ($(window).width() >= 1220) { // DESKTOP ONLY
            var diff = scrollTop - HomeFeature.viewportSplit;
            if ($(window).height() <= 750) {
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

            if ($(window).width() < 740) {
                HomeFeature.minHeight = minHeight + 100;
            } else {
                if (minHeight + 175 < 400) {
                    HomeFeature.minHeight = 400;
                } else {
                    HomeFeature.minHeight = minHeight + 175;
                }
            }

            if ($(window).width() > 980) {
                var featureHeight = Lib.WindowHeight();
                if ($(window).height() > 750 && $(window).width() > 740) {
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

            if ($(window).width() <= 980) {
                newMargin = ((HomeFeature.minHeight - HomeFeature.controlHeight) / 2);
            } else {
                newMargin = ((viewportHeight - HomeFeature.controlHeight) / 2) + 60;
                if ($(window).width() >= 740) {
                    newMargin -= 35;
                }
            }

            if ($(window).width() <= 740) {
                $('#home_middlepath').css('padding-top', 310)
            } else {
                $('#home_middlepath').css('padding-top', 390)
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


// Site Ready
$(document).ready(function () {
    //Site._init();
    //Header._init();
    HomeFeature._init();
    //Subnavigation._init();
    //MobileSearch.init();
});
