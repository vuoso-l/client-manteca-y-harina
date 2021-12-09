const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const dotContainer = document.querySelector(".dotContainer");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
btnPrev.addEventListener("click", () => {
  showSlides(slideIndex -= 1);
})

btnNext.addEventListener("click", () => {
  showSlides(slideIndex += 1);
})

function showSlides() {
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");  
  
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  else if (slideIndex < 1) {
    slideIndex = slides.length
    console.log(slideIndex);
  }
  
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  dots.forEach(dot => {
    dot.className = dot.className.replace(" active", "");
  });
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}