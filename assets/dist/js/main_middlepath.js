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