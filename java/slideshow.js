window.onload = function() {
  const mySlides = document.getElementById('mySlides');
  var slidesArray = mySlides.getElementsByTagName('img');
  var size = slidesArray.length;

  const prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');

  let counter = 0;

  nextBtn.addEventListener('click', function() {

    if(counter == size - 1) return;
    slidesArray[counter].style.visibility="hidden";
    counter++;
    slidesArray[counter].style.visibility="visible";

  });

  prevBtn.addEventListener('click', function() {

    if (counter == 0) return;
    slidesArray[counter].style.visibility="hidden";
    counter--;
    slidesArray[counter].style.visibility="visible";
  });


}
