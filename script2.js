var slideIndex = 1; /*Slideshow*/
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
/*Slideshow Ende*/
/* Overlay
Open when someone clicks on the span element */
function openA() {
  document.getElementById("myA").style.width = "100%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeA() {
  document.getElementById("myA").style.width = "0%";
} 
function openB() {
  document.getElementById("myB").style.width = "100%";
}
function closeB() {
  document.getElementById("myB").style.width = "0%";
} 
function openC() {
  document.getElementById("myC").style.width = "100%";
}
function closeC() {
  document.getElementById("myC").style.width = "0%";
} 
function openD() {
  document.getElementById("myD").style.width = "100%";
}
function closeD() {
  document.getElementById("myD").style.width = "0%";
} 
function openE() {
  document.getElementById("myE").style.width = "100%";
}
function closeE() {
  document.getElementById("myE").style.width = "0%";
} 
/*Overlay Ende*/

function mymenudrop() { //damit es beim klick ausgefahren wird
  document.getElementById("menu").classList.toggle("show");
}
window.onclick = function(event) { //damit es beim click irgendwo auf dem Bildschirm eingefahren wird
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("menubar");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}