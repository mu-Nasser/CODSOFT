document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('show');
});



// up to top butoon

const upToTop = document.querySelector('.uptotop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        upToTop.classList.add('activ');
    } else {
        upToTop.classList.remove('activ');
    }
});



upToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
