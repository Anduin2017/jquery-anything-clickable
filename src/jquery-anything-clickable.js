import $ from 'jquery';

class Clickable {
    constructor(pattern) {
        $(`[${pattern}]`).each(() => {
            $(this).css('cursor', 'pointer');
            $(this).click(() => {
                var href = $(this).attr(pattern);
                if (href) {
                    window.location = href;
                }
            })
        });
    }
}

export { Clickable }
