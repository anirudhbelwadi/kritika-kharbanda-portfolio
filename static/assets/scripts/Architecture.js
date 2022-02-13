$('.hover_image').hover(function () {
    $(this).addClass('hover_style');
    $('.hover_title').addClass('hover_style');
},
    function () {
        $(this).removeClass('hover_style');
        $('.hover_title').removeClass('hover_style');
    });