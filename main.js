/* TASK: OPEN AND CLOSE HAMBURGER-MENU */
//element selection and storing in variables
const btn_menuHamburger = document.querySelector('.fas.fa-bars');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const btn_close = document.querySelector('.fas.fa-times');

//hamburger-menu button on click hamburger-menu open
btn_menuHamburger.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
});

//closing button on click hamburger-menu close
btn_close.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
});