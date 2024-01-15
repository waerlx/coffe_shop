// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
//   const betBurger = document.querySelector('.menu_burger')
//   const menu = document.querySelector('.nav-main')
//   const menuHeight = document.querySelector('.nav-main').scrollHeight
//   betBurger.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//         this.classList.remove('active')
//         menu.style.height = 0
//         menu.classList.remove('active')

// const { replace } = require("core-js/fn/symbol");


//     } else{
//         this.classList.add('active')
//         menu.classList.add('active')
//         menu.style.height = menuHeight + "px"

//     }
// })
// document.querySelector(".menu_burger").classList.contains(".active")







// const popupLinks = document.querySelectorAll('.popup-link')
// const body = document.querySelector('body')
// const lockPadding = document.querySelectorAll('.lock-padding')

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener("click", function (e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close-popup')
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }
// function popupOpen(curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener("click", function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });

//     }
// }
// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open');
//         if (doUnlock) {
//             bodyUnLock();
//         }
//     }
// }
// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//     if(lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = lockPaddingValue;
//         }
//     }
   
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');


//     unlock = false;
//     setTimeout (function() {
//         unlock = true;
//     }, timeout);
// }
// function bodyUnLock () {
//     setTimeout(function () {
//         if (lockPadding.length > 0){
//             for (let index = 0; index < lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//             }
//         }
        
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');

//     }, timeout);

//     unlock = false;
//     setTimeout (function() {
//         unlock = true;
//     }, timeout);

// }
// document.addEventListener('keydown', function (e){
//     if (e.which === 27) {
//         const popupActive = document.querySelector('.popup.open');
//         popupClose(popupActive);
//     }
// });
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }
let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('lock');
};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('lock');
};
