var __CURRENT_URL = location.href;
var splitURL = __CURRENT_URL.split(MAIN_URL + '/');
var __url = splitURL[splitURL.length - 1];
var split__url = __url.split('/');
var __page = split__url[0];
var __menu = split__url[split__url.length - 1];
var __menu_parent_ar = __url.split('/' + __menu)[0].split('/');
var __menu_parent = __menu_parent_ar[__menu_parent_ar.length - 1];
//var __modules = (localStorage.getItem('__modules') ? JSON.parse(localStorage.getItem('__modules')) : null);
var __modules = null;
//console.log(__modules);
var __siteInfo = null;
var __tmpl = null;
var __hasGalModules = false;

function handleModules(response) {
    //if (!localStorage.getItem('__modules')) {
    __modules = {};
    //}
    //console.log(response);
    // handle modules data and show in nav at the same time
    for (var i in response) {
        if (response.hasOwnProperty(i)) {
            //if (!localStorage.getItem('__modules')) {
            __modules[response[i]._id] = response[i];
            //}
            if (response[i].parent != null && response[i].parent) {
                $('.navigation_desktop > nav.main > .header_nav_' + response[i].parent + ' > .more > ul').append('<li class="header_nav_' + response[i].link + '"><a href="' + MAIN_URL + '/' + response[i].parent + '/' + response[i].link + '">' + response[i].text + '</a></li>');
            } else {
                $('.navigation_desktop > nav.main').append('<div class="item handle header_nav_' + response[i].link + '"><div class="more dropdown"><h4><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></h4><ul></ul></div><h4><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></h4><span class="plus"></span></div>');
                $('.navigation_mobile_main > ul').append('<li><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></li>')
            }
        }
    }
    // after load nav bar, then apply header 
    //Header._init();
    /*if (!localStorage.getItem('__modules')) {
        localStorage.setItem('__modules', JSON.stringify(__modules));
    }*/
}

