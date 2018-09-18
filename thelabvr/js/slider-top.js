let imgs = [];
let imgElt;
let curImg = 0;
let inter;

document.addEventListener('DOMContentLoaded', () => {
    imgElt = document.querySelector('#top-imgs');

    for(let i = 0; i < 4; i++) {
        imgs.push('TOP_' + i + '.jpg');
    }

    imgElt.style.background = 'url(img/' + imgs[curImg] + ')';
    imgElt.style.backgroundRepeat = "no-repeat";
    imgElt.style.backgroundPosition = "top";
    imgElt.style.backgroundSize = "100vw 100vh";
    curImg++;

    slideTop();
});

function slideTop() {
    inter = setInterval(() => {
        imgElt.style.background = 'url(img/' + imgs[curImg] + ')';
        imgElt.style.backgroundRepeat = "no-repeat";
        imgElt.style.backgroundPosition = "top";
        imgElt.style.backgroundSize = "100vw 100vh";
        curImg++;
        if(curImg >= imgs.length) {
            curImg = 0;
        }
    }, 4000);
}

