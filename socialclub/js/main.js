let video = document.querySelector('video');

video.addEventListener('click', videoClicked);

function videoClicked(e) {
    e.target.setAttribute('controls', 'controls');
    setTimeout(() => {
        e.target.removeAttribute('controls');
    }, 4000);
}