function renderContent($a, __Posts, url) {
    //console.log('called renderContent');
    //console.log(__Posts);
    $a.find('[for]').each(function () {
        $thisLoop = $(this);
        //console.log($thisLoop);
        loopVar = $(this).attr('for').split('=')[0];
        rx = /{([^}]+)}/g;
        loopD = rx.exec($(this).attr('for').split('=')[1])[1];
        loopStart = Number(loopD.split(' to ')[0]);
        loopEnd = loopD.split(' to ')[1];

        var loopContent_tpl = $thisLoop.html();
        var Loaded = [];

        /*
        for (var k = loopStart; k <= loopEnd; k++) {
            //console.log(k);
            //console.log(_Posts[k]);
            //if ($.inArray(k, Loaded) == -1) {
            Loaded.push(k);
            $.each(__Posts, function (pi, pv) {
                if (pv[k]) $thisLoop.append(loopContent.split('posts[' + loopVar + ']').join('posts[' + k + ']'));
            });
            //if (_Posts[k]) $thisLoop.append(loopContent.split('posts[' + loopVar + ']').join('posts[' + k + ']'));
            //}
        }*/
        var _Posts = [];
        var sP = false;

        $thisLoop.html(loopContent_tpl.split('posts[' + loopVar + ']').join('posts['+loopStart+']'));
        var loopContent = $thisLoop.html();
        var loopContents = [];

        var rxp = /{{([^}]+)}}/g,
            curMatch;
        var check = {};
        console.log(__Posts);
        while (curMatch = rxp.exec(loopContent)) {
            console.log(curMatch);
            var rf = curMatch[0];
            //console.log(rf);
            v = curMatch[1];
            j = v.match(/\[([^\]]+)\]/)[1];
            //attribute = v.split('.')[1];
            attribute = v.match(/\.(.+)/)[1];
            tp = v.split(':')[0];
            if (sP == false) {
                sP = true;
                if (v.indexOf(':') > -1) {
                    _Posts = __Posts[tp];
                } else {
                    //console.log('merge all Posts');
                    $.each(__Posts, function (pi, pv) {
                        $.each(pv, function (ppi, ppv) {
                            //console.log(ppv);
                            _Posts.push(ppv);
                        })
                    });
                    //console.log(_Posts);
                }

                if (loopEnd == 'last') loopEnd = _Posts.length - 1 + loopStart;
                loopEnd = Number(loopEnd);

                for (var k = loopStart+1; k <= loopEnd; k++) {
                    if (_Posts[k]) {
                        Loaded.push(k);
                        $thisLoop.append(loopContent_tpl.split('posts[' + loopVar + ']').join('posts[' + k + ']'));
                    }
                }
                loopContent = $thisLoop.html();
            }

            var re = null;
            if (!check[j + '___' + attribute]) {
                if (v.indexOf(':') > -1) {
                    re = new RegExp('{{' + tp + ':posts\\[' + j + '\\].' + attribute + '}}', "g");
                } else {
                    re = new RegExp('{{posts\\[' + j + '\\].' + attribute + '}}', "g");
                }
                //console.log(tp);
                //console.log(_Posts);
                if (_Posts[j]) {
                    //console.log(rxp);
                    //console.log(re);
                    //console.log(attribute);
                    //console.log(_Posts[j][attribute]);
                    if (attribute == 'link') {
                        //loopContent = loopContent.split('{{'+v+'}}').join(_Posts[j][attribute].replace('{{MAIN_URL}}', MAIN_URL));
                        loopContent = loopContent.replace(re, _Posts[j][attribute].replace('{{MAIN_URL}}', MAIN_URL));
                    } else {
                        //loopContent = loopContent.split('{{'+v+'}}').join(_Posts[j][attribute]);
                        loopContent = loopContent.replace(re, _Posts[j][attribute]);
                    }
                }
                check[j + '___' + attribute] = true;
                //console.log(loopContent);
            }

        }

        url = url.split('page=')[0];

        //loopContent += '<ul class="pagination"><li class="paginate_button previous disabled" id="list_previous"><a href="#">Previous</a></li><li class="paginate_button active"><a href="#" click="javascript:selectPageNews()">1</a></li><li class="paginate_button "><a href="#">2</a></li><li class="paginate_button next" id="list_next"><a href="#">Next</a></li></ul>';

        $thisLoop.html(loopContent);
        $thisLoop.find('.hide-this-post').remove();
    });
}

function loadRenderNews($this, response) {
    //console.log('called loadRenderNews');
    var catGet = response.cat;
    if (typeof catGet == 'string' && catGet != 'all') catGet = [catGet];
    var Cats = [];
    var News = {};
    var loadedAllPosts = false;
    var loadedPostsThisModule = false;

    // load news
    var rxp = /{{([^}]+)}}/g,
        curMatch;
    while (curMatch = rxp.exec(response.content)) {
        v = curMatch[1];

        if (v.indexOf(':') > -1) { // contains :
            catid = v.split(':')[0];
            if ($.inArray(catid, ['module', 'site']) == -1) {
                //attribute = v.split('.')[1];

                //var catstt = Cats.length;
                //if ($.inArray(catid, Cats) == -1) {
                if (!$('.__getpostsmodule[attr-cat="' + catid + '"]').length) {
                    $('body').append('<div class="__getpostsmodule" attr-cat="' + catid + '"></div>');
                    Cats.push(catid);

                    if (loadedPostsThisModule == false && typeof catGet != 'string' && $.inArray(catid, catGet) > -1) { // this catid is allowed to get
                        var url = API_URL + '/posts/cats/' + catGet.join(',');
                        $.getJSON(url, function (postscat) {
                            //News[catid] = postscat;
                            //console.log(postscat);
                            renderContent($this, postscat, url);
                        });
                        loadedPostsThisModule = true;
                    } else {

                    }
                }
            }
        } else if (!loadedAllPosts) {
            loadedAllPosts = true;
            var url = API_URL + '/posts';
            if (catGet != 'all') url = API_URL + '/posts/cats/' + catGet.join(',');
            $.getJSON(url, function (postscat) {
                renderContent($this, postscat, url);
            });
        }
    }
}

