const hamburger = document.querySelector('.header__menu .hamburger');
const menu_mobile = document.querySelector('.header__menu .menu__nav');

hamburger.addEventListener('click', () => {
    /**/
    hamburger.classList.toggle('active');
    menu_mobile.classList.toggle('active');
});