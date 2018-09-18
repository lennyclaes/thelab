let kadersSrc = {
    malts: [],
    cane: [],
    grapes: [],
    beans: [],
    herbals: [],
    ice: []
};


let kaderCurImg = 0;
let kaders = [];
let int;

document.addEventListener('DOMContentLoaded', () => {
    kaders = document.querySelectorAll('img[kader]');

    kadersSrc.beans.push('img/BEANS_0.jpg');
    kadersSrc.beans.push('img/BEANS_1.jpg');
    kadersSrc.cane.push('img/CANE_0.jpg');
    kadersSrc.grapes.push('img/GRAPES_0.jpg');
    kadersSrc.herbals.push('img/HERBALS_0.png');
    kadersSrc.ice.push('img/ICE.jpg');
    kadersSrc.malts.push('img/MALTS_0.jpg');

    for(kader of kaders) {
        kader.addEventListener('mouseenter', kaderEnter);
        kader.addEventListener('mouseleave', kaderExit);
    }
});

function kaderEnter(e) {
    clearInterval(inter);
    slide(e.path[0].attributes[2].value, e.path[0]);
}

function kaderExit(e) {
    clearInterval(int);
    e.path[0].src = 'img/' + e.path[0].attributes[2].value + '_logo.png';
    kaderCurImg = 0;
    slideTop();
}

function slide(type, elt) {
    let needed = [];
    switch(type) {
        case "malts":
        needed = kadersSrc.malts;
        break;
        case "cane":
        needed = kadersSrc.cane;
        break;
        case "grapes":
        needed = kadersSrc.grapes;
        break;
        case "beans":
        needed = kadersSrc.beans;
        break;
        case "herbals":
        needed = kadersSrc.herbals;
        break;
        case "ice":
        needed = kadersSrc.ice;
    }
    elt.src = needed[kaderCurImg];
    if(needed.length > 1) {
        kaderCurImg++;
    }
    int = setInterval(() => {
        elt.src = needed[kaderCurImg];
        kaderCurImg++;
        if(kaderCurImg >= needed.length) {
            kaderCurImg = 0;
        }
    }, 2000);
}