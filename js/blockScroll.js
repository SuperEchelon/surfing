function blockScroll() {
    const html = document.documentElement;
    html.classList.toggle('locked');
}

function isScrollBlocked() {
    const html = document.documentElement;
    return html.classList.contains('locked');
}