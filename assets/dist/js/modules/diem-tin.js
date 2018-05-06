$(document).ready(function () {
    $('.subcats a').click(function () {
        var tabID =$(this).parent('li').attr('class');
        $('.subcats a').removeClass('active');
        $(this).addClass('active');
        $('.news-focus .highlights').hide();
        $('.news-focus .highlights#'+tabID).show();
        return false;
    })
})