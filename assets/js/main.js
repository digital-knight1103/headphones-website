/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');

//menu show
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
//menu hidden
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
//after click on list element our menu hide

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.querySelector('.nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(el => el.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*==================== SHOW SCROLL UP ====================*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