function loadRenderGallery($this, response) {
    var loaded = false;
    // load news
    var rxp = /{{item([^}]+)}}/g,
        curMatch;
    while (curMatch = rxp.exec(response.content)) {
        v = curMatch[1];
        if (!loaded) {
            $.getJSON(API_URL + '/images/module/' + response.link, function (images) {
                renderContentGal($this, images);
            });
            loaded = true;
        } else {
            break;
        }
    }
}

function renderContentGal($a, _Posts) {
    //console.log($a);
    var divID = $a.attr('attr-module');
    if (!divID) divID = $a.attr('id');
    $a.find('[for]').each(function () {
        $thisLoop = $(this);
        loopVar = $(this).attr('for').split('=')[0];
        rx = /{([^}]+)}/g;
        loopD = rx.exec($(this).attr('for').split('=')[1])[1];
        loopStart = Number(loopD.split(' to ')[0]);
        loopEnd = loopD.split(' to ')[1];
        if (loopEnd == 'last') loopEnd = _Posts.length - 1 + loopStart;
        else loopEnd = Number(loopEnd);
        //console.log(loopStart + '~' + loopEnd);

        var loopContent = $thisLoop.html();

        $thisLoop.html('');
        for (var k = loopStart; k <= loopEnd; k++) {
            $thisLoop.append(loopContent.split('item[' + loopVar + ']').join('item[' + k + ']'));
        }

        loopContent = $thisLoop.html();
        var loopContents = [];

        var rxp = /{{([^}]+)}}/g,
            curMatch;
        var check = {};
        while (curMatch = rxp.exec(loopContent)) {
            v = curMatch[1];
            j = v.match(/\[([^\]]+)\]/)[1];
            attribute = v.split('.')[1];
            tp = v.split(':')[0];

            if (!check[j + '___' + attribute]) {
                re = new RegExp('{{item\\[' + j + '\\].' + attribute + '}}', "g");
                if (_Posts[j]) {
                    if (attribute == 'media') {
                        if (_Posts[j].url.match(/\.(jpeg|jpg|gif|png)$/)) {
                            loopContent = loopContent.replace(re, '<a id="gal_' + divID + '_item_' + j + '" data-fancybox="gal_' + divID + '" data-caption="' + _Posts[j].name + '"><img src="' + _Posts[j].url + '"/></a>');
                        }
                    } else {
                        //loopContent = loopContent.split('{{'+v+'}}').join(_Posts[j][attribute]);
                        loopContent = loopContent.replace(re, _Posts[j][attribute]);
                    }
                    //console.log(loopContent);
                }
                check[j + '___' + attribute] = true;
            }
        }

        $thisLoop.html(loopContent);

        /*$('a.gal_'+divID).click(function () {
            $.fancybox.open('<div class="message-popup">'+loopContent+'</div>');
        });*/

    });
}


function loadPage(response) {
    handleModules(response);
    // find {{module}} and replace with module template
    loadModulesTemplates('#main_page_content');
}

function renderModule($div, response) {
    //console.log('called renderModule');
    var v = response.link;
    response.content = renderSiteInfo($div, response.content);
    $div.html(response.content);
    //var content = $div.html();
    if (response.javascript != null && response.javascript == "true") {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = MAIN_URL + '/assets/dist/js/modules/' + v + '.js';
        $("head").append(s);
        //$('body').append('<script type="text/javascript" src="'+MAIN_URL+'/assets/dist/js/modules/'+v+'.js"></script>');
    }
    if (response.type == "news") {
        loadRenderNews($div, response);
    } else if (response.type == "gallery") {
        loadRenderGallery($div, response);
    }
}

