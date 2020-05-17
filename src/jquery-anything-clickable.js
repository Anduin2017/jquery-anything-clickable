import $ from 'jquery';

class Clickable {
    constructor(pattern) {
        $(`[${pattern}]`).each((index, element) => {
            var it = $(element);
            it.css('cursor', 'pointer');
            it.click(() => {
                var href = it.attr(pattern);
                if (href) {
                    window.location = href;
                }
            })
        });
    }
}

export { Clickable }
