function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');

}

function button2Clicked() {
  document.getElementById('button-2').classList.toggle('was-clicked');
}

function windowLoaded() {
  console.log('loaded ok!'):
  document.getElementById('button-1').addEventListener('click', button1Clicked);
  document.getElementById('button-2').addEventListener('click', button2Clicked);

}

window.onload=windowLoaded;
