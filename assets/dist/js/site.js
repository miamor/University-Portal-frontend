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


var Site = {
    maxWidth: Infinity,
    maxHeight: Infinity,

    _init: function () {
        Header._init();
        Subnavigation._init();
        Alerts._init();
        MobileSearch.init();

        $(".scrollto, a[href^='#']").not(".no_scroll, .recent_graduates nav a").click(Site._scrollTo);
        $(".video, .youtube").on("click", ".video_replace", Site._displayVideo);
        $(".grouped_list").on("click", ".title", Site._expandList);

        $(window).one("snap", function () {
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

        //MiddlePath._closeRelated();

        //Site.$masons.masonry(Site.masonryOptions);

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