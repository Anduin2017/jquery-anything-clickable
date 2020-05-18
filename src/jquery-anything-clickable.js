class Clickable {
    constructor(pattern) {
        document.querySelectorAll(`[${pattern}]`).forEach((element) => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', () => {
                var href = element.getAttribute(pattern);
                if (href) {
                    window.location = href;
                }
            })
        });
    }
}

export default Clickable