function loadModulesTemplates(a) {
    var $div = $(a);
    //console.log($div);
    var content = $div.html();
    var rxp = /{{module:([^}]+)}}/g,
        curMatch;
    var ok = false;
    //if (content.match(rxp)) ok = true;
    queryModules = [];
    while (curMatch = rxp.exec(content)) {
        v = curMatch[1];
        content = content.replace('{{module:' + v + '}}', '<div class="load_module" attr-module="' + v + '"></div>');
        queryModules.push(v);
    }
    $div.html(content);

    //console.log(API_URL + '/modules/m/' + queryModules.join(','));
    $.getJSON(API_URL + '/modules/m/' + queryModules.join(','), function (response) {
        //console.log(response);
        $div.find('.load_module').each(function () {
            var v = $(this).attr('attr-module');
            $this = $div.find('.load_module[attr-module="' + v + '"]');
            //$this.html(response.content);
            if (response[v].type == 'gallery') {
                __hasGalModules = true;
            }
            renderModule($this, response[v]);
        });
    });

    /*$div.find('.load_module').each(function () {
        //$this = $div.find('.load_module[attr-module="'+v+'"]');
        var v = $(this).attr('attr-module');
        //$('body').append(v);

        $.getJSON(API_URL + '/modules/' + v, function (response) {
            $this = $div.find('.load_module[attr-module="' + v + '"]');
            //$this.html(response.content);
            renderModule($this, response);
        });
    })*/
}

function renderSiteInfo($div, content) {
    var response = __siteInfo;
    if (!content) content = $div.html();
    var module = $div.attr('attr-module');
    var rxp = /{{site:([^}]+)}}/g,
        curMatch;
    while (curMatch = rxp.exec(content)) {
        v = curMatch[1];
        content = content.replace('{{site:' + v + '}}', response[v]);
    }
    return content;
}


/* Functions on module page */
function showNavTab() {
    //console.log(__modules);
    // get navs (child modules of this first level module)
    $.each(__modules, function (i, v) {
        //console.log(v);
        if (v.parent && v.parent != __page) {
            if (!$('.naver-container ul li.modules_' + v.parent + ' > ul').length) {
                $('.naver-container ul li.modules_' + v.parent).append('<ul class="depth_2"></ul>');
            } else {
                $('.naver-container ul li.modules_' + v.parent + ' ul').append('<li class="modules_' + v.link + '"><a href="' + MAIN_URL + '/' + __page + '/' + v.parent + '/' + v.link + '">' + v.text + '</a></li>');
                if (v.link == __menu) {
                    //$('.naver-container > ul > li > a').removeClass('active');
                    $('.naver-container ul li.modules_' + v.parent).closest('ul').find('li > a').removeClass('active');
                    $('.naver-container ul li.modules_' + v.parent + ' > a').addClass('active');
                    $('.naver-container ul li.modules_' + v.link + ' > a').addClass('active');
                }
            }
        } else if (v.parent == __page) {
            activeCls = (v.link == __menu ? 'active' : '');
            $('.naver-container > ul').append('<li class="modules_' + v.link + '"><a class="' + activeCls + '" href="' + MAIN_URL + '/' + v.parent + '/' + v.link + '">' + v.text + '</a></li>');
        }
    });
}

function selectCat(cat) {
    // load news in this cat
    $this = $('#__module_content');
    $this.html(__tmpl);
    var url = API_URL + '/posts/cats/' + cat;
    $.getJSON(url, function (postscat) {
        window.history.pushState({}, "", location.href.split('?')[0] + '?cat=' + cat);
        renderContent($this, postscat, url);
    });
}

