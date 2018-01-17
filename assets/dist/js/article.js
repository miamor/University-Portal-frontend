$(document).ready(function () {
    // get module content
    $.getJSON(API_URL+'/posts/find_by_link/' + __menu, function (response) {
        tmpl = response.content;
        $this = $('#middlepath_story');
        $this.html(tmpl);
        $this.prepend('<h4 class="dateline"><i class="fa fa-clock-o"></i> Đăng lúc '+response.created_time+'</h4>');
        if (response.thumbnail) $this.prepend('<img class="feature_image" src="'+response.thumbnail+'"/>');
        $('#main_page_title').html(response.name);
        $('#article_author').html(response.author).click(function () {
            return false
        });
        if (typeof response.cat == 'string') response.cat = [response.cat];
        $.each(response.cat, function (i, v) {
            $.getJSON(API_URL+'/categories/'+v, function (r) {
                $('#cat_list').append('<li><a class="active_category orange" href="'+r.link+'">'+r.name+'</a></li>');
            })
        })
    })
})