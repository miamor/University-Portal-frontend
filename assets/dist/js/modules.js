function showNavTab() {
    console.log(__modules);
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

function selectCat (cat) {
    // load news in this cat
    $this = $('#body_content');
    $this.html(tmpl);
    $.getJSON(API_URL + '/posts', function (postscat) {
        renderContent($this, postscat);
    });
}

function module_showCatList (cats) {
    console.log(__menu);
    if (typeof cats == 'string') cats = [cats];
    $.each(cats, function (key, cat) {
        $.getJSON(API_URL+'/categories/' + cat, function (v) {
            console.log(v);
            activeCls = (v.link == __menu ? 'active' : '');
            $('.naver-container > ul').append('<li class="modules_' + v.link + '"><a class="' + activeCls + ' select-cat" href="#" onclick="selectCat(\''+v.link+'\'); return false">' + v.name + '</a></li>');
        })
    })
}


var currentModule = null;
var moduleID = '';
var tmpl = '';

$(document).ready(function () {
    // get module content
    $.getJSON(API_URL+'/modules/' + __menu, function (response) {
        tmpl = response.content;
        $this = $('#body_content');
        $this.html(tmpl);

        moduleID = response._id;
        currentModule = response;

        if (response.type == "news") {
            loadRenderNews($this, response);
        }
        if (response.left == "cats") {
            module_showCatList(response.cat);
        } else {
            showNavTab();
        }        
    })
})