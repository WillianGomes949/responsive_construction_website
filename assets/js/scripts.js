/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

/* Menu show*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hide*/

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction)
);


/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()


/*=============== SWIPER SERVICES ===============*/ 

const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
