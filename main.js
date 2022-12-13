const navIcon = document.querySelector('.nav__icon')
const navClose = document.querySelector('.nav__close')
const navList = document.querySelector('.nav__list')
const navOverlay = document.querySelector('.nav__bg-overlay')

const navOpen = () => {
    navList.classList.add('show');
    navOverlay.classList.add('active')
    document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden';
}

const closeNavigation = () => {
    navList.classList.remove('show');
    navOverlay.classList.remove('active');
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden';
}

navIcon.addEventListener('click', navOpen)

navClose.addEventListener('click', closeNavigation)

//Animate on Scroll

AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top bottom'
})