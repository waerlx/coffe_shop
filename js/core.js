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







const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelectorAll('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault()
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}
function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });

    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive>classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if(lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
   
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');


    unlock = false;
    setTimeout (function() {
        unlock = true;
    }, timeout);
}
function bodyUnLock () {
    setTimeout(function () {
        if (lockPadding.length > 0){
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        
        body.style.paddingRight = '0px';
        body.classList.remove('lock');

    }, timeout);

    unlock = false;
    setTimeout (function() {
        unlock = true;
    }, timeout);

}
