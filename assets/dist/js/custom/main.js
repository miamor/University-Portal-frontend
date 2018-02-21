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

/* !Web Font Config *
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
            ExplorePictures._resize();
        });
    }
};*/


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
        if ($(window).width() >= 980) { // DESKTOP ONLY
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



// Site Ready
$(document).ready(function () {
    //Site._init();
    console.log('ready');
    Header._init();
    HomeFeature._init();
});


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


