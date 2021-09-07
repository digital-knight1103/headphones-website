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
// const changeBackground = () => {
//   const header = document.querySelector('.header')

//   if(window.scrollY >= 100) {
//     header.classList.add('scroll-header')
//   } else { 
//     header.classList.remove('scroll-header')
//   };

// window.addEventListener('scroll', changeBackground);

function scrollHeader() {
  const header = document.querySelector('.header')

  if(window.scrollY >= 50) {
    header.classList.add('scroll-header')
  } else { 
    header.classList.remove('scroll-header')
  }
} 

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUp = document.querySelector('.scrollup');
  if(this.scrollY >= 200) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

function scrollActiv() {
  const scrollY = window.pageYOffset

  section.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActiv)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal('.home__header, .section__title', {delay:600, scale: 0.8})
sr.reveal('.home__footer', {delay:700})
sr.reveal('.home__img', {delay:900, origin: 'top', })

sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy', {origin: 'top', interval: 300, scale: 0.5})
sr.reveal('.specs__data, .discount__animate', {origin: 'left', interval: 300})
sr.reveal('.specs__img, .discount__img', {origin: 'right'})

sr.reveal('.case__img', {origin: 'top',scale: 0.8})
sr.reveal('.case__data', {origin: 'bottom',scale: 0.9})