// NAV BACKGROUND ON WINDOW SCROLL
window.addEventListener("scroll", ()=>{
    const navBar = document.querySelector('nav');
    navBar.classList.toggle('navOnScroll', window.scrollY > 0)
})

// RESPONSIVE OPEN / CLOSE MENU BTN
const navMenu = document.querySelector(".nav__menu");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const openMenuBtn = document.querySelector("#open-menu-btn");

// Open Menu
openMenuBtn.addEventListener("click", ()=>{
    navMenu.style.display = "block";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
})

// Close Menu
closeMenuBtn.addEventListener("click", ()=>{
    navMenu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
})

// FAQs TOGGLE ON CLICK

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{

    faq.addEventListener("click", ()=>{
        faq.classList.toggle("open");
        const faqIcon = faq.querySelector(".faq i");

            if(faqIcon.className === "fa-solid fa-plus"){
                faqIcon.className = "fa-solid fa-minus";
            }else{
                faqIcon.className = "fa-solid fa-plus";
            }
    })

})

// SWIPER JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  //   WHEN WINDOW WIDTH >= 600
  breakpoints: {
      1024: {
          slidesPerView: 2,
      }
  }
  });



