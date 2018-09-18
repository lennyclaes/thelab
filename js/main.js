document.addEventListener('DOMContentLoaded', init);

let boxes;

function init() {
    boxes = document.querySelectorAll('.section-wrap');

    boxes.forEach((box) => {
        box.addEventListener('click', followLink);
    });
}

function followLink(e) {
    let link = 'http://' + window.location.host + '/' + e.path[0].attributes[1].value;
    if(e.path[0].attributes[1].value == 'merch') {
        link = 'http://store.thelab.be';
    }

    window.location.href = link;
}