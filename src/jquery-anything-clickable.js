jQuery(function ($) {
    $('[data-href]').each(function () {
        $(this).css('cursor', 'pointer');
        $(this).click(function () {
            var href = $(this).attr("data-href");
            if (href) {
                window.location = href;
            }
        })
    });
});