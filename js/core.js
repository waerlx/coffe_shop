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

const { replace } = require("core-js/fn/symbol");

        
//     } else{
//         this.classList.add('active')
//         menu.classList.add('active')
//         menu.style.height = menuHeight + "px"

//     }
// })
// document.querySelector(".menu_burger").classList.contains(".active")
const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelectorAll('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#','');
            const currentPopup = document.getel
        })
    }
}