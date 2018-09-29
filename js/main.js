document.addEventListener('DOMContentLoaded', init);

let cols;
let overlayElt;
let overlayTrigger;
let closeBtn;

function init() {
    cols = document.querySelectorAll('.col');
    overlayElt = document.querySelector('.overlay');

    overlayTrigger = document.querySelector('#brand img');
    closeBtn = document.querySelector('.close-btn');

    overlayTrigger.addEventListener('click', overlay);
    closeBtn.addEventListener('click', overlay);

    cols.forEach((col) => {
        col.addEventListener('click', (e) => {
            if(/Mobi|Android/i.test(navigator.userAgent)) {
                let text = e.path[0].childNodes[1].childNodes[5];
                col.classList.toggle('show');
                cols.forEach((col2) => {
                    if(col2 != col) {
                        col2.classList.toggle('hide');
                    }
                });
            }
        });
    });
}

function overlay() {
    overlayElt.classList.toggle('show');
}