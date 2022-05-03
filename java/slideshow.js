const slideshowContainer = document.querySelector(".slideshow-container");
const myImages = document.querySelector(".mySlides img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");


let counter = 1;
const size = myImages[0].clientWidth;


slideshowContainer.style.transform = "translateX(" + ( - size * counter)+ px")";


nextBtn.addEventListener("click",()=>) {
  slideshowContainer.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideshowContainer.style.transform = "translateX(" + ( - size * counter)+ px)";
});


prevBtn.addEventListener("click",()=>) {
  slideshowContainer.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideshowContainer.style.transform = "translateX(" + ( - size * counter)+ px)";
});


slideshowContainer.addEventListener("transitionend", ()=> {
  if (myImages[counter].id === "lastClone") {
    slideshowContainer.style.transition = "none";
    counter = myImages.length -2;
    slideshowContainer.style.transform = "translateX(" + ( - size * counter)+ px)";
  }
  if (myImages[counter].id === "firstClone") {
    slideshowContainer.style.transition = "none";
    counter = myImages.length - counter;
    slideshowContainer.style.transform = "translateX(" + ( - size * counter)+ px)";
  }

});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].dot = dots[i].dot.replace("slideractive");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("slideractive");
}
