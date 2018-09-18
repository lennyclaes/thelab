let btns = [];

document.addEventListener('DOMContentLoaded', () => {
    btns = document.querySelectorAll('img[social]');
    for(btn of btns) {
        btn.addEventListener('mouseover', enter);
        btn.addEventListener('mouseleave', exit);
    }
});

function enter(e) {
    e.path[0].src = 'img/' + e.path[0].attributes[2].value + '_color.svg';
}

function exit(e) {
    e.path[0].src = 'img/' + e.path[0].attributes[2].value + '.svg';
}