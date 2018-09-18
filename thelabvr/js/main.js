document.addEventListener('scroll', scrolled);

function scrolled() { 
    let logo = document.getElementById('logo-img');
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        logo.classList.add('show');
    } 
    else  {
        logo.classList.remove('show');
    }
}
