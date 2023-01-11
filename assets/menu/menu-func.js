const hamburger = document.querySelector('.header__menu .hamburger');
const menu_mobile = document.querySelector('.header__menu .menu__list');

hamburger.addEventListener('click', () => {
    /**/
    hamburger.classList.toggle('active');
    menu_mobile.classList.toggle('active');
});