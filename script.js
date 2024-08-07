const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
let fixedImg = document.querySelector(".fixed-image")
let elementContainer = document.querySelector(".element-container")

elementContainer.addEventListener('mouseenter',()=>{
    fixedImg.style.display = "block"
})
elementContainer.addEventListener('mouseleave',()=>{
    fixedImg.style.display = "none"
})

let elems = document.querySelectorAll(".elem");

elems.forEach((ele)=>{
    ele.addEventListener(`mouseenter`,()=>{
            let images = ele.getAttribute("data-image");
            fixedImg.style.backgroundImage = `url(${images})`
        })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const loader = document.getElementById('loader')
setTimeout(function(){
    loader.style.top = '-100%'
},4000)