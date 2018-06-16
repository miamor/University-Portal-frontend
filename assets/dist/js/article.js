$(function () {
    // get module content
    $.getJSON(API_URL+'/posts/find_by_link/' + __menu, function (response) {
        breadCump([{
            'link': MAIN_URL,
            'text': 'Home',
        }, {
            'link': MAIN_URL+'/tin-tuc',
            'text': 'Tin tức',
        }, {
            'link': response.link,
            'text': response.name,
        }]);

        tmpl = response.content;
        $this = $('#middlepath_story');
        $this.html(tmpl);
        $this.prepend('<h4 class="dateline"><i class="fa fa-clock-o"></i> Đăng lúc '+response.created_time+'</h4>');
        if (response.thumbnail) $this.prepend('<img class="feature_image" src="'+response.thumbnail+'"/>');
        $('#main_page_title').html(response.name);
        $('#article_author').html(response.author).click(function () {
            return false
        });
        $('#views_sta').html(response.views);
        //$('.article-view').remove();
        if (typeof response.cat == 'string') response.cat = [response.cat];
        $.each(response.cat, function (i, v) {
            //console.log(v);
            $.getJSON(API_URL+'/categories/'+v, function (r) {
                if (!$('#cat_list [attr-cat="'+v.link+'"]').length) {
                    $('#cat_list').append('<li attr-cat="'+v.link+'"><a class="active_category green" href="'+r.link+'">'+r.name+'</a></li>');
                }
            })
        })
    })
})