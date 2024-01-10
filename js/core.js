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
  const betBurger = document.querySelector('.menu_burger')
  const menu = document.querySelector('.nav-main')
  const menuHeight = document.querySelector('.nav-main').scrollHeight
  betBurger.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
        menu.style.height = 0
        menu.classList.remove('active')
        
    } else{
        this.classList.add('active')
        menu.classList.add('active')
        menu.style.height = menuHeight + "px"

    }
})
document.querySelector(".menu_burger").classList.contains(".active")