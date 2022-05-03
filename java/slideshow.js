const slideshowContainer = document.querySelector(".slideshow-container");
const myImages = document.querySelector(".mySlides");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");


let counter = 1;
const size = myImages[0].clientWidth;


slideshowContainer.style.transform = "translateX(" + ( - size * counter)+ px")";


nextBtn.addEventListener("click",()=>) {
  if (counter<=0) return;
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
