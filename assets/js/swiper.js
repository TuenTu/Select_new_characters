 import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

  const swiper = new Swiper(".mySwiper",{
    slidesPerView: 3,
    
    spaceBetween: 100,
    centeredSlides: true,
    loop: true})


let currentIndex  = -1

document.querySelector('.swiper').addEventListener('click', (e) => {
  const slideEl = e.target.closest('.swiper-slide');
  if (!slideEl) return;

  const index = Number(slideEl.getAttribute('data-index'));
  if (Number.isNaN(index)) return;
  if (currentIndex != index){
    const oldSlide = document.querySelector(".isActive")
    if (oldSlide){
      oldSlide.classList.remove("isActive")
      
    }

    
    slideEl.classList.add("isActive")
  }
  swiper.slideToLoop(index);
});



// swiperSlides.forEach((slide,i)=>{
//   slide.addEventListener("click", ()=>{
//     // для loop: true используем slideToLoop, чтобы корректно перейти кликнутому слою
//     swiper.slideToLoop(i, 600, false) // duration 600ms, no-steer onTransition
//     console.log(slide);
    
//   })
// })