function module_showCatList(cats) {
    //console.log(__menu);
    if (cats == 'all') {
        $.getJSON(API_URL + '/categories', function (allCats) { // get all Cats
            $.each(allCats, function (key, cat) {
                $.getJSON(API_URL + '/categories/' + cat.link, function (v) {
                    //console.log(v);
                    activeCls = (v.link == __menu ? 'active' : '');
                    $('.naver-container > ul').append('<li class="modules_' + v.link + '"><a class="' + activeCls + ' select-cat" href="#" onclick="selectCat(\'' + v.link + '\'); return false">' + v.name + '</a></li>');
                })
            })
        })
    } else {
        if (typeof cats == 'string') cats = [cats];
        $.each(cats, function (key, cat) {
            $.getJSON(API_URL + '/categories/' + cat, function (v) {
                //console.log(v);
                activeCls = (v.link == __menu ? 'active' : '');
                $('.naver-container > ul').append('<li class="modules_' + v.link + '"><a class="' + activeCls + ' select-cat" href="#" onclick="selectCat(\'' + v.link + '\'); return false">' + v.name + '</a></li>');
            })
        })
    }
}

function selectPageNews(cat, page) {

}


function breadCump(pathWayAr) {
    $('.__breadcrumb').html('');
    $.each(pathWayAr, function (i, v) {
        if (i > 0) $('.__breadcrumb').append('<span>–</span>');
        if (i == pathWayAr.length - 1) cls = 'last';
        else cls = '';
        $('.__breadcrumb').append('<a href="' + v.link + '" class="' + cls + '">' + v.text + '</a>');
    })
}

$(document).ready(function () {
    // get site info
    /*$.getJSON(API_URL + '/info', function (response) {
        __siteInfo = response;
        $('body').html(renderSiteInfo($('body')));
        Site._init();
    });*/

    $.getJSON(API_URL + '/loadpage', function (res) {
        __siteInfo = res.info[0];
        $('body').html(renderSiteInfo($('body')));

        modules = res.modules;
        loadPage(modules);

        //console.log(modules);

        __current_url = window.location.href.split(MAIN_URL + '/')[1].split('/');
        //console.log(__current_url);
        breadPathAr = [{
            'link': MAIN_URL,
            'text': 'Home',
        }];
        for (var i = 0; i < __current_url.length - 1; i++) {
            v = __current_url[i];
            $.each(modules, function (mi, mv) {
                if (v == mv.link) {
                    breadPathAr.push({
                        'link': breadPathAr[breadPathAr.length - 1].link + '/' + v,
                        'text': mv.text,
                    })
                }
            });
        }

        if (__menu && __page != 'article') { // load menu
            loadModuleMenu(__menu, breadPathAr);
        }
        if (__page == 'article' && __menu) {
            $.getScript(MAIN_URL + '/assets/dist/js/article.js');
        }

        Site._init();
    });

    // load external js
    /*$.getJSON(API_URL + '/js', function (response) {
        $.each(response, function (i, v) {
            $.getScript(MAIN_URL+'/assets/dist/js/custom/'+v.filename+'.js', function (d) {
                //console.log(d)
            });
        })
    });*/
});

function loadModuleMenu(__menu, breadPathAr) {
    $.getJSON(API_URL + '/modules/' + __menu, function (response) {
        $('#main_page_title').html(response.text);
        //console.log(response.link);

        breadPathAr.push({
            'link': breadPathAr[breadPathAr.length - 1].link + '/' + response.link,
            'text': response.text,
        })

        breadCump(breadPathAr);

        __tmpl = response.content;

        $this = $('#__module_content');
        $this.attr({
            'class': 'render_module module-type-' + response.type,
            'attr-module': __menu
        })
        //console.log(__menu+'~'+__menu_parent+'~'+response.parent)

        if (response.type == 'gallery') {
            __hasGalModules = true;
        }

        if (response.parent && response.parent != __menu_parent) {
            $this.html('Wrong link');
        } else {
            renderModule($('#__module_content'), response);
        }

        if (response.left == "cats") {
            module_showCatList(response.cat);
        } else {
            showNavTab();
        }
    })
}